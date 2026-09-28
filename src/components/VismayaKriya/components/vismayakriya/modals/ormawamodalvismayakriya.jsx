import React, { useEffect } from 'react';
import { resolveAsset, scrollToTop } from '../utils/helpers.js';

export function OrmawaModalVismayakriya({ ormawa, isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) {
      scrollToTop();
    }
  }, [isOpen]);

  if (!isOpen || !ormawa) return null;

  const instagramUrl = ormawa.socials?.instagram || '#';
  const linkedinUrl = ormawa.socials?.linkedin || '#';
  const defaultSummary = ormawa.summary || ormawa.tagline || `Wadah pemersatu dan artikulasi karya mahasiswa ${ormawa.shortName} FTI UNAND dalam bidang bisnis digital dan teknologi.`;

  return (
    <div
      className="vismayakriya-page ormawa-full-view"
      style={{
        width: '100%',
        minHeight: '100vh',
        background: '#ffffff',
        color: '#0f172a',
        paddingTop: '6.5rem',
        paddingBottom: '4rem'
      }}
    >
      <div className="container" style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem' }}>
        {/* Top Back Navigation Link */}
        <div style={{ marginBottom: '1.5rem' }}>
          <button
            onClick={onClose}
            type="button"
            style={{
              background: 'none',
              border: 'none',
              color: '#2563eb',
              fontWeight: 700,
              fontSize: '0.95rem',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: 0
            }}
          >
            <span>&larr;</span> Kembali ke Daftar Himpunan & UKM
          </button>
        </div>

        {/* Ormawa Header Identity */}
        <div
          style={{
            background: 'rgba(240, 246, 255, 0.85)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(59, 130, 246, 0.25)',
            borderRadius: '20px',
            padding: '2rem 2.25rem',
            marginBottom: '2rem',
            boxShadow: '0 4px 20px rgba(37, 99, 235, 0.08)',
            display: 'flex',
            alignItems: 'center',
            gap: '1.5rem',
            flexWrap: 'wrap'
          }}
        >
          <div
            style={{
              width: '84px',
              height: '84px',
              borderRadius: '18px',
              background: '#ffffff',
              border: '2px solid #2563eb',
              padding: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 16px rgba(37, 99, 235, 0.2)',
              flexShrink: 0
            }}
          >
            <img src={resolveAsset(ormawa.logo)} alt={ormawa.name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
          </div>

          <div style={{ flexGrow: 1 }}>
            <span
              style={{
                display: 'inline-block',
                background: 'rgba(37, 99, 235, 0.12)',
                color: '#2563eb',
                border: '1px solid rgba(37, 99, 235, 0.3)',
                borderRadius: '50px',
                padding: '0.3rem 0.95rem',
                fontSize: '0.82rem',
                fontWeight: 700,
                marginBottom: '0.5rem'
              }}
            >
              {ormawa.type} &bull; {ormawa.scope}
            </span>
            <h1 style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', fontWeight: 800, color: '#0f172a', lineHeight: 1.2, margin: '0 0 0.35rem 0' }}>
              {ormawa.name} ({ormawa.shortName})
            </h1>
            <p style={{ color: '#334155', fontSize: '1rem', margin: 0, lineHeight: 1.6, fontWeight: 500 }}>
              {defaultSummary}
            </p>
          </div>
        </div>

        {/* 2-Column Body Content */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
          {/* Left Column: Profil Singkat & Kanal Resmi */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {/* Profil Singkat Card */}
            <div
              style={{
                background: 'rgba(240, 246, 255, 0.75)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(59, 130, 246, 0.2)',
                borderRadius: '18px',
                padding: '1.75rem',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.03)'
              }}
            >
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0f172a', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="16" x2="12" y2="12"></line>
                  <line x1="12" y1="8" x2="12.01" y2="8"></line>
                </svg>
                Profil Singkat
              </h3>

              <p style={{ color: '#334155', fontSize: '1rem', lineHeight: 1.8, margin: 0, fontWeight: 500 }}>
                {ormawa.description}
              </p>
            </div>

            {/* Kanal Resmi & Media Sosial Card */}
            <div
              style={{
                background: 'rgba(240, 246, 255, 0.75)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(59, 130, 246, 0.2)',
                borderRadius: '18px',
                padding: '1.75rem',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.03)'
              }}
            >
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0f172a', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                </svg>
                Kanal Resmi & Media Sosial
              </h3>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    flex: 1,
                    minWidth: '160px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.6rem',
                    padding: '0.85rem 1.25rem',
                    background: 'linear-gradient(90deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
                    color: '#ffffff',
                    borderRadius: '12px',
                    fontWeight: 600,
                    fontSize: '0.92rem',
                    textDecoration: 'none',
                    boxShadow: '0 4px 14px rgba(220, 39, 67, 0.35)',
                    transition: 'transform 0.2s'
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.transform = 'translateY(-2px)')}
                  onMouseOut={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                  <span>Instagram Resmi</span>
                </a>

                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    flex: 1,
                    minWidth: '160px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.6rem',
                    padding: '0.85rem 1.25rem',
                    background: '#0a66c2',
                    color: '#ffffff',
                    borderRadius: '12px',
                    fontWeight: 600,
                    fontSize: '0.92rem',
                    textDecoration: 'none',
                    boxShadow: '0 4px 14px rgba(10, 102, 194, 0.35)',
                    transition: 'transform 0.2s'
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.transform = 'translateY(-2px)')}
                  onMouseOut={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                  <span>LinkedIn Page</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Visi & Misi */}
          <div
            style={{
              background: 'rgba(240, 246, 255, 0.75)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(59, 130, 246, 0.2)',
              borderRadius: '18px',
              padding: '1.75rem',
              height: 'fit-content',
              boxShadow: '0 4px 16px rgba(0, 0, 0, 0.03)'
            }}
          >
            <div style={{ marginBottom: '1.75rem' }}>
              <div style={{ fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#2563eb', marginBottom: '0.5rem' }}>
                VISI LEMBAGA
              </div>
              <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a', fontStyle: 'italic', lineHeight: 1.6 }}>
                "{ormawa.vision}"
              </div>
            </div>

            <div>
              <div style={{ fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#2563eb', marginBottom: '0.85rem' }}>
                MISI UTAMA
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {(ormawa.missions || []).map((m, idx) => (
                  <div key={idx} style={{ display: 'flex', gap: '0.85rem', alignItems: 'flex-start' }}>
                    <div
                      style={{
                        width: '26px',
                        height: '26px',
                        borderRadius: '50%',
                        background: '#2563eb',
                        color: '#fff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '0.8rem',
                        fontWeight: 700,
                        flexShrink: 0,
                        marginTop: '2px'
                      }}
                    >
                      {idx + 1}
                    </div>
                    <div style={{ fontSize: '0.98rem', color: '#1e293b', lineHeight: 1.65, fontWeight: 500 }}>{m}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

