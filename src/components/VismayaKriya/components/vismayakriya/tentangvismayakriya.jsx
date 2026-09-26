import React, { useState, useEffect } from 'react';
import { cabinetInfo } from '../../../../data/VismayaKriya/organization.js';
import { departmentsData } from '../../../../data/VismayaKriya/departments.js';
import { ormawaData } from '../../../../data/VismayaKriya/ormawa.js';
import { api } from './utils/api.js';
import { DepartmentModalVismayakriya } from './modals/departmentmodalvismayakriya.jsx';
import { MemberModalVismayakriya } from './modals/membermodalvismayakriya.jsx';
import { OrmawaModalVismayakriya } from './modals/ormawamodalvismayakriya.jsx';
import { scrollToTop, resolveAsset } from './utils/helpers.js';

export function TentangVismayakriya() {
  const [info, setInfo] = useState(cabinetInfo);

  // Modals state
  const [selectedDept, setSelectedDept] = useState(null);
  const [deptModalOpen, setDeptModalOpen] = useState(false);

  const [selectedMember, setSelectedMember] = useState(null);
  const [memberModalOpen, setMemberModalOpen] = useState(false);

  const [selectedOrmawa, setSelectedOrmawa] = useState(null);
  const [ormawaModalOpen, setOrmawaModalOpen] = useState(false);

  const [ormawaFilter, setOrmawaFilter] = useState('all');

  useEffect(() => {
    async function loadInfo() {
      const data = await api.getCabinetInfo();
      setInfo(data);
    }
    loadInfo();
  }, []);

  const handleDeptClick = async (slug) => {
    try {
      const dept = await api.getDepartmentBySlug(slug);
      setSelectedDept(dept);
      setDeptModalOpen(true);
      scrollToTop();
    } catch (err) {
      console.error(err);
    }
  };

  const handleMemberClick = (member) => {
    setSelectedMember(member);
    setMemberModalOpen(true);
  };

  const handleOrmawaClick = (ormawa) => {
    setSelectedOrmawa(ormawa);
    setOrmawaModalOpen(true);
    scrollToTop();
  };

  const filteredOrmawa = ormawaData.filter(o => ormawaFilter === 'all' || o.type === ormawaFilter);

  if (deptModalOpen && selectedDept) {
    return (
      <DepartmentModalVismayakriya
        dept={selectedDept}
        isOpen={true}
        onClose={() => {
          setDeptModalOpen(false);
          setSelectedDept(null);
          scrollToTop();
        }}
      />
    );
  }

  if (ormawaModalOpen && selectedOrmawa) {
    return (
      <OrmawaModalVismayakriya
        ormawa={selectedOrmawa}
        isOpen={true}
        onClose={() => {
          setOrmawaModalOpen(false);
          setSelectedOrmawa(null);
          scrollToTop();
        }}
      />
    );
  }

  return (
    <div className="about-page">
      {/* Sub-Hero Banner */}
      <section className="section section-dark" style={{ paddingTop: '7rem', paddingBottom: '3.5rem', background: 'radial-gradient(circle at top, #101a33 0%, #070c18 100%)' }}>
        <div className="container text-center" style={{ textAlign: 'center' }}>
          <div className="section-tag">Mengenal Lebih Dekat</div>
          <h1 className="section-title" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)' }}>Tentang {info.cabinet}</h1>
          <p className="section-subtitle">
            Merajut potensi mahasiswa, menghidupkan percikan inspirasi, dan menakhodai transformasi Fakultas Teknologi Informasi Universitas Andalas.
          </p>
          <div className="section-divider"></div>
        </div>
      </section>

      {/* PROFIL & FILOSOFI LOGO */}
      <section className="section section-dark-alt">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3.5rem', alignItems: 'center' }}>
            {/* Logo Visual Showcase */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
              <div style={{ position: 'absolute', width: '320px', height: '320px', background: 'radial-gradient(circle, rgba(56,189,248,0.2) 0%, transparent 70%)', filter: 'blur(50px)' }}></div>
              <div style={{ width: '280px', height: '280px', borderRadius: '50%', background: 'rgba(16,26,51,0.6)', border: '2px solid var(--border-dark-hover)', padding: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'var(--shadow-card-dark), var(--glow-subtle)', position: 'relative', zIndex: 2 }}>
                <img src={resolveAsset(info.logo)} alt="Logo Vismayakriya" style={{ width: '100%', height: '100%', objectFit: 'contain', filter: 'drop-shadow(0 0 15px rgba(56, 189, 248, 0.4))' }} />
              </div>
              <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
                <span className="badge badge-status-ongoing" style={{ fontSize: '0.85rem', padding: '0.4rem 1rem' }}>
                  Logo Resmi {info.cabinet}
                </span>
              </div>
            </div>

            {/* Narasi Filosofi */}
            <div>
              <div className="section-tag" style={{ marginBottom: '0.75rem' }}>Identitas & Landasan Filosofis</div>
              <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#ffffff', marginBottom: '1.25rem', lineHeight: 1.2 }}>
                {info.philosophy?.title || "Simpul Pertemuan, Percikan Perubahan"}
              </h2>
              <p style={{ color: '#cbd5e1', fontSize: '1rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                {info.philosophy?.concept}
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {info.philosophy?.symbolism?.map((sym, idx) => (
                  <div key={idx} style={{ padding: '1rem 1.25rem', background: 'rgba(7,12,24,0.5)', borderLeft: '3px solid #38bdf8', borderRadius: '0 10px 10px 0', borderTop: '1px solid rgba(175,203,238,0.1)', borderRight: '1px solid rgba(175,203,238,0.1)', borderBottom: '1px solid rgba(175,203,238,0.1)' }}>
                    <div style={{ fontWeight: 700, color: '#ffffff', fontSize: '0.95rem', marginBottom: '0.25rem' }}>{sym.element}</div>
                    <div style={{ fontSize: '0.88rem', color: '#94a3b8', lineHeight: 1.5 }}>{sym.meaning}</div>
                  </div>
                )) || null}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VISI KABINET */}
      <section className="section section-dark">
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

      {/* 5 MISI INTERAKTIF DALAM TIMELINE BERURUTAN */}
      <section className="section section-dark-alt">
        <div className="container">
          <div className="section-header">
            <div className="section-tag">Rencana Strategis</div>
            <h2 className="section-title">{info.missions?.length || 3} Pilar Misi Vismayakriya</h2>
            <p className="section-subtitle">
              Langkah nyata dan terukur dalam merealisasikan marwah pergerakan, advokasi, dan kemajuan ekosistem mahasiswa FTI.
            </p>
            <div className="section-divider"></div>
          </div>

          {/* Timeline Misi */}
          <div className="mission-timeline">
            {info.missions?.map(m => (
              <div key={m.id} className="mission-item">
                <div className="mission-number-node">{m.id}</div>
                <div className="mission-card">
                  <h3 className="mission-title">{m.title}</h3>
                  <p className="mission-text">{m.desc}</p>
                </div>
              </div>
            )) || null}
          </div>
        </div>
      </section>

      {/* STRUKTUR ORGANISASI KABINET INTERAKTIF */}
      <section className="section section-dark" id="struktur-organisasi">
        <div className="container">
          <div className="section-header">
            <div className="section-tag">Hierarki Kelembagaan</div>
            <h2 className="section-title">Struktur Kabinet Vismayakriya</h2>
            <p className="section-subtitle">
              Bagan kepemimpinan terintegrasi: Klik pada Gubernur, Wagub, Sekda, Benda, atau Dinas untuk melihat detail biodata & profil lengkap.
            </p>
            <div className="section-divider"></div>
          </div>

          {/* Interactive Hierarchy Tree Container */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
            {/* Top: Governor & Vice Governor */}
            <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <div
                style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: 'var(--bg-dark-card)', border: '2px solid #3b82f6', borderRadius: '16px', padding: '1.25rem 2rem', boxShadow: 'var(--shadow-card-dark)', minWidth: '280px', cursor: 'pointer' }}
                onClick={() => handleMemberClick(info.leaders.governor)}
              >
                <div style={{ width: '60px', height: '60px', borderRadius: '50%', overflow: 'hidden', border: '2px solid #60a5fa', flexShrink: 0, background: '#050811' }}>
                  <img src={resolveAsset(info.leaders.governor.image)} alt={info.leaders.governor.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#60a5fa', fontWeight: 700, textTransform: 'uppercase' }}>Gubernur Mahasiswa</div>
                  <div style={{ fontSize: '1.15rem', fontWeight: 800, color: '#ffffff' }}>{info.leaders.governor.name}</div>
                  <div style={{ fontSize: '0.72rem', color: '#94a3b8', marginTop: '2px' }}>{info.leaders.governor.jurusan} &bull; {info.leaders.governor.angkatan}</div>
                </div>
              </div>

              <div
                style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: 'var(--bg-dark-card)', border: '2px solid #3b82f6', borderRadius: '16px', padding: '1.25rem 2rem', boxShadow: 'var(--shadow-card-dark)', minWidth: '280px', cursor: 'pointer' }}
                onClick={() => handleMemberClick(info.leaders.viceGovernor)}
              >
                <div style={{ width: '60px', height: '60px', borderRadius: '50%', overflow: 'hidden', border: '2px solid #60a5fa', flexShrink: 0, background: '#050811' }}>
                  <img src={resolveAsset(info.leaders.viceGovernor.image)} alt={info.leaders.viceGovernor.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#60a5fa', fontWeight: 700, textTransform: 'uppercase' }}>Wakil Gubernur</div>
                  <div style={{ fontSize: '1.15rem', fontWeight: 800, color: '#ffffff' }}>{info.leaders.viceGovernor.name}</div>
                  <div style={{ fontSize: '0.72rem', color: '#94a3b8', marginTop: '2px' }}>{info.leaders.viceGovernor.jurusan} &bull; {info.leaders.viceGovernor.angkatan}</div>
                </div>
              </div>
            </div>

            {/* Connector Line Down */}
            <div style={{ width: '2px', height: '32px', background: 'linear-gradient(180deg, #3b82f6, #60a5fa)' }}></div>

            {/* Middle: Secretariat & Finance */}
            <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <div
                style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', background: 'rgba(16,26,51,0.9)', border: '1px solid var(--border-dark)', borderRadius: '12px', padding: '1rem 1.5rem', minWidth: '230px', cursor: 'pointer' }}
                onClick={() => handleMemberClick(info.leaders.secretariat)}
              >
                <div style={{ width: '46px', height: '46px', borderRadius: '50%', overflow: 'hidden', border: '1px solid #60a5fa', background: '#050811' }}>
                  <img src={resolveAsset(info.leaders.secretariat.image)} alt={info.leaders.secretariat.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div>
                  <div style={{ fontSize: '0.72rem', color: '#94a3b8', textTransform: 'uppercase' }}>Sekretariat</div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#ffffff' }}>{info.leaders.secretariat.name}</div>
                  <div style={{ fontSize: '0.7rem', color: '#60a5fa' }}>{info.leaders.secretariat?.title || "Sekretaris Daerah"}</div>
                </div>
              </div>

              <div
                style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', background: 'rgba(16,26,51,0.9)', border: '1px solid var(--border-dark)', borderRadius: '12px', padding: '1rem 1.5rem', minWidth: '230px', cursor: 'pointer' }}
                onClick={() => handleMemberClick(info.leaders.finance)}
              >
                <div style={{ width: '46px', height: '46px', borderRadius: '50%', overflow: 'hidden', border: '1px solid #60a5fa', background: '#050811' }}>
                  <img src={resolveAsset(info.leaders.finance.image)} alt={info.leaders.finance.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div>
                  <div style={{ fontSize: '0.72rem', color: '#94a3b8', textTransform: 'uppercase' }}>Keuangan</div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#ffffff' }}>{info.leaders.finance.name}</div>
                  <div style={{ fontSize: '0.7rem', color: '#60a5fa' }}>{info.leaders.finance?.title || "Bendahara Daerah"}</div>
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
                    key={d.id}
                    className="org-node-card"
                    data-slug={d.slug}
                    style={{
                      background: 'var(--bg-dark-card)',
                      border: '1px solid var(--border-dark)',
                      borderRadius: '12px',
                      padding: '1.25rem 1rem',
                      textAlign: 'center',
                      cursor: 'pointer',
                      transition: 'all var(--transition-fast)'
                    }}
                    onClick={() => handleDeptClick(d.slug)}
                  >
                    <div style={{ width: '48px', height: '48px', margin: '0 auto 0.75rem', borderRadius: '10px', background: 'rgba(255,255,255,0.03)', padding: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <img src={resolveAsset(d.logo)} alt={d.name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
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

      {/* SEKSI INTERAKTIF: HIMPUNAN & UKM DI LINGKUNGAN FTI */}
      <section className="section section-dark-alt" id="ormawa-fti">
        <div className="container">
          <div className="section-header">
            <div className="section-tag">Keluarga Mahasiswa FTI</div>
            <h2 className="section-title">Himpunan & UKM di FTI UNAND</h2>
            <p className="section-subtitle">
              Sinergi 3 Himpunan Mahasiswa Jurusan dan 3 Unit Kegiatan Mahasiswa. Klik pada kartu Himpunan atau UKM untuk melihat profil lengkap, naungan jurusan, visi, misi, dan sosial media.
            </p>
            <div className="section-divider"></div>
          </div>

          {/* Filter Tabs */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
            <button
              className={`pill-btn ${ormawaFilter === 'all' ? 'active' : ''}`}
              type="button"
              onClick={() => setOrmawaFilter('all')}
            >
              Semua Lembaga (6)
            </button>
            <button
              className={`pill-btn ${ormawaFilter === 'Himpunan' ? 'active' : ''}`}
              type="button"
              onClick={() => setOrmawaFilter('Himpunan')}
            >
              3 Himpunan Mahasiswa
            </button>
            <button
              className={`pill-btn ${ormawaFilter === 'UKM' ? 'active' : ''}`}
              type="button"
              onClick={() => setOrmawaFilter('UKM')}
            >
              3 UKM FTI
            </button>
          </div>

          {/* Ormawa Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {filteredOrmawa.map(o => (
              <div
                key={o.id}
                style={{
                  background: 'var(--bg-dark-card)',
                  border: '1px solid var(--border-dark)',
                  borderRadius: '16px',
                  padding: '1.75rem 1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease'
                }}
                className="ormawa-interactive-card"
                onClick={() => handleOrmawaClick(o)}
              >
                <div style={{ width: '72px', height: '72px', borderRadius: '16px', background: 'rgba(7,12,24,0.6)', border: '1px solid rgba(175,203,238,0.2)', padding: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem', boxShadow: '0 6px 16px rgba(0,0,0,0.3)' }}>
                  <img src={resolveAsset(o.logo)} alt={o.name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                </div>
                <span className="badge" style={{ fontSize: '0.72rem', background: 'rgba(59,130,246,0.18)', color: '#60a5fa', marginBottom: '0.5rem' }}>{o.type}</span>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.35rem' }}>{o.shortName}</h3>
                <div style={{ fontSize: '0.78rem', color: '#94a3b8', marginBottom: '1rem', lineHeight: 1.4 }}>{o.scope}</div>
                <p style={{ fontSize: '0.85rem', color: '#cbd5e1', lineHeight: 1.6, marginBottom: '1.25rem', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                  {o.description}
                </p>
                <div style={{ marginTop: 'auto', width: '100%' }}>
                  <button className="btn btn-outline btn-sm" style={{ width: '100%' }} type="button">
                    <span>Lihat Profil & Visi Misi</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Member Modal */}
      <MemberModalVismayakriya
        member={selectedMember}
        isOpen={memberModalOpen}
        onClose={() => {
          setMemberModalOpen(false);
          setSelectedMember(null);
        }}
      />
    </div>
  );
}

