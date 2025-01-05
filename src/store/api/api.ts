import {SurveyFormData} from "../../types/types.ts";
import axios from "axios";
import {Option} from "../../components/SelectInput/SelectInput.tsx";

const apiUrl = import.meta.env.VITE_API_URL || '';

const mapAnswer = (o : Option) => o.text;

const api = {
    postSurvey : async ({name, frontendFramework, stateManager, cssFramework} : SurveyFormData) => {
        const structuredData = {
            name: [name],
            frontendFramework: frontendFramework.map(mapAnswer),
            cssFramework: cssFramework.map(mapAnswer),
            stateManager: [stateManager]
        }
        return axios.post(`${apiUrl}/survey`, structuredData)
    },
    getSurveyResults : async () => {
        return axios.get(`${apiUrl}/results`)
    }
}

Object.freeze(api);
export default api;
