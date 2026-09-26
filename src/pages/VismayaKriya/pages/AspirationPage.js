/***
 * AspirationPage Component (Portal Aspirasi Mahasiswa)
 * Halaman penuh untuk penyampaian kritik, saran, advokasi, dan pelaporan mahasiswa
 */

import { api } from '../utils/api.js';

export async function renderAspirationPage() {
  const history = api.getStoredAspirations();

  return `
    <div class="aspiration-page">
      {/* Sub-Hero Banner */}
      <section class="section section-dark" style="padding-top: 7rem; padding-bottom: 3.5rem; background: radial-gradient(circle at top, #101a33 0%, #070c18 100%);">
        <div class="container text-center" style="text-align: center;">
          <div class="section-tag">Kanal Aspirasi Terbuka</div>
          <h1 class="section-title" style="font-size: clamp(2.2rem, 4vw, 3.5rem);">Sampaikan Aspirasi Mahasiswa</h1>
          <p class="section-subtitle">
            Ruang aman dan transparan bagi civitas akademika FTI untuk menyampaikan keluhan fasilitas, kendala akademik, advokasi UKT, maupun ide pengembangan kampus.
          </p>
          <div class="section-divider"></div>
        </div>
      </section>

      {/* FORM & TRACKER SECTION */}
      <section class="section section-dark-alt">
        <div class="container" style="max-width: 860px;">
          <div class="aspiration-form" id="page-aspiration-form-card">
            <h2 style="font-size: 1.5rem; font-weight: 800; color: #ffffff; margin-bottom: 0.5rem;">Formulir Pengaduan & Aspirasi</h2>
            <p style="color: #cbd5e1; font-size: 0.9rem; margin-bottom: 2rem;">
              Setiap laporan yang masuk akan ditelaah secara objektif oleh Dinas Adkesma dan pimpinan BEM KM FTI untuk diperjuangkan solusinya.
            </p>

            <form id="full-aspiration-form">
              {/* Anonymous Toggle */}
              <label class="toggle-wrap">
                <input type="checkbox" id="full-asp-anon" style="display: none;">
                <span class="toggle-switch"></span>
                <span style="font-weight: 600; color: #ffffff;">Kirimkan secara Anonim (Sembunyikan Nama & NIM)</span>
              </label>

              {/* Identity Fields */}
              <div class="form-row" id="full-asp-identity-row">
                <div class="form-group" style="margin-bottom: 0;">
                  <label class="form-label">
                    <span>Nama Lengkap</span>
                    <span class="form-label-optional">(Opsional)</span>
                  </label>
                  <input type="text" class="form-control" id="full-asp-name" placeholder="Nama mahasiswa">
                </div>
                <div class="form-group" style="margin-bottom: 0;">
                  <label class="form-label">
                    <span>NIM</span>
                    <span class="form-label-optional">(Opsional)</span>
                  </label>
                  <input type="text" class="form-control" id="full-asp-nim" placeholder="NIM mahasiswa">
                </div>
              </div>

              {/* Department & Category */}
              <div class="form-row" style="margin-top: 1.25rem;">
                <div class="form-group" style="margin-bottom: 0;">
                  <label class="form-label">Program Studi</label>
                  <select class="form-control" id="full-asp-prodi">
                    <option value="Sistem Informasi">Sistem Informasi</option>
                    <option value="Teknik Informatika">Teknik Informatika</option>
                    <option value="Teknik Komputer">Teknik Komputer</option>
                    <option value="Pascasarjana FTI">Pascasarjana FTI</option>
                    <option value="Lainnya">Lainnya / Umum</option>
                  </select>
                </div>

                <div class="form-group" style="margin-bottom: 0;">
                  <label class="form-label">Kategori Aspirasi</label>
                  <select class="form-control" id="full-asp-category">
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
              <div class="form-group" style="margin-top: 1.25rem;">
                <label class="form-label">
                  <span>Subjek / Pokok Permasalahan *</span>
                </label>
                <input type="text" class="form-control" id="full-asp-subject" placeholder="cth. Kendala pendingin ruangan di Gedung B Lab Komputer" required>
              </div>

              {/* Message */}
              <div class="form-group">
                <label class="form-label">
                  <span>Uraian Aspirasi atau Masukan *</span>
                </label>
                <textarea class="form-control" id="full-asp-message" style="min-height: 150px;" placeholder="Tuliskan secara lengkap fakta atau gagasan yang ingin Anda sampaikan..." required></textarea>
              </div>

              {/* Submit Button */}
              <div style="margin-top: 2rem;">
                <button type="submit" class="btn btn-primary btn-lg btn-glow" id="full-asp-submit-btn" style="width: 100%;">
                  <span>Kirimkan Aspirasi ke BEM KM FTI</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                </button>
              </div>
            </form>

            {/* Local Submissions Tracker */}
            <div style="margin-top: 3rem; padding-top: 2rem; border-top: 1px solid rgba(255,255,255,0.08);">
              <h3 style="font-size: 1.15rem; font-weight: 700; color: #ffffff; margin-bottom: 1rem; display: flex; align-items: center; gap: 0.5rem;">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                Riwayat Aspirasi di Peramban Anda
              </h3>

              <div id="full-asp-history-list">
                ${renderHistoryHtml(history)}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  `;
}

function renderHistoryHtml(history) {
  if (!history || history.length === 0) {
    return `
      <div style="padding: 1.5rem; text-align: center; color: #94a3b8; font-size: 0.875rem; background: rgba(7,12,24,0.4); border-radius: 8px;">
        Belum ada riwayat aspirasi yang dikirimkan dari perangkat ini.
      </div>
    `;
  }

  return `
    <div style="display: flex; flex-direction: column; gap: 0.75rem;">
      ${history.map(h => `
        <div style="padding: 1rem 1.25rem; background: rgba(7,12,24,0.6); border-radius: 10px; border: 1px solid rgba(175,203,238,0.12); display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.75rem;">
          <div>
            <div style="font-weight: 700; color: #ffffff; font-size: 0.95rem;">${h.subject}</div>
            <div style="font-size: 0.78rem; color: #94a3b8; margin-top: 0.25rem;">
              Kategori: <strong style="color: #dcebff;">${h.category}</strong> &bull; Prodi: ${h.prodi} &bull; ${new Date(h.submittedAt).toLocaleDateString('id-ID')}
            </div>
          </div>
          <div>
            <span class="badge badge-status-ongoing">${h.status}</span>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

export function initAspirationPageEvents() {
  const form = document.getElementById('full-aspiration-form');
  const anonCheck = document.getElementById('full-asp-anon');
  const identityRow = document.getElementById('full-asp-identity-row');
  const historyList = document.getElementById('full-asp-history-list');

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
    const btn = document.getElementById('full-asp-submit-btn');
    if (btn) {
      btn.disabled = true;
      btn.innerHTML = '<span>Memproses Aspirasi...</span>';
    }

    const payload = {
      name: document.getElementById('full-asp-name')?.value,
      nim: document.getElementById('full-asp-nim')?.value,
      prodi: document.getElementById('full-asp-prodi')?.value,
      category: document.getElementById('full-asp-category')?.value,
      subject: document.getElementById('full-asp-subject')?.value,
      message: document.getElementById('full-asp-message')?.value,
      anonymous: anonCheck?.checked
    };

    try {
      const res = await api.submitAspiration(payload);
      form.reset();
      if (btn) {
        btn.disabled = false;
        btn.innerHTML = '<span>Kirimkan Aspirasi ke BEM KM FTI</span>';
      }

      // Update history
      if (historyList) {
        historyList.innerHTML = renderHistoryHtml(api.getStoredAspirations());
      }

      alert(res.message);
    } catch (err) {
      alert('Gagal mengirimkan aspirasi: ' + err.message);
      if (btn) {
        btn.disabled = false;
        btn.innerHTML = '<span>Kirimkan Aspirasi ke BEM KM FTI</span>';
      }
    }
  });
}

