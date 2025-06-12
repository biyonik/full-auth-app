'use client'

import React, {useEffect, useState} from 'react';
import Link from 'next/link';
import {Globe, Menu, Shield, Users, X, Zap} from 'lucide-react';
import FeatureHighlights from "@/components/common/partials/header/FeatureHighlights";
import HeroSection from "@/components/common/partials/header/HeroSection";
import BackgroundDecorations from "@/components/common/partials/header/BackgroundDecorations";
import Logo from "@/components/common/partials/header/Logo";

export default function LandingHeader() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const features = [
        {icon: Shield, text: "Kurumsal Güvenlik", color: "text-blue-500"},
        {icon: Zap, text: "Şimşek Hızında", color: "text-yellow-500"},
        {icon: Users, text: "Sosyal Medya Giriş", color: "text-green-500"},
        {icon: Globe, text: "Çoklu-Platform", color: "text-purple-500"}
    ];

    const stats = [
        {number: "99.9%", label: "Uptime"},
        {number: "10k+", label: "Users"},
        {number: "24/7", label: "Support"},
        {number: "5★", label: "Rating"}
    ];

    return (
        <div
            className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
            {/* Background decorations */}
            <BackgroundDecorations/>

            {/* Navigation */}
            <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled ? 'bg-white/90 backdrop-blur-xl shadow-lg border-b border-white/20' : 'bg-transparent'
            }`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        {/* Logo */}
                        <Logo/>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-8">
                            <Link href="#features"
                                  className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                                Features
                            </Link>
                            <Link href="#pricing"
                                  className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                                Pricing
                            </Link>
                            <Link href="#docs"
                                  className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                                Docs
                            </Link>
                            <Link href="/login"
                                  className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                                Login
                            </Link>
                            <Link
                                href="/register"
                                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 transform hover:scale-105"
                            >
                                Get Started
                            </Link>
                        </div>

                        {/* Mobile menu button */}
                        <div className="md:hidden">
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="text-gray-700 hover:text-blue-600 transition-colors"
                            >
                                {isMenuOpen ? <X className="w-6 h-6"/> : <Menu className="w-6 h-6"/>}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-gray-200">
                        <div className="px-4 pt-2 pb-3 space-y-1">
                            <Link href="#features"
                                  className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors">
                                Features
                            </Link>
                            <Link href="#pricing"
                                  className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors">
                                Pricing
                            </Link>
                            <Link href="#docs"
                                  className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors">
                                Docs
                            </Link>
                            <Link href="/login"
                                  className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors">
                                Login
                            </Link>
                            <Link
                                href="/register"
                                className="block mx-3 mt-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-xl font-semibold text-center"
                            >
                                Get Started
                            </Link>
                        </div>
                    </div>
                )}
            </nav>

            {/* Hero Section */}
            <HeroSection stats={stats} features={features}/>

            {/* Feature Highlights */}
            <FeatureHighlights/>
        </div>
    );
}