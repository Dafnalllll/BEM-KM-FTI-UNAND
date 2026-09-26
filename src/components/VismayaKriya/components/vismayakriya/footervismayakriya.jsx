import React from 'react';
import { cabinetInfo } from '../../../../data/VismayaKriya/organization.js';
import { departmentsData } from '../../../../data/VismayaKriya/departments.js';
import { resolveAsset } from './utils/helpers.js';

export function FooterVismayakriya({ onTabChange }) {
  const handleNavClick = (tab, slug = null) => (e) => {
    e.preventDefault();
    if (onTabChange) {
      onTabChange(tab, slug);
    }
  };

  return (
    <footer className="site-footer">
      <div className="footer-glow"></div>

      <div className="container">
        <div className="footer-grid">
          {/* Col 1: Brand & Philosophy */}
          <div className="footer-brand">
            <div className="footer-logo-group">
              <img src={resolveAsset(cabinetInfo.logo)} alt="Logo Vismayakriya" className="footer-logo" />
              <div>
                <div className="footer-brand-name">BEM KM FTI</div>
                <div className="footer-brand-sub">{cabinetInfo.cabinet}</div>
              </div>
            </div>
            <p className="footer-desc">
              Lembaga eksekutif mahasiswa tertinggi Fakultas Teknologi Informasi Universitas Andalas. Menjadi simpul koneksi aspirasi, inovasi teknologi, dan pergerakan kolaboratif demi kemajuan KM FTI.
            </p>
            <div className="footer-socials">
              <a href={cabinetInfo.contact.instagram} target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="Instagram">
                <img src={resolveAsset('/vismayakriya/socialmedia/instagram.webp')} alt="Instagram" />
              </a>
              <a href={cabinetInfo.contact.tiktok} target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="TikTok">
                <img src={resolveAsset('/vismayakriya/socialmedia/tiktok.webp')} alt="TikTok" />
              </a>
              <a href={cabinetInfo.contact.youtube} target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="YouTube">
                <img src={resolveAsset('/vismayakriya/socialmedia/youtube.webp')} alt="YouTube" />
              </a>
              <a href={cabinetInfo.contact.linkedin} target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="LinkedIn">
                <img src={resolveAsset('/vismayakriya/socialmedia/linkedln.webp')} alt="LinkedIn" />
              </a>
              <a href={cabinetInfo.contact.spotify} target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="Spotify">
                <img src={resolveAsset('/vismayakriya/socialmedia/spotify.webp')} alt="Spotify" />
              </a>
              <a href={cabinetInfo.contact.github} target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="GitHub">
                <img src={resolveAsset('/vismayakriya/socialmedia/github.webp')} alt="GitHub" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigasi Cepat */}
          <div>
            <h4 className="footer-heading">Navigasi</h4>
            <div className="footer-links">
              <a href="#/" className="footer-link" onClick={handleNavClick('beranda')}>Beranda</a>
              <a href="#/tentang" className="footer-link" onClick={handleNavClick('tentang')}>Tentang Kabinet</a>
              <a href="#/dinas" className="footer-link" onClick={handleNavClick('dinas')}>Dinas & Biro</a>
              <a href="#/program-kerja" className="footer-link" onClick={handleNavClick('program-kerja')}>Program Kerja</a>
              <a href="#/galeri" className="footer-link" onClick={handleNavClick('galeri')}>Dokumentasi Galeri</a>
              <a href="#/aspirasi" className="footer-link" onClick={handleNavClick('aspirasi')}>Sampaikan Aspirasi</a>
            </div>
          </div>

          {/* Col 3: Dinas & Biro */}
          <div>
            <h4 className="footer-heading">Dinas & Biro</h4>
            <div className="footer-links">
              {departmentsData.slice(0, 6).map(d => (
                <a key={d.id} href={`#/dinas?slug=${d.slug}`} className="footer-link" onClick={handleNavClick('dinas', d.slug)}>
                  &bull; {d.shortName}
                </a>
              ))}
              <a href="#/dinas" className="footer-link" style={{ color: '#60a5fa', fontWeight: 600 }} onClick={handleNavClick('dinas')}>
                Lihat Semua ({departmentsData.length})
              </a>
            </div>
          </div>

          {/* Col 4: Kontak & Sekretariat */}
          <div>
            <h4 className="footer-heading">Sekretariat</h4>
            <div className="footer-contact-item">
              <svg className="footer-contact-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <span>{cabinetInfo.contact.address}</span>
            </div>
            <div className="footer-contact-item">
              <svg className="footer-contact-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              <span>{cabinetInfo.contact.email}</span>
            </div>
            <div style={{ marginTop: '1.25rem' }}>
              <span className="badge badge-status-ongoing" style={{ fontSize: '0.8rem', padding: '0.35rem 0.85rem' }}>
                Periode Kepengurusan {cabinetInfo.period}
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-bottom-logos">
            <img src={resolveAsset(cabinetInfo.logo)} alt="Kabinet Vismayakriya" className="footer-bottom-logo" title="Kabinet Vismayakriya" />
            <img src={resolveAsset(cabinetInfo.bemLogo)} alt="BEM KM FTI" className="footer-bottom-logo" title="BEM KM FTI" />
            <img src={resolveAsset(cabinetInfo.ftiLogo)} alt="FTI UNAND" className="footer-bottom-logo" title="Fakultas Teknologi Informasi Universitas Andalas" />
          </div>
          <div>
            &copy; 2026 BEM KM FTI &mdash; {cabinetInfo.cabinet}. Universitas Andalas.
          </div>
        </div>
      </div>
    </footer>
  );
}
