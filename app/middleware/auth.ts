export default defineNuxtRouteMiddleware(() => {
  const token = useCookie("alin_token");

  if (!token.value) {
    return navigateTo("/login");
  }

  try {
    // Decode JWT payload
    const payload = JSON.parse(atob(token.value.split(".")[1]));

    const currentTime = Math.floor(Date.now() / 1000);

    // Check expiration
    if (payload.exp < currentTime) {
      token.value = null; // remove expired token
      return navigateTo("/login");
    }
  } catch (error) {
    // Invalid token
    token.value = null;
    return navigateTo("/login");
  }
});
