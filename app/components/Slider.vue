<script setup>
const images = ref(["/slider-one.jpg", "/slider-two.jpg", "/slider-three.jpg"]);

const currentIndex = ref(0);
let timer = null;

onMounted(() => {
  startSlide();
});

const startSlide = () => {
  timer = setInterval(next, 5000);
};

const next = () => {
  currentIndex.value += 1;
};

const currentImg = computed(() => {
  return images.value[Math.abs(currentIndex.value) % images.value.length];
});
</script>

<template>
  <div v-for="i in [currentIndex]" :key="i" class="h-[600px] overflow-hidden">
    <img :src="currentImg" />
  </div>
</template>
