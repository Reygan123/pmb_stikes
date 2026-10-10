const baseUrl = import.meta.env.VITE_APP_IMG_URL || 'http://127.0.0.1:8001/storage';

const KNOWN_STORAGE_FOLDERS = [
  'facilities',
  'organisasis',
  'organisasi',
  'achievements',
  'prestasis',
  'partner-image',
  'testimonials',
  'agenda-image',
  'post-image',
  'faculty-image',
  'fakultas-image',
  'departement-image',
  'departements',
  'programs',
  'sliders',
  'identities',
  'sideBanner-image',
  'beasiswa-images',
  'identity-image',
  'legalDocument-image',
  'ourteam-image',
  'supports',
  'timeline',
  'timeline-image',
  'usps',
  'ekosistem-images',
  'category-image',
  'jurnal-images',
  'files',
  'pengumuman-files',
];

export const getImageUrl = (imagePath: string | null | undefined): string => {
  if (!imagePath) return '';
  const httpIdx = imagePath.indexOf('http://') !== -1 ? imagePath.indexOf('http://') : imagePath.indexOf('https://');
  if (httpIdx !== -1) {
    return imagePath.slice(httpIdx);
  }

  let clean = imagePath.trim().replace(/^\/+/, '');
  if (!clean || clean.endsWith('/') || clean.includes('undefined')) {
    return '';
  }

  for (const folder of KNOWN_STORAGE_FOLDERS) {
    const marker = folder + '/';
    const lastIdx = clean.lastIndexOf(marker);
    if (lastIdx !== -1) {
      clean = clean.slice(lastIdx);
      break;
    }
  }

  clean = clean.replace(/\/+/g, '/');

  if (clean === 'faculty-image/TEA25aKWZkbL1D3oiGAieMvVW2B1nxv237PJJ4f4.jpg' || clean === 'organisasis/qVNGZQePc62tRgnO3NfcXQoY23JUkSv1o2oT511F.png') {
    return `/storage/${clean}`;
  }

  return `${baseUrl}/${clean}`;
};