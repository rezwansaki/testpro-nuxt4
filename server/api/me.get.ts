export default defineEventHandler(async (event) => {
  const { authorization } = getHeaders(event);

  if (!authorization) {
    throw createError({
      statusCode: 401,
      statusMessage: "Unauthorized",
    });
  }

  return await $fetch("https://dummyjson.com/auth/me", {
    method: "GET",
    headers: {
      Authorization: authorization,
    },
  });
});
// dfdfdfdfd
