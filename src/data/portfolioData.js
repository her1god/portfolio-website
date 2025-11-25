const data = {
  meta: {
    title: "Heri Ramadhan | Data Enthusiast",
    description: "Portofolio Heri Ramadhan, spesialis Data Engineering dan Backend Development."
  },
  profile: {
    name: "Heri Ramadhan",
    role: "Data Enthusiast | ETL · Airflow · Data Pipeline · Dashboard",
    tagline: "Mengubah data mentah menjadi pipeline, visualisasi, dan keputusan yang dapat ditindaklanjuti.",
    about: "Seorang Data Enthusiast dengan fokus pada pengolahan data, pengembangan pipeline ETL, automasi proses, serta pembangunan aplikasi web dan geospasial. Memiliki pengalaman end-to-end dalam menangani data, mulai dari ekstraksi, pembersihan, transformasi, analisis tingkat dasar-menengah, hingga penyajian dalam bentuk dashboard dan integrasi aplikasi. Berpengalaman dalam data engineering, backend development, web scraping, serta implementasi workflow data menggunakan Apache Airflow dan platform cloud. Terbiasa bekerja mandiri maupun kolaboratif untuk menghasilkan solusi berbasis data yang fungsional dan dapat digunakan dalam pengambilan keputusan.",
    contact: {
      email: "heripanca33@gmail.com",
      linkedin: "https://linkedin.com/in/her1god",
      github: "https://github.com/her1god",
      phone: "082211470202" // Format display button WA
    }
  },
  skills: [
    { 
      category: "Data Engineering & Database", 
      items: ["Apache Airflow", "Apache Kafka", "ETL Pipelines", "PostgreSQL", "MySQL", "MongoDB", "AWS", "Docker", "Linux", "Azure", "Data Warehousing", "Data Modeling"] 
    },
      { 
      category: "Data Analysis & Soft Skills", 
      items: ["Microsoft Excel", "SQL", "Python", "Data Analysis", "Critical Thinking", "Problem Solving", "Negotiation", "Collaboration", "Data Visualization", "Tableau", "Data Cleaning"] 
    },
    { 
      category: "Backend & Web", 
      items: ["Node.js", "Express.js", "Laravel", "PHP", "REST API", "Git", "HTML", "CSS", "JavaScript", "Bootstrap", "CI/CD"] 
    }
  ],
  experience: [
    {
      company: "Self-Employed / Freelance",
      role: "Independent Data & Development Consultant",
      period: "July 2025 - Now",
      description: "Mengelola proyek end-to-end mulai dari analisis kebutuhan hingga implementasi aplikasi web dan geospasial, sekaligus merancang ETL, visualisasi, dan automasi data untuk berbagai klien. Membangun aplikasi full-stack dengan integrasi API dan pipeline data yang efisien, serta menghasilkan solusi berbasis data yang benar-benar dapat ditindaklanjuti dan membantu klien memaksimalkan nilai aset data mereka.",
      type: "Freelance"
    },
    {
      company: "BSKLN (Kementerian Luar Negeri RI) - Jakarta Pusat",
      role: "Data Engineering MSIB Batch 7",
      period: "Agustus 2024 - January 2025",
      description: "Merancang pipeline ETL untuk data diplomasi menggunakan SQL, Python, dan akses VPN menuju big data server internal, sekaligus melakukan web scraping UN Comtrade dengan Selenium untuk melengkapi kebutuhan data. Terlibat dalam pembangunan dashboard gastrodiplomasi berbasis Tableau dan memberikan kontribusi pada analisis serta keputusan kebijakan. Berperan dalam tim yang meluncurkan Dashboard Gastrodiplomasi di Ruang Nusantara Kementerian Luar Negeri.",
      type: "Internship"
    },
    {
      company: "PT Telekomunikasi Indonesia - Jakarta Selatan",
      role: "Developer / Data Engineering MSIB Batch 6",
      period: "February 2024 - July 2024",
      description: "Mengawali peran sebagai Backend Developer dengan fokus pada Golang dan berhasil membangun integrasi API menggunakan Apache Kafka. Berlanjut sebagai Data Engineer, memperdalam ETL, SQL, dan Python, sekaligus mengerjakan proyek data cleaning dan automasi. Menyelesaikan mini project pembersihan data perbankan serta mengembangkan pipeline ETL end-to-end berbasis Apache Airflow untuk memproses dataset ulasan buku dan menyimpannya ke PostgreSQL sebagai proyek akhir.",
      type: "Internship"
    },
    {
      company: "Badan Pusat Statistik (BPS) - Pasaman",
      role: "Data Input Partner",
      period: "August 2023 - September 2023",
      description: "Melakukan verifikasi lapangan serta input data petani ke sistem resmi SSO BPS dengan memastikan akurasi dan kelengkapan sesuai standar. Menyelesaikan lebih dari 18.000 entri data untuk wilayah Pasaman–Lubuk Sikaping dengan ketepatan tinggi dan sesuai tenggat waktu.",
      type: "Contract"
    },
    {
      company: "Badan Pusat Statistik (BPS) - Pasaman",
      role: "Map Digitization Partner",
      period: "September 2022 - October 2022",
      description: "Melakukan digitasi peta analog menjadi peta digital untuk keperluan sensus dan pembaruan Wilayah Kerja Statistik, menggunakan QGIS untuk memetakan batas desa, blok sensus, titik bangunan, serta layer terkait. Mendukung penyediaan peta digital yang akurat dan siap digunakan dalam kegiatan statistik nasional.",
      type: "Contract"
    }
  ],
  projects: [
    {
      title: "Optimisasi Pemasaran Afiliasi TikTok — Content-Based Filtering",
      category: "Data Analysis",
      tech: ["Python", "Pandas", "Web Scraping", "Data Cleaning", "Content-Based Filtering", "Scikit-Learn", "Cosine Similarity", "TF-IDF", "Tableau"],
      description: "Mengembangkan pipeline data untuk mengumpulkan, membersihkan, dan menganalisis konten TikTok, lalu menerapkan algoritma content-based filtering untuk menyarankan strategi pemasaran afiliasi. Sistem membantu menentukan konten yang paling relevan untuk segmen audiens tertentu dan memprioritaskan produk afiliasi berdasar kecocokan konten. Hasilnya: rekomendasi yang lebih tertarget untuk kampanye pemasaran.",
      link: "#"
    },
    {
      title: "Analisis Data Olimpiade (1896-2016)",
      category: "Data Analysis",
      tech: ["Python", "Pandas", "Data Visualization", "Data Cleaning", "Jupyter Notebook"],
      description: "Melakukan analisis mendalam terhadap sejarah Olimpiade dari Athena 1896 hingga Rio 2016. Mengungkap tren performa atlet, dominasi tim negara, dan statistik kemenangan.",
      link: "https://github.com/her1god/Project_AnalysisOlympicsData"
    },
    {
      title: "ETL Data Gastrodiplomasi & Dashboard Tableau",
      category: "Data Engineering & Analysis",
      tech: ["Microsoft Excel", "MySQL", "Python", "Tableau", "VPN", "Web Scraping", "Dashboard", "Data Warehousing"],
      description: "Proyek implementasi ETL (Extract, Transform, Load) otomatis. Mengambil data mentah dari dataset Goodreads, membersihkannya, dan memuatnya ke database PostgreSQL untuk analisis terpusat.",
      link: "https://gastrodiplomasi.kemlu.go.id/"
    },
    {
      title: "ETL Pipeline with Apache Airflow",
      category: "Data Engineering",
      tech: ["Apache Airflow", "PostgreSQL", "Python", "Visualization"],
      description: "Proyek implementasi ETL (Extract, Transform, Load) otomatis. Mengambil data mentah dari dataset Goodreads, membersihkannya, dan memuatnya ke database PostgreSQL untuk analisis terpusat.",
      link: "https://github.com/her1god/ETL_ApacheAirlflow"
    },
    {
      title: "CekSaham — Web Stock Checker (Azure Deployment)",
      category: "Web Development / Cloud Deployment",
      tech: ["Node.js", "Express", "REST API", "Axios", "Azure Web App", "GitHub Actions", "CI/CD"],
      description: "Aplikasi web untuk mengecek harga saham secara real-time menggunakan Node.js dan integrasi API, dilengkapi dengan pipeline deployment otomatis ke Azure Web App melalui GitHub Actions. Proyek ini menunjukkan kemampuan integrasi API, deployment cloud, dan workflow DevOps skala kecil.",
      link: "https://github.com/her1god/CekSaham-Test-Deploy-Azure-"
    },
    {
      title: "WebGIS Lokasi Lapangan Futsal — Kota Padang",
      category: "Web Dev",
      tech: ["Express.js", "Leaflet", "MongoDB", "REST API", "WebGIS", "OSRM"],
      description: "Aplikasi obrolan real-time menggunakan implementasi Socket Programming. Memungkinkan pertukaran pesan instan antar pengguna dengan latensi rendah.",
      link: "https://github.com/her1god/WebGIS-Futsal-Padang"
    },
    {
      title: "Real-time Chat App",
      category: "Backend",
      tech: ["Express.js", "Socket.io", "Node.js"],
      description: "Aplikasi obrolan real-time menggunakan implementasi Socket Programming. Memungkinkan pertukaran pesan instan antar pengguna dengan latensi rendah.",
      link: "https://github.com/21343050/Pertemuan10_SocketProgramming-Chat-"
    },
    {
      title: "Sistem Pengaduan Desa",
      category: "Web Dev",
      tech: ["Laravel", "PHP", "MySQL"],
      description: "Website layanan masyarakat untuk pengaduan desa. Dibangun sesuai spesifikasi klien freelance untuk mempermudah birokrasi desa.",
      link: "https://github.com/21343050/Pengaduan_Desa"
    },
    {
      title: "Sistem CRUD Perpustakaan",
      category: "Web Dev",
      tech: ["PHP Native", "MySQL"],
      description: "Sistem manajemen data buku perpustakaan dengan fitur Create, Read, Update, Delete (CRUD) lengkap.",
      link: "https://github.com/21343050/pustaka"
    }
  ],
  certifications: [
    { name: "Foundations: Data, Data, Everywhere", issuer: "Google", year: "Nov 2025" },
    { name: "Deloitte Australia - Data Analytics", issuer: "Forage", year: "Oct 2025" },
    { name: "Python for Data Science AI & Development", issuer: "Coursera", year: "Jun 2025" },
    { name: "Data Fundamentals", issuer: "IBM", year: "Oct 2025" },
    { name: "AWS Academy Graduate - Cloud Foundations - Training Badge", issuer: "AWS", year: "Nov 2025" },
    { name: "Data Classification and Summarization Using IBM Granite", issuer: "IBM", year: "Agu 2025" },
    { name: "Junior Web Developer", issuer: "BNSP", year: "2023 - 2028" },
    { name: "MTCNA (MikroTik Certified Network Associate)", issuer: "MikroTik", year: "2023 - 2026" }
  ]
};

module.exports = data;
