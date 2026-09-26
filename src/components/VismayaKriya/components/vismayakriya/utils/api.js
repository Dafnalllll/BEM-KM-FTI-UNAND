/***
 * Data Service Layer (API Mocking Layer for Vismayakriya)
 */

import { cabinetInfo } from '../../../../../data/VismayaKriya/organization.js';
import { departmentsData } from '../../../../../data/VismayaKriya/departments.js';
import { programsData } from '../../../../../data/VismayaKriya/programs.js';
import { galleryData } from '../../../../../data/VismayaKriya/gallery.js';
import { newsData } from '../../../../../data/VismayaKriya/news.js';
import { resolveAsset } from './helpers.js';

const LOCAL_STORAGE_ASPIRASI_KEY = 'vismayakriya_aspirations_history';

function processDepartment(d) {
  if (!d) return d;
  return {
    ...d,
    logo: resolveAsset(d.logo),
    banner: resolveAsset(d.banner),
    leaders: (d.leaders || []).map(l => ({ ...l, image: resolveAsset(l.image) })),
    staff: (d.staff || []).map(s => ({ ...s, image: resolveAsset(s.image) })),
    galleryImages: (d.galleryImages || []).map(g => ({ ...g, image: resolveAsset(g.image) }))
  };
}

function processProgram(p) {
  if (!p) return p;
  return {
    ...p,
    image: resolveAsset(p.image),
    gallery: (p.gallery || []).map(g => resolveAsset(g))
  };
}

function processGalleryItem(g) {
  if (!g) return g;
  return {
    ...g,
    image: resolveAsset(g.image)
  };
}

function processNewsItem(n) {
  if (!n) return n;
  return {
    ...n,
    thumbnail: resolveAsset(n.thumbnail)
  };
}

export const api = {
  async getCabinetInfo() {
    const info = { ...cabinetInfo };
    if (info.logo) info.logo = resolveAsset(info.logo);
    if (info.bemLogo) info.bemLogo = resolveAsset(info.bemLogo);
    if (info.ftiLogo) info.ftiLogo = resolveAsset(info.ftiLogo);
    if (info.heroTeamImage) info.heroTeamImage = resolveAsset(info.heroTeamImage);
    if (info.heroAltImage) info.heroAltImage = resolveAsset(info.heroAltImage);
    if (info.leaders) {
      info.leaders = { ...info.leaders };
      for (const k in info.leaders) {
        if (info.leaders[k]) {
          if (info.leaders[k].image) info.leaders[k].image = resolveAsset(info.leaders[k].image);
          if (info.leaders[k].foto_fullbody) info.leaders[k].foto_fullbody = resolveAsset(info.leaders[k].foto_fullbody);
          if (info.leaders[k].foto_thumbnail) info.leaders[k].foto_thumbnail = resolveAsset(info.leaders[k].foto_thumbnail);
        }
      }
    }
    return Promise.resolve(info);
  },

  async getDepartments() {
    return Promise.resolve(departmentsData.map(processDepartment));
  },

  async getDepartmentBySlug(slug) {
    const dept = departmentsData.find(d => d.slug.toLowerCase() === slug.toLowerCase());
    if (!dept) throw new Error(`Dinas dengan slug '${slug}' tidak ditemukan.`);
    return Promise.resolve(processDepartment(dept));
  },

  async getPrograms({ dept = 'all', category = 'all', status = 'all', search = '' } = {}) {
    let filtered = [...programsData];

    if (dept && dept !== 'all') {
      filtered = filtered.filter(p =>
        p.departmentSlug?.toLowerCase() === dept.toLowerCase() ||
        p.department?.toLowerCase().includes(dept.toLowerCase())
      );
    }

    if (category && category !== 'all') {
      filtered = filtered.filter(p => p.category?.toLowerCase() === category.toLowerCase());
    }

    if (status && status !== 'all') {
      filtered = filtered.filter(p => p.status?.toLowerCase() === status.toLowerCase());
    }

    if (search && search.trim() !== '') {
      const q = search.toLowerCase().trim();
      filtered = filtered.filter(p =>
        p.title.toLowerCase().includes(q) ||
        p.description?.toLowerCase().includes(q) ||
        p.department?.toLowerCase().includes(q) ||
        p.tags?.some(tag => tag.toLowerCase().includes(q))
      );
    }

    return Promise.resolve(filtered.map(processProgram));
  },

  async getProgramById(idOrTitle) {
    if (!idOrTitle) return null;
    const searchKey = String(idOrTitle).toLowerCase().trim();

    // 1. Try exact ID match
    let proker = programsData.find(p => p.id.toLowerCase() === searchKey);

    // 2. Try title match or partial match
    if (!proker) {
      proker = programsData.find(p => p.title.toLowerCase().includes(searchKey) || searchKey.includes(p.title.toLowerCase()));
    }

    // 3. Fallback: construct full valid proker object if string passed
    if (!proker) {
      proker = {
        id: searchKey.replace(/\s+/g, '-'),
        title: typeof idOrTitle === 'string' ? idOrTitle : 'Program Kerja BEM FTI',
        department: 'Dinas / Biro BEM KM FTI',
        departmentSlug: 'vismayakriya',
        category: 'Pendidikan & Riset',
        status: 'Sedang Berjalan',
        date: 'Sepanjang Periode',
        tags: ['Vismayakriya', 'BEM FTI', 'Sinergi'],
        image: '/vismayakriya/dinasnexus/kegiatan/pelantikan.webp',
        summary: `Program kerja unggulan ${idOrTitle} yang diselenggarakan oleh BEM KM FTI Kabinet Vismayakriya.`,
        description: `Program kerja ${idOrTitle} merupakan salah satu inisiatif strategis BEM KM FTI Kabinet Vismayakriya dalam mewujudkan pelayanan publik, edukasi teknologi, dan pengembangan potensi mahasiswa di lingkungan Fakultas Teknologi Informasi Universitas Andalas.`,
        objectives: [
          'Meningkatkan partisipasi dan pemahaman mahasiswa FTI.',
          'Mewujudkan sinergi dan efisiensi dalam pelaksanaan kegiatan keorganisasian.',
          'Memberikan dampak positif berkelanjutan bagi seluruh civitas akademika.'
        ],
        targetAudience: 'Seluruh Mahasiswa Fakultas Teknologi Informasi',
        location: 'Fakultas Teknologi Informasi Universitas Andalas'
      };
    }

    return Promise.resolve(processProgram(proker));
  },

  async getGallery(category = 'all') {
    let result = [...galleryData];
    if (category && category !== 'all') {
      result = result.filter(item => item.category.toLowerCase() === category.toLowerCase());
    }
    return Promise.resolve(result.map(processGalleryItem));
  },

  async getNews() {
    return Promise.resolve(newsData.map(processNewsItem));
  },

  async getNewsById(id) {
    const article = newsData.find(n => n.id === id || n.slug === id);
    if (!article) throw new Error(`Berita dengan id '${id}' tidak ditemukan.`);
    return Promise.resolve(processNewsItem(article));
  },

  async submitAspiration(payload) {
    await new Promise(resolve => setTimeout(resolve, 600));

    const newAspiration = {
      id: 'asp-' + Date.now(),
      submittedAt: new Date().toISOString(),
      name: payload.anonymous ? 'Mahasiswa Anonim' : (payload.name || 'Mahasiswa Anonim'),
      prodi: payload.prodi || 'Tidak Disebutkan',
      category: payload.category || 'Lainnya',
      subject: payload.subject,
      message: payload.message,
      anonymous: Boolean(payload.anonymous),
      status: 'Diterima & Ditelaah'
    };

    try {
      const existing = JSON.parse(localStorage.getItem(LOCAL_STORAGE_ASPIRASI_KEY) || '[]');
      existing.unshift(newAspiration);
      localStorage.setItem(LOCAL_STORAGE_ASPIRASI_KEY, JSON.stringify(existing.slice(0, 10)));
    } catch (e) {
      console.warn('LocalStorage not available', e);
    }

    return Promise.resolve({
      success: true,
      message: 'Terima kasih, aspirasi Anda telah diterima. Tim BEM KM FTI Kabinet Vismayakriya akan segera menindaklanjuti suara Anda.',
      data: newAspiration
    });
  },

  getStoredAspirations() {
    try {
      return JSON.parse(localStorage.getItem(LOCAL_STORAGE_ASPIRASI_KEY) || '[]');
    } catch (e) {
      return [];
    }
  }
};
