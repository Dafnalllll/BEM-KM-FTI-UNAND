import React, { useState, useEffect } from 'react';
import { api } from '../utils/api.js';
import { departmentsData } from '../data/departments.js';
import { DepartmentModal } from '../components/DepartmentModal.jsx';
import { PersonBiodataModal } from '../components/PersonBiodataModal.jsx';

export function AboutPage() {
  const [info, setInfo] = useState(null);
  const [selectedDept, setSelectedDept] = useState(null);
  const [selectedPerson, setSelectedPerson] = useState(null);

  useEffect(() => {
    api.getCabinetInfo().then(setInfo).catch(console.error);
  }, []);

  if (!info) return null;

  return (
    <div className="about-page">
      {/* Sub-Hero Banner */}
      <section className="section section-dark" style={{ paddingTop: '7rem', paddingBottom: '3.5rem', background: 'radial-gradient(circle at top, #101a33 0%, #070c18 100%)' }}>
        <div className="container text-center" style={{ textAlign: 'center' }}>
          <div className="section-tag">Mengenal Lebih Dekat</div>
          <h1 className="section-title" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)' }}>Tentang Kabinet Nexus Inspirasi</h1>
          <p className="section-subtitle">
            Merajut potensi mahasiswa, menghidupkan percikan inspirasi, dan menakhodai transformasi Fakultas Teknologi Informasi Universitas Andalas.
          </p>
          <div className="section-divider"></div>
        </div>
      </section>

      {/* PROFIL & FILOSOFI LOGO */}
      <section className="section section-dark-alt" style={{ padding: '5rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3.5rem', alignItems: 'center' }}>
            
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
              <div style={{ position: 'absolute', width: '320px', height: '320px', background: 'radial-gradient(circle, rgba(56,189,248,0.2) 0%, transparent 70%)', filter: 'blur(50px)' }}></div>
              <div style={{ width: '280px', height: '280px', borderRadius: '50%', background: 'rgba(16,26,51,0.6)', border: '2px solid var(--border-dark-hover)', padding: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'var(--shadow-card-dark), var(--glow-subtle)', position: 'relative', zIndex: 2 }}>
                <img src={info.logo} alt="Logo Nexus Inspirasi" style={{ width: '100%', height: '100%', objectFit: 'contain', filter: 'drop-shadow(0 0 15px rgba(56, 189, 248, 0.4))' }} />
              </div>
              <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
                <span className="badge badge-status-ongoing" style={{ fontSize: '0.85rem', padding: '0.4rem 1rem' }}>
                  Logo Resmi Kabinet Nexus Inspirasi
                </span>
              </div>
            </div>

            <div>
              <div className="section-tag" style={{ marginBottom: '0.75rem' }}>Identitas & Landasan Filosofis</div>
              <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#ffffff', marginBottom: '1.25rem', lineHeight: 1.2 }}>
                Simpul Pertemuan, Percikan Perubahan
              </h2>
              <p style={{ color: '#cbd5e1', fontSize: '1rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                {info.philosophy.concept}
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {info.philosophy.symbolism.map((sym, idx) => (
                  <div key={idx} style={{ padding: '1rem 1.25rem', background: 'rgba(7,12,24,0.5)', borderLeft: '3px solid #38bdf8', borderRadius: '0 10px 10px 0', borderTop: '1px solid rgba(175,203,238,0.1)', borderRight: '1px solid rgba(175,203,238,0.1)', borderBottom: '1px solid rgba(175,203,238,0.1)' }}>
                    <div style={{ fontWeight: 700, color: '#ffffff', fontSize: '0.95rem', marginBottom: '0.25rem' }}>{sym.element}</div>
                    <div style={{ fontSize: '0.88rem', color: '#94a3b8', lineHeight: 1.5 }}>{sym.meaning}</div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* VISI KABINET */}
      <section className="section section-dark" style={{ padding: '5rem 0' }}>
        <div className="container">
          <div style={{ maxWidth: '920px', margin: '0 auto', textAlign: 'center', background: 'linear-gradient(135deg, rgba(22,36,69,0.7) 0%, rgba(16,26,51,0.95) 100%)', border: '1px solid var(--border-dark-hover)', borderRadius: 'var(--radius-xl)', padding: '3.5rem 2.5rem', boxShadow: 'var(--shadow-card-dark), var(--glow-subtle)', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: '-50px', right: '-50px', width: '200px', height: '200px', background: 'radial-gradient(circle, rgba(59,130,246,0.15), transparent 70%)' }}></div>
            <div className="section-tag" style={{ marginBottom: '1.25rem' }}>Visi Besar</div>
            <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#ffffff', marginBottom: '1.5rem' }}>VISI KABINET</h2>
            <blockquote style={{ fontFamily: 'var(--font-editorial)', fontSize: 'clamp(1.2rem, 2.5vw, 1.65rem)', color: 'var(--color-icy-100)', lineHeight: 1.6, fontStyle: 'italic', position: 'relative' }}>
              "{info.vision}"
            </blockquote>
          </div>
        </div>
      </section>

      {/* 5 MISI INTERAKTIF */}
      <section className="section section-dark-alt" style={{ padding: '5rem 0' }}>
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div className="section-tag">Rencana Strategis</div>
            <h2 className="section-title">5 Pilar Misi Nexus Inspirasi</h2>
            <p className="section-subtitle">
              Lima langkah nyata dan terukur dalam merealisasikan marwah pergerakan, advokasi, dan kemajuan ekosistem mahasiswa FTI.
            </p>
            <div className="section-divider"></div>
          </div>

          <div className="mission-timeline">
            {info.missions.map(m => (
              <div key={m.id} className="mission-item">
                <div className="mission-number-node">{m.id}</div>
                <div className="mission-card">
                  <h3 className="mission-title">{m.title}</h3>
                  <p className="mission-text">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STRUKTUR ORGANISASI KABINET INTERAKTIF */}
      <section className="section section-dark" id="struktur-organisasi" style={{ padding: '5rem 0' }}>
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div className="section-tag">Hierarki Kelembagaan</div>
            <h2 className="section-title">Struktur Kabinet Nexus Inspirasi</h2>
            <p className="section-subtitle">
              Bagan kepemimpinan terintegrasi: Gubernur & Wakil Gubernur, Sekretaris Kabinet, Bendahara Umum, serta 9 Dinas dan 1 Biro. Klik pada dinas untuk melihat profil lengkapnya.
            </p>
            <div className="section-divider"></div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
            {/* Top: Governor & Vice Governor (Clickable Biodata) */}
            <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <div
                onClick={() => setSelectedPerson({
                  name: info.leaders.governor.name,
                  role: info.leaders.governor.title,
                  image: info.leaders.governor.image,
                  angkatan: '2022',
                  jurusan: 'Sistem Informasi',
                  sosmed: info.leaders.governor.socials
                })}
                style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: 'var(--bg-dark-card)', border: '2px solid #3b82f6', borderRadius: '16px', padding: '1.25rem 2rem', boxShadow: 'var(--shadow-card-dark)', minWidth: '280px', cursor: 'pointer' }}
              >
                <div style={{ width: '60px', height: '60px', borderRadius: '50%', overflow: 'hidden', border: '2px solid #60a5fa', flexShrink: 0, background: '#050811' }}>
                  <img src={info.leaders.governor.image} alt={info.leaders.governor.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#60a5fa', fontWeight: 700, textTransform: 'uppercase' }}>Gubernur Mahasiswa</div>
                  <div style={{ fontSize: '1.15rem', fontWeight: 800, color: '#ffffff' }}>{info.leaders.governor.name}</div>
                  <span style={{ fontSize: '0.7rem', color: '#60a5fa', fontWeight: 600 }}>Biodata &rarr;</span>
                </div>
              </div>

              <div
                onClick={() => setSelectedPerson({
                  name: info.leaders.viceGovernor.name,
                  role: info.leaders.viceGovernor.title,
                  image: info.leaders.viceGovernor.image,
                  angkatan: '2022',
                  jurusan: 'Teknik Komputer',
                  sosmed: info.leaders.viceGovernor.socials
                })}
                style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: 'var(--bg-dark-card)', border: '2px solid #3b82f6', borderRadius: '16px', padding: '1.25rem 2rem', boxShadow: 'var(--shadow-card-dark)', minWidth: '280px', cursor: 'pointer' }}
              >
                <div style={{ width: '60px', height: '60px', borderRadius: '50%', overflow: 'hidden', border: '2px solid #60a5fa', flexShrink: 0, background: '#050811' }}>
                  <img src={info.leaders.viceGovernor.image} alt={info.leaders.viceGovernor.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#60a5fa', fontWeight: 700, textTransform: 'uppercase' }}>Wakil Gubernur</div>
                  <div style={{ fontSize: '1.15rem', fontWeight: 800, color: '#ffffff' }}>{info.leaders.viceGovernor.name}</div>
                  <span style={{ fontSize: '0.7rem', color: '#60a5fa', fontWeight: 600 }}>Biodata &rarr;</span>
                </div>
              </div>
            </div>

            {/* Connector Line Down */}
            <div style={{ width: '2px', height: '32px', background: 'linear-gradient(180deg, #3b82f6, #60a5fa)' }}></div>

            {/* Middle: Secretariat & Finance */}
            <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', background: 'rgba(16,26,51,0.9)', border: '1px solid var(--border-dark)', borderRadius: '12px', padding: '1rem 1.5rem', minWidth: '230px' }}>
                <div style={{ width: '46px', height: '46px', borderRadius: '50%', overflow: 'hidden', border: '1px solid #60a5fa', background: '#050811' }}>
                  <img src={info.leaders.secretariat.image} alt="Sekretaris Daerah" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div>
                  <div style={{ fontSize: '0.72rem', color: '#94a3b8', textTransform: 'uppercase' }}>Sekretariat</div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#ffffff' }}>Sekretaris Daerah</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', background: 'rgba(16,26,51,0.9)', border: '1px solid var(--border-dark)', borderRadius: '12px', padding: '1rem 1.5rem', minWidth: '230px' }}>
                <div style={{ width: '46px', height: '46px', borderRadius: '50%', overflow: 'hidden', border: '1px solid #60a5fa', background: '#050811' }}>
                  <img src={info.leaders.finance.image} alt="Bendahara Umum" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div>
                  <div style={{ fontSize: '0.72rem', color: '#94a3b8', textTransform: 'uppercase' }}>Keuangan</div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#ffffff' }}>Bendahara Umum</div>
                </div>
              </div>
            </div>

            {/* Connector Line Down */}
            <div style={{ width: '2px', height: '32px', background: 'linear-gradient(180deg, #60a5fa, #1e3158)' }}></div>

            {/* Grid: 10 Dinas & Biro */}
            <div style={{ width: '100%', marginTop: '1rem' }}>
              <div style={{ textAlign: 'center', marginBottom: '1.5rem', fontSize: '0.85rem', color: '#60a5fa', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                Jajaran Pelaksana: 9 Dinas &bull; 1 Biro
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '1rem' }}>
                {departmentsData.map(d => (
                  <div
                    key={d.slug}
                    className="org-node-card"
                    onClick={() => setSelectedDept(d)}
                    style={{ background: 'var(--bg-dark-card)', border: '1px solid var(--border-dark)', borderRadius: '12px', padding: '1.25rem 1rem', textAlign: 'center', cursor: 'pointer', transition: 'all var(--transition-fast)' }}
                  >
                    <div style={{ width: '48px', height: '48px', margin: '0 auto 0.75rem', borderRadius: '10px', background: 'rgba(255,255,255,0.03)', padding: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <img src={d.logo} alt={d.name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                    </div>
                    <span className="badge" style={{ fontSize: '0.7rem', background: 'rgba(59,130,246,0.15)', color: '#60a5fa', marginBottom: '0.35rem' }}>{d.type}</span>
                    <div style={{ fontWeight: 700, color: '#ffffff', fontSize: '0.95rem' }}>{d.shortName}</div>
                    <div style={{ fontSize: '0.75rem', color: '#94a3b8', marginTop: '0.25rem' }}>{d.headName}</div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Department Modal */}
      {selectedDept && (
        <DepartmentModal dept={selectedDept} onClose={() => setSelectedDept(null)} />
      )}

      {/* Person Biodata Modal for Top Leaders */}
      {selectedPerson && (
        <PersonBiodataModal person={selectedPerson} onClose={() => setSelectedPerson(null)} />
      )}
    </div>
  );
}

