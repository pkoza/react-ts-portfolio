import React, {useState} from "react";
import BarChart from "../../components/BarChart/BarChart.tsx";
import {ChevronLeft, ChevronRight} from "react-feather";

const Carousel : React.FC = () => {
    const slides = [
        { id: 1, image: 'https://via.placeholder.com/800x400?text=Slide+1', caption: 'Slide 1' },
        { id: 2, image: 'https://via.placeholder.com/800x400?text=Slide+2', caption: 'Slide 2' },
        { id: 3, image: 'https://via.placeholder.com/800x400?text=Slide+3', caption: 'Slide 3' },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? slides.length - 1 : prevIndex - 1
        );
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="relative w-full mx-auto overflow-hidden">
            {/* Slides */}
            <div
                className="flex transition-transform duration-700"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {slides.map((slide) => (
                    <div key={slide.id} className="w-full flex-shrink-0 flex items-center justify-center h-screen bg-gray-100 p-16 md:pl-32 md:pr-24">
                        <BarChart
                            title={"Most popular css frameworks"}
                            labels={["asd", "sdf", "sfd", "wer"]}
                            unit={"cece"}
                            dataset={[8,4,2,1]}
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
                {slides.map((_, index) => (
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

export default Carousel;
