import { configureStore } from "@reduxjs/toolkit";
import surveyReducer from "./slices/SurveySlice.ts";

const store = configureStore({reducer: {survey: surveyReducer}})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
