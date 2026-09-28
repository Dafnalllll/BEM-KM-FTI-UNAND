import React, { useState, useEffect } from 'react';
import { cabinetInfo } from '../../../../../data/VismayaKriya/organization.js';
import { MemberModalVismayakriya } from './membermodalvismayakriya.jsx';
import { ProgramModalVismayakriya } from './programmodalvismayakriya.jsx';
import { api } from '../utils/api.js';
import { resolveAsset } from '../utils/helpers.js';

export function DepartmentModalVismayakriya({ dept, isOpen, onClose }) {
  const [selectedMember, setSelectedMember] = useState(null);
  const [memberModalOpen, setMemberModalOpen] = useState(false);

  const [selectedProker, setSelectedProker] = useState(null);
  const [prokerModalOpen, setProkerModalOpen] = useState(false);

  // Gallery Carousel State
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);

  useEffect(() => {
    setCurrentSlide(0);
  }, [dept?.id]);

  if (!isOpen || !dept) return null;

  const handleMemberClick = (member) => {
    setSelectedMember(member);
    setMemberModalOpen(true);
  };

  const handleProkerClick = async (progItem) => {
    try {
      const progObj = await api.getProgramById(progItem);
      if (progObj) {
        setSelectedProker(progObj);
        setProkerModalOpen(true);
      }
    } catch (e) {
      console.error('Failed to open proker detail:', e);
    }
  };

  const rawGallery = dept.galleryImages && dept.galleryImages.length > 0
    ? dept.galleryImages
    : [{ title: `Foto Pengurus ${dept.name}`, image: dept.banner || dept.coverPhoto, date: 'Periode 2025/2026' }];

  const slides = rawGallery.map(g => ({
    title: g.title || `Kegiatan ${dept.name}`,
    image: resolveAsset(g.image || dept.banner),
    date: g.date || 'Kegiatan Kabinet'
  }));

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleTouchStart = (e) => {
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStartX || !touchEndX) return;
    const distance = touchStartX - touchEndX;
    if (distance > 40) {
      handleNextSlide();
    } else if (distance < -40) {
      handlePrevSlide();
    }
    setTouchStartX(0);
    setTouchEndX(0);
  };

  return (
    <>
      <div
        className="vismayakriya-page department-full-view"
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
              <span>&larr;</span> Kembali ke Katalog Dinas & Biro
            </button>
          </div>

          {/* Department Header Identity */}
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
              <img src={resolveAsset(dept.logo)} alt={dept.name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
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
                {dept.type} &bull; {cabinetInfo.cabinet}
              </span>
              <h1 style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', fontWeight: 800, color: '#0f172a', lineHeight: 1.2, margin: 0 }}>
                {dept.type} {dept.name}
              </h1>
            </div>
          </div>

          {/* 1. GALERI FOTO PENGURUS & KEGIATAN (SWIPEABLE INTERACTIVE CAROUSEL SLIDER) */}
          <div style={{ marginBottom: '2.5rem', position: 'relative' }}>
            <div
              style={{
                width: '100%',
                height: '460px',
                borderRadius: '20px',
                overflow: 'hidden',
                border: '1px solid rgba(96, 165, 250, 0.25)',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.6)',
                background: '#070c18',
                position: 'relative',
                userSelect: 'none',
                touchAction: 'pan-y'
              }}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {/* Slide Image */}
              <img
                src={resolveAsset(slides[currentSlide]?.image)}
                alt={slides[currentSlide]?.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                  transition: 'opacity 0.3s ease-in-out'
                }}
              />

              {/* Gradient Overlay for Text Readability */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(180deg, rgba(7,12,24,0.1) 0%, rgba(7,12,24,0.35) 50%, rgba(5,8,17,0.92) 100%)',
                  pointerEvents: 'none'
                }}
              ></div>

              {/* Prev Button Arrow */}
              {slides.length > 1 && (
                <button
                  type="button"
                  onClick={handlePrevSlide}
                  aria-label="Foto Sebelumnya"
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '1.25rem',
                    transform: 'translateY(-50%)',
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    background: 'rgba(7, 12, 24, 0.75)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(96, 165, 250, 0.35)',
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    zIndex: 10,
                    boxShadow: '0 4px 15px rgba(0,0,0,0.5)',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.borderColor = '#38bdf8';
                    e.currentTarget.style.background = 'rgba(37, 99, 235, 0.85)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(96, 165, 250, 0.35)';
                    e.currentTarget.style.background = 'rgba(7, 12, 24, 0.75)';
                  }}
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="15 18 9 12 15 6"></polyline>
                  </svg>
                </button>
              )}

              {/* Next Button Arrow */}
              {slides.length > 1 && (
                <button
                  type="button"
                  onClick={handleNextSlide}
                  aria-label="Foto Selanjutnya"
                  style={{
                    position: 'absolute',
                    top: '50%',
                    right: '1.25rem',
                    transform: 'translateY(-50%)',
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    background: 'rgba(7, 12, 24, 0.75)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(96, 165, 250, 0.35)',
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    zIndex: 10,
                    boxShadow: '0 4px 15px rgba(0,0,0,0.5)',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.borderColor = '#38bdf8';
                    e.currentTarget.style.background = 'rgba(37, 99, 235, 0.85)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(96, 165, 250, 0.35)';
                    e.currentTarget.style.background = 'rgba(7, 12, 24, 0.75)';
                  }}
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </button>
              )}

              {/* Slide Caption Info Overlay */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '1.5rem',
                  left: '1.75rem',
                  right: '1.75rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-end',
                  gap: '1rem',
                  zIndex: 5
                }}
              >
                <div>
                  <span
                    style={{
                      display: 'inline-block',
                      background: 'rgba(37, 99, 235, 0.45)',
                      color: '#60a5fa',
                      border: '1px solid rgba(96, 165, 250, 0.35)',
                      borderRadius: '50px',
                      padding: '0.2rem 0.75rem',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      marginBottom: '0.4rem',
                      backdropFilter: 'blur(6px)'
                    }}
                  >
                    {slides[currentSlide]?.date}
                  </span>
                  <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#ffffff', margin: 0, textShadow: '0 2px 8px rgba(0,0,0,0.8)' }}>
                    {slides[currentSlide]?.title}
                  </h4>
                </div>

                {/* Counter Tag (e.g. 1 / 5) */}
                {slides.length > 1 && (
                  <span
                    style={{
                      background: 'rgba(7, 12, 24, 0.75)',
                      border: '1px solid rgba(175, 203, 238, 0.2)',
                      borderRadius: '50px',
                      padding: '0.25rem 0.85rem',
                      fontSize: '0.8rem',
                      fontWeight: 700,
                      color: '#ffffff',
                      backdropFilter: 'blur(8px)',
                      flexShrink: 0
                    }}
                  >
                    {currentSlide + 1} / {slides.length}
                  </span>
                )}
              </div>

              {/* Pagination Dots */}
              {slides.length > 1 && (
                <div
                  style={{
                    position: 'absolute',
                    bottom: '0.6rem',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    display: 'flex',
                    gap: '0.5rem',
                    zIndex: 10
                  }}
                >
                  {slides.map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setCurrentSlide(idx)}
                      aria-label={`Slide ${idx + 1}`}
                      style={{
                        width: idx === currentSlide ? '22px' : '8px',
                        height: '8px',
                        borderRadius: '50px',
                        background: idx === currentSlide ? '#38bdf8' : 'rgba(255,255,255,0.4)',
                        border: 'none',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        boxShadow: idx === currentSlide ? '0 0 8px #38bdf8' : 'none'
                      }}
                    ></button>
                  ))}
                </div>
              )}
            </div>
          </div>


          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.25rem' }}>
            {/* 2. DESKRIPSI & PERAN CARD */}
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
                Deskripsi & Peran
              </h3>

              <p style={{ color: '#334155', fontSize: '1rem', lineHeight: 1.75, marginBottom: '1.5rem', fontWeight: 500 }}>
                {dept.description}
              </p>

              {/* Visi & Misi Box */}
              <div
                style={{
                  background: 'rgba(239, 246, 255, 0.9)',
                  border: '1px solid rgba(59, 130, 246, 0.2)',
                  borderRadius: '14px',
                  padding: '1.5rem'
                }}
              >
                <div style={{ marginBottom: '1.5rem' }}>
                  <div style={{ fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#2563eb', marginBottom: '0.4rem' }}>
                    VISI DEPARTEMEN
                  </div>
                  <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a', fontStyle: 'italic', lineHeight: 1.6 }}>
                    "{dept.vision}"
                  </div>
                </div>

                <div>
                  <div style={{ fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#2563eb', marginBottom: '0.75rem' }}>
                    MISI UTAMA
                  </div>
                  {(dept.missions || []).map((m, idx) => (
                    <div key={idx} style={{ display: 'flex', gap: '0.85rem', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                      <div
                        style={{
                          width: '24px',
                          height: '24px',
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
                      <div style={{ fontSize: '0.95rem', color: '#1e293b', lineHeight: 1.65, fontWeight: 500 }}>{m}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 3. JAJARAN PIMPINAN GRID */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                  Jajaran Pimpinan
                </h3>
                <span style={{ fontSize: '0.85rem', color: '#2563eb', fontWeight: 600 }}>(Klik untuk lihat biodata)</span>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1.25rem' }}>
                {(dept.leaders || []).map((l, i) => (
                  <div
                    key={i}
                    onClick={() => handleMemberClick(l)}
                    style={{
                      background: 'rgba(240, 246, 255, 0.75)',
                      backdropFilter: 'blur(12px)',
                      border: '1px solid rgba(59, 130, 246, 0.2)',
                      borderRadius: '16px',
                      padding: '1.35rem 1rem',
                      textAlign: 'center',
                      cursor: 'pointer',
                      transition: 'transform 0.2s, border-color 0.2s',
                      boxShadow: '0 4px 14px rgba(0, 0, 0, 0.03)'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = 'translateY(-4px)';
                      e.currentTarget.style.borderColor = '#2563eb';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.2)';
                    }}
                  >
                    <div
                      style={{
                        width: '88px',
                        height: '88px',
                        borderRadius: '50%',
                        overflow: 'hidden',
                        border: '2px solid #2563eb',
                        boxShadow: '0 4px 12px rgba(37, 99, 235, 0.2)',
                        margin: '0 auto 0.85rem',
                        background: '#ffffff'
                      }}
                    >
                      <img src={resolveAsset(l.image)} alt={l.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>

                    <div style={{ fontWeight: 800, color: '#0f172a', fontSize: '0.98rem', marginBottom: '0.25rem' }}>{l.name}</div>
                    <div style={{ fontSize: '0.8rem', color: '#2563eb', fontWeight: 700, marginBottom: '0.65rem' }}>{l.role}</div>

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleMemberClick(l);
                      }}
                      style={{
                        background: 'rgba(37, 99, 235, 0.12)',
                        color: '#2563eb',
                        border: '1px solid rgba(37, 99, 235, 0.3)',
                        borderRadius: '50px',
                        padding: '0.25rem 0.85rem',
                        fontSize: '0.78rem',
                        fontWeight: 700,
                        cursor: 'pointer'
                      }}
                    >
                      Detail
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* 4. FUNGSIONARIS & STAF GRID */}
            {dept.staff && dept.staff.length > 0 && (
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                    Fungsionaris & Staf
                  </h3>
                  <span style={{ fontSize: '0.85rem', color: '#2563eb', fontWeight: 600 }}>(Klik staf untuk lihat biodata)</span>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: '1rem' }}>
                  {dept.staff.map((s, i) => (
                    <div
                      key={i}
                      onClick={() => handleMemberClick(s)}
                      style={{
                        background: 'rgba(240, 246, 255, 0.75)',
                        backdropFilter: 'blur(12px)',
                        border: '1px solid rgba(59, 130, 246, 0.2)',
                        borderRadius: '14px',
                        padding: '1.15rem 0.75rem',
                        textAlign: 'center',
                        cursor: 'pointer',
                        transition: 'transform 0.2s, border-color 0.2s',
                        boxShadow: '0 4px 14px rgba(0, 0, 0, 0.03)'
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.transform = 'translateY(-3px)';
                        e.currentTarget.style.borderColor = '#2563eb';
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.2)';
                      }}
                    >
                      <div
                        style={{
                          width: '72px',
                          height: '72px',
                          borderRadius: '50%',
                          overflow: 'hidden',
                          border: '2px solid #2563eb',
                          boxShadow: '0 4px 12px rgba(37, 99, 235, 0.2)',
                          margin: '0 auto 0.75rem',
                          background: '#ffffff'
                        }}
                      >
                        <img src={resolveAsset(s.image)} alt={s.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      </div>

                      <div style={{ fontSize: '0.88rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.2rem' }}>{s.name}</div>
                      <div style={{ fontSize: '0.75rem', color: '#2563eb', fontWeight: 700, marginBottom: '0.55rem' }}>{s.role || `Staf ${dept.shortName}`}</div>

                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleMemberClick(s);
                        }}
                        style={{
                          background: 'rgba(37, 99, 235, 0.12)',
                          color: '#2563eb',
                          border: '1px solid rgba(37, 99, 235, 0.3)',
                          borderRadius: '50px',
                          padding: '0.2rem 0.75rem',
                          fontSize: '0.75rem',
                          fontWeight: 700,
                          cursor: 'pointer'
                        }}
                      >
                        Detail
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 5. PROGRAM KERJA YANG DIKELOLA GRID */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                  Program Kerja yang Dikelola ({(dept.programs || []).length} Proker)
                </h3>
                <span style={{ fontSize: '0.85rem', color: '#2563eb', fontWeight: 600 }}>(Klik proker untuk lihat detail penuh)</span>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1rem' }}>
                {(dept.programs || []).map((progItem, i) => {
                  const titleStr = typeof progItem === 'string' ? progItem : progItem.title;
                  return (
                    <div
                      key={i}
                      onClick={() => handleProkerClick(progItem)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.85rem',
                        padding: '1rem 1.25rem',
                        borderRadius: '14px',
                        background: 'rgba(240, 246, 255, 0.85)',
                        border: '1px solid rgba(59, 130, 246, 0.2)',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.03)'
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.background = 'rgba(224, 238, 255, 0.95)';
                        e.currentTarget.style.borderColor = '#2563eb';
                        e.currentTarget.style.transform = 'translateY(-2px)';
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.background = 'rgba(240, 246, 255, 0.85)';
                        e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.2)';
                        e.currentTarget.style.transform = 'translateY(0)';
                      }}
                    >
                      <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#2563eb', boxShadow: '0 0 6px rgba(37, 99, 235, 0.5)', flexShrink: 0 }}></div>
                      <div style={{ fontWeight: 700, color: '#0f172a', fontSize: '0.93rem', flexGrow: 1, textTransform: 'capitalize' }}>
                        {titleStr}
                      </div>
                      <span style={{ fontSize: '0.82rem', color: '#2563eb', fontWeight: 700, whiteSpace: 'nowrap', flexShrink: 0 }}>Detail</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Member Biodata Modal */}
      <MemberModalVismayakriya
        member={selectedMember}
        isOpen={memberModalOpen}
        onClose={() => {
          setMemberModalOpen(false);
          setSelectedMember(null);
        }}
      />

      {/* Program Detail Modal */}
      <ProgramModalVismayakriya
        proker={selectedProker}
        isOpen={prokerModalOpen}
        onClose={() => {
          setProkerModalOpen(false);
          setSelectedProker(null);
        }}
      />
    </>
  );
}
