import {Option} from "../components/SelectInput/SelectInput.tsx";

export interface SurveyState {
    sent: boolean,
    formData: SurveyFormData
}

export interface SurveyFormData {
    name: string,
    frontendFramework: Array<Option>,
    stateManager: string,
    cssFramework: Array<Option>
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

