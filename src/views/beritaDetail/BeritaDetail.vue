<script setup lang="ts">
import { useHead } from '@vueuse/head';
import { ref, watch, onMounted, computed } from 'vue';
import { useRoute } from 'vue-router';
import { usePostStore } from '@/stores/post';
import BeritaDetailHero from './sections/BeritaDetailHero.vue';
import BeritaDetailContent from './sections/BeritaDetailContent.vue';
import BeritaPublikasi from '@/components/sections/BeritaPublikasi.vue';
import MainLayout from '@/components/layouts/MainLayout.vue';
import SeoMeta from '@/components/ui/SeoMeta.vue';

const route = useRoute()
const postStore = usePostStore()
const isLoading = ref(false)
const error = ref<string | null>(null)

const getSlug = () => {
  const slug = route.params.slug
  return Array.isArray(slug) ? slug[0] : slug
}

const fetchPostData = async (slugParam: string | string[]) => {
  try {
    isLoading.value = true
    error.value = null
    const slug = Array.isArray(slugParam) ? slugParam[0] : slugParam

    postStore.currentPost = null

    await postStore.fetchPostBySlug(slug)

    await postStore.fetchPosts()

  } catch (err) {
    error.value = 'Gagal memuat data berita'
    console.error('Error fetching post:', err)
  } finally {
    isLoading.value = false
  }
}

watch(
  () => route.params.slug,
  async (newSlug, oldSlug) => {
    if (newSlug !== oldSlug) {
      await fetchPostData(newSlug)
    }
  },
  { immediate: true }
)

onMounted(async () => {
  if (!postStore.currentPost || postStore.currentPost.slug !== getSlug()) {
    await fetchPostData(getSlug())
  }
})

const pageTitle = computed(() => {
  return postStore.currentPost?.title
    ? `${postStore.currentPost.title} - PMB Universitas BTH`
    : 'Berita - PMB Universitas BTH'
})

useHead({
  title: pageTitle,
  meta: [
    {
      name: 'description',
      content: postStore.currentPost?.title || 'Artikel berita terbaru dari PMB Universitas BTH'
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
  <SeoMeta :title="postStore.currentPost?.title" :description="postStore.currentPost?.description"
    keywords="Syarat Pendaftaran BTH, Prosedur PMB, Pendaftaran Kuliah" :meta-tags="[
      { property: 'og:type', content: 'website' },
      { name: 'twitter:creator', content: '@bth_university' }
    ]" />

  <MainLayout>
    <BeritaDetailHero :author="'Admin'" :category="postStore.currentPost?.category.name || ''"
      :date="postStore.currentPost?.pub_date || ''" :image="postStore.currentPost?.image || ''"
      :title="postStore.currentPost?.title || ''" />
    <BeritaDetailContent :description="postStore.currentPost?.content || ''" :berita="postStore.posts.slice(0, 2)" />
    <BeritaPublikasi />
  </MainLayout>
</template>