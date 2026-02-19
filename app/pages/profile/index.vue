<script setup>
// if use is authenticated
definePageMeta({
  middleware: ["auth"],
});

const token = useCookie("alin_token");

const { data: user } = await useFetch("https://dummyjson.com/auth/me", {
  headers: {
    Authorization: `Bearer ${token.value}`,
  },
});
</script>

<template>
  <div>
    <h2>Profile</h2>
    <pre>{{ user }}</pre>
  </div>
</template>
