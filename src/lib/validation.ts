export const isValidEmail = (value: string) =>
  /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(value.trim());

export const isValidIndianMobile = (value: string) => {
  const digits = value.replace(/\\D/g, '');
  return /^(?:91)?[6-9]\\d{9}$/.test(digits);
};

export const isValidWebsiteUrl = (value: string) => {
  if (!value.trim()) return true;
  try {
    const url = new URL(value.trim());
    return url.protocol === 'http:' || url.protocol === 'https:';
  } catch {
    return false;
  }
};
