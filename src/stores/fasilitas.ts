import { defineStore } from "pinia";
import FasilitasService from "@/core/services/FasilitasService";
import type { Fasilitas } from "@/core/types/fasilitas";

interface FasilitasStore {
  fasilitas: Fasilitas[];
  currentFasilitas: Fasilitas[];
  fasilitasFakultas: Fasilitas[];
  loading: boolean;
  error: string | null;
  lastFetched: number | null;
}

export const useFasilitasStore = defineStore("fasilitas", {
  state: (): FasilitasStore => ({
    fasilitas: [],
    currentFasilitas: [],
    fasilitasFakultas: [],
    loading: false,
    error: null,
    lastFetched: null,
  }),

  getters: {
    shouldRefetch: (state) => {
      return !state.lastFetched || Date.now() - state.lastFetched > 5 * 60 * 1000;
    },
    hasPartners: (state) => state.fasilitas.length > 0,
  },

  actions: {
    async fetchFasilitas(force: boolean = false) {
      if (this.loading || (!force && !this.shouldRefetch && this.hasPartners)) {
        return;
      }
      this.loading = true;
      this.error = null;
      try {
        const response = await FasilitasService.getAll();
        this.fasilitas = response.data;
      } catch (error: any) {
        this.error = error.message || "Failed to fetch fasilitas";
        console.error("Error fetching fasilitas:", error);
      } finally {
        this.loading = false;
      }
    },

    async fetchFasilitasHome(force: boolean = false) {
      if (this.loading || (!force && !this.shouldRefetch && this.hasPartners)) {
        return;
      }
      this.loading = true;
      this.error = null;
      try {
        const response = await FasilitasService.getAllHome();
        this.fasilitas = response.data;
      } catch (error: any) {
        this.error = error.message || "Failed to fetch fasilitas";
        console.error("Error fetching fasilitas:", error);
      } finally {
        this.loading = false;
      }
    },

    async fetchFasilitasbyId(id: number) {
      this.loading = true;
      this.error = null;
      try {
        const fasilitas = await FasilitasService.getById(id);
        this.currentFasilitas = fasilitas.data;
      } catch (error: any) {
        this.error = error.message || "Failed to fetch fasilitas";
        console.error("Error fetching fasilitas:", error);
      } finally {
        this.loading = false;
      }
    },

    async fetchFasilitasFakultas(id: number, force: boolean = false) {
      if (this.loading || (!force && !this.shouldRefetch && this.hasPartners)) {
        return;
      }

      this.loading = true;
      this.error = null;
      try {
        const response = await FasilitasService.getByFakultasId(id);
        this.fasilitasFakultas = response.data.data;
      } catch (error: any) {
        this.error = error.message || "Failed to fetch fasilitasFakultas";
        console.error("Error fetching fasilitasFakultas:", error);
      } finally {
        this.loading = false;
      }
    },
  },
});
