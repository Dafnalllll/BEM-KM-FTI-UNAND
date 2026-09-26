const assetModules = import.meta.glob('/src/assets/**/*.{webp,png,jpg,jpeg,svg,gif}', { eager: true });

export function resolveAsset(path) {
  if (!path) return '';
  if (typeof path !== 'string') return path;
  if (path.startsWith('http') || path.startsWith('data:') || path.startsWith('blob:')) return path;

  let cleanPath = path;
  cleanPath = cleanPath.replace(/^\/vismayakriya\/dinasnexus\//, '/src/assets/dinasnexus/');
  cleanPath = cleanPath.replace(/^\/dinasnexus\//, '/src/assets/dinasnexus/');
  cleanPath = cleanPath.replace(/^\/vismayakriya\//, '/src/assets/');

  if (!cleanPath.startsWith('/src/assets/')) {
    cleanPath = '/src/assets/' + cleanPath.replace(/^\//, '');
  }

  if (assetModules[cleanPath]) {
    return assetModules[cleanPath].default || assetModules[cleanPath];
  }

  const lowerClean = cleanPath.toLowerCase();
  for (const key in assetModules) {
    if (key.toLowerCase() === lowerClean) {
      return assetModules[key].default || assetModules[key];
    }
  }

  const filename = cleanPath.split('/').pop()?.toLowerCase();
  if (filename) {
    for (const key in assetModules) {
      if (key.toLowerCase().endsWith('/' + filename)) {
        return assetModules[key].default || assetModules[key];
      }
    }
  }

  // Special logo aliases fallback
  if (lowerClean.includes('sosmas') && lowerClean.includes('logo')) {
    const sosmasKey = Object.keys(assetModules).find(k => k.includes('logo/sosmas.webp'));
    if (sosmasKey) return assetModules[sosmasKey].default || assetModules[sosmasKey];
  }

  return cleanPath;
}

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

