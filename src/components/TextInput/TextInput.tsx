import React, { useState } from 'react';
import type { FC } from 'react';
import { v4 as uuidv4 } from 'uuid';

export interface TextInputProps {
    value: string;
    onChange: (arg: React.ChangeEvent<HTMLInputElement>) => void;
    label?: string;
    id: string;
    errorText?: string;
    password?: boolean;
}
const TextInput: FC<TextInputProps> = ({
                                           value,
                                           onChange,
                                           id,
                                           label,
                                           errorText,
                                           password
                                       }) => {
    const [inputId] = useState(id || uuidv4());
    const [isPasswordVisible, setPasswordVisible] = useState(false);

    return <div className="relative inline-block w-full">
        <input
            type={password && !isPasswordVisible ? "password" : "text"}
            id={inputId}
            value={value}
            onChange={onChange}
            placeholder={" "}
            className={`block w-full px-4 py-2 border ${errorText ? 'border-red-500' : 'border-customBorderColor'} rounded-md shadow-sm focus:outline-none focus:ring-2 focus:border-customBorderFocusColor peer`}
        />
        {password && !!value?.length && <button
          type="button"
          onClick={() => setPasswordVisible(!isPasswordVisible)}
          className="absolute inset-y-0 right-0 flex items-center px-2"
        >
            {isPasswordVisible ?
                (
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="fill-current text-customBorderColor w-5 h-5" >
                        <path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                        <path d="M21.894 11.553C19.736 7.236 15.904 5 12 5c-3.903 0-7.736 2.236-9.894 6.553a1 1 0 0 0 0 .894C4.264 16.764 8.096 19 12 19c3.903 0 7.736-2.236 9.894-6.553a1 1 0 0 0 0-.894zM12 17c-2.969 0-6.002-1.62-7.87-5C5.998 8.62 9.03 7 12 7c2.969 0 6.002 1.62 7.87 5-1.868 3.38-4.901 5-7.87 5z" />
                        <line x1="6" y1="6" x2="18" y2="18" stroke="currentColor" strokeWidth="2" />
                    </svg>
                )
                :
                (
                    <svg viewBox="0 0 24 24" className="fill-customEyeColor w-5 h-5" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                        <path d="M21.894 11.553C19.736 7.236 15.904 5 12 5c-3.903 0-7.736 2.236-9.894 6.553a1 1 0 0 0 0 .894C4.264 16.764 8.096 19 12 19c3.903 0 7.736-2.236 9.894-6.553a1 1 0 0 0 0-.894zM12 17c-2.969 0-6.002-1.62-7.87-5C5.998 8.62 9.03 7 12 7c2.969 0 6.002 1.62 7.87 5-1.868 3.38-4.901 5-7.87 5z"/>
                    </svg>
                )}
        </button>}
        <label
            htmlFor={inputId}
            className="absolute left-4 -top-2.5 text-gray-500 text-sm bg-white px-1 transition-all duration-200 ease-in-out peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm"
        >
            {label}
        </label>
        {errorText && <div className="absolute -bottom-4 left-0 w-full">
          <p className="text-red-500 text-xs px-4">{errorText}</p>
        </div>}
    </div>;
};
export default TextInput;
