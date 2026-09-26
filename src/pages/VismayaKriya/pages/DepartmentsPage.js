/***
 * DepartmentsPage Component (Dinas & Biro)
 * Katalog lengkap 9 Dinas & 1 Biro BEM KM FTI Kabinet Nexus Inspirasi
 */

import { api } from '../utils/api.js';
import { renderDepartmentModal, initDepartmentModalEvents } from '../components/DepartmentModal.js';

export async function renderDepartmentsPage() {
  const depts = await api.getDepartments();

  return `
    <div class="departments-page">
      {/* Sub-Hero Banner */}
      <section class="section section-dark" style="padding-top: 7rem; padding-bottom: 3.5rem; background: radial-gradient(circle at top, #101a33 0%, #070c18 100%);">
        <div class="container text-center" style="text-align: center;">
          <div class="section-tag">Struktur Pelaksana</div>
          <h1 class="section-title" style="font-size: clamp(2.2rem, 4vw, 3.5rem);">Dinas & Biro Kabinet</h1>
          <p class="section-subtitle">
            Mengenal 9 Dinas dan 1 Biro yang mendedikasikan energi, keahlian, dan komitmen bagi kemaslahatan Keluarga Mahasiswa Fakultas Teknologi Informasi.
          </p>
          <div class="section-divider"></div>
        </div>
      </section>

      {/* CATALOG SECTION */}
      <section class="section section-dark-alt">
        <div class="container">
          {/* Filter Tabs */}
          <div style="display: flex; justify-content: center; gap: 0.75rem; margin-bottom: 3rem; flex-wrap: wrap;">
            <button class="pill-btn active dept-filter-btn" data-type="all" type="button">Semua Entitas (10)</button>
            <button class="pill-btn dept-filter-btn" data-type="Dinas" type="button">9 Dinas</button>
            <button class="pill-btn dept-filter-btn" data-type="Biro" type="button">1 Biro</button>
          </div>

          {/* Departments Grid */}
          <div class="departments-grid" id="depts-grid-container">
            ${depts.map(d => `
              <div class="dept-card" data-slug="${d.slug}" data-type="${d.type}">
                <div class="dept-header">
                  <div class="dept-logo-wrap">
                    <img src="${d.logo}" alt="${d.name}" class="dept-logo" loading="lazy">
                  </div>
                  <div class="dept-identity">
                    <span class="dept-type">${d.type}</span>
                    <h3 class="dept-acronym">${d.shortName}</h3>
                  </div>
                </div>

                <div class="dept-name">${d.name}</div>
                <p class="dept-desc">${d.summary}</p>

                <div class="dept-meta-footer">
                  <div class="dept-head-info">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                    <span>${d.headName}</span>
                  </div>
                  <div>
                    <span style="color: #60a5fa; font-weight: 600;">${d.staffCount} Staf</span>
                  </div>
                </div>

                <div style="margin-top: 1.25rem;">
                  <button class="btn btn-outline btn-sm view-dept-detail-btn" style="width: 100%;" data-slug="${d.slug}" type="button">
                    <span>Lihat Profil & Staf</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                  </button>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>
    </div>
  `;
}

export async function initDepartmentsPageEvents() {
  // Modal open helper
  function openDeptModal(dept) {
    // Remove existing if any
    document.getElementById('dept-modal-overlay')?.remove();
    const modalHtml = renderDepartmentModal(dept);
    document.body.insertAdjacentHTML('beforeend', modalHtml);
    initDepartmentModalEvents(dept);
    document.getElementById('dept-modal-close')?.addEventListener('click', () => {
      document.getElementById('dept-modal-overlay')?.remove();
    });
    document.getElementById('dept-modal-overlay')?.addEventListener('click', (e) => {
      if (e.target.id === 'dept-modal-overlay') e.target.remove();
    });
  }

  // Check URL query parameter e.g. #/dinas?slug=ristek or ?slug=ristek
  const urlParams = new URLSearchParams(window.location.search);
  const hashPart = window.location.hash.includes('?') ? window.location.hash.split('?')[1] : '';
  const hashParams = new URLSearchParams(hashPart);
  const slug = hashParams.get('slug') || urlParams.get('slug');

  if (slug) {
    try {
      const dept = await api.getDepartmentBySlug(slug);
      if (dept) openDeptModal(dept);
    } catch (e) {
      console.error(e);
    }
  }

  // Filter Buttons
  const filterBtns = document.querySelectorAll('.dept-filter-btn');
  const cards = document.querySelectorAll('.dept-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const type = btn.getAttribute('data-type');
      cards.forEach(card => {
        if (type === 'all' || card.getAttribute('data-type') === type) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // Card & Button click
  document.querySelectorAll('.view-dept-detail-btn, .dept-card').forEach(elem => {
    elem.addEventListener('click', async (e) => {
      const cardSlug = elem.getAttribute('data-slug');
      if (!cardSlug) return;
      try {
        const dept = await api.getDepartmentBySlug(cardSlug);
        openDeptModal(dept);
      } catch (err) {
        console.error(err);
      }
    });
  });
}

