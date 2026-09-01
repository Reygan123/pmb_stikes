<script setup lang="ts">
</script>

<template>
  <section
    class="px-4 py-8 md:p-8 lg:py-16 lg:px-24 flex flex-col gap-8 md:gap-12 lg:gap-16 animate-pulse"
  >
    <div class="flex flex-col justify-center items-center text-center gap-4">
      <div class="h-6 w-24 bg-gray-200 rounded-full"></div>
      <div class="h-8 w-80 bg-gray-200 rounded-lg"></div>
      <div class="h-4 w-[500px] max-w-full bg-gray-200 rounded-lg"></div>
    </div>

    <div class="w-full flex flex-col justify-center items-center gap-6 md:gap-10 lg:gap-14">
      <div class="w-full flex justify-start items-center gap-4 overflow-x-auto pb-2">
        <div class="h-10 w-16 bg-gray-200 rounded-full"></div>
        <div class="h-10 w-24 bg-gray-200 rounded-full"></div>
        <div class="h-10 w-28 bg-gray-200 rounded-full"></div>
        <div class="h-10 w-20 bg-gray-200 rounded-full"></div>
      </div>

      <div class="w-full hidden lg:grid grid-cols-2 gap-10">
        <div class="w-full h-[600px] bg-gray-200 rounded-4xl"></div>
        <div class="w-full flex flex-col gap-10">
          <div class="h-[280px] grid grid-cols-2 gap-10">
            <div class="w-full h-full bg-gray-200 rounded-4xl"></div>
            <div class="w-full h-full bg-gray-200 rounded-4xl"></div>
          </div>
          <div class="w-full h-[280px] bg-gray-200 rounded-4xl"></div>
        </div>
      </div>

      <div class="w-full space-y-4 md:space-y-6 lg:hidden">
        <div class="w-full h-[180px] grid grid-cols-2 gap-4 md:gap-6">
          <div class="w-full h-full bg-gray-200 rounded-3xl"></div>
          <div class="w-full h-full bg-gray-200 rounded-3xl"></div>
        </div>
        <div class="w-full h-[180px] bg-gray-200 rounded-3xl"></div>
        <div class="w-full h-[180px] flex gap-4 md:gap-6">
          <div class="w-[70%] h-full bg-gray-200 rounded-3xl"></div>
          <div class="w-[30%] h-full bg-gray-200 rounded-3xl"></div>
        </div>
      </div>

      <div class="w-full hidden lg:flex justify-between items-center">
        <div class="space-y-4">
          <div class="h-6 w-40 bg-gray-200 rounded-lg"></div>
          <div class="h-4 w-32 bg-gray-200 rounded-lg"></div>
        </div>
        <div class="h-10 w-40 bg-gray-200 rounded-lg"></div>
      </div>
    </div>
  </section>
</template>
