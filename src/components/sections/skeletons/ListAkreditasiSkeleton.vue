<script setup lang="ts">
</script>

<template>
  <section class="px-4 py-8 md:p-8 lg:py-16 lg:px-24 flex flex-col gap-8 md:gap-12 lg:gap-16">
    <div class="flex flex-col justify-center items-center text-center gap-4">
      <div class="w-24 h-6 bg-gray-200 animate-pulse rounded-full"></div>
      <div class="w-48 h-8 bg-gray-200 animate-pulse rounded-lg"></div>
      <div class="w-64 h-4 bg-gray-200 animate-pulse rounded-md"></div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-for="n in 6" :key="n" class="w-full h-24 bg-gray-200 animate-pulse rounded-xl"></div>
    </div>
  </section>
</template>
