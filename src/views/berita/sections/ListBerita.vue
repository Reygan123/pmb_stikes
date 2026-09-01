<script setup lang="ts">
import EmptySection from '@/components/sections/EmptySection.vue';
import ErrorSection from '@/components/sections/ErrorSection.vue';
import ArticleCardSkeleton from '@/components/sections/skeletons/ArticleCardSkeleton.vue';
import ArticleCard from '@/components/ui/ArticleCard.vue';
import Title from '@/components/ui/Title.vue';
import { usePostStore } from '@/stores/post';
import { computed, ref } from 'vue';

const props = defineProps<{
    berita: ReturnType<typeof usePostStore>
    loading: boolean,
    error: string | null
}>()

const paginationLoading = ref(false);
const selectedCategory = ref<string | null>(null);

const today = new Date();
const todayString = today.toISOString().split('T')[0];

const latestHeroBerita = computed(() => {
    if (!props.berita.posts || props.berita.posts.length === 0) return null;
    
    const validBerita = props.berita.posts.filter(item => {
        if (!item.pub_date) return false;
        return item.pub_date <= todayString;
    });

    if (validBerita.length === 0) return null;
    
    const sortedBerita = validBerita.sort((a, b) => {
        return new Date(b.pub_date).getTime() - new Date(a.pub_date).getTime();
    });
    
    return sortedBerita[0];
});

const filteredPostsByDate = computed(() => {
    return props.berita.posts.filter(item => {
        if (!item.pub_date) return false;
        const pubDate = item.pub_date;
        
        if (latestHeroBerita.value && item.id === latestHeroBerita.value.id) {
            return false;
        }
        
        return pubDate <= todayString;
    });
});

const currentPage = computed(() => props.berita.pagination.currentPage);
const totalPages = computed(() => props.berita.pagination.lastPage);

const categories = computed(() => {
    const uniqueCategories = new Map();
    filteredPostsByDate.value.forEach(post => {
        if (post.category && !uniqueCategories.has(post.category.id)) {
            uniqueCategories.set(post.category.id, post.category);
        }
    });
    return Array.from(uniqueCategories.values());
});

const filteredPosts = computed(() => {
    if (!selectedCategory.value) {
        return filteredPostsByDate.value;
    }
    return filteredPostsByDate.value.filter(post => post.category.slug === selectedCategory.value);
});

const filterByCategory = (categorySlug: string | null) => {
    selectedCategory.value = categorySlug;
};

const visiblePages = computed(() => {
    const total = totalPages.value;
    const current = currentPage.value;
    const pages = [];

    if (total <= 7) {
        for (let i = 1; i <= total; i++) {
            pages.push(i);
        }
    } else {
        if (current <= 4) {
            for (let i = 1; i <= 5; i++) {
                pages.push(i);
            }
        } else if (current >= total - 3) {
            for (let i = total - 4; i <= total; i++) {
                pages.push(i);
            }
        } else {
            for (let i = current - 2; i <= current + 2; i++) {
                pages.push(i);
            }
        }
    }

    return pages;
});

const goToPage = async (page: number) => {
    if (page !== currentPage.value && page >= 1 && page <= totalPages.value) {
        paginationLoading.value = true;
        props.berita.clearPosts();
        await props.berita.fetchPosts(page, true);
        paginationLoading.value = false;
    }
};

const prevPage = async () => {
    if (currentPage.value > 1) {
        await goToPage(currentPage.value - 1);
    }
};

const nextPage = async () => {
    if (currentPage.value < totalPages.value) {
        await goToPage(currentPage.value + 1);
    }
};

const goToFirstPage = async () => {
    if (currentPage.value !== 1) {
        await goToPage(1);
    }
};

const goToLastPage = async () => {
    if (currentPage.value !== totalPages.value) {
        await goToPage(totalPages.value);
    }
};

</script>

<template>
    <div v-if="loading && !paginationLoading">
        <section class="px-4 py-8 md:p-8 lg:py-16 lg:px-24 flex flex-col items-center gap-8 md:gap-12 lg:gap-16">
            <div class="w-full flex flex-col justify-center items-center gap-8">
                <div class="h-8 w-48 bg-gray-200 rounded animate-pulse"></div>
                <div class="w-full inline-flex justify-center items-center gap-4 overflow-scroll">
                    <div v-for="i in 4" :key="i" class="py-2 px-6 rounded-full bg-gray-200 h-10 w-24 animate-pulse">
                    </div>
                </div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                <div v-for="i in 3" :key="i">
                    <ArticleCardSkeleton />
                </div>
            </div>
        </section>
    </div>

    <div v-if="error">
        <ErrorSection />
    </div>

    <div v-if="loading === false && filteredPosts?.length === 0">
        <EmptySection name="Berita" />
    </div>

    <section v-if="(!loading || paginationLoading) && !error && filteredPosts?.length > 0"
        class="px-4 py-8 md:p-8 lg:py-16 lg:px-24 flex flex-col items-center gap-8 md:gap-12 lg:gap-16">
        <div class="w-full flex flex-col justify-center items-center gap-8">
            <Title title="Berita Terbaru" />
            <div class="w-full inline-flex justify-center items-center gap-4 overflow-scroll">
                <div @click="filterByCategory(null)"
                    class="py-2 px-3 lg:py-3 lg:px-6 rounded-full group font-medium hover:bg-primary hover:text-white transition-all duration-500 cursor-pointer"
                    :class="selectedCategory === null ? 'bg-primary text-white' : 'bg-gray-100 text-gray-500'">
                    <p class="text-sm md:text-base lg:text-lg">All</p>
                </div>
                <div v-for="category in categories" :key="category.id" @click="filterByCategory(category.slug)"
                    class="py-2 px-3 lg:py-3 lg:px-6 rounded-full group font-medium hover:bg-primary hover:text-white transition-all duration-500 cursor-pointer"
                    :class="selectedCategory === category.slug ? 'bg-primary text-white' : 'bg-gray-100 text-gray-500'">
                    <p class="text-sm md:text-base lg:text-lg">{{ category.name }}</p>
                </div>
            </div>
        </div>

        <div v-if="paginationLoading" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            <div v-for="i in 3" :key="i">
                <ArticleCardSkeleton />
            </div>
        </div>

        <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div v-for="(item, index) in filteredPosts" :key="index">
                <ArticleCard :image="item.image" :link="'item.link'" :category="item.category.name" :date="item.pub_date"
                    :title="item.title" :slug="item.slug" />
            </div>
        </div>

        <div v-if="totalPages > 1" class="w-fit flex items-center gap-2 mx-auto md:ml-auto">
            <button @click="goToFirstPage" :disabled="currentPage === 1 || paginationLoading"
                class="w-10 h-10 rounded-xl border border-primary flex justify-center items-center transition-all duration-500 cursor-pointer"
                :class="currentPage === 1 || paginationLoading
                    ? 'border-gray-300 text-gray-300 cursor-not-allowed'
                    : 'border-primary text-primary'">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414L13.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0zM9.707 5.293a1 1 0 010 1.414L6.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                        clip-rule="evenodd" />
                </svg>
            </button>

            <button @click="prevPage" :disabled="currentPage === 1 || paginationLoading"
                class="w-10 h-10 rounded-xl border border-primary flex justify-center items-center transition-all duration-500 cursor-pointer"
                :class="currentPage === 1 || paginationLoading
                    ? 'border-gray-300 text-gray-300 cursor-not-allowed'
                    : 'border-primary text-primary'">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd"
                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                        clip-rule="evenodd" />
                </svg>
            </button>

            <button v-for="page in visiblePages" :key="page" @click="goToPage(page)" :disabled="paginationLoading"
                class="w-10 h-10 rounded-xl border flex justify-center items-center text-center transition-all duration-500 cursor-pointer"
                :class="page === currentPage
                    ? 'bg-primary border-primary text-white'
                    : paginationLoading 
                    ? 'border-gray-300 text-gray-300 cursor-not-allowed'
                    : 'border-primary text-primary'">
                <p class="text-sm md:text-base font-medium">{{ page }}</p>
            </button>

            <button @click="nextPage" :disabled="currentPage === totalPages || paginationLoading"
                class="w-10 h-10 rounded-xl border border-primary flex justify-center items-center transition-all duration-500 cursor-pointer"
                :class="currentPage === totalPages || paginationLoading
                    ? 'border-gray-300 text-gray-300 cursor-not-allowed'
                    : 'border-primary text-primary'">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd" />
                </svg>
            </button>

            <button @click="goToLastPage" :disabled="currentPage === totalPages || paginationLoading"
                class="w-10 h-10 rounded-xl border border-primary flex justify-center items-center transition-all duration-500 cursor-pointer"
                :class="currentPage === totalPages || paginationLoading
                    ? 'border-gray-300 text-gray-300 cursor-not-allowed'
                    : 'border-primary text-primary'">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd"
                        d="M3.293 14.707a1 1 0 010-1.414L6.586 10l-3.293-3.293a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0zM10.293 14.707a1 1 0 010-1.414L13.586 10l-3.293-3.293a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd" />
                </svg>
            </button>
        </div>

        <div class="flex justify-center items-center space-x-2 text-sm text-gray-500 mt-4">
            <span>Showing {{ filteredPosts.length }} of {{ filteredPostsByDate.length }} posts</span>
            <span>•</span>
            <span>Page {{ berita.pagination.currentPage }} of {{ berita.pagination.lastPage }}</span>
        </div>
    </section>
</template>