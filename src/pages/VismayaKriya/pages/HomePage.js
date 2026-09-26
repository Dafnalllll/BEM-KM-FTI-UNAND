/***
 * HomePage Component (Beranda)
 * Hero Section, Nilai Utama, Statistik Interaktif, Profil Pimpinan Editorial,
 * Program Unggulan, Informasi Terkini, & Mitra Ormawa FTI
 */

import { cabinetInfo } from '../data/organization.js';
import { api } from '../utils/api.js';
import { initCosmicParticles } from '../utils/particles.js';
import { openAspirationModal } from '../components/AspirationModal.js';
import { renderProgramModal } from '../components/ProgramModal.js';
import { getStatusBadgeClass } from '../utils/helpers.js';

export async function renderHomePage() {
  const info = await api.getCabinetInfo();
  const allProker = await api.getPrograms();
  const featuredProker = allProker.filter(p => p.featured).slice(0, 4);
  const newsList = (await api.getNews()).slice(0, 3);

  return `
    <div class="homepage">
      {/* HERO SECTION */}
      <section class="hero-section" id="hero" style="position: relative; min-height: 100vh; display: flex; align-items: center; justify-content: center; overflow: hidden; background-color: #050811;">
        {/* Canvas Star Particles */}
        <canvas id="hero-particles" class="hero-canvas"></canvas>

        {/* Background Image with Dark Navy Gradient Overlay */}
        <div style="position: absolute; inset: 0; background-image: url('${info.heroTeamImage}'); background-size: cover; background-position: center top; filter: saturate(0.85); opacity: 0.38;"></div>
        <div style="position: absolute; inset: 0; background: radial-gradient(circle at center, rgba(11, 18, 36, 0.6) 0%, rgba(7, 12, 24, 0.95) 100%), linear-gradient(180deg, rgba(7, 12, 24, 0.4) 0%, #070c18 100%);"></div>

        {/* Atmospheric Glows */}
        <div class="cosmic-glow-blob glow-blue" style="width: 500px; height: 500px; top: 15%; left: 10%;"></div>
        <div class="cosmic-glow-blob glow-navy" style="width: 600px; height: 600px; bottom: 10%; right: 10%;"></div>

        {/* Hero Content */}
        <div class="container" style="position: relative; z-index: 10; text-align: center; padding-top: 6rem; padding-bottom: 4rem;">
          {/* Official Cabinet Logo */}
          <div style="display: inline-flex; align-items: center; justify-content: center; width: 110px; height: 110px; border-radius: 50%; background: radial-gradient(circle, rgba(111,143,203,0.18) 0%, transparent 70%); margin-bottom: 1.5rem; filter: drop-shadow(0 0 20px rgba(56, 189, 248, 0.4)); animation: celestialFloat 6s ease-in-out infinite;">
            <img src="${info.logo}" alt="Logo Kabinet Nexus Inspirasi" style="width: 100%; height: 100%; object-fit: contain;">
          </div>

          <div class="section-tag" style="margin-bottom: 1.25rem;">
            <span>FTI &bull; Universitas Andalas</span>
          </div>

          <h1 class="hero-title">
            BEM KM FTI<br>
            <span class="hero-title-gradient">
              NEXUS INSPIRASI
            </span>
          </h1>

          <p class="hero-tagline">
            "${info.tagline}"
          </p>

          {/* Dual Call to Action Buttons */}
          <div class="hero-cta-group" style="display: flex; gap: 1.25rem; justify-content: center; flex-wrap: wrap;">
            <a href="#quick-intro" class="btn btn-primary btn-lg btn-glow" id="hero-explore-btn">
              <span>Jelajahi Kabinet</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline></svg>
            </a>
            <a href="#/tentang" class="btn btn-secondary btn-lg">
              <span>Kenali Kami</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </a>
          </div>
        </div>
      </section>

      {/* QUICK INTRODUCTION & 4 CORE VALUES */}
      <section class="section section-dark-alt" id="quick-intro">
        <div class="container">
          <div class="section-header">
            <div class="section-tag">Nilai Pokok & Karakter</div>
            <h2 class="section-title">Kabinet Nexus Inspirasi</h2>
            <p class="section-subtitle">
              BEM KM FTI hadir sebagai episentrum kolaborasi, ruang bertukar aspirasi, pemantik inovasi teknologi, dan dedikasi kontribusi nyata bagi sivitas akademika Fakultas Teknologi Informasi Universitas Andalas.
            </p>
            <div class="section-divider"></div>
          </div>

          {/* 4 Core Values Cards */}
          <div class="values-grid">
            ${info.values.map(val => `
              <div class="value-card">
                <div class="value-icon-box">
                  ${val.key === 'inspirasi' ? '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>' :
                    val.key === 'kolaborasi' ? '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg>' :
                    val.key === 'inovasi' ? '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>' :
                    '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>'
                  }
                </div>
                <h3 class="value-title">${val.title}</h3>
                <p class="value-desc">${val.desc}</p>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      {/* STATISTICS COUNTER SECTION */}
      <section class="section section-dark" style="padding: 2rem 0;">
        <div class="container">
          <div class="stats-container" id="stats-counter-section">
            ${info.stats.map(s => `
              <div class="stat-item">
                <div class="stat-number-wrap">
                  <span class="stat-number counter-value" data-target="${s.number}">0</span>
                  <span class="stat-suffix">${s.suffix}</span>
                </div>
                <div class="stat-label">${s.label}</div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      {/* LEADERSHIP EDITORIAL SECTION (Gubernur & Wagub) */}
      <section class="section section-dark-alt">
        <div class="container">
          <div class="section-header">
            <div class="section-tag">Nakhoda Kepengurusan</div>
            <h2 class="section-title">Pimpinan Kabinet</h2>
            <p class="section-subtitle">
              Membawa visi pergerakan mahasiswa yang adaptif, berintegritas, dan progresif untuk masa depan Fakultas Teknologi Informasi.
            </p>
            <div class="section-divider"></div>
          </div>

          <div class="leadership-grid">
            {/* Governor Card */}
            <div class="leader-card">
              <div class="leader-image-wrap">
                <img src="${info.leaders.governor.image}" alt="${info.leaders.governor.name}" class="leader-image">
                <div class="leader-image-overlay"></div>
              </div>
              <div class="leader-content">
                <span class="badge badge-status-ongoing leader-badge">${info.leaders.governor.term}</span>
                <h3 class="leader-name">${info.leaders.governor.name}</h3>
                <div class="leader-role">${info.leaders.governor.title}</div>
                <div class="leader-quote">"${info.leaders.governor.quote}"</div>
                <p class="leader-bio">${info.leaders.governor.message}</p>
                
                <div class="leader-socials">
                  <a href="${info.leaders.governor.socials.instagram}" target="_blank" rel="noopener noreferrer" class="social-icon-btn" aria-label="Instagram Gubernur">
                    <img src="./src/assets/socialmedia/instagram.webp" alt="Instagram">
                  </a>
                  <a href="${info.leaders.governor.socials.linkedin}" target="_blank" rel="noopener noreferrer" class="social-icon-btn" aria-label="LinkedIn Gubernur">
                    <img src="./src/assets/socialmedia/linkedln.webp" alt="LinkedIn">
                  </a>
                </div>
              </div>
            </div>

            {/* Vice Governor Card */}
            <div class="leader-card">
              <div class="leader-image-wrap">
                <img src="${info.leaders.viceGovernor.image}" alt="${info.leaders.viceGovernor.name}" class="leader-image">
                <div class="leader-image-overlay"></div>
              </div>
              <div class="leader-content">
                <span class="badge badge-status-ongoing leader-badge">${info.leaders.viceGovernor.term}</span>
                <h3 class="leader-name">${info.leaders.viceGovernor.name}</h3>
                <div class="leader-role">${info.leaders.viceGovernor.title}</div>
                <div class="leader-quote">"${info.leaders.viceGovernor.quote}"</div>
                <p class="leader-bio">${info.leaders.viceGovernor.message}</p>
                
                <div class="leader-socials">
                  <a href="${info.leaders.viceGovernor.socials.instagram}" target="_blank" rel="noopener noreferrer" class="social-icon-btn" aria-label="Instagram Wagub">
                    <img src="./src/assets/socialmedia/instagram.webp" alt="Instagram">
                  </a>
                  <a href="${info.leaders.viceGovernor.socials.linkedin}" target="_blank" rel="noopener noreferrer" class="social-icon-btn" aria-label="LinkedIn Wagub">
                    <img src="./src/assets/socialmedia/linkedln.webp" alt="LinkedIn">
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED WORK PROGRAMS PREVIEW */}
      <section class="section section-dark">
        <div class="container">
          <div class="section-header">
            <div class="section-tag">Aksi & Kontribusi</div>
            <h2 class="section-title">Program Kerja Unggulan</h2>
            <p class="section-subtitle">
              Inisiatif strategis yang dirancang untuk mengasah kapasitas intelektual, kepedulian sosial, dan kemandirian mahasiswa FTI.
            </p>
            <div class="section-divider"></div>
          </div>

          <div class="programs-grid">
            ${featuredProker.map(p => `
              <div class="proker-card home-proker-card" data-id="${p.id}">
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
                  <div class="proker-footer">
                    <span>${p.date}</span>
                    <span style="color: #60a5fa; font-weight: 600; display: flex; align-items: center; gap: 4px;">
                      Detail &rarr;
                    </span>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>

          <div style="text-align: center; margin-top: 3.5rem;">
            <a href="#/program-kerja" class="btn btn-secondary btn-lg">
              <span>Lihat Seluruh 40+ Program Kerja</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </a>
          </div>
        </div>
      </section>

      {/* LATEST NEWS & INFORMASI TERKINI */}
      <section class="section section-dark-alt">
        <div class="container">
          <div class="section-header">
            <div class="section-tag">Warta Kampus</div>
            <h2 class="section-title">Informasi Terkini</h2>
            <p class="section-subtitle">
              Rilis pers, kabar pergerakan mahasiswa, dan pengumuman terbaru seputar Fakultas Teknologi Informasi.
            </p>
            <div class="section-divider"></div>
          </div>

          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 2rem;">
            ${newsList.map(n => `
              <div class="card card-dark home-news-card" data-id="${n.id}" style="cursor: pointer; display: flex; flex-direction: column;">
                <div style="position: relative; width: 100%; height: 210px; overflow: hidden; background: #050811;">
                  <img src="${n.thumbnail}" alt="${n.title}" style="width: 100%; height: 100%; object-fit: cover; transition: transform var(--transition-smooth);" class="news-thumb">
                  <span class="badge" style="position: absolute; top: 1rem; left: 1rem; background: rgba(11,18,36,0.85); color: #60a5fa; border: 1px solid rgba(96,165,250,0.3);">
                    ${n.category}
                  </span>
                </div>
                <div style="padding: 1.75rem; display: flex; flex-direction: column; flex-grow: 1;">
                  <div style="font-size: 0.8rem; color: #94a3b8; margin-bottom: 0.5rem;">${n.date} &bull; ${n.readTime}</div>
                  <h3 style="font-size: 1.15rem; font-weight: 700; color: #ffffff; margin-bottom: 0.75rem; line-height: 1.4;">${n.title}</h3>
                  <p style="font-size: 0.875rem; color: #cbd5e1; line-height: 1.6; margin-bottom: 1.25rem; flex-grow: 1;">${n.excerpt}</p>
                  <div style="color: #60a5fa; font-weight: 600; font-size: 0.875rem; display: flex; align-items: center; gap: 4px;">
                    Baca Selengkapnya &rarr;
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      {/* ASPIRASI MAHASISWA QUICK BANNER */}
      <section class="section section-dark" style="background: linear-gradient(180deg, #070c18 0%, #0b1224 100%);">
        <div class="container">
          <div style="background: linear-gradient(135deg, rgba(22,36,69,0.9), rgba(16,26,51,0.95)); border: 1px solid var(--border-dark-hover); border-radius: var(--radius-xl); padding: 3.5rem 2.5rem; display: flex; align-items: center; justify-content: space-between; gap: 2.5rem; flex-wrap: wrap; box-shadow: var(--shadow-card-dark), var(--glow-subtle);">
            <div style="max-width: 600px;">
              <span class="badge badge-status-ongoing" style="margin-bottom: 0.75rem;">Ruang Aspirasi Mahasiswa</span>
              <h2 style="font-size: 2rem; font-weight: 800; color: #ffffff; line-height: 1.2; margin-bottom: 0.75rem;">Punya Aspirasi atau Keluhan Perkuliahan?</h2>
              <p style="color: #cbd5e1; font-size: 0.95rem; line-height: 1.7;">
                BEM KM FTI menyediakan kanal terbuka dan aman untuk mendengar aspirasimu. Kamu dapat memilih untuk mengirimkannya secara anonim. Mari bersama kita wujudkan kampus yang lebih baik.
              </p>
            </div>
            <div>
              <button class="btn btn-primary btn-lg btn-glow" id="cta-open-aspirasi-btn" type="button">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                <span>Sampaikan Aspirasimu Sekarang</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ORMAWA PARTNERS SHOWCASE (Himpunan & UKM) */}
      <section class="section section-dark-alt" style="padding: 3.5rem 0; border-top: 1px solid var(--border-dark);">
        <div class="container" style="text-align: center;">
          <div style="font-size: 0.8125rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.15em; color: #94a3b8; margin-bottom: 2rem;">
            Sinergi Lembaga Kemahasiswaan Fakultas Teknologi Informasi
          </div>
          <div style="display: flex; justify-content: center; align-items: center; gap: 2.5rem; flex-wrap: wrap;">
            <a href="#/lembaga?slug=hmif" style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem; text-decoration: none; transition: transform 0.2s;" title="Himpunan Mahasiswa Informatika (HMIF)" onmouseover="this.style.transform='scale(1.08)'" onmouseout="this.style.transform='scale(1)'">
              <img src="./src/assets/himpunan/hmif.webp" alt="HMIF UNAND" style="height: 48px; object-fit: contain;">
              <span style="font-size: 0.75rem; color: #cbd5e1; font-weight: 600;">HMIF</span>
            </a>
            <a href="#/lembaga?slug=hmsi" style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem; text-decoration: none; transition: transform 0.2s;" title="Himpunan Mahasiswa Sistem Informasi (HMSI)" onmouseover="this.style.transform='scale(1.08)'" onmouseout="this.style.transform='scale(1)'">
              <img src="./src/assets/himpunan/hmsi.webp" alt="HMSI UNAND" style="height: 48px; object-fit: contain;">
              <span style="font-size: 0.75rem; color: #cbd5e1; font-weight: 600;">HMSI</span>
            </a>
            <a href="#/lembaga?slug=himatekom" style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem; text-decoration: none; transition: transform 0.2s;" title="Himpunan Mahasiswa Teknik Komputer (HIMATEKOM)" onmouseover="this.style.transform='scale(1.08)'" onmouseout="this.style.transform='scale(1)'">
              <img src="./src/assets/himpunan/himatekom.webp" alt="HIMATEKOM UNAND" style="height: 48px; object-fit: contain;">
              <span style="font-size: 0.75rem; color: #cbd5e1; font-weight: 600;">HIMATEKOM</span>
            </a>
            <a href="#/lembaga?slug=dpm" style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem; text-decoration: none; transition: transform 0.2s;" title="Dewan Perwakilan Mahasiswa FTI (DPM)" onmouseover="this.style.transform='scale(1.08)'" onmouseout="this.style.transform='scale(1)'">
              <img src="./src/assets/ukm/dpm.webp" alt="DPM FTI" style="height: 48px; object-fit: contain;">
              <span style="font-size: 0.75rem; color: #cbd5e1; font-weight: 600;">DPM FTI</span>
            </a>
            <a href="#/lembaga?slug=fsi" style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem; text-decoration: none; transition: transform 0.2s;" title="Forum Studi Islam FTI (FSI)" onmouseover="this.style.transform='scale(1.08)'" onmouseout="this.style.transform='scale(1)'">
              <img src="./src/assets/ukm/fsi.webp" alt="FSI FTI" style="height: 48px; object-fit: contain;">
              <span style="font-size: 0.75rem; color: #cbd5e1; font-weight: 600;">FSI FTI</span>
            </a>
            <a href="#/lembaga?slug=ukos" style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem; text-decoration: none; transition: transform 0.2s;" title="Unit Kegiatan Olahraga & Seni FTI (UKOS)" onmouseover="this.style.transform='scale(1.08)'" onmouseout="this.style.transform='scale(1)'">
              <img src="./src/assets/ukm/ukos.webp" alt="UKOS FTI" style="height: 48px; object-fit: contain;">
              <span style="font-size: 0.75rem; color: #cbd5e1; font-weight: 600;">UKOS FTI</span>
            </a>
            <a href="#/lembaga?slug=tectona" style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem; text-decoration: none; transition: transform 0.2s;" title="Tectona FTI UNAND" onmouseover="this.style.transform='scale(1.08)'" onmouseout="this.style.transform='scale(1)'">
              <img src="./src/assets/ukm/tectona.webp" alt="Tectona FTI" style="height: 48px; object-fit: contain;">
              <span style="font-size: 0.75rem; color: #cbd5e1; font-weight: 600;">TECTONA</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  `;
}

export function initHomePageEvents() {
  // Init Particles
  initCosmicParticles('hero-particles');

  // Animated Counter on viewport entry
  const statsSection = document.getElementById('stats-counter-section');
  if (statsSection) {
    let animated = false;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !animated) {
          animated = true;
          const counters = statsSection.querySelectorAll('.counter-value');
          counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-target'), 10) || 0;
            const duration = 1600;
            const startTime = performance.now();

            function updateCount(now) {
              const elapsed = now - startTime;
              const progress = Math.min(elapsed / duration, 1);
              // Ease out quad
              const easeProgress = progress * (2 - progress);
              counter.textContent = Math.floor(easeProgress * target);

              if (progress < 1) {
                requestAnimationFrame(updateCount);
              } else {
                counter.textContent = target;
              }
            }

            requestAnimationFrame(updateCount);
          });
        }
      });
    }, { threshold: 0.3 });

    observer.observe(statsSection);
  }

  // Bind Proker Click to navigate to detail page
  document.querySelectorAll('.home-proker-card').forEach(card => {
    card.addEventListener('click', () => {
      const id = card.getAttribute('data-id');
      if (id) {
        window.location.hash = `#/proker?id=${id}`;
      }
    });
  });

  // Bind News Click
  document.querySelectorAll('.home-news-card').forEach(card => {
    card.addEventListener('click', async () => {
      const id = card.getAttribute('data-id');
      try {
        const article = await api.getNewsById(id);
        const modalHtml = `
          <div class="modal-overlay open" id="news-modal-overlay">
            <div class="modal-dialog" style="max-width: 740px;">
              <div style="position: relative; width: 100%; height: 280px; overflow: hidden; background: #050811;">
                <img src="${article.thumbnail}" alt="${article.title}" style="width: 100%; height: 100%; object-fit: cover;">
                <div style="position: absolute; inset: 0; background: linear-gradient(180deg, rgba(7,12,24,0.2) 0%, rgba(11,18,36,0.95) 100%);"></div>
                <button class="modal-close-btn" id="news-modal-close" aria-label="Tutup"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></button>
                <div style="position: absolute; bottom: 1.5rem; left: 2rem; right: 2rem;">
                  <span class="badge" style="background: #2563eb; color: #fff; margin-bottom: 0.5rem;">${article.category}</span>
                  <h2 style="font-size: 1.6rem; font-weight: 800; color: #fff; line-height: 1.2;">${article.title}</h2>
                </div>
              </div>
              <div class="modal-body">
                <div style="display: flex; gap: 1rem; font-size: 0.85rem; color: #94a3b8; margin-bottom: 1.5rem; padding-bottom: 1rem; border-bottom: 1px solid rgba(255,255,255,0.08);">
                  <span>Oleh: <strong style="color: #fff;">${article.author}</strong></span>
                  <span>&bull;</span>
                  <span>${article.date}</span>
                  <span>&bull;</span>
                  <span>${article.readTime}</span>
                </div>
                <div style="color: #cbd5e1; font-size: 0.95rem; line-height: 1.8;">
                  ${article.content}
                </div>
              </div>
            </div>
          </div>
        `;
        document.body.insertAdjacentHTML('beforeend', modalHtml);
        document.getElementById('news-modal-close')?.addEventListener('click', () => {
          document.getElementById('news-modal-overlay')?.remove();
        });
        document.getElementById('news-modal-overlay')?.addEventListener('click', (e) => {
          if (e.target.id === 'news-modal-overlay') e.target.remove();
        });
      } catch (e) {
        console.error(e);
      }
    });
  });

  // Open Aspiration CTA button
  document.getElementById('cta-open-aspirasi-btn')?.addEventListener('click', openAspirationModal);
}

