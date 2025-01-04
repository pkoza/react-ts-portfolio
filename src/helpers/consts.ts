import {SurveyFormData} from "../types/types.ts";

const consts = {
    getEmptySurveyFormData: () : SurveyFormData => ({
        frontendFramework: [],
        cssFramework: [],
        name: "",
        stateManager: ""
    }),
    frameworkDefaultOptions: [
        {id:1, text:'React'},
        {id:2, text:'Vue'},
        {id:3, text:'Svelte'},
        {id:4, text:'Angular'}
    ],
    managerDefaultOptions: [
        {id:1, text:'Redux'},
        {id:2, text:'Recoil'},
        {id:3, text:'Zustand'},
        {id:4, text:'Hookstate'},
        {id:5, text:'React Context'}
    ],
    cssDefaultOptions: [
        {id:1, text:'Tailwind'},
        {id:2, text:'Bootstrap'},
        {id:3, text:'Materialize'},
        {id:4, text:'Foundation'},
        {id:5, text:'Bulma'},
        {id:6, text:'Skeleton'}
    ]
}

Object.freeze(consts)
export default consts;
