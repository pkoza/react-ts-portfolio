import {Option} from "../components/SelectInput/SelectInput.tsx";

export interface SurveyState {
    sent: boolean,
    formData: SurveyFormData,
    resultsData?: Record<keyof SurveyFormData, AggregatedAnswers>,
    surveyLoading: boolean,
    resultsLoading: boolean
}

export interface SurveyFormData {
    name: string,
    frontendFramework: Array<Option>,
    stateManager: string,
    cssFramework: Array<Option>
}

export interface AggregatedAnswers {
    values: Array<string>,
    counts: Array<number>
}

//validations
export interface SurveyFormError {
    field: keyof SurveyFormData,
    error: string
}


//Redux actions
export interface ActionUpdateSurveyForm {
    field: keyof SurveyFormData,
    value: SurveyFormData[keyof SurveyFormData]
}

export interface ActionToggleSurveyFormArrayItem {
    field: "frontendFramework" | "cssFramework",
    value: Option
}


