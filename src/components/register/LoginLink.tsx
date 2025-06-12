import React from "react";
import Link from "next/link";

export default function LoginLink() {
    return <div className="text-center mt-6">
        <p className="text-sm text-gray-600">
            Zaten hesabınız var mı?{' '}
            <Link href="/login"
               className="text-blue-600 hover:text-blue-700 font-semibold hover:underline transition-colors">
                Giriş Yapın
            </Link>
        </p>
    </div>
}