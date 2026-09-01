<script setup lang="ts">
defineProps({
    title: String
})
</script>

<template>
    <h2 data-aos="fade-up-sm" data-aos-duration="1000" class="text-2xl md:text-3xl lg:text-4xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-gstart to-gend" v-html="title">
    </h2>
</template>

<style>
[data-aos="fade-up-sm"] {
  transform: translate3d(0, 40px, 0);
  opacity: 0;
  transition-property: transform, opacity;
}

[data-aos="fade-up-sm"].aos-animate {
  transform: translate3d(0, 0, 0);
  opacity: 1;
}
</style>