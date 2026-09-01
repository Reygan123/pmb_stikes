import StatPrestasiService from "@/core/services/StatPrestasiService";
import type { StatPrestasi } from "@/core/types/statPrestasi";
import { defineStore } from "pinia";

interface StatPrestasiState {
  statPrestasi: StatPrestasi[];
  loading: boolean;
  error: string | null;
  lastFetched: number | null;
}

export const useStatPrestasiStore = defineStore("prestasi-statistik", {
  state: (): StatPrestasiState => ({
    statPrestasi: [],
    loading: false,
    error: null,
    lastFetched: null,
  }),

  getters: {
    shouldRefetch: (state) => {
      return !state.lastFetched || Date.now() - state.lastFetched > 5 * 60 * 1000;
    },
    hasPartners: (state) => state.statPrestasi.length > 0,
  },

  actions: {
    async fetchStorePrestasi(force: boolean = false) {
      if (this.loading || (!force && !this.shouldRefetch && this.hasPartners)) {
        return;
      }

      this.loading = true;
      this.error = null;
      try {
        const response = await StatPrestasiService.getAll();
        this.statPrestasi = response.data.data;
      } catch (error: any) {
        this.error = error.message || "Failed to fetch statPrestasi";
        console.error("Error fetching statPrestasi:", error);
      } finally {
        this.loading = false;
      }
    },
  },
});
