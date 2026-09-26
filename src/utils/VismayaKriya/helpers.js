/***
 * Utility & Helper Functions
 */

export const $ = (selector, context = document) => context.querySelector(selector);
export const $$ = (selector, context = document) => Array.from(context.querySelectorAll(selector));

export function debounce(func, delay = 250) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => func.apply(this, args), delay);
  };
}

export function escapeHtml(str) {
  if (typeof str !== 'string') return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

export function getStatusBadgeClass(status) {
  switch (status?.toLowerCase()) {
    case 'selesai':
    case 'completed':
      return 'badge-status-completed';
    case 'sedang berjalan':
    case 'ongoing':
      return 'badge-status-ongoing';
    case 'akan datang':
    case 'upcoming':
    default:
      return 'badge-status-upcoming';
  }
}
