<script setup>

// const { data: dd, pending, error } = await useFetch("/api/masum");

const {data: dd, pending, error } = await useFetch("/api/product/10")

</script>

<template>
<div v-if="pending">Loading...</div>
  <div v-else-if="error">Error</div>
  <pre v-else>{{ dd }}</pre>
</template>
