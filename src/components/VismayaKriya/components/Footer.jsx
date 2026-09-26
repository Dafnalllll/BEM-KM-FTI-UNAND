import React from 'react';
import { Link } from 'react-router-dom';
import { cabinetInfo } from '../../../data/VismayaKriya/organization.js';

export function Footer() {
  return (
    <footer className="footer-dark" style={{ background: '#050811', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '4rem', paddingBottom: '2.5rem' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '3rem', marginBottom: '3.5rem' }}>
          
          {/* Column 1: Identity & Description */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '1.25rem' }}>
              <img src={cabinetInfo.logo} alt="Logo Nexus" style={{ width: '48px', height: '48px', objectFit: 'contain' }} />
              <div>
                <div style={{ fontWeight: 800, color: '#ffffff', fontSize: '1.1rem', lineHeight: 1.2 }}>BEM KM FTI</div>
                <div style={{ fontSize: '0.78rem', color: '#60a5fa', letterSpacing: '0.12em', fontWeight: 700 }}>NEXUS INSPIRASI</div>
              </div>
            </div>
            <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              Badan Eksekutif Mahasiswa Keluarga Mahasiswa Fakultas Teknologi Informasi Universitas Andalas. Episenter kolaborasi, pelayanan, dan pergerakan progresif.
            </p>
            <div style={{ fontSize: '0.82rem', color: '#cbd5e1', fontWeight: 600 }}>
              &copy; {new Date().getFullYear()} BEM KM FTI UNAND. All Rights Reserved.
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <div style={{ fontSize: '0.9rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#60a5fa', marginBottom: '1.25rem' }}>
              Navigasi Cepat
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li><Link to="/" style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '0.9rem' }}>Beranda</Link></li>
              <li><Link to="/tentang" style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '0.9rem' }}>Tentang Kabinet</Link></li>
              <li><Link to="/dinas" style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '0.9rem' }}>Dinas & Biro</Link></li>
              <li><Link to="/program-kerja" style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '0.9rem' }}>Program Kerja</Link></li>
              <li><Link to="/galeri" style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '0.9rem' }}>Galeri Dokumentasi</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <div style={{ fontSize: '0.9rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#60a5fa', marginBottom: '1.25rem' }}>
              Sekretariat & Kontak
            </div>
            <p style={{ color: '#cbd5e1', fontSize: '0.88rem', lineHeight: 1.6, marginBottom: '1rem' }}>
              {cabinetInfo.contact.address}
            </p>
            <div style={{ fontSize: '0.88rem', color: '#60a5fa', fontWeight: 600 }}>
              Email: <a href={`mailto:${cabinetInfo.contact.email}`} style={{ color: '#93c5fd' }}>{cabinetInfo.contact.email}</a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}

