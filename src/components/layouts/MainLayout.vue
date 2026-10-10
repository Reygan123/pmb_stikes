<script setup lang="ts">
import { defineAsyncComponent, onMounted, ref } from 'vue';
import Navbar from '../ui/Navbar.vue';

const CtaSection = defineAsyncComponent(() => import('../sections/CtaSection.vue'));
const FloatingButton = defineAsyncComponent(() => import('../ui/FloatingButton.vue'));
const Footer = defineAsyncComponent(() => import('../ui/Footer.vue'));

defineProps({
  position: String
})

const isMounted = ref(false);

onMounted(() => {
  isMounted.value = true;
});
</script>

<template>
    <Navbar :position="position"/>
    <main :class="{'fade-in-up': isMounted}">
        <slot></slot>
    </main>
    <CtaSection />
    <FloatingButton />
    <Footer />
</template>

<style scoped>
.fade-in-up {
  animation: fadeInUp 0.3s ease-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0.9;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>