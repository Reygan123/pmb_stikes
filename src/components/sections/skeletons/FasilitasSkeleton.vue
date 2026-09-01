<script setup lang="ts"></script>

<template>
  <section
    class="px-0 py-4 md:p-8 lg:py-16 lg:px-24 flex flex-col gap-8 md:gap-12 lg:gap-16 animate-pulse"
  >
    <div
      class="px-4 md:px-0 flex flex-col justify-center items-center text-center gap-4"
    >
      <div class="w-2/3 h-10 bg-gray-300 rounded"></div>
      <div class="w-1/2 h-6 bg-gray-300 rounded"></div>
      <div class="w-40 h-10 bg-gray-300 rounded"></div>
    </div>

    <div class="w-full hidden md:flex flex-col justify-center items-center gap-14">
      <div class="w-full md:h-[30vh] lg:h-[50vh] xl:h-[40vh] flex justify-center items-center gap-4">
        <div
          class="w-full h-full grid grid-cols-5 gap-4 lg:gap-8 justify-center items-center"
        >
          <div class="w-full h-[60%] bg-gray-300 rounded-xl"></div>
          <div class="w-full h-[80%] bg-gray-300 rounded-xl"></div>
          <div class="w-full h-[90%] bg-gray-300 rounded-xl mt-20"></div>
          <div class="w-full h-[80%] bg-gray-300 rounded-xl"></div>
          <div class="w-full h-[60%] bg-gray-300 rounded-xl"></div>
        </div>
      </div>
    </div>

    <div class="md:hidden">
      <div class="flex gap-4 overflow-x-auto">
        <div class="w-3/4 h-[45vh] bg-gray-300 rounded-4xl"></div>
        <div class="w-3/4 h-[45vh] bg-gray-300 rounded-4xl"></div>
        <div class="w-3/4 h-[45vh] bg-gray-300 rounded-4xl"></div>
      </div>
    </div>
  </section>
</template>
