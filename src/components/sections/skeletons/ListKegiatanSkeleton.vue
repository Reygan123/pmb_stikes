<script setup lang="ts"></script>

<template>
  <section
    class="px-4 py-8 md:p-8 lg:py-16 lg:px-24 flex flex-col gap-8 md:gap-12 lg:gap-16 animate-pulse"
  >
    <div class="w-full flex flex-col justify-center items-center text-center gap-4">
      <div class="w-24 h-6 bg-gray-200 rounded-full"></div>
      <div class="w-3/4 h-8 bg-gray-200 rounded-lg"></div>
      <div class="w-full max-w-2xl h-4 bg-gray-200 rounded-lg"></div>
    </div>

    <div class="w-full space-y-8">
      <div class="w-full flex justify-center items-center gap-4 overflow-x-auto pb-2">
        <div
          v-for="i in 4"
          :key="i"
          class="w-20 h-8 bg-gray-200 rounded-full flex-shrink-0"
        ></div>
      </div>

      <div class="w-full h-full space-y-8">
        <div
          class="w-full h-[340px] lg:h-[420px] xl:h-[540px] hidden md:flex gap-8 md:gap-12 lg:gap-16"
        >
          <div
            class="w-[30%] xl:w-[20%] h-full flex flex-col justify-between gap-8 md:gap-12 lg:gap-20"
          >
            <div class="h-fit space-y-6">
              <div
                v-for="i in 5"
                :key="i"
                class="w-32 h-4 bg-gray-200 rounded"
              ></div>
            </div>
            <div class="w-24 h-4 bg-gray-200 rounded"></div>
          </div>

          <div class="w-full h-full grid grid-cols-2 gap-6">
            <div
              class="w-full h-[340px] lg:h-[420px] xl:h-[540px] flex flex-col justify-between gap-6"
            >
              <div class="w-full h-24 bg-gray-200 rounded-lg"></div>
              <div class="w-full h-full bg-gray-200 rounded-4xl"></div>
            </div>
            <div
              class="w-full h-[340px] lg:h-[420px] xl:h-[540px] flex flex-col justify-between gap-6"
            >
              <div class="w-full h-full bg-gray-200 rounded-4xl"></div>
              <div class="w-full h-full bg-gray-200 rounded-4xl"></div>
            </div>
          </div>
        </div>

        <div class="w-full h-full space-y-4 md:hidden">
          <div class="space-y-2">
            <div class="w-1/2 h-6 bg-gray-200 rounded"></div>
            <div class="w-full h-4 bg-gray-200 rounded"></div>
          </div>

          <div class="w-full space-y-4">
            <div class="w-full grid grid-cols-2 gap-4">
              <div class="w-full h-[180px] bg-gray-200 rounded-4xl"></div>
              <div class="w-full h-[180px] bg-gray-200 rounded-4xl"></div>
            </div>
            <div class="w-full">
              <div class="w-full h-[180px] bg-gray-200 rounded-4xl"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
