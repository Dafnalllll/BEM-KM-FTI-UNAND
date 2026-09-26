import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { api } from '../utils/api.js';
import { DepartmentModal } from '../components/DepartmentModal.jsx';

export function DepartmentsPage() {
  const location = useLocation();
  const [depts, setDepts] = useState([]);
  const [filterType, setFilterType] = useState('all');
  const [selectedDept, setSelectedDept] = useState(null);

  useEffect(() => {
    api.getDepartments().then(data => {
      setDepts(data);
      
      // Query param slug check (e.g. /dinas?slug=ristek)
      const urlParams = new URLSearchParams(location.search);
      const slug = urlParams.get('slug');
      if (slug) {
        const found = data.find(d => d.slug.toLowerCase() === slug.toLowerCase());
        if (found) setSelectedDept(found);
      }
    }).catch(console.error);
  }, [location.search]);

  const filteredDepts = depts.filter(d => filterType === 'all' || d.type === filterType);

  return (
    <div className="departments-page">
      {/* Sub-Hero Banner */}
      <section className="section section-dark" style={{ paddingTop: '7rem', paddingBottom: '3.5rem', background: 'radial-gradient(circle at top, #101a33 0%, #070c18 100%)' }}>
        <div className="container text-center" style={{ textAlign: 'center' }}>
          <div className="section-tag">Struktur Pelaksana</div>
          <h1 className="section-title" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)' }}>Dinas & Biro Kabinet</h1>
          <p className="section-subtitle">
            Mengenal 9 Dinas dan 1 Biro yang mendedikasikan energi, keahlian, dan komitmen bagi kemaslahatan Keluarga Mahasiswa Fakultas Teknologi Informasi.
          </p>
          <div className="section-divider"></div>
        </div>
      </section>

      {/* CATALOG SECTION */}
      <section className="section section-dark-alt" style={{ padding: '5rem 0' }}>
        <div className="container">
          {/* Filter Tabs */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
            <button
              className={`pill-btn ${filterType === 'all' ? 'active' : ''}`}
              onClick={() => setFilterType('all')}
              type="button"
            >
              Semua Entitas (10)
            </button>
            <button
              className={`pill-btn ${filterType === 'Dinas' ? 'active' : ''}`}
              onClick={() => setFilterType('Dinas')}
              type="button"
            >
              9 Dinas
            </button>
            <button
              className={`pill-btn ${filterType === 'Biro' ? 'active' : ''}`}
              onClick={() => setFilterType('Biro')}
              type="button"
            >
              1 Biro
            </button>
          </div>

          {/* Departments Grid */}
          <div className="departments-grid" id="depts-grid-container">
            {filteredDepts.map(d => (
              <div
                key={d.slug}
                className="dept-card"
                data-slug={d.slug}
                data-type={d.type}
                onClick={() => setSelectedDept(d)}
                style={{ cursor: 'pointer' }}
              >
                <div className="dept-header">
                  <div className="dept-logo-wrap">
                    <img src={d.logo} alt={d.name} className="dept-logo" loading="lazy" />
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
                  <button className="btn btn-outline btn-sm view-dept-detail-btn" style={{ width: '100%' }} type="button">
                    <span>Lihat Profil & Staf</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Department Modal */}
      {selectedDept && (
        <DepartmentModal dept={selectedDept} onClose={() => setSelectedDept(null)} />
      )}
    </div>
  );
}

