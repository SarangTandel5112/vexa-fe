"use client";

import React, { useState } from "react";
import {
    InputFieldProps,
    TextareaFieldProps,
    SelectFieldProps,
} from "@/components/types";
import {
    PasswordToggleIcon,
    EmailIcon,
    PasswordIcon,
    UserIcon,
    DocumentIcon,
} from "@/components/icons";

export function InputField({
    type = "text",
    placeholder,
    name,
    value,
    onChange,
    onBlur,
    icon,
    showPasswordToggle = false,
    disabled = false,
    className = "",
}: InputFieldProps) {
    const [showPassword, setShowPassword] = useState(false);
    const [inputType, setInputType] = useState(type);

    const togglePassword = () => {
        setShowPassword(!showPassword);
        setInputType(showPassword ? "password" : "text");
    };

    const PasswordToggleButton = () => (
        <button
            type="button"
            onClick={togglePassword}
            className="text-[#E95D3C] cursor-pointer"
        >
            <PasswordToggleIcon stroke="#E95D3C" />
        </button>
    );

    return (
        <div className={`relative ${className}`}>
            <div
                className={`flex items-center gap-2 px-3 py-3 border border-[#776F69]/28 rounded-2xl bg-white/20 ${
                    disabled ? "opacity-60 cursor-not-allowed" : ""
                }`}
            >
                {icon && icon}
                <input
                    type={inputType}
                    name={name}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                    disabled={disabled}
                    className="flex-1 bg-transparent outline-none font-sf-pro text-sm text-[#0A0A0A] placeholder:text-[#776F69] disabled:cursor-not-allowed"
                />
                {type === "password" && showPasswordToggle && !disabled && (
                    <PasswordToggleButton />
                )}
            </div>
        </div>
    );
}

export function TextareaField({
    placeholder,
    value,
    onChange,
    rows = 6,
    className = "",
}: TextareaFieldProps) {
    return (
        <div
            className={`px-3 py-3 border border-[#776F69]/28 rounded-2xl bg-white/20 ${className}`}
        >
            <textarea
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                rows={rows}
                className="w-full bg-transparent outline-none font-sf-pro text-sm text-[#0A0A0A] placeholder:text-[#776F69] resize-none"
            />
        </div>
    );
}

export function SelectField({
    placeholder,
    value,
    onChange,
    options,
    icon,
    className = "",
}: SelectFieldProps) {
    const DropdownIcon = () => (
        <svg
            width="28"
            height="28"
            viewBox="0 0 28 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M7 11L14 18L21 11"
                stroke="#E95D3C"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );

    return (
        <div className={`relative ${className}`}>
            <div className="flex items-center gap-2 px-3 py-3 border border-[#776F69]/28 rounded-2xl bg-white/20">
                {icon && icon}
                <select
                    value={value}
                    onChange={onChange}
                    className="flex-1 bg-transparent outline-none font-sf-pro text-sm text-[#0A0A0A] appearance-none cursor-pointer"
                >
                    {placeholder && (
                        <option value="" className="text-[#776F69]">
                            {placeholder}
                        </option>
                    )}
                    {options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
                <DropdownIcon />
            </div>
        </div>
    );
}

// Common icons for form fields
export const FormIcons = {
    Email: () => <EmailIcon />,
    Password: () => <PasswordIcon />,
    User: () => <UserIcon />,
    Document: () => <DocumentIcon />,
};
