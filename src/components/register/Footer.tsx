import React from "react";

export default function Footer() {
    return <div className="text-center mt-6">
        <p className="text-xs text-gray-500">
            Hesap oluşturarak{' '}
            <a href="/terms" className="hover:underline">Kullanım Şartları</a> ve{' '}
            <a href="/privacy" className="hover:underline">Gizlilik Politikası</a>'nı kabul etmiş olursunuz.
        </p>
    </div>
}