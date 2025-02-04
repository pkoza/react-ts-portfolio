import React, {useEffect, useMemo, useState} from "react";
import {Link} from "react-router-dom";
import {ArrowRight} from "react-feather";
import TextInput from "../../components/TextInput/TextInput.tsx";
import {AppDispatch, RootState} from "../../store";
import {useDispatch, useSelector} from "react-redux";
import {
    postSurvey,
    resetSurveyFormData,
    toggleSurveyFormArrayItem,
    updateSurveyFormData
} from "../../store/slices/SurveySlice.ts";
import SelectInput, {Option} from "../../components/SelectInput/SelectInput.tsx";
import consts from "../../helpers/consts.ts";
import {SurveyFormError} from "../../types/types.ts";
import validator from "../../helpers/validator.ts";
import Header from "../../components/Header/Header.tsx";
import Spinner from "../../components/Spinner/Spinner.tsx";

const filterOptions = (options: Array<Option>, value: string) => value ? options.filter((o) => o.text.toLowerCase().includes(value.toLowerCase())) : options;

const Survey: React.FC = () => {
    const dispatch: AppDispatch = useDispatch()
        //selected values stored in central state
        , {formData, sent, surveyLoading: loading} = useSelector((state: RootState) => state.survey)
        //controlled input values for search, not needed in central state
        , [frameworkValue, setFrameworkValue] = useState("")
        , [cssValue, setCssValue] = useState("")
        , frameworkOptionsFiltered = useMemo(() => filterOptions(consts.frameworkDefaultOptions, frameworkValue), [frameworkValue])
        , cssOptionsFiltered = useMemo(() => filterOptions(consts.cssDefaultOptions, cssValue), [cssValue])
        , managerOptionsFiltered = useMemo(() => filterOptions(consts.managerDefaultOptions, formData.stateManager), [formData.stateManager])
        , [errors, setErrors] = useState([] as Array<SurveyFormError>)

    //Works for both add and delete since we use toggle function
    const handleSelectMultiOption = (field: "frontendFramework" | "cssFramework") => (o: Option) => dispatch(toggleSurveyFormArrayItem({field, value: o}))
    const handleSelectStateManager = (o: Option) => dispatch(updateSurveyFormData({field: "stateManager", value: o.text}))

    const handleSubmit = () => {
        const validation = validator.validateSurveyForm(formData);
        setErrors(validation);
        !validation.length && dispatch(postSurvey())
    }
    const fieldErrors = (name: string) => {
        const fieldErrors = errors.filter(err => err.field === name);
        return fieldErrors.length ? fieldErrors.map(err => err.error).join(', ') : undefined
    }

    useEffect(() => {
        return () => {
            dispatch(resetSurveyFormData())
        };
    }, []);

    return <div className="min-h-screen text-gray-800 flex flex-col">
        {/* Header */}
        <Header title={{text: "Survey"}} backButton={{text: "Home", link: "/"}} />

        {/* Form Section */}
        <main className="flex-grow container mx-auto p-6 pt-12 flex flex-col items-center">
            {!sent ?
            <div className="w-full max-w-lg space-y-6">
                {/* Input Fields */}
                <div>
                    <TextInput
                        value={formData.name}
                        onChange={(e) => dispatch(updateSurveyFormData({field: "name", value: e.target.value}))}
                        id={"name"}
                        label={"Username"}
                        errorText={fieldErrors("name")}
                    />
                </div>

                <div>
                    <SelectInput
                        multiple={true}
                        value={frameworkValue}
                        multipleSelectedValues={formData.frontendFramework}
                        onChange={(e) => setFrameworkValue(e.target.value)}
                        options={frameworkOptionsFiltered}
                        onSelect={handleSelectMultiOption("frontendFramework")}
                        onMultipleDelete={handleSelectMultiOption("frontendFramework")}
                        id={"framework"}
                        label={"Favorite frontend framework"}
                        errorText={fieldErrors("frontendFramework")}
                    />
                </div>

                <div>
                    <SelectInput
                        value={formData.stateManager}
                        onChange={(e) => dispatch(updateSurveyFormData({field: "stateManager", value: e.target.value}))}
                        options={managerOptionsFiltered}
                        onSelect={handleSelectStateManager}
                        id={"stateManager"}
                        label={"Preferred state manager"}
                        errorText={fieldErrors("stateManager")}
                    />
                </div>

                <div>
                    <SelectInput
                        multiple={true}
                        value={cssValue}
                        multipleSelectedValues={formData.cssFramework}
                        onChange={(e) => setCssValue(e.target.value)}
                        options={cssOptionsFiltered}
                        onSelect={handleSelectMultiOption("cssFramework")}
                        onMultipleDelete={handleSelectMultiOption("cssFramework")}
                        id={"css"}
                        label={"Favorite css framework"}
                        errorText={fieldErrors("cssFramework")}
                    />
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full min-h-12 bg-primary text-white py-3 rounded-md shadow-lg hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
                    onClick={handleSubmit}
                    disabled={loading}
                >
                    {loading ? <Spinner inButton /> : "Send Form"}
                </button>
            </div>
                :
            <div className="flex flex-col items-center justify-center text-center">
                <h2 className="text-xl font-bold text-gray-800 mb-4">
                    Your answers were submitted.
                </h2>
                <p className="text-gray-600">
                    Thank you for your time.
                </p>
            </div>
            }

            {/* Results Link */}
            {!sent ?
                <Link to="/results" className="mt-6 text-secondary hover:text-primary flex items-center space-x-2">
                    <span>Skip to Results</span>
                    <ArrowRight size={18} />
                </Link>
                :
                <Link
                    to="/results"
                    className="mt-6 bg-secondary text-white py-3 px-6 rounded-md shadow-md hover:bg-opacity-90 text-center"
                >
                    View Results
                </Link>
            }
        </main>
    </div>
};

export default Survey;
