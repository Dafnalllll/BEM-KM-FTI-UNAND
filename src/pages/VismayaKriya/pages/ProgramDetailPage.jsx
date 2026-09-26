import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { api } from '../utils/api.js';
import { getStatusBadgeClass } from '../utils/helpers.js';

export function ProgramDetailPage() {
  const location = useLocation();
  const [proker, setProker] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const id = urlParams.get('id');

    if (!id) {
      setError('Parameter ID program kerja tidak ditemukan.');
      setLoading(false);
      return;
    }

    setLoading(true);
    api.getProgramById(id)
      .then(res => {
        setProker(res);
        setError(null);
      })
      .catch(err => {
        setError(err.message || 'Program kerja tidak ditemukan.');
      })
      .finally(() => setLoading(false));
  }, [location.search]);

  if (loading) {
    return (
      <div className="container text-center" style={{ padding: '9rem 1.5rem 5rem' }}>
        <div style={{ color: '#60a5fa', fontWeight: 600 }}>Memuat detail program kerja...</div>
      </div>
    );
  }

  if (error || !proker) {
    return (
      <div className="container" style={{ padding: '9rem 1.5rem 5rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '500px', margin: '0 auto', background: 'rgba(16,26,51,0.6)', padding: '3rem 2rem', borderRadius: '16px', border: '1px dashed rgba(96,165,250,0.3)' }}>
          <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="1.5" style={{ margin: '0 auto 1rem' }}><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.75rem' }}>Program Kerja Tidak Ditemukan</h2>
          <p style={{ color: '#94a3b8', fontSize: '0.95rem', marginBottom: '2rem' }}>{error}</p>
          <Link to="/program-kerja" className="btn btn-primary btn-md">
            &larr; Kembali ke Katalog Program Kerja
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="program-detail-page">
      {/* Cover Header Banner */}
      <section className="section section-dark" style={{ paddingTop: '6.5rem', paddingBottom: '3.5rem', background: 'radial-gradient(circle at top, #162445 0%, #070c18 100%)', position: 'relative', overflow: 'hidden' }}>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ marginBottom: '1.5rem' }}>
            <Link to="/program-kerja" style={{ color: '#60a5fa', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
              &larr; Kembali ke Katalog Program Kerja
            </Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', flexWrap: 'wrap', marginBottom: '1rem' }}>
                <span className={`badge ${getStatusBadgeClass(proker.status)}`} style={{ fontSize: '0.85rem', padding: '0.35rem 0.85rem' }}>{proker.status}</span>
                <span className="tag-dept" style={{ background: 'rgba(37,99,235,0.4)', color: '#ffffff', fontSize: '0.85rem', padding: '0.3rem 0.75rem' }}>{proker.category}</span>
                <span style={{ fontSize: '0.88rem', color: '#94a3b8', fontWeight: 600 }}>&bull; {proker.department}</span>
              </div>
              <h1 style={{ fontSize: 'clamp(2rem, 3.5vw, 3.2rem)', fontWeight: 800, color: '#ffffff', lineHeight: 1.2, marginBottom: '1.25rem' }}>
                {proker.title}
              </h1>
              <p style={{ color: '#cbd5e1', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                {proker.summary}
              </p>
            </div>

            <div style={{ position: 'relative', width: '100%', height: '320px', borderRadius: '20px', overflow: 'hidden', border: '2px solid rgba(96,165,250,0.3)', boxShadow: '0 15px 40px rgba(0,0,0,0.6)', background: '#050811' }}>
              <img src={proker.image} alt={proker.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 60%, rgba(7,12,24,0.8) 100%)' }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Details */}
      <section className="section section-dark-alt" style={{ padding: '4rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem' }}>
            
            {/* Left: Description & Objectives */}
            <div>
              {/* Metadata Info Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '1.25rem', padding: '1.25rem 1.5rem', background: 'rgba(16,26,51,0.6)', border: '1px solid rgba(175,203,238,0.15)', borderRadius: '16px', marginBottom: '2.5rem' }}>
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#94a3b8', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '0.05em' }}>Waktu / Periode</div>
                  <div style={{ fontSize: '1rem', fontWeight: 700, color: '#ffffff', marginTop: '0.25rem' }}>{proker.date}</div>
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#94a3b8', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '0.05em' }}>Lokasi Kegiatan</div>
                  <div style={{ fontSize: '1rem', fontWeight: 700, color: '#ffffff', marginTop: '0.25rem' }}>{proker.location}</div>
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#94a3b8', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '0.05em' }}>Sasaran Peserta</div>
                  <div style={{ fontSize: '1rem', fontWeight: 700, color: '#ffffff', marginTop: '0.25rem' }}>{proker.targetAudience}</div>
                </div>
              </div>

              {/* Full Description */}
              <div style={{ background: 'rgba(16,26,51,0.6)', border: '1px solid rgba(175,203,238,0.12)', borderRadius: '16px', padding: '2rem', marginBottom: '2.5rem' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#ffffff', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
                  Latar Belakang & Gambaran Acara
                </h3>
                <p style={{ color: '#cbd5e1', fontSize: '1rem', lineHeight: 1.8 }}>
                  {proker.description}
                </p>
              </div>

              {/* Objectives */}
              <div style={{ background: 'rgba(16,26,51,0.6)', border: '1px solid rgba(175,203,238,0.12)', borderRadius: '16px', padding: '2rem', marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#ffffff', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                  Tujuan Utama Program Kerja
                </h3>
                <ul style={{ paddingLeft: 0, listStyle: 'none', margin: 0 }}>
                  {(proker.objectives || []).map((obj, idx) => (
                    <li key={idx} style={{ display: 'flex', gap: '0.85rem', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span style={{ fontSize: '0.95rem', color: '#dcebff', lineHeight: 1.6 }}>{obj}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right: Department Info & Tags */}
            <div>
              <div style={{ background: 'rgba(7,12,24,0.6)', border: '1px solid rgba(96,165,250,0.2)', borderRadius: '16px', padding: '2rem', position: 'sticky', top: '90px' }}>
                <div style={{ marginBottom: '1.75rem' }}>
                  <div style={{ fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#60a5fa', marginBottom: '0.5rem' }}>Penyelenggara</div>
                  <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.5rem' }}>{proker.department}</div>
                  <Link to={`/dinas?slug=${proker.departmentSlug}`} style={{ color: '#60a5fa', fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                    Lihat Profil Dinas &rarr;
                  </Link>
                </div>

                <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '1.5rem', marginTop: '1.5rem' }}>
                  <div style={{ fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#60a5fa', marginBottom: '0.75rem' }}>Kata Kunci / Tags</div>
                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                    {(proker.tags || []).map((t, idx) => (
                      <span key={idx} className="tag-dept" style={{ fontSize: '0.8rem', padding: '0.3rem 0.75rem', background: 'rgba(96,165,250,0.12)', color: '#60a5fa', border: '1px solid rgba(96,165,250,0.25)' }}>#{t}</span>
                    ))}
                  </div>
                </div>

                <div style={{ marginTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '1.5rem' }}>
                  <Link to="/program-kerja" className="btn btn-primary" style={{ width: '100%', textAlign: 'center', justifyContent: 'center' }}>
                    Eksplorasi Program Kerja Lainnya
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

