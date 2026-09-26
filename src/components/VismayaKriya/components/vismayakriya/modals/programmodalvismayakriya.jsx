import React, { useEffect } from 'react';
import { getStatusBadgeClass } from '../utils/helpers.js';

export function ProgramModalVismayakriya({ proker, isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen || !proker) return null;

  const objectives = proker.objectives && proker.objectives.length > 0
    ? proker.objectives
    : [
        "Meningkatkan efisiensi dan transparansi alur kerja keorganisasian.",
        "Memberikan dampak nyata dan terukur bagi seluruh civitas akademika FTI.",
        "Mewujudkan tata kelola berstandar yang ramah pengguna dan berkelanjutan."
      ];

  const tags = proker.tags && proker.tags.length > 0
    ? proker.tags
    : ["Vismayakriya", "Inovasi", "FTI", "Sinergi"];

  return (
    <div
      className="vismayakriya-page modal-overlay open"
      id="program-modal-overlay"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(5, 8, 17, 0.9)',
        backdropFilter: 'blur(10px)',
        zIndex: 1100,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '1.5rem 1rem',
        boxSizing: 'border-box',
        overflowY: 'auto'
      }}
      onClick={(e) => {
        if (e.target.id === 'program-modal-overlay') onClose();
      }}
    >
      <div
        className="modal-dialog"
        style={{
          width: '100%',
          maxWidth: '1020px',
          maxHeight: '90vh',
          background: '#0b1224',
          border: '1px solid rgba(96, 165, 250, 0.25)',
          borderRadius: '20px',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.85)',
          overflowY: 'auto',
          color: '#ffffff',
          position: 'relative',
          margin: 'auto',
          boxSizing: 'border-box'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Banner Area */}
        <div style={{ padding: '2rem 2.5rem 1.5rem', borderBottom: '1px solid rgba(255, 255, 255, 0.08)', background: 'linear-gradient(180deg, #10192e 0%, #0b1224 100%)' }}>
          {/* Back Link */}
          <div style={{ marginBottom: '1.5rem' }}>
            <button
              onClick={onClose}
              style={{
                background: 'none',
                border: 'none',
                color: '#60a5fa',
                fontWeight: 600,
                fontSize: '0.9rem',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: 0
              }}
            >
              <span>&larr;</span> Kembali ke Katalog Program Kerja
            </button>
          </div>

          {/* Hero Banner Grid (Text Left, Image Right) */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', alignItems: 'center' }}>
            {/* Left Info Column */}
            <div>
              <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'center', flexWrap: 'wrap', marginBottom: '1rem' }}>
                <span className={`badge ${getStatusBadgeClass(proker.status)}`} style={{ padding: '0.35rem 0.85rem', fontSize: '0.8rem', borderRadius: '50px' }}>
                  {proker.status || 'Sedang Berjalan'}
                </span>
                <span style={{ background: '#1d4ed8', color: '#ffffff', padding: '0.35rem 0.85rem', borderRadius: '50px', fontSize: '0.8rem', fontWeight: 600 }}>
                  {proker.category || 'Administrasi'}
                </span>
                <span style={{ fontSize: '0.88rem', color: '#cbd5e1', fontWeight: 500 }}>
                  &bull; {proker.department || 'Biro Audkes'}
                </span>
              </div>

              <h1 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.3rem)', fontWeight: 800, color: '#ffffff', lineHeight: 1.25, marginBottom: '1rem', letterSpacing: '-0.02em' }}>
                {proker.title}
              </h1>

              <p style={{ color: '#94a3b8', fontSize: '1rem', lineHeight: 1.6, margin: 0 }}>
                {proker.summary || proker.description}
              </p>
            </div>

            {/* Right Image Column */}
            {proker.image && (
              <div style={{ borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(255, 255, 255, 0.1)', height: '220px', boxShadow: '0 12px 30px rgba(0,0,0,0.5)' }}>
                <img
                  src={proker.image}
                  alt={proker.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            )}
          </div>
        </div>

        {/* Main Details Body (Left Grid + Right Sidebar) */}
        <div style={{ padding: '2rem 2.5rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {/* Main Left Content */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
            {/* Metadata 3-Column Bar */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                gap: '1.25rem',
                background: 'rgba(16, 26, 51, 0.4)',
                border: '1px solid rgba(175, 203, 238, 0.1)',
                borderRadius: '14px',
                padding: '1.25rem 1.5rem'
              }}
            >
              <div>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.35rem' }}>
                  Waktu / Periode
                </div>
                <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#ffffff' }}>
                  {proker.date || proker.period || 'Sepanjang Periode'}
                </div>
              </div>

              <div>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.35rem' }}>
                  Lokasi Kegiatan
                </div>
                <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#ffffff' }}>
                  {proker.location || 'Fakultas Teknologi Informasi'}
                </div>
              </div>

              <div>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.35rem' }}>
                  Sasaran Peserta
                </div>
                <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#ffffff' }}>
                  {proker.targetAudience || 'Seluruh Mahasiswa FTI'}
                </div>
              </div>
            </div>

            {/* Latar Belakang & Gambaran Acara Card */}
            <div
              style={{
                background: 'rgba(16, 26, 51, 0.4)',
                border: '1px solid rgba(175, 203, 238, 0.1)',
                borderRadius: '14px',
                padding: '1.5rem'
              }}
            >
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#ffffff', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="16" x2="12" y2="12"></line>
                  <line x1="12" y1="8" x2="12.01" y2="8"></line>
                </svg>
                Latar Belakang & Gambaran Acara
              </h3>
              <p style={{ color: '#cbd5e1', fontSize: '0.95rem', lineHeight: 1.75, margin: 0 }}>
                {proker.description}
              </p>
            </div>

            {/* Tujuan Utama Program Kerja Card */}
            <div
              style={{
                background: 'rgba(16, 26, 51, 0.4)',
                border: '1px solid rgba(175, 203, 238, 0.1)',
                borderRadius: '14px',
                padding: '1.5rem'
              }}
            >
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#ffffff', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
                Tujuan Utama Program Kerja
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {objectives.map((obj, i) => (
                  <div key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '3px' }}>
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span style={{ fontSize: '0.93rem', color: '#dcebff', lineHeight: 1.6 }}>{obj}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div
            style={{
              background: 'rgba(16, 26, 51, 0.4)',
              border: '1px solid rgba(175, 203, 238, 0.1)',
              borderRadius: '16px',
              padding: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
              height: 'fit-content'
            }}
          >
            {/* Penyelenggara Section */}
            <div>
              <div style={{ fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#60a5fa', marginBottom: '0.5rem' }}>
                PENYELENGGARA
              </div>
              <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.4rem' }}>
                {proker.department || 'Biro Audkes'}
              </div>
              <button
                onClick={onClose}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#60a5fa',
                  fontSize: '0.88rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  padding: 0,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.3rem'
                }}
              >
                Lihat Profil Dinas &rarr;
              </button>
            </div>

            <div style={{ height: '1px', background: 'rgba(255, 255, 255, 0.08)' }}></div>

            {/* Tags Section */}
            <div>
              <div style={{ fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#60a5fa', marginBottom: '0.75rem' }}>
                KATA KUNCI / TAGS
              </div>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                {tags.map((tag, idx) => (
                  <span
                    key={idx}
                    style={{
                      background: 'rgba(30, 41, 59, 0.8)',
                      color: '#93c5fd',
                      border: '1px solid rgba(96, 165, 250, 0.25)',
                      padding: '0.4rem 0.85rem',
                      borderRadius: '8px',
                      fontSize: '0.82rem',
                      fontWeight: 600
                    }}
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            <div style={{ height: '1px', background: 'rgba(255, 255, 255, 0.08)' }}></div>

            {/* CTA Button */}
            <button
              onClick={onClose}
              style={{
                width: '100%',
                background: '#2563eb',
                color: '#ffffff',
                border: 'none',
                borderRadius: '50px',
                padding: '0.85rem 1.5rem',
                fontWeight: 700,
                fontSize: '0.9rem',
                cursor: 'pointer',
                boxShadow: '0 4px 16px rgba(37, 99, 235, 0.4)',
                transition: 'all 0.2s ease',
                textAlign: 'center'
              }}
              onMouseOver={(e) => (e.currentTarget.style.transform = 'translateY(-2px)')}
              onMouseOut={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
            >
              Eksplorasi Program Kerja Lainnya
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
