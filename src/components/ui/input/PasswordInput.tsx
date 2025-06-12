import {forwardRef, useState} from "react";
import {PasswordInputProps} from "@/components/ui/input/props";
import {Eye, EyeOff} from "lucide-react";

export const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
    ({showPasswordToggle = true, register, name, ...props}, ref) => {
        const [showPassword, setShowPassword] = useState(false);
        const registerProps = register ? register(name) : {};

        return (
            <div className="w-full">
                {props.label && (
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                        {props.label} {props.required && <span className="text-red-500">*</span>}
                    </label>
                )}
                <div className="relative">
                    {props.icon && (
                        <props.icon className="absolute left-3 top-3.5 w-5 h-5 text-gray-400"/>
                    )}
                    <input
                        ref={ref}
                        type={showPassword ? 'text' : 'password'}
                        className={`w-full ${props.icon ? 'pl-11' : 'pl-4'} ${showPasswordToggle ? 'pr-12' : 'pr-4'} py-3 rounded-xl border-2 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-100 ${
                            props.error
                                ? 'border-red-300 focus:border-red-500'
                                : 'border-gray-200 focus:border-blue-500'
                        } ${props.className || ''}`}
                        {...registerProps}
                        {...props}
                    />
                    {showPasswordToggle && (
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-3.5 text-gray-400 hover:text-gray-600 transition-colors"
                        >
                            {showPassword ? <EyeOff className="w-5 h-5"/> : <Eye className="w-5 h-5"/>}
                        </button>
                    )}
                </div>
                {props.error && (
                    <p className="text-red-500 text-xs mt-1 animate-fade-in">{props.error}</p>
                )}
            </div>
        );
    }
);

PasswordInput.displayName = 'PasswordInput';