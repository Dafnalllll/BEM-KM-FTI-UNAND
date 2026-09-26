import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { api } from '../utils/api.js';
import { getStatusBadgeClass } from '../utils/helpers.js';
import { NewsModal } from '../components/NewsModal.jsx';

export function HomePage({ onOpenAspiration }) {
  const navigate = useNavigate();
  const [info, setInfo] = useState(null);
  const [featuredProker, setFeaturedProker] = useState([]);
  const [newsList, setNewsList] = useState([]);
  const [selectedNews, setSelectedNews] = useState(null);

  useEffect(() => {
    api.getCabinetInfo().then(setInfo).catch(console.error);
    api.getPrograms().then(progs => {
      setFeaturedProker(progs.filter(p => p.featured).slice(0, 3));
    }).catch(console.error);
    api.getNews().then(setNewsList).catch(console.error);
  }, []);

  if (!info) return null;

  return (
    <div className="home-page">
      {/* HERO SECTION */}
      <section className="hero-section" style={{ position: 'relative', minHeight: '90vh', display: 'flex', alignItems: 'center', background: 'radial-gradient(circle at center, #101a33 0%, #070c18 100%)', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 30%, rgba(56,189,248,0.12) 0%, transparent 70%)', pointerEvents: 'none' }}></div>
        
        <div className="container" style={{ position: 'relative', zIndex: 2, paddingTop: '7rem', paddingBottom: '4rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3.5rem', alignItems: 'center' }}>
            
            <div>
              <div className="badge badge-status-ongoing" style={{ marginBottom: '1.25rem' }}>
                {info.cabinet} &bull; Periode {info.period}
              </div>
              
              <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.2rem)', fontWeight: 800, color: '#ffffff', lineHeight: 1.1, marginBottom: '1.25rem' }}>
                Merajut Koneksi, <br />
                <span style={{ background: 'linear-gradient(135deg, #60a5fa 0%, #38bdf8 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  Menggerakkan Inspirasi
                </span>
              </h1>
              
              <p style={{ fontSize: '1.1rem', color: '#cbd5e1', lineHeight: 1.7, marginBottom: '2rem', maxWidth: '560px' }}>
                {info.description}
              </p>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link to="/tentang" className="btn btn-primary btn-lg btn-glow">
                  <span>Jelajahi Kabinet</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </Link>
                <button className="btn btn-secondary btn-lg" onClick={onOpenAspiration} type="button">
                  <span>Sampaikan Aspirasi</span>
                </button>
              </div>
            </div>

            {/* Hero Image Visual Showcase (Rasio 16:9 Landscape - Lebih Besar & Lebar) */}
            <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', width: '100%' }}>
              <div style={{ position: 'absolute', width: '720px', height: '420px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(59,130,246,0.3) 0%, transparent 70%)', filter: 'blur(50px)' }}></div>
              <div style={{ width: '100%', maxWidth: '720px', aspectRatio: '21 / 9', borderRadius: '24px', overflow: 'hidden', border: '2px solid rgba(96,165,250,0.4)', boxShadow: '0 25px 60px rgba(0,0,0,0.7)', background: '#070c18', position: 'relative' }}>
                <img src={info.heroTeamImage} alt="Kabinet Nexus Inspirasi" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* STATS COUNTER BAR */}
      <section className="section" style={{ background: '#050811', borderTop: '1px solid rgba(255,255,250,0.06)', borderBottom: '1px solid rgba(255,255,250,0.06)', padding: '2.5rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '2rem', textAlignment: 'center' }}>
            {info.stats.map((s, idx) => (
              <div key={idx} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#60a5fa', lineHeight: 1 }}>
                  {s.number}{s.suffix}
                </div>
                <div style={{ fontSize: '0.85rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: '0.4rem', fontWeight: 600 }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEADERS SECTION */}
      <section className="section section-dark-alt" style={{ padding: '5rem 0' }}>
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div className="section-tag">Pimpinan Eksekutif</div>
            <h2 className="section-title">Nakhoda Kabinet</h2>
            <p className="section-subtitle">Gubernur dan Wakil Gubernur Mahasiswa BEM KM FTI UNAND Periode 2025/2026.</p>
            <div className="section-divider"></div>
          </div>

          {/* BAGIAN 4: Perbesar foto Gubernur/Wakil Gubernur & Sederhanakan Tampilan */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2.5rem' }}>
            {/* Governor */}
            <div className="card card-dark" style={{ padding: '2.25rem 2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '1.25rem' }}>
              <div style={{ width: '160px', height: '160px', borderRadius: '50%', overflow: 'hidden', border: '4px solid #60a5fa', flexShrink: 0, background: '#050811', boxShadow: '0 10px 30px rgba(59,130,246,0.35)' }}>
                <img src={info.leaders.governor.image} alt={info.leaders.governor.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div>
                <span className="badge badge-status-ongoing" style={{ fontSize: '0.78rem', marginBottom: '0.5rem', display: 'inline-block' }}>Gubernur Mahasiswa</span>
                <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: '#ffffff', margin: '0.3rem 0' }}>{info.leaders.governor.name}</h3>
                <p style={{ fontSize: '0.92rem', color: '#cbd5e1', fontStyle: 'italic', margin: '0.75rem 0 1rem', maxWidth: '380px', lineHeight: 1.6 }}>"{info.leaders.governor.quote}"</p>
                {/* BAGIAN 4 #3: Sosmed Polos Tanpa Panah */}
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                  {info.leaders.governor.socials.instagram && (
                    <a href={info.leaders.governor.socials.instagram} target="_blank" rel="noopener noreferrer" style={{ color: '#60a5fa', fontSize: '0.88rem', fontWeight: 600, background: 'rgba(59,130,246,0.12)', padding: '0.35rem 0.85rem', borderRadius: '8px', textDecoration: 'none', border: '1px solid rgba(96,165,250,0.25)' }}>
                      Instagram
                    </a>
                  )}
                  {info.leaders.governor.socials.linkedin && (
                    <a href={info.leaders.governor.socials.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: '#60a5fa', fontSize: '0.88rem', fontWeight: 600, background: 'rgba(59,130,246,0.12)', padding: '0.35rem 0.85rem', borderRadius: '8px', textDecoration: 'none', border: '1px solid rgba(96,165,250,0.25)' }}>
                      LinkedIn
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* Vice Governor */}
            <div className="card card-dark" style={{ padding: '2.25rem 2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '1.25rem' }}>
              <div style={{ width: '160px', height: '160px', borderRadius: '50%', overflow: 'hidden', border: '4px solid #60a5fa', flexShrink: 0, background: '#050811', boxShadow: '0 10px 30px rgba(59,130,246,0.35)' }}>
                <img src={info.leaders.viceGovernor.image} alt={info.leaders.viceGovernor.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div>
                <span className="badge badge-status-ongoing" style={{ fontSize: '0.78rem', marginBottom: '0.5rem', display: 'inline-block' }}>Wakil Gubernur Mahasiswa</span>
                <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: '#ffffff', margin: '0.3rem 0' }}>{info.leaders.viceGovernor.name}</h3>
                <p style={{ fontSize: '0.92rem', color: '#cbd5e1', fontStyle: 'italic', margin: '0.75rem 0 1rem', maxWidth: '380px', lineHeight: 1.6 }}>"{info.leaders.viceGovernor.quote}"</p>
                {/* BAGIAN 4 #3: Sosmed Polos Tanpa Panah */}
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                  {info.leaders.viceGovernor.socials.instagram && (
                    <a href={info.leaders.viceGovernor.socials.instagram} target="_blank" rel="noopener noreferrer" style={{ color: '#60a5fa', fontSize: '0.88rem', fontWeight: 600, background: 'rgba(59,130,246,0.12)', padding: '0.35rem 0.85rem', borderRadius: '8px', textDecoration: 'none', border: '1px solid rgba(96,165,250,0.25)' }}>
                      Instagram
                    </a>
                  )}
                  {info.leaders.viceGovernor.socials.linkedin && (
                    <a href={info.leaders.viceGovernor.socials.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: '#60a5fa', fontSize: '0.88rem', fontWeight: 600, background: 'rgba(59,130,246,0.12)', padding: '0.35rem 0.85rem', borderRadius: '8px', textDecoration: 'none', border: '1px solid rgba(96,165,250,0.25)' }}>
                      LinkedIn
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED WORK PROGRAMS PREVIEW */}
      <section className="section section-dark" style={{ padding: '5rem 0' }}>
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div className="section-tag">Aksi & Kontribusi</div>
            <h2 className="section-title">Program Kerja Unggulan</h2>
            <p className="section-subtitle">
              Inisiatif strategis yang dirancang untuk mengasah kapasitas intelektual, kepedulian sosial, dan kemandirian mahasiswa FTI.
            </p>
            <div className="section-divider"></div>
          </div>

          <div className="programs-grid">
            {featuredProker.map(p => (
              <div
                key={p.id}
                className="proker-card home-proker-card"
                onClick={() => navigate(`/proker?id=${p.id}`)}
                style={{ cursor: 'pointer' }}
              >
                <div className="proker-thumb-wrap">
                  <img src={p.image} alt={p.title} className="proker-thumb" loading="lazy" />
                  <div className="proker-overlay-badges">
                    <span className={`badge ${getStatusBadgeClass(p.status)}`}>{p.status}</span>
                    <span className="tag-dept" style={{ background: 'rgba(11,18,36,0.85)' }}>{p.category}</span>
                  </div>
                </div>
                <div className="proker-body">
                  <span className="tag-dept proker-dept-badge">{p.department}</span>
                  <h3 className="proker-title">{p.title}</h3>
                  <p className="proker-desc">{p.summary}</p>
                  <div className="proker-footer">
                    <span>{p.date}</span>
                    <span style={{ color: '#60a5fa', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px' }}>
                      Detail &rarr;
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
            <Link to="/program-kerja" className="btn btn-secondary btn-lg">
              <span>Lihat Seluruh Program Kerja</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* LATEST NEWS SECTION */}
      <section className="section section-dark-alt" style={{ padding: '5rem 0' }}>
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div className="section-tag">Warta Kampus</div>
            <h2 className="section-title">Informasi Terkini</h2>
            <p className="section-subtitle">
              Rilis pers, kabar pergerakan mahasiswa, dan pengumuman terbaru seputar Fakultas Teknologi Informasi.
            </p>
            <div className="section-divider"></div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {newsList.map(n => (
              <div
                key={n.id}
                className="card card-dark home-news-card"
                onClick={() => setSelectedNews(n)}
                style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column' }}
              >
                <div style={{ position: 'relative', width: '100%', height: '210px', overflow: 'hidden', background: '#050811' }}>
                  <img src={n.thumbnail} alt={n.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} className="news-thumb" />
                  <span className="badge" style={{ position: 'absolute', top: '1rem', left: '1rem', background: 'rgba(11,18,36,0.85)', color: '#60a5fa', border: '1px solid rgba(96,165,250,0.3)' }}>
                    {n.category}
                  </span>
                </div>
                <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <div style={{ fontSize: '0.8rem', color: '#94a3b8', marginBottom: '0.5rem' }}>{n.date} &bull; {n.readTime}</div>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.75rem', lineHeight: 1.4 }}>{n.title}</h3>
                  <p style={{ fontSize: '0.875rem', color: '#cbd5e1', lineHeight: 1.6, marginBottom: '1.25rem', flexGrow: 1 }}>{n.excerpt}</p>
                  <div style={{ color: '#60a5fa', fontWeight: 600, fontSize: '0.875rem', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    Baca Selengkapnya &rarr;
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ORMAWA PARTNERS SHOWCASE */}
      <section className="section section-dark-alt" style={{ padding: '3.5rem 0', borderTop: '1px solid var(--border-dark)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '0.8125rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em', color: '#94a3b8', marginBottom: '2rem' }}>
            Sinergi Lembaga Kemahasiswaan Fakultas Teknologi Informasi
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '2.5rem', flexWrap: 'wrap' }}>
            <Link to="/lembaga?slug=hmif" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', transition: 'transform 0.2s' }} title="HMIF UNAND">
              <img src="./src/assets/himpunan/hmif.webp" alt="HMIF" style={{ height: '48px', objectFit: 'contain' }} />
              <span style={{ fontSize: '0.75rem', color: '#cbd5e1', fontWeight: 600 }}>HMIF</span>
            </Link>
            <Link to="/lembaga?slug=hmsi" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', transition: 'transform 0.2s' }} title="HMSI UNAND">
              <img src="./src/assets/himpunan/hmsi.webp" alt="HMSI" style={{ height: '48px', objectFit: 'contain' }} />
              <span style={{ fontSize: '0.75rem', color: '#cbd5e1', fontWeight: 600 }}>HMSI</span>
            </Link>
            <Link to="/lembaga?slug=himatekom" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', transition: 'transform 0.2s' }} title="HIMATEKOM UNAND">
              <img src="./src/assets/himpunan/himatekom.webp" alt="HIMATEKOM" style={{ height: '48px', objectFit: 'contain' }} />
              <span style={{ fontSize: '0.75rem', color: '#cbd5e1', fontWeight: 600 }}>HIMATEKOM</span>
            </Link>
            <Link to="/lembaga?slug=dpm" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', transition: 'transform 0.2s' }} title="DPM FTI">
              <img src="./src/assets/ukm/dpm.webp" alt="DPM" style={{ height: '48px', objectFit: 'contain' }} />
              <span style={{ fontSize: '0.75rem', color: '#cbd5e1', fontWeight: 600 }}>DPM FTI</span>
            </Link>
            <Link to="/lembaga?slug=fsi" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', transition: 'transform 0.2s' }} title="FSI FTI">
              <img src="./src/assets/ukm/fsi.webp" alt="FSI" style={{ height: '48px', objectFit: 'contain' }} />
              <span style={{ fontSize: '0.75rem', color: '#cbd5e1', fontWeight: 600 }}>FSI FTI</span>
            </Link>
            <Link to="/lembaga?slug=ukos" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', transition: 'transform 0.2s' }} title="UKOS FTI">
              <img src="./src/assets/ukm/ukos.webp" alt="UKOS" style={{ height: '48px', objectFit: 'contain' }} />
              <span style={{ fontSize: '0.75rem', color: '#cbd5e1', fontWeight: 600 }}>UKOS FTI</span>
            </Link>
            <Link to="/lembaga?slug=tectona" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', transition: 'transform 0.2s' }} title="TECTONA FTI">
              <img src="./src/assets/ukm/tectona.webp" alt="TECTONA" style={{ height: '48px', objectFit: 'contain' }} />
              <span style={{ fontSize: '0.75rem', color: '#cbd5e1', fontWeight: 600 }}>TECTONA</span>
            </Link>
          </div>
        </div>
      </section>

      {/* News Modal */}
      {selectedNews && (
        <NewsModal article={selectedNews} onClose={() => setSelectedNews(null)} />
      )}
    </div>
  );
}
