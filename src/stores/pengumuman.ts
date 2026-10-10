// src/stores/pengumuman.ts
import { defineStore } from "pinia";
import type { Pengumuman } from "@/core/types/pengumuman";
import PengumumanService from "@/core/services/PengumumanService";

interface PengumumanState {
  pengumumans: Pengumuman[];
  currentPengumuman: Pengumuman | null;
  loading: boolean;
  error: string | null;
  lastFetched: number | null;
}

export const usePengumumanStore = defineStore("pengumuman", {
  state: (): PengumumanState => ({
    pengumumans: [],
    currentPengumuman: null,
    loading: false,
    error: null,
    lastFetched: null,
  }),

  getters: {
    hasPengumumans: (state) => state.pengumumans.length > 0,
  },

  actions: {
    async fetchPengumumans(category?: string, query?: string) {
      this.loading = true;
      this.error = null;
      try {
        const response = await PengumumanService.getAll(category, query);
        this.pengumumans = response.data || [];
        this.lastFetched = Date.now();
      } catch (error: any) {
        this.error = error.message || "Gagal memuat data pengumuman";
        console.error("Error fetching pengumuman:", error);
      } finally {
        this.loading = false;
      }
    },

    async fetchPengumumanBySlug(slug: string) {
      this.loading = true;
      this.error = null;
      try {
        const pengumuman = await PengumumanService.getBySlug(slug);
        this.currentPengumuman = pengumuman;
      } catch (error: any) {
        this.error = error.message || "Gagal memuat detail pengumuman";
        console.error("Error fetching pengumuman by slug:", error);
      } finally {
        this.loading = false;
      }
    },
  },
});
