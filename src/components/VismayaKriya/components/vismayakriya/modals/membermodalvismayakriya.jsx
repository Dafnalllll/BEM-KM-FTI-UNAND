import React, { useEffect } from 'react';
import { resolveAsset } from '../utils/helpers.js';

export function MemberModalVismayakriya({ member, isOpen, onClose }) {
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

  if (!isOpen || !member) return null;

  const instagramUrl = member.socials?.instagram || member.sosmed?.instagram || member.instagram || '#';
  const linkedinUrl = member.socials?.linkedin || member.sosmed?.linkedin || member.linkedin || '#';

  const formatAngkatan = (val) => {
    if (!val) return 'Angkatan 2022';
    if (String(val).toLowerCase().includes('angkatan')) return val;
    return `Angkatan ${val}`;
  };

  return (
    <div
      className="vismayakriya-page modal-overlay open"
      id="member-modal-overlay"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(255, 255, 255, 0.85)',
        backdropFilter: 'blur(10px)',
        zIndex: 1200,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem 1rem',
        boxSizing: 'border-box',
        overflowY: 'auto'
      }}
      onClick={(e) => {
        if (e.target.id === 'member-modal-overlay') onClose();
      }}
    >
      <div
        className="modal-dialog"
        style={{
          width: '100%',
          maxWidth: '440px',
          background: 'rgba(240, 246, 255, 0.95)',
          backdropFilter: 'blur(16px)',
          border: '1px solid rgba(59, 130, 246, 0.3)',
          borderRadius: '24px',
          boxShadow: '0 20px 50px rgba(37, 99, 235, 0.15)',
          position: 'relative',
          padding: '2.5rem 2rem 2rem',
          textAlign: 'center',
          color: '#0f172a',
          overflow: 'hidden',
          margin: 'auto',
          boxSizing: 'border-box'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          className="modal-close-btn"
          id="member-modal-close"
          aria-label="Tutup Biodata"
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.25rem',
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            background: 'rgba(37, 99, 235, 0.1)',
            border: '1px solid rgba(37, 99, 235, 0.2)',
            color: '#0f172a',
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

        {/* Circular Avatar with Glowing Blue Ring */}
        <div
          style={{
            width: '110px',
            height: '110px',
            borderRadius: '50%',
            overflow: 'hidden',
            border: '2px solid #2563eb',
            boxShadow: '0 4px 20px rgba(37, 99, 235, 0.25)',
            margin: '0 auto 1.25rem',
            background: '#ffffff',
            flexShrink: 0
          }}
        >
          <img
            src={resolveAsset(member.image || member.foto_fullbody || '/vismayakriya/dinasnexus/kegiatan/studio.webp')}
            alt={member.name}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>

        {/* Member Name */}
        <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.25rem', letterSpacing: '-0.01em' }}>
          {member.name}
        </h3>

        {/* Role / Title */}
        <div style={{ color: '#2563eb', fontWeight: 700, fontSize: '0.9rem', marginBottom: '1.5rem' }}>
          {member.role || member.title || 'Fungsionaris BEM KM FTI'}
        </div>

        {/* Info Box Container (Jurusan & Angkatan) */}
        <div
          style={{
            background: 'rgba(224, 242, 254, 0.7)',
            border: '1px solid rgba(59, 130, 246, 0.25)',
            borderRadius: '14px',
            padding: '1.15rem 1.35rem',
            marginBottom: '1.5rem',
            textAlign: 'left'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.9rem' }}>
            <span style={{ color: '#2563eb', fontWeight: 800 }}>Jurusan</span>
            <span style={{ color: '#0f172a', fontWeight: 700 }}>{member.jurusan || 'Teknik Komputer'}</span>
          </div>

          <div style={{ height: '1px', background: 'rgba(59, 130, 246, 0.2)', margin: '0.85rem 0' }}></div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.9rem' }}>
            <span style={{ color: '#2563eb', fontWeight: 800 }}>Angkatan</span>
            <span style={{ color: '#0f172a', fontWeight: 700 }}>{formatAngkatan(member.angkatan)}</span>
          </div>
        </div>

        {/* Section Heading: TAUTAN MEDIA SOSIAL */}
        <div
          style={{
            fontSize: '0.78rem',
            fontWeight: 800,
            textTransform: 'uppercase',
            letterSpacing: '0.12em',
            color: '#2563eb',
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
}
