import React, {useEffect} from "react";
import {fetchResults, resetResultsData} from "../../store/slices/SurveySlice.ts";
import {AppDispatch, RootState} from "../../store";
import {useDispatch, useSelector} from "react-redux";
import ChartCarousel from "./ChartCarousel.tsx";
import Header from "../../components/Header/Header.tsx";
import Spinner from "../../components/Spinner/Spinner.tsx";
import consts from "../../helpers/consts.ts";

const ResultsPage: React.FC = () => {

    const dispatch: AppDispatch = useDispatch()
        , {resultsData: results, resultsLoading: loading} = useSelector((state: RootState) => state.survey)
        , unit = consts.chartUnit

    useEffect(() => {
        dispatch(fetchResults())

        return () => {
            dispatch(resetResultsData())
        };
    }, []);

    return (
        <div className="h-screen flex flex-col">
            {/* Header */}
            <Header title={{text: "Results"}} backButton={{text: "Home", link: "/"}} />

            <main>
                {loading ?
                    <Spinner size={70} thickness={5}/>
                    :
                    results && <ChartCarousel
                        data={[
                            {title:"Most popular frontend js frameworks", labels: results.frontendFramework.values, dataset: results.frontendFramework.counts, unit, key:1},
                            {title:"Most popular css frameworks", labels: results.cssFramework.values, dataset: results.cssFramework.counts, unit, key:2},
                            {title:"Most popular state manager", labels: results.stateManager.values, dataset: results.stateManager.counts, unit, key:3},
                        ]}
                    />
                }
            </main>
        </div>
    );
};

export default ResultsPage;
