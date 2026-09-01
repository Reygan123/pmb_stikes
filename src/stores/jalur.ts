import JalurService from "@/core/services/JalurService";
import type { Jalur } from "@/core/types/jalur";
import { defineStore } from "pinia";

interface JalurState {
  jalurs: Jalur[];
  currentJalur: Jalur | null;
  loading: boolean;
  error: string | null;
  lastFetched: number | null;
}

export const useJalurStore = defineStore("jalur", {
  state: (): JalurState => ({
    jalurs: [],
    currentJalur: null,
    loading: false,
    error: null,
    lastFetched: null,
  }),

  getters: {
    shouldRefetch: (state) => {
      return !state.lastFetched || Date.now() - state.lastFetched > 5 * 60 * 1000;
    },
    hasJalurs: (state) => state.jalurs.length > 0,
  },

  actions: {
    async fetchJalurs(force: boolean = false) {
      if (this.loading || (!force && !this.shouldRefetch && this.hasJalurs)) {
        return;
      }
      
      this.loading = true;
      this.error = null;
      try {
        const response = await JalurService.getAll();
        this.jalurs = response.data;
      } catch (error: any) {
        this.error = error.message || "Failed to fetch jalurs";
        console.error("Error fetching jalurs:", error);
      } finally {
        this.loading = false;
      }
    },

    async fetchJalurBySlug(slug: string) {
      this.loading = true;
      this.error = null;
      try {
        const jalur = await JalurService.getBySlug(slug);
        this.currentJalur = jalur;
      } catch (error: any) {
        this.error = error.message || "Failed to fetch jalur";
        console.error("Error fetching jalur:", error);
      } finally {
        this.loading = false;
      }
    },
  },
});
