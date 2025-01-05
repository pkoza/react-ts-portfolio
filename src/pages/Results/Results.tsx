import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "react-feather";
import BarChart from "../../components/BarChart/BarChart.tsx";
import {fetchResults, resetResultsData} from "../../store/slices/SurveySlice.ts";
import {AppDispatch, RootState} from "../../store";
import {useDispatch, useSelector} from "react-redux";

const unit = "Votes"
const ResultsPage: React.FC = () => {
    const dispatch: AppDispatch = useDispatch()
        , results = useSelector((state: RootState) => state.survey.resultsData)
console.log(results);
    useEffect(() => {
        dispatch(fetchResults())

        return () => {
            dispatch(resetResultsData())
        };
    }, []);

    return (
        <div className="min-h-screen bg-gray-100 text-gray-800 flex flex-col">
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

            {results &&
                <main className="flex-grow container mx-auto px-3 py-6 grid grid-cols-2 grid-rows-2 gap-6">
                    {/* Box 1 */}
                    <div className="bg-white shadow-md rounded-md p-4 flex items-center justify-center">
                        <BarChart
                            title={"Most popular frontend js frameworks"}
                            labels={results.frontendFramework.values}
                            unit={unit}
                            dataset={results.frontendFramework.counts}
                        />
                    </div>

                    {/* Box 2 */}
                    <div className="bg-white shadow-md rounded-md p-4 flex items-center justify-center">
                        <BarChart
                            title={"Most popular css frameworks"}
                            labels={results.cssFramework.values}
                            unit={unit}
                            dataset={results.cssFramework.counts}
                        />
                    </div>

                    {/* Box 3 */}
                    <div className="bg-white shadow-md rounded-md p-4 flex items-center justify-center">
                        <BarChart
                            title={"Most popular state managers"}
                            labels={results.stateManager.values}
                            unit={unit}
                            dataset={results.stateManager.counts}
                        />
                    </div>
                </main>
            }
        </div>
    );
};

export default ResultsPage;
