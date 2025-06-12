import {GridInputProps} from "@/components/ui/input/props";
import React from "react";

export const GridInput: React.FC<GridInputProps> = ({
                                                        children,
                                                        cols = 2,
                                                        gap = 4,
                                                        className = ''
                                                    }) => {
    return (
        <div className={`grid grid-cols-${cols} gap-${gap} ${className}`}>
            {children}
        </div>
    );
};