const baseUrl = import.meta.env.VITE_APP_IMG_URL;

export const getImageUrl = (imagePath: string | null): string => {
  if (!imagePath) return '';
  return `${baseUrl}/${imagePath}`;
};