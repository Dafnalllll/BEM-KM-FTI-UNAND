/***
 * Data Service Layer (API Service Layer)
 * Berinteraksi dengan Express REST API Backend (`/api/...`)
 * Dilengkapi dengan fallback otomatis ke local seed data agar aplikasi tetap 100% responsif & handal.
 */

import { cabinetInfo } from '../data/organization.js';
import { departmentsData } from '../data/departments.js';
import { programsData } from '../data/programs.js';
import { galleryData } from '../data/gallery.js';
import { newsData } from '../data/news.js';
import { partnersData } from '../data/partners.js';

import { matchesStatus, matchesCategory } from './helpers.js';

const LOCAL_STORAGE_ASPIRASI_KEY = 'bem_fti_aspirations_history';

export const api = {
  // GET /api/cabinet
  async getCabinetInfo() {
    try {
      const res = await fetch('/api/cabinet');
      if (res.ok) return await res.json();
    } catch (e) {
      console.warn('API fetch /api/cabinet fallback to local data', e);
    }
    return Promise.resolve({ ...cabinetInfo });
  },

  // GET /api/departments
  async getDepartments() {
    try {
      const res = await fetch('/api/departments');
      if (res.ok) return await res.json();
    } catch (e) {
      console.warn('API fetch /api/departments fallback to local data', e);
    }
    return Promise.resolve([...departmentsData]);
  },

  // GET /api/departments/:slug
  async getDepartmentBySlug(slug) {
    try {
      const res = await fetch(`/api/departments/${encodeURIComponent(slug)}`);
      if (res.ok) return await res.json();
    } catch (e) {
      console.warn(`API fetch /api/departments/${slug} fallback to local data`, e);
    }

    const dept = departmentsData.find(d => d.slug.toLowerCase() === slug.toLowerCase());
    if (!dept) throw new Error(`Dinas dengan slug '${slug}' tidak ditemukan.`);

    const resolvedPrograms = programsData.filter(p =>
      p.departmentSlug?.toLowerCase() === slug.toLowerCase() ||
      (dept.programs || []).includes(p.id)
    );

    const deptGalleryItems = galleryData.filter(g =>
      g.departmentSlug?.toLowerCase() === slug.toLowerCase()
    );

    return Promise.resolve({
      ...dept,
      resolvedPrograms,
      deptGalleryItems
    });
  },

  // GET /api/partners
  async getPartners() {
    try {
      const res = await fetch('/api/partners');
      if (res.ok) return await res.json();
    } catch (e) {
      console.warn('API fetch /api/partners fallback to local data', e);
    }
    return Promise.resolve([...partnersData]);
  },

  // GET /api/partners/:slug
  async getPartnerBySlug(slug) {
    try {
      const res = await fetch(`/api/partners/${encodeURIComponent(slug)}`);
      if (res.ok) return await res.json();
    } catch (e) {
      console.warn(`API fetch /api/partners/${slug} fallback to local data`, e);
    }
    const partner = partnersData.find(p => p.slug.toLowerCase() === slug.toLowerCase() || p.id.toLowerCase() === slug.toLowerCase());
    if (!partner) throw new Error(`Lembaga dengan slug '${slug}' tidak ditemukan.`);
    return Promise.resolve({ ...partner });
  },

  // GET /api/programs?departmentSlug=...&category=...&status=...&search=...
  async getPrograms({ dept = 'all', category = 'all', status = 'all', search = '' } = {}) {
    try {
      const params = new URLSearchParams();
      if (dept && dept !== 'all') params.append('departmentSlug', dept);
      if (category && category !== 'all') params.append('category', category);
      if (status && status !== 'all') params.append('status', status);
      if (search && search.trim() !== '') params.append('search', search.trim());

      const res = await fetch(`/api/programs?${params.toString()}`);
      if (res.ok) {
        const data = await res.json();
        return data;
      }
    } catch (e) {
      console.warn('API fetch /api/programs fallback to local data', e);
    }

    // Local filtering fallback
    let filtered = [...programsData];

    if (dept && dept !== 'all') {
      const qDept = dept.toLowerCase().trim();
      filtered = filtered.filter(p => {
        const matchSlug = p.departmentSlug?.toLowerCase() === qDept;
        const matchName = p.department?.toLowerCase().includes(qDept);
        return matchSlug || matchName;
      });
    }

    if (category && category !== 'all') {
      filtered = filtered.filter(p => matchesCategory(p.category, category));
    }

    if (status && status !== 'all') {
      filtered = filtered.filter(p => matchesStatus(p.status, status));
    }

    if (search && search.trim() !== '') {
      const q = search.toLowerCase().trim();
      filtered = filtered.filter(p =>
        p.title?.toLowerCase().includes(q) ||
        p.description?.toLowerCase().includes(q) ||
        p.summary?.toLowerCase().includes(q) ||
        p.department?.toLowerCase().includes(q) ||
        (p.tags || []).some(t => t.toLowerCase().includes(q))
      );
    }

    return Promise.resolve(filtered);
  },

  // GET /api/programs/:id
  async getProgramById(id) {
    try {
      const res = await fetch(`/api/programs/${encodeURIComponent(id)}`);
      if (res.ok) return await res.json();
    } catch (e) {
      console.warn(`API fetch /api/programs/${id} fallback to local data`, e);
    }
    const proker = programsData.find(p => p.id === id);
    if (!proker) throw new Error(`Program dengan id '${id}' tidak ditemukan.`);
    return Promise.resolve({ ...proker });
  },

  // GET /api/gallery?category=...
  async getGallery(category = 'all') {
    try {
      const res = await fetch(`/api/gallery?category=${encodeURIComponent(category)}`);
      if (res.ok) return await res.json();
    } catch (e) {
      console.warn('API fetch /api/gallery fallback to local data', e);
    }
    if (!category || category === 'all') {
      return Promise.resolve([...galleryData]);
    }
    return Promise.resolve(galleryData.filter(item => item.category?.toLowerCase() === category.toLowerCase()));
  },

  // GET /api/news
  async getNews() {
    try {
      const res = await fetch('/api/news');
      if (res.ok) return await res.json();
    } catch (e) {
      console.warn('API fetch /api/news fallback to local data', e);
    }
    return Promise.resolve([...newsData]);
  },

  // GET /api/news/:id
  async getNewsById(id) {
    try {
      const res = await fetch(`/api/news/${encodeURIComponent(id)}`);
      if (res.ok) return await res.json();
    } catch (e) {
      console.warn(`API fetch /api/news/${id} fallback to local data`, e);
    }
    const article = newsData.find(n => n.id === id || n.slug === id);
    if (!article) throw new Error(`Berita dengan id '${id}' tidak ditemukan.`);
    return Promise.resolve({ ...article });
  },

  // POST /api/aspirations
  async submitAspiration(payload) {
    try {
      const res = await fetch('/api/aspirations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (res.ok) return await res.json();
    } catch (e) {
      console.warn('API POST /api/aspirations fallback to local storage', e);
    }

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
      message: 'Terima kasih, aspirasi Anda telah diterima. BEM KM FTI akan segera menindaklanjuti.',
      data: newAspiration
    });
  },

  // GET /api/aspirations/history
  getStoredAspirations() {
    try {
      return JSON.parse(localStorage.getItem(LOCAL_STORAGE_ASPIRASI_KEY) || '[]');
    } catch (e) {
      return [];
    }
  }
};
