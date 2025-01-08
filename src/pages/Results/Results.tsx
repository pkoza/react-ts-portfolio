import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import {ArrowLeft} from "react-feather";
import {fetchResults, resetResultsData} from "../../store/slices/SurveySlice.ts";
import {AppDispatch, RootState} from "../../store";
import {useDispatch, useSelector} from "react-redux";
import ChartCarousel from "./ChartCarousel.tsx";

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
        <div className="min-h-screen text-gray-800 flex flex-col">
            {/* Header */}
            <header className="p-4 flex items-center bg-white shadow relative">
                {/* Back to Home Link */}
                <Link to="/" className="text-primary hover:text-secondary flex items-center space-x-2">
                    <ArrowLeft size={18} />
                    <span>Home</span>
                </Link>
                <h1 className="absolute left-1/2 transform -translate-x-1/2 text-2xl font-bold text-primary">
                    Results
                </h1>
            </header>

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
