import React, {useEffect} from "react";
import {fetchResults, resetResultsData} from "../../store/slices/SurveySlice.ts";
import {AppDispatch, RootState} from "../../store";
import {useDispatch, useSelector} from "react-redux";
import ChartCarousel from "./ChartCarousel.tsx";
import Header from "../../components/Header/Header.tsx";

const unit = "Votes"

const ResultsPage: React.FC = () => {

    const dispatch: AppDispatch = useDispatch()
        , results = useSelector((state: RootState) => state.survey.resultsData)

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
                {results && <ChartCarousel
                  data={[
                      {title:"Most popular frontend js frameworks", labels: results.frontendFramework.values, dataset: results.frontendFramework.counts, unit, key:1},
                      {title:"Most popular css frameworks", labels: results.cssFramework.values, dataset: results.cssFramework.counts, unit, key:2},
                      {title:"Most popular state manager", labels: results.stateManager.values, dataset: results.stateManager.counts, unit, key:3},
                  ]}
                />}
            </main>
        </div>
    );
};

export default ResultsPage;
