import ProdiService from "@/core/services/ProdiService";
import type { ProdiResponse } from "@/core/types/prodi";
import { defineStore } from "pinia";

interface ProdiState {
  prodi: ProdiResponse | null;
  currentProdi: ProdiResponse | null;
  loading: boolean;
  error: string | null;
  currentFacultyColor: string | null;
}

export const useProdiStore = defineStore("prodi", {
  state: (): ProdiState => ({
    prodi: null,
    currentProdi: null,
    loading: false,
    error: null,
    currentFacultyColor: null,
  }),

  actions: {
    // async fetchFakultas() {
    //   try {
    //     const response = await FakultasService.getDetail();
    //     this.prodi = response.data;
    //   } catch (error: any) {
    //     console.error("Error fetching prodi:", error);
    //   }
    // },

    async fetchProdiBySlug(slug: string) {
      this.loading = true;
      this.error = null;
      try {
        const prodi = await ProdiService.getBySlug(slug);
        this.currentProdi = prodi;
      } catch (error: any) {
        this.error = error.message || "Failed to fetch prodi detail";
        console.error("Error fetching prodi detail:", error);
      } finally {
        this.loading = false;
      }
    },
  },
});
