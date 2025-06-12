import {Shield} from "lucide-react";
import React from "react";

export default function Logo() {
    return <div className="flex items-center space-x-2">
        <div
            className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
            <Shield className="w-6 h-6 text-white"/>
        </div>
        <span className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                AuthApp
              </span>
    </div>
}