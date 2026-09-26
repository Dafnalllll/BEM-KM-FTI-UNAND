import React, { useState, useEffect } from 'react';
import { api } from '../utils/api.js';

export function AspirationPage({ onOpenAspiration }) {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    setHistory(api.getStoredAspirations());
  }, []);

  return (
    <div className="aspiration-page">
      {/* Sub-Hero Banner */}
      <section className="section section-dark" style={{ paddingTop: '7rem', paddingBottom: '3.5rem', background: 'radial-gradient(circle at top, #101a33 0%, #070c18 100%)' }}>
        <div className="container text-center" style={{ textAlign: 'center' }}>
          <div className="section-tag">Ruang Suara Mahasiswa</div>
          <h1 className="section-title" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)' }}>Kanal Aspirasi & Keluhan</h1>
          <p className="section-subtitle">
            BEM KM FTI menyediakan wadah transparan dan aman bagi mahasiswa untuk menyuarakan aspirasi, masalah UKT, fasilitas kampus, dan keluhan akademik.
          </p>
          <div className="section-divider"></div>
        </div>
      </section>

      <section className="section section-dark-alt" style={{ padding: '5rem 0' }}>
        <div className="container" style={{ maxWidth: '880px' }}>
          
          <div style={{ textAlign: 'center', background: 'linear-gradient(135deg, rgba(22,36,69,0.8), rgba(16,26,51,0.95))', border: '1px solid rgba(96,165,250,0.3)', borderRadius: '20px', padding: '3.5rem 2rem', boxShadow: '0 20px 50px rgba(0,0,0,0.5)', marginBottom: '4rem' }}>
            <span className="badge badge-status-ongoing" style={{ marginBottom: '1rem' }}>Layanan Siap Melayani</span>
            <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#ffffff', marginBottom: '1rem' }}>Sampaikan Aspirasimu Sekarang</h2>
            <p style={{ color: '#cbd5e1', fontSize: '1.05rem', lineHeight: 1.7, maxWidth: '640px', margin: '0 auto 2rem' }}>
              Kamu dapat memilih untuk mengirimkan aspirasimu secara anonim demi kenyamanan. Setiap suara akan diproses dan ditindaklanjuti oleh Dinas Advokasi & Kesejahteraan Mahasiswa.
            </p>
            <button className="btn btn-primary btn-lg btn-glow" onClick={onOpenAspiration} type="button">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
              <span>Buka Formulir Aspirasi</span>
            </button>
          </div>

          {/* Riwayat Aspirasi Pengguna jika ada */}
          {history.length > 0 && (
            <div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#ffffff', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                Riwayat Aspirasi Anda (Perangkat Ini)
              </h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {history.map((asp) => (
                  <div key={asp.id} style={{ background: 'rgba(16,26,51,0.6)', border: '1px solid rgba(175,203,238,0.12)', borderRadius: '14px', padding: '1.25rem 1.5rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                      <span className="badge" style={{ background: 'rgba(59,130,246,0.2)', color: '#60a5fa', border: '1px solid rgba(96,165,250,0.3)' }}>{asp.category}</span>
                      <span style={{ fontSize: '0.78rem', color: '#94a3b8' }}>{new Date(asp.submittedAt).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit' })}</span>
                    </div>
                    <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.4rem' }}>{asp.subject}</h4>
                    <p style={{ color: '#cbd5e1', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '0.75rem' }}>{asp.message}</p>
                    <div style={{ fontSize: '0.8rem', color: '#4ade80', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#4ade80' }}></span>
                      Status: {asp.status}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </section>
    </div>
  );
}

