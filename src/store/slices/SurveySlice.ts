import {createAsyncThunk, createSlice, isRejected, PayloadAction} from "@reduxjs/toolkit";
import {ActionToggleSurveyFormArrayItem, ActionUpdateSurveyForm, SurveyState} from "../../types/types.ts";
import consts from "../../helpers/consts.ts";
import {RootState} from "../index.ts";
import Api from "../api/api.ts";
import {AxiosError} from "axios";

const initialState : SurveyState = {
    formData: consts.getEmptySurveyFormData(),
    sent: false
}

export const postSurvey = createAsyncThunk(
    'survey/post',
    async (_, thunkAPI) => {
        try {
            const data = (thunkAPI.getState() as RootState).survey.formData;
            console.log(data);
            return Api.postSurvey(data);
        }
        catch(err) {
            console.log("pess", err)
            thunkAPI.rejectWithValue((err as AxiosError).response?.data?.toString());
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
            state.formData = consts.getEmptySurveyFormData()
        },
        setSurveySent: (state, {payload} : PayloadAction<boolean>) => {
            state.sent = payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(postSurvey.fulfilled, (state) => {
                state.sent = true;
            }).addMatcher(isRejected, (_, action) => {
            })
    }
})

export default surveySlice.reducer;

export const { updateSurveyFormData, resetSurveyFormData, toggleSurveyFormArrayItem, setSurveySent } = surveySlice.actions;
