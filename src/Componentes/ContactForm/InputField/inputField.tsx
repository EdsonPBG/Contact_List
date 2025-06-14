import React from 'react';
import styleForm from "../meuForm.module.css"; 

interface InputFieldProps {
    label: string;
    id: string;
    name: string;
    type: string;
    placeholder: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    required: boolean;
}

export default function InputField({
    label,
    id,
    name,
    type,
    placeholder,
    value,
    onChange,
    required = false,
}: InputFieldProps) {
  return (
        <div className={styleForm.inputGroup}>
        <label htmlFor={id}>{label}: </label>
        <input
            type={type}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            required={required}
            className={styleForm.inputField}
        />
        </div>
    );
}