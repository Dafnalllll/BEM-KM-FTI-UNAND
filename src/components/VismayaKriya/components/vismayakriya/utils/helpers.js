const assetModules = import.meta.glob('/src/assets/**/*.{webp,png,jpg,jpeg,svg,gif,PNG,JPG,JPEG,WEBP,SVG}', { eager: true });

export function resolveAsset(path) {
  if (!path) return '';

  // Handle ES module object if passed (e.g. { default: "..." })
  if (typeof path === 'object' && path !== null) {
    if (path.default) path = path.default;
    else return path;
  }

  if (typeof path !== 'string') return path;

  // 1. Direct URLs, data URIs, blob URIs
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:') || path.startsWith('blob:')) {
    return path;
  }

  // 2. Already built/bundled asset paths (e.g. "/assets/..." or "assets/...")
  if (!path.startsWith('/src/') && (path.startsWith('/assets/') || path.startsWith('assets/'))) {
    return path;
  }

  // 3. Normalize string paths for source assets lookup
  let cleanPath = path;
  cleanPath = cleanPath.replace(/^\/vismayakriya\/dinasvismaya\//, '/src/assets/dinasvismaya/');
  cleanPath = cleanPath.replace(/^\/dinasvismaya\//, '/src/assets/dinasvismaya/');
  cleanPath = cleanPath.replace(/^\/vismayakriya\/dinasvismayakriya\//, '/src/assets/dinasvismayakriya/');
  cleanPath = cleanPath.replace(/^\/dinasvismayakriya\//, '/src/assets/dinasvismayakriya/');
  cleanPath = cleanPath.replace(/^\/vismayakriya\/dinasnexus\//, '/src/assets/dinasnexus/');
  cleanPath = cleanPath.replace(/^\/dinasnexus\//, '/src/assets/dinasnexus/');
  cleanPath = cleanPath.replace(/^\/vismayakriya\/kabinet\//, '/src/assets/kabinet/');
  cleanPath = cleanPath.replace(/^\/kabinet\//, '/src/assets/kabinet/');
  cleanPath = cleanPath.replace(/^\/vismayakriya\//, '/src/assets/');

  if (assetModules[cleanPath]) {
    return assetModules[cleanPath].default || assetModules[cleanPath];
  }

  const srcPath = cleanPath.startsWith('/src/assets/') ? cleanPath : '/src/assets/' + cleanPath.replace(/^\//, '');
  if (assetModules[srcPath]) {
    return assetModules[srcPath].default || assetModules[srcPath];
  }

  const lowerSrc = srcPath.toLowerCase();
  for (const key in assetModules) {
    if (key.toLowerCase() === lowerSrc) {
      return assetModules[key].default || assetModules[key];
    }
  }

  const filename = cleanPath.split('/').pop()?.toLowerCase();
  if (filename) {
    const filenameHyphen = filename.replace(/\s+/g, '-');
    const filenameSpace = filename.replace(/-/g, ' ');
    for (const key in assetModules) {
      const keyLower = key.toLowerCase();
      if (keyLower.endsWith('/' + filename) || keyLower.endsWith('/' + filenameHyphen) || keyLower.endsWith('/' + filenameSpace)) {
        return assetModules[key].default || assetModules[key];
      }
    }
  }

  // Special logo aliases fallback
  if (cleanPath.toLowerCase().includes('sosmas') && cleanPath.toLowerCase().includes('logo')) {
    const sosmasKey = Object.keys(assetModules).find(k => k.includes('logo/sosmas.webp'));
    if (sosmasKey) return assetModules[sosmasKey].default || assetModules[sosmasKey];
  }

  return path;
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
  const s = status?.toLowerCase() || '';
  if (s.includes('selesai') || s.includes('sukses') || s.includes('completed')) {
    return 'badge-status-completed';
  }
  if (s.includes('progres') || s.includes('progress') || s.includes('berjalan') || s.includes('ongoing')) {
    return 'badge-status-ongoing';
  }
  return 'badge-status-upcoming';
}

export function matchesStatus(programStatus, filterStatus) {
  if (!filterStatus || filterStatus === 'all') return true;
  if (!programStatus) return false;

  const pStat = programStatus.toLowerCase().trim();
  const fStat = filterStatus.toLowerCase().trim();

  if (fStat.includes('progres') || fStat.includes('berjalan') || fStat.includes('berlangsung') || fStat === 'on progress') {
    return pStat.includes('progres') || pStat.includes('berjalan') || pStat.includes('berlangsung') || pStat.includes('ongoing');
  }
  if (fStat.includes('selesai') || fStat.includes('sukses') || fStat.includes('terlaksana') || fStat === 'completed') {
    return pStat.includes('selesai') || pStat.includes('sukses') || pStat.includes('terlaksana') || pStat.includes('completed');
  }
  if (fStat.includes('belum') || fStat.includes('akan') || fStat.includes('perancangan') || fStat === 'upcoming') {
    return pStat.includes('belum') || pStat.includes('akan') || pStat.includes('perancangan') || pStat.includes('upcoming');
  }
  return pStat === fStat || pStat.includes(fStat) || fStat.includes(pStat);
}

export function matchesCategory(programCategory, mainCategoryFilter) {
  if (!mainCategoryFilter || mainCategoryFilter === 'all') return true;
  if (!programCategory) return false;

  const pCat = programCategory.toLowerCase().trim();
  const mainCat = mainCategoryFilter.toLowerCase().trim();

  if (pCat === mainCat) return true;

  switch (mainCat) {
    case 'pendidikan & riset':
      return pCat.includes('pendidikan') || pCat.includes('riset') || pCat.includes('akademik') || pCat.includes('belajar') || pCat.includes('workshop') || pCat.includes('edukasi') || pCat.includes('seminar') || pCat.includes('lomba');
    case 'teknologi':
      return pCat.includes('teknologi') || pCat.includes('software') || pCat.includes('website') || pCat.includes('coding') || pCat.includes('it') || pCat.includes('inovasi');
    case 'advokasi & kesejahteraan':
      return pCat.includes('advokasi') || pCat.includes('kesejahteraan') || pCat.includes('beasiswa') || pCat.includes('layanan') || pCat.includes('audiensi') || pCat.includes('bantuan');
    case 'kewirausahaan':
      return pCat.includes('wirausaha') || pCat.includes('usaha') || pCat.includes('bisnis') || pCat.includes('kantin') || pCat.includes('produk');
    case 'pengabdian masyarakat':
      return pCat.includes('pengabdian') || pCat.includes('masyarakat') || pCat.includes('sosial') || pCat.includes('aksi') || pCat.includes('donasi') || pCat.includes('desa') || pCat.includes('lingkungan') || pCat.includes('ramadhan');
    case 'internal & kelembagaan':
      return pCat.includes('internal') || pCat.includes('kelembagaan') || pCat.includes('keorganisasian') || pCat.includes('apresiasi') || pCat.includes('seni') || pCat.includes('olahraga') || pCat.includes('evaluasi') || pCat.includes('kaderisasi') || pCat.includes('kepemimpinan') || pCat.includes('orientasi') || pCat.includes('wisuda') || pCat.includes('ormawa');
    case 'kajian & pergerakan':
      return pCat.includes('kajian') || pCat.includes('pergerakan') || pCat.includes('wacana') || pCat.includes('propaganda') || pCat.includes('gender') || pCat.includes('diskusi') || pCat.includes('fgd') || pCat.includes('artikel');
    case 'media & komunikasi':
      return pCat.includes('media') || pCat.includes('komunikasi') || pCat.includes('desain') || pCat.includes('medsos') || pCat.includes('publikasi') || pCat.includes('dokumentasi') || pCat.includes('branding');
    case 'administrasi':
      return pCat.includes('administrasi') || pCat.includes('arsip') || pCat.includes('audit') || pCat.includes('sop');
    default:
      return pCat.includes(mainCat) || mainCat.includes(pCat);
  }
}


