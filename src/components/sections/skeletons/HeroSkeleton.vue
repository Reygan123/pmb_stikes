<script setup lang="ts">
</script>

<template>
  <section
    class="px-4 py-8 md:p-8 lg:py-16 lg:px-24 flex flex-col-reverse lg:flex-row lg:items-center gap-8 md:gap-12 lg:gap-16 h-full"
  >
    <div class="w-full lg:w-[45%] space-y-4 md:space-y-6 lg:space-y-8 pt-4 lg:p-0">
      <div
        class="flex flex-col gap-4 md:gap-5 lg:gap-6 justify-center items-center text-center lg:justify-center lg:items-start lg:text-start"
      >
        <div class="w-32 h-6 bg-gray-200 animate-pulse rounded-full"></div>
        <div class="w-64 h-10 bg-gray-200 animate-pulse rounded-lg"></div>
        <div class="w-full h-16 bg-gray-200 animate-pulse rounded-md"></div>
        <div class="w-40 h-10 bg-gray-200 animate-pulse rounded-full"></div>
      </div>

      <div
        class="w-fit mx-auto lg:w-full hidden md:grid grid-cols-3 gap-4 md:gap-6 lg:gap-8 xl:gap-14"
      >
        <div class="space-y-4">
          <div class="w-16 h-8 bg-gray-200 animate-pulse rounded-md"></div>
          <div class="w-24 h-5 bg-gray-200 animate-pulse rounded-md"></div>
        </div>
        <div class="space-y-4">
          <div class="w-16 h-8 bg-gray-200 animate-pulse rounded-md"></div>
          <div class="w-24 h-5 bg-gray-200 animate-pulse rounded-md"></div>
        </div>
        <div class="space-y-4">
          <div class="w-16 h-8 bg-gray-200 animate-pulse rounded-md"></div>
          <div class="w-24 h-5 bg-gray-200 animate-pulse rounded-md"></div>
        </div>
      </div>
    </div>

    <div class="w-full lg:w-[55%] lg:h-[70vh] relative hidden lg:block">
      <div class="w-full h-full bg-gray-200 animate-pulse rounded-4xl"></div>
    </div>

    <div class="w-full h-[60vh] lg:w-[55%] md:h-[40vh] relative lg:hidden">
      <div class="w-full h-full bg-gray-200 animate-pulse rounded-4xl"></div>
    </div>
  </section>
</template>
