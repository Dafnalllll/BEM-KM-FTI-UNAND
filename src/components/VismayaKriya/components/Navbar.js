/***
 * Navbar Component
 * Transparan di Hero, solid semi-transparan navy saat scroll, responsif dengan mobile menu & dropdown Dinas & Ormawa
 */

import { cabinetInfo } from '../../../data/VismayaKriya/organization.js';
import { departmentsData } from '../../../data/VismayaKriya/departments.js';
import { partnersData } from '../../../data/VismayaKriya/partners.js';

export function renderNavbar() {
  const currentHash = window.location.hash || '#/';

  const dinasDropdownItems = departmentsData.map(d => `
    <a href="#/dinas?slug=${d.slug}" class="dropdown-item" data-slug="${d.slug}">
      <img src="${d.logo}" alt="${d.name}" loading="lazy">
      <div class="dropdown-item-meta">
        <span class="dropdown-item-name">${d.shortName}</span>
        <span class="dropdown-item-desc">${d.type} ${d.shortName}</span>
      </div>
    </a>
  `).join('');

  const himpunanList = partnersData.filter(p => p.category.includes('Himpunan'));
  const ukmList = partnersData.filter(p => p.category.includes('UKM') || p.category.includes('Unit Kegiatan'));

  const himpunanDropdownItems = himpunanList.map(h => `
    <a href="#/lembaga?slug=${h.slug}" class="dropdown-item" data-slug="${h.slug}">
      <img src="${h.logo}" alt="${h.shortName}" loading="lazy" style="object-fit: contain;">
      <div class="dropdown-item-meta">
        <span class="dropdown-item-name">${h.shortName}</span>
        <span class="dropdown-item-desc">${h.name}</span>
      </div>
    </a>
  `).join('');

  const ukmDropdownItems = ukmList.map(u => `
    <a href="#/lembaga?slug=${u.slug}" class="dropdown-item" data-slug="${u.slug}">
      <img src="${u.logo}" alt="${u.shortName}" loading="lazy" style="object-fit: contain;">
      <div class="dropdown-item-meta">
        <span class="dropdown-item-name">${u.shortName}</span>
        <span class="dropdown-item-desc">${u.name}</span>
      </div>
    </a>
  `).join('');

  return `
    <nav class="navbar transparent" id="main-navbar">
      <div class="container navbar-container">
        {/* Brand */}
        <a href="#/" class="navbar-brand">
          <div class="navbar-logo-wrap">
            <img src="${cabinetInfo.logo}" alt="Logo Nexus Inspirasi" class="navbar-logo">
          </div>
          <div class="navbar-brand-text">
            <span class="brand-title">BEM KM FTI</span>
            <span class="brand-subtitle">Nexus Inspirasi</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div class="navbar-nav">
          <a href="#/" class="nav-link ${currentHash === '#/' ? 'active' : ''}">Beranda</a>
          
          {/* Dropdown Tentang & Lembaga (Himpunan & UKM) */}
          <div class="nav-dropdown">
            <a href="#/tentang" class="nav-link dropdown-toggle ${currentHash.startsWith('#/tentang') || currentHash.startsWith('#/lembaga') ? 'active' : ''}">
              <span>Tentang</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </a>
            <div class="dropdown-menu" style="min-width: 280px;">
              <a href="#/tentang" class="dropdown-item" style="border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 0.65rem; margin-bottom: 0.35rem;">
                <div class="dropdown-item-meta">
                  <span class="dropdown-item-name" style="color: #60a5fa; font-weight: 700;">Profil Kabinet Nexus &rarr;</span>
                  <span class="dropdown-item-desc">Visi, Misi & Struktur BEM KM FTI</span>
                </div>
              </a>
              <div style="font-size: 0.7rem; font-weight: 700; text-transform: uppercase; color: #60a5fa; letter-spacing: 0.08em; padding: 0.4rem 0.75rem 0.2rem;">
                Himpunan Mahasiswa
              </div>
              ${himpunanDropdownItems}
              <div style="font-size: 0.7rem; font-weight: 700; text-transform: uppercase; color: #60a5fa; letter-spacing: 0.08em; padding: 0.6rem 0.75rem 0.2rem; border-top: 1px solid rgba(255,255,255,0.06); margin-top: 0.3rem;">
                Unit Kegiatan Mahasiswa (UKM)
              </div>
              ${ukmDropdownItems}
            </div>
          </div>
          
          {/* Dropdown Dinas & Biro */}
          <div class="nav-dropdown">
            <a href="#/dinas" class="nav-link dropdown-toggle ${currentHash.startsWith('#/dinas') ? 'active' : ''}">
              <span>Dinas & Biro</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </a>
            <div class="dropdown-menu">
              ${dinasDropdownItems}
            </div>
          </div>

          <a href="#/program-kerja" class="nav-link ${currentHash.startsWith('#/program-kerja') || currentHash.startsWith('#/proker') ? 'active' : ''}">Program Kerja</a>
          <a href="#/galeri" class="nav-link ${currentHash === '#/galeri' ? 'active' : ''}">Galeri</a>
        </div>

        {/* Action / CTA Button */}
        <div class="navbar-actions">
          <button class="btn btn-primary btn-sm btn-glow" id="nav-aspirasi-btn" type="button">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
            <span>Sampaikan Aspirasi</span>
          </button>

          {/* Mobile Toggle Button */}
          <button class="mobile-toggle" id="mobile-menu-toggle" aria-label="Buka Menu Navigasi" type="button">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>

    {/* Mobile Navigation Drawer */}
    <div class="mobile-drawer-backdrop" id="mobile-drawer-backdrop"></div>
    <div class="mobile-drawer" id="mobile-drawer">
      <div style="display: flex; align-items: center; justify-content: space-between; padding-bottom: 1rem; border-bottom: 1px solid rgba(255,255,255,0.08);">
        <div style="display: flex; align-items: center; gap: 0.75rem;">
          <img src="${cabinetInfo.logo}" alt="Nexus" style="width: 36px; height: 36px; object-fit: contain;">
          <div>
            <div style="font-weight: 800; color: #fff; font-size: 0.95rem;">BEM KM FTI</div>
            <div style="font-size: 0.7rem; color: #60a5fa; letter-spacing: 0.1em;">NEXUS INSPIRASI</div>
          </div>
        </div>
        <button id="mobile-drawer-close" style="color: #94a3b8; padding: 0.25rem;">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>
      </div>

      <div style="display: flex; flex-direction: column; gap: 0.5rem; margin-top: 1rem;">
        <a href="#/" class="mobile-nav-link ${currentHash === '#/' ? 'active' : ''}">Beranda</a>
        <a href="#/tentang" class="mobile-nav-link ${currentHash === '#/tentang' ? 'active' : ''}">Tentang Kabinet</a>
        
        {/* Mobile Sub-Menu Ormawa */}
        <div>
          <div class="mobile-nav-link" id="mobile-ormawa-toggle" style="cursor: pointer;">
            <span>Himpunan & UKM</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
          </div>
          <div class="mobile-sub-menu" id="mobile-ormawa-submenu">
            <div style="font-size: 0.75rem; color: #60a5fa; font-weight: 700; padding: 0.3rem 0;">HIMPUNAN MAHASISWA</div>
            ${himpunanList.map(h => `
              <a href="#/lembaga?slug=${h.slug}" style="padding: 0.35rem 0; font-size: 0.85rem; color: #afcbee; display: flex; align-items: center; gap: 0.5rem;">
                <img src="${h.logo}" style="width: 18px; height: 18px; object-fit: contain;">
                <span>${h.shortName}</span>
              </a>
            `).join('')}
            <div style="font-size: 0.75rem; color: #60a5fa; font-weight: 700; padding: 0.6rem 0 0.3rem;">UNIT KEGIATAN MAHASISWA</div>
            ${ukmList.map(u => `
              <a href="#/lembaga?slug=${u.slug}" style="padding: 0.35rem 0; font-size: 0.85rem; color: #afcbee; display: flex; align-items: center; gap: 0.5rem;">
                <img src="${u.logo}" style="width: 18px; height: 18px; object-fit: contain;">
                <span>${u.shortName}</span>
              </a>
            `).join('')}
          </div>
        </div>

        {/* Mobile Sub-Menu Dinas & Biro */}
        <div>
          <div class="mobile-nav-link" id="mobile-dinas-toggle" style="cursor: pointer;">
            <span>Dinas & Biro</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
          </div>
          <div class="mobile-sub-menu" id="mobile-dinas-submenu">
            <a href="#/dinas" style="padding: 0.4rem 0; font-size: 0.9rem; color: #60a5fa; font-weight: 600;">Lihat Semua Dinas & Biro &rarr;</a>
            ${departmentsData.map(d => `
              <a href="#/dinas?slug=${d.slug}" style="padding: 0.35rem 0; font-size: 0.85rem; color: #afcbee; display: flex; align-items: center; gap: 0.5rem;">
                <img src="${d.logo}" style="width: 18px; height: 18px; object-fit: contain;">
                <span>${d.shortName}</span>
              </a>
            `).join('')}
          </div>
        </div>

        <a href="#/program-kerja" class="mobile-nav-link ${currentHash.startsWith('#/program-kerja') || currentHash.startsWith('#/proker') ? 'active' : ''}">Program Kerja</a>
        <a href="#/galeri" class="mobile-nav-link ${currentHash === '#/galeri' ? 'active' : ''}">Galeri</a>
      </div>

      <div style="margin-top: auto; padding-top: 1.5rem; border-top: 1px solid rgba(255,255,255,0.08);">
        <button class="btn btn-primary" id="mobile-aspirasi-btn" style="width: 100%;" type="button">
          Sampaikan Aspirasi
        </button>
      </div>
    </div>
  `;
}

export function initNavbarEvents() {
  const navbar = document.getElementById('main-navbar');
  const toggleBtn = document.getElementById('mobile-menu-toggle');
  const drawer = document.getElementById('mobile-drawer');
  const backdrop = document.getElementById('mobile-drawer-backdrop');
  const closeBtn = document.getElementById('mobile-drawer-close');
  const dinasToggle = document.getElementById('mobile-dinas-toggle');
  const dinasSubmenu = document.getElementById('mobile-dinas-submenu');
  const ormawaToggle = document.getElementById('mobile-ormawa-toggle');
  const ormawaSubmenu = document.getElementById('mobile-ormawa-submenu');

  // Scroll listener for sticky solid background
  function handleScroll() {
    if (!navbar) return;
    if (window.scrollY > 40) {
      navbar.classList.remove('transparent');
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
      navbar.classList.add('transparent');
    }
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // Mobile Drawer Toggle
  function openDrawer() {
    drawer?.classList.add('open');
    backdrop?.classList.add('open');
    toggleBtn?.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    drawer?.classList.remove('open');
    backdrop?.classList.remove('open');
    toggleBtn?.classList.remove('active');
    document.body.style.overflow = '';
  }

  toggleBtn?.addEventListener('click', () => {
    if (drawer?.classList.contains('open')) {
      closeDrawer();
    } else {
      openDrawer();
    }
  });

  closeBtn?.addEventListener('click', closeDrawer);
  backdrop?.addEventListener('click', closeDrawer);

  dinasToggle?.addEventListener('click', () => {
    dinasSubmenu?.classList.toggle('open');
  });

  ormawaToggle?.addEventListener('click', () => {
    ormawaSubmenu?.classList.toggle('open');
  });

  // Close drawer on link click
  drawer?.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', closeDrawer);
  });
}

