import StatistikService from "@/core/services/StatistikService";
import type { Statistik } from "@/core/types/statistik";
import { defineStore } from "pinia";

interface StatistikStore {
  statistik: Statistik | null;
  loading: boolean;
  error: string | null;
}

export const useStatistikStore = defineStore("statistik", {
  state: (): StatistikStore => ({
    statistik: null,
    loading: false,
    error: null,
  }),

  actions: {
    async fetchStatistik() {
      this.loading = true;
      this.error = null;
      try {
        const response = await StatistikService.getAll();
        this.statistik = response.data.data;
      } catch (error: any) {
        this.error = error.message || "Failed to fetch statistik";
        console.error("Error fetching statistik:", error);
      } finally {
        this.loading = false;
      }
    },
  },
});
