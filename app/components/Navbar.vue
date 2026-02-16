<script setup>
const user = useState("user");
</script>

<template>
  <header class="text-gray-600 body-font">
    <div
      class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center"
    >
      <NuxtLink
        to="/"
        class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
          viewBox="0 0 24 24"
        >
          <path
            d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
          ></path>
        </svg>
        <span class="ml-3 text-xl">
          Test Project by Nuxt 4
        </span>
      </NuxtLink>
      <nav
        class="md:ml-auto flex flex-wrap items-center text-base justify-center"
      >
        <NuxtLink to="/" class="mr-5 hover:text-gray-900 cursor-pointer">
          Home
        </NuxtLink>
        <NuxtLink to="/about" class="mr-5 hover:text-gray-900 cursor-pointer">
          About
        </NuxtLink>
        <NuxtLink
          to="/categories"
          class="mr-5 hover:text-gray-900 cursor-pointer"
        >
          Categories
        </NuxtLink>
        <NuxtLink to="/support" class="mr-5 hover:text-gray-900 cursor-pointer">
          Support
        </NuxtLink>
        <NuxtLink
          to="/contactus"
          class="mr-5 hover:text-gray-900 cursor-pointer"
        >
          Contact Us
        </NuxtLink>
        <NuxtLink
          v-if="!user"
          to="/login"
          class="mr-5 hover:text-gray-900 cursor-pointer"
        >
          Login
        </NuxtLink>
        <NuxtLink
          v-if="user"
          :to="`/profile/${user.id}`"
          class="mr-5 hover:text-gray-900 cursor-pointer"
        >
          {{ user.firstName }}
      </NuxtLink>
       <NuxtLink
          v-if="user"
          to="/"
          class="mr-5 hover:text-gray-900 cursor-pointer"
        >
          Logout
      </NuxtLink>
      </nav>
    </div>
  </header>
</template>
