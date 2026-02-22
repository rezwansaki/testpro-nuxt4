<script setup>
import CryptoJS from "crypto-js";

const secretKey = "my-secret";
const encrypted = CryptoJS.AES.encrypt("hello", secretKey).toString();
const bytes = CryptoJS.AES.decrypt(encrypted, secretKey);
const decrypted = bytes.toString(CryptoJS.enc.Utf8);
</script>

<template>
  <p>{{ secretKey }}</p>
  <p>{{ encrypted }}</p>
  <p>{{ bytes }}</p>
  <p>{{ decrypted }}</p>
</template>
