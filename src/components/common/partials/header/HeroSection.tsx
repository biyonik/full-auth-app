import {ArrowRight, Github, LucideProps, Star} from "lucide-react";
import Link from "next/link";
import React, {ForwardRefExoticComponent, RefAttributes} from "react";

interface HeroSectionProps {
    features: {
        icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>,
        text: string,
        color: string
    }[],
    stats: {
        number: string,
        label: string
    }[]
}

export default function HeroSection({features, stats}: HeroSectionProps) {
    return <div className="relative z-10 pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
            <div className="text-center">
                {/* Badge */}
                <div
                    className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-blue-200 rounded-full px-4 py-2 mb-8">
                    <Star className="w-4 h-4 text-yellow-500 fill-current"/>
                    <span
                        className="text-sm font-medium text-gray-700">10,000+ dan fazla geliştirici bize güvendi</span>
                    <Github className="w-4 h-4 text-gray-600"/>
                </div>

                {/* Main Heading */}
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent">
                Güvenli Kimlik Doğrulama
              </span>
                    <br/>
                    <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Basitleştirildi
              </span>
                </h1>

                {/* Subtitle */}
                <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
                    NextJS 15, Prisma ve MySQL ile üretime hazır kimlik doğrulama sistemi.
                    Sosyal oturum açma, e-posta doğrulaması ve kurumsal güvenliği kullanıma hazır hale getirin.
                </p>

                {/* Feature Pills */}
                <div className="flex flex-wrap justify-center gap-3 mb-10">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full px-4 py-2 hover:scale-105 transition-transform duration-200"
                        >
                            <feature.icon className={`w-4 h-4 ${feature.color}`}/>
                            <span className="text-sm font-medium text-gray-700">{feature.text}</span>
                        </div>
                    ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                    <Link
                        href="/register"
                        className="group bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 transform hover:scale-105 flex items-center gap-2"
                    >
                        Ücretsiz Deneyin
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform"/>
                    </Link>

                    <Link
                        href="#demo"
                        className="group bg-white/80 backdrop-blur-sm text-gray-700 px-8 py-4 rounded-2xl font-semibold text-lg border-2 border-gray-200 hover:border-blue-300 hover:bg-white transition-all duration-200 transform hover:scale-105 flex items-center gap-2"
                    >
                        <span>Demo Uygulamayı Görün</span>
                        <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                    </Link>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center">
                            <div
                                className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                {stat.number}
                            </div>
                            <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
}