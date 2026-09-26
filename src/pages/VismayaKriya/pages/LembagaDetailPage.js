/***
 * LembagaDetailPage Component (Detail Himpunan & UKM)
 * Menampilkan profil lengkap Himpunan Mahasiswa & UKM di FTI UNAND
 */

import { api } from '../utils/api.js';

export async function renderLembagaDetailPage() {
  const hashPart = window.location.hash.includes('?') ? window.location.hash.split('?')[1] : '';
  const urlParams = new URLSearchParams(hashPart || window.location.search);
  const slug = urlParams.get('slug');

  if (!slug) {
    return renderNotFoundState('Parameter lembaga tidak ditemukan.');
  }

  try {
    const partner = await api.getPartnerBySlug(slug);
    return renderPartnerDetailHtml(partner);
  } catch (err) {
    return renderNotFoundState(err.message || 'Lembaga tidak ditemukan.');
  }
}

function renderNotFoundState(message) {
  return `
    <div class="container" style="padding: 9rem 1.5rem 5rem; text-align: center;">
      <div style="max-width: 500px; margin: 0 auto; background: rgba(16,26,51,0.6); padding: 3rem 2rem; border-radius: 16px; border: 1px dashed rgba(96,165,250,0.3);">
        <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" stroke-width="1.5" style="margin: 0 auto 1rem;"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
        <h2 style="font-size: 1.5rem; font-weight: 800; color: #ffffff; margin-bottom: 0.75rem;">Lembaga Tidak Ditemukan</h2>
        <p style="color: #94a3b8; font-size: 0.95rem; margin-bottom: 2rem;">${message}</p>
        <a href="#/" class="btn btn-primary btn-md">
          &larr; Kembali ke Beranda
        </a>
      </div>
    </div>
  `;
}

function renderPartnerDetailHtml(partner) {
  const missionsHtml = (partner.missions || []).map((m, idx) => `
    <div style="display: flex; gap: 0.85rem; align-items: flex-start; margin-bottom: 0.85rem;">
      <div style="width: 26px; height: 26px; border-radius: 50%; background: #2563eb; color: #fff; display: flex; align-items: center; justify-content: center; font-size: 0.8rem; font-weight: 700; flex-shrink: 0; margin-top: 2px;">
        ${idx + 1}
      </div>
      <div style="font-size: 0.95rem; color: #dcebff; line-height: 1.6;">${m}</div>
    </div>
  `).join('');

  const socialsHtml = [];
  if (partner.socials?.instagram) {
    socialsHtml.push(`
      <a href="${partner.socials.instagram}" target="_blank" rel="noopener noreferrer" class="btn btn-glow" style="display: inline-flex; align-items: center; gap: 0.55rem; padding: 0.75rem 1.4rem; background: linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045); color: #ffffff; border-radius: 10px; font-weight: 700; font-size: 0.9rem; text-decoration: none; transition: transform 0.2s;">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
        <span>Instagram Resmi</span>
      </a>
    `);
  }
  if (partner.socials?.linkedin) {
    socialsHtml.push(`
      <a href="${partner.socials.linkedin}" target="_blank" rel="noopener noreferrer" class="btn btn-glow" style="display: inline-flex; align-items: center; gap: 0.55rem; padding: 0.75rem 1.4rem; background: #0a66c2; color: #ffffff; border-radius: 10px; font-weight: 700; font-size: 0.9rem; text-decoration: none; transition: transform 0.2s;">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
        <span>LinkedIn Page</span>
      </a>
    `);
  }

  return `
    <div class="lembaga-detail-page">
      {/* Sub-Hero Banner */}
      <section class="section section-dark" style="padding-top: 7.5rem; padding-bottom: 4rem; background: radial-gradient(circle at top, #162445 0%, #070c18 100%); position: relative;">
        <div class="container">
          <div style="margin-bottom: 1.5rem;">
            <a href="#/tentang" style="color: #60a5fa; text-decoration: none; font-size: 0.9rem; font-weight: 600; display: inline-flex; align-items: center; gap: 0.4rem;">
              &larr; Kembali ke Tentang
            </a>
          </div>

          <div style="display: flex; align-items: center; gap: 2.5rem; flex-wrap: wrap;">
            <div style="width: 130px; height: 130px; border-radius: 20px; background: rgba(7,12,24,0.8); border: 2px solid #60a5fa; padding: 16px; display: flex; align-items: center; justify-content: center; box-shadow: 0 12px 30px rgba(0,0,0,0.6); flex-shrink: 0;">
              <img src="${partner.logo}" alt="${partner.name}" style="width: 100%; height: 100%; object-fit: contain;">
            </div>
            <div>
              <span class="badge" style="background: rgba(59,130,246,0.2); color: #60a5fa; border: 1px solid rgba(96,165,250,0.3); margin-bottom: 0.5rem; display: inline-block;">
                ${partner.category} &bull; ${partner.department}
              </span>
              <h1 style="font-size: clamp(2rem, 3.5vw, 3rem); font-weight: 800; color: #ffffff; line-height: 1.2; margin-bottom: 0.5rem;">
                ${partner.name} (${partner.shortName})
              </h1>
              <p style="color: #cbd5e1; font-size: 1.05rem; max-width: 700px; line-height: 1.6;">
                ${partner.summary}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Details Section */}
      <section class="section section-dark-alt" style="padding: 4rem 0;">
        <div class="container">
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 3rem;">
            
            {/* Left Column: Deskripsi & Media Sosial */}
            <div>
              <div style="background: rgba(16,26,51,0.6); border: 1px solid rgba(175,203,238,0.12); border-radius: 16px; padding: 2rem; margin-bottom: 2rem;">
                <h3 style="font-size: 1.25rem; font-weight: 700; color: #ffffff; margin-bottom: 1rem; display: flex; align-items: center; gap: 0.5rem;">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
                  Profil Singkat
                </h3>
                <p style="color: #cbd5e1; font-size: 1rem; line-height: 1.8;">
                  ${partner.description}
                </p>
              </div>

              {/* Media Sosial Link Langsung */}
              <div style="background: rgba(16,26,51,0.6); border: 1px solid rgba(175,203,238,0.12); border-radius: 16px; padding: 2rem;">
                <h3 style="font-size: 1.25rem; font-weight: 700; color: #ffffff; margin-bottom: 1.25rem; display: flex; align-items: center; gap: 0.5rem;">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                  Kanal Resmi & Media Sosial
                </h3>
                ${socialsHtml.length > 0 ? `
                  <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
                    ${socialsHtml.join('')}
                  </div>
                ` : `
                  <p style="color: #94a3b8; font-size: 0.9rem;">Informasi media sosial belum tersedia.</p>
                `}
              </div>
            </div>

            {/* Right Column: Visi & Misi */}
            <div>
              <div style="background: rgba(7,12,24,0.6); border: 1px solid rgba(96,165,250,0.2); border-radius: 16px; padding: 2rem; position: sticky; top: 90px;">
                <div style="margin-bottom: 1.75rem;">
                  <div style="font-size: 0.8rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: #60a5fa; margin-bottom: 0.5rem;">Visi Lembaga</div>
                  <blockquote style="font-size: 1.05rem; font-weight: 600; color: #ffffff; font-style: italic; line-height: 1.6;">
                    "${partner.vision}"
                  </blockquote>
                </div>

                <div>
                  <div style="font-size: 0.8rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: #60a5fa; margin-bottom: 1rem;">Misi Utama</div>
                  ${missionsHtml}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  `;
}

export async function initLembagaDetailPageEvents() {
  // Page initialization scroll to top if needed
}

