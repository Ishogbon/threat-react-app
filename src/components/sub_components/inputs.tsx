import React from 'react';

interface InputProps {
    inputType: string
    placeholder: string
}

interface SubmitProps {
    value: string
}

export const BoldInput: React.FunctionComponent<InputProps> = ({ inputType, placeholder }: InputProps) => {
    return (
        <input type={inputType} className='w-11/12 border-purple-500 border-2 rounded-md p-3 my-6 outline-none' placeholder={placeholder}/>
    );
};

export const BorderlessInput: React.FunctionComponent<InputProps> = ({ inputType, placeholder }: InputProps) => {
    return (
        <input type={inputType} className='w-11/12 shadow-md rounded-md p-3 my-6 outline-none' placeholder={placeholder}/>
    );
};

export const BoldSubmit: React.FunctionComponent<SubmitProps> = ({ value }: SubmitProps) => {
    return (
        <input type='submit' className='w-11/12 text-white bg-blue-600 rounded-md p-3 my-6 cursor-pointer outline-none' value={value}/>
    );
};
