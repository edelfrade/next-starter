export const setStorage = (sname, svalue) => {
  if (typeof Storage !== 'undefined') {
    localStorage.setItem(sname, svalue);
  }
};
export const getStorage = (sname) => {
  if (typeof Storage !== 'undefined') {
    return localStorage.getItem(sname);
  }
  return null;
};
export const checkStorage = (sname) => {
  if (typeof Storage !== 'undefined') {
    return !!localStorage.getItem(sname);
  }
  return null;
};
export const deleteStorage = (sname) => {
  if (typeof Storage !== 'undefined') {
    localStorage.removeItem(sname);
  }
};
