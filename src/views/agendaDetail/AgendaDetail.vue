<script setup lang="ts">
import { useHead } from '@vueuse/head';
import { ref, watch, onMounted, computed } from 'vue';
import { useRoute } from 'vue-router';
import AgendaDetailHero from './sections/AgendaDetailHero.vue';
import AgendaDetailContent from './sections/AgendaDetailContent.vue';
import AgendaDetailIncoming from './sections/AgendaDetailIncoming.vue';
import { useAgendaStore } from '@/stores/agenda';
import { usePostStore } from '@/stores/post';
import MainLayout from '@/components/layouts/MainLayout.vue';
import SeoMeta from '@/components/ui/SeoMeta.vue';

const route = useRoute()
const agendaStore = useAgendaStore()
const postStore = usePostStore()
const isLoading = ref(false)
const error = ref<string | null>(null)

const getSlug = () => {
  const slug = route.params.slug
  return Array.isArray(slug) ? slug[0] : slug
}

watch(
  () => route.params.slug, // atau route.path jika perlu
  (newSlug) => {
    // Fetch data baru ketika slug berubah
    fetchAgendaData(newSlug)
  }
)

// watch(
//   () => route.params.slug,
//   async (newSlug) => {
//     await fetchAgendaData(newSlug)
//   },
//   { immediate: true }
// )

const fetchAgendaData = async (slugParam: string | string[]) => {
  try {
    isLoading.value = true
    error.value = null
    const slug = Array.isArray(slugParam) ? slugParam[0] : slugParam
    await agendaStore.fetchAgendaBySlug(slug)
    await agendaStore.fetchAgendas()
    await postStore.fetchPosts()
  } catch (err) {
    error.value = 'Gagal memuat data berita'
    console.error('Error fetching post:', err)
  } finally {
    isLoading.value = false
  }
}

onMounted(() => {
  if (!agendaStore.currentAgenda) {
    fetchAgendaData(getSlug())
  }
})

const pageTitle = computed(() => {
  return agendaStore.currentAgenda?.title
    ? `${agendaStore.currentAgenda.title} - PMB Universitas BTH`
    : 'Berita - PMB Universitas BTH'
})

useHead({
  title: pageTitle,
  meta: [
    {
      name: 'description',
      content: agendaStore.currentAgenda?.title || 'Agenda terbaru dari PMB Universitas BTH'
    }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify('structuredData')
    }
  ]
});
</script>

<template>
  <SeoMeta :title="agendaStore.currentAgenda?.title" :description="agendaStore.currentAgenda?.content"
    keywords="Syarat Pendaftaran BTH, Prosedur PMB, Pendaftaran Kuliah" :meta-tags="[
      { property: 'og:type', content: 'website' },
      { name: 'twitter:creator', content: '@bth_university' }
    ]" />

  <MainLayout>
    <AgendaDetailHero :agenda="agendaStore.currentAgenda"/>
    <AgendaDetailContent :description="agendaStore.currentAgenda?.content || ''" :berita="postStore.posts" />
    <AgendaDetailIncoming :agenda="agendaStore.agendas"/>
  </MainLayout>
</template>