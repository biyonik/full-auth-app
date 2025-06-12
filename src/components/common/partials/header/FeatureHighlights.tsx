import {Shield, Users, Zap} from "lucide-react";
import React from "react";

export default function FeatureHighlights() {
    return <div className="relative z-10 bg-white/50 backdrop-blur-sm border-y border-white/20 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center group">
                    <div
                        className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                        <Shield className="w-8 h-8 text-white"/>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Kurumsal Güvenlik</h3>
                    <p className="text-gray-600">Hız sınırlaması, CSRF koruması ve güvenli oturumlarla banka düzeyinde
                        güvenlik.</p>
                </div>

                <div className="text-center group">
                    <div
                        className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                        <Zap className="w-8 h-8 text-white"/>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Şimşek Hızında</h3>
                    <p className="text-gray-600">NextJS 15 ve akıllı önbelleğe alma stratejileriyle performans açısından
                        optimize edildi.</p>
                </div>

                <div className="text-center group">
                    <div
                        className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                        <Users className="w-8 h-8 text-white"/>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Sosyal Medya Entegrasyonları</h3>
                    <p className="text-gray-600">Google, GitHub, Discord ve daha birçok sağlayıcıyla tek tıkla giriş
                        yapın.</p>
                </div>
            </div>
        </div>
    </div>
}