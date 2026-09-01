<script setup lang="ts">
</script>

<template>
  <section class="px-4 py-8 md:p-8 lg:py-16 lg:px-24 flex flex-col md:flex-row gap-16 animate-pulse">
    <div class="w-full md:w-[45%] space-y-12 xl:space-y-16 hidden md:block">
      <div class="w-full h-96 bg-gray-200 rounded-4xl"></div>
      <div class="w-full h-6 bg-gray-200 rounded-lg"></div>
    </div>

    <div class="w-full md:w-[45%] hidden md:block space-y-12">
      <div v-for="i in 3" :key="i" class="w-full py-16 flex items-start gap-20 border-b border-black/20">
        <div class="w-12 h-6 bg-gray-200 rounded-lg"></div>
        <div class="w-full flex items-start gap-4">
          <div class="space-y-6 w-full">
            <div v-for="j in 2" :key="j" class="flex gap-4 items-start">
              <div class="space-y-3 w-full">
                <div class="w-24 h-5 bg-gray-200 rounded-lg"></div>
                <div class="w-48 h-6 bg-gray-200 rounded-lg"></div>
              </div>
              <div class="w-6 h-6 bg-gray-200 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="w-full md:hidden space-y-12">
      <div v-for="i in 3" :key="i" class="w-full flex items-start gap-4 py-14 border-b border-[#DCDCDC]">
        <div class="w-12 h-5 bg-gray-200 rounded-lg"></div>
        <div class="space-y-6 w-full">
          <div v-for="j in 2" :key="j" class="flex flex-col gap-4">
            <div class="flex gap-4 items-start">
              <div class="space-y-3 w-full">
                <div class="w-20 h-4 bg-gray-200 rounded-lg"></div>
                <div class="w-40 h-5 bg-gray-200 rounded-lg"></div>
              </div>
              <div class="w-6 h-6 bg-gray-200 rounded-full"></div>
            </div>
            <div class="space-y-4 w-full">
              <div class="w-full h-64 bg-gray-200 rounded-4xl"></div>
              <div class="w-full h-4 bg-gray-200 rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
