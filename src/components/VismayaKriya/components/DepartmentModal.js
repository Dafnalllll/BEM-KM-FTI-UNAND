/***
 * Department Modal Component
 * Menampilkan detail lengkap Dinas/Biro: Visi, Misi, Pimpinan, Staf (Biodata Interaktif), dan Program Kerja
 */

import { cabinetInfo } from '../../../data/VismayaKriya/organization.js';

export function renderStaffModal(staff, deptShortName) {
  if (!staff) return '';

  const socialsHtml = [];
  if (staff.sosmed?.instagram) {
    socialsHtml.push(`
      <a href="${staff.sosmed.instagram}" target="_blank" rel="noopener noreferrer" style="display: flex; align-items: center; justify-content: center; gap: 0.5rem; padding: 0.6rem 1.2rem; background: linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045); color: #ffffff; border-radius: 8px; font-weight: 600; font-size: 0.85rem; text-decoration: none; transition: transform 0.2s;" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
        <span>Instagram</span>
      </a>
    `);
  }
  if (staff.sosmed?.linkedin) {
    socialsHtml.push(`
      <a href="${staff.sosmed.linkedin}" target="_blank" rel="noopener noreferrer" style="display: flex; align-items: center; justify-content: center; gap: 0.5rem; padding: 0.6rem 1.2rem; background: #0a66c2; color: #ffffff; border-radius: 8px; font-weight: 600; font-size: 0.85rem; text-decoration: none; transition: transform 0.2s;" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
        <span>LinkedIn</span>
      </a>
    `);
  }

  return `
    <div class="modal-overlay open" id="staff-modal-overlay" style="z-index: 1100;">
      <div class="modal-dialog" style="max-width: 420px; padding: 0; overflow: hidden; border-radius: 20px; background: #0b1224; border:1px solid rgba(96, 165, 250, 0.45); box-shadow: 0 20px 50px rgba(37, 99, 235, 0.25), var(--glow-subtle);
  ...">
        {/* Modal Header / Cover */}
        <div style="position: relative; padding: 2.2rem 1.5rem 1.5rem; text-align: center; background: linear-gradient(180deg, rgba(24, 46, 102, 0.88), rgba(18, 36, 79, 0.92));">
          <button class="modal-close-btn" id="staff-modal-close" aria-label="Tutup Biodata" style="position: absolute; top: 1rem; right: 1rem; background: rgba(0,0,0,0.4); color: #fff; border: 1px solid rgba(255,255,255,0.2); border-radius: 50%; width: 32px; height: 32px; display: flex; align-items: center; justify-content: center; cursor: pointer;">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
          
          <div style="width: 110px; height: 110px; margin: 0 auto 1rem; border-radius: 50%; overflow: hidden; border: 3px solid #60a5fa; box-shadow: 0 8px 24px rgba(59,130,246,0.4); background: #050811;">
            <img src="${staff.image}" alt="${staff.name}" style="width: 100%; height: 100%; object-fit: cover;">
          </div>
          
          <h3 style="font-size: 1.35rem; font-weight: 800; color: #ffffff; margin-bottom: 0.25rem;">${staff.name}</h3>
          <div style="font-size: 0.85rem; color: #60a5fa; font-weight: 600;">Staf Fungsionaris ${deptShortName}</div>
        </div>

        <div style="padding: 1.5rem;">
          {/* Staff Meta Info */}
          <div style="display: flex; flex-direction: column; gap: 0.75rem; background: rgba(16,26,51,0.6); border: 1px solid rgba(175,203,238,0.12); border-radius: 12px; padding: 1rem 1.25rem; margin-bottom: 1.5rem;">
            <div style="display: flex; justify-content: space-between; align-items: center; font-size: 0.9rem;">
              <span style="color: #94a3b8;">Jurusan</span>
              <span style="color: #ffffff; font-weight: 600;">${staff.jurusan || 'Teknologi Informasi'}</span>
            </div>
            <div style="height: 1px; background: rgba(255,255,255,0.06);"></div>
            <div style="display: flex; justify-content: space-between; align-items: center; font-size: 0.9rem;">
              <span style="color: #94a3b8;">Angkatan</span>
              <span style="color: #ffffff; font-weight: 600;">Angkatan ${staff.angkatan || '-'}</span>
            </div>
          </div>

          {/* Social Media Section */}
          ${socialsHtml.length > 0 ? `
            <div>
              <div style="font-size: 0.78rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: #94a3b8; margin-bottom: 0.75rem; text-align: center;">Tautan Media Sosial</div>
              <div style="display: flex; gap: 0.75rem; justify-content: center; flex-wrap: wrap;">
                ${socialsHtml.join('')}
              </div>
            </div>
          ` : ''}
        </div>
      </div>
    </div>
  `;
}

export function renderDepartmentModal(dept) {
  if (!dept) return '';

  const leadersHtml = (dept.leaders || []).map(l => `
    <div style="display: flex; flex-direction: column; align-items: center; text-align: center; gap: 0.5rem;">
      <div style="width: 90px; height: 90px; border-radius: 50%; overflow: hidden; border: 2px solid #60a5fa; box-shadow: 0 4px 14px rgba(59,130,246,0.3); background: #050811;">
        <img src="${l.image}" alt="${l.name}" style="width: 100%; height: 100%; object-fit: cover;">
      </div>
      <div>
        <div style="font-weight: 700; color: #ffffff; font-size: 0.95rem;">${l.name}</div>
        <div style="font-size: 0.78rem; color: #93c5fd;">${l.role}</div>
      </div>
    </div>
  `).join('');

  const staffHtml = (dept.staff || []).map((s, idx) => `
    <div class="staff-card-item" data-staff-idx="${idx}" title="Klik untuk lihat biodata ${s.name}" style="display: flex; flex-direction: column; align-items: center; text-align: center; gap: 0.4rem; padding: 0.65rem 0.5rem; border-radius: 10px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); cursor: pointer; transition: all 0.2s ease;">
      <div style="width: 64px; height: 64px; border-radius: 50%; overflow: hidden; border: 2px solid rgba(96,165,250,0.3); background: #050811;">
        <img src="${s.image}" alt="${s.name}" style="width: 100%; height: 100%; object-fit: cover;">
      </div>
      <div style="font-size: 0.82rem; font-weight: 600; color: #dcebff;">${s.name}</div>
      <div style="font-size: 0.7rem; color: #94a3b8;">Staff ${dept.shortName}</div>
      <span style="font-size: 0.65rem; color: #60a5fa; margin-top: 2px; font-weight: 600; display: inline-flex; align-items: center; gap: 2px;">
        Biodata &rarr;
      </span>
    </div>
  `).join('');

  const programsHtml = (dept.programs || []).map(prog => `
    <div style="display: flex; align-items: center; gap: 0.75rem; padding: 0.75rem 1rem; border-radius: 10px; background: rgba(22,36,69,0.5); border: 1px solid rgba(175,203,238,0.15);">
      <div style="width: 8px; height: 8px; border-radius: 50%; background: #38bdf8; box-shadow: 0 0 8px #38bdf8;"></div>
      <div style="font-weight: 600; color: #ffffff; font-size: 0.9rem;">${prog}</div>
    </div>
  `).join('');

  const missionsHtml = (dept.missions || []).map((m, idx) => `
    <div style="display: flex; gap: 0.75rem; align-items: flex-start; margin-bottom: 0.75rem;">
      <div style="width: 24px; height: 24px; border-radius: 50%; background: #2563eb; color: #fff; display: flex; align-items: center; justify-content: center; font-size: 0.75rem; font-weight: 700; flex-shrink: 0; margin-top: 2px;">
        ${idx + 1}
      </div>
      <div style="font-size: 0.92rem; color: #dcebff; line-height: 1.6;">${m}</div>
    </div>
  `).join('');

  return `
    <div class="modal-overlay open" id="dept-modal-overlay">
      <div class="modal-dialog">
        {/* Banner Header */}
        <div class="modal-header-banner" style="background: linear-gradient(135deg, #0b1224 0%, #162445 100%);">
          <button class="modal-close-btn" id="dept-modal-close" aria-label="Tutup Detail">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
          
          <div style="display: flex; align-items: flex-end; gap: 1.5rem; transform: translateY(28px); width: 100%;">
            <div style="width: 88px; height: 88px; border-radius: 16px; background: #070c18; border: 2px solid #60a5fa; padding: 10px; display: flex; align-items: center; justify-content: center; box-shadow: 0 10px 25px rgba(0,0,0,0.5); flex-shrink: 0;">
              <img src="${dept.logo}" alt="${dept.name}" style="width: 100%; height: 100%; object-fit: contain;">
            </div>
            <div style="margin-bottom: 34px;">
              <span class="badge" style="background: rgba(59,130,246,0.2); color: #60a5fa; border: 1px solid rgba(96,165,250,0.3); margin-bottom: 0.35rem;">
                ${dept.type} &bull; ${cabinetInfo.cabinet}
              </span>
              <h2 style="font-size: 1.75rem; font-weight: 800; color: #ffffff; line-height: 1.2;">${dept.type} ${dept.name}</h2>
            </div>
          </div>
        </div>

        <div class="modal-body" style="padding-top: 3.5rem;">
          {/* Ringkasan Deskripsi */}
          <div style="margin-bottom: 2rem;">
            <h4 style="font-size: 1.05rem; font-weight: 700; color: #ffffff; margin-bottom: 0.75rem; display: flex; align-items: center; gap: 0.5rem;">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
              Deskripsi & Peran
            </h4>
            <p style="color: #cbd5e1; font-size: 0.95rem; line-height: 1.7;">${dept.description}</p>
          </div>

          {/* Visi & Misi */}
          <div style="background: rgba(7,12,24,0.5); border: 1px solid rgba(175,203,238,0.12); border-radius: 12px; padding: 1.5rem; margin-bottom: 2rem;">
            <div style="margin-bottom: 1.25rem;">
              <div style="font-size: 0.8rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: #60a5fa; margin-bottom: 0.35rem;">Visi Departemen</div>
              <div style="font-size: 1rem; font-weight: 600; color: #ffffff; font-style: italic;">"${dept.vision}"</div>
            </div>
            <div>
              <div style="font-size: 0.8rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: #60a5fa; margin-bottom: 0.5rem;">Misi Utama</div>
              ${missionsHtml}
            </div>
          </div>

          {/* Pimpinan Dinas */}
          <div style="margin-bottom: 2rem;">
            <h4 style="font-size: 1.05rem; font-weight: 700; color: #ffffff; margin-bottom: 1rem;">Jajaran Pimpinan</h4>
            <div style="display: flex; gap: 2rem; justify-content: flex-start; flex-wrap: wrap;">
              ${leadersHtml}
            </div>
          </div>

          {/* Staf Fungsionaris */}
          ${staffHtml ? `
            <div style="margin-bottom: 2rem;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
                <h4 style="font-size: 1.05rem; font-weight: 700; color: #ffffff; margin: 0;">Fungsionaris & Staf</h4>
                <span style="font-size: 0.78rem; color: #60a5fa;">(Klik kartu staf untuk melihat biodata)</span>
              </div>
              <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(110px, 1fr)); gap: 0.75rem;">
                ${staffHtml}
              </div>
            </div>
          ` : ''}

          {/* Program Kerja Unggulan */}
          <div>
            <h4 style="font-size: 1.05rem; font-weight: 700; color: #ffffff; margin-bottom: 1rem;">Program Kerja yang Dikelola</h4>
            <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 0.75rem;">
              ${programsHtml}
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

export function initDepartmentModalEvents(dept) {
  const deptOverlay = document.getElementById('dept-modal-overlay');
  if (!deptOverlay || !dept) return;

  deptOverlay.querySelectorAll('.staff-card-item').forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.background = 'rgba(59,130,246,0.15)';
      card.style.borderColor = '#60a5fa';
      card.style.transform = 'translateY(-3px)';
    });
    card.addEventListener('mouseleave', () => {
      card.style.background = 'rgba(255,255,255,0.03)';
      card.style.borderColor = 'rgba(255,255,255,0.08)';
      card.style.transform = 'none';
    });
    card.addEventListener('click', (e) => {
      e.stopPropagation();
      const idx = card.getAttribute('data-staff-idx');
      const staffMember = dept.staff?.[parseInt(idx, 10)];
      if (!staffMember) return;

      document.getElementById('staff-modal-overlay')?.remove();
      const staffModalHtml = renderStaffModal(staffMember, dept.shortName);
      document.body.insertAdjacentHTML('beforeend', staffModalHtml);

      const closeStaffModal = () => document.getElementById('staff-modal-overlay')?.remove();
      document.getElementById('staff-modal-close')?.addEventListener('click', closeStaffModal);
      document.getElementById('staff-modal-overlay')?.addEventListener('click', (ev) => {
        if (ev.target.id === 'staff-modal-overlay') closeStaffModal();
      });
    });
  });
}

