import React, { useRef, useState } from 'react';
import type { FC } from 'react';
import { v4 as uuidv4 } from 'uuid';

export interface Option {
    id: number | string;
    text: string;
}
export interface SelectInputProps {
    value: string;
    onChange: (arg: React.ChangeEvent<HTMLInputElement>) => void;
    options: Array<Option>;
    onSelect: (arg: Option) => void;
    multiple?: boolean;
    multipleSelectedValues?: Array<Option>;
    onMultipleDelete?: (arg: Option) => void;
    multipleMax?: number;
    label?: string;
    id: string;
    errorText?: string;
}
const SelectInput: FC<SelectInputProps> = ({
                                               value,
                                               onChange,
                                               options,
                                               onSelect,
                                               multiple,
                                               multipleSelectedValues,
                                               onMultipleDelete,
                                               id,
                                               label,
                                               errorText
                                           }) => {
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [inputId] = useState(id || uuidv4());
    if (!options) {
        console.error('Options not provided');
        return undefined;
    }
    if (multiple) {
        const inputRef = useRef<HTMLInputElement>(document.createElement('input'));
        const hideTimer = useRef(0);
        const handleMultiSelect = (option: Option): void => {
            clearTimeout(hideTimer.current);
            onSelect(option);
            inputRef.current.focus();
        };
        const handleMultiDelete = (opt: Option): void => {
            clearTimeout(hideTimer.current);
            onMultipleDelete && onMultipleDelete(opt);
            inputRef.current.focus();
        };
        const hasSelectedValues = !!multipleSelectedValues?.length;
        const selectedIds = multipleSelectedValues?.map(o => o.id) ?? [];
        return <div className="relative inline-block w-full">
            <div className={`flex flex-wrap items-center border ${errorText ? 'border-red-500' : 'border-customBorderColor'} rounded-md shadow-sm focus-within:ring-2 focus-within:ring-customBorderFocusColor focus-within:border-customBorderFocusColor px-2 py-1${label && hasSelectedValues ? ' pt-3' : ''}`}>
                {label && <label
                  htmlFor={inputId}
                  className="absolute left-4 -top-2.5 text-gray-500 text-sm bg-white px-1"
                >{label}</label>}
                {/* item */}
                {hasSelectedValues && multipleSelectedValues.map((opt) =>
                    <div onClick={() => handleMultiDelete(opt)} key={opt.id} className="flex items-center space-x-2 bg-customTagColor text-blue-800 text-sm font-medium px-2 py-1 rounded-full mr-2 mb-1">
                        <span className="flex items-center">{opt.text}</span>
                        <button className="ml-1 text-blue-500 hover:text-blue-600 focus:outline-none">
                            <svg className="h-3 w-3 text-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                <path fillRule="evenodd" d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" clipRule="evenodd"/>
                            </svg>
                        </button>
                    </div>
                )}
                <input
                    onBlur={() => {
                        hideTimer.current = window.setTimeout(() => {
                            setShowSuggestions(false);
                            hideTimer.current = 0;
                        }, 200);
                    }}
                    onFocus={() => setShowSuggestions(true)}
                    type="text"
                    value={value}
                    onChange={onChange}
                    ref={inputRef}
                    id={inputId}
                    className="flex-grow focus:outline-none px-1 py-1 w-full"
                    placeholder="Select options, type to narrow down"/>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                    <svg className="h-4 w-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 12a.75.75 0 01-.53-.22l-4.25-4.25a.75.75 0 111.06-1.06L10 10.44l3.72-3.72a.75.75 0 111.06 1.06l-4.25 4.25A.75.75 0 0110 12z" clipRule="evenodd"/>
                    </svg>
                </div>
            </div>
            {errorText && <div className="absolute -bottom-4 left-0 w-full">
              <p className="text-red-500 text-xs px-4">{errorText}</p>
            </div>}
            {(showSuggestions && !!(options?.length)) &&
              <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded-md shadow-lg mt-1 max-h-60 overflow-auto">
                  {options.map(opt =>
                      <li
                          className={`px-4 py-2 cursor-pointer hover:bg-gray-100${selectedIds.includes(opt.id) ? ' bg-blue-100' : ''}`}
                          onClick={() => handleMultiSelect(opt)}
                          key={opt.id}
                      >{opt.text}</li>
                  )}
              </ul>
            }
        </div>;
    } else {
        return <div className="relative inline-block w-full">
            {label && <label
              htmlFor={inputId}
              className="absolute left-4 -top-2.5 text-gray-500 text-sm bg-white px-1"
            >{label}</label>}
            <input
                className={`block w-full px-4 py-2 border ${errorText ? 'border-red-500' : 'border-customBorderColor'} rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-customBorderFocusColor focus:border-customBorderFocusColor`}
                onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                onFocus={() => setShowSuggestions(true)}
                type="text"
                value={value}
                onChange={onChange}
                placeholder={"Select option, or type your own"}
                id={inputId}
            />

            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <svg className="h-4 w-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 12a.75.75 0 01-.53-.22l-4.25-4.25a.75.75 0 011.06-1.06L10 10.44l3.72-3.72a.75.75 0 111.06 1.06l-4.25 4.25A.75.75 0 0110 12z" clipRule="evenodd"/>
                </svg>
            </div>
            {errorText && <div className="absolute -bottom-4 left-0 w-full">
              <p className="text-red-500 text-xs px-4">{errorText}</p>
            </div>}
            {(showSuggestions && !!(options?.length)) &&
              <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded-md shadow-lg mt-1 max-h-60 overflow-auto">
                  {options.map(option => <li
                      className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                      onClick={() => onSelect(option)}
                      key={option.id}
                  >{option.text}</li>)}
              </ul>}
        </div>;
    }
};
export default SelectInput;
