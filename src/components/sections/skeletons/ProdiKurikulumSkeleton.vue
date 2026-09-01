<script setup lang="ts">
</script>

<template>
  <section
    class="p-6 lg:py-16 lg:px-24 flex flex-col md:flex-row-reverse items-center gap-8 md:gap-12 lg:gap-16"
  >
    <div class="w-full md:w-[40%]">
      <div class="w-full h-[40vh] md:h-[40vh] lg:h-[50vh] bg-gray-200 animate-pulse rounded-4xl"></div>
    </div>

    <div class="w-full md:w-[60%] space-y-6 md:space-y-8">
      <div class="space-y-3">
        <div class="w-20 h-6 bg-gray-200 animate-pulse rounded-full"></div>
        <div class="space-y-2">
          <div class="w-48 h-8 bg-gray-200 animate-pulse rounded-lg"></div>
          <div class="w-full h-20 bg-gray-200 animate-pulse rounded-md"></div>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-4 lg:gap-6">
        <div v-for="n in 4" :key="n" class="flex items-center gap-3">
          <div class="w-6 h-6 bg-gray-200 animate-pulse rounded-full"></div>
          <div class="w-40 h-4 bg-gray-200 animate-pulse rounded-md"></div>
        </div>
      </div>
    </div>
  </section>
</template>
