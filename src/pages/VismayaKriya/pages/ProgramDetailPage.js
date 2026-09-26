/***
 * ProgramDetailPage Component (Detail Program Kerja)
 * Menampilkan detail komprehensif program kerja BEM KM FTI sebagai Halaman Penuh
 */

import { api } from '../utils/api.js';
import { getStatusBadgeClass } from '../utils/helpers.js';

export async function renderProgramDetailPage() {
  const hashPart = window.location.hash.includes('?') ? window.location.hash.split('?')[1] : '';
  const urlParams = new URLSearchParams(hashPart || window.location.search);
  const id = urlParams.get('id');

  if (!id) {
    return renderNotFoundProgramState('Parameter ID program kerja tidak ditemukan.');
  }

  try {
    const proker = await api.getProgramById(id);
    return renderProgramDetailHtml(proker);
  } catch (err) {
    return renderNotFoundProgramState(err.message || 'Program kerja tidak ditemukan.');
  }
}

function renderNotFoundProgramState(message) {
  return `
    <div class="container" style="padding: 9rem 1.5rem 5rem; text-align: center;">
      <div style="max-width: 500px; margin: 0 auto; background: rgba(16,26,51,0.6); padding: 3rem 2rem; border-radius: 16px; border: 1px dashed rgba(96,165,250,0.3);">
        <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" stroke-width="1.5" style="margin: 0 auto 1rem;"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
        <h2 style="font-size: 1.5rem; font-weight: 800; color: #ffffff; margin-bottom: 0.75rem;">Program Kerja Tidak Ditemukan</h2>
        <p style="color: #94a3b8; font-size: 0.95rem; margin-bottom: 2rem;">${message}</p>
        <a href="#/program-kerja" class="btn btn-primary btn-md">
          &larr; Kembali ke Katalog Program Kerja
        </a>
      </div>
    </div>
  `;
}

function renderProgramDetailHtml(proker) {
  const objectivesHtml = (proker.objectives || []).map(obj => `
    <li style="display: flex; gap: 0.85rem; align-items: flex-start; margin-bottom: 0.75rem;">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink: 0; margin-top: 2px;">
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
      <span style="font-size: 0.95rem; color: #dcebff; line-height: 1.6;">${obj}</span>
    </li>
  `).join('');

  const tagsHtml = (proker.tags || []).map(t => `
    <span class="tag-dept" style="font-size: 0.8rem; padding: 0.3rem 0.75rem; background: rgba(96,165,250,0.12); color: #60a5fa; border: 1px solid rgba(96,165,250,0.25);">#${t}</span>
  `).join('');

  return `
    <div class="program-detail-page">
      {/* Cover Header Banner */}
      <section class="section section-dark" style="padding-top: 6.5rem; padding-bottom: 3.5rem; background: radial-gradient(circle at top, #162445 0%, #070c18 100%); position: relative; overflow: hidden;">
        <div class="container" style="position: relative; z-index: 2;">
          <div style="margin-bottom: 1.5rem;">
            <a href="#/program-kerja" style="color: #60a5fa; text-decoration: none; font-size: 0.9rem; font-weight: 600; display: inline-flex; align-items: center; gap: 0.4rem;">
              &larr; Kembali ke Katalog Program Kerja
            </a>
          </div>

          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 3rem; align-items: center;">
            <div>
              <div style="display: flex; gap: 0.75rem; align-items: center; flex-wrap: wrap; margin-bottom: 1rem;">
                <span class="badge ${getStatusBadgeClass(proker.status)}" style="font-size: 0.85rem; padding: 0.35rem 0.85rem;">${proker.status}</span>
                <span class="tag-dept" style="background: rgba(37,99,235,0.4); color: #ffffff; font-size: 0.85rem; padding: 0.3rem 0.75rem;">${proker.category}</span>
                <span style="font-size: 0.88rem; color: #94a3b8; font-weight: 600;">&bull; ${proker.department}</span>
              </div>
              <h1 style="font-size: clamp(2rem, 3.5vw, 3.2rem); font-weight: 800; color: #ffffff; line-height: 1.2; margin-bottom: 1.25rem;">
                ${proker.title}
              </h1>
              <p style="color: #cbd5e1; font-size: 1.05rem; line-height: 1.7; margin-bottom: 1.5rem;">
                ${proker.summary}
              </p>
            </div>

            <div style="position: relative; width: 100%; height: 320px; border-radius: 20px; overflow: hidden; border: 2px solid rgba(96,165,250,0.3); box-shadow: 0 15px 40px rgba(0,0,0,0.6); background: #050811;">
              <img src="${proker.image}" alt="${proker.title}" style="width: 100%; height: 100%; object-fit: cover;">
              <div style="position: absolute; inset: 0; background: linear-gradient(180deg, transparent 60%, rgba(7,12,24,0.8) 100%);"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Details */}
      <section class="section section-dark-alt" style="padding: 4rem 0;">
        <div class="container">
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 3rem;">
            
            {/* Left: Description & Objectives */}
            <div>
              {/* Metadata Info Grid */}
              <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); gap: 1.25rem; padding: 1.25rem 1.5rem; background: rgba(16,26,51,0.6); border: 1px solid rgba(175,203,238,0.15); border-radius: 16px; margin-bottom: 2.5rem;">
                <div>
                  <div style="font-size: 0.75rem; color: #94a3b8; text-transform: uppercase; font-weight: 700; letter-spacing: 0.05em;">Waktu / Periode</div>
                  <div style="font-size: 1rem; font-weight: 700; color: #ffffff; margin-top: 0.25rem;">${proker.date}</div>
                </div>
                <div>
                  <div style="font-size: 0.75rem; color: #94a3b8; text-transform: uppercase; font-weight: 700; letter-spacing: 0.05em;">Lokasi Kegiatan</div>
                  <div style="font-size: 1rem; font-weight: 700; color: #ffffff; margin-top: 0.25rem;">${proker.location}</div>
                </div>
                <div>
                  <div style="font-size: 0.75rem; color: #94a3b8; text-transform: uppercase; font-weight: 700; letter-spacing: 0.05em;">Sasaran Peserta</div>
                  <div style="font-size: 1rem; font-weight: 700; color: #ffffff; margin-top: 0.25rem;">${proker.targetAudience}</div>
                </div>
              </div>

              {/* Full Description */}
              <div style="background: rgba(16,26,51,0.6); border: 1px solid rgba(175,203,238,0.12); border-radius: 16px; padding: 2rem; margin-bottom: 2.5rem;">
                <h3 style="font-size: 1.25rem; font-weight: 700; color: #ffffff; margin-bottom: 1rem; display: flex; align-items: center; gap: 0.5rem;">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
                  Latar Belakang & Gambaran Acara
                </h3>
                <p style="color: #cbd5e1; font-size: 1rem; line-height: 1.8;">
                  ${proker.description}
                </p>
              </div>

              {/* Objectives */}
              <div style="background: rgba(16,26,51,0.6); border: 1px solid rgba(175,203,238,0.12); border-radius: 16px; padding: 2rem; margin-bottom: 2rem;">
                <h3 style="font-size: 1.25rem; font-weight: 700; color: #ffffff; margin-bottom: 1.25rem; display: flex; align-items: center; gap: 0.5rem;">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                  Tujuan Utama Program Kerja
                </h3>
                <ul style="padding-left: 0; list-style: none; margin: 0;">
                  ${objectivesHtml}
                </ul>
              </div>
            </div>

            {/* Right: Department Info & Tags */}
            <div>
              <div style="background: rgba(7,12,24,0.6); border: 1px solid rgba(96,165,250,0.2); border-radius: 16px; padding: 2rem; position: sticky; top: 90px;">
                <div style="margin-bottom: 1.75rem;">
                  <div style="font-size: 0.78rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: #60a5fa; margin-bottom: 0.5rem;">Penyelenggara</div>
                  <div style="font-size: 1.2rem; font-weight: 800; color: #ffffff; margin-bottom: 0.5rem;">${proker.department}</div>
                  <a href="#/dinas?slug=${proker.departmentSlug}" style="color: #60a5fa; font-weight: 600; font-size: 0.9rem; text-decoration: none; display: inline-flex; align-items: center; gap: 4px;">
                    Lihat Profil Dinas &rarr;
                  </a>
                </div>

                <div style="border-top: 1px solid rgba(255,255,255,0.08); padding-top: 1.5rem; margin-top: 1.5rem;">
                  <div style="font-size: 0.78rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: #60a5fa; margin-bottom: 0.75rem;">Kata Kunci / Tags</div>
                  <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                    ${tagsHtml}
                  </div>
                </div>

                <div style="margin-top: 2rem; border-top: 1px solid rgba(255,255,255,0.08); padding-top: 1.5rem;">
                  <a href="#/program-kerja" class="btn btn-primary" style="width: 100%; text-align: center; justify-content: center;">
                    Eksplorasi Program Kerja Lainnya
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  `;
}

export async function initProgramDetailPageEvents() {
  // Page initialization scroll to top if needed
}

