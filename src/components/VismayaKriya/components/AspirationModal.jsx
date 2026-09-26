import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { api } from '../utils/api.js';

export function AspirationModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    prodi: 'Sistem Informasi',
    category: 'Advokasi & UKT',
    subject: '',
    message: '',
    anonymous: false
  });
  const [submitting, setSubmitting] = useState(false);
  const [feedback, setFeedback] = useState(null);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.subject || !formData.message) {
      setFeedback({ type: 'error', text: 'Mohon isi subjek dan pesan aspirasi Anda.' });
      return;
    }

    setSubmitting(true);
    setFeedback(null);
    try {
      const res = await api.submitAspiration(formData);
      setFeedback({ type: 'success', text: res.message });
      setFormData({
        name: '',
        prodi: 'Sistem Informasi',
        category: 'Advokasi & UKT',
        subject: '',
        message: '',
        anonymous: false
      });
    } catch (err) {
      setFeedback({ type: 'error', text: err.message || 'Gagal mengumpulkan aspirasi.' });
    } finally {
      setSubmitting(false);
    }
  };

  const modalContent = (
    <div className="modal-overlay open" id="aspiration-modal-overlay" style={{ zIndex: 1050 }} onClick={onClose}>
      <div className="modal-dialog" style={{ maxWidth: '640px' }} onClick={(e) => e.stopPropagation()}>
        <div style={{ position: 'relative', padding: '2rem 2rem 1rem', background: 'linear-gradient(135deg, #0b1224 0%, #162445 100%)', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
          <button className="modal-close-btn" onClick={onClose} aria-label="Tutup Aspirasi">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
          
          <span className="badge badge-status-ongoing" style={{ marginBottom: '0.5rem', display: 'inline-block' }}>Layanan Aspirasi Terbuka</span>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#ffffff', margin: 0 }}>Form Aspirasi & Keluhan Mahasiswa</h2>
          <p style={{ color: '#cbd5e1', fontSize: '0.88rem', marginTop: '0.4rem', lineHeight: 1.5 }}>
            Suaramu berarti bagi kemajuan FTI. Kirimkan aspirasi, kritik, saran, atau laporan fasilitas kuliah secara aman.
          </p>
        </div>

        <div className="modal-body" style={{ padding: '1.75rem 2rem' }}>
          {feedback && (
            <div
              style={{
                padding: '0.85rem 1.1rem',
                borderRadius: '10px',
                marginBottom: '1.5rem',
                fontSize: '0.9rem',
                fontWeight: 600,
                background: feedback.type === 'success' ? 'rgba(34,197,94,0.15)' : 'rgba(239,68,68,0.15)',
                border: feedback.type === 'success' ? '1px solid rgba(34,197,94,0.3)' : '1px solid rgba(239,68,68,0.3)',
                color: feedback.type === 'success' ? '#4ade80' : '#f87171'
              }}
            >
              {feedback.text}
            </div>
          )}

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
            {/* Anonymous Checkbox */}
            <label style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', cursor: 'pointer', userSelect: 'none' }}>
              <input
                type="checkbox"
                checked={formData.anonymous}
                onChange={(e) => setFormData({ ...formData, anonymous: e.target.checked })}
                style={{ width: '18px', height: '18px', accentColor: '#38bdf8' }}
              />
              <span style={{ fontSize: '0.9rem', color: '#60a5fa', fontWeight: 700 }}>Kirimkan Secara Anonim (Identitas Didesain Rahasia)</span>
            </label>

            {!formData.anonymous && (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#cbd5e1', marginBottom: '0.4rem' }}>Nama Lengkap</label>
                  <input
                    type="text"
                    className="search-input"
                    placeholder="Nama Anda"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{ width: '100%', background: 'rgba(7,12,24,0.8)' }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#cbd5e1', marginBottom: '0.4rem' }}>Program Studi</label>
                  <select
                    className="select-filter"
                    value={formData.prodi}
                    onChange={(e) => setFormData({ ...formData, prodi: e.target.value })}
                    style={{ width: '100%', background: 'rgba(7,12,24,0.8)' }}
                  >
                    <option value="Sistem Informasi">Sistem Informasi</option>
                    <option value="Informatika">Informatika</option>
                    <option value="Teknik Komputer">Teknik Komputer</option>
                  </select>
                </div>
              </div>
            )}

            <div>
              <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#cbd5e1', marginBottom: '0.4rem' }}>Kategori Aspirasi</label>
              <select
                className="select-filter"
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                style={{ width: '100%', background: 'rgba(7,12,24,0.8)' }}
              >
                <option value="Advokasi & UKT">Advokasi & UKT / Beasiswa</option>
                <option value="Fasilitas Perkuliahan">Fasilitas & Sarana Perkuliahan</option>
                <option value="Akademik & Kurikulum">Akademik & Kurikulum</option>
                <option value="Kegiatan Ormawa">Kegiatan Kemahasiswaan & Ormawa</option>
                <option value="Kritik & Saran Kabinet">Kritik & Saran Kabinet</option>
              </select>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#cbd5e1', marginBottom: '0.4rem' }}>Subjek / Judul Aspirasi *</label>
              <input
                type="text"
                className="search-input"
                placeholder="Contoh: Masalah AC di Lab Komputer 2"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                required
                style={{ width: '100%', background: 'rgba(7,12,24,0.8)' }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#cbd5e1', marginBottom: '0.4rem' }}>Pesan & Rincian Aspirasi *</label>
              <textarea
                rows="4"
                className="search-input"
                placeholder="Tuliskan keluhan, masukan, atau aspirasimu secara jelas..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                style={{ width: '100%', background: 'rgba(7,12,24,0.8)', resize: 'vertical' }}
              ></textarea>
            </div>

            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end', marginTop: '0.5rem' }}>
              <button className="btn btn-outline" type="button" onClick={onClose}>
                Batal
              </button>
              <button className="btn btn-primary btn-glow" type="submit" disabled={submitting}>
                {submitting ? 'Mengirim...' : 'Kirim Aspirasi'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );

  return ReactDOM.createPortal(modalContent, document.body);
}

