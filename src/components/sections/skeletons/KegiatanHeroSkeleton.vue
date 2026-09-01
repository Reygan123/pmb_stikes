<script setup lang="ts">
</script>

<template>
  <section class="w-full h-full md:h-[60vh] lg:h-[100vh] xl:h-[100vh] p-4 md:p-8 animate-pulse">
    <div class="w-full h-full rounded-4xl relative overflow-hidden hidden md:block">
      <div class="absolute inset-0 bg-gray-200"></div>
      <div class="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>

      <div class="absolute top-1/5 left-6 space-y-6 lg:space-y-8 w-3/5 lg:w-2/5 z-10">
        <div class="space-y-2">
          <div class="w-3/4 h-10 bg-gray-300 rounded"></div>
          <div class="w-full h-4 bg-gray-300 rounded"></div>
          <div class="w-2/3 h-4 bg-gray-300 rounded"></div>
        </div>
        <div class="w-40 h-12 bg-gray-300 rounded-full"></div>
      </div>

      <div class="absolute right-8 bottom-8 flex flex-col gap-4 z-10 w-1/2">
        <div class="w-full flex gap-4">
          <div class="w-1/3 h-40 bg-gray-300 rounded-4xl"></div>
          <div class="w-1/3 h-40 bg-gray-300 rounded-4xl"></div>
          <div class="w-1/3 h-40 bg-gray-300 rounded-4xl"></div>
        </div>
        <div class="w-full flex justify-between items-center mt-4">
          <div></div>
          <div class="flex items-center gap-4">
            <div class="w-10 h-10 bg-gray-300 rounded-full"></div>
            <div class="w-10 h-10 bg-gray-300 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>

    <div class="w-full h-full relative md:hidden">
      <div class="w-full h-[50vh] bg-gray-200 rounded-4xl"></div>
      <div class="absolute bottom-4 z-20 w-full h-fit flex flex-col justify-center items-center text-center gap-4 px-4">
        <div class="w-3/4 h-8 bg-gray-300 rounded"></div>
        <div class="w-full h-4 bg-gray-300 rounded"></div>
        <div class="w-32 h-10 bg-gray-300 rounded-full"></div>
      </div>
    </div>
  </section>
</template>
