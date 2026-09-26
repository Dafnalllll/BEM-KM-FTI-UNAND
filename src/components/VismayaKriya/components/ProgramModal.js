/***
 * Program Modal Component
 * Menampilkan detail komprehensif program kerja BEM KM FTI
 */

import { getStatusBadgeClass } from '../utils/helpers.js';

export function renderProgramModal(proker) {
  if (!proker) return '';

  const objectivesHtml = (proker.objectives || []).map(obj => `
    <li style="display: flex; gap: 0.75rem; align-items: flex-start; margin-bottom: 0.6rem;">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink: 0; margin-top: 2px;">
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
      <span style="font-size: 0.92rem; color: #dcebff; line-height: 1.6;">${obj}</span>
    </li>
  `).join('');

  const tagsHtml = (proker.tags || []).map(t => `
    <span class="tag-dept">#${t}</span>
  `).join('');

  return `
    <div class="modal-overlay open" id="program-modal-overlay">
      <div class="modal-dialog">
        {/* Cover Header */}
        <div style="position: relative; width: 100%; height: 260px; overflow: hidden; background: #050811;">
          <img src="${proker.image}" alt="${proker.title}" style="width: 100%; height: 100%; object-fit: cover;">
          <div style="position: absolute; inset: 0; background: linear-gradient(180deg, rgba(7,12,24,0.3) 0%, rgba(11,18,36,0.95) 100%);"></div>
          
          <button class="modal-close-btn" id="program-modal-close" aria-label="Tutup Detail">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>

          <div style="position: absolute; bottom: 1.5rem; left: 2rem; right: 2rem; display: flex; flex-direction: column; gap: 0.5rem;">
            <div style="display: flex; gap: 0.75rem; align-items: center; flex-wrap: wrap;">
              <span class="badge ${getStatusBadgeClass(proker.status)}">${proker.status}</span>
              <span class="tag-dept" style="background: rgba(37,99,235,0.4);">${proker.category}</span>
              <span style="font-size: 0.8rem; color: #cbd5e1;">&bull; ${proker.department}</span>
            </div>
            <h2 style="font-size: 1.85rem; font-weight: 800; color: #ffffff; line-height: 1.2;">${proker.title}</h2>
          </div>
        </div>

        <div class="modal-body">
          {/* Metadata Bar */}
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); gap: 1rem; padding: 1rem 1.25rem; background: rgba(7,12,24,0.5); border: 1px solid rgba(175,203,238,0.12); border-radius: 12px; margin-bottom: 1.75rem;">
            <div>
              <div style="font-size: 0.75rem; color: #94a3b8; text-transform: uppercase;">Waktu / Periode</div>
              <div style="font-size: 0.95rem; font-weight: 600; color: #ffffff; margin-top: 0.2rem;">${proker.date}</div>
            </div>
            <div>
              <div style="font-size: 0.75rem; color: #94a3b8; text-transform: uppercase;">Lokasi</div>
              <div style="font-size: 0.95rem; font-weight: 600; color: #ffffff; margin-top: 0.2rem;">${proker.location}</div>
            </div>
            <div>
              <div style="font-size: 0.75rem; color: #94a3b8; text-transform: uppercase;">Sasaran Peserta</div>
              <div style="font-size: 0.95rem; font-weight: 600; color: #ffffff; margin-top: 0.2rem;">${proker.targetAudience}</div>
            </div>
          </div>

          {/* Deskripsi */}
          <div style="margin-bottom: 1.75rem;">
            <h4 style="font-size: 1.05rem; font-weight: 700; color: #ffffff; margin-bottom: 0.75rem;">Latar Belakang & Gambaran Acara</h4>
            <p style="color: #cbd5e1; font-size: 0.95rem; line-height: 1.7;">${proker.description}</p>
          </div>

          {/* Tujuan Kegiatan */}
          <div style="margin-bottom: 1.75rem;">
            <h4 style="font-size: 1.05rem; font-weight: 700; color: #ffffff; margin-bottom: 0.75rem;">Tujuan Program</h4>
            <ul style="padding-left: 0;">
              ${objectivesHtml}
            </ul>
          </div>

          {/* Tags */}
          <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; padding-top: 1rem; border-top: 1px solid rgba(255,255,255,0.06);">
            ${tagsHtml}
          </div>
        </div>
      </div>
    </div>
  `;
}

