export const createSEOFriendlyURL = (text: string): string => {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
};

export const generateCanonicalURL = (path: string): string => {
  const baseURL = 'https://redhatexpertise.netlify.app';
  return `${baseURL}${path}`;
}; 