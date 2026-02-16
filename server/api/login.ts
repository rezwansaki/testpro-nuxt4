export default defineEventHandler(async (event) => {
  const response = await $fetch(`https://dummyjson.com/auth/login`, {
    method: event.method,
    body: await readBody(event)
  });

  return response;
});