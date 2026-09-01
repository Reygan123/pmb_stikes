import { defineStore } from "pinia";
import type { Post, PostApiResponse } from "@/core/types/post";
import PostService from "@/core/services/PostService";

interface PostState {
  posts: Post[];
  currentPost: Post | null;
  loading: boolean;
  error: string | null;
  lastFetched: number | null;
  pagination: {
    currentPage: number;
    perPage: number;
    total: number;
    lastPage: number;
    hasNextPage: boolean;
    hasPrevPage: boolean;
  };
}

export const usePostStore = defineStore("post", {
  state: (): PostState => ({
    posts: [],
    currentPost: null,
    loading: false,
    error: null,
    lastFetched: null,
    pagination: {
      currentPage: 1,
      perPage: 9,
      total: 0,
      lastPage: 1,
      hasNextPage: false,
      hasPrevPage: false,
    },
  }),

  getters: {
    shouldRefetch: (state) => {
      return !state.lastFetched || Date.now() - state.lastFetched > 5 * 60 * 1000;
    },
    hasPosts: (state) => state.posts.length > 0,
    isFirstPage: (state) => state.pagination.currentPage === 1,
    isLastPage: (state) => state.pagination.currentPage === state.pagination.lastPage,
  },

  actions: {
    async fetchPosts(page: number = 1, force: boolean = false) {
      if (this.loading || (!force && !this.shouldRefetch && this.hasPosts && page === this.pagination.currentPage)) {
        return;
      }
      
      this.loading = true;
      this.error = null;
      
      try {
        const response: PostApiResponse = await PostService.getAll(page);
        
        if (page === 1) {
          this.posts = response.data;
        } else {
          this.posts = [...this.posts, ...response.data];
        }
        
        this.pagination = {
          currentPage: response.current_page,
          perPage: response.per_page,
          total: response.total,
          lastPage: response.last_page,
          hasNextPage: response.next_page_url !== null,
          hasPrevPage: response.prev_page_url !== null,
        };
        
        this.lastFetched = Date.now();
      } catch (error: any) {
        this.error = error.message || "Failed to fetch posts";
        console.error("Error fetching posts:", error);
      } finally {
        this.loading = false;
      }
    },

    async loadMorePosts() {
      if (this.loading || !this.pagination.hasNextPage) {
        return;
      }
      
      await this.fetchPosts(this.pagination.currentPage + 1);
    },

    async fetchPostBySlug(slug: string) {
      this.loading = true;
      this.error = null;
      
      try {
        const post = await PostService.getBySlug(slug);
        this.currentPost = post;
      } catch (error: any) {
        this.error = error.message || "Failed to fetch post";
        console.error("Error fetching post:", error);
      } finally {
        this.loading = false;
      }
    },

    async searchPosts(query: string, page: number = 1) {
      this.loading = true;
      this.error = null;
      
      try {
        const response: PostApiResponse = await PostService.search(query, page);
        
        if (page === 1) {
          this.posts = response.data;
        } else {
          this.posts = [...this.posts, ...response.data];
        }
        
        this.pagination = {
          currentPage: response.current_page,
          perPage: response.per_page,
          total: response.total,
          lastPage: response.last_page,
          hasNextPage: response.next_page_url !== null,
          hasPrevPage: response.prev_page_url !== null,
        };
      } catch (error: any) {
        this.error = error.message || "Failed to search posts";
        console.error("Error searching posts:", error);
      } finally {
        this.loading = false;
      }
    },

    async fetchPostsByCategory(categoryId: number, page: number = 1) {
      this.loading = true;
      this.error = null;
      
      try {
        const response: PostApiResponse = await PostService.getByCategory(categoryId, page);
        
        if (page === 1) {
          this.posts = response.data;
        } else {
          this.posts = [...this.posts, ...response.data];
        }
        
        this.pagination = {
          currentPage: response.current_page,
          perPage: response.per_page,
          total: response.total,
          lastPage: response.last_page,
          hasNextPage: response.next_page_url !== null,
          hasPrevPage: response.prev_page_url !== null,
        };
      } catch (error: any) {
        this.error = error.message || "Failed to fetch posts by category";
        console.error("Error fetching posts by category:", error);
      } finally {
        this.loading = false;
      }
    },

    clearPosts() {
      this.posts = [];
      this.currentPost = null;
      this.pagination = {
        currentPage: 1,
        perPage: 9,
        total: 0,
        lastPage: 1,
        hasNextPage: false,
        hasPrevPage: false,
      };
    },
  },
});