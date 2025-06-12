import React from "react";

export default function Divider() {
    return <div className="relative mb-6">
        <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200"></div>
        </div>
        <div className="relative flex justify-center text-sm">
            <span className="px-4 bg-white text-gray-500 font-medium">veya</span>
        </div>
    </div>
}