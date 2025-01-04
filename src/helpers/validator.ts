import {SurveyFormData, SurveyFormError} from "../types/types.ts";

const validator = {
    validateSurveyForm: (formData: SurveyFormData) => {
        const errors : Array<SurveyFormError> = [];
        if (formData.frontendFramework.length === 0) {
            errors.push({field: "frontendFramework", error: "Select at least one option"})
        }
        if (!formData.name) {
            errors.push({field: "name", error: "Fill in your name(or basically anything)"})
        }
        if (!formData.stateManager) {
            errors.push({field: "stateManager", error: "Select an option or type your choice"})
        }
        if (formData.cssFramework.length === 0) {
            errors.push({field: "cssFramework", error: "Select at least one option"})
        }

        return errors;
    }
}

Object.freeze(validator)
export default validator;
