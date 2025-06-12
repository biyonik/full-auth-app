# 🔐 Full Auth App

Modern ve güvenli bir authentication sistemi - NextJS 15, Prisma, MySQL ve NextAuth.js ile production-ready çözüm.

![NextJS](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Prisma](https://img.shields.io/badge/Prisma-5.0-2D3748?style=for-the-badge&logo=prisma)
![MySQL](https://img.shields.io/badge/MySQL-8.0-4479A1?style=for-the-badge&logo=mysql&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)

## 🚀 Özellikler

### 🔑 Authentication Sistemi

- **Login/Register** - Güçlü validasyon ile
- **Social Auth** - Google, GitHub, Discord, Auth0 desteği
- **Forgot/Reset Password** - Email ile güvenli şifre sıfırlama
- **Email Verification** - Hesap doğrulama sistemi
- **Session Management** - JWT tabanlı güvenli oturumlar

### 🛡️ Güvenlik

- **Rate Limiting** - API isteklerini sınırlama
- **Login Attempt Tracking** - Şüpheli aktivite takibi
- **Strong Password Policy** - Güçlü şifre zorunluluğu
- **CSRF Protection** - Cross-site request forgery koruması
- **Secure Headers** - XSS ve diğer saldırılara karşı koruma

### 🎨 Modern Tasarım

- **Responsive Design** - Tüm cihazlarda mükemmel görünüm
- **Dark/Light Mode** - Kullanıcı tercihi desteği
- **Glassmorphism Effects** - Modern UI tasarımı
- **Smooth Animations** - Kullanıcı deneyimi odaklı
- **Component-Based Architecture** - Yeniden kullanılabilir bileşenler

### 📊 Veritabanı

- **Prisma ORM** - Type-safe database operations
- **MySQL 8.0** - Güvenilir ve performanslı
- **Migration System** - Veritabanı versiyon kontrolü
- **Seed Data** - Test verileri ile hızlı başlangıç

## 🛠️ Teknoloji Stack

| Kategori       | Teknoloji       | Açıklama                              |
|----------------|-----------------|---------------------------------------|
| **Frontend**   | NextJS 15       | React tabanlı full-stack framework    |
| **Styling**    | Tailwind CSS 4  | Utility-first CSS framework           |
| **Database**   | MySQL 8.0       | İlişkisel veritabanı                  |
| **ORM**        | Prisma          | Type-safe database client             |
| **Auth**       | NextAuth.js     | Authentication library                |
| **Validation** | Zod             | TypeScript-first schema validation    |
| **Forms**      | React Hook Form | Performant forms with easy validation |
| **Icons**      | Lucide React    | Beautiful & consistent icons          |
| **Email**      | Nodemailer      | Email sending service                 |
| **Deployment** | Vercel          | Serverless deployment platform        |

## 📁 Proje Yapısı

```
├── app/                    # NextJS 15 App Router
│   ├── api/               # API Routes
│   │   └── auth/          # Authentication endpoints
│   ├── register/          # Register page
│   ├── login/             # Login page
│   └── dashboard/         # Protected dashboard
├── components/            # React Components
│   ├── ui/                # Reusable UI components
│   │   ├── FormInput.tsx  # Custom form inputs
│   │   └── Button.tsx     # Button component
│   ├── register/          # Register page components
│   └── auth/              # Auth-related components
├── lib/                   # Utility functions
│   ├── prisma.ts          # Prisma client
│   ├── auth.ts            # NextAuth configuration
│   └── validations/       # Zod schemas
├── prisma/                # Database
│   ├── schema.prisma      # Database schema
│   └── migrations/        # Database migrations
└── public/                # Static assets
```

## 🚀 Kurulum

### Ön Koşullar

- Node.js 18+
- MySQL 8.0
- Git

### 1. Projeyi Klonlayın

```bash
git clone https://github.com/biyonik/full-auth-app.git
cd full-auth-app
```

### 2. Bağımlılıkları Yükleyin

```bash
npm install
```

### 3. Environment Variables

`.env` dosyası oluşturun:

```env
# Database
DATABASE_URL="mysql://root@localhost:3306/auth_system"

# NextAuth
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-super-secret-key-here"

# OAuth Providers
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"
GITHUB_CLIENT_ID="your-github-client-id"
GITHUB_CLIENT_SECRET="your-github-client-secret"

# Email (Nodemailer)
SMTP_HOST="smtp.gmail.com"
SMTP_PORT=587
SMTP_USER="your-email@gmail.com"
SMTP_PASS="your-app-password"
```

### 4. Veritabanını Hazırlayın

```bash
# MySQL'de veritabanı oluşturun
CREATE DATABASE auth_system CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

# Prisma migration'ları çalıştırın
set NODE_TLS_REJECT_UNAUTHORIZED=0 && npx prisma migrate dev --name init

# Prisma Client'i generate edin
set NODE_TLS_REJECT_UNAUTHORIZED=0 && npx prisma generate
```

### 5. Projeyi Çalıştırın

```bash
npm run dev
```

Tarayıcınızda `http://localhost:3000` adresini açın.

## 📊 Veritabanı Şeması

### Temel Tablolar

- **Users** - Kullanıcı bilgileri
- **Accounts** - OAuth hesap bağlantıları
- **Sessions** - Aktif oturumlar
- **VerificationTokens** - Email doğrulama token'ları

### Güvenlik Tabloları

- **PasswordResetTokens** - Şifre sıfırlama token'ları
- **EmailVerificationTokens** - Email doğrulama token'ları
- **LoginAttempts** - Giriş denemesi kayıtları
- **RateLimits** - Rate limiting kontrolü

## 🔧 Geliştirme

### Prisma Commands

```bash
# Database'i görüntüle
npx prisma studio

# Migration oluştur
npx prisma migrate dev --name add-new-feature

# Database'i reset et
npx prisma migrate reset
```

### Yararlı Scripts

```bash
# Development server
npm run dev

# Production build
npm run build

# Production start
npm run start

# Linting
npm run lint

# Type checking
npm run type-check
```

## 🚢 Deployment

### Vercel Deployment

1. GitHub'a push yapın
2. Vercel'e projeyi import edin
3. Environment variables'ları ekleyin
4. Deploy edin

### Database Setup (Production)

- PlanetScale (önerilen)
- Railway
- AWS RDS
- DigitalOcean Managed Databases

## 🤝 Katkıda Bulunma

1. Fork yapın
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Değişikliklerinizi commit edin (`git commit -m 'Add amazing feature'`)
4. Branch'inizi push edin (`git push origin feature/amazing-feature`)
5. Pull Request açın

## 📝 Lisans

Bu proje MIT lisansı altında lisanslanmıştır. Detaylar için [LICENSE](LICENSE) dosyasına bakın.

## 📞 İletişim

- **Email**: ahmet.altun60@gmail.com
- **LinkedIn**: [Ahmet ALTUN](https://linkedin.com/in/biyonik)
- **GitHub**: [@biyonik](https://github.com/biyonik)

## 🙏 Teşekkürler

- [NextJS](https://nextjs.org/) - Amazing React framework
- [Prisma](https://prisma.io/) - Next-generation ORM
- [NextAuth.js](https://next-auth.js.org/) - Authentication for Next.js
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Lucide](https://lucide.dev/) - Beautiful icons

---

⭐ Bu projeyi beğendiyseniz yıldız vermeyi unutmayın!