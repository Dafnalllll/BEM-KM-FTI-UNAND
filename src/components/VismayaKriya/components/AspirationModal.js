/***
 * Aspiration Modal & Form Component
 * Fasilitas penampung suara, kritik, dan aspirasi mahasiswa KM FTI UNAND
 */

import { api } from '../utils/api.js';

export function openAspirationModal() {
  let modal = document.getElementById('aspiration-modal-overlay');
  if (modal) modal.remove();

  const history = api.getStoredAspirations();
  const historyHtml = history.length > 0 ? `
    <div style="margin-top: 2rem; padding-top: 1.5rem; border-top: 1px solid rgba(255,255,255,0.08);">
      <div style="font-size: 0.85rem; font-weight: 700; color: #60a5fa; text-transform: uppercase; margin-bottom: 0.75rem;">
        Riwayat Aspirasi Anda (${history.length})
      </div>
      <div style="display: flex; flex-direction: column; gap: 0.5rem; max-height: 160px; overflow-y: auto;">
        ${history.map(h => `
          <div style="padding: 0.6rem 0.85rem; background: rgba(7,12,24,0.5); border-radius: 8px; border: 1px solid rgba(175,203,238,0.1); font-size: 0.8rem; display: flex; justify-content: space-between; align-items: center;">
            <div>
              <div style="font-weight: 600; color: #ffffff;">${h.subject}</div>
              <div style="color: #94a3b8; font-size: 0.72rem;">Kategori: ${h.category} &bull; Status: <span style="color: #38bdf8;">${h.status}</span></div>
            </div>
            <span style="color: #64748b; font-size: 0.7rem;">${new Date(h.submittedAt).toLocaleDateString('id-ID')}</span>
          </div>
        `).join('')}
      </div>
    </div>
  ` : '';

  const html = `
    <div class="modal-overlay open" id="aspiration-modal-overlay">
      <div class="modal-dialog" style="max-width: 680px;">
        <div class="modal-header-banner" style="height: 100px; background: linear-gradient(135deg, #101a33 0%, #1e3158 100%);">
          <button class="modal-close-btn" id="aspiration-modal-close" aria-label="Tutup Formulir">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
          <div style="margin-bottom: 1.25rem;">
            <span class="badge" style="background: rgba(59,130,246,0.25); color: #93c5fd; margin-bottom: 0.25rem;">Kanal Aspirasi Terbuka</span>
            <h2 style="font-size: 1.5rem; font-weight: 800; color: #ffffff;">Sampaikan Aspirasi KM FTI</h2>
          </div>
        </div>

        <div class="modal-body" id="aspiration-modal-body">
          <p style="color: #cbd5e1; font-size: 0.9rem; margin-bottom: 1.5rem; line-height: 1.6;">
            Suara Anda adalah kompas perjuangan kami. Sampaikan kritik konstruktif, pengaduan fasilitas, kendala akademik, atau gagasan inovatif demi kemajuan Fakultas Teknologi Informasi.
          </p>

          <form id="aspiration-form">
            <label class="toggle-wrap">
              <input type="checkbox" id="asp-anon" style="display: none;">
              <span class="toggle-switch"></span>
              <span style="font-weight: 600; color: #ffffff;">Kirim sebagai Anonim (Rahasiakan Identitas)</span>
            </label>

            <div class="form-row" id="asp-identity-row">
              <div class="form-group" style="margin-bottom: 0;">
                <label class="form-label">
                  <span>Nama Lengkap</span>
                  <span class="form-label-optional">(Opsional)</span>
                </label>
                <input type="text" class="form-control" id="asp-name" placeholder="cth. Fulan Al-Farabi">
              </div>
              <div class="form-group" style="margin-bottom: 0;">
                <label class="form-label">
                  <span>NIM</span>
                  <span class="form-label-optional">(Opsional)</span>
                </label>
                <input type="text" class="form-control" id="asp-nim" placeholder="cth. 231152xxxx">
              </div>
            </div>

            <div class="form-row" style="margin-top: 1rem;">
              <div class="form-group" style="margin-bottom: 0;">
                <label class="form-label">Departemen / Program Studi</label>
                <select class="form-control" id="asp-prodi">
                  <option value="Sistem Informasi">Sistem Informasi</option>
                  <option value="Teknik Informatika">Teknik Informatika</option>
                  <option value="Teknik Komputer">Teknik Komputer</option>
                  <option value="Pascasarjana FTI">Pascasarjana FTI</option>
                  <option value="Lainnya">Lainnya / Umum</option>
                </select>
              </div>

              <div class="form-group" style="margin-bottom: 0;">
                <label class="form-label">Kategori Aspirasi</label>
                <select class="form-control" id="asp-category">
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

            <div class="form-group" style="margin-top: 1rem;">
              <label class="form-label">
                <span>Subjek / Judul Aspirasi *</span>
              </label>
              <input type="text" class="form-control" id="asp-subject" placeholder="Ringkasan topik aspirasi atau keluhan Anda" required>
            </div>

            <div class="form-group">
              <label class="form-label">
                <span>Pesan Aspirasi Lengkap *</span>
              </label>
              <textarea class="form-control" id="asp-message" placeholder="Tuliskan secara jelas kronologi, usulan solusi, atau pesan Anda..." required></textarea>
            </div>

            <div class="form-group">
              <label class="form-label">
                <span>Lampiran Bukti / Dokumen Pendukung</span>
                <span class="form-label-optional">(Simulasi UI)</span>
              </label>
              <div style="border: 2px dashed rgba(175,203,238,0.25); border-radius: 8px; padding: 1rem; text-align: center; font-size: 0.85rem; color: #94a3b8; background: rgba(7,12,24,0.4);">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" stroke-width="2" style="margin: 0 auto 0.5rem;"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
                <span>Pilih berkas foto/dokumen (Maks. 5MB)</span>
              </div>
            </div>

            <div style="display: flex; gap: 1rem; justify-content: flex-end; margin-top: 1.5rem;">
              <button type="button" class="btn btn-secondary" id="asp-cancel-btn">Batal</button>
              <button type="submit" class="btn btn-primary btn-glow" id="asp-submit-btn">
                <span>Kirim Aspirasi</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
              </button>
            </div>
          </form>

          ${historyHtml}
        </div>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', html);
  document.body.style.overflow = 'hidden';

  const modalOverlay = document.getElementById('aspiration-modal-overlay');
  const closeBtn = document.getElementById('aspiration-modal-close');
  const cancelBtn = document.getElementById('asp-cancel-btn');
  const anonCheck = document.getElementById('asp-anon');
  const identityRow = document.getElementById('asp-identity-row');
  const form = document.getElementById('aspiration-form');

  function closeModal() {
    modalOverlay?.classList.remove('open');
    setTimeout(() => modalOverlay?.remove(), 250);
    document.body.style.overflow = '';
  }

  closeBtn?.addEventListener('click', closeModal);
  cancelBtn?.addEventListener('click', closeModal);
  modalOverlay?.addEventListener('click', (e) => {
    if (e.target.id === 'aspiration-modal-overlay') closeModal();
  });

  anonCheck?.addEventListener('change', (e) => {
    if (e.target.checked) {
      identityRow.style.opacity = '0.4';
      identityRow.style.pointerEvents = 'none';
    } else {
      identityRow.style.opacity = '1';
      identityRow.style.pointerEvents = 'auto';
    }
  });

  form?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const submitBtn = document.getElementById('asp-submit-btn');
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<span>Mengirimkan...</span>';
    }

    const payload = {
      name: document.getElementById('asp-name')?.value,
      nim: document.getElementById('asp-nim')?.value,
      prodi: document.getElementById('asp-prodi')?.value,
      category: document.getElementById('asp-category')?.value,
      subject: document.getElementById('asp-subject')?.value,
      message: document.getElementById('asp-message')?.value,
      anonymous: anonCheck?.checked
    };

    try {
      const res = await api.submitAspiration(payload);
      const modalBody = document.getElementById('aspiration-modal-body');
      if (modalBody) {
        modalBody.innerHTML = `
          <div class="submission-success-card">
            <div style="width: 64px; height: 64px; border-radius: 50%; background: rgba(16,185,129,0.2); border: 2px solid #10b981; display: flex; align-items: center; justify-content: center; margin: 0 auto 1.5rem;">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
            </div>
            <h3 style="font-size: 1.5rem; font-weight: 800; color: #ffffff; margin-bottom: 0.75rem;">Aspirasi Berhasil Terkirim!</h3>
            <p style="color: #dcebff; font-size: 0.95rem; max-width: 480px; margin: 0 auto 1.5rem; line-height: 1.6;">
              ${res.message}
            </p>
            <div style="padding: 1rem; background: rgba(7,12,24,0.6); border-radius: 8px; border: 1px solid rgba(175,203,238,0.15); max-width: 420px; margin: 0 auto 1.75rem; text-align: left; font-size: 0.85rem;">
              <div style="color: #94a3b8; font-size: 0.75rem;">ID Referensi: <span style="color: #60a5fa;">${res.data.id}</span></div>
              <div style="font-weight: 700; color: #ffffff; margin-top: 0.25rem;">${res.data.subject}</div>
              <div style="color: #cbd5e1; font-size: 0.8rem; margin-top: 0.25rem;">Kategori: ${res.data.category} | Pengirim: ${res.data.name}</div>
            </div>
            <button class="btn btn-primary" id="asp-success-done-btn">Selesai</button>
          </div>
        `;
        document.getElementById('asp-success-done-btn')?.addEventListener('click', closeModal);
      }
    } catch (err) {
      alert('Gagal mengirimkan aspirasi: ' + err.message);
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = '<span>Kirim Aspirasi</span>';
      }
    }
  });
}
