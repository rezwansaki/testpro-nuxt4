<script setup>
const token = useCookie("alin_token");
const exp = token.value.split(".")[1];
const payload = JSON.parse(atob(exp));
const currentTime = Math.floor(Date.now() / 1000);

// Check expiration
if (payload.exp < currentTime) {
  token.value = null; // remove expired token
}
</script>

<template>
  <p>currentTime</p>
</template>
