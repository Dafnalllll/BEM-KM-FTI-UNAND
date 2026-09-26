import React, { useState, useEffect } from 'react';
import { api } from './utils/api.js';

export function AspirasiVismayakriya() {
  const [history, setHistory] = useState([]);
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    nim: '',
    prodi: 'Sistem Informasi',
    category: 'Akademik',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setHistory(api.getStoredAspirations());
  }, []);

  const handleChange = (e) => {
    const { id, value } = e.target;
    const key = id.replace('full-asp-', '');
    setFormData(prev => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await api.submitAspiration({
        ...formData,
        anonymous: isAnonymous
      });
      setFormData({
        name: '',
        nim: '',
        prodi: 'Sistem Informasi',
        category: 'Akademik',
        subject: '',
        message: ''
      });
      setIsAnonymous(false);
      setHistory(api.getStoredAspirations());
      alert(res.message);
    } catch (err) {
      alert('Gagal mengirimkan aspirasi: ' + err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="aspiration-page">
      {/* Sub-Hero Banner */}
      <section className="section section-dark" style={{ paddingTop: '7rem', paddingBottom: '3.5rem', background: 'radial-gradient(circle at top, #101a33 0%, #070c18 100%)' }}>
        <div className="container text-center" style={{ textAlign: 'center' }}>
          <div className="section-tag">Kanal Aspirasi Terbuka</div>
          <h1 className="section-title" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)' }}>Sampaikan Aspirasi Mahasiswa</h1>
          <p className="section-subtitle">
            Ruang aman dan transparan bagi civitas akademika FTI untuk menyampaikan keluhan fasilitas, kendala akademik, advokasi UKT, maupun ide pengembangan kampus.
          </p>
          <div className="section-divider"></div>
        </div>
      </section>

      {/* FORM & TRACKER SECTION */}
      <section className="section section-dark-alt">
        <div className="container" style={{ maxWidth: '860px' }}>
          <div className="aspiration-form" id="page-aspiration-form-card">
            <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.5rem' }}>Formulir Pengaduan & Aspirasi</h2>
            <p style={{ color: '#cbd5e1', fontSize: '0.9rem', marginBottom: '2rem' }}>
              Setiap laporan yang masuk akan ditelaah secara objektif oleh Dinas Adkesma dan pimpinan BEM KM FTI untuk diperjuangkan solusinya.
            </p>

            <form id="full-aspiration-form" onSubmit={handleSubmit}>
              {/* Anonymous Toggle */}
              <label className="toggle-wrap">
                <input
                  type="checkbox"
                  id="full-asp-anon"
                  style={{ display: 'none' }}
                  checked={isAnonymous}
                  onChange={(e) => setIsAnonymous(e.target.checked)}
                />
                <span className="toggle-switch"></span>
                <span style={{ fontWeight: 600, color: '#ffffff' }}>Kirimkan secara Anonim (Sembunyikan Nama & NIM)</span>
              </label>

              {/* Identity Fields */}
              <div
                className="form-row"
                id="full-asp-identity-row"
                style={{
                  opacity: isAnonymous ? 0.4 : 1,
                  pointerEvents: isAnonymous ? 'none' : 'auto'
                }}
              >
                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label className="form-label">
                    <span>Nama Lengkap</span>
                    <span className="form-label-optional">(Opsional)</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="full-asp-name"
                    placeholder="Nama mahasiswa"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label className="form-label">
                    <span>NIM</span>
                    <span className="form-label-optional">(Opsional)</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="full-asp-nim"
                    placeholder="NIM mahasiswa"
                    value={formData.nim}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* Department & Category */}
              <div className="form-row" style={{ marginTop: '1.25rem' }}>
                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label className="form-label">Program Studi</label>
                  <select
                    className="form-control"
                    id="full-asp-prodi"
                    value={formData.prodi}
                    onChange={handleChange}
                  >
                    <option value="Sistem Informasi">Sistem Informasi</option>
                    <option value="Teknik Informatika">Teknik Informatika</option>
                    <option value="Teknik Komputer">Teknik Komputer</option>
                    <option value="Pascasarjana FTI">Pascasarjana FTI</option>
                    <option value="Lainnya">Lainnya / Umum</option>
                  </select>
                </div>

                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label className="form-label">Kategori Aspirasi</label>
                  <select
                    className="form-control"
                    id="full-asp-category"
                    value={formData.category}
                    onChange={handleChange}
                  >
                    <option value="Akademik">Akademik & Perkuliahan</option>
                    <option value="Fasilitas">Fasilitas Kampus & Laboratorium</option>
                    <option value="Kemahasiswaan">Kemahasiswaan, Beasiswa & UKT</option>
                    <option value="Organisasi">Keorganisasian & Ormawa</option>
                    <option value="Teknologi">Inovasi Layanan Digital</option>
                    <option value="Sosial">Sosial, Lingkungan & Ruang Aman</option>
                    <option value="Lainnya">Lainnya</option>
                  </select>
                </div>
              </div>

              {/* Subject */}
              <div className="form-group" style={{ marginTop: '1.25rem' }}>
                <label className="form-label">
                  <span>Subjek / Pokok Permasalahan *</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="full-asp-subject"
                  placeholder="cth. Kendala pendingin ruangan di Gedung B Lab Komputer"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>

              {/* Message */}
              <div className="form-group">
                <label className="form-label">
                  <span>Uraian Aspirasi atau Masukan *</span>
                </label>
                <textarea
                  className="form-control"
                  id="full-asp-message"
                  style={{ minHeight: '150px' }}
                  placeholder="Tuliskan secara lengkap fakta atau gagasan yang ingin Anda sampaikan..."
                  required
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              {/* Submit Button */}
              <div style={{ marginTop: '2rem' }}>
                <button
                  type="submit"
                  className="btn btn-primary btn-lg btn-glow"
                  id="full-asp-submit-btn"
                  style={{ width: '100%' }}
                  disabled={isSubmitting}
                >
                  <span>{isSubmitting ? 'Memproses Aspirasi...' : 'Kirimkan Aspirasi ke BEM KM FTI'}</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                </button>
              </div>
            </form>

            {/* Local Submissions Tracker */}
            <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#ffffff', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                Riwayat Aspirasi di Peramban Anda
              </h3>

              <div id="full-asp-history-list">
                {history.length === 0 ? (
                  <div style={{ padding: '1.5rem', textAlign: 'center', color: '#94a3b8', fontSize: '0.875rem', background: 'rgba(7,12,24,0.4)', borderRadius: '8px' }}>
                    Belum ada riwayat aspirasi yang dikirimkan dari perangkat ini.
                  </div>
                ) : (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {history.map((h, i) => (
                      <div key={h.id || i} style={{ padding: '1rem 1.25rem', background: 'rgba(7,12,24,0.6)', borderRadius: '10px', border: '1px solid rgba(175,203,238,0.12)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem' }}>
                        <div>
                          <div style={{ fontWeight: 700, color: '#ffffff', fontSize: '0.95rem' }}>{h.subject}</div>
                          <div style={{ fontSize: '0.78rem', color: '#94a3b8', marginTop: '0.25rem' }}>
                            Kategori: <strong style={{ color: '#dcebff' }}>{h.category}</strong> &bull; Prodi: {h.prodi} &bull; {new Date(h.submittedAt).toLocaleDateString('id-ID')}
                          </div>
                        </div>
                        <div>
                          <span className="badge badge-status-ongoing">{h.status}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
