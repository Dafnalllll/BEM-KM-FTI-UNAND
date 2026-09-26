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
        <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
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
            </div>
          </div>

          {/* Col 2: Kontak & Sekretariat */}
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
        <div className="footer-bottom" style={{ justifyContent: 'center', textAlign: 'center' }}>
          <div>
            &copy; 2026 BEM KM FTI &mdash; {cabinetInfo.cabinet}. Universitas Andalas.
          </div>
        </div>
      </div>
    </footer>
  );
}
