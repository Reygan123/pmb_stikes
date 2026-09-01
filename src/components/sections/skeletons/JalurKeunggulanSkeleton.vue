<script setup lang="ts">
</script>

<template>
  <section
    class="px-4 py-8 md:p-8 lg:py-16 lg:px-24 flex flex-col lg:flex-row lg:justify-center items-center gap-8 md:gap-12 lg:gap-16 animate-pulse">
    <div class="w-full lg:w-[50%] h-full flex flex-col justify-center items-start gap-6">
      <div
        class="flex flex-col justify-center items-center text-center md:justify-start md:items-start md:text-left gap-3 w-full">
        <div class="h-6 w-24 bg-gray-300 rounded"></div>
        <div class="h-8 w-3/4 bg-gray-300 rounded"></div>
        <div class="h-4 w-full bg-gray-300 rounded"></div>
        <div class="h-4 w-5/6 bg-gray-300 rounded"></div>
      </div>
    </div>

    <div class="w-full lg:w-[50%] grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="w-full h-32 bg-gray-300 rounded"></div>
      <div class="w-full h-full space-y-6">
        <div class="w-full h-32 bg-gray-300 rounded"></div>
        <div class="w-full h-32 bg-gray-300 rounded"></div>
      </div>
    </div>
  </section>
</template>
