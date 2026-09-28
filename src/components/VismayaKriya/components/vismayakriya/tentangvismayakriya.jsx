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
      <section className="section section-dark" style={{ paddingTop: '7rem', paddingBottom: '3.5rem', background: 'linear-gradient(180deg, #eff6ff 0%, #ffffff 100%)' }}>
        <div className="container text-center" style={{ textAlign: 'center' }}>
          <div className="section-tag">Mengenal Lebih Dekat</div>
          <h1 className="section-title" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', color: '#0f172a' }}>Tentang {info.cabinet}</h1>
          <p className="section-subtitle" style={{ color: '#334155' }}>
            Merajut potensi mahasiswa, menghidupkan percikan inspirasi, dan menakhodai transformasi Fakultas Teknologi Informasi Universitas Andalas.
          </p>
          <div className="section-divider"></div>
        </div>
      </section>

      {/* PROFIL & FILOSOFI LOGO */}
      <section className="section section-dark-alt" style={{ background: '#f8fafc' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3.5rem', alignItems: 'center' }}>
            {/* Logo Visual Showcase */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
              <div style={{ width: '280px', height: '280px', borderRadius: '50%', background: '#ffffff', border: '2px solid #2563eb', padding: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 30px rgba(37, 99, 235, 0.15)', position: 'relative', zIndex: 2 }}>
                <img src={resolveAsset(info.logo)} alt="Logo Vismayakriya" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
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
              <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#0f172a', marginBottom: '1.25rem', lineHeight: 1.2 }}>
                {info.philosophy?.title || "Simpul Pertemuan, Percikan Perubahan"}
              </h2>
              <p style={{ color: '#334155', fontSize: '1rem', lineHeight: 1.8, marginBottom: '1.5rem', fontWeight: 500 }}>
                {info.philosophy?.concept}
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {info.philosophy?.symbolism?.map((sym, idx) => (
                  <div key={idx} style={{ padding: '1rem 1.25rem', background: 'rgba(240, 246, 255, 0.85)', backdropFilter: 'blur(12px)', borderLeft: '4px solid #2563eb', borderRadius: '0 10px 10px 0', borderTop: '1px solid rgba(59,130,246,0.2)', borderRight: '1px solid rgba(59,130,246,0.2)', borderBottom: '1px solid rgba(59,130,246,0.2)' }}>
                    <div style={{ fontWeight: 800, color: '#0f172a', fontSize: '0.95rem', marginBottom: '0.25rem' }}>{sym.element}</div>
                    <div style={{ fontSize: '0.88rem', color: '#334155', lineHeight: 1.5, fontWeight: 500 }}>{sym.meaning}</div>
                  </div>
                )) || null}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VISI KABINET */}
      <section className="section section-dark" style={{ background: '#ffffff' }}>
        <div className="container">
          <div style={{ maxWidth: '920px', margin: '0 auto', textAlign: 'center', background: 'rgba(240, 246, 255, 0.85)', backdropFilter: 'blur(12px)', border: '1px solid rgba(59,130,246,0.25)', borderRadius: 'var(--radius-xl)', padding: '3.5rem 2.5rem', boxShadow: '0 8px 30px rgba(37,99,235,0.06)', position: 'relative', overflow: 'hidden' }}>
            <div className="section-tag" style={{ marginBottom: '1.25rem' }}>Visi Besar</div>
            <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#0f172a', marginBottom: '1.5rem' }}>VISI KABINET</h2>
            <blockquote style={{ fontFamily: 'var(--font-editorial)', fontSize: 'clamp(1.2rem, 2.5vw, 1.65rem)', color: '#1e3a8a', lineHeight: 1.6, fontStyle: 'italic', fontWeight: 600, position: 'relative' }}>
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
                style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: 'rgba(240, 246, 255, 0.85)', backdropFilter: 'blur(12px)', border: '2px solid #3b82f6', borderRadius: '16px', padding: '1.25rem 2rem', boxShadow: '0 4px 16px rgba(37, 99, 235, 0.08)', minWidth: '280px', cursor: 'pointer' }}
                onClick={() => handleMemberClick(info.leaders.governor)}
              >
                <div style={{ width: '60px', height: '60px', borderRadius: '50%', overflow: 'hidden', border: '2px solid #3b82f6', flexShrink: 0, background: '#eff6ff' }}>
                  <img src={resolveAsset(info.leaders.governor.image)} alt={info.leaders.governor.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#2563eb', fontWeight: 800, textTransform: 'uppercase' }}>Gubernur Mahasiswa</div>
                  <div style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0f172a' }}>{info.leaders.governor.name}</div>
                  <div style={{ fontSize: '0.72rem', color: '#334155', fontWeight: 600, marginTop: '2px' }}>{info.leaders.governor.jurusan} &bull; {info.leaders.governor.angkatan}</div>
                </div>
              </div>

              <div
                style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: 'rgba(240, 246, 255, 0.85)', backdropFilter: 'blur(12px)', border: '2px solid #3b82f6', borderRadius: '16px', padding: '1.25rem 2rem', boxShadow: '0 4px 16px rgba(37, 99, 235, 0.08)', minWidth: '280px', cursor: 'pointer' }}
                onClick={() => handleMemberClick(info.leaders.viceGovernor)}
              >
                <div style={{ width: '60px', height: '60px', borderRadius: '50%', overflow: 'hidden', border: '2px solid #3b82f6', flexShrink: 0, background: '#eff6ff' }}>
                  <img src={resolveAsset(info.leaders.viceGovernor.image)} alt={info.leaders.viceGovernor.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#2563eb', fontWeight: 800, textTransform: 'uppercase' }}>Wakil Gubernur</div>
                  <div style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0f172a' }}>{info.leaders.viceGovernor.name}</div>
                  <div style={{ fontSize: '0.72rem', color: '#334155', fontWeight: 600, marginTop: '2px' }}>{info.leaders.viceGovernor.jurusan} &bull; {info.leaders.viceGovernor.angkatan}</div>
                </div>
              </div>
            </div>

            {/* Connector Line Down */}
            <div style={{ width: '2px', height: '32px', background: 'linear-gradient(180deg, #3b82f6, #60a5fa)' }}></div>

            {/* Middle: Secretariat & Finance */}
            <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <div
                style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: 'rgba(240, 246, 255, 0.85)', backdropFilter: 'blur(12px)', border: '2px solid #3b82f6', borderRadius: '16px', padding: '1.25rem 2rem', boxShadow: '0 4px 16px rgba(37, 99, 235, 0.08)', minWidth: '280px', cursor: 'pointer' }}
                onClick={() => handleMemberClick(info.leaders.secretariat)}
              >
                <div style={{ width: '60px', height: '60px', borderRadius: '50%', overflow: 'hidden', border: '2px solid #3b82f6', flexShrink: 0, background: '#eff6ff' }}>
                  <img src={resolveAsset(info.leaders.secretariat.image)} alt={info.leaders.secretariat.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#2563eb', fontWeight: 800, textTransform: 'uppercase' }}>Sekretariat</div>
                  <div style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0f172a' }}>{info.leaders.secretariat.name}</div>
                  <div style={{ fontSize: '0.72rem', color: '#334155', fontWeight: 600, marginTop: '2px' }}>{info.leaders.secretariat?.title || "Sekretaris Daerah"}</div>
                </div>
              </div>

              <div
                style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: 'rgba(240, 246, 255, 0.85)', backdropFilter: 'blur(12px)', border: '2px solid #3b82f6', borderRadius: '16px', padding: '1.25rem 2rem', boxShadow: '0 4px 16px rgba(37, 99, 235, 0.08)', minWidth: '280px', cursor: 'pointer' }}
                onClick={() => handleMemberClick(info.leaders.finance)}
              >
                <div style={{ width: '60px', height: '60px', borderRadius: '50%', overflow: 'hidden', border: '2px solid #3b82f6', flexShrink: 0, background: '#eff6ff' }}>
                  <img src={resolveAsset(info.leaders.finance.image)} alt={info.leaders.finance.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#2563eb', fontWeight: 800, textTransform: 'uppercase' }}>Keuangan</div>
                  <div style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0f172a' }}>{info.leaders.finance.name}</div>
                  <div style={{ fontSize: '0.72rem', color: '#334155', fontWeight: 600, marginTop: '2px' }}>{info.leaders.finance?.title || "Bendahara Daerah"}</div>
                </div>
              </div>
            </div>

            {/* Connector Line Down */}
            <div style={{ width: '2px', height: '32px', background: 'linear-gradient(180deg, #60a5fa, #1e3158)' }}></div>

            {/* Grid: 10 Dinas & Biro */}
            <div style={{ width: '100%', marginTop: '1rem' }}>
              <div style={{ textAlign: 'center', marginBottom: '1.5rem', fontSize: '0.85rem', color: '#2563eb', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                Jajaran Pelaksana: 8 Dinas &bull; 2 Biro
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '1rem' }}>
                {departmentsData.map(d => (
                  <div
                    key={d.id}
                    className="org-node-card"
                    data-slug={d.slug}
                    style={{
                      background: 'rgba(240, 246, 255, 0.85)',
                      backdropFilter: 'blur(12px)',
                      border: '1.5px solid #3b82f6',
                      borderRadius: '12px',
                      padding: '1.25rem 1rem',
                      textAlign: 'center',
                      cursor: 'pointer',
                      boxShadow: '0 4px 12px rgba(37, 99, 235, 0.06)',
                      transition: 'all var(--transition-fast)'
                    }}
                    onClick={() => handleDeptClick(d.slug)}
                  >
                    <div style={{ width: '52px', height: '52px', margin: '0 auto 0.75rem', borderRadius: '12px', background: '#ffffff', border: '1.5px solid #3b82f6', padding: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px rgba(37, 99, 235, 0.1)' }}>
                      <img src={resolveAsset(d.logo)} alt={d.name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                    </div>
                    <span className="badge" style={{ fontSize: '0.7rem', background: 'rgba(37, 99, 235, 0.12)', color: '#2563eb', fontWeight: 800, marginBottom: '0.35rem' }}>{d.type}</span>
                    <div style={{ fontWeight: 800, color: '#0f172a', fontSize: '0.95rem' }}>{d.shortName}</div>
                    <div style={{ fontSize: '0.75rem', color: '#334155', fontWeight: 600, marginTop: '0.25rem' }}>{d.headName}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEKSI INTERAKTIF: HIMPUNAN & UKM DI LINGKUNGAN FTI */}
      <section className="section section-dark-alt" id="ormawa-fti" style={{ background: '#f8fafc' }}>
        <div className="container">
          <div className="section-header">
            <div className="section-tag">Keluarga Mahasiswa FTI</div>
            <h2 className="section-title" style={{ color: '#0f172a' }}>Himpunan & UKM di FTI UNAND</h2>
            <p className="section-subtitle" style={{ color: '#334155' }}>
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
                  background: 'rgba(240, 246, 255, 0.85)',
                  backdropFilter: 'blur(12px)',
                  border: '2px solid #3b82f6',
                  borderRadius: '16px',
                  padding: '1.75rem 1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  cursor: 'pointer',
                  boxShadow: '0 4px 16px rgba(37, 99, 235, 0.08)',
                  transition: 'all 0.25s ease'
                }}
                className="ormawa-interactive-card"
                onClick={() => handleOrmawaClick(o)}
              >
                <div style={{ width: '72px', height: '72px', borderRadius: '16px', background: '#ffffff', border: '2px solid #3b82f6', padding: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem', boxShadow: '0 4px 12px rgba(37, 99, 235, 0.12)' }}>
                  <img src={resolveAsset(o.logo)} alt={o.name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                </div>
                <span className="badge" style={{ fontSize: '0.72rem', background: 'rgba(37, 99, 235, 0.12)', color: '#2563eb', fontWeight: 800, marginBottom: '0.5rem', padding: '0.3rem 0.8rem', borderRadius: '20px' }}>{o.type}</span>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.35rem' }}>{o.shortName}</h3>
                <div style={{ fontSize: '0.82rem', color: '#2563eb', fontWeight: 700, marginBottom: '1rem', lineHeight: 1.4 }}>{o.scope}</div>
                <p style={{ fontSize: '0.88rem', color: '#334155', fontWeight: 500, lineHeight: 1.6, marginBottom: '1.25rem', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                  {o.description}
                </p>
                <div style={{ marginTop: 'auto', width: '100%' }}>
                  <button
                    className="btn btn-sm"
                    style={{
                      width: '100%',
                      background: '#2563eb',
                      color: '#ffffff',
                      border: 'none',
                      borderRadius: '10px',
                      padding: '0.65rem 1rem',
                      fontWeight: 700,
                      fontSize: '0.85rem',
                      cursor: 'pointer',
                      boxShadow: '0 2px 8px rgba(37, 99, 235, 0.25)'
                    }}
                    type="button"
                  >
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

