import {forwardRef} from "react";
import {BaseInputProps} from "@/components/ui/input/props";

export const Input = forwardRef<HTMLInputElement, BaseInputProps>(
    ({label, error, icon: Icon, required, className = '', ...props}, ref) => {
        return (
            <div className="w-full">
                {label && (
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                        {label} {required && <span className="text-red-500">*</span>}
                    </label>
                )}
                <div className="relative">
                    {Icon && (
                        <Icon className="absolute left-3 top-3.5 w-5 h-5 text-gray-400"/>
                    )}
                    <input
                        ref={ref}
                        className={`w-full ${Icon ? 'pl-11' : 'pl-4'} pr-4 py-3 rounded-xl border-2 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-100 ${
                            error
                                ? 'border-red-300 focus:border-red-500'
                                : 'border-gray-200 focus:border-blue-500'
                        } ${className}`}
                        {...props}
                    />
                </div>
                {error && (
                    <p className="text-red-500 text-xs mt-1 animate-fade-in">{error}</p>
                )}
            </div>
        );
    }
);

Input.displayName = 'Input';