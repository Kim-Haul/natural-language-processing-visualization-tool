import { Cookies } from "react-cookie";

const cookies = new Cookies();

const getCookie = (token: string) => {
  if (cookies.get(token)) {
    return cookies.get(token);
  } else {
    return null;
  }
};

const deleteCookie = (token: string) => {
  const date = new Date("2020-01-01").toUTCString();
  document.cookie = token + "=; expires=" + date + "; path=/";
  window.location.reload();
};

export { getCookie, deleteCookie };
