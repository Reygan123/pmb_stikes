<script setup lang="ts">
import { RouterView } from 'vue-router'
// import { onMounted, watch } from 'vue'
// import { usePixelStore } from '@/stores/pixel'
// import { useAnalyticStore } from '@/stores/analytic'
// import { loadGoogleAnalytics } from '@/utils/tracking'

// const pixelStore = usePixelStore()
// const analyticStore = useAnalyticStore()

// watch(
//   () => [pixelStore.pixel, analyticStore.analytic],
//   () => {
//     if (analyticStore.analytic?.[0]?.ganalytics_code) {
//       const gaCode = analyticStore.analytic[0].ganalytics_code;
//       const gaMatch = gaCode.match(/gtag\('config',\s*'([^']+)'\)/);
//       if (gaMatch && gaMatch[1]) {
//         loadGoogleAnalytics(gaMatch[1]);
//       }
//     }
    
//     if (pixelStore.pixel?.[0]?.pixel_code) {
//       const pixelCode = pixelStore.pixel[0].pixel_code;
//       const pixelMatch = pixelCode.match(/fbq\('init',\s*'([^']+)'\)/);
//       if (pixelMatch && pixelMatch[1]) {
//         loadMetaPixel(pixelMatch[1]);
//       }
//     }
//   },
//   { immediate: true }
// );

// onMounted(async () => {
//   await Promise.all([
//     pixelStore.fetchPixel(),
//     analyticStore.fetchAnalytic()
//   ]);
// });
</script>

<template>
  <RouterView v-slot="{ Component }">
    <keep-alive :include="['Navigation']">
      <component :is="Component" :key="$route.fullPath" />
    </keep-alive>
  </RouterView>
</template>