import {SurveyFormData} from "../../types/types.ts";
import axios from "axios";
import {Option} from "../../components/SelectInput/SelectInput.tsx";

const mapAnswer = (o : Option) => o.text;

const api = {
    postSurvey : async ({name, frontendFramework, stateManager, cssFramework} : SurveyFormData) => {
        const normalizedData = {
            name: [name],
            frontendFrameworkk: frontendFramework.map(mapAnswer),
            cssFramework: cssFramework.map(mapAnswer),
            stateManager: [stateManager]
        }
        return axios.post("http://localhost:5000/api/survey", normalizedData)
    }
}

Object.freeze(api);
export default api;
