import {Chrome, Github} from "lucide-react";
import React from "react";

export default function SocialLoginButtons() {
    
    const handleSocialAuth = (provider: 'google' | 'github') => {
        console.log(`Signing up with ${provider}`);
        // NextAuth.js signIn function will be called here
        // signIn(provider, { callbackUrl: '/dashboard' });
    };

    return <div className="grid grid-cols-2 gap-3 mb-6">
        <button
            type="button"
            onClick={() => handleSocialAuth('google')}
            className="flex items-center justify-center gap-2 px-4 py-3 border-2 border-gray-200 rounded-xl hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 group"
        >
            <Chrome className="w-5 h-5 text-red-500 group-hover:scale-110 transition-transform"/>
            <span className="text-sm font-medium text-gray-700">Google</span>
        </button>
        <button
            type="button"
            onClick={() => handleSocialAuth('github')}
            className="flex items-center justify-center gap-2 px-4 py-3 border-2 border-gray-200 rounded-xl hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 group"
        >
            <Github className="w-5 h-5 text-gray-700 group-hover:scale-110 transition-transform"/>
            <span className="text-sm font-medium text-gray-700">GitHub</span>
        </button>
    </div>
}