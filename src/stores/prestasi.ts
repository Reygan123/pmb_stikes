import { defineStore } from "pinia";
import type { Prestasi, PrestasiFakultas } from "@/core/types/prestasi";
import PrestasiService from "@/core/services/PrestasiService";

interface PrestasiState {
  prestasis: Prestasi[];
  currentPrestasi: Prestasi[];
  prestasiFakultas: PrestasiFakultas[];
  loading: boolean;
  error: string | null;
  lastFetched: number | null;
}

export const usePrestasiStore = defineStore("prestasi", {
  state: (): PrestasiState => ({
    prestasis: [],
    currentPrestasi: [],
    prestasiFakultas: [],
    loading: false,
    error: null,
    lastFetched: null,
  }),

  getters: {
    shouldRefetch: (state) => {
      return !state.lastFetched || Date.now() - state.lastFetched > 5 * 60 * 1000;
    },
    hasPartners: (state) => state.prestasis.length > 0,
  },

  actions: {
    async fetchPrestasis(force: boolean = false) {
      if (this.loading || (!force && !this.shouldRefetch && this.hasPartners)) {
        return;
      }

      this.loading = true;
      this.error = null;
      try {
        const response = await PrestasiService.getAll();
        this.prestasis = response.data;
      } catch (error: any) {
        this.error = error.message || "Failed to fetch prestasis";
        console.error("Error fetching prestasis:", error);
      } finally {
        this.loading = false;
      }
    },

    async fetchPrestasisHome(force: boolean = false) {
      if (this.loading || (!force && !this.shouldRefetch && this.hasPartners)) {
        return;
      }

      this.loading = true;
      this.error = null;
      try {
        const response = await PrestasiService.getAllHome();
        this.prestasis = response.data;
      } catch (error: any) {
        this.error = error.message || "Failed to fetch prestasis";
        console.error("Error fetching prestasis:", error);
      } finally {
        this.loading = false;
      }
    },

    async fetchPrestasibyId(id: number) {
      this.loading = true;
      this.error = null;
      try {
        const prestasi = await PrestasiService.getById(id);
        this.currentPrestasi = prestasi.data;
      } catch (error: any) {
        this.error = error.message || "Failed to fetch prestasi";
        console.error("Error fetching prestasi:", error);
      } finally {
        this.loading = false;
      }
    },

    async fetchPrestasiFakultas(id: number, force: boolean = false) {
      if (this.loading || (!force && !this.shouldRefetch && this.hasPartners)) {
        return;
      }

      this.loading = true;
      this.error = null;
      try {
        const response = await PrestasiService.getByFakultasId(id);
        this.prestasiFakultas = response.data.data;
      } catch (error: any) {
        this.error = error.message || "Failed to fetch prestasiFakultas";
        console.error("Error fetching prestasiFakultas:", error);
      } finally {
        this.loading = false;
      }
    },
  },
});
