<script setup lang="ts">
import Button from '../ui/Button.vue';
import Subtitle from '../ui/Subtitle.vue';
import Tag from '../ui/Tag.vue';
import Title from '../ui/Title.vue';

defineProps<{
    file1: {
        url: string;
        name: string;
    };
    file2: {
        url: string;
        name: string;
    };
}>();
</script>

<template>
    <section class="px-4 py-8 md:p-8 lg:py-16 lg:px-24 rounded-3xl">
        <div class="flex flex-col items-center text-center gap-4 mb-8">
            <Tag title="Dokumen" />
            <Title title="File Penting PMB" />
            <Subtitle text="Unduh SOP dan Pedoman Seleksi Penerimaan Mahasiswa Baru untuk informasi terbaru dan resmi." />
        </div>

        <div class="grid gap-6 md:grid-cols-2">
            <div class="rounded-3xl border-slate-800 bg-gstart p-6 shadow-sm">
                <h3 class="text-lg font-semibold text-white mb-2">{{ file1.name }}</h3>
                <p class="text-sm text-slate-400 mb-6">Dokumen SOP resmi untuk proses penerimaan mahasiswa baru STIKes Budi Luhur Cimahi.</p>
                <a :href="file1.url" target="_blank" rel="noreferrer">
                    <Button text="Unduh File 1" />
                </a>
            </div>

            <div class="rounded-3xl border-slate-800 bg-gstart p-6 shadow-sm">
                <h3 class="text-lg font-semibold text-white mb-2">{{ file2.name }}</h3>
                <p class="text-sm text-slate-400 mb-6">Pedoman Seleksi terbaru untuk jalur penerimaan mahasiswa baru 2025/2026.</p>
                <a :href="file2.url" target="_blank" rel="noreferrer">
                    <Button text="Unduh File 2" />
                </a>
            </div>
        </div>
    </section>
</template>
