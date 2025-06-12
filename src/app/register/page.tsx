'use client'

import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {Loader2, Lock, Mail, Phone} from 'lucide-react';
import {RegisterFormData, registerSchema} from "@/lib/validations/register.validation";
import Footer from "@/components/register/Footer";
import LoginLink from "@/components/register/LoginLink";
import Header from "@/components/register/Header";
import SocialLoginButtons from "@/components/register/SocialLoginButtons";
import Divider from "@/components/register/Divider";
import {GridInput} from "@/components/ui/input/GridInput";
import {FormInput} from '@/components/ui/input/FormInput';
import {PasswordInput} from "@/components/ui/input/PasswordInput";

export default function RegisterPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const {
        register,
        handleSubmit,
        formState: {errors, isValid},
        watch,
        reset
    } = useForm<RegisterFormData>({
        resolver: zodResolver(registerSchema),
        mode: 'onChange'
    });

    const onSubmit = async (data: RegisterFormData) => {
        setIsSubmitting(true);
        try {
            await new Promise(resolve => setTimeout(resolve, 2000));

            console.log('Registration data:', {
                firstName: data.firstName,
                lastName: data.lastName,
                email: data.email,
                phone: data.phone,
                password: data.password
            });

            alert('Kayıt başarılı! 🎉');
            reset();
        } catch (error) {
            console.error('Registration error:', error);
            alert('Kayıt sırasında bir hata oluştu!');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div
            className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex items-center justify-center p-4">
            <div className="max-w-xl w-full">
                <Header/>
                <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-8">
                    <SocialLoginButtons/>
                    <Divider/>
                    <div className="space-y-5">
                        <GridInput cols={2} gap={4}>
                            <FormInput
                                name="firstName"
                                label="Ad"
                                placeholder="Adınız"
                                register={register}
                                error={errors.firstName?.message}
                                required
                            />
                            <FormInput
                                name="lastName"
                                label="Soyad"
                                placeholder="Soyadınız"
                                register={register}
                                error={errors.lastName?.message}
                                required
                            />
                        </GridInput>

                        <FormInput
                            name="email"
                            type="email"
                            label="Email"
                            placeholder="email@example.com"
                            register={register}
                            error={errors.email?.message}
                            icon={Mail}
                            required
                        />

                        <FormInput
                            name="phone"
                            type="tel"
                            label="Telefon"
                            placeholder="5xxxxxxxxx"
                            register={register}
                            error={errors.phone?.message}
                            icon={Phone}
                            required
                        />

                        <PasswordInput
                            name="password"
                            label="Şifre"
                            placeholder="Güçlü bir şifre oluşturun"
                            register={register}
                            error={errors.password?.message}
                            icon={Lock}
                            required
                        />

                        <PasswordInput
                            name="confirmPassword"
                            label="Şifre Tekrarı"
                            placeholder="Şifrenizi tekrar giriniz"
                            register={register}
                            error={errors.confirmPassword?.message}
                            icon={Lock}
                            required
                        />

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            onClick={handleSubmit(onSubmit)}
                            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-4 rounded-xl font-semibold shadow-lg hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-4 focus:ring-blue-200 transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                        >
                            {isSubmitting ? (
                                <div className="flex items-center justify-center gap-2">
                                    <Loader2 className="w-5 h-5 animate-spin"/>
                                    Hesap Oluşturuluyor...
                                </div>
                            ) : (
                                'Hesap Oluştur'
                            )}
                        </button>
                    </div>
                    <LoginLink/>
                </div>
                <Footer/>
            </div>
        </div>
    );
}