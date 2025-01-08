import React, {useState} from "react";
import BarChart, {BarChartProps} from "../../components/BarChart/BarChart.tsx";
import {ChevronLeft, ChevronRight} from "react-feather";

export interface ChartCarouselProps {
    data: Array<BarChartProps & {key: string | number}>
}

const ChartCarousel : React.FC<ChartCarouselProps> = ({data}) => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex(currentIndex === 0 ? data.length - 1 : currentIndex - 1);
    };

    const nextSlide = () => {
        setCurrentIndex(currentIndex === data.length - 1 ? 0 : currentIndex + 1);
    };

    return (
        <div className="relative w-full mx-auto overflow-hidden h-[calc(100vh-4rem)]">
            {/* Slides */}
            <div className="flex transition-transform duration-700 h-full" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {data.map((slide) => (
                    <div key={slide.key} className="w-full flex-shrink-0 flex items-center justify-center h-full pt-8 pb-12 px-16 md:pl-20 md:pr-24">
                        <BarChart
                            title={slide.title}
                            labels={slide.labels}
                            unit={slide.unit}
                            dataset={slide.dataset}
                        />
                    </div>
                ))}
            </div>

            {/* Arrows */}
            <button
                onClick={prevSlide}
                className="absolute top-1/2 left-4 -translate-y-1/2 text-gray-400 p-2 hover:text-gray-800 focus:outline-none"
            >
                <ChevronLeft size={36}/>
            </button>
            <button
                onClick={nextSlide}
                className="absolute top-1/2 right-4 -translate-y-1/2 text-gray-400 p-2 hover:text-gray-800 focus:outline-none"
            >
                <ChevronRight size={36}/>
            </button>

            {/* Dots Navigation */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                {data.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-3 h-3 rounded-full ${
                            index === currentIndex
                                ? 'bg-gray-800'
                                : 'bg-gray-400'
                        }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default ChartCarousel;
