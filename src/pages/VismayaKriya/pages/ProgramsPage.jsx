import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../utils/api.js';
import { getStatusBadgeClass } from '../utils/helpers.js';

export function ProgramsPage() {
  const navigate = useNavigate();
  const [departmentsList, setDepartmentsList] = useState([]);
  const [programs, setPrograms] = useState([]);
  const [search, setSearch] = useState('');
  const [selectedDept, setSelectedDept] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    "all",
    "Pendidikan & Riset",
    "Teknologi",
    "Advokasi & Kesejahteraan",
    "Kewirausahaan",
    "Pengabdian Masyarakat",
    "Internal & Kelembagaan",
    "Kajian & Pergerakan",
    "Media & Komunikasi",
    "Administrasi"
  ];

  useEffect(() => {
    api.getDepartments().then(setDepartmentsList).catch(console.error);
  }, []);

  useEffect(() => {
    api.getPrograms({
      search,
      dept: selectedDept,
      status: selectedStatus,
      category: selectedCategory
    }).then(setPrograms).catch(console.error);
  }, [search, selectedDept, selectedStatus, selectedCategory]);

  return (
    <div className="programs-page">
      {/* Sub-Hero Banner */}
      <section className="section section-dark" style={{ paddingTop: '7rem', paddingBottom: '3.5rem', background: 'radial-gradient(circle at top, #101a33 0%, #070c18 100%)' }}>
        <div className="container text-center" style={{ textAlign: 'center' }}>
          <div className="section-tag">Agenda & Realisasi</div>
          <h1 className="section-title" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)' }}>Program Kerja Kabinet</h1>
          <p className="section-subtitle">
            Eksplorasi seluruh inisiatif pergerakan, pengabdian, kompetisi, dan pelayanan BEM KM FTI Kabinet Nexus Inspirasi.
          </p>
          <div className="section-divider"></div>
        </div>
      </section>

      {/* CATALOG & FILTER SECTION */}
      <section className="section section-dark-alt" style={{ padding: '5rem 0' }}>
        <div className="container">
          {/* Filter & Search Toolbar */}
          <div className="filter-bar">
            <div className="filter-top-row">
              <div className="search-input-wrap">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                <input
                  type="text"
                  className="search-input"
                  placeholder="Cari program kerja, kata kunci, atau tag..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>

              {/* Filter Dinas */}
              <select
                className="select-filter"
                value={selectedDept}
                onChange={(e) => setSelectedDept(e.target.value)}
              >
                <option value="all">Semua Dinas & Biro</option>
                {departmentsList.map(d => (
                  <option key={d.slug} value={d.slug}>{d.type} {d.shortName}</option>
                ))}
              </select>

              {/* Filter Status */}
              <select
                className="select-filter"
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
              >
                <option value="all">Semua Status</option>
                <option value="Selesai">Selesai (Terlaksana)</option>
                <option value="Sedang Berjalan">Sedang Berjalan</option>
                <option value="Akan Datang">Akan Datang</option>
              </select>
            </div>

            {/* Row 2: Category Pills */}
            <div className="filter-pills" id="proker-category-pills">
              {categories.map(c => (
                <button
                  key={c}
                  className={`pill-btn ${selectedCategory === c ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(c)}
                  type="button"
                >
                  {c === 'all' ? 'Semua Kategori' : c}
                </button>
              ))}
            </div>
          </div>

          {/* Active Filter & Counter Indicator */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', color: '#94a3b8', fontSize: '0.9rem' }}>
            <div>
              Menampilkan <span style={{ color: '#60a5fa', fontWeight: 700 }}>{programs.length}</span> program kerja
            </div>
          </div>

          {/* Programs Grid */}
          <div className="programs-grid">
            {programs.length === 0 ? (
              <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '4rem 1.5rem', background: 'rgba(16,26,51,0.5)', borderRadius: '16px', border: '1px dashed var(--border-dark)' }}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="1.5" style={{ margin: '0 auto 1rem' }}><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.5rem' }}>Tidak Ada Program yang Sesuai</h3>
                <p style={{ color: '#94a3b8', fontSize: '0.9rem', maxWidth: '420px', margin: '0 auto' }}>Silakan sesuaikan kata kunci pencarian atau ubah filter dinas dan kategori.</p>
              </div>
            ) : (
              programs.map(p => (
                <div
                  key={p.id}
                  className="proker-card"
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
                    
                    <div className="proker-tags">
                      {(p.tags || []).slice(0, 3).map((t, idx) => (
                        <span key={idx} className="tag-dept" style={{ fontSize: '0.7rem', padding: '0.15rem 0.45rem' }}>#{t}</span>
                      ))}
                    </div>

                    <div className="proker-footer">
                      <span>{p.date}</span>
                      <button className="btn btn-primary btn-sm" type="button">
                        <span>Detail</span>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
