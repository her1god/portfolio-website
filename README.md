# 🚀 Portfolio Website - Heri Ramadhan

Portfolio website profesional untuk Data Engineer & Analyst yang dibangun dengan teknologi modern.

## 📋 Tech Stack

- **Backend:** Node.js + Express.js
- **Template Engine:** EJS
- **Styling:** Tailwind CSS (via CDN)
- **Icons:** Font Awesome 6

## 🎨 Features

✨ **Modern Dark Theme** dengan gradient cyan-blue yang elegan  
📱 **Fully Responsive** - Optimal di semua device  
🎭 **Smooth Animations** - Typewriter effect, fade-in, hover transitions  
🔍 **SEO Optimized** - Meta tags lengkap  
🧩 **Modular Structure** - Partials untuk navbar, footer, head  
💎 **Glassmorphism Design** - Efek backdrop blur modern  
⚡ **Fast Loading** - Menggunakan CDN untuk performa maksimal  

## 📁 Struktur Folder

```
porfolio_data/
├── app.js                          # Entry point server Express
├── package.json                     # Dependencies
├── .gitignore                       # Git ignore file
├── README.md                        # Dokumentasi
├── src/
│   └── data/
│       └── portfolioData.js         # Data CV (mudah diedit)
└── views/
    ├── pages/
    │   └── index.ejs                # Halaman utama
    └── partials/
        ├── head.ejs                 # Meta tags & Tailwind CDN
        ├── navbar.ejs               # Navigasi sticky responsive
        └── footer.ejs               # Footer dengan social links
```

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Jalankan Server

```bash
npm start
```

Atau untuk development dengan auto-reload:

```bash
npm run dev
```

### 3. Buka Browser

```
http://localhost:3000
```

## ⚙️ Kustomisasi Data

Edit file `src/data/portfolioData.js` untuk mengubah:
- Informasi profil
- Skills & tech stack
- Pengalaman kerja
- Daftar project
- Sertifikasi
- Link sosial media

## 📱 Sections

1. **Hero** - Landing dengan typewriter effect
2. **About** - Profil singkat dan pendidikan
3. **Skills** - Tech stack dalam card grid
4. **Experience** - Timeline pengalaman kerja
5. **Projects** - Showcase project dengan glassmorphism card
6. **Contact** - CTA untuk menghubungi via Email, WhatsApp, LinkedIn

## 🎨 Color Palette

- **Background:** `slate-950`, `slate-900`
- **Text:** `slate-300`, `white`
- **Accent:** Gradient `cyan-500` → `blue-500`
- **Glass Effect:** `bg-white/5` + `backdrop-blur`

## 📦 Dependencies

```json
{
  "express": "^4.18.2",
  "ejs": "^3.1.9"
}
```

## 🌐 CDN Resources

- **Tailwind CSS:** v3.4.1
- **Font Awesome:** v6.5.1
- **Google Fonts:** Inter

## 🔧 Maintenance

Untuk menambah project baru, edit array `projects` di `portfolioData.js`:

```javascript
{
  title: "Project Baru",
  category: "Data Engineering",
  tech: ["Python", "Kafka"],
  description: "Deskripsi project...",
  link: "https://github.com/username/repo"
}
```

## 📄 License

MIT License - Feel free to use for your own portfolio!

## 👨‍💻 Author

**Heri Ramadhan**  
Data Engineer & Aspiring Data Analyst

- GitHub: [@her1god](https://github.com/her1god)
- LinkedIn: [her1god](https://linkedin.com/in/her1god)
- Email: heripanca33@gmail.com

---

⭐ **Star this repo** if you find it helpful!
