/***
 * Data Lengkap 55 Program Kerja BEM KM FTI UNAND - Kabinet Vismayakriya
 * Terintegrasi 100% untuk seluruh 9 Dinas & 1 Biro
 */

export const programsData = [
  // --- BIRO AUDKES (5 PROKER) ---
  {
    id: "nexus-archive",
    title: "Nexus Archive & Digital SOP",
    department: "Biro Audkes",
    departmentSlug: "audkes",
    category: "Administrasi",
    status: "Sedang Berjalan",
    date: "Sepanjang Periode",
    tags: ["Archive", "Cloud", "SOP", "Governance"],
    image: "/vismayakriya/dinasnexus/kegiatan/audkes/nexusarchive.webp",
    summary: "Modernisasi tata kelola kearsipan digital kabinet dan sosialisasi alur surat-menyurat terstandar.",
    description: "Transformasi pengelolaan arsip dari sistem konvensional menuju basis penyimpanan cloud terpusat dengan penamaan metadata standar. Memungkinkan fungsionaris mengakses template surat, proposal, laporan pertanggungjawaban (LPJ), dan dokumentasi kegiatan dengan aman dan cepat.",
    objectives: [
      "Menghilangkan risiko kehilangan berkas dan dokumen bersejarah kabinet.",
      "Meningkatkan efisiensi birokrasi perizinan kegiatan organisasi di tingkat fakultas.",
      "Mewujudkan budaya kerja paperless yang ramah lingkungan."
    ],
    targetAudience: "Fungsionaris BEM KM FTI dan pengurus lembaga kemahasiswaan se-FTI",
    location: "Cloud Database Server BEM KM FTI",
    featured: false
  },
  {
    id: "be-technopreneur-audkes",
    title: "BE TECHNOPRENEUR AUDKES",
    department: "Biro Audkes",
    departmentSlug: "audkes",
    category: "Administrasi",
    status: "Sedang Berjalan",
    date: "Sepanjang Periode",
    tags: ["Inventory", "Assets", "Management"],
    image: "/vismayakriya/dinasnexus/kegiatan/audkes/evalpengurus.webp",
    summary: "Digitalisasi inventaris barang sekretariat dan pengusahaan aset keorganisasian.",
    description: "Pengelolaan aset dan inventaris BEM KM FTI dengan barcode tracking untuk memastikan keberadaan dan perawatan barang organisasi.",
    objectives: [
      "Menertibkan peminjaman aset sekretariat.",
      "Menjamin kelengkapan fasilitas penunjang kegiatan pengurus."
    ],
    targetAudience: "Fungsionaris BEM KM FTI",
    location: "Sekretariat BEM FTI UNAND",
    featured: false
  },
  {
    id: "sop-pap-regulation",
    title: "SOP & PAP REGULATION",
    department: "Biro Audkes",
    departmentSlug: "audkes",
    category: "Administrasi",
    status: "Selesai",
    date: "Agustus 2025",
    tags: ["SOP", "Regulation", "Administration"],
    image: "/vismayakriya/dinasnexus/kegiatan/audkes/soppap.webp",
    summary: "Penerbitan pedoman baku penyusunan proposal dan laporan pertanggungjawaban kegiatan.",
    description: "Buku panduan tata administrasi persuratan dan keuangan resmi untuk seluruh dinas dan lembaga kemahasiswaan FTI.",
    objectives: [
      "Disiplin kelengkapan dokumen LPJ.",
      "Keseragaman format surat dan stempel resmi."
    ],
    targetAudience: "Sekretaris dan Bendahara Dinas/Biro",
    location: "Gedung PKM FTI UNAND",
    featured: false
  },
  {
    id: "sotm",
    title: "STAFF OF THE MONTH (SOTM)",
    department: "Biro Audkes",
    departmentSlug: "audkes",
    category: "Internal & Kelembagaan",
    status: "Sedang Berjalan",
    date: "Bulanan",
    tags: ["Reward", "Performance", "Appreciation"],
    image: "/vismayakriya/dinasnexus/kegiatan/audkes/sotm.webp",
    summary: "Program apresiasi bulanan bagi staf terdisiplin dan berkontribusi aktif.",
    description: "Pemberian penghargaan apresiatif bulanan untuk mendorong semangat kerja fungsionaris di lingkungan BEM KM FTI.",
    objectives: [
      "Memotivasi kinerja dan kedisiplinan staf pengurus.",
      "Membangun budaya apresiasi yang sehat."
    ],
    targetAudience: "Seluruh Staf Pengurus BEM KM FTI",
    location: "Aplikasi Internal BEM KM FTI",
    featured: false
  },
  {
    id: "evaluasi-pengurus",
    title: "EVALUASI PENGURUS",
    department: "Biro Audkes",
    departmentSlug: "audkes",
    category: "Administrasi",
    status: "Sedang Berjalan",
    date: "Tiga Bulanan",
    tags: ["Evaluation", "Audit", "Performance"],
    image: "/vismayakriya/dinasnexus/kegiatan/audkes/evalpengurus.webp",
    summary: "Audit kinerja berkala fungsionaris dan rapat evaluasi triwulan.",
    description: "Evaluasi capaian indikator kinerja utama (KPI) seluruh pengurus guna perbaikan mutu tata kelola organisasi secara berkelanjutan.",
    objectives: [
      "Mengukur keaktifan dan kehadiran fungsionaris.",
      "Memberikan umpan balik konstruktif bagi jimpinan dinas."
    ],
    targetAudience: "Seluruh Pengurus Kabinet Vismayakriya",
    location: "Ruang Seminar FTI UNAND",
    featured: false
  },

  // --- DINAS ADKESMA (7 PROKER) ---
  {
    id: "sahabat-fti",
    title: "Sahabat FTI (Advokasi Finansial & UKT)",
    department: "Dinas Adkesma",
    departmentSlug: "adkesma",
    category: "Advokasi & Kesejahteraan",
    status: "Sedang Berjalan",
    date: "Sepanjang Periode",
    tags: ["Advocacy", "UKT", "Scholarship", "Student Welfare"],
    image: "/vismayakriya/dinasnexus/kegiatan/adkesma/sahabatfti.webp",
    summary: "Layanan pendampingan advokasi banding UKT, verifikasi keringanan biaya kuliah, dan sebaran informasi beasiswa.",
    description: "Sahabat FTI merupakan garda pertahanan sosial mahasiswa FTI agar tidak ada satupun mahasiswa yang terancam putus kuliah karena kendala finansial.",
    objectives: [
      "Memastikan transparansi dan keadilan dalam peninjauan UKT.",
      "Pendampingan berkas mahasiswa prasejahtera."
    ],
    targetAudience: "Mahasiswa FTI yang membutuhkan bantuan advokasi UKT",
    location: "Helpdesk Online & Sekretariat BEM FTI",
    featured: false
  },
  {
    id: "advotalk",
    title: "ADVOTALK",
    department: "Dinas Adkesma",
    departmentSlug: "adkesma",
    category: "Advokasi & Kesejahteraan",
    status: "Selesai",
    date: "Oktober 2025",
    tags: ["Talkshow", "Advokasi", "Welfare"],
    image: "/vismayakriya/dinasnexus/kegiatan/adkesma/advotalk.webp",
    summary: "Talkshow edukatif seputar hak advokasi mahasiswa dan alur penyesuaian UKT.",
    description: "Diskusi interaktif bersama wakil dekan bidang kemahasiswaan mengenai fasilitas kampus dan beasiswa.",
    objectives: [
      "Transparansi kebijakan keuangan fakultas.",
      "Menyerap aspirasi keluhan fasilitas perkuliahan."
    ],
    targetAudience: "Seluruh Mahasiswa FTI UNAND",
    location: "Ruang Teater FTI",
    featured: false
  },
  {
    id: "maba-care",
    title: "MABA CARE",
    department: "Dinas Adkesma",
    departmentSlug: "adkesma",
    category: "Advokasi & Kesejahteraan",
    status: "Selesai",
    date: "Agustus 2025",
    tags: ["Maba", "Orientation", "Helpdesk"],
    image: "/vismayakriya/dinasnexus/kegiatan/adkesma/mabacare.webp",
    summary: "Posko pendampingan informasi akademik dan registrasi mahasiswa baru FTI.",
    description: "Layanan informasi dan pembimbingan adaptasi lingkungan kampus bagi mahasiswa baru angkatan 2025.",
    objectives: [
      "Mempermudah alur verifikasi berkas mahasiswa baru.",
      "Mencegah kendala administrasi awal kuliah."
    ],
    targetAudience: "Mahasiswa Baru FTI UNAND 2025",
    location: "Hall Dekanat FTI UNAND",
    featured: false
  },
  {
    id: "public-hearing",
    title: "PUBLIC HEARING",
    department: "Dinas Adkesma",
    departmentSlug: "adkesma",
    category: "Advokasi & Kesejahteraan",
    status: "Akan Datang",
    date: "November 2025",
    tags: ["Aspirasi", "Hearing", "Dekanat"],
    image: "/vismayakriya/dinasnexus/kegiatan/adkesma/publichearing.webp",
    summary: "Forum dengar pendapat langsung antara mahasiswa FTI dengan pimpinan Dekanat.",
    description: "Penyampaian berkas aspirasi riset fasilitas laboratorium, ruang kelas, dan akses wifi langsung ke Dekan.",
    objectives: [
      "Terselesaikannya keluhan sarana prasarana perkuliahan.",
      "Keterbukaan komunikasi pimpinan fakultas."
    ],
    targetAudience: "Perwakilan Lembaga dan Mahasiswa FTI",
    location: "Convention Hall UNAND",
    featured: false
  },
  {
    id: "nexcare",
    title: "NEXCARE HELPDESK",
    department: "Dinas Adkesma",
    departmentSlug: "adkesma",
    category: "Advokasi & Kesejahteraan",
    status: "Sedang Berjalan",
    date: "Sepanjang Periode",
    tags: ["Helpdesk", "Care", "Services"],
    image: "/vismayakriya/dinasnexus/kegiatan/adkesma/nexcare.webp",
    summary: "Layanan bot responsif 24/7 untuk keluhan akademik dan advokasi darurat.",
    description: "Kanal layanan cepat berbasis WhatsApp Bot untuk memfasilitasi pelaporan kendala kuliah dan beasiswa.",
    objectives: [
      "Responsivitas layanan advokasi di bawah 24 jam.",
      "Kemudahan pengaduan masalah akademik."
    ],
    targetAudience: "Mahasiswa FTI UNAND",
    location: "WhatsApp Gateway Official",
    featured: false
  },
  {
    id: "interscholar",
    title: "INTERSCHOLAR",
    department: "Dinas Adkesma",
    departmentSlug: "adkesma",
    category: "Advokasi & Kesejahteraan",
    status: "Sedang Berjalan",
    date: "Bulanan",
    tags: ["Scholarship", "Info Beasiswa", "International"],
    image: "/vismayakriya/dinasnexus/kegiatan/adkesma/interscholar.webp",
    summary: "Pusat rujukan dan konseling pendaftaran beasiswa prestasi & pertukaran mahasiswa luar negeri.",
    description: "Pendataan dan bimbingan penulisan essay beasiswa Bank Indonesia, Djarum, IISMA, dan Pertukaran Pemuda.",
    objectives: [
      "Meningkatkan kuantitas penerima beasiswa dari FTI.",
      "Mentoring berkas dan wawancara beasiswa."
    ],
    targetAudience: "Mahasiswa FTI pemburu beasiswa",
    location: "Online Portal Adkesma",
    featured: false
  },
  {
    id: "ipk-plus",
    title: "IPK PLUS",
    department: "Dinas Adkesma",
    departmentSlug: "adkesma",
    category: "Advokasi & Kesejahteraan",
    status: "Sedang Berjalan",
    date: "Tiap Semester",
    tags: ["Academic", "Tutoring", "IPK"],
    image: "/vismayakriya/dinasnexus/kegiatan/adkesma/ipkplus.webp",
    summary: "Program belajar tutor sebaya mata kuliah dasar kalkulus, fisika, dan algoritma koding.",
    description: "Kelas bimbingan tutor mahasiswa berprestasi untuk membantu mahasiswa yang kesulitan akademik.",
    objectives: [
      "Menurunkan persentase mahasiswa ber-IPK rendah.",
      "Meningkatkan kelulusan mata kuliah prasyarat."
    ],
    targetAudience: "Mahasiswa Tingkat 1 & 2 FTI",
    location: "Ruang Kelas Gedung H FTI",
    featured: false
  },

  // --- DINAS BISTECH (6 PROKER) ---
  {
    id: "be-technopreneur",
    title: "Be Technopreneur & Warnex",
    department: "Dinas Bistech",
    departmentSlug: "bistech",
    category: "Kewirausahaan",
    status: "Sedang Berjalan",
    date: "Sepanjang Periode",
    tags: ["Business", "Merchandise", "Store", "Entrepreneurship"],
    image: "/vismayakriya/dinasnexus/kegiatan/bistech/warnex.webp",
    summary: "Ekosistem lini bisnis resmi BEM KM FTI mencakup merchandise eksklusif dan atribut kebanggaan.",
    description: "Unit usaha mandiri penyedia kaos, jaket angkatan, lanyard modern, dan merchandise resmi FTI.",
    objectives: [
      "Menciptakan pendanaan mandiri legal bagi keorganisasian.",
      "Identitas kebanggaan civitas akademika FTI."
    ],
    targetAudience: "Mahasiswa, Alumni, dan Dosen FTI",
    location: "Etalase Fisik BEM FTI & Catalog Online",
    featured: false
  },
  {
    id: "bisgenius-workshop",
    title: "BISGENIUS WORKSHOP",
    department: "Dinas Bistech",
    departmentSlug: "bistech",
    category: "Kewirausahaan",
    status: "Selesai",
    date: "September 2025",
    tags: ["Startup", "Workshop", "Pitching"],
    image: "/vismayakriya/dinasnexus/kegiatan/bistech/bisgenius.webp",
    summary: "Workshop inkubasi bisnis rintisan digital dan pelatihan business plan pitching.",
    description: "Pelatihan penyusunan deck modal usaha bagi calon wirausahawan muda FTI.",
    objectives: [
      "Mencetak bibit startup digital dari FTI.",
      "Kemampuan riset pasar dan finansial bisnis."
    ],
    targetAudience: "Mahasiswa FTI berminat bisnis",
    location: "Lab Business Intelligence FTI",
    featured: false
  },
  {
    id: "merchandise-fti",
    title: "MERCHANDISE OFFICIAL FTI",
    department: "Dinas Bistech",
    departmentSlug: "bistech",
    category: "Kewirausahaan",
    status: "Sedang Berjalan",
    date: "Sepanjang Periode",
    tags: ["Merch", "Design", "Product"],
    image: "/vismayakriya/dinasnexus/kegiatan/bistech/merchandise.webp",
    summary: "Rilis koleksi apparel, jaket pdh, dan aksesoris resmi identitas FTI UNAND.",
    description: "Penjualan kemeja PDH, gantungan kunci akrilik, dan totebag berdesain futuristik.",
    objectives: [
      "Menggali kreativitas produk apparel kebanggaan FTI.",
      "Profit kas operasional organisasi."
    ],
    targetAudience: "Civitas Akademika FTI",
    location: "Store Online Bistech",
    featured: false
  },
  {
    id: "graduation-needs",
    title: "GRADUATION NEEDS & PHOTOSHOOT",
    department: "Dinas Bistech",
    departmentSlug: "bistech",
    category: "Kewirausahaan",
    status: "Sedang Berjalan",
    date: "Setiap Wisuda",
    tags: ["Wisuda", "Photo", "Flowers"],
    image: "/vismayakriya/dinasnexus/kegiatan/bistech/graduationneeds.webp",
    summary: "Penyediaan buket bunga, selempang wisuda, dan jasa foto studio perayaan wisudawan FTI.",
    description: "Layanan paket lengkap kebutuhan wisuda mahasiswa FTI dengan harga terjangkau.",
    objectives: [
      "Mempermudah kebutuhan wisudawan dan keluarga.",
      "Peluang usaha rutin tiap periode wisuda."
    ],
    targetAudience: "Calon Wisudawan FTI UNAND",
    location: "Pelataran Gedung Dekanat FTI",
    featured: false
  },
  {
    id: "partnership-sponsorship",
    title: "PARTNERSHIP & SPONSORSHIP HUB",
    department: "Dinas Bistech",
    departmentSlug: "bistech",
    category: "Kewirausahaan",
    status: "Sedang Berjalan",
    date: "Sepanjang Periode",
    tags: ["Sponsor", "Partnership", "Corporate"],
    image: "/vismayakriya/dinasnexus/kegiatan/bistech/partnership.webp",
    summary: "Pengelolaan kerja sama komersial dan jaringan sponsor kegiatan mahasiswa.",
    description: "Manajemen proposal sponsorship terpadu untuk pendanaan acara Technofest dan FTI Parade.",
    objectives: [
      "Menjalin MOU dengan brand teknologi dan startup terkemuka.",
      "Stabilitas pendanaan acara berskala besar."
    ],
    targetAudience: "Perusahaan Mitra & Event Organizer",
    location: "Ruang Kemitraan BEM FTI",
    featured: false
  },
  {
    id: "warnex-store",
    title: "WARNEX ONLINE STORE",
    department: "Dinas Bistech",
    departmentSlug: "bistech",
    category: "Kewirausahaan",
    status: "Sedang Berjalan",
    date: "Sepanjang Periode",
    tags: ["E-commerce", "Store", "Warnex"],
    image: "/vismayakriya/dinasnexus/kegiatan/bistech/warnex.webp",
    summary: "Platform toko daring resmi produk kreatif usaha mahasiswa FTI.",
    description: "Portal e-commerce lokal untuk memasarkan produk buatan tangan dan software karya mahasiswa FTI.",
    objectives: [
      "Wadah pemasaran karya kreatif mahasiswa FTI.",
      "Pengalaman pengelolaan transaksi digital."
    ],
    targetAudience: "Pembeli umum & Mahasiswa UNAND",
    location: "Warnex Web Store",
    featured: false
  },

  // --- DINAS EKSTERNAL (6 PROKER) ---
  {
    id: "technofest",
    title: "Technofest FTI UNAND",
    department: "Dinas Eksternal",
    departmentSlug: "eksternal",
    category: "Teknologi",
    status: "Sedang Berjalan",
    date: "November 2025",
    tags: ["Technology", "Competition", "National", "Seminar"],
    image: "/vismayakriya/dinasnexus/kegiatan/eksternal/technofest.webp",
    summary: "Pekan festival teknologi akbar tingkat nasional yang menghadirkan seminar internasional dan kompetisi IT.",
    description: "Technofest merupakan program kerja unggulan berskala nasional yang diselenggarakan untuk mempertemukan talenta muda teknologi se-Indonesia.",
    objectives: [
      "Branding eksistensi FTI UNAND di kancah nasional.",
      "Arena kompetisi karya teknologi terapan."
    ],
    targetAudience: "Mahasiswa se-Indonesia dan Praktisi IT",
    location: "Auditorium Universitas Andalas",
    featured: true
  },
  {
    id: "bem-visit",
    title: "BEM VISIT & DIPLOMASI",
    department: "Dinas Eksternal",
    departmentSlug: "eksternal",
    category: "Internal & Kelembagaan",
    status: "Selesai",
    date: "Oktober 2025",
    tags: ["Diplomacy", "Studi Banding", "BEM Visit"],
    image: "/vismayakriya/dinasnexus/kegiatan/eksternal/bemvisit.webp",
    summary: "Kunjungan diplomasi studi banding ke BEM Perguruan Tinggi ternama Indonesia.",
    description: "Forum pertukaran inovasi tata kelola organisasi bersama BEM fakultas teknologi dari ITB, UI, dan UGM.",
    objectives: [
      "Benchmark sistem kerja keorganisasian.",
      "Jejaring aliansi mahasiwa teknologi nasional."
    ],
    targetAudience: "Pengurus BEM FTI & Kampus Mitra",
    location: "Hybrid / Kampus Mitra",
    featured: false
  },
  {
    id: "alumni-insight",
    title: "ALUMNI INSIGHT & CAREER HUB",
    department: "Dinas Eksternal",
    departmentSlug: "eksternal",
    category: "Pendidikan & Riset",
    status: "Sedang Berjalan",
    date: "Bulanan",
    tags: ["Alumni", "Career", "Sharing"],
    image: "/vismayakriya/dinasnexus/kegiatan/eksternal/alumniinsight.webp",
    summary: "Sesi sharing karir dan bimbingan kerja langsung bersama alumni sukses FTI di tech company.",
    description: "Webinar berkala yang mengundang alumni penanggung jawab tim di Tokopedia, Gojek, dan Google.",
    objectives: [
      "Mentoring rintisan karir mahasiswa tingkat akhir.",
      "Memperkuat ikatan alumni FTI UNAND."
    ],
    targetAudience: "Mahasiswa Aktif & Alumni FTI",
    location: "Zoom & YouTube Channel",
    featured: false
  },
  {
    id: "youth-impact-festival",
    title: "YOUTH IMPACT FESTIVAL",
    department: "Dinas Eksternal",
    departmentSlug: "eksternal",
    category: "Teknologi",
    status: "Akan Datang",
    date: "Februari 2026",
    tags: ["Youth", "Festival", "Impact"],
    image: "/vismayakriya/dinasnexus/kegiatan/eksternal/youthimpact.webp",
    summary: "Festival inspirasi kepemudaan dan aksi sosial berbasis inovasi digital.",
    description: "Ajang pertemuan komunitas pemuda Sumatera Barat untuk mengolaborasikan proyek impact lingkungan.",
    objectives: [
      "Menggerakkan pemuda solutif di daerah.",
      "Kolaborasi komunitas kreatif Sumbar."
    ],
    targetAudience: "Pemuda & Mahasiswa Sumbar",
    location: "Gedung Kebudayaan Sumatera Barat",
    featured: false
  },
  {
    id: "iit-collaboration",
    title: "IIT COLLABORATION",
    department: "Dinas Eksternal",
    departmentSlug: "eksternal",
    category: "Teknologi",
    status: "Sedang Berjalan",
    date: "Sepanjang Periode",
    tags: ["International", "Collaboration", "Tech"],
    image: "/vismayakriya/dinasnexus/kegiatan/eksternal/iit.webp",
    summary: "Forum kolaborasi teknologi dengan institusi internasional dan perguruan tinggi luar negeri.",
    description: "Program kemitraan webinar internasional dan penyiapan pertukaran mahasiswa FTI.",
    objectives: [
      "Memperluas wawasan global mahasiswa FTI.",
      "Kerja sama riset tingkat internasional."
    ],
    targetAudience: "Mahasiswa & Dosen FTI",
    location: "Hybrid International Conference",
    featured: false
  },
  {
    id: "media-partnership",
    title: "MEDIA PARTNERSHIP NETWORK",
    department: "Dinas Eksternal",
    departmentSlug: "eksternal",
    category: "Media & Komunikasi",
    status: "Sedang Berjalan",
    date: "Sepanjang Periode",
    tags: ["Media", "Partnership", "Publish"],
    image: "/vismayakriya/dinasnexus/kegiatan/eksternal/medpart.webp",
    summary: "Pengelolaan publikasi silang bersama pers mahasiswa dan media partner lokal/nasional.",
    description: "Jejaring penyiaran kabar acara BEM FTI melalui radio kampus, portal pers, dan media massa.",
    objectives: [
      "Jangkauan publisitas acara BEM FTI.",
      "Hubungan harmonis dengan insan pers."
    ],
    targetAudience: "Event Organizer & Media Partner",
    location: "Portal Media Eksternal",
    featured: false
  },

  // --- DINAS INTERNAL (5 PROKER) ---
  {
    id: "fti-parade",
    title: "FTI Parade Solidaritas",
    department: "Dinas Internal",
    departmentSlug: "internal",
    category: "Internal & Kelembagaan",
    status: "Akan Datang",
    date: "Maret 2026",
    tags: ["Culture", "Solidarity", "Celebration", "KM FTI"],
    image: "/vismayakriya/dinasnexus/kegiatan/internal/FTI Parade.webp",
    summary: "Karnaval perayaan solidaritas seluruh himpunan dan civitas akademika FTI UNAND.",
    description: "Ajang unjuk kreasi, pentas seni, apresiasi budaya, dan selebrasi persaudaraan mahasiswa FTI.",
    objectives: [
      "Mempererat rasa kebersamaan antarjurusan FTI.",
      "Panggung ekspresi non-akademik seni & musik."
    ],
    targetAudience: "Mahasiswa, Dosen, dan Alumni FTI",
    location: "Plaza Utama FTI UNAND",
    featured: true
  },
  {
    id: "bakti-fti",
    title: "BAKTI FTI 2025",
    department: "Dinas Internal",
    departmentSlug: "internal",
    category: "Internal & Kelembagaan",
    status: "Selesai",
    date: "Agustus 2025",
    tags: ["Bakti", "Orientation", "KM FTI"],
    image: "/vismayakriya/dinasnexus/kegiatan/internal/bakti.webp",
    summary: "Rangkaian penyambutan dan pengenalan tradisi kampus bagi mahasiswa baru FTI.",
    description: "Pengenalan kultur akademik, profil jurusan, dan kelembagaan FTI bagi angkatan 2025.",
    objectives: [
      "Menanamkan karakter kebanggaan KM FTI.",
      "Adaptasi kehidupan kampus yang hangat."
    ],
    targetAudience: "Mahasiswa Baru FTI 2025",
    location: "Auditorium & Gedung FTI",
    featured: false
  },
  {
    id: "jelajah-lembaga",
    title: "JELAJAH LEMBAGA FTI",
    department: "Dinas Internal",
    departmentSlug: "internal",
    category: "Internal & Kelembagaan",
    status: "Selesai",
    date: "September 2025",
    tags: ["Ormawa", "Tour", "Introduction"],
    image: "/vismayakriya/dinasnexus/kegiatan/internal/jelajahlembaga.webp",
    summary: "Pameran interaktif profil 3 Himpunan dan 4 UKM FTI untuk mahasiswa baru.",
    description: "Expo kelembagaan yang memfasilitasi mahasiswa memilih wadah minat bakat organisasi.",
    objectives: [
      "Sosialisasi kegiatan UKM dan Himpunan.",
      "Regenerasi pengurus lembaga kemahasiswaan."
    ],
    targetAudience: "Mahasiswa Baru & Mahasiswa Aktif FTI",
    location: "Plaza Dekanat FTI",
    featured: false
  },
  {
    id: "temko",
    title: "TEMU KOORDINASI (TEMKO)",
    department: "Dinas Internal",
    departmentSlug: "internal",
    category: "Internal & Kelembagaan",
    status: "Sedang Berjalan",
    date: "Dua Bulanan",
    tags: ["Temko", "Konsolidasi", "Ormawa"],
    image: "/vismayakriya/dinasnexus/kegiatan/internal/internal.webp",
    summary: "Forum musyawarah dan penyesuaian kalender kegiatan bersama pimpinan HMJ & UKM.",
    description: "Rapat koordinasi berkala pimpinan kelembagaan FTI untuk harmonisasi jadwal acara kampus.",
    objectives: [
      "Mencegah bentrok jadwal kegiatan kelembagaan.",
      "Menjaga keterbukaan komunikasi antarormawa."
    ],
    targetAudience: "Ketua BEM, DPM, HMJ, dan UKM FTI",
    location: "Ruang Rapat BEM FTI",
    featured: false
  },
  {
    id: "nexgo-internal-tour",
    title: "NEXGO INTERNAL TOUR",
    department: "Dinas Internal",
    departmentSlug: "internal",
    category: "Internal & Kelembagaan",
    status: "Sedang Berjalan",
    date: "Bulanan",
    tags: ["Gathering", "Bonding", "Internal"],
    image: "/vismayakriya/dinasnexus/kegiatan/internal/nexgo.webp",
    summary: "Kegiatan keakraban dan olahraga bersama pengurus BEM KM FTI.",
    description: "Ajang fun game, olahraga futsal/badminton, dan keakraban fungsionaris antar dinas.",
    objectives: [
      "Menjaga kekompakan dan kesehatan mental pengurus.",
      "Menghilangkan sekat antar dinas."
    ],
    targetAudience: "Seluruh Pengurus BEM FTI",
    location: "GOR UNAND & Lapangan FTI",
    featured: false
  },

  // --- DINAS KASTRAT (5 PROKER) ---
  {
    id: "women-care",
    title: "Women Care & Safety Campus",
    department: "Dinas Kastrat",
    departmentSlug: "kastrat",
    category: "Kajian & Pergerakan",
    status: "Selesai",
    date: "Desember 2025",
    tags: ["Women Care", "Safe Campus", "Equality"],
    image: "/vismayakriya/dinasnexus/kegiatan/kastrat/womencare.webp",
    summary: "Edukasi ruang aman kampus, pencegahan kekerasan seksual, dan peranan mahasiswi di teknologi.",
    description: "Kampanye komprehensif menciptakan ekosistem kampus yang aman, bebas pelecehan, dan bermartabat.",
    objectives: [
      "Edukasi penanganan kekerasan seksual di kampus.",
      "Penguatan peran mahasiswi dalam riset sains."
    ],
    targetAudience: "Sivitas Akademika UNAND",
    location: "Ruang Teater FTI UNAND",
    featured: false
  },
  {
    id: "diskusi-strategis",
    title: "DISKUSI STRATEGIS KASTRAT",
    department: "Dinas Kastrat",
    departmentSlug: "kastrat",
    category: "Kajian & Pergerakan",
    status: "Sedang Berjalan",
    date: "Bulanan",
    tags: ["Kajian", "Diskusi", "Kebijakan"],
    image: "/vismayakriya/dinasnexus/kegiatan/kastrat/diskusistrategis.webp",
    summary: "Bedah isu sosial politik nasional dan kebijakan teknologi publik.",
    description: "Forum mimbar bebas mahasiswa untuk menguliti isu digital privacy, UU ITE, dan kebijakan kampus.",
    objectives: [
      "Mengasah daya nalar kritis mahasiswa FTI.",
      "Sikap resmi pergerakan mahasiswa."
    ],
    targetAudience: "Mahasiswa FTI & Pegiat Pergerakan",
    location: "Plaza Teater FTI UNAND",
    featured: false
  },
  {
    id: "kajian-isu-kampus",
    title: "KAJIAN ILMIAH ISU KAMPUS",
    department: "Dinas Kastrat",
    departmentSlug: "kastrat",
    category: "Kajian & Pergerakan",
    status: "Sedang Berjalan",
    date: "Dua Mingguan",
    tags: ["Kajian", "Data", "Riset"],
    image: "/vismayakriya/dinasnexus/kegiatan/kastrat/kastrat.webp",
    summary: "Penerbitan buletin kajian berbasis data statistik mengenai isu kebijakan rektorat.",
    description: "Publikasi dokumen riset kuantitatif mengenai efektivitas fasilitas kuliah dan survei mahasiswa.",
    objectives: [
      "Landasan data autentik untuk advokasi.",
      "Literasi politik berbasis riset empiris."
    ],
    targetAudience: "Seluruh Mahasiswa UNAND",
    location: "Medium Portal Online Kastrat",
    featured: false
  },
  {
    id: "restart-propaganda",
    title: "RESTART PROPAGANDA POSITIF",
    department: "Dinas Kastrat",
    departmentSlug: "kastrat",
    category: "Kajian & Pergerakan",
    status: "Sedang Berjalan",
    date: "Sepanjang Periode",
    tags: ["Propaganda", "Poster", "Movement"],
    image: "/vismayakriya/dinasnexus/kegiatan/kastrat/restart.webp",
    summary: "Kampanye visual infografis pencerdasan isu kebangsaan dan kesadaran hukum digital.",
    description: "Penerbitan infografis kreatif berisi pesan moral dan pencerdasan isu terkini di media sosial.",
    objectives: [
      "Kesadaran kritis mahasiswa melalui konten visual.",
      "Informasi hukum digital secara populer."
    ],
    targetAudience: "Netizen & Mahasiswa FTI",
    location: "Instagram & TikTok Official",
    featured: false
  },
  {
    id: "kpk",
    title: "KLINIK POLITIK KAMPUS (KPK)",
    department: "Dinas Kastrat",
    departmentSlug: "kastrat",
    category: "Kajian & Pergerakan",
    status: "Akan Datang",
    date: "Januari 2026",
    tags: ["KPK", "Politik", "Edukasi"],
    image: "/vismayakriya/dinasnexus/kegiatan/kastrat/diskusistrategis.webp",
    summary: "Sekolah kepemimpinan dan pendidikan kebangsaan bagi aktivis muda FTI.",
    description: "Modul pelatihan pemahaman tata negara, perancangan gerakan sosial, dan etika pergerakan.",
    objectives: [
      "Mencetak aktivis mahasiswa yang berintegritas.",
      "Pemahaman hukum dan alur advokasi massa."
    ],
    targetAudience: "Staf Kastrat & Perwakilan Ormawa",
    location: "Ruang Sidang FTI UNAND",
    featured: false
  },

  // --- DINAS MEDINKRAF (6 PROKER) ---
  {
    id: "jendela-fti",
    title: "Jendela FTI & Creative Content",
    department: "Dinas Medinkraf",
    departmentSlug: "medinkraf",
    category: "Media & Komunikasi",
    status: "Sedang Berjalan",
    date: "Mingguan",
    tags: ["Media", "Design", "Information", "Creative"],
    image: "/vismayakriya/dinasnexus/kegiatan/medin/jendelafti.webp",
    summary: "Publikasi visual rangkuman prestasi, jadwal akademik, dan profil tokoh inspiratif FTI.",
    description: "Konten infografis dan karusel di Instagram @bemkmftiunand menyajikan intisari pengumuman akademik.",
    objectives: [
      "Rujukan informasi cepat dan terpercaya.",
      "Apresiasi prestasi sivitas akademika FTI."
    ],
    targetAudience: "Seluruh Followers BEM KM FTI",
    location: "Instagram & LinkedIn BEM FTI",
    featured: false
  },
  {
    id: "nexus-highlight",
    title: "NEXUS HIGHLIGHT & RECAP",
    department: "Dinas Medinkraf",
    departmentSlug: "medinkraf",
    category: "Media & Komunikasi",
    status: "Sedang Berjalan",
    date: "Mingguan",
    tags: ["Video", "Reels", "Sinematik"],
    image: "/vismayakriya/dinasnexus/kegiatan/medin/mediaconnect.webp",
    summary: "Produksi video sinematik dokumentasi kegiatan dan recap keseruan acara kampus.",
    description: "Reels sinematik dan video pendek TikTok yang merekam setiap momen kegiatan BEM FTI.",
    objectives: [
      "Dokumentasi arsip visual yang berkualitas.",
      "Meningkatkan engagement media sosial."
    ],
    targetAudience: "Pengguna Instagram & TikTok",
    location: "Instagram Reels & YouTube Shorts",
    featured: false
  },
  {
    id: "creative-studio",
    title: "CREATIVE STUDIO BRANDING",
    department: "Dinas Medinkraf",
    departmentSlug: "medinkraf",
    category: "Media & Komunikasi",
    status: "Sedang Berjalan",
    date: "Sepanjang Periode",
    tags: ["Branding", "Studio", "Assets"],
    image: "/vismayakriya/dinasnexus/kegiatan/studio.webp",
    summary: "Standardisasi identitas visual, font, palette warna, dan template desain kabinet.",
    description: "Pengelolaan aset grafis dan penyediaan jasa desain banner/poster untuk internal BEM FTI.",
    objectives: [
      "Konsistensi branding visual Vismayakriya.",
      "Efisiensi produksi materi publikasi."
    ],
    targetAudience: "Seluruh Dinas/Biro BEM FTI",
    location: "Cloud Assets Medinkraf",
    featured: false
  },
  {
    id: "active-media",
    title: "ACTIVE MEDIA MANAGEMENT",
    department: "Dinas Medinkraf",
    departmentSlug: "medinkraf",
    category: "Media & Komunikasi",
    status: "Sedang Berjalan",
    date: "Sepanjang Periode",
    tags: ["Social Media", "Admin", "Broadcast"],
    image: "/vismayakriya/dinasnexus/kegiatan/medin/jendelafti.webp",
    summary: "Manajemen responsif seluruh akun saluran informasi digital resmi BEM KM FTI.",
    description: "Pengelolaan postingan, DM, dan broadcast saluran informasi di Instagram, TikTok, dan Website.",
    objectives: [
      "Interaktivitas pengikut media sosial BEM.",
      "Alur informasi terpusat dan rapi."
    ],
    targetAudience: "Mahasiswa & Publik Umum",
    location: "Official Social Media BEM FTI",
    featured: false
  },
  {
    id: "spotlight-karya",
    title: "SPOTLIGHT KARYA MAHASISWA",
    department: "Dinas Medinkraf",
    departmentSlug: "medinkraf",
    category: "Media & Komunikasi",
    status: "Sedang Berjalan",
    date: "Dua Mingguan",
    tags: ["Spotlight", "Karya", "Apresiasi"],
    image: "/vismayakriya/dinasnexus/kegiatan/medin/spotlight.webp",
    summary: "Panggung apresiasi visual bagi karya desain, UI/UX, dan proyek aplikasi buatan mahasiswa.",
    description: "Karusel pameran karya cipta mahasiswa FTI untuk menginspirasi civitas akademika.",
    objectives: [
      "Menumbuhkan rasa bangga atas karya sendiri.",
      "Inspirasi inovasi antar sesama mahasiswa."
    ],
    targetAudience: "Mahasiswa Kreatif FTI UNAND",
    location: "Instagram Feed BEM FTI",
    featured: false
  },
  {
    id: "media-connect",
    title: "MEDIA CONNECT WORKSHOP",
    department: "Dinas Medinkraf",
    departmentSlug: "medinkraf",
    category: "Media & Komunikasi",
    status: "Selesai",
    date: "September 2025",
    tags: ["Workshop", "Design", "Videography"],
    image: "/vismayakriya/dinasnexus/kegiatan/medin/mediaconnect.webp",
    summary: "Pelatihan internal videografi sinematik dan desain grafis modern bagi staf media.",
    description: "Workshop peningkatan kapasitas staf Medinkraf dalam menguasai software Premiere dan Figma.",
    objectives: [
      "Keahlian teknis staf Medinkraf.",
      "Peningkatan standar estetika desain."
    ],
    targetAudience: "Staf Dinas Medinkraf BEM FTI",
    location: "Lab Komputer Grafis FTI",
    featured: false
  },

  // --- DINAS PSDM (4 PROKER) ---
  {
    id: "lkmmtd-fti",
    title: "LKMM-TD FTI UNAND 2026",
    department: "Dinas PSDM",
    departmentSlug: "psdm",
    category: "Pendidikan & Riset",
    status: "Akan Datang",
    date: "Januari 2026",
    tags: ["Leadership", "Management", "Cadre"],
    image: "/vismayakriya/dinasnexus/kegiatan/psdm/lkmmtd.webp",
    summary: "Latihan Keterampilan Manajemen Mahasiswa Tingkat Dasar untuk mencetak calon pemimpin beretika.",
    description: "Pelatihan kepemimpinan formal bersertifikat nasional membekali mahasiswa muda kemampuan manajerial.",
    objectives: [
      "Regenerasi kepemimpinan berdaya nalar kritis.",
      "Perencanaan kegiatan organisasi yang matang."
    ],
    targetAudience: "Mahasiswa Angkatan 2024 & 2025 FTI",
    location: "Convention Hall UNAND",
    featured: false
  },
  {
    id: "nexmud-cadre",
    title: "NEXMUD CADRE TRAINING",
    department: "Dinas PSDM",
    departmentSlug: "psdm",
    category: "Pendidikan & Riset",
    status: "Sedang Berjalan",
    date: "Sepanjang Periode",
    tags: ["Nexmud", "Staf Muda", "Pembinaan"],
    image: "/vismayakriya/dinasnexus/nexmudristek/nexmud.webp",
    summary: "Program magang staf muda (Nexmud) dan pembinaan keorganisasian berkesinambungan.",
    description: "Pembinaan mahasiswa tingkat 1 yang magang di dinas-dinas BEM FTI untuk penyiapan fungsionaris.",
    objectives: [
      "Pengenalan ritme kerja organisasi sejak dini.",
      "Penyiapan kader penerus pengurus kabinet."
    ],
    targetAudience: "Staf Muda (Nexmud) FTI 2025",
    location: "Sekretariat BEM FTI UNAND",
    featured: false
  },
  {
    id: "faa",
    title: "FORUM ALUMNI & AKTIVIS (FAA)",
    department: "Dinas PSDM",
    departmentSlug: "psdm",
    category: "Internal & Kelembagaan",
    status: "Selesai",
    date: "Oktober 2025",
    tags: ["Forum", "Aktivis", "Alumni"],
    image: "/vismayakriya/dinasnexus/kegiatan/psdm/psdm.webp",
    summary: "Ruang temu ramah dan transfer pengalaman bersama mantan aktivis pimpinan BEM FTI terdahulu.",
    description: "Diskusi sarasehan bersama demisioner Gubernur BEM FTI mengenai kepemimpinan murni.",
    objectives: [
      "Transfer pengetahuan sejarah pergerakan FTI.",
      "Nilai-nilai kepemimpinan lintas generasi."
    ],
    targetAudience: "Seluruh Pengurus BEM FTI",
    location: "Ruang Sidang Utama Dekanat",
    featured: false
  },
  {
    id: "wisuda-bakti-apresiasi",
    title: "WISUDA BAKTI & APRESIASI PENGURUS",
    department: "Dinas PSDM",
    departmentSlug: "psdm",
    category: "Internal & Kelembagaan",
    status: "Sedang Berjalan",
    date: "Setiap Wisuda",
    tags: ["Apresiasi", "Wisuda", "Demisioner"],
    image: "/vismayakriya/dinasnexus/kegiatan/psdm/wisudabakti.webp",
    summary: "Apresiasi perpisahan dan penghormatan bagi pengurus BEM yang menyelesaikan studi sarjana.",
    description: "Acara penganugerahan piagam penghargaan dan pelepasan senior pengurus yang wisuda.",
    objectives: [
      "Penghormatan atas dedikasi pengurus.",
      "Tali silaturahmi yang tidak pernah putus."
    ],
    targetAudience: "Pengurus BEM FTI yang Wisuda",
    location: "Plaza Dekanat FTI UNAND",
    featured: false
  },

  // --- DINAS RISTEK (6 PROKER) ---
  {
    id: "hackathon-fti",
    title: "Hackathon FTI UNAND",
    department: "Dinas Ristek",
    departmentSlug: "ristek",
    category: "Pendidikan & Riset",
    status: "Selesai",
    date: "Oktober 2025",
    tags: ["Hackathon", "Coding", "Innovation"],
    image: "/vismayakriya/dinasnexus/kegiatan/ristek/hackathon.webp",
    summary: "Kompetisi coding intensif 24 jam untuk merancang prototipe solusi digital bagi tantangan nyata masyarakat.",
    description: "Hackathon FTI menantang mahasiswa berkolaborasi dalam tim interdisipliner membangun produk perankat lunak.",
    objectives: [
      "Uji ketahanan dan kecepatan mahasiswa koding.",
      "Bibit startup teknologi baru dari FTI."
    ],
    targetAudience: "Mahasiswa Aktif FTI UNAND",
    location: "Lab Komputer Terpadu FTI",
    featured: true
  },
  {
    id: "tech-research-hub",
    title: "FTI Tech Research Hub",
    department: "Dinas Ristek",
    departmentSlug: "ristek",
    category: "Pendidikan & Riset",
    status: "Sedang Berjalan",
    date: "Sepanjang Periode",
    tags: ["Research", "Repository", "Skripsi"],
    image: "/vismayakriya/dinasnexus/kegiatan/ristek/techhub.webp",
    summary: "Pusat database digital dan kurasi riset skripsi, tugas akhir, serta publikasi jurnal mahasiswa FTI.",
    description: "Repositori daring karya penelitian mahasiswa tingkat akhir untuk mencegah duplikasi riset.",
    objectives: [
      "Akses referensi tugas akhir mahasiswa FTI.",
      "Visibilitas riset inovatif karya mahasiswa."
    ],
    targetAudience: "Mahasiswa Tingkat Akhir & Dosen",
    location: "Portal Digital BEM FTI",
    featured: false
  },
  {
    id: "italk-podcast",
    title: "ITalk Podcast BEM FTI",
    department: "Dinas Ristek",
    departmentSlug: "ristek",
    category: "Teknologi",
    status: "Sedang Berjalan",
    date: "Dua Mingguan",
    tags: ["Podcast", "Spotify", "Tech Talk"],
    image: "/vismayakriya/dinasnexus/kegiatan/ristek/italk.webp",
    summary: "Bincang santai inspiratif bersama pakar industri teknologi, dosen visioner, dan mahasiswa berprestasi.",
    description: "Podcast audio-visual di Spotify & YouTube membahas AI, tren karir IT, dan tips magang luar negeri.",
    objectives: [
      "Edukasi teknologi dengan gaya santai.",
      "Profil alumni sukses FTI sebagai panutan."
    ],
    targetAudience: "Mahasiswa FTI & Pecinta IT",
    location: "Spotify & YouTube Official",
    featured: false
  },
  {
    id: "it-spectrum",
    title: "IT SPECTRUM SYMPOSIUM",
    department: "Dinas Ristek",
    departmentSlug: "ristek",
    category: "Pendidikan & Riset",
    status: "Akan Datang",
    date: "Desember 2025",
    tags: ["AI", "Web3", "Cyber Security"],
    image: "/vismayakriya/dinasnexus/kegiatan/ristek/rizztek.webp",
    summary: "Simposium ilmiah dan pameran spektrum tren teknologi mutakhir era artificial intelligence.",
    description: "Kuliah umum pakar AI, Cloud Computing, dan pameran poster riset ilmiah laboratorium FTI.",
    objectives: [
      "Wadah ekspresi hasil karya laboratorium riset.",
      "Inisiasi study group bidang AI & Security."
    ],
    targetAudience: "Mahasiswa & Dosen FTI UNAND",
    location: "Ruang Seminar Gedung FTI",
    featured: false
  },
  {
    id: "competehub",
    title: "COMPETEHUB RISTEK LOMBA IT",
    department: "Dinas Ristek",
    departmentSlug: "ristek",
    category: "Teknologi",
    status: "Sedang Berjalan",
    date: "Sepanjang Periode",
    tags: ["Competition", "Gemastik", "PKM"],
    image: "/vismayakriya/dinasnexus/kegiatan/ristek/techhub.webp",
    summary: "Portal pembinaan dan pemetaan kontingen lomba Gemastik, PKM, dan hackathon nasional.",
    description: "Pusat komando pendataan tim perlombaan, pencarian rekan tim, dan pendampingan dosen pembimbing.",
    objectives: [
      "Tingkat kemenangan mahasiswa di Gemastik & PKM.",
      "Pembinaan kontingen perlombaan FTI."
    ],
    targetAudience: "Mahasiswa FTI Pemburu Prestasi",
    location: "Online Portal & Sekretariat BEM",
    featured: false
  },
  {
    id: "techtonic-workshop",
    title: "TECHTONIC WORKSHOP DEVELOPMENT",
    department: "Dinas Ristek",
    departmentSlug: "ristek",
    category: "Teknologi",
    status: "Selesai",
    date: "Agustus 2025",
    tags: ["Workshop", "React", "Nodejs"],
    image: "/vismayakriya/dinasnexus/kegiatan/ristek/hackathon.webp",
    summary: "Pelatihan praktis koding hands-on pengembangan web modern, mobile app, dan cloud deployment.",
    description: "Workshop praktis membimbing peserta membangun portofolio proyek perangkat lunak dengan React & Node.",
    objectives: [
      "Keterampilan koding praktis mahasiswa FTI.",
      "Portofolio proyek perangkat lunak pemula."
    ],
    targetAudience: "Mahasiswa Tingkat Awal FTI",
    location: "Lab Komputer FTI UNAND",
    featured: false
  },

  // --- DINAS SOSMASLING (5 PROKER) ---
  {
    id: "fti-bina-desa",
    title: "FTI Bina Desa Digitalisation",
    department: "Dinas Sosmasling",
    departmentSlug: "sosmasling",
    category: "Pengabdian Masyarakat",
    status: "Selesai",
    date: "September 2025",
    tags: ["Community", "Social", "Empowerment"],
    image: "/vismayakriya/dinasnexus/kegiatan/sosmasling/binadesa.webp",
    summary: "Pengabdian masyarakat terpadu dengan fokus digitalisasi administrasi desa dan edukasi internet sehat.",
    description: "Penerjunan relawan mahasiswa ke nagari binaan untuk membangun website nagari dan pelatihan komputer.",
    objectives: [
      "Implementasi keilmuan IT bagi masyarakat desa.",
      "Empati sosial dan kepedulian fungsionaris."
    ],
    targetAudience: "Masyarakat Nagari Binaan",
    location: "Nagari Binaan Padang Pariaman",
    featured: true
  },
  {
    id: "aksi-peduli-kemanusiaan",
    title: "AKSI PEDULI KEMANUSIAAN",
    department: "Dinas Sosmasling",
    departmentSlug: "sosmasling",
    category: "Pengabdian Masyarakat",
    status: "Sedang Berjalan",
    date: "Insidental",
    tags: ["Bencana", "Relawan", "Donasi"],
    image: "/vismayakriya/dinasnexus/kegiatan/sosmasling/sosmasling.webp",
    summary: "Tanggap darurat penggalangan dana dan bantuan kemanusiaan bagi korban bencana alam.",
    description: "Posko relawan mahasiswa FTI untuk merespons cepat situasi bencana alam di wilayah Sumatera Barat.",
    objectives: [
      "Tanggap darurat kepedulian sosial korban bencana.",
      "Penyaluran bantuan logistik dan dana."
    ],
    targetAudience: "Masyarakat Terdampak Bencana",
    location: "Wilayah Bencana Sumbar",
    featured: false
  },
  {
    id: "hijau-bersama-fti",
    title: "HIJAU BERSAMA FTI",
    department: "Dinas Sosmasling",
    departmentSlug: "sosmasling",
    category: "Pengabdian Masyarakat",
    status: "Selesai",
    date: "November 2025",
    tags: ["Environment", "Pohon", "Green"],
    image: "/vismayakriya/dinasnexus/kegiatan/sosmasling/hijaubersamafti.webp",
    summary: "Aksi penanaman bibit pohon dan gerakan kurangi sampah plastik di kawasan kampus.",
    description: "Gerakan peduli lingkungan hidup melalui aksi penanaman 100 bibit pohon dan penataan tempat sampah pilah.",
    objectives: [
      "Kampus hijau ramah lingkungan (Green Campus).",
      "Kesadaran pengelolaan sampah plastik."
    ],
    targetAudience: "Civitas Akademika FTI UNAND",
    location: "Kawasan Hutan Kampus FTI",
    featured: false
  },
  {
    id: "cipta-dunia-edukasi",
    title: "CIPTA DUNIA EDUKASI (CDE)",
    department: "Dinas Sosmasling",
    departmentSlug: "sosmasling",
    category: "Pengabdian Masyarakat",
    status: "Sedang Berjalan",
    date: "Bulanan",
    tags: ["Edukasi", "Anak", "Literasi"],
    image: "/vismayakriya/dinasnexus/kegiatan/sosmasling/binadesa.webp",
    summary: "Mengajar anak-anak panti asuhan dan sekolah dasar mengenai dasar komputer dan membaca.",
    description: "Kegiatan rutin staf Sosmasling mengajar literasi digital dan motivasi belajar anak-anak prasejahtera.",
    objectives: [
      "Pemerataan pengetahuan teknologi anak-anak.",
      "Karakter pengabdian fungsionaris."
    ],
    targetAudience: "Anak-Anak Panti Asuhan Padang",
    location: "Panti Asuhan & Rumah Baca",
    featured: false
  },
  {
    id: "ramadhan-berkah",
    title: "RAMADHAN BERKAH SOSMAS",
    department: "Dinas Sosmasling",
    departmentSlug: "sosmasling",
    category: "Pengabdian Masyarakat",
    status: "Akan Datang",
    date: "Maret 2026",
    tags: ["Ramadhan", "Takjil", "Berbagi"],
    image: "/vismayakriya/dinasnexus/kegiatan/sosmasling/sosmasling.webp",
    summary: "Pembagian takjil gratis, sahur on the road, dan buka puasa bersama anak yatim.",
    description: "Agenda sosial keagamaan bulan Ramadhan untuk menebar keberkahan dan berbagi kebahagiaan.",
    objectives: [
      "Keperdulian sosial di bulan suci Ramadhan.",
      "Silaturahmi hangat fungsionaris dan masyarakat."
    ],
    targetAudience: "Masyarakat Umum & Anak Yatim",
    location: "Kota Padang & panti asuhan",
    featured: false
  }
];
