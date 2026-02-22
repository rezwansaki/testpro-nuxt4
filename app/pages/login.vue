<script setup>
import CryptoJS from "crypto-js";
const username = ref("emilys");
const password = ref("emilyspass");
const secretKey = "alinisawesome";

const error = ref(null);

const login = async () => {
  try {
    const res = await $fetch("/api/login", {
      method: "POST",
      body: {
        username: username.value,
        password: password.value,
        expiresInMins: 30, //session
      },
    });

    // Save token in cookie
    const token = useCookie("alin_token");

    const encryptedtoken = CryptoJS.AES.encrypt(
      res.accessToken,
      secretKey,
    ).toString();
    token.value = encryptedtoken;

    const u_name = useCookie("u_name");
    const user_name = useCookie(res.firstName);

    const encryptedname = CryptoJS.AES.encrypt(
      res.firstName,
      secretKey,
    ).toString();
    u_name.value = encryptedname;

    await navigateTo("/profile");
  } catch (err) {
    error.value = "Invalid credentials";
  }
};
</script>

<template>
  <div class="flex h-screen bg-indigo-700">
    <div class="w-full max-w-xs m-auto bg-indigo-100 rounded p-5">
      <header>
        <img
          class="w-20 mx-auto mb-5"
          src="https://img.icons8.com/fluent/344/year-of-tiger.png"
        />
      </header>
      <form @submit.prevent="login">
        <div>
          <label class="block mb-2 text-indigo-500" for="username"
            >Username</label
          >
          <input
            class="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300"
            type="text"
            v-model="username"
          />
        </div>
        <div>
          <label class="block mb-2 text-indigo-500" for="password"
            >Password</label
          >
          <input
            class="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300"
            type="password"
            v-model="password"
          />
        </div>
        <div>
          <input
            class="w-full bg-indigo-700 hover:bg-pink-700 text-white font-bold py-2 px-4 mb-6 rounded"
            type="submit"
          />
        </div>
      </form>
    </div>
  </div>
</template>
