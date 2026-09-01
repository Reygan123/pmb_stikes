<script setup lang="ts">
</script>

<template>
  <section
    class="px-4 py-8 md:p-8 lg:py-16 lg:px-24 flex flex-col items-center gap-8 md:gap-8 lg:gap-6 animate-pulse">
    <div class="w-full h-full hidden md:flex items-center gap-6">
      <div class="w-[25%] lg:w-[40%] h-full flex flex-col justify-center items-start gap-4">
        <div class="h-6 w-32 bg-gray-200 rounded"></div>
        <div class="h-6 w-48 bg-gray-200 rounded"></div>
      </div>
      <div class="w-[75%] lg:w-[60%] grid grid-cols-3 gap-6">
        <div class="w-full h-[280px] rounded-4xl bg-gray-200"></div>
        <div class="w-full h-[280px] rounded-4xl bg-gray-200"></div>
        <div class="w-full h-[280px] rounded-4xl bg-gray-200"></div>
      </div>
    </div>

    <div class="w-full h-full hidden md:flex items-center gap-6">
      <div class="w-full h-full inline-flex gap-6">
        <div class="w-full h-[280px] rounded-4xl bg-gray-200"></div>
        <div class="w-full h-[280px] rounded-4xl bg-gray-200"></div>
        <div class="w-full h-[280px] rounded-4xl bg-gray-200"></div>
      </div>
      <div class="w-[20%] h-fit flex justify-end items-end-safe mt-auto gap-4">
        <div class="h-6 w-24 bg-gray-200 rounded"></div>
      </div>
    </div>

    <div class="space-y-8 md:hidden w-full">
      <div class="w-full h-full flex flex-col justify-center items-start gap-4">
        <div class="h-6 w-32 bg-gray-200 rounded"></div>
        <div class="h-6 w-48 bg-gray-200 rounded"></div>
      </div>

      <div class="p-4 bg-gray-100 rounded-3xl space-y-4">
        <div class="p-4 rounded-3xl bg-gray-200 h-16"></div>
        <div class="p-3 rounded-2xl bg-gray-200 h-10"></div>
        <div class="p-3 rounded-2xl bg-gray-200 h-10"></div>
        <div class="p-3 rounded-2xl bg-gray-200 h-10"></div>
        <div class="p-3 rounded-2xl bg-gray-200 h-10"></div>
      </div>
    </div>
  </section>
</template>
