import {User} from "lucide-react";

export default function Header() {
    return <div className="text-center mb-8">
        <div
            className="mx-auto w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg transform hover:scale-105 transition-transform duration-200">
            <User className="w-8 h-8 text-white"/>
        </div>
        <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-2">
            Hesap Oluştur
        </h1>
        <p className="text-gray-600">Yeni hesabınızı oluşturmak için bilgilerinizi giriniz</p>
    </div>
}