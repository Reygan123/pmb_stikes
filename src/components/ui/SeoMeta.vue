<script setup lang="ts">
import { useHead } from '@vueuse/head'
import Logo from '@/assets/logo/logo-bth.webp'

interface MetaTag {
  name?: string
  property?: string
  content: string
  charset?: string
  'http-equiv'?: string
  itemprop?: string
  key?: string
}

const props = defineProps<{
  title?: string
  description?: string
  keywords?: string
  ogImage?: string
  metaTags?: MetaTag[]
}>()

const appName = import.meta.env.VITE_APP_NAME || 'PMB Universitas BTH'

useHead({
  title: props.title ? `${props.title} - ${appName}` : appName,
  meta: [
    { name: 'description', content: props.description || '' },
    { name: 'keywords', content: props.keywords || '' },

    { property: 'og:title', content: props.title ? `${props.title} - ${appName}` : appName },
    { property: 'og:description', content: props.description || '' },
    { property: 'og:image', content: props.ogImage || Logo },
    { property: 'og:url', content: window.location.href },
    { property: 'og:type', content: 'website' },

    { name: 'twitter:card', content: 'summary' },
    { name: 'twitter:title', content: props.title ? `${props.title} - ${appName}` : appName },
    { name: 'twitter:description', content: props.description || '' },
    { name: 'twitter:image', content: props.ogImage || '/default-og-image.jpg' },

    ...(props.metaTags?.map(tag => ({
      ...tag,
      content: tag.content || ''
    }))) || []
  ],
  link: [
    { rel: 'canonical', href: window.location.href }
  ]
})
</script>

<template>
  <!-- Component doesn't render anything -->
</template>