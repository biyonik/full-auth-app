import React from "react";

export interface BaseInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    icon?: React.ComponentType<{ className?: string }>;
    required?: boolean;
    className?: string;
}

export interface FormInputProps extends BaseInputProps {
    name: string;
    register?: any;
}

export interface PasswordInputProps extends FormInputProps {
    showPasswordToggle?: boolean;
}

export interface GridInputProps {
    children: React.ReactNode;
    cols?: 2 | 3 | 4;
    gap?: 2 | 3 | 4 | 6;
    className?: string;
}