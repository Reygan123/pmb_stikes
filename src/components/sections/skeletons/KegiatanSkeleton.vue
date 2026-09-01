<script setup lang="ts">
</script>

<template>
  <section class="px-4 py-8 md:p-8 lg:py-16 lg:px-24 flex flex-col gap-8 md:gap-12 lg:gap-16 animate-pulse">
    <div class="flex flex-col justify-center items-center text-center gap-4">
      <div class="w-32 h-6 bg-gray-200 rounded-full"></div>
      <div class="w-64 h-8 bg-gray-200 rounded-lg"></div>
      <div class="w-80 h-5 bg-gray-200 rounded-lg"></div>

      <div class="flex justify-center items-center gap-4">
        <div class="py-2 px-6 rounded-full bg-gray-200 w-16 h-8"></div>
        <div class="py-2 px-6 rounded-full bg-gray-200 w-20 h-8"></div>
        <div class="py-2 px-6 rounded-full bg-gray-200 w-28 h-8"></div>
      </div>
    </div>

    <div class="w-full h-full hidden md:flex flex-col md:flex-row items-center gap-12 lg:gap-16 overflow-hidden">
      <div class="w-full md:w-[45%] rounded-4xl overflow-hidden bg-gray-200 h-80 lg:h-96"></div>

      <div class="w-full h-full md:w-[55%] grid grid-cols-1 gap-6">
        <div v-for="i in 3" :key="i" class="space-y-2">
          <div class="w-48 h-5 bg-gray-200 rounded-lg"></div>
          <div class="w-full h-4 bg-gray-200 rounded-lg"></div>
        </div>
      </div>
    </div>

    <div class="w-full h-full md:hidden space-y-6">
      <div v-for="i in 3" :key="i" class="space-y-4 border-b border-[#A4A4A4] pb-6">
        <div class="w-full flex justify-between items-center">
          <div class="w-32 h-5 bg-gray-200 rounded-lg"></div>
          <div class="w-6 h-6 bg-gray-200 rounded-full"></div>
        </div>
        <div class="space-y-4">
          <div class="w-full h-4 bg-gray-200 rounded-lg"></div>
          <div class="w-full h-[200px] bg-gray-200 rounded-4xl"></div>
        </div>
      </div>
    </div>
  </section>
</template>
