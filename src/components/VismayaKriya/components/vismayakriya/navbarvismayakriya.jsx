import React, { useState, useEffect } from 'react';
import { cabinetInfo } from '../../../../data/VismayaKriya/organization.js';
import { departmentsData } from '../../../../data/VismayaKriya/departments.js';
import { ormawaData } from '../../../../data/VismayaKriya/ormawa.js';
import { resolveAsset } from './utils/helpers.js';

export function NavbarVismayakriya({ activeTab, onTabChange, onOpenAspirationModal, onOpenOrmawaModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [mobileDinasOpen, setMobileDinasOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavClick = (tab, slug = null) => (e) => {
    if (e && e.preventDefault) e.preventDefault();
    if (onTabChange) {
      onTabChange(tab, slug);
    }
    setDrawerOpen(false);
  };

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'scrolled' : 'transparent'}`} id="main-navbar">
        <div className="container navbar-container">
          {/* Brand */}
          <a href="#/" className="navbar-brand" onClick={handleNavClick('beranda')}>
            <div className="navbar-logo-wrap">
              <img src={resolveAsset(cabinetInfo.logo)} alt="Logo Vismayakriya" className="navbar-logo" />
            </div>
            <div className="navbar-brand-text">
              <span className="brand-title">BEM KM FTI</span>
              <span className="brand-subtitle">Vismayakriya</span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="navbar-nav">
            <a
              href="#/"
              className={`nav-link ${activeTab === 'beranda' ? 'active' : ''}`}
              onClick={handleNavClick('beranda')}
            >
              Beranda
            </a>

            {/* Dropdown Tentang */}
            <div className="nav-dropdown">
              <a
                href="#/tentang"
                className={`nav-link dropdown-toggle ${activeTab === 'tentang' ? 'active' : ''}`}
                onClick={handleNavClick('tentang')}
              >
                <span>Tentang</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </a>
              <div className="dropdown-menu dropdown-menu-narrow">
                <a
                  href="#/tentang"
                  className="dropdown-item"
                  onClick={(e) => {
                    handleNavClick('tentang')(e);
                  }}
                >
                  <div className="dropdown-item-meta">
                    <span className="dropdown-item-name" style={{ color: '#0f172a', fontWeight: 700 }}>
                      Profil Kabinet
                    </span>
                  </div>
                </a>
                <a
                  href="#/tentang#ormawa-fti"
                  className="dropdown-item"
                  onClick={(e) => {
                    handleNavClick('tentang')(e);
                    setTimeout(() => {
                      document.getElementById('ormawa-fti')?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                >
                  <div className="dropdown-item-meta">
                    <span className="dropdown-item-name" style={{ color: '#0f172a', fontWeight: 700 }}>
                      Himpunan & UKM
                    </span>
                  </div>
                </a>
              </div>
            </div>

            {/* Dropdown Dinas & Biro */}
            <div className="nav-dropdown">
              <a
                href="#/dinas"
                className={`nav-link dropdown-toggle ${activeTab === 'dinas' ? 'active' : ''}`}
                onClick={handleNavClick('dinas')}
              >
                <span>Dinas & Biro</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </a>
              <div className="dropdown-menu">
                {departmentsData.map(d => (
                  <a
                    key={d.id}
                    href={`#/dinas?slug=${d.slug}`}
                    className="dropdown-item"
                    onClick={handleNavClick('dinas', d.slug)}
                  >
                    <img src={resolveAsset(d.logo)} alt={d.name} loading="lazy" />
                    <div className="dropdown-item-meta">
                      <span className="dropdown-item-name">{d.shortName}</span>
                      <span className="dropdown-item-desc">{d.type} {d.shortName}</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <a
              href="#/program-kerja"
              className={`nav-link ${activeTab === 'program-kerja' ? 'active' : ''}`}
              onClick={handleNavClick('program-kerja')}
            >
              Program Kerja
            </a>
            <a
              href="#/galeri"
              className={`nav-link ${activeTab === 'galeri' ? 'active' : ''}`}
              onClick={handleNavClick('galeri')}
            >
              Galeri
            </a>
          </div>

          {/* Action / CTA Button */}
          <div className="navbar-actions">
            <button
              className="btn btn-primary btn-sm btn-glow"
              id="nav-aspirasi-btn"
              type="button"
              onClick={onOpenAspirationModal}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              </svg>
              <span>Sampaikan Aspirasi</span>
            </button>

            {/* Mobile Toggle Button */}
            <button
              className={`mobile-toggle ${drawerOpen ? 'active' : ''}`}
              id="mobile-menu-toggle"
              aria-label="Buka Menu Navigasi"
              type="button"
              onClick={() => setDrawerOpen(!drawerOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Drawer */}
      <div
        className={`mobile-drawer-backdrop ${drawerOpen ? 'open' : ''}`}
        id="mobile-drawer-backdrop"
        onClick={() => setDrawerOpen(false)}
      ></div>
      <div className={`mobile-drawer ${drawerOpen ? 'open' : ''}`} id="mobile-drawer">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <img src={resolveAsset(cabinetInfo.logo)} alt="Vismayakriya" style={{ width: '36px', height: '36px', objectFit: 'contain' }} />
            <div>
              <div style={{ fontWeight: 800, color: '#fff', fontSize: '0.95rem' }}>BEM KM FTI</div>
              <div style={{ fontSize: '0.7rem', color: '#60a5fa', letterSpacing: '0.1em' }}>VISMAYAKRIYA</div>
            </div>
          </div>
          <button
            id="mobile-drawer-close"
            style={{ color: '#94a3b8', padding: '0.25rem', background: 'none', border: 'none', cursor: 'pointer' }}
            onClick={() => setDrawerOpen(false)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '1rem' }}>
          <a
            href="#/"
            className={`mobile-nav-link ${activeTab === 'beranda' ? 'active' : ''}`}
            onClick={handleNavClick('beranda')}
          >
            Beranda
          </a>
          <a
            href="#/tentang"
            className={`mobile-nav-link ${activeTab === 'tentang' ? 'active' : ''}`}
            onClick={handleNavClick('tentang')}
          >
            Tentang
          </a>

          <div>
            <div
              className="mobile-nav-link"
              id="mobile-dinas-toggle"
              style={{ cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
              onClick={() => setMobileDinasOpen(!mobileDinasOpen)}
            >
              <span>Dinas & Biro</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </div>
            <div className={`mobile-sub-menu ${mobileDinasOpen ? 'open' : ''}`} id="mobile-dinas-submenu">
              <a
                href="#/dinas"
                style={{ padding: '0.4rem 0', fontSize: '0.9rem', color: '#60a5fa', fontWeight: 600, display: 'block' }}
                onClick={handleNavClick('dinas')}
              >
                Lihat Semua Dinas & Biro
              </a>
              {departmentsData.map(d => (
                <a
                  key={d.id}
                  href={`#/dinas?slug=${d.slug}`}
                  style={{ padding: '0.35rem 0', fontSize: '0.85rem', color: '#afcbee', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                  onClick={handleNavClick('dinas', d.slug)}
                >
                  <img src={resolveAsset(d.logo)} alt={d.shortName} style={{ width: '18px', height: '18px', objectFit: 'contain' }} />
                  <span>{d.shortName}</span>
                </a>
              ))}
            </div>
          </div>

          <a
            href="#/program-kerja"
            className={`mobile-nav-link ${activeTab === 'program-kerja' ? 'active' : ''}`}
            onClick={handleNavClick('program-kerja')}
          >
            Program Kerja
          </a>
          <a
            href="#/galeri"
            className={`mobile-nav-link ${activeTab === 'galeri' ? 'active' : ''}`}
            onClick={handleNavClick('galeri')}
          >
            Galeri
          </a>
        </div>

        <div style={{ marginTop: 'auto', paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
          <button
            className="btn btn-primary"
            id="mobile-aspirasi-btn"
            style={{ width: '100%' }}
            type="button"
            onClick={() => {
              setDrawerOpen(false);
              if (onOpenAspirationModal) onOpenAspirationModal();
            }}
          >
            Sampaikan Aspirasi
          </button>
        </div>
      </div>
    </>
  );
}
