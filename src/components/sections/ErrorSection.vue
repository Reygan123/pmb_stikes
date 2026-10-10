<script setup lang="ts">
import Title from '../ui/Title.vue';
</script>

<template>
    <section class="px-4 py-8 md:p-8 lg:py-16 lg:px-24 flex flex-col justify-center items-center text-center gap-6 md:gap-8 min-h-[360px] md:min-h-[440px]">
        <div class="w-20 h-20 md:w-24 md:h-24 rounded-full bg-red-50 flex items-center justify-center text-red-500 animate-fade-in">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="12"></line>
                <line x1="12" y1="16" x2="12.01" y2="16"></line>
            </svg>
        </div>
        
        <div class="space-y-3 md:space-y-4 animate-slide-up">
            <Title title="Oops! Ada Kendala Nih" />
            <div class="space-y-2">
                <p class="text-sm md:text-base lg:text-lg text-gray-600 max-w-md mx-auto leading-relaxed">
                   Coba refresh halaman atau tunggu sebentar ya.
                </p>
                <div class="animate-slide-up-delay-2">
                    <p class="text-xs md:text-sm text-gray-400">
                        Masih bermasalah? 
                        <button class="text-primary hover:text-primary-dark underline transition-colors duration-200">
                            Laporkan ke tim kami
                        </button>
                    </p>
                </div>
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