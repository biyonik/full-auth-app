import {forwardRef} from "react";
import {FormInputProps} from "@/components/ui/input/props";
import {Input} from "@/components/ui/input/Input";

export const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
    ({register, name, ...props}, ref) => {
        const registerProps = register ? register(name) : {};

        return (
            <Input
                ref={ref}
                {...registerProps}
                {...props}
            />
        );
    }
);

FormInput.displayName = 'FormInput';