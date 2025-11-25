const express = require('express');
const path = require('path');
const portfolioData = require('./src/data/portfolioData');

const app = express();
const PORT = process.env.PORT || 3000;

// Set EJS sebagai view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files (jika ada assets lokal seperti gambar)
app.use(express.static(path.join(__dirname, 'public')));

// Route utama - Homepage
app.get('/', (req, res) => {
  res.render('pages/index', { data: portfolioData });
});

// 404 Handler
app.use((req, res) => {
  res.status(404).send(`
    <html>
      <head>
        <title>404 - Page Not Found</title>
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body class="bg-slate-900 text-white flex items-center justify-center h-screen">
        <div class="text-center">
          <h1 class="text-6xl font-bold mb-4">404</h1>
          <p class="text-xl mb-6">Halaman tidak ditemukan</p>
          <a href="/" class="bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition">
            Kembali ke Home
          </a>
        </div>
      </body>
    </html>
  `);
});

// Start server
app.listen(PORT, () => {
  console.log(`
  ╔════════════════════════════════════════════════════════╗
  ║                                                        ║
  ║   🚀 Portfolio Server is Running!                     ║
  ║                                                        ║
  ║   📍 Local:    http://localhost:${PORT}                   ║
  ║   🌐 Network:  http://YOUR_IP:${PORT}                     ║
  ║                                                        ║
  ║   Press CTRL+C to stop                                ║
  ║                                                        ║
  ╚════════════════════════════════════════════════════════╝
  `);
});
