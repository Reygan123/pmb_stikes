<template>
  <section class="px-4 py-8 md:p-8 lg:py-16 lg:px-24 flex flex-col-reverse md:flex-row gap-16">
    <div class="w-full md:w-[70%] md:border-r md:border-black grid grid-cols-2 md:grid-cols-4 overflow-hidden h-56 md:h-96">
      <!-- Skeleton untuk 4 kolom -->
      <div v-for="i in 4" :key="i" class="flex flex-col justify-center items-center overflow-hidden relative">
        <div class="marquee-wrapper">
          <div :class="['marquee-column', i % 2 === 0 ? 'down' : 'up']">
            <div class="marquee-content">
              <div v-for="j in 3" :key="j" class="flex justify-center items-center py-8">
                <div class="w-32 h-10 bg-gray-200 rounded animate-pulse"></div>
              </div>
            </div>
            <div class="marquee-content">
              <div v-for="j in 3" :key="j" class="flex justify-center items-center py-8">
                <div class="w-32 h-10 bg-gray-200 rounded animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="w-full md:w-[30%] space-y-8">
      <div class="flex flex-col justify-center items-center text-center md:justify-start md:items-start md:text-left gap-3">
        <div class="w-24 h-6 bg-gray-200 rounded animate-pulse"></div>
        <div class="w-48 h-10 bg-gray-200 rounded animate-pulse"></div>
        <div class="w-64 h-6 bg-gray-200 rounded animate-pulse"></div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

<style scoped>
.marquee-wrapper {
  height: 100%;
  width: 100%;
  overflow: hidden;
}

@keyframes marqueeUp {
  0% {
    transform: translateY(0%);
  }
  100% {
    transform: translateY(-50%);
  }
}

@keyframes marqueeDown {
  0% {
    transform: translateY(-50%);
  }
  100% {
    transform: translateY(0%);
  }
}

.marquee-column.up {
  display: flex;
  flex-direction: column;
  animation: marqueeUp 15s linear infinite;
}

.marquee-column.down {
  display: flex;
  flex-direction: column;
  animation: marqueeDown 15s linear infinite;
}

.marquee-content {
  display: flex;
  flex-direction: column;
}

.marquee-column.up:hover,
.marquee-column.down:hover {
  animation-play-state: paused;
}
</style>