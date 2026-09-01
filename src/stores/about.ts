import AboutService from "@/core/services/AboutService";
import type { About } from "@/core/types/about";
import { defineStore } from "pinia";


interface AboutStore {
  about: About | null;
  loading: boolean;
  error: string | null;
}

export const useAboutStore = defineStore("about", {
  state: (): AboutStore => ({
    about: null,
    loading: false,
    error: null,
  }),

  actions: {
    async fetchAbout() {
      this.loading = true;
      this.error = null;
      try {
        const response = await AboutService.getAll();
        this.about = response.data;
      } catch (error: any) {
        this.error = error.message || "Failed to fetch about";
        console.error("Error fetching about:", error);
      } finally {
        this.loading = false;
      }
    },
  },
});
