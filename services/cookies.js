export const setCookie = (cname, cvalue, time) => {
  let de;
  if (!time) {
    de = new Date();
    de.setFullYear(2030, 0, 1);
  } else {
    de = new Date();
    de.setTime(de.getTime() + time);
  }
  // const d = new Date();
  // d.setTime(d.getTime() + de.getTime());
  const expires = `expires=${de.toUTCString()}`;
  document.cookie = `${cname}=${cvalue};${expires};path=/`;
};

export const getCookie = (cname) => {
  const name = `${cname}=`;
  const decodedCookie = decodeURIComponent(document.cookie);
  const ca = decodedCookie.split(';');
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return '';
};
export const checkCookie = (cookie_name) => {
  const cookie = getCookie(cookie_name);
  if (cookie !== '') {
    return true;
  }
  return false;
};
export const deleteCookie = (cookie_name) => {
  document.cookie = `${cookie_name}=; expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/`;
};
