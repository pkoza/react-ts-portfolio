import React, {useMemo} from "react";
import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend,
    Title,
    ChartOptions, ChartData,
} from "chart.js";
import { Bar } from "react-chartjs-2";

// Register required Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend, Title);

export interface BarChartProps {
    title: string,
    labels: Array<string>,
    dataset: Array<number>,
    unit: string
}

const BarChart: React.FC<BarChartProps> = ({ title, labels, dataset, unit }: BarChartProps) => {

    const data: ChartData<"bar", number[], string> = useMemo(() => ({
        labels,
        datasets: [
            {
                label: unit,
                data: dataset,
                backgroundColor: [
                    "rgba(255, 99, 132, 0.2)",
                    "rgba(54, 162, 235, 0.2)",
                    "rgba(255, 206, 86, 0.2)",
                    "rgba(75, 192, 192, 0.2)",
                    "rgba(153, 102, 255, 0.2)",
                    "rgba(255, 159, 64, 0.2)",
                ],
                borderColor: [
                    "rgba(255, 99, 132, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 206, 86, 1)",
                    "rgba(75, 192, 192, 1)",
                    "rgba(153, 102, 255, 1)",
                    "rgba(255, 159, 64, 1)",
                ],
                borderWidth: 1,
            },
        ],
    }), [labels, unit, dataset]);

    const options: ChartOptions<"bar"> = useMemo(()=> ({
        responsive: true,
        plugins: {
            legend: {
                display: false
            },
            title: {
                display: true,
                text: title,
                font: {
                    size: 18,
                    weight: "bold",
                },
                padding: {
                    top: 10,
                    bottom: 20,
                },
            },
            tooltip: {
                enabled: true,
            },
        },
        scales: {
            y: {
                ticks: {
                    callback: function(value) {
                        return (value as number) % 1 === 0 ? value : undefined;
                    },
                },
                beginAtZero: true,
            },
        },
    }),[title])

    return <Bar data={data} options={options} />;
};

export default BarChart;
