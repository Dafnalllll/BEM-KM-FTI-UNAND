/***
 * Footer Component
 * Tampilan modern dark navy, identitas kabinet, navigasi institusional, dan kanal media sosial
 */

import { cabinetInfo } from '../../../data/VismayaKriya/organization.js';
import { departmentsData } from '../../../data/VismayaKriya/departments.js';

export function renderFooter() {
  return `
    <footer class="site-footer">
      <div class="footer-glow"></div>
      
      <div class="container">
        <div class="footer-grid">
          {/* Col 1: Brand & Philosophy */}
          <div class="footer-brand">
            <div class="footer-logo-group">
              <img src="${cabinetInfo.logo}" alt="Logo Nexus Inspirasi" class="footer-logo">
              <div>
                <div class="footer-brand-name">BEM KM FTI</div>
                <div class="footer-brand-sub">Kabinet Nexus Inspirasi</div>
              </div>
            </div>
            <p class="footer-desc">
              Lembaga eksekutif mahasiswa tertinggi Fakultas Teknologi Informasi Universitas Andalas. Menjadi simpul koneksi aspirasi, inovasi teknologi, dan pergerakan kolaboratif demi kemajuan KM FTI.
            </p>
            <div class="footer-socials">
              <a href="${cabinetInfo.contact.instagram}" target="_blank" rel="noopener noreferrer" class="social-icon-btn" aria-label="Instagram">
                <img src="./src/assets/socialmedia/instagram.webp" alt="Instagram">
              </a>
              <a href="${cabinetInfo.contact.tiktok}" target="_blank" rel="noopener noreferrer" class="social-icon-btn" aria-label="TikTok">
                <img src="./src/assets/socialmedia/tiktok.webp" alt="TikTok">
              </a>
              <a href="${cabinetInfo.contact.youtube}" target="_blank" rel="noopener noreferrer" class="social-icon-btn" aria-label="YouTube">
                <img src="./src/assets/socialmedia/youtube.webp" alt="YouTube">
              </a>
              <a href="${cabinetInfo.contact.linkedin}" target="_blank" rel="noopener noreferrer" class="social-icon-btn" aria-label="LinkedIn">
                <img src="./src/assets/socialmedia/linkedln.webp" alt="LinkedIn">
              </a>
              <a href="${cabinetInfo.contact.spotify}" target="_blank" rel="noopener noreferrer" class="social-icon-btn" aria-label="Spotify">
                <img src="./src/assets/socialmedia/spotify.webp" alt="Spotify">
              </a>
              <a href="${cabinetInfo.contact.github}" target="_blank" rel="noopener noreferrer" class="social-icon-btn" aria-label="GitHub">
                <img src="./src/assets/socialmedia/github.webp" alt="GitHub">
              </a>
            </div>
          </div>

          {/* Col 2: Navigasi Cepat */}
          <div>
            <h4 class="footer-heading">Navigasi</h4>
            <div class="footer-links">
              <a href="#/" class="footer-link">&rarr; Beranda</a>
              <a href="#/tentang" class="footer-link">&rarr; Tentang Kabinet</a>
              <a href="#/dinas" class="footer-link">&rarr; Dinas & Biro</a>
              <a href="#/program-kerja" class="footer-link">&rarr; Program Kerja</a>
              <a href="#/galeri" class="footer-link">&rarr; Dokumentasi Galeri</a>
              <a href="#/aspirasi" class="footer-link">&rarr; Sampaikan Aspirasi</a>
            </div>
          </div>

          {/* Col 3: Dinas & Biro */}
          <div>
            <h4 class="footer-heading">Dinas & Biro</h4>
            <div class="footer-links">
              ${departmentsData.slice(0, 6).map(d => `
                <a href="#/dinas?slug=${d.slug}" class="footer-link">&bull; ${d.shortName}</a>
              `).join('')}
              <a href="#/dinas" class="footer-link" style="color: #60a5fa; font-weight: 600;">Lihat Semua (${departmentsData.length}) &rarr;</a>
            </div>
          </div>

          {/* Col 4: Kontak & Sekretariat */}
          <div>
            <h4 class="footer-heading">Sekretariat</h4>
            <div class="footer-contact-item">
              <svg class="footer-contact-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <span>${cabinetInfo.contact.address}</span>
            </div>
            <div class="footer-contact-item">
              <svg class="footer-contact-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              <span>${cabinetInfo.contact.email}</span>
            </div>
            <div style="margin-top: 1.25rem;">
              <span class="badge badge-status-ongoing" style="font-size: 0.8rem; padding: 0.35rem 0.85rem;">
                Periode Kepengurusan ${cabinetInfo.period}
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div class="footer-bottom">
          <div class="footer-bottom-logos">
            <img src="${cabinetInfo.logo}" alt="Nexus Inspirasi" class="footer-bottom-logo" title="Kabinet Nexus Inspirasi">
            <img src="${cabinetInfo.bemLogo}" alt="BEM KM FTI" class="footer-bottom-logo" title="BEM KM FTI">
            <img src="${cabinetInfo.ftiLogo}" alt="FTI UNAND" class="footer-bottom-logo" title="Fakultas Teknologi Informasi Universitas Andalas">
          </div>
          <div>
            &copy; 2026 BEM KM FTI &mdash; Kabinet Nexus Inspirasi. Universitas Andalas.
          </div>
        </div>
      </div>
    </footer>
  `;
}

