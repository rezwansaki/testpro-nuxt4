<script setup>
const route = useRoute();
const id = route.params.id;

const { data: user } = await useFetch(
  `https://dummyjson.com/users/${id}`,
);
</script>

<template>
  <div class="bg-gray-100 font-sans">
    <div class="container mx-auto py-8 px-4">
      <div class="bg-white p-6 rounded-lg shadow-lg">
        <div class="w-32 h-32 mt-5 mb-5"><img :src="user.image" :alt="user.firstName"></div>
        <h1 class="text-3xl font-semibold">{{ user.firstName }}</h1>
        <p class="text-gray-600">{{ user.company.title }}</p>

        <hr class="my-4" />

        <h2 class="text-xl font-semibold mt-4 mb-2">Company Name:</h2>
        <p class="text-gray-600">{{ user.company.name }}</p>
        <h2 class="text-xl font-semibold mt-4 mb-2">Department:</h2>
        <p class="text-gray-600">{{ user.company.department }}</p>

        <h2 class="text-xl font-semibold mt-4 mb-2">Age:</h2>
        <p>{{ user.age }}</p>

        <h2 class="text-xl font-semibold mt-4 mb-2">Gender:</h2>
        <p>{{ user.gender }}</p>
        
        <h2 class="text-xl font-semibold mt-4 mb-2">Address:</h2>
        <div class="mb-4">
          <p class="text-gray-700">
            {{ user.address.address }}, {{ user.address.city }}, {{ user.address.state }}, {{ user.address.postalCode }}, {{ user.address.country }}
          </p>
        </div>

        <h2 class="text-xl font-semibold mt-4 mb-2">Birthdate:</h2> 
        <div class="mb-4">
          <p class="text-gray-600">{{ user.birthDate }}</p>
        </div>

        <h2 class="text-xl font-semibold mt-4 mb-2">Blood Group:</h2> 
        <div class="mb-4">
          <p class="text-gray-600">{{ user.bloodGroup }}</p>
        </div>

         <h2 class="text-xl font-semibold mt-4 mb-2">Education:</h2>
        <p>{{ user.university }}</p>

        <h2 class="text-xl font-semibold mt-4 mb-2">Contact</h2>
        <ul class="list-disc list-inside text-gray-700">
          <li>Email: {{ user.email }}</li>          
          <li>Phone: {{ user.phone }}</li>          
        </ul>
      </div>
    </div>
  </div>
</template>
