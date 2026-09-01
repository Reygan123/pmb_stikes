import AkademikService from "@/core/services/AkademikService";
import type { Akademik } from "@/core/types/akademik";
import { defineStore } from "pinia";

interface AkademikStore {
  akademik: Akademik[];
  loading: boolean;
  error: string | null;
  lastFetched: number | null;
}

export const useAkademikStore = defineStore("akademik", {
  state: (): AkademikStore => ({
    akademik: [],
    loading: false,
    error: null,
    lastFetched: null,
  }),

  getters: {
    shouldRefetch: (state) => {
      return !state.lastFetched || Date.now() - state.lastFetched > 5 * 60 * 1000;
    },
    hasAgendas: (state) => state.akademik.length > 0,
  },

  actions: {
    async fetchAkademik(force: boolean = false) {
      if (this.loading || (!force && !this.shouldRefetch && this.hasAgendas)) {
        return;
      }

      this.loading = true;
      this.error = null;
      try {
        const response = await AkademikService.getAll();
        this.akademik = response.data.data;
      } catch (error: any) {
        this.error = error.message || "Failed to fetch akademik";
        console.error("Error fetching akademik:", error);
      } finally {
        this.loading = false;
      }
    },
  },
});
