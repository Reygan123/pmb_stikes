<script setup lang="ts">
</script>

<template>
  <section class="px-4 py-8 md:p-8 lg:py-16 lg:px-24 flex flex-col gap-16 animate-pulse">
    <div class="w-full flex flex-col justify-center items-center text-center gap-4">
      <div class="h-6 w-24 bg-gray-200 rounded-full"></div>
      <div class="h-8 w-64 bg-gray-200 rounded-lg"></div>
      <div class="h-4 w-80 bg-gray-200 rounded"></div>
    </div>

    <div class="w-full bg-white border rounded-4xl overflow-hidden">
      <div class="flex items-center justify-between p-3 md:p-6">
        <div class="flex items-center gap-4">
          <div class="h-6 w-20 bg-gray-200 rounded"></div>
          <div class="flex items-center gap-2">
            <div class="h-6 w-6 bg-gray-200 rounded"></div>
            <div class="h-6 w-6 bg-gray-200 rounded"></div>
          </div>
        </div>
        <div class="h-6 w-16 bg-gray-200 rounded"></div>
      </div>

      <div class="relative overflow-x-auto">
        <div class="grid gap-0"
          :style="`grid-template-columns: repeat(14, minmax(80px, 1fr)); min-width: ${14 * 80}px;`">
          <div v-for="i in 14" :key="i"
            class="h-12 border-x border-t border-gray-200 flex items-center justify-center">
            <div class="h-4 w-6 bg-gray-200 rounded"></div>
          </div>
        </div>

        <div class="relative grid gap-0"
          :style="`grid-template-columns: repeat(14, minmax(80px, 1fr)); min-width: ${14 * 80}px; min-height: 300px;`">
          <div v-for="i in 14" :key="`cell-${i}`" class="border-x border-gray-200 bg-white"
            style="height: 340px;">
          </div>
          <div v-for="i in 3" :key="i"
            class="absolute bg-gray-200 rounded-full h-6 w-24"
            :style="`top: ${20 + (i - 1) * 35}px; left: ${i * 10}%;`">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
