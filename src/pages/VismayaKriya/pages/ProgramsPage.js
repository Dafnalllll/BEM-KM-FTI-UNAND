/***
 * ProgramsPage Component (Program Kerja)
 * Multi-filter dinamis (Dinas, Kategori, Status) & Pencarian real-time program kerja
 */

import { api } from '../utils/api.js';
import { departmentsData } from '../data/departments.js';
import { getStatusBadgeClass, debounce } from '../utils/helpers.js';

export async function renderProgramsPage() {
  const initialPrograms = await api.getPrograms();

  const categories = [
    "all",
    "Pendidikan & Riset",
    "Teknologi",
    "Advokasi & Kesejahteraan",
    "Kewirausahaan",
    "Pengabdian Masyarakat",
    "Internal & Kelembagaan",
    "Kajian & Pergerakan",
    "Media & Komunikasi",
    "Administrasi"
  ];

  return `
    <div class="programs-page">
      {/* Sub-Hero Banner */}
      <section class="section section-dark" style="padding-top: 7rem; padding-bottom: 3.5rem; background: radial-gradient(circle at top, #101a33 0%, #070c18 100%);">
        <div class="container text-center" style="text-align: center;">
          <div class="section-tag">Agenda & Realisasi</div>
          <h1 class="section-title" style="font-size: clamp(2.2rem, 4vw, 3.5rem);">Program Kerja Kabinet</h1>
          <p class="section-subtitle">
            Eksplorasi seluruh inisiatif pergerakan, pengabdian, kompetisi, dan pelayanan BEM KM FTI Kabinet Nexus Inspirasi.
          </p>
          <div class="section-divider"></div>
        </div>
      </section>

      {/* CATALOG & FILTER SECTION */}
      <section class="section section-dark-alt">
        <div class="container">
          {/* Filter & Search Toolbar */}
          <div class="filter-bar">
            {/* Row 1: Search & Dropdowns */}
            <div class="filter-top-row">
              <div class="search-input-wrap">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                <input type="text" id="proker-search-input" class="search-input" placeholder="Cari program kerja, kata kunci, atau tag...">
              </div>

              {/* Filter Dinas */}
              <select id="proker-dept-select" class="select-filter">
                <option value="all">Semua Dinas & Biro</option>
                ${departmentsData.map(d => `
                  <option value="${d.slug}">${d.type} ${d.shortName}</option>
                `).join('')}
              </select>

              {/* Filter Status */}
              <select id="proker-status-select" class="select-filter">
                <option value="all">Semua Status</option>
                <option value="Selesai">Selesai (Terlaksana)</option>
                <option value="Sedang Berjalan">Sedang Berjalan</option>
                <option value="Akan Datang">Akan Datang</option>
              </select>
            </div>

            {/* Row 2: Category Pills */}
            <div class="filter-pills" id="proker-category-pills">
              ${categories.map((c, i) => `
                <button class="pill-btn ${i === 0 ? 'active' : ''}" data-category="${c}" type="button">
                  ${c === 'all' ? 'Semua Kategori' : c}
                </button>
              `).join('')}
            </div>
          </div>

          {/* Active Filter & Counter Indicator */}
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem; color: #94a3b8; font-size: 0.9rem;">
            <div>
              Menampilkan <span id="proker-counter" style="color: #60a5fa; font-weight: 700;">${initialPrograms.length}</span> program kerja
            </div>
          </div>

          {/* Programs Grid */}
          <div class="programs-grid" id="proker-grid-container">
            ${renderProgramCardsHtml(initialPrograms)}
          </div>
        </div>
      </section>
    </div>
  `;
}

function renderProgramCardsHtml(programs) {
  if (programs.length === 0) {
    return `
      <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1.5rem; background: rgba(16,26,51,0.5); border-radius: 16px; border: 1px dashed var(--border-dark);">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" stroke-width="1.5" style="margin: 0 auto 1rem;"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
        <h3 style="font-size: 1.25rem; font-weight: 700; color: #ffffff; margin-bottom: 0.5rem;">Tidak Ada Program yang Sesuai</h3>
        <p style="color: #94a3b8; font-size: 0.9rem; max-width: 420px; margin: 0 auto;">Silakan sesuaikan kata kunci pencarian atau ubah filter dinas dan kategori.</p>
      </div>
    `;
  }

  return programs.map(p => `
    <div class="proker-card" data-id="${p.id}" style="cursor: pointer;">
      <div class="proker-thumb-wrap">
        <img src="${p.image}" alt="${p.title}" class="proker-thumb" loading="lazy">
        <div class="proker-overlay-badges">
          <span class="badge ${getStatusBadgeClass(p.status)}">${p.status}</span>
          <span class="tag-dept" style="background: rgba(11,18,36,0.85);">${p.category}</span>
        </div>
      </div>
      <div class="proker-body">
        <span class="tag-dept proker-dept-badge">${p.department}</span>
        <h3 class="proker-title">${p.title}</h3>
        <p class="proker-desc">${p.summary}</p>
        
        <div class="proker-tags">
          ${(p.tags || []).slice(0, 3).map(t => `<span class="tag-dept" style="font-size: 0.7rem; padding: 0.15rem 0.45rem;">#${t}</span>`).join('')}
        </div>

        <div class="proker-footer">
          <span>${p.date}</span>
          <a href="#/proker?id=${p.id}" class="btn btn-primary btn-sm view-proker-detail-btn" data-id="${p.id}">
            <span>Detail</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </a>
        </div>
      </div>
    </div>
  `).join('');
}

export function initProgramsPageEvents() {
  const searchInput = document.getElementById('proker-search-input');
  const deptSelect = document.getElementById('proker-dept-select');
  const statusSelect = document.getElementById('proker-status-select');
  const categoryPills = document.querySelectorAll('#proker-category-pills .pill-btn');
  const gridContainer = document.getElementById('proker-grid-container');
  const counterSpan = document.getElementById('proker-counter');

  let activeFilters = {
    search: '',
    dept: 'all',
    status: 'all',
    category: 'all'
  };

  async function updateResults() {
    const results = await api.getPrograms(activeFilters);
    if (gridContainer) gridContainer.innerHTML = renderProgramCardsHtml(results);
    if (counterSpan) counterSpan.textContent = results.length;
    bindCardClicks();
  }

  // Search input with debounce
  searchInput?.addEventListener('input', debounce((e) => {
    activeFilters.search = e.target.value;
    updateResults();
  }, 250));

  deptSelect?.addEventListener('change', (e) => {
    activeFilters.dept = e.target.value;
    updateResults();
  });

  statusSelect?.addEventListener('change', (e) => {
    activeFilters.status = e.target.value;
    updateResults();
  });

  categoryPills.forEach(pill => {
    pill.addEventListener('click', () => {
      categoryPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      activeFilters.category = pill.getAttribute('data-category');
      updateResults();
    });
  });

  // Deep link check: ?id=... or #/program-kerja?id=...
  const urlParams = new URLSearchParams(window.location.search);
  const hashPart = window.location.hash.includes('?') ? window.location.hash.split('?')[1] : '';
  const hashParams = new URLSearchParams(hashPart);
  const progId = hashParams.get('id') || urlParams.get('id');

  if (progId) {
    window.location.hash = `#/proker?id=${progId}`;
  }

  function bindCardClicks() {
    document.querySelectorAll('.proker-card').forEach(elem => {
      elem.addEventListener('click', (e) => {
        // Prevent double trigger if clicking directly on link button
        if (e.target.closest('a')) return;
        const id = elem.getAttribute('data-id');
        if (id) {
          window.location.hash = `#/proker?id=${id}`;
        }
      });
    });
  }

  bindCardClicks();
}

