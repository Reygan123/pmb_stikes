<script setup lang="ts">
</script>

<template>
  <section
    class="px-4 py-8 md:p-8 lg:py-16 lg:px-24 flex flex-col md:flex-row md:jusitfy-center items-center gap-8 md:gap-12 lg:gap-16 animate-pulse">
    <div class="w-full md:w-[40%] h-[30vh] md:h-[40vh] lg:h-[50vh] rounded-4xl overflow-hidden bg-gray-300"></div>
    <div class="w-full md:w-[60%] h-full flex flex-col justify-center items-start gap-6">
      <div class="space-y-3 w-full">
        <div class="h-6 w-20 bg-gray-300 rounded"></div>
        <div class="space-y-2">
          <div class="h-8 w-2/3 bg-gray-300 rounded"></div>
          <div class="h-4 w-full bg-gray-300 rounded"></div>
          <div class="h-4 w-5/6 bg-gray-300 rounded"></div>
        </div>
      </div>
      <div class="w-full flex justify-center md:justify-start">
        <div class="h-10 w-32 bg-gray-300 rounded-full"></div>
      </div>
    </div>
  </section>
</template>
