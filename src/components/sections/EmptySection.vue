<script setup lang="ts">
import Logo from '@/assets/logo/logo.png';
import Title from '../ui/Title.vue';

defineProps({
    name: String
})
</script>

<template>
    <section class="px-4 py-8 md:p-8 lg:py-16 lg:px-24 flex flex-col justify-center items-center text-center gap-6 md:gap-8 min-h-[360px] md:min-h-[440px]">
        <div class="w-24 h-24 md:w-32 md:h-32 flex items-center justify-center animate-fade-in opacity-80">
            <img :src="Logo" alt="Logo STIKes Budi Luhur Cimahi" class="w-full h-full object-contain">
        </div>
        
        <div class="space-y-3 md:space-y-4 animate-slide-up">
            <Title :title="`Belum Ada Data ${name}`" />
            <div class="space-y-2">
                <p class="text-sm md:text-base lg:text-lg text-gray-600 max-w-md mx-auto leading-relaxed">
                   Data masih kosong nih, coba tambahkan atau tunggu update berikutnya.
                </p>
            </div>
        </div>
    </section>
</template>

<style scoped>
@keyframes fade-in {
    from {
        opacity: 0;
        transform: scale(0.8);
    }
    to {
        opacity: 1;
        transform: scale(1);
    }
}

@keyframes slide-up {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.animate-fade-in {
    animation: fade-in 0.8s ease-out;
}

.animate-slide-up {
    animation: slide-up 0.6s ease-out 0.2s both;
}

.animate-slide-up-delay {
    animation: slide-up 0.6s ease-out 0.4s both;
}

.animate-slide-up-delay-2 {
    animation: slide-up 0.6s ease-out 0.6s both;
}

@media (hover: hover) {
    .group:hover .animate-bounce-slow {
        animation-play-state: paused;
    }
}
</style>