export const getLang = (path) => { if (path.indexOf('/en/') === 0) return 'en'; return 'es'; };
export const getParam = (name, url) => {
  try {
    if (!url) url = window.location.href;
  } catch (e) {
    return '';
  }
  name = name.replace(/[[\]]/g, '\\$&');
  const regex = new RegExp(`[?&]${name}(=([^&#]*)|&|#|$)`);
  const results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
};
