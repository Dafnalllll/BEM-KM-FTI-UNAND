/***
 * Data Lengkap 9 Dinas & 1 Biro BEM KM FTI UNAND - Kabinet Vismayakriya
 */

export const departmentsData = [
  {
    id: "audkes",
    slug: "audkes",
    name: "Audit & Kesekretariatan",
    type: "Biro",
    shortName: "Audkes",
    logo: "/vismayakriya/dinasnexus/logo/audkes.webp",
    banner: "/vismayakriya/dinasnexus/press release/audkes/audkes.webp",
    headName: "Miftahul Jannah & Ajo",
    headRole: "Kepala Biro Audkes",
    staffCount: 8,
    summary: "Mengelola tata kelola administrasi surat-menyurat, pengarsipan digital kabinet, dan audit internal demi transparansi.",
    description: "Biro Audit dan Kesekretariatan (Audkes) bertindak sebagai pusat denyut nadi operasional internal BEM KM FTI. Biro ini bertanggung jawab mengawal standardisasi tata kelola administrasi surat, pengarsipan dokumen digital terpusat, pengadaan inventaris, serta melakukan audit keorganisasian secara berkala guna menjamin akuntabilitas serta ketertiban organisasi.",
    vision: "Mewujudkan tata kelola kesekretariatan dan administrasi yang tertib, modern berbasis digital, serta sistem audit kelembagaan yang transparan dan akuntabel.",
    missions: [
      "Mengintegrasikan sistem kearsipan dan surat-menyurat berbasis cloud secara terpadu.",
      "Melakukan pengawasan dan evaluasi berkala terhadap inventaris serta administrasi dinas.",
      "Menciptakan ruang kerja sekretariat yang representatif, nyaman, dan mendukung produktivitas."
    ],
    leaders: [
      {
        name: "Miftahul Jannah",
        role: "Kepala Biro Audkes",
        jurusan: "Sistem Informasi",
        angkatan: "Angkatan 2023",
        image: "/vismayakriya/dinasnexus/press release/audkes/miftah.webp",
        quote: "Ketertiban administrasi adalah wujud profesionalisme tertinggi sebuah organisasi.",
        socials: { instagram: "https://instagram.com", linkedin: "https://linkedin.com" }
      },
      {
        name: "Ajo",
        role: "Wakil Kepala Biro Audkes",
        jurusan: "Teknik Informatika",
        angkatan: "Angkatan 2023",
        image: "/vismayakriya/dinasnexus/press release/audkes/ajo.webp",
        quote: "Mengawal transparansi dokumen untuk menjaga kepercayaan seluruh pengurus.",
        socials: { instagram: "https://instagram.com", linkedin: "https://linkedin.com" }
      }
    ],
    staff: [
      { name: "Alya", role: "Staf Biro Audkes", jurusan: "Sistem Informasi", angkatan: "Angkatan 2024", image: "/vismayakriya/dinasnexus/staff release/audkes/alya.webp", socials: { instagram: "https://instagram.com" } },
      { name: "Fadhi", role: "Staf Biro Audkes", jurusan: "Teknik Informatika", angkatan: "Angkatan 2024", image: "/vismayakriya/dinasnexus/staff release/audkes/fadhi.webp", socials: { instagram: "https://instagram.com" } },
      { name: "Farhan", role: "Staf Biro Audkes", jurusan: "Teknik Komputer", angkatan: "Angkatan 2024", image: "/vismayakriya/dinasnexus/staff release/audkes/farhan.webp", socials: { instagram: "https://instagram.com" } },
      { name: "Ferdian", role: "Staf Biro Audkes", jurusan: "Sistem Informasi", angkatan: "Angkatan 2024", image: "/vismayakriya/dinasnexus/staff release/audkes/ferdian.webp", socials: { instagram: "https://instagram.com" } },
      { name: "Sasya", role: "Staf Biro Audkes", jurusan: "Teknik Informatika", angkatan: "Angkatan 2024", image: "/vismayakriya/dinasnexus/staff release/audkes/sasya.webp", socials: { instagram: "https://instagram.com" } },
      { name: "Shyra", role: "Staf Biro Audkes", jurusan: "Teknik Komputer", angkatan: "Angkatan 2024", image: "/vismayakriya/dinasnexus/staff release/audkes/shyra.webp", socials: { instagram: "https://instagram.com" } }
    ],
    programs: ["nexus-archive", "BE TECHNOPRENEUR", "SOP & PAP REGULATION", "STAFF OF THE MONTH (SOTM)", "EVALUASI PENGURUS"],
    galleryImages: [
      { title: "Foto Bersama Pengurus & Staf Audkes", image: "/vismayakriya/dinasnexus/press release/audkes/audkes.webp", date: "Periode 2025/2026" },
      { title: "Pengarsipan Digital Nexus Archive", image: "/vismayakriya/dinasnexus/kegiatan/audkes/nexusarchive.webp", date: "Sepanjang Periode" },
      { title: "Rapat Evaluasi Pengurus Paruh Periode", image: "/vismayakriya/dinasnexus/kegiatan/audkes/evalpengurus.webp", date: "Desember 2025" },
      { title: "Sosialisasi SOP & PAP Regulation", image: "/vismayakriya/dinasnexus/kegiatan/audkes/soppap.webp", date: "Oktober 2025" },
      { title: "Penghargaan Staff of the Month", image: "/vismayakriya/dinasnexus/kegiatan/audkes/sotm.webp", date: "Bulanan" }
    ]
  },
  {
    id: "adkesma",
    slug: "adkesma",
    name: "Advokasi & Kesejahteraan Mahasiswa",
    type: "Dinas",
    shortName: "Adkesma",
    logo: "/vismayakriya/dinasnexus/logo/adkesma.webp",
    banner: "/vismayakriya/dinasnexus/press release/adkesma/aqila.webp",
    headName: "Aqil & Imam",
    headRole: "Kepala Dinas Adkesma",
    staffCount: 9,
    summary: "Garda terdepan dalam mengawal aspirasi, beasiswa, isu UKT, fasilitas kampus, dan kesehatan mental mahasiswa.",
    description: "Dinas Advokasi dan Kesejahteraan Mahasiswa (Adkesma) adalah jembatan pelindung hak dan pemenuhan kebutuhan mahasiswa KM FTI. Berfokus pada pelayanan bantuan pembiayaan kuliah/UKT, penyaluran informasi beasiswa, advokasi sarana prasarana perkuliahan, serta penyediaan ruang konseling kesehatan mental dan pendampingan mahasiswa.",
    vision: "Menjadikan BEM KM FTI sebagai rumah advokasi yang solutif, empatik, responsif, dan terpercaya dalam mewujudkan kesejahteraan komprehensif KM FTI.",
    missions: [
      "Membuka kanal aspirasi dan pendampingan mahasiswa secara transparan dan berkesinambungan.",
      "Mengawal transparansi penggolongan UKT serta memperluas akses bantuan beasiswa finansial.",
      "Memfasilitasi perbaikan fasilitas dan sarana penunjang kegiatan perkuliahan di lingkungan FTI."
    ],
    leaders: [
      {
        name: "Aqila",
        role: "Kepala Dinas Adkesma",
        jurusan: "Teknik Informatika",
        angkatan: "Angkatan 2023",
        image: "/vismayakriya/dinasnexus/press release/adkesma/aqila.webp",
        quote: "Setiap suara mahasiswa adalah amanah yang wajib kita perjuangkan hingga tuntas.",
        socials: { instagram: "https://instagram.com", linkedin: "https://linkedin.com" }
      },
      {
        name: "Imam",
        role: "Sekretaris Dinas Adkesma",
        jurusan: "Sistem Informasi",
        angkatan: "Angkatan 2023",
        image: "/vismayakriya/dinasnexus/press release/adkesma/imam.webp",
        quote: "Advokasi empatik untuk memastikan tidak ada mahasiswa FTI yang tertinggal.",
        socials: { instagram: "https://instagram.com", linkedin: "https://linkedin.com" }
      }
    ],
    staff: [
      { name: "Adhit", role: "Staf Adkesma", jurusan: "Teknik Informatika", angkatan: "Angkatan 2024", image: "/vismayakriya/dinasnexus/staff release/adkesma/adhit.webp", socials: { instagram: "https://instagram.com" } },
      { name: "Ael", role: "Staf Adkesma", jurusan: "Sistem Informasi", angkatan: "Angkatan 2024", image: "/vismayakriya/dinasnexus/staff release/adkesma/ael.webp", socials: { instagram: "https://instagram.com" } },
      { name: "Alfa", role: "Staf Adkesma", jurusan: "Teknik Komputer", angkatan: "Angkatan 2024", image: "/vismayakriya/dinasnexus/staff release/adkesma/alfa.webp", socials: { instagram: "https://instagram.com" } },
      { name: "Faiz", role: "Staf Adkesma", jurusan: "Teknik Informatika", angkatan: "Angkatan 2024", image: "/vismayakriya/dinasnexus/staff release/adkesma/faiz.webp", socials: { instagram: "https://instagram.com" } },
      { name: "Fariz", role: "Staf Adkesma", jurusan: "Sistem Informasi", angkatan: "Angkatan 2024", image: "/vismayakriya/dinasnexus/staff release/adkesma/fariz.webp", socials: { instagram: "https://instagram.com" } },
      { name: "Zahra", role: "Staf Adkesma", jurusan: "Teknik Komputer", angkatan: "Angkatan 2024", image: "/vismayakriya/dinasnexus/staff release/adkesma/zahra.webp", socials: { instagram: "https://instagram.com" } }
    ],
    programs: ["sahabat-fti", "ADVOTALK", "MABA CARE", "PUBLIC HEARING", "NEXCARE", "INTERSCHOLAR", "IPK PLUS"],
    galleryImages: [
      { title: "Foto Bersama Pengurus & Staf Adkesma", image: "/vismayakriya/dinasnexus/press release/adkesma/aqila.webp", date: "Periode 2025/2026" },
      { title: "Posko Pendampingan Sahabat FTI", image: "/vismayakriya/dinasnexus/kegiatan/adkesma/sahabatfti.webp", date: "Januari 2026" },
      { title: "Advotalk Bincang Beasiswa & UKT", image: "/vismayakriya/dinasnexus/kegiatan/adkesma/advotalk.webp", date: "Oktober 2025" },
      { title: "Maba Care Sambut Mahasiswa Baru", image: "/vismayakriya/dinasnexus/kegiatan/adkesma/mabacare.webp", date: "Agustus 2025" },
      { title: "Interscholar Info Beasiswa Internasional", image: "/vismayakriya/dinasnexus/kegiatan/adkesma/interscholar.webp", date: "November 2025" }
    ]
  },
  {
    id: "bistech",
    slug: "bistech",
    name: "Bisnis & Teknologi",
    type: "Dinas",
    shortName: "Bistech",
    logo: "/vismayakriya/dinasnexus/logo/bistech.webp",
    banner: "/vismayakriya/dinasnexus/press release/bistech/bistech.webp",
    headName: "Amanda & Vira",
    headRole: "Kepala Dinas Bistech",
    staffCount: 8,
    summary: "Penggerak kemandirian finansial kabinet dan inkubasi jiwa kewirausahaan berbasis teknologi bagi mahasiswa.",
    description: "Dinas Bisnis dan Teknologi (Bistech) berorientasi pada penciptaan kemandirian dana organisasi melalui unit usaha kreatif, penjualan atribut & merchandise resmi FTI, penyediaan perlengkapan wisuda, serta memfasilitasi workshop kewirausahaan rintisan (startup) dan technopreneurship.",
    vision: "Menciptakan ekosistem bisnis organisasi yang mandiri, produktif, inovatif, dan berdaya saing berbasis teknologi.",
    missions: [
      "Mengoptimalkan lini bisnis kreatif merchandise dan produk digital mahasiswa FTI.",
      "Menyediakan kebutuhan akademik mahasiswa secara mudah dan terjangkau.",
      "Mengedukasi potensi ekonomi kreatif digital dan technopreneurship bagi KM FTI."
    ],
    leaders: [
      {
        name: "Amanda",
        role: "Kepala Dinas Bistech",
        jurusan: "Sistem Informasi",
        angkatan: "Angkatan 2023",
        image: "/vismayakriya/dinasnexus/press release/bistech/manda.webp",
        quote: "Kewirausahaan digital adalah kunci kemandirian ekonomi generasi muda.",
        socials: { instagram: "https://instagram.com", linkedin: "https://linkedin.com" }
      },
      {
        name: "Vira",
        role: "Sekretaris Dinas Bistech",
        jurusan: "Teknik Informatika",
        angkatan: "Angkatan 2023",
        image: "/vismayakriya/dinasnexus/press release/bistech/vira.webp",
        quote: "Menghubungkan ide bisnis kreatif dengan kebutuhan nyata mahasiswa.",
        socials: { instagram: "https://instagram.com", linkedin: "https://linkedin.com" }
      }
    ],
    staff: [
      { name: "Fuad", role: "Staf Bistech", jurusan: "Sistem Informasi", angkatan: "Angkatan 2024", image: "/vismayakriya/dinasnexus/staff release/bistech/fuad.webp", socials: { instagram: "https://instagram.com" } },
      { name: "Ghezy", role: "Staf Bistech", jurusan: "Teknik Informatika", angkatan: "Angkatan 2024", image: "/vismayakriya/dinasnexus/staff release/bistech/ghezy.webp", socials: { instagram: "https://instagram.com" } },
      { name: "Kevin", role: "Staf Bistech", jurusan: "Teknik Komputer", angkatan: "Angkatan 2024", image: "/vismayakriya/dinasnexus/staff release/bistech/kevin.webp", socials: { instagram: "https://instagram.com" } },
      { name: "Nayla", role: "Staf Bistech", jurusan: "Sistem Informasi", angkatan: "Angkatan 2024", image: "/vismayakriya/dinasnexus/staff release/bistech/nayla.webp", socials: { instagram: "https://instagram.com" } },
      { name: "Ochi", role: "Staf Bistech", jurusan: "Teknik Informatika", angkatan: "Angkatan 2024", image: "/vismayakriya/dinasnexus/staff release/bistech/ochi.webp", socials: { instagram: "https://instagram.com" } }
    ],
    programs: ["be-technopreneur", "BISGENIUS WORKSHOP", "MERCHANDISE FTI", "GRADUATION NEEDS", "PARTNERSHIP & SPONSORSHIP", "WARNEX STORE"],
    galleryImages: [
      { title: "Foto Bersama Pengurus & Staf Bistech", image: "/vismayakriya/dinasnexus/press release/bistech/bistech.webp", date: "Periode 2025/2026" },
      { title: "Bazar Kreatif Warnex & Merchandise FTI", image: "/vismayakriya/dinasnexus/kegiatan/bistech/warnex.webp", date: "Desember 2025" },
      { title: "Workshop Be Technopreneur", image: "/vismayakriya/dinasnexus/kegiatan/bistech/betechnopreneur.webp", date: "November 2025" },
      { title: "BisGenius Masterclass Digital", image: "/vismayakriya/dinasnexus/kegiatan/bistech/bisgenius.webp", date: "Januari 2026" },
      { title: "Layanan Graduation Needs FTI", image: "/vismayakriya/dinasnexus/kegiatan/bistech/graduationneeds.webp", date: "Wisuda Periodik" }
    ]
  },
  {
    id: "eksternal",
    slug: "eksternal",
    name: "Hubungan Eksternal",
    type: "Dinas",
    shortName: "Eksternal",
    logo: "/vismayakriya/dinasnexus/logo/eksternal.webp",
    banner: "/vismayakriya/dinasnexus/press release/eksternal/eksternal.webp",
    headName: "Ijon & Kiya",
    headRole: "Kepala Dinas Eksternal",
    staffCount: 10,
    summary: "Membangun jejaring kolaborasi lintas kampus, alumni, industri teknologi, dan masyarakat luas.",
    description: "Dinas Hubungan Eksternal mengemban amanah sebagai duta diplomasi BEM KM FTI. Berfungsi memperluas relasi kelembagaan dengan organisasi mahasiswa luar kampus, forum BEM se-Indonesia, ikatan alumni, instansi pemerintah, serta korporasi industri IT terkemuka.",
    vision: "Memperluas jangkauan reputasi BEM KM FTI di tingkat regional, nasional, maupun internasional melalui kolaborasi berdampak nyata.",
    missions: [
      "Mengintensifkan kunjungan diplomasi studi banding antarkampus (BEM Visit).",
      "Menjalin koneksi timbal balik yang erat dengan alumni FTI di dunia industri.",
      "Menginisiasi forum teknologi berstandar nasional dan program kemitraan strategis."
    ],
    leaders: [
      {
        name: "Ijon",
        role: "Kepala Dinas Eksternal",
        jurusan: "Teknik Komputer",
        angkatan: "Angkatan 2023",
        image: "/vismayakriya/dinasnexus/press release/eksternal/ijon.webp",
        quote: "Diplomasi organisasi adalah jembatan pembuka peluang emas bagi mahasiswa FTI.",
        socials: { instagram: "https://instagram.com", linkedin: "https://linkedin.com" }
      },
      {
        name: "Kiya",
        role: "Sekretaris Dinas Eksternal",
        jurusan: "Sistem Informasi",
        angkatan: "Angkatan 2023",
        image: "/vismayakriya/dinasnexus/press release/eksternal/kiya.webp",
        quote: "Menjalin kemitraan strategis dengan industri dan jaringan kampus se-Indonesia.",
        socials: { instagram: "https://instagram.com", linkedin: "https://linkedin.com" }
      }
    ],
    staff: [
      { name: "Diaz", role: "Staf Eksternal", jurusan: "Teknik Informatika", angkatan: "Angkatan 2024", image: "/vismayakriya/dinasnexus/staff release/eksternal/diaz.webp", socials: { instagram: "https://instagram.com" } },
      { name: "Ghina", role: "Staf Eksternal", jurusan: "Sistem Informasi", angkatan: "Angkatan 2024", image: "/vismayakriya/dinasnexus/staff release/eksternal/ghina.webp", socials: { instagram: "https://instagram.com" } },
      { name: "Hapsa", role: "Staf Eksternal", jurusan: "Teknik Komputer", angkatan: "Angkatan 2024", image: "/vismayakriya/dinasnexus/staff release/eksternal/hapsa.webp", socials: { instagram: "https://instagram.com" } },
      { name: "Ima", role: "Staf Eksternal", jurusan: "Teknik Informatika", angkatan: "Angkatan 2024", image: "/vismayakriya/dinasnexus/staff release/eksternal/ima.webp", socials: { instagram: "https://instagram.com" } },
      { name: "Rapip", role: "Staf Eksternal", jurusan: "Sistem Informasi", angkatan: "Angkatan 2024", image: "/vismayakriya/dinasnexus/staff release/eksternal/rapip.webp", socials: { instagram: "https://instagram.com" } },
      { name: "Rintan", role: "Staf Eksternal", jurusan: "Teknik Komputer", angkatan: "Angkatan 2024", image: "/vismayakriya/dinasnexus/staff release/eksternal/rintan.webp", socials: { instagram: "https://instagram.com" } }
    ],
    programs: ["technofest", "BEM VISIT", "ALUMNI INSIGHT", "YOUTH IMPACT FESTIVAL", "IIT COLLABORATION", "MEDIA PARTNERSHIP"],
    galleryImages: [
      { title: "Foto Bersama Pengurus & Staf Eksternal", image: "/vismayakriya/dinasnexus/press release/eksternal/eksternal.webp", date: "Periode 2025/2026" },
      { title: "Technofest FTI Tingkat Nasional", image: "/vismayakriya/dinasnexus/kegiatan/eksternal/technofest.webp", date: "November 2025" },
      { title: "BEM Visit Kunjungan Diplomasi Kampus", image: "/vismayakriya/dinasnexus/kegiatan/eksternal/bemvisit.webp", date: "Oktober 2025" },
      { title: "Alumni Insight Sharing Session", image: "/vismayakriya/dinasnexus/kegiatan/eksternal/alumniinsight.webp", date: "Desember 2025" },
      { title: "Youth Impact Festival FTI", image: "/vismayakriya/dinasnexus/kegiatan/eksternal/youthimpact.webp", date: "Januari 2026" }
    ]
  },
  {
    id: "internal",
    slug: "internal",
    name: "Hubungan Internal",
    type: "Dinas",
    shortName: "Internal",
    logo: "/vismayakriya/dinasnexus/logo/internal.webp",
    banner: "/vismayakriya/dinasnexus/press release/internal/internal.webp",
    headName: "Haikal & Keysa",
    headRole: "Kepala Dinas Internal",
    staffCount: 9,
    summary: "Perekat keharmonisan, konsolidasi, dan sinergi bersama Himpunan dan UKM di lingkungan FTI.",
    description: "Dinas Hubungan Internal memfokuskan perannya pada penciptaan iklim kekeluargaan yang guyub di FTI UNAND. Bertindak sebagai fasilitator komunikasi dan konsolidasi aktif bersama Himpunan Mahasiswa (HMIF, HMSI, HIMATEKOM) serta Unit Kegiatan Mahasiswa (DPM, FSI, Tectona, UKOS).",
    vision: "Mewujudkan Keluarga Mahasiswa FTI yang solid, bersatu, suportif, dan bebas dari sekat ego sektoral.",
    missions: [
      "Menyelenggarakan ruang temu dan konsolidasi rutin bersama pimpinan lembaga mahasiswa FTI.",
      "Mengadakan ajang apresiasi dan selebrasi kebersamaan mahasiswa FTI Parade.",
      "Menjaga keterbukaan informasi dan harmonisasi agenda organisasi di internal fakultas."
    ],
    leaders: [
      {
        name: "Haikal",
        role: "Kepala Dinas Internal",
        jurusan: "Sistem Informasi",
        angkatan: "Angkatan 2023",
        image: "/vismayakriya/dinasnexus/press release/internal/haikal.webp",
        quote: "Sinergi antarlembaga adalah kunci keutuhan Keluarga Mahasiswa FTI.",
        socials: { instagram: "https://instagram.com", linkedin: "https://linkedin.com" }
      },
      {
        name: "Keysa",
        role: "Sekretaris Dinas Internal",
        jurusan: "Teknik Informatika",
        angkatan: "Angkatan 2023",
        image: "/vismayakriya/dinasnexus/press release/internal/keysa.webp",
        quote: "Merawat kebersamaan dan rasa saling memiliki di lingkungan fakultas.",
        socials: { instagram: "https://instagram.com", linkedin: "https://linkedin.com" }
      }
    ],
    staff: [
      { name: "Aufa", role: "Staf Internal", jurusan: "Teknik Informatika", angkatan: "Angkatan 2024", image: "/vismayakriya/dinasnexus/staff release/internal/aufa.webp", socials: { instagram: "https://instagram.com" } },
      { name: "Dawi", role: "Staf Internal", jurusan: "Sistem Informasi", angkatan: "Angkatan 2024", image: "/vismayakriya/dinasnexus/staff release/internal/dawi.webp", socials: { instagram: "https://instagram.com" } },
      { name: "Febi", role: "Staf Internal", jurusan: "Teknik Komputer", angkatan: "Angkatan 2024", image: "/vismayakriya/dinasnexus/staff release/internal/febi.webp", socials: { instagram: "https://instagram.com" } },
      { name: "Mariska", role: "Staf Internal", jurusan: "Sistem Informasi", angkatan: "Angkatan 2024", image: "/vismayakriya/dinasnexus/staff release/internal/mariska.webp", socials: { instagram: "https://instagram.com" } },
      { name: "Quenn", role: "Staf Internal", jurusan: "Teknik Informatika", angkatan: "Angkatan 2024", image: "/vismayakriya/dinasnexus/staff release/internal/quenn.webp", socials: { instagram: "https://instagram.com" } }
    ],
    programs: ["fti-parade", "BAKTI FTI", "JELAJAH LEMBAGA", "TEMU KOORDINASI (TEMKO)", "NEXGO INTERNAL TOUR"],
    galleryImages: [
      { title: "Foto Bersama Pengurus & Staf Internal", image: "/vismayakriya/dinasnexus/press release/internal/internal.webp", date: "Periode 2025/2026" },
      { title: "Karnaval FTI Parade Kebersamaan", image: "/vismayakriya/dinasnexus/kegiatan/internal/FTI Parade.webp", date: "Maret 2026" },
      { title: "Bakti FTI Kebersamaan Kampus", image: "/vismayakriya/dinasnexus/kegiatan/internal/bakti.webp", date: "November 2025" },
      { title: "Jelajah Lembaga Ormawa FTI", image: "/vismayakriya/dinasnexus/kegiatan/internal/jelajahlembaga.webp", date: "Oktober 2025" },
      { title: "Temu Koordinasi Pimpinan Lembaga (Temko)", image: "/vismayakriya/dinasnexus/kegiatan/internal/temukoordinasi.webp", date: "Bulanan" }
    ]
  },
  {
    id: "kastrat",
    slug: "kastrat",
    name: "Kajian & Aksi Strategis",
    type: "Dinas",
    shortName: "Kastrat",
    logo: "/vismayakriya/dinasnexus/logo/kastrat.webp",
    banner: "/vismayakriya/dinasnexus/press release/kastrat/kastrat.webp",
    headName: "Anggun & Okta",
    headRole: "Kepala Dinas Kastrat",
    staffCount: 8,
    summary: "Pusat analisis intelektual, telaah kebijakan publik, advokasi kesetaraan, dan pergerakan kritis mahasiswa.",
    description: "Dinas Kajian dan Aksi Strategis (Kastrat) merupakan otak intelektual pergerakan BEM KM FTI. Membedah isu-isu strategis kampus dan kebijakan publik, menerbitkan kajian ilmiah, mengawal ruang aman kampus (Women Care), dan mengorganisir propaganda positif serta aksi pencerdasan massa.",
    vision: "Menjadi lokomotif pergerakan mahasiswa yang kritis, berbasis data dan riset, progresif, serta humanis.",
    missions: [
      "Memproduksi riset dan rilis kajian kritis terhadap kebijakan yang menyangkut kepentingan mahasiswa.",
      "Mengedukasi mahasiswa mengenai hak-hak sipil, literasi politik, dan ruang aman bebas kekerasan seksual.",
      "Membangun aliansi pergerakan yang solid bersama seluruh elemen pergerakan mahasiswa UNAND."
    ],
    leaders: [
      {
        name: "Anggun",
        role: "Kepala Dinas Kastrat",
        jurusan: "Teknik Informatika",
        angkatan: "Angkatan 2023",
        image: "/vismayakriya/dinasnexus/press release/kastrat/anggun.webp",
        quote: "Nalar kritis dan kajian ilmiah adalah senjata utama pergerakan mahasiswa.",
        socials: { instagram: "https://instagram.com", linkedin: "https://linkedin.com" }
      },
      {
        name: "Okta",
        role: "Sekretaris Dinas Kastrat",
        jurusan: "Sistem Informasi",
        angkatan: "Angkatan 2023",
        image: "/vismayakriya/dinasnexus/press release/kastrat/okta.webp",
        quote: "Mengawal keadilan sosial dan menciptakan ruang aman di lingkungan kampus.",
        socials: { instagram: "https://instagram.com", linkedin: "https://linkedin.com" }
      }
    ],
    staff: [
      { name: "Afelia", role: "Staf Kastrat", jurusan: "Sistem Informasi", angkatan: "Angkatan 2024", image: "/vismayakriya/dinasnexus/staff release/kastrat/afelia.webp", socials: { instagram: "https://instagram.com" } },
      { name: "Ahmad", role: "Staf Kastrat", jurusan: "Teknik Informatika", angkatan: "Angkatan 2024", image: "/vismayakriya/dinasnexus/staff release/kastrat/ahmad.webp", socials: { instagram: "https://instagram.com" } },
      { name: "Bayu", role: "Staf Kastrat", jurusan: "Teknik Komputer", angkatan: "Angkatan 2024", image: "/vismayakriya/dinasnexus/staff release/kastrat/bayu.webp", socials: { instagram: "https://instagram.com" } },
      { name: "Faiz", role: "Staf Kastrat", jurusan: "Sistem Informasi", angkatan: "Angkatan 2024", image: "/vismayakriya/dinasnexus/staff release/kastrat/faiz.webp", socials: { instagram: "https://instagram.com" } },
      { name: "Wahid", role: "Staf Kastrat", jurusan: "Teknik Informatika", angkatan: "Angkatan 2024", image: "/vismayakriya/dinasnexus/staff release/kastrat/wahid.webp", socials: { instagram: "https://instagram.com" } }
    ],
    programs: ["women-care", "DISKUSI STRATEGIS", "KAJIAN ISU KAMPUS", "RESTART PROPAGANDA", "KPK (KLINIK POLITIK KAMPUS)"],
    galleryImages: [
      { title: "Foto Bersama Pengurus & Staf Kastrat", image: "/vismayakriya/dinasnexus/press release/kastrat/kastrat.webp", date: "Periode 2025/2026" },
      { title: "Diskusi Strategis Bedah Kebijakan", image: "/vismayakriya/dinasnexus/kegiatan/kastrat/diskusistrategis.webp", date: "Desember 2025" },
      { title: "Kajian Kritis Isu Pendidikan", image: "/vismayakriya/dinasnexus/kegiatan/kastrat/kajian.webp", date: "November 2025" },
      { title: "Women Care Campaign Kampus Aman", image: "/vismayakriya/dinasnexus/kegiatan/kastrat/womencare.webp", date: "Oktober 2025" },
      { title: "Klinik Politik Kampus (KPK)", image: "/vismayakriya/dinasnexus/kegiatan/kastrat/kpk.webp", date: "Januari 2026" }
    ]
  },
  {
    id: "medinkraf",
    slug: "medinkraf",
    name: "Media, Informasi, & Kreatif",
    type: "Dinas",
    shortName: "Medinkraf",
    logo: "/vismayakriya/dinasnexus/logo/medin.webp",
    banner: "/vismayakriya/dinasnexus/press release/medinkraf/medin.webp",
    headName: "Abe & Adli",
    headRole: "Kepala Dinas Medinkraf",
    staffCount: 10,
    summary: "Etalase visual, arsitek konten kreatif, videografi, dan manajemen saluran informasi digital kabinet.",
    description: "Dinas Media, Informasi, dan Kreatif (Medinkraf) bertanggung jawab membangun citra visual (branding) BEM KM FTI. Mengelola saluran media sosial resmi, produksi video sinematik, desain publikasi interaktif, peliputan momen penting, dan penyebaran informasi kampus secara cepat, akurat, dan memikat.",
    vision: "Menjadikan media BEM KM FTI sebagai referensi informasi digital yang modern, estetis, edukatif, dan inspiratif.",
    missions: [
      "Mengembangkan identitas visual kabinet yang konsisten, berkarakter, dan berkelas dunia.",
      "Menyajikan konten kreatif berbasis tren media masa kini yang relevan dengan Gen Z.",
      "Meningkatkan interaktivitas dan keterlibatan (engagement) civitas akademika di media sosial."
    ],
    leaders: [
      {
        name: "Abe",
        role: "Kepala Dinas Medinkraf",
        jurusan: "Sistem Informasi",
        angkatan: "Angkatan 2023",
        image: "/vismayakriya/dinasnexus/press release/medinkraf/abe.webp",
        quote: "Desain visual dan konten kreatif adalah komunikasi visual penyampai pesan kabinet.",
        socials: { instagram: "https://instagram.com", linkedin: "https://linkedin.com" }
      },
      {
        name: "Adli",
        role: "Sekretaris Dinas Medinkraf",
        jurusan: "Teknik Informatika",
        angkatan: "Angkatan 2023",
        image: "/vismayakriya/dinasnexus/press release/medinkraf/adli.webp",
        quote: "Menyampaikan informasi cepat dan estetis untuk seluruh civitas akademika.",
        socials: { instagram: "https://instagram.com", linkedin: "https://linkedin.com" }
      }
    ],
    staff: [
      { name: "Aldo", role: "Staf Medinkraf", jurusan: "Teknik Informatika", angkatan: "Angkatan 2024", image: "/vismayakriya/dinasnexus/staff release/medinkraf/aldo.webp", socials: { instagram: "https://instagram.com" } },
      { name: "Alvin", role: "Staf Medinkraf", jurusan: "Sistem Informasi", angkatan: "Angkatan 2024", image: "/vismayakriya/dinasnexus/staff release/medinkraf/alvin.webp", socials: { instagram: "https://instagram.com" } },
      { name: "Alya", role: "Staf Medinkraf", jurusan: "Teknik Komputer", angkatan: "Angkatan 2024", image: "/vismayakriya/dinasnexus/staff release/medinkraf/alya.webp", socials: { instagram: "https://instagram.com" } },
      { name: "Asyqor", role: "Staf Medinkraf", jurusan: "Teknik Informatika", angkatan: "Angkatan 2024", image: "/vismayakriya/dinasnexus/staff release/medinkraf/asyqor.webp", socials: { instagram: "https://instagram.com" } },
      { name: "King", role: "Staf Medinkraf", jurusan: "Sistem Informasi", angkatan: "Angkatan 2024", image: "/vismayakriya/dinasnexus/staff release/medinkraf/king.webp", socials: { instagram: "https://instagram.com" } },
      { name: "Vanes", role: "Staf Medinkraf", jurusan: "Teknik Komputer", angkatan: "Angkatan 2024", image: "/vismayakriya/dinasnexus/staff release/medinkraf/vanes.webp", socials: { instagram: "https://instagram.com" } }
    ],
    programs: ["jendela-fti", "NEXUS HIGHLIGHT", "CREATIVE STUDIO", "ACTIVE MEDIA", "SPOTLIGHT KARYA", "MEDIA CONNECT"],
    galleryImages: [
      { title: "Foto Bersama Pengurus & Staf Medinkraf", image: "/vismayakriya/dinasnexus/press release/medinkraf/medin.webp", date: "Periode 2025/2026" },
      { title: "Liputan Media & Publikasi Jendela FTI", image: "/vismayakriya/dinasnexus/kegiatan/medin/jendelafti.webp", date: "Mingguan" },
      { title: "Creative Studio Production", image: "/vismayakriya/dinasnexus/kegiatan/medin/creativestudio.webp", date: "Desember 2025" },
      { title: "Active Media Information Hub", image: "/vismayakriya/dinasnexus/kegiatan/medin/activemedia.webp", date: "Bulanan" },
      { title: "Media Connect Workshop", image: "/vismayakriya/dinasnexus/kegiatan/medin/mediaconnect.webp", date: "Januari 2026" }
    ]
  },
  {
    id: "psdm",
    slug: "psdm",
    name: "Pengembangan Sumber Daya Mahasiswa",
    type: "Dinas",
    shortName: "PSDM",
    logo: "/vismayakriya/dinasnexus/logo/psdm.webp",
    banner: "/vismayakriya/dinasnexus/press release/psdm/psdm.webp",
    headName: "Bunga & Rhodes",
    headRole: "Kepala Dinas PSDM",
    staffCount: 9,
    summary: "Kawah candradimuka penempaan karakter, kepemimpinan, dan kaderisasi penerus estafet pergerakan.",
    description: "Dinas Pengembangan Sumber Daya Mahasiswa (PSDM) bertugas merancang alur kaderisasi yang sistematis dan berakar pada nilai-nilai integritas. Menyelenggarakan latihan kepemimpinan manajemen mahasiswa, pembinaan staf muda (Nexmud), serta penyiapan talenta masa depan FTI.",
    vision: "Membentuk kader mahasiswa FTI yang berintegritas, berjiwa kepemimpinan luhur, adaptif, dan siap menjadi penggerak perubahan.",
    missions: [
      "Mengawal orientasi dan kaderisasi mahasiswa baru dengan pendekatan humanis dan edukatif.",
      "Menyelenggarakan pelatihan manajerial tingkat menengah dan dasar berkualitas tinggi.",
      "Membina fungsionaris muda sebagai regenerasi kepengurusan kabinet yang unggul."
    ],
    leaders: [
      {
        name: "Bunga",
        role: "Kepala Dinas PSDM",
        jurusan: "Sistem Informasi",
        angkatan: "Angkatan 2023",
        image: "/vismayakriya/dinasnexus/press release/psdm/bunga.webp",
        quote: "Membangun karakter kepemimpinan muda yang tangguh dan beretika.",
        socials: { instagram: "https://instagram.com", linkedin: "https://linkedin.com" }
      },
      {
        name: "Rhodes",
        role: "Sekretaris Dinas PSDM",
        jurusan: "Teknik Informatika",
        angkatan: "Angkatan 2023",
        image: "/vismayakriya/dinasnexus/press release/psdm/rhodes.webp",
        quote: "Kaderisasi berkesinambungan untuk masa depan FTI yang gemilang.",
        socials: { instagram: "https://instagram.com", linkedin: "https://linkedin.com" }
      }
    ],
    staff: [
      { name: "Alfat", role: "Staf PSDM", jurusan: "Teknik Informatika", angkatan: "Angkatan 2024", image: "/vismayakriya/dinasnexus/staff release/psdm/alfat.webp", socials: { instagram: "https://instagram.com" } },
      { name: "Diva", role: "Staf PSDM", jurusan: "Sistem Informasi", angkatan: "Angkatan 2024", image: "/vismayakriya/dinasnexus/staff release/psdm/diva.webp", socials: { instagram: "https://instagram.com" } },
      { name: "Khalda", role: "Staf PSDM", jurusan: "Teknik Komputer", angkatan: "Angkatan 2024", image: "/vismayakriya/dinasnexus/staff release/psdm/khalda.webp", socials: { instagram: "https://instagram.com" } },
      { name: "Nabila", role: "Staf PSDM", jurusan: "Sistem Informasi", angkatan: "Angkatan 2024", image: "/vismayakriya/dinasnexus/staff release/psdm/nabila.webp", socials: { instagram: "https://instagram.com" } },
      { name: "Rizky", role: "Staf PSDM", jurusan: "Teknik Komputer", angkatan: "Angkatan 2024", image: "/vismayakriya/dinasnexus/staff release/psdm/rizky.webp", socials: { instagram: "https://instagram.com" } }
    ],
    programs: ["lkmmtd-fti", "NEXMUD CADRE", "FAA (FORUM ALUMNI & AKTIVIS)", "WISUDA BAKTI APRESIASI"],
    galleryImages: [
      { title: "Foto Bersama Pengurus & Staf PSDM", image: "/vismayakriya/dinasnexus/press release/psdm/psdm.webp", date: "Periode 2025/2026" },
      { title: "Pelatihan Kepemimpinan LKMM-TD FTI", image: "/vismayakriya/dinasnexus/kegiatan/psdm/lkmmtd.webp", date: "Januari 2026" },
      { title: "Wisuda Bakti Apresiasi Pengurus", image: "/vismayakriya/dinasnexus/kegiatan/psdm/wisudabak.webp", date: "November 2025" },
      { title: "Nexmud Cadre Orientation", image: "/vismayakriya/dinasnexus/kegiatan/psdm/nexmud.webp", date: "Oktober 2025" }
    ]
  },
  {
    id: "ristek",
    slug: "ristek",
    name: "Riset & Teknologi",
    type: "Dinas",
    shortName: "Ristek",
    logo: "/vismayakriya/dinasnexus/logo/ristek.webp",
    banner: "/vismayakriya/dinasnexus/press release/ristek/rizztek.webp",
    headName: "Dafa & Fella",
    headRole: "Kepala Dinas Ristek",
    staffCount: 9,
    summary: "Katalisator riset inovatif, kompetisi IT, podcast teknologi, dan repositori karya ilmiah civitas akademika.",
    description: "Dinas Riset dan Teknologi (Ristek) adalah motor penggerak penelitian dan pengembangan di FTI UNAND. Menjadi wadah bagi mahasiswa dalam menciptakan inovasi dan solusi perangkat lunak/keras, memperkuat basis data riset skripsi, menyelenggarakan kompetisi hackathon, serta mengedukasi literasi teknologi terkini.",
    vision: "Menjadikan BEM KM FTI sebagai episentrum inovasi riset dan teknologi mahasiswa yang solutif dan kompetitif di tingkat global.",
    missions: [
      "Menyelenggarakan kompetisi pemrograman, hackathon, dan inkubasi ide riset teknologi.",
      "Membangun repositori tugas akhir dan database keilmuan digital yang mudah diakses mahasiswa.",
      "Menyebarluaskan wawasan perkembangan kecerdasan buatan, keamanan siber, dan rekayasa data."
    ],
    leaders: [
      {
        name: "Dafa",
        role: "Kepala Dinas Ristek",
        jurusan: "Teknik Informatika",
        angkatan: "Angkatan 2023",
        image: "/vismayakriya/dinasnexus/press release/ristek/dafa.webp",
        quote: "Inovasi riset teknologi adalah pemecah solusi masalah nyata di masyarakat.",
        socials: { instagram: "https://instagram.com", linkedin: "https://linkedin.com" }
      },
      {
        name: "Fella",
        role: "Sekretaris Dinas Ristek",
        jurusan: "Sistem Informasi",
        angkatan: "Angkatan 2023",
        image: "/vismayakriya/dinasnexus/press release/ristek/fella.webp",
        quote: "Membangun budaya riset komputasi yang kompetitif di tingkat internasional.",
        socials: { instagram: "https://instagram.com", linkedin: "https://linkedin.com" }
      }
    ],
    staff: [
      { name: "Arib", role: "Staf Ristek", jurusan: "Teknik Informatika", angkatan: "Angkatan 2024", image: "/vismayakriya/dinasnexus/staff release/ristek/arib.webp", socials: { instagram: "https://instagram.com" } },
      { name: "Farid", role: "Staf Ristek", jurusan: "Teknik Komputer", angkatan: "Angkatan 2024", image: "/vismayakriya/dinasnexus/staff release/ristek/farid.webp", socials: { instagram: "https://instagram.com" } },
      { name: "Hafid", role: "Staf Ristek", jurusan: "Teknik Informatika", angkatan: "Angkatan 2024", image: "/vismayakriya/dinasnexus/staff release/ristek/hafid.webp", socials: { instagram: "https://instagram.com" } },
      { name: "Nisa", role: "Staf Ristek", jurusan: "Sistem Informasi", angkatan: "Angkatan 2024", image: "/vismayakriya/dinasnexus/staff release/ristek/nisa.webp", socials: { instagram: "https://instagram.com" } },
      { name: "Zikri", role: "Staf Ristek", jurusan: "Teknik Komputer", angkatan: "Angkatan 2024", image: "/vismayakriya/dinasnexus/staff release/ristek/zikri.webp", socials: { instagram: "https://instagram.com" } }
    ],
    programs: ["hackathon-fti", "tech-research-hub", "italk-podcast", "IT SPECTRUM", "COMPETEHUB", "TECHTONIC WORKSHOP"],
    galleryImages: [
      { title: "Foto Bersama Pengurus & Staf Ristek", image: "/vismayakriya/dinasnexus/press release/ristek/rizztek.webp", date: "Periode 2025/2026" },
      { title: "Hackathon FTI 24 Jam Inovasi Digital", image: "/vismayakriya/dinasnexus/kegiatan/ristek/hackathon.webp", date: "Oktober 2025" },
      { title: "ITalk Podcast Bincang Teknologi", image: "/vismayakriya/dinasnexus/kegiatan/ristek/italk.webp", date: "Dua Mingguan" },
      { title: "IT Spectrum Workshop Code & AI", image: "/vismayakriya/dinasnexus/kegiatan/ristek/itspectrum.webp", date: "November 2025" },
      { title: "CompeteHub Mentoring Lomba IT", image: "/vismayakriya/dinasnexus/kegiatan/ristek/competehub.webp", date: "Januari 2026" }
    ]
  },
  {
    id: "sosmasling",
    slug: "sosmasling",
    name: "Sosial Masyarakat & Lingkungan Hidup",
    type: "Dinas",
    shortName: "Sosmasling",
    logo: "/vismayakriya/dinasnexus/logo/sosmas.webp",
    banner: "/vismayakriya/dinasnexus/press release/sosmasling/sosmasling.webp",
    headName: "Nori & Sovia",
    headRole: "Kepala Dinas Sosmasling",
    staffCount: 9,
    summary: "Saluran dedikasi sosial, digitalisasi desa binaan, aksi tanggap kebencanaan, dan pelestarian lingkungan hidup.",
    description: "Dinas Sosial Masyarakat dan Lingkungan Hidup (Sosmasling) menjadi manifestasi tridharma perguruan tinggi bidang pengabdian. Menggerakkan mahasiswa untuk terjun ke desa binaan, menghadirkan literasi digital ke pelosok, menyalurkan bantuan tanggap darurat bencana, dan merawat kelestarian alam.",
    vision: "Mewujudkan pengabdian mahasiswa FTI yang berlandaskan empati, solutif berbasis teknologi ramah lingkungan, dan berdampak nyata bagi masyarakat.",
    missions: [
      "Mengembangkan desa binaan dengan program pendampingan teknologi dan sosial berkelanjutan.",
      "Merespons cepat situasi tanggap darurat dan bencana kemanusiaan di Sumatera Barat.",
      "Mengkampanyekan kesadaran gaya hidup hijau, pengurangan sampah plastik, dan konservasi alam."
    ],
    leaders: [
      {
        name: "Nori",
        role: "Kepala Dinas Sosmasling",
        jurusan: "Sistem Informasi",
        angkatan: "Angkatan 2023",
        image: "/vismayakriya/dinasnexus/press release/sosmasling/nori.webp",
        quote: "Teknologi ramah lingkungan untuk pengabdian sosial berdampak panjang.",
        socials: { instagram: "https://instagram.com", linkedin: "https://linkedin.com" }
      },
      {
        name: "Sovia",
        role: "Sekretaris Dinas Sosmasling",
        jurusan: "Teknik Informatika",
        angkatan: "Angkatan 2023",
        image: "/vismayakriya/dinasnexus/press release/sosmasling/sovia.webp",
        quote: "Mengabdi dengan empati, menghadirkan senyum perubahan di masyarakat.",
        socials: { instagram: "https://instagram.com", linkedin: "https://linkedin.com" }
      }
    ],
    staff: [
      { name: "Faiz", role: "Staf Sosmasling", jurusan: "Teknik Informatika", angkatan: "Angkatan 2024", image: "/vismayakriya/dinasnexus/staff release/sosmasling/faiz.webp", socials: { instagram: "https://instagram.com" } },
      { name: "Shaza", role: "Staf Sosmasling", jurusan: "Sistem Informasi", angkatan: "Angkatan 2024", image: "/vismayakriya/dinasnexus/staff release/sosmasling/shaza.webp", socials: { instagram: "https://instagram.com" } },
      { name: "Zhafira", role: "Staf Sosmasling", jurusan: "Teknik Komputer", angkatan: "Angkatan 2024", image: "/vismayakriya/dinasnexus/staff release/sosmasling/zhafira.webp", socials: { instagram: "https://instagram.com" } }
    ],
    programs: ["fti-bina-desa", "AKSI PEDULI KEMANUSIAAN", "HIJAU BERSAMA FTI", "CIPTA DUNIA EDUKASI", "RAMADHAN BERKAH"],
    galleryImages: [
      { title: "Foto Bersama Pengurus & Staf Sosmasling", image: "/vismayakriya/dinasnexus/press release/sosmasling/sosmasling.webp", date: "Periode 2025/2026" },
      { title: "FTI Bina Desa Digitalisasi Nagari", image: "/vismayakriya/dinasnexus/kegiatan/sosmasling/binadesa.webp", date: "September 2025" },
      { title: "Gerakan Hijau Bersama FTI Tanam Pohon", image: "/vismayakriya/dinasnexus/kegiatan/sosmasling/hijaubersamafti.webp", date: "November 2025" },
      { title: "Aksi Peduli Kemanusiaan Tanggap Bencana", image: "/vismayakriya/dinasnexus/kegiatan/sosmasling/aksipeduli.webp", date: "Desember 2025" },
      { title: "Cipta Dunia Edukasi Anak Desa", image: "/vismayakriya/dinasnexus/kegiatan/sosmasling/ciptadunia.webp", date: "Januari 2026" }
    ]
  }
];

