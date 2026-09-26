import React from 'react';
import ReactDOM from 'react-dom';

export function NewsModal({ article, onClose }) {
  if (!article) return null;

  const modalContent = (
    <div className="modal-overlay open" id="news-modal-overlay" style={{ zIndex: 1050 }} onClick={onClose}>
      <div className="modal-dialog" style={{ maxWidth: '740px' }} onClick={(e) => e.stopPropagation()}>
        <div style={{ position: 'relative', width: '100%', height: '280px', overflow: 'hidden', background: '#050811' }}>
          <img src={article.thumbnail} alt={article.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(7,12,24,0.2) 0%, rgba(11,18,36,0.95) 100%)' }}></div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Tutup Berita">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
          <div style={{ position: 'absolute', bottom: '1.5rem', left: '2rem', right: '2rem' }}>
            <span className="badge" style={{ background: '#2563eb', color: '#fff', marginBottom: '0.5rem' }}>{article.category}</span>
            <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#fff', lineHeight: 1.2 }}>{article.title}</h2>
          </div>
        </div>
        <div className="modal-body" style={{ padding: '2rem' }}>
          <div style={{ display: 'flex', gap: '1rem', fontSize: '0.85rem', color: '#94a3b8', marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
            <span>Oleh: <strong style={{ color: '#fff' }}>{article.author}</strong></span>
            <span>&bull;</span>
            <span>{article.date}</span>
            <span>&bull;</span>
            <span>{article.readTime}</span>
          </div>
          <div style={{ color: '#cbd5e1', fontSize: '0.95rem', lineHeight: 1.8 }}>
            {article.content}
          </div>
        </div>
      </div>
    </div>
  );

  return ReactDOM.createPortal(modalContent, document.body);
}
