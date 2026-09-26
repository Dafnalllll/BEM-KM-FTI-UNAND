import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

export function PersonBiodataModal({ person, title, onClose }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  if (!person) return null;

  const instagramUrl = person.socials?.instagram || person.sosmed?.instagram || person.instagram || '#';
  const linkedinUrl = person.socials?.linkedin || person.sosmed?.linkedin || person.linkedin || '#';

  const formatAngkatan = (val) => {
    if (!val) return 'Angkatan 2022';
    if (String(val).toLowerCase().includes('angkatan')) return val;
    return `Angkatan ${val}`;
  };

  const modalContent = (
    <div
      className="vismayakriya-page modal-overlay open"
      id="person-biodata-modal-overlay"
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(5, 8, 17, 0.85)',
        backdropFilter: 'blur(8px)',
        zIndex: 1100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem'
      }}
      onClick={(e) => {
        if (e.target.id === 'person-biodata-modal-overlay') onClose();
      }}
    >
      <div
        className="modal-dialog"
        style={{
          width: '100%',
          maxWidth: '440px',
          background: 'linear-gradient(180deg, #10192e 0%, #0b1224 100%)',
          border: '1px solid rgba(96, 165, 250, 0.25)',
          borderRadius: '24px',
          boxShadow: '0 25px 50px rgba(0, 0, 0, 0.8), 0 0 30px rgba(56, 189, 248, 0.15)',
          position: 'relative',
          padding: '2.5rem 2rem 2rem',
          textAlign: 'center',
          color: '#ffffff',
          overflow: 'hidden'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          className="modal-close-btn"
          aria-label="Tutup Biodata"
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.25rem',
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.06)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all 0.2s ease'
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        {/* Circular Avatar with Glowing Cyan Ring */}
        <div
          style={{
            width: '110px',
            height: '110px',
            borderRadius: '50%',
            overflow: 'hidden',
            border: '2px solid #38bdf8',
            boxShadow: '0 0 20px rgba(56, 189, 248, 0.5), 0 0 40px rgba(56, 189, 248, 0.2)',
            margin: '0 auto 1.25rem',
            background: '#050811',
            flexShrink: 0
          }}
        >
          <img
            src={person.image || person.foto_fullbody || '/vismayakriya/dinasnexus/kegiatan/studio.webp'}
            alt={person.name}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>

        {/* Member Name */}
        <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.25rem', letterSpacing: '-0.01em' }}>
          {person.name}
        </h3>

        {/* Role / Title */}
        <div style={{ color: '#38bdf8', fontWeight: 600, fontSize: '0.9rem', marginBottom: '1.5rem' }}>
          {person.role || title || 'Fungsionaris BEM KM FTI'}
        </div>

        {/* Info Box Container (Jurusan & Angkatan) */}
        <div
          style={{
            background: 'rgba(16, 26, 51, 0.6)',
            border: '1px solid rgba(175, 203, 238, 0.12)',
            borderRadius: '14px',
            padding: '1.15rem 1.35rem',
            marginBottom: '1.5rem',
            textAlign: 'left'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.9rem' }}>
            <span style={{ color: '#94a3b8' }}>Jurusan</span>
            <span style={{ color: '#ffffff', fontWeight: 700 }}>{person.jurusan || 'Teknik Komputer'}</span>
          </div>

          <div style={{ height: '1px', background: 'rgba(255, 255, 255, 0.08)', margin: '0.85rem 0' }}></div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.9rem' }}>
            <span style={{ color: '#94a3b8' }}>Angkatan</span>
            <span style={{ color: '#ffffff', fontWeight: 700 }}>{formatAngkatan(person.angkatan)}</span>
          </div>
        </div>

        {/* Section Heading: TAUTAN MEDIA SOSIAL */}
        <div
          style={{
            fontSize: '0.78rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.12em',
            color: '#94a3b8',
            marginBottom: '0.85rem',
            textAlign: 'center'
          }}
        >
          TAUTAN MEDIA SOSIAL
        </div>

        {/* Social Action Buttons */}
        <div style={{ display: 'flex', gap: '0.85rem', justifyContent: 'center' }}>
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              padding: '0.65rem 1rem',
              background: 'linear-gradient(90deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
              color: '#ffffff',
              borderRadius: '10px',
              fontWeight: 600,
              fontSize: '0.88rem',
              textDecoration: 'none',
              boxShadow: '0 4px 12px rgba(220, 39, 67, 0.3)',
              transition: 'transform 0.2s, box-shadow 0.2s'
            }}
            onMouseOver={(e) => (e.currentTarget.style.transform = 'translateY(-2px)')}
            onMouseOut={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
            <span>Instagram</span>
          </a>

          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              padding: '0.65rem 1rem',
              background: '#0a66c2',
              color: '#ffffff',
              borderRadius: '10px',
              fontWeight: 600,
              fontSize: '0.88rem',
              textDecoration: 'none',
              boxShadow: '0 4px 12px rgba(10, 102, 194, 0.3)',
              transition: 'transform 0.2s, box-shadow 0.2s'
            }}
            onMouseOver={(e) => (e.currentTarget.style.transform = 'translateY(-2px)')}
            onMouseOut={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </div>
  );

  return ReactDOM.createPortal(modalContent, document.body);
}
