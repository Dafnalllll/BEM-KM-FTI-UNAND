import React, { useState, useRef } from 'react';
import ReactDOM from 'react-dom';
import { useNavigate } from 'react-router-dom';
import { cabinetInfo } from '../../../data/VismayaKriya/organization.js';
import { programsData } from '../../../data/VismayaKriya/programs.js';
import { galleryData } from '../../../data/VismayaKriya/gallery.js';
import { getStatusBadgeClass } from '../utils/helpers.js';
import { PersonBiodataModal } from './PersonBiodataModal.jsx';

export function DepartmentModal({ dept, onClose }) {
  const navigate = useNavigate();
  const [selectedPerson, setSelectedPerson] = useState(null);
  const carouselRef = useRef(null);

  if (!dept) return null;

  // Resolving ALL Proker items for this department
  const resolvedPrograms = programsData.filter(p => {
    if (!p) return false;
    const matchSlug = p.departmentSlug && p.departmentSlug.toLowerCase() === (dept.slug || '').toLowerCase();
    const matchId = (dept.programs || []).includes(p.id);
    return matchSlug || matchId;
  });

  // Department specific activity documentation photos
  const deptGalleryItems = galleryData.filter(g => g.departmentSlug === dept.slug);

  // Combine ALL officers (Leaders + Staff) for top carousel
  const allOfficers = [
    ...(dept.leaders || []),
    ...(dept.staff || []).map(s => ({
      ...s,
      role: s.role || `Staf ${dept.shortName}`
    }))
  ];

  const scrollCarousel = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -260 : 260;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const modalContent = (
    <>
      <div
        className="modal-overlay open"
        id="dept-modal-overlay"
        style={{ zIndex: 1000 }}
        onClick={onClose}
      >
        <div
          className="modal-dialog"
          style={{ maxWidth: '880px', width: '92%' }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Banner Header with coverPhoto background & dark overlay */}
          <div
            className="modal-header-banner"
            style={{
              position: 'relative',
              backgroundImage: dept.coverPhoto
                ? `linear-gradient(180deg, rgba(11,18,36,0.4) 0%, rgba(11,18,36,0.95) 100%), url(${dept.coverPhoto})`
                : 'linear-gradient(135deg, #0b1224 0%, #162445 100%)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              minHeight: '180px',
              padding: '1.5rem'
            }}
          >
            <button className="modal-close-btn" onClick={onClose} aria-label="Tutup Detail">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: '1.5rem', transform: 'translateY(24px)', width: '100%' }}>
              <div style={{ width: '90px', height: '90px', borderRadius: '16px', background: '#070c18', border: '2px solid #60a5fa', padding: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 10px 25px rgba(0,0,0,0.5)', flexShrink: 0 }}>
                <img src={dept.logo} alt={dept.name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              </div>
              <div style={{ marginBottom: '28px' }}>
                <span className="badge" style={{ background: 'rgba(59,130,246,0.3)', color: '#93c5fd', border: '1px solid rgba(96,165,250,0.4)', marginBottom: '0.35rem', display: 'inline-block' }}>
                  {dept.type} &bull; {cabinetInfo.cabinet}
                </span>
                <h2 style={{ fontSize: 'clamp(1.4rem, 3vw, 1.85rem)', fontWeight: 800, color: '#ffffff', lineHeight: 1.2 }}>
                  {dept.type} {dept.name}
                </h2>
              </div>
            </div>
          </div>

          <div className="modal-body" style={{ paddingTop: '3.5rem', paddingBottom: '2rem' }}>
            
            {/* BAGIAN 1 #1 & #2: GALERI PENGURUS (CAROUSEL / SLIDER) DI PALING ATAS */}
            <div style={{ marginBottom: '2.5rem', background: 'rgba(16,26,51,0.5)', borderRadius: '16px', padding: '1.25rem', border: '1px solid rgba(96,165,250,0.2)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <div>
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#ffffff', margin: 0, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M12 8v8M8 12h8"></path></svg>
                    Galeri Pengurus Dinas ({allOfficers.length} Pengurus)
                  </h4>
                  <span style={{ fontSize: '0.78rem', color: '#94a3b8' }}>Geser/Swipe untuk melihat seluruh pimpinan & staf dinas</span>
                </div>
                {/* Carousel Controls */}
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <button
                    onClick={() => scrollCarousel('left')}
                    style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', color: '#fff', borderRadius: '50%', width: '32px', height: '32px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                    title="Slide Kiri"
                    type="button"
                  >
                    &larr;
                  </button>
                  <button
                    onClick={() => scrollCarousel('right')}
                    style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', color: '#fff', borderRadius: '50%', width: '32px', height: '32px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                    title="Slide Kanan"
                    type="button"
                  >
                    &rarr;
                  </button>
                </div>
              </div>

              {/* Scrollable Container */}
              <div
                ref={carouselRef}
                style={{
                  display: 'flex',
                  gap: '1rem',
                  overflowX: 'auto',
                  scrollSnapType: 'x mandatory',
                  paddingBottom: '0.75rem',
                  scrollbarWidth: 'thin',
                  scrollbarColor: '#60a5fa rgba(15,23,42,0.6)'
                }}
              >
                {allOfficers.map((person, idx) => (
                  <div
                    key={idx}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedPerson(person);
                    }}
                    style={{
                      flex: '0 0 170px',
                      scrollSnapAlign: 'start',
                      background: 'rgba(11,18,36,0.8)',
                      border: '1px solid rgba(96,165,250,0.25)',
                      borderRadius: '14px',
                      padding: '1rem 0.75rem',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center',
                      cursor: 'pointer',
                      transition: 'all 0.25 ease'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = 'translateY(-4px)';
                      e.currentTarget.style.borderColor = '#60a5fa';
                      e.currentTarget.style.boxShadow = '0 8px 20px rgba(59,130,246,0.3)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = 'none';
                      e.currentTarget.style.borderColor = 'rgba(96,165,250,0.25)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    <div style={{ width: '80px', height: '80px', borderRadius: '50%', overflow: 'hidden', border: '2px solid #60a5fa', marginBottom: '0.65rem', background: '#050811' }}>
                      <img src={person.image} alt={person.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <div style={{ fontWeight: 700, color: '#ffffff', fontSize: '0.9rem', lineHeight: 1.3, marginBottom: '2px' }}>
                      {person.name}
                    </div>
                    <div style={{ fontSize: '0.75rem', color: '#93c5fd', lineHeight: 1.2, marginBottom: '0.4rem' }}>
                      {person.role}
                    </div>
                    <span style={{ fontSize: '0.7rem', color: '#60a5fa', fontWeight: 600, background: 'rgba(59,130,246,0.15)', padding: '0.15rem 0.5rem', borderRadius: '20px' }}>
                      Detail
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* BAGIAN 1 #3: Deskripsi & Peran (Setelahan Galeri Pengurus) */}
            <div style={{ marginBottom: '2rem' }}>
              <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="16" x2="12" y2="12"></line>
                  <line x1="12" y1="8" x2="12.01" y2="8"></line>
                </svg>
                Deskripsi & Peran
              </h4>
              <p style={{ color: '#cbd5e1', fontSize: '0.95rem', lineHeight: 1.7 }}>{dept.description}</p>
            </div>

            {/* Visi & Misi */}
            <div style={{ background: 'rgba(7,12,24,0.5)', border: '1px solid rgba(175,203,238,0.12)', borderRadius: '12px', padding: '1.5rem', marginBottom: '2rem' }}>
              <div style={{ marginBottom: '1.25rem' }}>
                <div style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#60a5fa', marginBottom: '0.35rem' }}>Visi Departemen</div>
                <div style={{ fontSize: '1rem', fontWeight: 600, color: '#ffffff', fontStyle: 'italic' }}>"{dept.vision}"</div>
              </div>
              <div>
                <div style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#60a5fa', marginBottom: '0.5rem' }}>Misi Utama</div>
                {(dept.missions || []).map((m, idx) => (
                  <div key={idx} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                    <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: '#2563eb', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: 700, flexShrink: 0, marginTop: '2px' }}>
                      {idx + 1}
                    </div>
                    <div style={{ fontSize: '0.92rem', color: '#dcebff', lineHeight: 1.6 }}>{m}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Jajaran Pimpinan (Kartu Detail) */}
            <div style={{ marginBottom: '2rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#ffffff', margin: 0 }}>Jajaran Pimpinan</h4>
                <span style={{ fontSize: '0.78rem', color: '#60a5fa' }}>(Klik untuk lihat biodata)</span>
              </div>
              <div style={{ display: 'flex', gap: '1.25rem', justifyContent: 'flex-start', flexWrap: 'wrap' }}>
                {(dept.leaders || []).map((l, idx) => (
                  <div
                    key={idx}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedPerson(l);
                    }}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center',
                      gap: '0.4rem',
                      cursor: 'pointer',
                      padding: '0.75rem 1rem',
                      borderRadius: '12px',
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(96,165,250,0.2)',
                      transition: 'all 0.2s ease',
                      minWidth: '130px'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = 'translateY(-3px)';
                      e.currentTarget.style.borderColor = '#60a5fa';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = 'none';
                      e.currentTarget.style.borderColor = 'rgba(96,165,250,0.2)';
                    }}
                  >
                    <div style={{ width: '74px', height: '74px', borderRadius: '50%', overflow: 'hidden', border: '2px solid #60a5fa', background: '#050811' }}>
                      <img src={l.image} alt={l.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <div>
                      <div style={{ fontWeight: 700, color: '#ffffff', fontSize: '0.9rem' }}>{l.name}</div>
                      <div style={{ fontSize: '0.75rem', color: '#93c5fd' }}>{l.role}</div>
                      {/* BAGIAN 3: Label disederhanakan tanpa panah */}
                      <span style={{ fontSize: '0.7rem', color: '#60a5fa', fontWeight: 600, display: 'inline-block', marginTop: '2px' }}>
                        Detail
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* BAGIAN 3: Fungsionaris & Staf (Label disederhanakan tanpa panah) */}
            {dept.staff && dept.staff.length > 0 && (
              <div style={{ marginBottom: '2rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#ffffff', margin: 0 }}>Fungsionaris & Staf</h4>
                  <span style={{ fontSize: '0.78rem', color: '#60a5fa' }}>(Klik staf untuk lihat biodata)</span>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(110px, 1fr))', gap: '0.75rem' }}>
                  {dept.staff.map((s, idx) => (
                    <div
                      key={idx}
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedPerson({ ...s, role: `Staf ${dept.shortName}` });
                      }}
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        textAlign: 'center',
                        gap: '0.35rem',
                        padding: '0.65rem 0.5rem',
                        borderRadius: '10px',
                        background: 'rgba(255,255,255,0.03)',
                        border: '1px solid rgba(255,255,255,0.08)',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease'
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.transform = 'translateY(-3px)';
                        e.currentTarget.style.background = 'rgba(59,130,246,0.15)';
                        e.currentTarget.style.borderColor = '#60a5fa';
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.transform = 'none';
                        e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                      }}
                    >
                      <div style={{ width: '60px', height: '60px', borderRadius: '50%', overflow: 'hidden', border: '2px solid rgba(96,165,250,0.3)', background: '#050811' }}>
                        <img src={s.image} alt={s.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      </div>
                      <div style={{ fontSize: '0.8rem', fontWeight: 600, color: '#dcebff' }}>{s.name}</div>
                      <div style={{ fontSize: '0.68rem', color: '#94a3b8' }}>Staf {dept.shortName}</div>
                      {/* BAGIAN 3: Label disederhanakan tanpa panah */}
                      <span style={{ fontSize: '0.68rem', color: '#60a5fa', marginTop: '2px', fontWeight: 600 }}>
                        Detail
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* BAGIAN 2: Program Kerja yang Dikelola (Menampilkan SEMUA proker dinas) */}
            <div style={{ marginBottom: '2.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#ffffff', margin: 0 }}>
                  Program Kerja yang Dikelola ({resolvedPrograms.length} Proker)
                </h4>
                <span style={{ fontSize: '0.78rem', color: '#60a5fa' }}>(Klik proker untuk lihat detail penuh)</span>
              </div>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '0.85rem' }}>
                {resolvedPrograms.map((prog, idx) => (
                  <div
                    key={idx}
                    onClick={(e) => {
                      e.stopPropagation();
                      onClose();
                      navigate(`/proker?id=${prog.id}`);
                    }}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.5rem',
                      padding: '0.85rem 1.1rem',
                      borderRadius: '12px',
                      background: 'rgba(22,36,69,0.6)',
                      border: '1px solid rgba(175,203,238,0.2)',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = 'translateY(-3px)';
                      e.currentTarget.style.borderColor = '#60a5fa';
                      e.currentTarget.style.background = 'rgba(30,50,95,0.8)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = 'none';
                      e.currentTarget.style.borderColor = 'rgba(175,203,238,0.2)';
                      e.currentTarget.style.background = 'rgba(22,36,69,0.6)';
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#38bdf8', boxShadow: '0 0 8px #38bdf8' }}></div>
                        <span style={{ fontSize: '0.72rem', color: '#60a5fa', fontWeight: 700, textTransform: 'uppercase' }}>{prog.category || dept.type}</span>
                      </div>
                      {prog.status && <span className={`badge ${getStatusBadgeClass(prog.status)}`} style={{ fontSize: '0.65rem' }}>{prog.status}</span>}
                    </div>
                    <div style={{ fontWeight: 700, color: '#ffffff', fontSize: '0.95rem' }}>{prog.title}</div>
                    {prog.summary && <div style={{ fontSize: '0.78rem', color: '#cbd5e1', lineHeight: 1.4 }}>{prog.summary}</div>}
                    <div style={{ color: '#60a5fa', fontWeight: 600, fontSize: '0.78rem', marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      Lihat Halaman Detail
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* BAGIAN 1 #4: DOKUMENTASI KEGIATAN DINAS DI PALING BAWAH */}
            {deptGalleryItems.length > 0 && (
              <div style={{ paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#ffffff', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
                  Dokumentasi Kegiatan Dinas {dept.shortName}
                </h4>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1rem' }}>
                  {deptGalleryItems.map((g, idx) => (
                    <div key={idx} style={{ position: 'relative', height: '135px', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(175,203,238,0.15)', background: '#050811' }}>
                      <img src={g.image} alt={g.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 40%, rgba(7,12,24,0.92) 100%)', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '0.75rem' }}>
                        <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#ffffff', lineHeight: 1.3 }}>{g.title}</div>
                        <div style={{ fontSize: '0.68rem', color: '#94a3b8', marginTop: '2px' }}>{g.date}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Person Biodata Modal rendered on top when a Leader/Staff is clicked */}
      {selectedPerson && (
        <PersonBiodataModal
          person={selectedPerson}
          onClose={() => setSelectedPerson(null)}
        />
      )}
    </>
  );

  return ReactDOM.createPortal(modalContent, document.body);
}
