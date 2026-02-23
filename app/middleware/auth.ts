import CryptoJS from "crypto-js";

export default defineNuxtRouteMiddleware((to) => {
  const secretKey = "alinisawesome";
  const tokenx = useCookie("alin_token");

  if (!tokenx.value) {
    return navigateTo({ path: "/login" });
  }

  let token = "";
  try {
    const bytes = CryptoJS.AES.decrypt(tokenx.value, secretKey);
    token = bytes.toString(CryptoJS.enc.Utf8);
  } catch {
    return navigateTo({ path: "/login" });
  }

  if (!token) {
    return navigateTo({ path: "/login" });
  }

  try {
    const payload = JSON.parse(atob(token.split(".")[1]));
    const currentTime = Math.floor(Date.now() / 1000);
    if (payload.exp < currentTime) {
      tokenx.value = null;
      return navigateTo({ path: "/login" });
    }
  } catch {
    tokenx.value = null;
    return navigateTo({ path: "/login" });
  }
});
