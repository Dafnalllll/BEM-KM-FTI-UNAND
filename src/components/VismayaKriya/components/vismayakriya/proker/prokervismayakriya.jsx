import React, { useState, useEffect, useMemo } from 'react';
import { api } from '../utils/api.js';
import { departmentsData } from '../../../../../data/VismayaKriya/departments.js';
import { getStatusBadgeClass } from '../utils/helpers.js';
import { ProgramModalVismayakriya } from '../modals/programmodalvismayakriya.jsx';

export function ProkerVismayakriya({ initialProkerId, onClearInitialProkerId }) {
  const [allPrograms, setAllPrograms] = useState([]);
  const [search, setSearch] = useState('');
  const [dept, setDept] = useState('all');
  const [status, setStatus] = useState('all');
  const [category, setCategory] = useState('all');
  const [selectedProker, setSelectedProker] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

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
    async function loadPrograms() {
      const data = await api.getPrograms();
      setAllPrograms(data);
    }
    loadPrograms();
  }, []);

  useEffect(() => {
    if (initialProkerId) {
      api.getProgramById(initialProkerId).then(proker => {
        if (proker) {
          setSelectedProker(proker);
          setModalOpen(true);
        }
      }).catch(console.error);
    }
  }, [initialProkerId]);

  const filteredPrograms = useMemo(() => {
    let result = [...allPrograms];

    if (dept !== 'all') {
      result = result.filter(p => p.departmentSlug?.toLowerCase() === dept.toLowerCase());
    }
    if (category !== 'all') {
      result = result.filter(p => p.category?.toLowerCase() === category.toLowerCase());
    }
    if (status !== 'all') {
      result = result.filter(p => p.status?.toLowerCase() === status.toLowerCase());
    }
    if (search.trim() !== '') {
      const q = search.toLowerCase().trim();
      result = result.filter(p =>
        p.title?.toLowerCase().includes(q) ||
        p.description?.toLowerCase().includes(q) ||
        p.summary?.toLowerCase().includes(q) ||
        p.department?.toLowerCase().includes(q) ||
        p.tags?.some(tag => tag.toLowerCase().includes(q))
      );
    }
    return result;
  }, [allPrograms, search, dept, status, category]);

  const handleOpenProker = (proker) => {
    setSelectedProker(proker);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedProker(null);
    if (onClearInitialProkerId) onClearInitialProkerId();
  };

  return (
    <div className="programs-page">
      {/* Sub-Hero Banner */}
      <section className="section section-dark" style={{ paddingTop: '7rem', paddingBottom: '3.5rem', background: 'radial-gradient(circle at top, #101a33 0%, #070c18 100%)' }}>
        <div className="container text-center" style={{ textAlign: 'center' }}>
          <div className="section-tag">Agenda & Realisasi</div>
          <h1 className="section-title" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)' }}>Program Kerja Kabinet</h1>
          <p className="section-subtitle">
            Eksplorasi seluruh inisiatif pergerakan, pengabdian, kompetisi, dan pelayanan BEM KM FTI Kabinet Vismayakriya.
          </p>
          <div className="section-divider"></div>
        </div>
      </section>

      {/* CATALOG & FILTER SECTION */}
      <section className="section section-dark-alt">
        <div className="container">
          {/* Filter & Search Toolbar */}
          <div className="filter-bar">
            {/* Row 1: Search & Dropdowns */}
            <div className="filter-top-row">
              <div className="search-input-wrap">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                <input
                  type="text"
                  id="proker-search-input"
                  className="search-input"
                  placeholder="Cari program kerja, kata kunci, atau tag..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>

              {/* Filter Dinas */}
              <select
                id="proker-dept-select"
                className="select-filter"
                value={dept}
                onChange={(e) => setDept(e.target.value)}
              >
                <option value="all">Semua Dinas & Biro</option>
                {departmentsData.map(d => (
                  <option key={d.id} value={d.slug}>{d.type} {d.shortName}</option>
                ))}
              </select>

              {/* Filter Status */}
              <select
                id="proker-status-select"
                className="select-filter"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="all">Semua Status</option>
                <option value="Selesai">Selesai (Terlaksana)</option>
                <option value="Sedang Berjalan">Sedang Berjalan</option>
                <option value="Akan Datang">Akan Datang</option>
              </select>
            </div>

            {/* Row 2: Category Pills */}
            <div className="filter-pills" id="proker-category-pills">
              {categories.map((c) => (
                <button
                  key={c}
                  className={`pill-btn ${category === c ? 'active' : ''}`}
                  data-category={c}
                  type="button"
                  onClick={() => setCategory(c)}
                >
                  {c === 'all' ? 'Semua Kategori' : c}
                </button>
              ))}
            </div>
          </div>

          {/* Active Filter & Counter Indicator */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', color: '#94a3b8', fontSize: '0.9rem' }}>
            <div>
              Menampilkan <span id="proker-counter" style={{ color: '#60a5fa', fontWeight: 700 }}>{filteredPrograms.length}</span> program kerja
            </div>
          </div>

          {/* Programs Grid */}
          <div className="programs-grid" id="proker-grid-container">
            {filteredPrograms.length === 0 ? (
              <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '4rem 1.5rem', background: 'rgba(16,26,51,0.5)', borderRadius: '16px', border: '1px dashed var(--border-dark)' }}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="1.5" style={{ margin: '0 auto 1rem' }}><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.5rem' }}>Tidak Ada Program yang Sesuai</h3>
                <p style={{ color: '#94a3b8', fontSize: '0.9rem', maxWidth: '420px', margin: '0 auto' }}>Silakan sesuaikan kata kunci pencarian atau ubah filter dinas dan kategori.</p>
              </div>
            ) : (
              filteredPrograms.map(p => (
                <div
                  key={p.id}
                  className="proker-card"
                  data-id={p.id}
                  onClick={() => handleOpenProker(p)}
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
                      <button
                        className="btn btn-primary btn-sm view-proker-modal-btn"
                        data-id={p.id}
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleOpenProker(p);
                        }}
                      >
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

      {/* Program Modal */}
      <ProgramModalVismayakriya
        proker={selectedProker}
        isOpen={modalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
}
