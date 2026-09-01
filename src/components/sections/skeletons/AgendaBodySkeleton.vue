<script setup lang="ts">
</script>

<template>
  <section
    class="px-4 py-8 md:p-8 lg:py-16 lg:px-24 flex flex-col items-center gap-8 md:gap-12 lg:gap-16 animate-pulse">
    <div class="w-full h-full flex flex-col md:flex-row items-center gap-12">
      <div class="w-full h-[50vh] md:w-[50%] bg-gray-200 rounded-4xl"></div>
      <div class="w-full h-full md:w-[50%] space-y-6">
        <div class="w-full max-w-[80%] space-y-4">
          <div class="h-6 w-24 bg-gray-200 rounded-full"></div>
          <div class="space-y-2">
            <div class="h-8 w-3/4 bg-gray-200 rounded"></div>
            <div class="h-4 w-full bg-gray-200 rounded"></div>
            <div class="h-4 w-5/6 bg-gray-200 rounded"></div>
          </div>
        </div>
        <div class="h-10 w-32 bg-gray-200 rounded-full"></div>
      </div>
    </div>

    <div class="w-full h-fit flex flex-col items-center gap-12 overflow-hidden">
      <div class="w-full flex justify-start items-center gap-4">
        <div class="h-10 w-20 bg-gray-200 rounded-full"></div>
        <div class="h-10 w-24 bg-gray-200 rounded-full"></div>
        <div class="h-10 w-28 bg-gray-200 rounded-full"></div>
        <div class="h-10 w-28 bg-gray-200 rounded-full"></div>
      </div>

      <div class="w-full border-t">
        <div v-for="i in 3" :key="i" class="py-4 lg:py-8 flex justify-between items-center md:gap-6">
          <div class="py-3 px-2 rounded-2xl text-center w-fit space-y-1">
            <div class="h-3 w-10 bg-gray-200 rounded mx-auto"></div>
            <div class="h-6 w-12 bg-gray-200 rounded mx-auto"></div>
            <div class="h-3 w-14 bg-gray-200 rounded mx-auto"></div>
          </div>

          <div class="space-y-4 w-fit flex-1 px-4">
            <div class="space-y-2">
              <div class="h-5 w-2/3 bg-gray-200 rounded"></div>
              <div class="h-3 w-1/2 bg-gray-200 rounded"></div>
            </div>
            <div class="h-3 w-4/5 bg-gray-200 rounded"></div>
          </div>

          <div class="h-8 w-28 bg-gray-200 rounded-full"></div>
        </div>
      </div>
    </div>
  </section>
</template>
