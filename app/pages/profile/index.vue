<script setup>
// if user is authenticated
definePageMeta({
  middleware: ["auth"],
});

import CryptoJS from "crypto-js";

const secretKey = "alinisawesome";

const token = useCookie("alin_token");

const bytes = CryptoJS.AES.decrypt(token.value, secretKey);
const decryptedtoken = bytes.toString(CryptoJS.enc.Utf8);

const { data: user } = await useFetch("https://dummyjson.com/auth/me", {
  headers: {
    Authorization: `Bearer ${decryptedtoken}`,
  },
});
</script>

<template>
  <div>
    <h2>Profile</h2>
    <pre>{{ user }}</pre>
  </div>
</template>
