import {z} from "zod";

export const registerSchema = z.object({
    firstName: z
        .string()
        .min(1, 'Ad alanı zorunludur')
        .min(2, 'Ad en az 2 karakter olmalıdır')
        .max(50, 'Ad 50 karakterden fazla olamaz'),
    lastName: z
        .string()
        .min(1, 'Soyad alanı zorunludur')
        .min(2, 'Soyad en az 2 karakter olmalıdır')
        .max(50, 'Soyad 50 karakterden fazla olamaz'),
    email: z
        .string()
        .min(1, 'Email alanı zorunludur')
        .email('Geçerli bir email adresi giriniz'),
    phone: z
        .string()
        .min(1, 'Telefon numarası zorunludur')
        .regex(/^[0-9]{10,11}$/, 'Geçerli bir telefon numarası giriniz (10-11 haneli)'),
    password: z
        .string()
        .min(1, 'Şifre alanı zorunludur')
        .min(8, 'Şifre en az 8 karakter olmalıdır')
        .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
            'Şifre en az 1 büyük harf, 1 küçük harf, 1 rakam ve 1 özel karakter içermelidir'),
    confirmPassword: z.string().min(1, 'Şifre tekrarı zorunludur')
}).refine(data => data.password === data.confirmPassword, {
    message: 'Şifreler eşleşmiyor',
    path: ['confirmPassword']
});

export type RegisterFormData = z.infer<typeof registerSchema>;