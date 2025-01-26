import {createAsyncThunk, createSlice, isRejected, PayloadAction} from "@reduxjs/toolkit";
import {ActionToggleSurveyFormArrayItem, ActionUpdateSurveyForm, SurveyState} from "../../types/types.ts";
import consts from "../../helpers/consts.ts";
import {RootState} from "../index.ts";
import Api from "../api/api.ts";
import {AxiosError} from "axios";
import messages from "../../helpers/messages.tsx";

const initialState : SurveyState = {
    formData: consts.emptySurveyFormData(),
    sent: false,
    surveyLoading: false,
    resultsLoading: false
}

export const postSurvey = createAsyncThunk(
    'survey/post',
    async (_, thunkAPI) => {
        try {
            const data = (thunkAPI.getState() as RootState).survey.formData;
            const response = await Api.postSurvey(data);
            return response.data;
        }
        catch(err) {
            const axiosError = err as AxiosError;
            return thunkAPI.rejectWithValue(axiosError.message + "\n" + (axiosError.response?.data as {message: string})?.message || '');
        }
    }
)

export const fetchResults = createAsyncThunk(
    'results/get',
    async (_, thunkAPI) => {
        try {
            const response = await Api.getSurveyResults();
            return response.data;
        }
        catch(err) {
            const axiosError = err as AxiosError;
            return thunkAPI.rejectWithValue(axiosError.message + "\n" + (axiosError.response?.data as {message: string})?.message || '');
        }
    }
)

const surveySlice = createSlice({
    name: "survey",
    initialState,
    reducers: {
        updateSurveyFormData: (state, {payload}: PayloadAction<ActionUpdateSurveyForm>) => {
            // @ts-ignore
            state.formData[payload.field] = payload.value
        },
        toggleSurveyFormArrayItem: (state, {payload} : PayloadAction<ActionToggleSurveyFormArrayItem>) => {
            const itemArray = state.formData[payload.field];
            state.formData[payload.field] = itemArray.filter((o) => o.id !== payload.value.id)
            if (state.formData[payload.field].length === itemArray.length) {
                state.formData[payload.field] = [...itemArray, payload.value]
            }
        },
        resetSurveyFormData: (state) => {
            state.formData = consts.emptySurveyFormData()
        },
        resetResultsData: (state) => {
            state.resultsData = undefined
        },
        setSurveySent: (state, {payload} : PayloadAction<boolean>) => {
            state.sent = payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(postSurvey.fulfilled, (state) => {
                state.sent = true;
                state.formData = consts.emptySurveyFormData();
                state.surveyLoading = false
            }).addCase(fetchResults.fulfilled, (state, action) => {
                state.resultsData = action.payload;
                state.resultsLoading = false;
            }).addCase(postSurvey.pending, (state, _) => {
                state.surveyLoading = true;
            }).addCase(fetchResults.pending, (state, _) => {
                state.resultsLoading = true;
            }).addCase(postSurvey.rejected, (state, _) => {
                state.surveyLoading = false;
            }).addCase(fetchResults.rejected, (state, _) => {
                state.resultsLoading = false;
            }).addMatcher(isRejected, (_, action) => {
                messages.error(action.payload as string)
            })
    }
})

export default surveySlice.reducer;

export const {
    updateSurveyFormData,
    resetSurveyFormData,
    toggleSurveyFormArrayItem,
    setSurveySent ,
    resetResultsData} = surveySlice.actions;
