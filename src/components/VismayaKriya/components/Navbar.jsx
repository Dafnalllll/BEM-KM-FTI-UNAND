import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cabinetInfo } from '../../../data/VismayaKriya/organization.js';
import { departmentsData } from '../../../data/VismayaKriya/departments.js';
import { partnersData } from '../../../data/VismayaKriya/partners.js';

export function Navbar({ onOpenAspiration }) {
  const location = useLocation();
  const currentPath = location.pathname;
  const currentSearch = location.search;

  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDinasOpen, setMobileDinasOpen] = useState(false);
  const [mobileOrmawaOpen, setMobileOrmawaOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const himpunanList = partnersData.filter(p => p.category.includes('Himpunan'));
  const ukmList = partnersData.filter(p => p.category.includes('UKM') || p.category.includes('Unit Kegiatan'));

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : 'transparent'}`} id="main-navbar">
        <div className="container navbar-container">
          {/* Brand */}
          <Link to="/" className="navbar-brand">
            <div className="navbar-logo-wrap">
              <img src={cabinetInfo.logo} alt="Logo Nexus Inspirasi" className="navbar-logo" />
            </div>
            <div className="navbar-brand-text">
              <span className="brand-title">BEM KM FTI</span>
              <span className="brand-subtitle">Nexus Inspirasi</span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="navbar-nav">
            <Link to="/" className={`nav-link ${currentPath === '/' ? 'active' : ''}`}>
              Beranda
            </Link>
            
            {/* Dropdown Tentang & Lembaga (Himpunan & UKM) */}
            <div className="nav-dropdown">
              <Link to="/tentang" className={`nav-link dropdown-toggle ${currentPath === '/tentang' || currentPath.startsWith('/lembaga') ? 'active' : ''}`}>
                <span>Tentang</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </Link>
              <div className="dropdown-menu" style={{ minWidth: '280px' }}>
                <Link to="/tentang" className="dropdown-item" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '0.65rem', marginBottom: '0.35rem' }}>
                  <div className="dropdown-item-meta">
                    <span className="dropdown-item-name" style={{ color: '#60a5fa', fontWeight: 700 }}>Profil Kabinet Nexus &rarr;</span>
                    <span className="dropdown-item-desc">Visi, Misi & Struktur BEM KM FTI</span>
                  </div>
                </Link>

                <div style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', color: '#60a5fa', letterSpacing: '0.08em', padding: '0.4rem 0.75rem 0.2rem' }}>
                  Himpunan Mahasiswa
                </div>
                {himpunanList.map(h => (
                  <Link key={h.slug} to={`/lembaga?slug=${h.slug}`} className="dropdown-item">
                    <img src={h.logo} alt={h.shortName} loading="lazy" style={{ objectFit: 'contain' }} />
                    <div className="dropdown-item-meta">
                      <span className="dropdown-item-name">{h.shortName}</span>
                      <span className="dropdown-item-desc">{h.name}</span>
                    </div>
                  </Link>
                ))}

                <div style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', color: '#60a5fa', letterSpacing: '0.08em', padding: '0.6rem 0.75rem 0.2rem', borderTop: '1px solid rgba(255,255,255,0.06)', marginTop: '0.3rem' }}>
                  Unit Kegiatan Mahasiswa (UKM)
                </div>
                {ukmList.map(u => (
                  <Link key={u.slug} to={`/lembaga?slug=${u.slug}`} className="dropdown-item">
                    <img src={u.logo} alt={u.shortName} loading="lazy" style={{ objectFit: 'contain' }} />
                    <div className="dropdown-item-meta">
                      <span className="dropdown-item-name">{u.shortName}</span>
                      <span className="dropdown-item-desc">{u.name}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            
            {/* Dropdown Dinas & Biro */}
            <div className="nav-dropdown">
              <Link to="/dinas" className={`nav-link dropdown-toggle ${currentPath.startsWith('/dinas') ? 'active' : ''}`}>
                <span>Dinas & Biro</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </Link>
              <div className="dropdown-menu">
                {departmentsData.map(d => (
                  <Link key={d.slug} to={`/dinas?slug=${d.slug}`} className="dropdown-item">
                    <img src={d.logo} alt={d.name} loading="lazy" />
                    <div className="dropdown-item-meta">
                      <span className="dropdown-item-name">{d.shortName}</span>
                      <span className="dropdown-item-desc">{d.type} {d.shortName}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <Link to="/program-kerja" className={`nav-link ${currentPath.startsWith('/program-kerja') || currentPath.startsWith('/proker') ? 'active' : ''}`}>
              Program Kerja
            </Link>
            <Link to="/galeri" className={`nav-link ${currentPath === '/galeri' ? 'active' : ''}`}>
              Galeri
            </Link>
          </div>

          {/* Action / CTA Button */}
          <div className="navbar-actions">
            <button className="btn btn-primary btn-sm btn-glow" onClick={onOpenAspiration} type="button">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              </svg>
              <span>Sampaikan Aspirasi</span>
            </button>

            {/* Mobile Toggle Button */}
            <button
              className={`mobile-toggle ${mobileOpen ? 'active' : ''}`}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Buka Menu Navigasi"
              type="button"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Drawer */}
      <div className={`mobile-drawer-backdrop ${mobileOpen ? 'open' : ''}`} onClick={() => setMobileOpen(false)}></div>
      <div className={`mobile-drawer ${mobileOpen ? 'open' : ''}`}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <img src={cabinetInfo.logo} alt="Nexus" style={{ width: '36px', height: '36px', objectFit: 'contain' }} />
            <div>
              <div style={{ fontWeight: 800, color: '#fff', fontSize: '0.95rem' }}>BEM KM FTI</div>
              <div style={{ fontSize: '0.7rem', color: '#60a5fa', letterSpacing: '0.1em' }}>NEXUS INSPIRASI</div>
            </div>
          </div>
          <button onClick={() => setMobileOpen(false)} style={{ color: '#94a3b8', padding: '0.25rem' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '1rem' }}>
          <Link to="/" className={`mobile-nav-link ${currentPath === '/' ? 'active' : ''}`}>Beranda</Link>
          <Link to="/tentang" className={`mobile-nav-link ${currentPath === '/tentang' ? 'active' : ''}`}>Tentang Kabinet</Link>
          
          {/* Mobile Sub-Menu Ormawa */}
          <div>
            <div className="mobile-nav-link" onClick={() => setMobileOrmawaOpen(!mobileOrmawaOpen)} style={{ cursor: 'pointer' }}>
              <span>Himpunan & UKM</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </div>
            <div className={`mobile-sub-menu ${mobileOrmawaOpen ? 'open' : ''}`}>
              <div style={{ fontSize: '0.75rem', color: '#60a5fa', fontWeight: 700, padding: '0.3rem 0' }}>HIMPUNAN MAHASISWA</div>
              {himpunanList.map(h => (
                <Link key={h.slug} to={`/lembaga?slug=${h.slug}`} style={{ padding: '0.35rem 0', fontSize: '0.85rem', color: '#afcbee', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <img src={h.logo} style={{ width: '18px', height: '18px', objectFit: 'contain' }} alt={h.shortName} />
                  <span>{h.shortName}</span>
                </Link>
              ))}
              <div style={{ fontSize: '0.75rem', color: '#60a5fa', fontWeight: 700, padding: '0.6rem 0 0.3rem' }}>UNIT KEGIATAN MAHASISWA</div>
              {ukmList.map(u => (
                <Link key={u.slug} to={`/lembaga?slug=${u.slug}`} style={{ padding: '0.35rem 0', fontSize: '0.85rem', color: '#afcbee', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <img src={u.logo} style={{ width: '18px', height: '18px', objectFit: 'contain' }} alt={u.shortName} />
                  <span>{u.shortName}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Sub-Menu Dinas & Biro */}
          <div>
            <div className="mobile-nav-link" onClick={() => setMobileDinasOpen(!mobileDinasOpen)} style={{ cursor: 'pointer' }}>
              <span>Dinas & Biro</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </div>
            <div className={`mobile-sub-menu ${mobileDinasOpen ? 'open' : ''}`}>
              <Link to="/dinas" style={{ padding: '0.4rem 0', fontSize: '0.9rem', color: '#60a5fa', fontWeight: 600 }}>Lihat Semua Dinas & Biro &rarr;</Link>
              {departmentsData.map(d => (
                <Link key={d.slug} to={`/dinas?slug=${d.slug}`} style={{ padding: '0.4rem 0.5rem', fontSize: '0.88rem', color: '#f1f5f9', display: 'flex', alignItems: 'center', gap: '0.65rem', borderRadius: '8px' }}>
                  <div style={{ width: '26px', height: '26px', borderRadius: '7px', background: '#ffffff', border: '1px solid rgba(56, 189, 248, 0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '3px', flexShrink: 0, boxShadow: '0 2px 6px rgba(0,0,0,0.15)' }}>
                    <img src={d.logo} style={{ width: '100%', height: '100%', objectFit: 'contain' }} alt={d.shortName} />
                  </div>
                  <span style={{ fontWeight: 600 }}>{d.shortName}</span>
                </Link>
              ))}
            </div>
          </div>

          <Link to="/program-kerja" className={`mobile-nav-link ${currentPath.startsWith('/program-kerja') || currentPath.startsWith('/proker') ? 'active' : ''}`}>Program Kerja</Link>
          <Link to="/galeri" className={`mobile-nav-link ${currentPath === '/galeri' ? 'active' : ''}`}>Galeri</Link>
        </div>

        <div style={{ marginTop: 'auto', paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
          <button className="btn btn-primary" style={{ width: '100%' }} onClick={onOpenAspiration} type="button">
            Sampaikan Aspirasi
          </button>
        </div>
      </div>
    </>
  );
}

