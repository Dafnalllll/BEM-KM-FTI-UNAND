import React, { useEffect } from 'react';

export function NewsModalVismayakriya({ article, isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  if (!isOpen || !article) return null;

  return (
    <div
      className="modal-overlay open"
      id="news-modal-overlay"
      onClick={(e) => {
        if (e.target.id === 'news-modal-overlay') onClose();
      }}
    >
      <div className="modal-dialog" style={{ maxWidth: '740px', background: '#0f172a', border: '1px solid rgba(59, 130, 246, 0.3)', boxShadow: '0 25px 60px rgba(0,0,0,0.8)' }}>
        <div style={{ position: 'relative', width: '100%', height: '280px', overflow: 'hidden', background: '#050811' }}>
          <img src={article.thumbnail} alt={article.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(7,12,24,0.2) 0%, rgba(15,23,42,0.95) 100%)' }}></div>
          <button className="modal-close-btn" id="news-modal-close" aria-label="Tutup" onClick={onClose}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
          <div style={{ position: 'absolute', bottom: '1.5rem', left: '2rem', right: '2rem' }}>
            <span className="badge" style={{ background: '#2563eb', color: '#fff', marginBottom: '0.5rem', fontWeight: 700 }}>{article.category}</span>
            <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#ffffff', lineHeight: 1.2 }}>{article.title}</h2>
          </div>
        </div>
        <div className="modal-body" style={{ background: '#0f172a', padding: '2rem' }}>
          <div style={{ display: 'flex', gap: '1rem', fontSize: '0.88rem', color: '#93c5fd', marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
            <span>Oleh: <strong style={{ color: '#ffffff' }}>{article.author}</strong></span>
            <span>&bull;</span>
            <span>{article.date}</span>
            <span>&bull;</span>
            <span>{article.readTime}</span>
          </div>
          <div
            style={{ color: '#f1f5f9', fontSize: '1rem', lineHeight: 1.8, fontWeight: 400 }}
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </div>
      </div>
    </div>
  );
}
