
// This file is no longer needed but kept empty to avoid import errors if not cleaned up everywhere.
// In a real project, we would delete this file.
export const useLanguage = () => ({
  language: 'AR',
  t: (obj: any) => typeof obj === 'object' ? obj.AR : obj
});
