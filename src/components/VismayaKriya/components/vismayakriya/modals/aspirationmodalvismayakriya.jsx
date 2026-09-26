import React, { useState, useEffect } from 'react';
import { api } from '../utils/api.js';

export function AspirationModalVismayakriya({ isOpen, onClose }) {
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
  const [submittedData, setSubmittedData] = useState(null);

  useEffect(() => {
    if (isOpen) {
      setHistory(api.getStoredAspirations());
      setSubmittedData(null);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { id, value } = e.target;
    const key = id.replace('asp-', '');
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
      setSubmittedData(res.data);
      setHistory(api.getStoredAspirations());
    } catch (err) {
      alert('Gagal mengirimkan aspirasi: ' + err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="modal-overlay open" id="aspiration-modal-overlay" onClick={(e) => { if (e.target.id === 'aspiration-modal-overlay') onClose(); }}>
      <div className="modal-dialog" style={{ maxWidth: '680px' }}>
        <div className="modal-header-banner" style={{ height: '100px', background: 'linear-gradient(135deg, #101a33 0%, #1e3158 100%)' }}>
          <button className="modal-close-btn" id="aspiration-modal-close" aria-label="Tutup Formulir" onClick={onClose}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
          <div style={{ marginBottom: '1.25rem' }}>
            <span className="badge" style={{ background: 'rgba(59,130,246,0.25)', color: '#93c5fd', marginBottom: '0.25rem' }}>Kanal Aspirasi Terbuka</span>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#ffffff' }}>Sampaikan Aspirasi KM FTI</h2>
          </div>
        </div>

        <div className="modal-body" id="aspiration-modal-body">
          {submittedData ? (
            <div className="submission-success-card" style={{ textAlign: 'center', padding: '1.5rem 0' }}>
              <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(16,185,129,0.2)', border: '2px solid #10b981', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.75rem' }}>Aspirasi Berhasil Terkirim!</h3>
              <p style={{ color: '#dcebff', fontSize: '0.95rem', maxWidth: '480px', margin: '0 auto 1.5rem', lineHeight: 1.6 }}>
                Terima kasih, aspirasi Anda telah diterima. Tim BEM KM FTI Kabinet Vismayakriya akan segera menindaklanjuti suara Anda.
              </p>
              <div style={{ padding: '1rem', background: 'rgba(7,12,24,0.6)', borderRadius: '8px', border: '1px solid rgba(175,203,238,0.15)', maxWidth: '420px', margin: '0 auto 1.75rem', textAlign: 'left', fontSize: '0.85rem' }}>
                <div style={{ color: '#94a3b8', fontSize: '0.75rem' }}>ID Referensi: <span style={{ color: '#60a5fa' }}>{submittedData.id}</span></div>
                <div style={{ fontWeight: 700, color: '#ffffff', marginTop: '0.25rem' }}>{submittedData.subject}</div>
                <div style={{ color: '#cbd5e1', fontSize: '0.8rem', marginTop: '0.25rem' }}>Kategori: {submittedData.category} | Pengirim: {submittedData.name}</div>
              </div>
              <button className="btn btn-primary" onClick={onClose}>Selesai</button>
            </div>
          ) : (
            <>
              <p style={{ color: '#cbd5e1', fontSize: '0.9rem', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                Suara Anda adalah kompas perjuangan kami. Sampaikan kritik konstruktif, pengaduan fasilitas, kendala akademik, atau gagasan inovatif demi kemajuan Fakultas Teknologi Informasi.
              </p>

              <form id="aspiration-form" onSubmit={handleSubmit}>
                <label className="toggle-wrap">
                  <input
                    type="checkbox"
                    id="asp-anon"
                    style={{ display: 'none' }}
                    checked={isAnonymous}
                    onChange={(e) => setIsAnonymous(e.target.checked)}
                  />
                  <span className="toggle-switch"></span>
                  <span style={{ fontWeight: 600, color: '#ffffff' }}>Kirim sebagai Anonim (Rahasiakan Identitas)</span>
                </label>

                <div
                  className="form-row"
                  id="asp-identity-row"
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
                      id="asp-name"
                      placeholder="cth. Fulan Al-Farabi"
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
                      id="asp-nim"
                      placeholder="cth. 231152xxxx"
                      value={formData.nim}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-row" style={{ marginTop: '1rem' }}>
                  <div className="form-group" style={{ marginBottom: 0 }}>
                    <label className="form-label">Departemen / Program Studi</label>
                    <select
                      className="form-control"
                      id="asp-prodi"
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
                      id="asp-category"
                      value={formData.category}
                      onChange={handleChange}
                    >
                      <option value="Akademik">Akademik & Perkuliahan</option>
                      <option value="Fasilitas">Fasilitas Kampus & Lab</option>
                      <option value="Kemahasiswaan">Kemahasiswaan & UKT</option>
                      <option value="Organisasi">Keorganisasian & Ormawa</option>
                      <option value="Teknologi">Inovasi & Layanan IT</option>
                      <option value="Sosial">Sosial & Lingkungan Kampus</option>
                      <option value="Lainnya">Lainnya</option>
                    </select>
                  </div>
                </div>

                <div className="form-group" style={{ marginTop: '1rem' }}>
                  <label className="form-label">
                    <span>Subjek / Judul Aspirasi *</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="asp-subject"
                    placeholder="Ringkasan topik aspirasi atau keluhan Anda"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">
                    <span>Pesan Aspirasi Lengkap *</span>
                  </label>
                  <textarea
                    className="form-control"
                    id="asp-message"
                    placeholder="Tuliskan secara jelas kronologi, usulan solusi, atau pesan Anda..."
                    required
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <div className="form-group">
                  <label className="form-label">
                    <span>Lampiran Bukti / Dokumen Pendukung</span>
                    <span className="form-label-optional">(Simulasi UI)</span>
                  </label>
                  <div style={{ border: '2px dashed rgba(175,203,238,0.25)', borderRadius: '8px', padding: '1rem', textAlign: 'center', fontSize: '0.85rem', color: '#94a3b8', background: 'rgba(7,12,24,0.4)' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="2" style={{ margin: '0 auto 0.5rem' }}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
                    <span>Pilih berkas foto/dokumen (Maks. 5MB)</span>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end', marginTop: '1.5rem' }}>
                  <button type="button" className="btn btn-secondary" id="asp-cancel-btn" onClick={onClose}>Batal</button>
                  <button type="submit" className="btn btn-primary btn-glow" id="asp-submit-btn" disabled={isSubmitting}>
                    <span>{isSubmitting ? 'Mengirimkan...' : 'Kirim Aspirasi'}</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                  </button>
                </div>
              </form>

              {history.length > 0 && (
                <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                  <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#60a5fa', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
                    Riwayat Aspirasi Anda ({history.length})
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', maxHeight: '160px', overflowY: 'auto' }}>
                    {history.map((h, i) => (
                      <div key={h.id || i} style={{ padding: '0.6rem 0.85rem', background: 'rgba(7,12,24,0.5)', borderRadius: '8px', border: '1px solid rgba(175,203,238,0.1)', fontSize: '0.8rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div>
                          <div style={{ fontWeight: 600, color: '#ffffff' }}>{h.subject}</div>
                          <div style={{ color: '#94a3b8', fontSize: '0.72rem' }}>Kategori: {h.category} &bull; Status: <span style={{ color: '#38bdf8' }}>{h.status}</span></div>
                        </div>
                        <span style={{ color: '#64748b', fontSize: '0.7rem' }}>{new Date(h.submittedAt).toLocaleDateString('id-ID')}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
