<script setup lang="ts">
import CtaSection from '../sections/CtaSection.vue';
import FloatingButton from '../ui/FloatingButton.vue';
import Footer from '../ui/Footer.vue';
import GoogleTranslate from '../ui/GoogleTranslate.vue';
import Navbar from '../ui/Navbar.vue';
import { onMounted, ref } from 'vue';

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
    <div :class="{'fade-in-up': isMounted}">
        <slot></slot>
    </div>
    <CtaSection />
    <GoogleTranslate />
    <FloatingButton />
    <Footer />
</template>

<style scoped>
.fade-in-up {
  animation: fadeInUp 0.8s ease-out forwards;
  opacity: 0;
  transform: translateY(30px);
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>