import React from "react";

export interface SpinnerProps {
    size?: number,
    thickness?: number,
    inButton?: boolean
}
const Spinner: React.FC<SpinnerProps> = ({size = 20, thickness = 4,  inButton}) =>
    <div className={`flex items-center justify-center h-${inButton ? 'full' : 'screen'}`}>
        <div
            className={`border-4 border-t-transparent rounded-full animate-spin`}
            style={{
                width: `${size}px`,
                height: `${size}px`,
                borderWidth: `${thickness}px`,
                borderColor: inButton ? 'white' : '#cccccc',
                borderTopColor: 'transparent',
            }} ></div>
    </div>

export default Spinner;
