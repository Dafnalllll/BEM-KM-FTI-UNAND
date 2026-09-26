import React, { useState, useEffect, useRef } from 'react';
import '../../../../syles/VismayaKriya/variables.css';
import '../../../../syles/VismayaKriya/base.css';
import '../../../../syles/VismayaKriya/layout.css';
import '../../../../syles/VismayaKriya/components.css';
import '../../../../syles/VismayaKriya/animations.css';
import '../../../../syles/VismayaKriya/responsive.css';

import { NavbarVismayakriya } from './navbarvismayakriya.jsx';
import { FooterVismayakriya } from './footervismayakriya.jsx';
import { TentangVismayakriya } from './tentangvismayakriya.jsx';
import { DinasVismayakriya } from './dinasvismayakriya.jsx';
import { ProkerVismayakriya } from './proker/prokervismayakriya.jsx';
import { GaleriVismayakriya } from './galeri/galerivismayakriya.jsx';
import { AspirasiVismayakriya } from './aspirasivismayakriya.jsx';
import { AspirationModalVismayakriya } from './modals/aspirationmodalvismayakriya.jsx';
import { ProgramModalVismayakriya } from './modals/programmodalvismayakriya.jsx';
import { NewsModalVismayakriya } from './modals/newsmodalvismayakriya.jsx';
import { MemberModalVismayakriya } from './modals/membermodalvismayakriya.jsx';
import { OrmawaModalVismayakriya } from './modals/ormawamodalvismayakriya.jsx';

import { cabinetInfo } from '../../../../data/VismayaKriya/organization.js';
import { ormawaData } from '../../../../data/VismayaKriya/ormawa.js';
import { api } from './utils/api.js';
import { initCosmicParticles } from './utils/particles.js';
import { getStatusBadgeClass, scrollToTop, resolveAsset } from './utils/helpers.js';

export default function Vismayakriya({ initialPath = '/' }) {
  const [activeTab, setActiveTab] = useState('beranda');
  const [dinasSlug, setDinasSlug] = useState(null);
  const [prokerId, setProkerId] = useState(null);

  // Global Aspirasi Modal state
  const [aspirationModalOpen, setAspirationModalOpen] = useState(false);

  // Home Page State
  const [info, setInfo] = useState(cabinetInfo);
  const [featuredProker, setFeaturedProker] = useState([]);
  const [newsList, setNewsList] = useState([]);

  // Modals
  const [selectedProker, setSelectedProker] = useState(null);
  const [prokerModalOpen, setProkerModalOpen] = useState(false);

  const [selectedNews, setSelectedNews] = useState(null);
  const [newsModalOpen, setNewsModalOpen] = useState(false);

  const [selectedMember, setSelectedMember] = useState(null);
  const [memberModalOpen, setMemberModalOpen] = useState(false);

  const [selectedOrmawa, setSelectedOrmawa] = useState(null);
  const [ormawaModalOpen, setOrmawaModalOpen] = useState(false);

  const heroCanvasRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    if (initialPath === '/tentang') setActiveTab('tentang');
    else if (initialPath.startsWith('/dinas')) setActiveTab('dinas');
    else if (initialPath.startsWith('/program-kerja')) setActiveTab('program-kerja');
    else if (initialPath.startsWith('/galeri')) setActiveTab('galeri');
    else if (initialPath.startsWith('/aspirasi')) setActiveTab('aspirasi');
    else setActiveTab('beranda');
  }, [initialPath]);

  // Load Home Data
  useEffect(() => {
    async function loadHomeData() {
      const infoData = await api.getCabinetInfo();
      setInfo(infoData);
      const allProker = await api.getPrograms();
      setFeaturedProker(allProker.filter(p => p.featured).slice(0, 4));
      const newsData = await api.getNews();
      setNewsList(newsData.slice(0, 3));
    }
    loadHomeData();
  }, []);

  // Hero Canvas Particles Hook
  useEffect(() => {
    if (activeTab === 'beranda' && heroCanvasRef.current) {
      const instance = initCosmicParticles(heroCanvasRef.current);
      return () => {
        if (instance && instance.destroy) instance.destroy();
      };
    }
  }, [activeTab]);

  // Animated Counter for Stats
  useEffect(() => {
    if (activeTab === 'beranda' && statsRef.current) {
      let animated = false;
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !animated) {
            animated = true;
            const counters = statsRef.current.querySelectorAll('.counter-value');
            counters.forEach(counter => {
              const target = parseInt(counter.getAttribute('data-target'), 10) || 0;
              const duration = 1600;
              const startTime = performance.now();

              function updateCount(now) {
                const elapsed = now - startTime;
                const progress = Math.min(elapsed / duration, 1);
                const easeProgress = progress * (2 - progress);
                counter.textContent = Math.floor(easeProgress * target);

                if (progress < 1) {
                  requestAnimationFrame(updateCount);
                } else {
                  counter.textContent = target;
                }
              }

              requestAnimationFrame(updateCount);
            });
          }
        });
      }, { threshold: 0.3 });

      observer.observe(statsRef.current);
      return () => observer.disconnect();
    }
  }, [activeTab, info.stats]);

  const handleTabChange = (tab, slug = null) => {
    setActiveTab(tab);
    if (slug) {
      setDinasSlug(slug);
    } else {
      setDinasSlug(null);
    }
    scrollToTop();
  };

  const handleOpenProkerModal = async (id) => {
    try {
      const p = await api.getProgramById(id);
      setSelectedProker(p);
      setProkerModalOpen(true);
    } catch (e) {
      console.error(e);
    }
  };

  const handleOpenNewsModal = async (id) => {
    try {
      const n = await api.getNewsById(id);
      setSelectedNews(n);
      setNewsModalOpen(true);
    } catch (e) {
      console.error(e);
    }
  };

  const handleOpenMemberModal = (member) => {
    setSelectedMember(member);
    setMemberModalOpen(true);
  };

  const handleOpenOrmawaModalById = (id) => {
    const matched = ormawaData.find(o => o.id === id);
    if (matched) {
      setSelectedOrmawa(matched);
      setOrmawaModalOpen(true);
      scrollToTop();
    }
  };

  return (
    <div className="vismayakriya-page vismayakriya-app-root" style={{ background: '#050811', minHeight: '100vh', color: '#fff', width: '100%', overflowX: 'hidden' }}>
      <NavbarVismayakriya
        activeTab={activeTab}
        onTabChange={(tab, slug) => {
          if (ormawaModalOpen) {
            setOrmawaModalOpen(false);
            setSelectedOrmawa(null);
          }
          handleTabChange(tab, slug);
        }}
        onOpenAspirationModal={() => setAspirationModalOpen(true)}
        onOpenOrmawaModal={handleOpenOrmawaModalById}
      />

      <main id="page-content">
        {ormawaModalOpen && selectedOrmawa ? (
          <OrmawaModalVismayakriya
            ormawa={selectedOrmawa}
            isOpen={true}
            onClose={() => {
              setOrmawaModalOpen(false);
              setSelectedOrmawa(null);
              scrollToTop();
            }}
          />
        ) : (
          <>
            {activeTab === 'beranda' && (
              <div className="homepage">
                {/* HERO SECTION */}
                <section className="hero-section" id="hero" style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', backgroundColor: '#050811' }}>
                  {/* Canvas Star Particles */}
                  <canvas ref={heroCanvasRef} id="hero-particles" className="hero-canvas"></canvas>

                  {/* Background Image with Dark Navy Gradient Overlay */}
                  <div style={{ position: 'absolute', inset: 0, backgroundImage: `url('${info.heroTeamImage}')`, backgroundSize: 'cover', backgroundPosition: 'center top', filter: 'saturate(0.85)', opacity: 0.38 }}></div>
                  <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at center, rgba(11, 18, 36, 0.6) 0%, rgba(7, 12, 24, 0.95) 100%), linear-gradient(180deg, rgba(7, 12, 24, 0.4) 0%, #070c18 100%)' }}></div>

                  {/* Atmospheric Glows */}
                  <div className="cosmic-glow-blob glow-blue" style={{ width: '500px', height: '500px', top: '15%', left: '10%' }}></div>
                  <div className="cosmic-glow-blob glow-navy" style={{ width: '600px', height: '600px', bottom: '10%', right: '10%' }}></div>

                  {/* Hero Content */}
                  <div className="container" style={{ position: 'relative', zIndex: 10, textAlign: 'center', paddingTop: '6rem', paddingBottom: '4rem' }}>
                    {/* Official Cabinet Logo */}
                    <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '110px', height: '110px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(111,143,203,0.18) 0%, transparent 70%)', marginBottom: '1.5rem', filter: 'drop-shadow(0 0 20px rgba(56, 189, 248, 0.4))', animation: 'celestialFloat 6s ease-in-out infinite' }}>
                      <img src={info.logo} alt="Logo Kabinet Vismayakriya" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                    </div>

                    <div className="section-tag" style={{ marginBottom: '1.25rem' }}>
                      <span>FTI &bull; Universitas Andalas</span>
                    </div>

                    <h1 className="hero-title">
                      BEM KM FTI<br />
                      <span className="hero-title-gradient">
                        VISMAYAKRIYA
                      </span>
                    </h1>

                    <p className="hero-tagline">
                      "{info.tagline}"
                    </p>

                    {/* Dual Call to Action Buttons */}
                    <div className="hero-cta-group" style={{ display: 'flex', gap: '1.25rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                      <a
                        href="#quick-intro"
                        className="btn btn-primary btn-lg btn-glow"
                        id="hero-explore-btn"
                        onClick={(e) => {
                          e.preventDefault();
                          document.getElementById('quick-intro')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                      >
                        <span>Jelajahi Kabinet</span>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline></svg>
                      </a>
                      <a
                        href="#/tentang"
                        className="btn btn-secondary btn-lg"
                        onClick={(e) => {
                          e.preventDefault();
                          handleTabChange('tentang');
                        }}
                      >
                        <span>Kenali Kami</span>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                      </a>
                    </div>
                  </div>
                </section>

                {/* QUICK INTRODUCTION & 4 CORE VALUES */}
                <section className="section section-dark-alt" id="quick-intro">
                  <div className="container">
                    <div className="section-header">
                      <div className="section-tag">Nilai Pokok & Karakter</div>
                      <h2 className="section-title">Kabinet Vismayakriya</h2>
                      <p className="section-subtitle">
                        BEM KM FTI hadir sebagai episentrum kolaborasi, ruang bertukar aspirasi, pemantik inovasi teknologi, dan dedikasi kontribusi nyata bagi sivitas akademika Fakultas Teknologi Informasi Universitas Andalas.
                      </p>
                      <div className="section-divider"></div>
                    </div>

                    {/* 4 Core Values Cards */}
                    <div className="values-grid">
                      {info.values.map(val => (
                        <div key={val.key} className="value-card">
                          <div className="value-icon-box">
                            {val.key === 'inspirasi' ? (
                              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                            ) : val.key === 'kolaborasi' ? (
                              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg>
                            ) : val.key === 'inovasi' ? (
                              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>
                            ) : (
                              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
                            )}
                          </div>
                          <h3 className="value-title">{val.title}</h3>
                          <p className="value-desc">{val.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                {/* STATISTICS COUNTER SECTION */}
                <section className="section section-dark" style={{ padding: '2rem 0' }}>
                  <div className="container">
                    <div className="stats-container" id="stats-counter-section" ref={statsRef}>
                      {info.stats.map((s, idx) => (
                        <div key={idx} className="stat-item">
                          <div className="stat-number-wrap">
                            <span className="stat-number counter-value" data-target={s.number}>0</span>
                            <span className="stat-suffix">{s.suffix}</span>
                          </div>
                          <div className="stat-label">{s.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                {/* LEADERSHIP EDITORIAL SECTION (Gubernur & Wagub - Klik Buka Biodata) */}
                <section className="section section-dark-alt">
                  <div className="container">
                    <div className="section-header">
                      <div className="section-tag">PIMPINAN EKSEKUTIF</div>
                      <h2 className="section-title">Nakhoda Kabinet</h2>
                      <p className="section-subtitle">
                        Gubernur dan Wakil Gubernur Mahasiswa BEM KM FTI UNAND Periode 2025/2026.
                      </p>
                      <div className="section-divider"></div>
                    </div>

                    <div className="leadership-grid">
                      {/* Governor Card (Full Body Cutout Design) */}
                      <div className="leader-card-cutout" style={{ cursor: 'pointer' }} onClick={() => handleOpenMemberModal(info.leaders.governor)}>
                        <div className="leader-cutout-body">
                          <span className="badge badge-status-ongoing leader-badge" style={{ marginBottom: '0.75rem', alignSelf: 'flex-start' }}>{info.leaders.governor.term}</span>
                          <h3 className="leader-name">{info.leaders.governor.name}</h3>
                          <div className="leader-role">{info.leaders.governor.title} &bull; {info.leaders.governor.jurusan}</div>
                          <div className="leader-cutout-quote">"{info.leaders.governor.quote}"</div>
                          <p className="leader-cutout-msg">{info.leaders.governor.message}</p>
                        </div>

                        <div className="leader-cutout-footer">
                          <div className="leader-cutout-socials" onClick={(e) => e.stopPropagation()}>
                            <a href={info.leaders.governor.socials.instagram} target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="Instagram Gubernur">
                              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                              </svg>
                            </a>
                            <a href={info.leaders.governor.socials.linkedin} target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="LinkedIn Gubernur">
                              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                <rect x="2" y="9" width="4" height="12"></rect>
                                <circle cx="4" cy="4" r="2"></circle>
                              </svg>
                            </a>
                          </div>

                          <div className="leader-cutout-photo-wrap">
                            <img
                              src={info.leaders.governor.foto_fullbody || info.leaders.governor.image}
                              alt={info.leaders.governor.name}
                              className="leader-cutout-photo"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Vice Governor Card (Full Body Cutout Design) */}
                      <div className="leader-card-cutout" style={{ cursor: 'pointer' }} onClick={() => handleOpenMemberModal(info.leaders.viceGovernor)}>
                        <div className="leader-cutout-body">
                          <span className="badge badge-status-ongoing leader-badge" style={{ marginBottom: '0.75rem', alignSelf: 'flex-start' }}>{info.leaders.viceGovernor.term}</span>
                          <h3 className="leader-name">{info.leaders.viceGovernor.name}</h3>
                          <div className="leader-role">{info.leaders.viceGovernor.title} &bull; {info.leaders.viceGovernor.jurusan}</div>
                          <div className="leader-cutout-quote">"{info.leaders.viceGovernor.quote}"</div>
                          <p className="leader-cutout-msg">{info.leaders.viceGovernor.message}</p>
                        </div>

                        <div className="leader-cutout-footer">
                          <div className="leader-cutout-socials" onClick={(e) => e.stopPropagation()}>
                            <a href={info.leaders.viceGovernor.socials.instagram} target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="Instagram Wagub">
                              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                              </svg>
                            </a>
                            <a href={info.leaders.viceGovernor.socials.linkedin} target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="LinkedIn Wagub">
                              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                <rect x="2" y="9" width="4" height="12"></rect>
                                <circle cx="4" cy="4" r="2"></circle>
                              </svg>
                            </a>
                          </div>

                          <div className="leader-cutout-photo-wrap">
                            <img
                              src={info.leaders.viceGovernor.foto_fullbody || info.leaders.viceGovernor.image}
                              alt={info.leaders.viceGovernor.name}
                              className="leader-cutout-photo"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* FEATURED WORK PROGRAMS PREVIEW */}
                <section className="section section-dark">
                  <div className="container">
                    <div className="section-header">
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
                          data-id={p.id}
                          onClick={() => handleOpenProkerModal(p.id)}
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
                                Detail
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
                      <a
                        href="#/program-kerja"
                        className="btn btn-secondary btn-lg"
                        onClick={(e) => {
                          e.preventDefault();
                          handleTabChange('program-kerja');
                        }}
                      >
                        <span>Lihat Seluruh 40+ Program Kerja</span>
                      </a>
                    </div>
                  </div>
                </section>

                {/* LATEST NEWS & INFORMASI TERKINI */}
                <section className="section section-dark-alt">
                  <div className="container">
                    <div className="section-header">
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
                          data-id={n.id}
                          style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column' }}
                          onClick={() => handleOpenNewsModal(n.id)}
                        >
                          <div style={{ position: 'relative', width: '100%', height: '210px', overflow: 'hidden', background: '#050811' }}>
                            <img src={n.thumbnail} alt={n.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform var(--transition-smooth)' }} className="news-thumb" />
                            <span className="badge" style={{ position: 'absolute', top: '1rem', left: '1rem', background: 'rgba(11,18,36,0.85)', color: '#60a5fa', border: '1px solid rgba(96,165,250,0.3)' }}>
                              {n.category}
                            </span>
                          </div>
                          <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                            <div style={{ fontSize: '0.8rem', color: '#94a3b8', marginBottom: '0.5rem' }}>{n.date} &bull; {n.readTime}</div>
                            <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.75rem', lineHeight: 1.4 }}>{n.title}</h3>
                            <p style={{ fontSize: '0.875rem', color: '#cbd5e1', lineHeight: 1.6, marginBottom: '1.25rem', flexGrow: 1 }}>{n.excerpt}</p>
                            <div style={{ color: '#60a5fa', fontWeight: 600, fontSize: '0.875rem', display: 'flex', alignItems: 'center', gap: '4px' }}>
                              Baca Selengkapnya
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                {/* ASPIRASI MAHASISWA QUICK BANNER */}
                <section className="section section-dark" style={{ background: 'linear-gradient(180deg, #070c18 0%, #0b1224 100%)' }}>
                  <div className="container">
                    <div style={{ background: 'linear-gradient(135deg, rgba(22,36,69,0.9), rgba(16,26,51,0.95))', border: '1px solid var(--border-dark-hover)', borderRadius: 'var(--radius-xl)', padding: '3.5rem 2.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '2.5rem', flexWrap: 'wrap', boxShadow: 'var(--shadow-card-dark), var(--glow-subtle)' }}>
                      <div style={{ maxWidth: '600px' }}>
                        <span className="badge badge-status-ongoing" style={{ marginBottom: '0.75rem' }}>Ruang Aspirasi Mahasiswa</span>
                        <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#ffffff', lineHeight: 1.2, marginBottom: '0.75rem' }}>Punya Aspirasi atau Keluhan Perkuliahan?</h2>
                        <p style={{ color: '#cbd5e1', fontSize: '0.95rem', lineHeight: 1.7 }}>
                          BEM KM FTI menyediakan kanal terbuka dan aman untuk mendengar aspirasimu. Kamu dapat memilih untuk mengirimkannya secara anonim. Mari bersama kita wujudkan kampus yang lebih baik.
                        </p>
                      </div>
                      <div>
                        <button
                          className="btn btn-primary btn-lg btn-glow"
                          id="cta-open-aspirasi-btn"
                          type="button"
                          onClick={() => setAspirationModalOpen(true)}
                        >
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                          <span>Sampaikan Aspirasimu Sekarang</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </section>

                {/* ORMAWA PARTNERS SHOWCASE (Klik Membuka Modal Detail Ormawa) */}
                <section className="section section-dark-alt" style={{ padding: '3.5rem 0', borderTop: '1px solid var(--border-dark)' }}>
                  <div className="container" style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '0.8125rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em', color: '#94a3b8', marginBottom: '2rem' }}>
                      Sinergi Lembaga Kemahasiswaan Fakultas Teknologi Informasi (Klik logo untuk profil)
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '3rem', flexWrap: 'wrap', opacity: 0.9 }}>
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }} title="Himpunan Mahasiswa Informatika" onClick={() => handleOpenOrmawaModalById('hmif')}>
                        <img src={resolveAsset('/vismayakriya/himpunan/hmif.webp')} alt="HMIF UNAND" style={{ height: '48px', objectFit: 'contain' }} />
                        <span style={{ fontSize: '0.75rem', color: '#60a5fa', fontWeight: 600 }}>HMIF</span>
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }} title="Himpunan Mahasiswa Sistem Informasi" onClick={() => handleOpenOrmawaModalById('hmsi')}>
                        <img src={resolveAsset('/vismayakriya/himpunan/hmsi.webp')} alt="HMSI UNAND" style={{ height: '48px', objectFit: 'contain' }} />
                        <span style={{ fontSize: '0.75rem', color: '#60a5fa', fontWeight: 600 }}>HMSI</span>
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }} title="Himpunan Mahasiswa Teknik Komputer" onClick={() => handleOpenOrmawaModalById('himatekom')}>
                        <img src={resolveAsset('/vismayakriya/himpunan/himatekom.webp')} alt="HIMATEKOM UNAND" style={{ height: '48px', objectFit: 'contain' }} />
                        <span style={{ fontSize: '0.75rem', color: '#60a5fa', fontWeight: 600 }}>HIMATEKOM</span>
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }} title="Dewan Perwakilan Mahasiswa FTI" onClick={() => handleOpenOrmawaModalById('dpm')}>
                        <img src={resolveAsset('/vismayakriya/ukm/dpm.webp')} alt="DPM FTI" style={{ height: '48px', objectFit: 'contain' }} />
                        <span style={{ fontSize: '0.75rem', color: '#60a5fa', fontWeight: 600 }}>DPM FTI</span>
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }} title="Forum Studi Islam FTI" onClick={() => handleOpenOrmawaModalById('fsi')}>
                        <img src={resolveAsset('/vismayakriya/ukm/fsi.webp')} alt="FSI FTI" style={{ height: '48px', objectFit: 'contain' }} />
                        <span style={{ fontSize: '0.75rem', color: '#60a5fa', fontWeight: 600 }}>FSI FTI</span>
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }} title="Unit Kegiatan Olahraga & Seni FTI" onClick={() => handleOpenOrmawaModalById('ukos')}>
                        <img src={resolveAsset('/vismayakriya/ukm/ukos.webp')} alt="UKOS FTI" style={{ height: '48px', objectFit: 'contain' }} />
                        <span style={{ fontSize: '0.75rem', color: '#60a5fa', fontWeight: 600 }}>UKOS FTI</span>
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }} title="Tectona FTI" onClick={() => handleOpenOrmawaModalById('tectona')}>
                        <img src={resolveAsset('/vismayakriya/ukm/tectona.webp')} alt="TECTONA FTI" style={{ height: '48px', objectFit: 'contain' }} />
                        <span style={{ fontSize: '0.75rem', color: '#60a5fa', fontWeight: 600 }}>TECTONA</span>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            )}

            {activeTab === 'tentang' && <TentangVismayakriya />}

            {activeTab === 'dinas' && (
              <DinasVismayakriya
                initialSlug={dinasSlug}
                onClearInitialSlug={() => setDinasSlug(null)}
              />
            )}

            {activeTab === 'program-kerja' && (
              <ProkerVismayakriya
                initialProkerId={prokerId}
                onClearInitialProkerId={() => setProkerId(null)}
              />
            )}

            {activeTab === 'galeri' && <GaleriVismayakriya />}

            {activeTab === 'aspirasi' && <AspirasiVismayakriya />}
          </>
        )}
      </main>

      <FooterVismayakriya onTabChange={handleTabChange} />

      {/* Global Modals */}
      <AspirationModalVismayakriya
        isOpen={aspirationModalOpen}
        onClose={() => setAspirationModalOpen(false)}
      />

      <ProgramModalVismayakriya
        proker={selectedProker}
        isOpen={prokerModalOpen}
        onClose={() => {
          setProkerModalOpen(false);
          setSelectedProker(null);
        }}
      />

      <NewsModalVismayakriya
        article={selectedNews}
        isOpen={newsModalOpen}
        onClose={() => {
          setNewsModalOpen(false);
          setSelectedNews(null);
        }}
      />

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

