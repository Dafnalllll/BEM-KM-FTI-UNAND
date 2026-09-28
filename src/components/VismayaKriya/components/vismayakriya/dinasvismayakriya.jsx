import React, { useState, useEffect, useMemo } from 'react';
import { api } from './utils/api.js';
import { DepartmentModalVismayakriya } from './modals/departmentmodalvismayakriya.jsx';
import { scrollToTop, resolveAsset } from './utils/helpers.js';

export function DinasVismayakriya({ initialSlug, onClearInitialSlug }) {
  const [departments, setDepartments] = useState([]);
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedDept, setSelectedDept] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    async function loadDepts() {
      const data = await api.getDepartments();
      setDepartments(data);
    }
    loadDepts();
  }, []);

  useEffect(() => {
    if (initialSlug) {
      api.getDepartmentBySlug(initialSlug).then(dept => {
        if (dept) {
          setSelectedDept(dept);
          setModalOpen(true);
          scrollToTop();
        }
      }).catch(console.error);
    }
  }, [initialSlug]);

  const filteredDepts = useMemo(() => {
    if (activeFilter === 'all') return departments;
    return departments.filter(d => d.type === activeFilter);
  }, [departments, activeFilter]);

  const handleOpenDeptModal = async (slug) => {
    try {
      const dept = await api.getDepartmentBySlug(slug);
      setSelectedDept(dept);
      setModalOpen(true);
      scrollToTop();
    } catch (err) {
      console.error(err);
    }
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedDept(null);
    if (onClearInitialSlug) onClearInitialSlug();
    scrollToTop();
  };

  if (modalOpen && selectedDept) {
    return (
      <DepartmentModalVismayakriya
        dept={selectedDept}
        isOpen={true}
        onClose={handleCloseModal}
      />
    );
  }

  return (
    <div className="departments-page">
      {/* Sub-Hero Banner */}
      <section className="section section-dark" style={{ paddingTop: '7rem', paddingBottom: '3.5rem', background: 'linear-gradient(180deg, #eff6ff 0%, #ffffff 100%)' }}>
        <div className="container text-center" style={{ textAlign: 'center' }}>
          <div className="section-tag">Struktur Pelaksana</div>
          <h1 className="section-title" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', color: '#0f172a' }}>Dinas & Biro Kabinet</h1>
          <p className="section-subtitle" style={{ color: '#334155' }}>
            Mengenal 8 Dinas dan 2 Biro yang mendedikasikan energi, keahlian, dan komitmen bagi kemaslahatan Keluarga Mahasiswa Fakultas Teknologi Informasi.
          </p>
          <div className="section-divider"></div>
        </div>
      </section>

      {/* CATALOG SECTION */}
      <section className="section section-dark-alt">
        <div className="container">
          {/* Filter Tabs */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
            <button
              className={`pill-btn ${activeFilter === 'all' ? 'active' : ''} dept-filter-btn`}
              data-type="all"
              type="button"
              onClick={() => setActiveFilter('all')}
            >
              Semua Entitas (10)
            </button>
            <button
              className={`pill-btn ${activeFilter === 'Dinas' ? 'active' : ''} dept-filter-btn`}
              data-type="Dinas"
              type="button"
              onClick={() => setActiveFilter('Dinas')}
            >
              8 Dinas
            </button>
            <button
              className={`pill-btn ${activeFilter === 'Biro' ? 'active' : ''} dept-filter-btn`}
              data-type="Biro"
              type="button"
              onClick={() => setActiveFilter('Biro')}
            >
              2 Biro
            </button>
          </div>

          {/* Departments Grid */}
          <div className="departments-grid" id="depts-grid-container">
            {filteredDepts.map(d => (
              <div
                key={d.id}
                className="dept-card"
                data-slug={d.slug}
                data-type={d.type}
                onClick={() => handleOpenDeptModal(d.slug)}
              >
                <div className="dept-header">
                  <div className="dept-logo-wrap">
                    <img src={resolveAsset(d.logo)} alt={d.name} className="dept-logo" loading="lazy" />
                  </div>
                  <div className="dept-identity">
                    <span className="dept-type">{d.type}</span>
                    <h3 className="dept-acronym">{d.shortName}</h3>
                  </div>
                </div>

                <div className="dept-name">{d.name}</div>
                <p className="dept-desc">{d.summary}</p>

                <div className="dept-meta-footer">
                  <div className="dept-head-info">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                    <span>{d.headName}</span>
                  </div>
                  <div>
                    <span style={{ color: '#60a5fa', fontWeight: 600 }}>{d.staffCount} Staf</span>
                  </div>
                </div>

                <div style={{ marginTop: '1.25rem' }}>
                  <button
                    className="btn btn-outline btn-sm view-dept-detail-btn"
                    style={{ width: '100%' }}
                    data-slug={d.slug}
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleOpenDeptModal(d.slug);
                    }}
                  >
                    <span>Lihat Profil & Staf</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

