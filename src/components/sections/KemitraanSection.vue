<script setup lang="ts">
import type { Partner } from '@/core/types/partner';
import Subtitle from '../ui/Subtitle.vue';
import Tag from '../ui/Tag.vue';
import Title from '../ui/Title.vue';
import KemitraanSkeleton from './skeletons/KemitraanSkeleton.vue';
import { getImageUrl } from '@/utils/imageUtils';
import ErrorSection from './ErrorSection.vue';
import EmptySection from './EmptySection.vue';

const props = defineProps<{
  mitra: Partner[],
  loading: boolean,
  error: string | null
}>();

const getItemsByColumn = (columnIndex: number) => {
  return props.mitra.filter((_, index) => (index % 4) === columnIndex);
};
</script>

<template>
  <div v-if="loading">
    <KemitraanSkeleton />
  </div>

  <div v-if="error">
    <ErrorSection />
  </div>

  <div v-if="loading === false && mitra?.length === 0">
    <EmptySection name="Mitra"/>
  </div>

  <section v-if="!loading && !error && mitra?.length > 0" class="px-4 py-8 md:p-8 lg:py-16 lg:px-24 flex flex-col-reverse md:flex-row gap-16">
    <div
      class="w-full md:w-[70%] md:border-r md:border-black grid grid-cols-2 md:grid-cols-4 overflow-hidden h-56 md:h-96">
      <div class="flex flex-col justify-center items-center overflow-hidden relative">
        <div class="marquee-wrapper">
          <div class="marquee-column-up">
            <div class="marquee-content-up">
              <div v-for="item in getItemsByColumn(0)" :key="`up-${item.id}`"
                class="flex justify-center items-center py-8">
                <img :src="getImageUrl(`/partners/${item.image}`) || ''" loading="lazy" :alt="item.name" class="w-32 h-16 lg:h-[70px] xl:h-24 object-contain" />
              </div>
            </div>
            <div class="marquee-content-up">
              <div v-for="item in getItemsByColumn(0)" :key="`up-duplicate-${item.id}`"
                class="flex justify-center items-center py-8">
                <img :src="getImageUrl(`/partners/${item.image}`) || ''" loading="lazy" :alt="item.name" class="w-32 h-16 lg:h-[70px] xl:h-24 object-contain" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="flex flex-col justify-center items-center overflow-hidden relative">
        <div class="marquee-wrapper">
          <div class="marquee-column-down">
            <div class="marquee-content-down">
              <div v-for="item in getItemsByColumn(1)" :key="`down-${item.id}`"
                class="flex justify-center items-center py-8">
                <img :src="getImageUrl(`/partners/${item.image}`) || ''" loading="lazy" :alt="item.name" class="w-32 h-16 lg:h-[70px] xl:h-24 object-contain" />
              </div>
            </div>
            <div class="marquee-content-down">
              <div v-for="item in getItemsByColumn(1)" :key="`down-duplicate-${item.id}`"
                class="flex justify-center items-center py-8">
                <img :src="getImageUrl(`/partners/${item.image}`) || ''" loading="lazy" :alt="item.name" class="w-32 h-16 lg:h-[70px] xl:h-24 object-contain" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="hidden md:flex flex-col justify-center items-center overflow-hidden relative">
        <div class="marquee-wrapper">
          <div class="marquee-column-up">
            <div class="marquee-content-up">
              <div v-for="item in getItemsByColumn(2)" :key="`up-${item.id}`"
                class="flex justify-center items-center py-8">
                <img :src="getImageUrl(`/partners/${item.image}`) || ''" loading="lazy" :alt="item.name" class="w-32 h-16 lg:h-[70px] xl:h-24 object-contain" />
              </div>
            </div>
            <div class="marquee-content-up">
              <div v-for="item in getItemsByColumn(2)" :key="`up-duplicate-${item.id}`"
                class="flex justify-center items-center py-8">
                <img :src="getImageUrl(`/partners/${item.image}`) || ''" loading="lazy" :alt="item.name" class="w-32 h-16 lg:h-[70px] xl:h-24 object-contain" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="hidden md:flex flex-col justify-center items-center overflow-hidden relative">
        <div class="marquee-wrapper">
          <div class="marquee-column-down">
            <div class="marquee-content-down">
              <div v-for="item in getItemsByColumn(3)" :key="`down-${item.id}`"
                class="flex justify-center items-center py-8">
                <img :src="getImageUrl(`/partners/${item.image}`) || ''" loading="lazy" :alt="item.name" class="w-32 h-16 lg:h-[70px] xl:h-24 object-contain" />
              </div>
            </div>
            <div class="marquee-content-down">
              <div v-for="item in getItemsByColumn(3)" :key="`down-duplicate-${item.id}`"
                class="flex justify-center items-center py-8">
                <img :src="getImageUrl(`/partners/${item.image}`) || ''" loading="lazy" :alt="item.name" class="w-32 h-16 lg:h-[70px] xl:h-24 object-contain" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="w-full min-h-full md:w-[30%] space-y-8">
      <div
        class="w-full h-full flex flex-col justify-center items-center text-center md:justify-center md:items-start md:text-left gap-3">
        <Tag title="Kerjasama" />
        <Title title="Kemitraan Strategis" />
        <Subtitle color="text-black"
          text="Kolaborasi dengan institusi terkemuka untuk relevansi kurikulum dan karier." />
      </div>
    </div>
  </section>
</template>

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

.marquee-column-up {
  display: flex;
  flex-direction: column;
  animation: marqueeUp 15s linear infinite;
}

.marquee-column-down {
  display: flex;
  flex-direction: column;
  animation: marqueeDown 15s linear infinite;
}

.marquee-content-up,
.marquee-content-down {
  display: flex;
  flex-direction: column;
}

.marquee-column-up:hover,
.marquee-column-down:hover {
  animation-play-state: paused;
}
</style>