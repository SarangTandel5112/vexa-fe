'use client'

import React, { useState } from 'react'
import { InputFieldProps, TextareaFieldProps, SelectFieldProps } from '@/components/types'

export function InputField({ 
  type = 'text', 
  placeholder, 
  value, 
  onChange, 
  icon, 
  showPasswordToggle = false, 
  disabled = false,
  className = '' 
}: InputFieldProps) {
  const [showPassword, setShowPassword] = useState(false)
  const [inputType, setInputType] = useState(type)

  const togglePassword = () => {
    setShowPassword(!showPassword)
    setInputType(showPassword ? 'password' : 'text')
  }

  const PasswordToggleIcon = () => (
    <button type="button" onClick={togglePassword} className="text-[#612A74]">
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M17.6886 14.0026C17.6886 16.0396 16.0366 17.6905 13.9996 17.6905C11.9626 17.6905 10.3117 16.0396 10.3117 14.0026C10.3117 11.9645 11.9626 10.3136 13.9996 10.3136C16.0366 10.3136 17.6886 11.9645 17.6886 14.0026Z" stroke="#612A74" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M13.9978 22.5214C18.4405 22.5214 22.504 19.3271 24.7918 14.0024C22.504 8.67773 18.4405 5.4834 13.9978 5.4834H14.0025C9.55983 5.4834 5.49633 8.67773 3.2085 14.0024C5.49633 19.3271 9.55983 22.5214 14.0025 22.5214H13.9978Z" stroke="#612A74" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </button>
  )

  return (
    <div className={`relative ${className}`}>
      <div className={`flex items-center gap-2 px-4 py-4 border border-[#776F69]/28 rounded-2xl bg-white/20 ${
        disabled ? 'opacity-60 cursor-not-allowed' : ''
      }`}>
        {icon && icon}
        <input 
          type={inputType}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
          className="flex-1 bg-transparent outline-none font-sf-pro text-base text-[#0A0A0A] placeholder:text-[#776F69] disabled:cursor-not-allowed"
        />
        {type === 'password' && showPasswordToggle && !disabled && <PasswordToggleIcon />}
      </div>
    </div>
  )
}

export function TextareaField({ 
  placeholder, 
  value, 
  onChange, 
  rows = 6, 
  className = '' 
}: TextareaFieldProps) {
  return (
    <div className={`px-4 py-5 border border-[#776F69]/28 rounded-2xl bg-white/20 ${className}`}>
      <textarea
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        rows={rows}
        className="w-full bg-transparent outline-none font-sf-pro text-base text-[#0A0A0A] placeholder:text-[#776F69] resize-none"
      />
    </div>
  )
}

export function SelectField({ 
  placeholder, 
  value, 
  onChange, 
  options, 
  icon,
  className = '' 
}: SelectFieldProps) {
  const DropdownIcon = () => (
    <svg width="28" height="28" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7 11L14 18L21 11" stroke="#612A74" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )

  return (
    <div className={`relative ${className}`}>
      <div className="flex items-center gap-2 px-4 py-4 border border-[#776F69]/28 rounded-2xl bg-white/20">
        {icon && icon}
        <select 
          value={value}
          onChange={onChange}
          className="flex-1 bg-transparent outline-none font-sf-pro text-base text-[#0A0A0A] appearance-none"
        >
          {placeholder && (
            <option value="" className="text-[#776F69]">{placeholder}</option>
          )}
          {options.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <DropdownIcon />
      </div>
    </div>
  )
}

// Common icons for form fields
export const FormIcons = {
  Email: () => (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M24.5 17.6102C24.5 20.8363 22.3477 23.4585 19.1547 23.4505H8.84535C5.65222 23.4585 3.5 20.8363 3.5 17.6102V10.3988C3.5 7.17611 5.65222 4.55054 8.84535 4.55054H19.1547C22.3477 4.55054 24.5 7.17611 24.5 10.3988V17.6102Z" stroke="#776F69" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M20.1889 10.3953L15.5235 14.1888C14.6449 14.887 13.3997 14.887 12.5211 14.1888L7.81592 10.3953" stroke="#776F69" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M11.6228 13.4656L7.81104 17.6054M20.1897 17.606L16.4199 13.4662" stroke="#776F69" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  
  Password: () => (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.4151 11.0642C18.4513 12.225 18.2226 13.3159 17.791 14.2994L23.2545 19.7628C24.0466 20.5655 24.4993 21.6471 24.4993 22.7788V23.3083C24.4993 24.1402 23.825 24.8157 22.992 24.8157H20.2445C19.4115 24.8157 18.7371 24.1402 18.7371 23.3083C18.7371 22.4917 18.0873 21.8243 17.2706 21.8022L17.1773 21.7998C16.349 21.7765 15.6956 21.0918 15.712 20.2634L15.733 19.1667L14.4566 17.8904C13.0181 18.6616 11.2809 18.9765 9.46792 18.6183C6.49992 18.0338 4.1246 15.6048 3.6136 12.624C2.7876 7.82086 6.58042 3.65818 11.2751 3.85301C15.1158 4.01168 18.2938 7.22355 18.4151 11.0642Z" stroke="#776F69" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M12.7498 11.3076C12.7498 10.3183 11.9483 9.51562 10.9577 9.51562C9.96722 9.51562 9.16455 10.3183 9.16455 11.3076C9.16455 12.2982 9.96722 13.1008 10.9577 13.1008C11.9483 13.1008 12.7498 12.2982 12.7498 11.3076Z" stroke="#776F69" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),

  User: () => (
    <svg width="24" height="24" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.07028 21.0008C5.55126 21.0008 4.63334 20.0152 4.56836 18.6424C4.56836 15.848 7.59287 14.8841 12.1499 14.8516C16.7152 14.8949 19.7478 15.8588 19.7315 18.6424C19.6584 20.0152 18.7459 21.0008 17.2296 21.0008H7.07028Z" stroke="#776F69" strokeWidth="2" strokeMiterlimit="10"/>
      <path d="M12.1576 11.6628C14.2736 11.6628 15.989 9.94744 15.989 7.83141C15.989 5.71538 14.2736 4 12.1576 4C10.0416 4 8.32617 5.71538 8.32617 7.83141C8.32617 9.94744 10.0416 11.6628 12.1576 11.6628Z" stroke="#776F69" strokeWidth="2" strokeMiterlimit="10"/>
    </svg>
  ),

  Document: () => (
    <svg width="24" height="24" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15.7161 16.7234H8.49609" stroke="#776F69" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M15.7161 12.5369H8.49609" stroke="#776F69" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M11.2511 8.36011H8.49609" stroke="#776F69" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M15.9085 3.24976C15.9085 3.24976 8.23149 3.25376 8.21949 3.25376C5.45949 3.27076 3.75049 5.08676 3.75049 7.85676V17.0528C3.75049 19.8368 5.47249 21.6598 8.25649 21.6598C8.25649 21.6598 15.9325 21.6568 15.9455 21.6568C18.7055 21.6398 20.4155 19.8228 20.4155 17.0528V7.85676C20.4155 5.07276 18.6925 3.24976 15.9085 3.24976Z" stroke="#776F69" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}
