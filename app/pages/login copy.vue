<script setup>
const username = ref("emilys");
const password = ref("emilyspass");

const user = useState("user", () => null);

// const resp = await $fetch("/api/alin");
// console.log(resp);

// form submit
const formsubmit = async () => {
  const res = await $fetch("/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: username.value,
      password: password.value,
      expiresInMins: 30,
    }),
  });
  user.value = res;

  // get profile information after successfully login
  const me = await $fetch("/api/me", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${user.value.accessToken}`,
    },
  });
  user.value = me;

  // to navigate the user profile page
  if (user.value) {
    navigateTo(`/profile/${user.value.id}`);
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
      <form @submit.prevent="formsubmit">
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
