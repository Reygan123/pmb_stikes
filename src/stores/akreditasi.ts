import AkreditasiService from "@/core/services/AkreditasiService";
import type { Akreditasi } from "@/core/types/akreditasi";
import { defineStore } from "pinia";

interface AkreditasiStore {
  akreditasi: Akreditasi[];
  loading: boolean;
  error: string | null;
  lastFetched: number | null;
}

export const useAkreditasiStore = defineStore("akreditasi", {
  state: (): AkreditasiStore => ({
    akreditasi: [],
    loading: false,
    error: null,
    lastFetched: null,
  }),

  getters: {
    shouldRefetch: (state) => {
      return !state.lastFetched || Date.now() - state.lastFetched > 5 * 60 * 1000;
    },
    hasAgendas: (state) => state.akreditasi.length > 0,
  },

  actions: {
    async fetchAkreditasi(force: boolean = false) {
      if (this.loading || (!force && !this.shouldRefetch && this.hasAgendas)) {
        return;
      }

      this.loading = true;
      this.error = null;
      try {
        const response = await AkreditasiService.getAll();
        this.akreditasi = response.data;
      } catch (error: any) {
        this.error = error.message || "Failed to fetch akreditasi";
        console.error("Error fetching akreditasi:", error);
      } finally {
        this.loading = false;
      }
    },
  },
});
