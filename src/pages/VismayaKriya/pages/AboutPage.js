/***
 * AboutPage Component (Tentang)
 * Profil Kabinet & Filosofi Logo, Visi, Timeline Misi 1-5 Interaktif, & Struktur Organisasi
 */

import { cabinetInfo } from '../data/organization.js';
import { departmentsData } from '../data/departments.js';
import { api } from '../utils/api.js';
import { renderDepartmentModal, initDepartmentModalEvents } from '../components/DepartmentModal.js';

export async function renderAboutPage() {
  const info = await api.getCabinetInfo();

  return `
    <div class="about-page">
      {/* Sub-Hero Banner */}
      <section class="section section-dark" style="padding-top: 7rem; padding-bottom: 3.5rem; background: radial-gradient(circle at top, #101a33 0%, #070c18 100%);">
        <div class="container text-center" style="text-align: center;">
          <div class="section-tag">Mengenal Lebih Dekat</div>
          <h1 class="section-title" style="font-size: clamp(2.2rem, 4vw, 3.5rem);">Tentang Kabinet Nexus Inspirasi</h1>
          <p class="section-subtitle">
            Merajut potensi mahasiswa, menghidupkan percikan inspirasi, dan menakhodai transformasi Fakultas Teknologi Informasi Universitas Andalas.
          </p>
          <div class="section-divider"></div>
        </div>
      </section>

      {/* PROFIL & FILOSOFI LOGO */}
      <section class="section section-dark-alt">
        <div class="container">
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 3.5rem; align-items: center;">
            {/* Logo Visual Showcase */}
            <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; position: relative;">
              <div style="position: absolute; width: 320px; height: 320px; background: radial-gradient(circle, rgba(56,189,248,0.2) 0%, transparent 70%); filter: blur(50px);"></div>
              <div style="width: 280px; height: 280px; border-radius: 50%; background: rgba(16,26,51,0.6); border: 2px solid var(--border-dark-hover); padding: 2rem; display: flex; align-items: center; justify-content: center; box-shadow: var(--shadow-card-dark), var(--glow-subtle); position: relative; z-index: 2;">
                <img src="${info.logo}" alt="Logo Nexus Inspirasi" style="width: 100%; height: 100%; object-fit: contain; filter: drop-shadow(0 0 15px rgba(56, 189, 248, 0.4));">
              </div>
              <div style="margin-top: 1.5rem; text-align: center;">
                <span class="badge badge-status-ongoing" style="font-size: 0.85rem; padding: 0.4rem 1rem;">
                  Logo Resmi Kabinet Nexus Inspirasi
                </span>
              </div>
            </div>

            {/* Narasi Filosofi */}
            <div>
              <div class="section-tag" style="margin-bottom: 0.75rem;">Identitas & Landasan Filosofis</div>
              <h2 style="font-size: 2.2rem; font-weight: 800; color: #ffffff; margin-bottom: 1.25rem; line-height: 1.2;">
                Simpul Pertemuan, Percikan Perubahan
              </h2>
              <p style="color: #cbd5e1; font-size: 1rem; line-height: 1.8; margin-bottom: 1.5rem;">
                ${info.philosophy.concept}
              </p>

              <div style="display: flex; flex-direction: column; gap: 1rem;">
                ${info.philosophy.symbolism.map(sym => `
                  <div style="padding: 1rem 1.25rem; background: rgba(7,12,24,0.5); border-left: 3px solid #38bdf8; border-radius: 0 10px 10px 0; border-top: 1px solid rgba(175,203,238,0.1); border-right: 1px solid rgba(175,203,238,0.1); border-bottom: 1px solid rgba(175,203,238,0.1);">
                    <div style="font-weight: 700; color: #ffffff; font-size: 0.95rem; margin-bottom: 0.25rem;">${sym.element}</div>
                    <div style="font-size: 0.88rem; color: #94a3b8; line-height: 1.5;">${sym.meaning}</div>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VISI KABINET */}
      <section class="section section-dark">
        <div class="container">
          <div style="max-width: 920px; margin: 0 auto; text-align: center; background: linear-gradient(135deg, rgba(22,36,69,0.7) 0%, rgba(16,26,51,0.95) 100%); border: 1px solid var(--border-dark-hover); border-radius: var(--radius-xl); padding: 3.5rem 2.5rem; box-shadow: var(--shadow-card-dark), var(--glow-subtle); position: relative; overflow: hidden;">
            <div style="position: absolute; top: -50px; right: -50px; width: 200px; height: 200px; background: radial-gradient(circle, rgba(59,130,246,0.15), transparent 70%);"></div>
            <div class="section-tag" style="margin-bottom: 1.25rem;">Visi Besar</div>
            <h2 style="font-size: 2.2rem; font-weight: 800; color: #ffffff; margin-bottom: 1.5rem;">VISI KABINET</h2>
            <blockquote style="font-family: var(--font-editorial); font-size: clamp(1.2rem, 2.5vw, 1.65rem); color: var(--color-icy-100); line-height: 1.6; font-style: italic; position: relative;">
              "${info.vision}"
            </blockquote>
          </div>
        </div>
      </section>

      {/* 5 MISI INTERAKTIF DALAM TIMELINE BERURUTAN */}
      <section class="section section-dark-alt">
        <div class="container">
          <div class="section-header">
            <div class="section-tag">Rencana Strategis</div>
            <h2 class="section-title">5 Pilar Misi Nexus Inspirasi</h2>
            <p class="section-subtitle">
              Lima langkah nyata dan terukur dalam merealisasikan marwah pergerakan, advokasi, dan kemajuan ekosistem mahasiswa FTI.
            </p>
            <div class="section-divider"></div>
          </div>

          {/* Timeline Misi */}
          <div class="mission-timeline">
            ${info.missions.map(m => `
              <div class="mission-item">
                <div class="mission-number-node">${m.id}</div>
                <div class="mission-card">
                  <h3 class="mission-title">${m.title}</h3>
                  <p class="mission-text">${m.desc}</p>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      {/* STRUKTUR ORGANISASI KABINET INTERAKTIF */}
      <section class="section section-dark" id="struktur-organisasi">
        <div class="container">
          <div class="section-header">
            <div class="section-tag">Hierarki Kelembagaan</div>
            <h2 class="section-title">Struktur Kabinet Nexus Inspirasi</h2>
            <p class="section-subtitle">
              Bagan kepemimpinan terintegrasi: Gubernur & Wakil Gubernur, Sekretaris Kabinet, Bendahara Umum, serta 9 Dinas dan 1 Biro. Klik pada dinas untuk melihat profil lengkapnya.
            </p>
            <div class="section-divider"></div>
          </div>

          {/* Interactive Hierarchy Tree Container */}
          <div style="display: flex; flex-direction: column; align-items: center; gap: 2rem;">
            {/* Top: Governor & Vice Governor */}
            <div style="display: flex; gap: 2rem; justify-content: center; flex-wrap: wrap;">
              <div style="display: flex; align-items: center; gap: 1rem; background: var(--bg-dark-card); border: 2px solid #3b82f6; border-radius: 16px; padding: 1.25rem 2rem; box-shadow: var(--shadow-card-dark); min-width: 280px;">
                <div style="width: 60px; height: 60px; border-radius: 50%; overflow: hidden; border: 2px solid #60a5fa; flex-shrink: 0; background: #050811;">
                  <img src="${info.leaders.governor.image}" alt="${info.leaders.governor.name}" style="width: 100%; height: 100%; object-fit: cover;">
                </div>
                <div>
                  <div style="font-size: 0.75rem; color: #60a5fa; font-weight: 700; text-transform: uppercase;">Gubernur Mahasiswa</div>
                  <div style="font-size: 1.15rem; font-weight: 800; color: #ffffff;">${info.leaders.governor.name}</div>
                </div>
              </div>

              <div style="display: flex; align-items: center; gap: 1rem; background: var(--bg-dark-card); border: 2px solid #3b82f6; border-radius: 16px; padding: 1.25rem 2rem; box-shadow: var(--shadow-card-dark); min-width: 280px;">
                <div style="width: 60px; height: 60px; border-radius: 50%; overflow: hidden; border: 2px solid #60a5fa; flex-shrink: 0; background: #050811;">
                  <img src="${info.leaders.viceGovernor.image}" alt="${info.leaders.viceGovernor.name}" style="width: 100%; height: 100%; object-fit: cover;">
                </div>
                <div>
                  <div style="font-size: 0.75rem; color: #60a5fa; font-weight: 700; text-transform: uppercase;">Wakil Gubernur</div>
                  <div style="font-size: 1.15rem; font-weight: 800; color: #ffffff;">${info.leaders.viceGovernor.name}</div>
                </div>
              </div>
            </div>

            {/* Connector Line Down */}
            <div style="width: 2px; height: 32px; background: linear-gradient(180deg, #3b82f6, #60a5fa);"></div>

            {/* Middle: Secretariat & Finance */}
            <div style="display: flex; gap: 2rem; justify-content: center; flex-wrap: wrap;">
              <div style="display: flex; align-items: center; gap: 0.85rem; background: rgba(16,26,51,0.9); border: 1px solid var(--border-dark); border-radius: 12px; padding: 1rem 1.5rem; min-width: 230px;">
                <div style="width: 46px; height: 46px; border-radius: 50%; overflow: hidden; border: 1px solid #60a5fa; background: #050811;">
                  <img src="${info.leaders.secretariat.image}" alt="Sekretaris Daerah" style="width: 100%; height: 100%; object-fit: cover;">
                </div>
                <div>
                  <div style="font-size: 0.72rem; color: #94a3b8; text-transform: uppercase;">Sekretariat</div>
                  <div style="font-size: 0.95rem; font-weight: 700; color: #ffffff;">Sekretaris Daerah</div>
                </div>
              </div>

              <div style="display: flex; align-items: center; gap: 0.85rem; background: rgba(16,26,51,0.9); border: 1px solid var(--border-dark); border-radius: 12px; padding: 1rem 1.5rem; min-width: 230px;">
                <div style="width: 46px; height: 46px; border-radius: 50%; overflow: hidden; border: 1px solid #60a5fa; background: #050811;">
                  <img src="${info.leaders.finance.image}" alt="Bendahara Umum" style="width: 100%; height: 100%; object-fit: cover;">
                </div>
                <div>
                  <div style="font-size: 0.72rem; color: #94a3b8; text-transform: uppercase;">Keuangan</div>
                  <div style="font-size: 0.95rem; font-weight: 700; color: #ffffff;">Bendahara Umum</div>
                </div>
              </div>
            </div>

            {/* Connector Line Down */}
            <div style="width: 2px; height: 32px; background: linear-gradient(180deg, #60a5fa, #1e3158);"></div>

            {/* Grid: 10 Dinas & Biro */}
            <div style="width: 100%; margin-top: 1rem;">
              <div style="text-align: center; margin-bottom: 1.5rem; font-size: 0.85rem; color: #60a5fa; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase;">
                Jajaran Pelaksana: 9 Dinas &bull; 1 Biro
              </div>

              <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 1rem;">
                ${departmentsData.map(d => `
                  <div class="org-node-card" data-slug="${d.slug}" style="background: var(--bg-dark-card); border: 1px solid var(--border-dark); border-radius: 12px; padding: 1.25rem 1rem; text-align: center; cursor: pointer; transition: all var(--transition-fast);">
                    <div style="width: 48px; height: 48px; margin: 0 auto 0.75rem; border-radius: 10px; background: rgba(255,255,255,0.03); padding: 6px; display: flex; align-items: center; justify-content: center;">
                      <img src="${d.logo}" alt="${d.name}" style="width: 100%; height: 100%; object-fit: contain;">
                    </div>
                    <span class="badge" style="font-size: 0.7rem; background: rgba(59,130,246,0.15); color: #60a5fa; margin-bottom: 0.35rem;">${d.type}</span>
                    <div style="font-weight: 700; color: #ffffff; font-size: 0.95rem;">${d.shortName}</div>
                    <div style="font-size: 0.75rem; color: #94a3b8; margin-top: 0.25rem;">${d.headName}</div>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  `;
}

export function initAboutPageEvents() {
  document.querySelectorAll('.org-node-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.borderColor = '#60a5fa';
      card.style.transform = 'translateY(-4px)';
    });
    card.addEventListener('mouseleave', () => {
      card.style.borderColor = 'var(--border-dark)';
      card.style.transform = 'none';
    });
    card.addEventListener('click', async () => {
      const slug = card.getAttribute('data-slug');
      try {
        const dept = await api.getDepartmentBySlug(slug);
        const modalHtml = renderDepartmentModal(dept);
        document.body.insertAdjacentHTML('beforeend', modalHtml);
        initDepartmentModalEvents(dept);
        document.getElementById('dept-modal-close')?.addEventListener('click', () => {
          document.getElementById('dept-modal-overlay')?.remove();
        });
        document.getElementById('dept-modal-overlay')?.addEventListener('click', (e) => {
          if (e.target.id === 'dept-modal-overlay') e.target.remove();
        });
      } catch (err) {
        console.error(err);
      }
    });
  });
}

