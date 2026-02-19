<script setup>
// if user is authenticated
definePageMeta({
  middleware: ["auth"],
});
</script>

<template>
  <section class="container mx-auto mb-20">
    <div class="flex flex-col md:flex-row items-center gap-12">
      <div class="md:w-1/2">
        <h2 class="text-3xl font-bold text-dark mb-6">About Us</h2>
        <p class="text-gray-700 mb-4">
          SynthMind AI was founded in 2019 with a radical idea: that artificial
          intelligence should enhance human decision-making rather than replace
          it. Our team of neuroscientists and machine learning experts set out
          to create a new paradigm in AI.
        </p>
        <p class="text-gray-700 mb-4">
          Today, we're recognized as pioneers in cognitive computing, with our
          technology powering some of the world's most innovative companies
          across healthcare, finance, and creative industries.
        </p>
        <p class="text-gray-700">
          Our name reflects our philosophy - we synthesize human-like
          understanding with machine precision to create truly intelligent
          systems.
        </p>
      </div>
      <div class="md:w-1/2">
        <img
          src="https://images.unsplash.com/photo-1629904853893-c2c8981a1dc5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
          alt="AI Neural Network Visualization"
          class="rounded-lg shadow-xl w-full h-auto"
        />
      </div>
    </div>
  </section>
</template>
