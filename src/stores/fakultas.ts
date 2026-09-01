import { defineStore } from "pinia";
import type { FacultyResponse } from "@/core/types/fakultas";
import FakultasService from "@/core/services/FakultasService";
import { hexToCssHsl, hexToRgb } from "@/core/helpers/helper";

interface FakultasState {
  fakultas: FacultyResponse | null;
  currentFakultas: FacultyResponse | null;
  loading: boolean;
  error: string | null;
  currentFacultyColor: string | null;
}

export const useFakultasStore = defineStore("fakultas", {
  state: (): FakultasState => ({
    fakultas: null,
    currentFakultas: null,
    loading: false,
    error: null,
    currentFacultyColor: null,
  }),

  actions: {
    async fetchFakultas() {
      try {
        const response = await FakultasService.getDetail();
        this.fakultas = response.data;
      } catch (error: any) {
        console.error("Error fetching fakultas:", error);
      }
    },

    async fetchFakultasBySlug(slug: string) {
      this.loading = true;
      this.error = null;
      try {
        const fakultas = await FakultasService.getBySlug(slug);
        this.currentFakultas = fakultas;
      } catch (error: any) {
        this.error = error.message || "Failed to fetch fakultas detail";
        console.error("Error fetching fakultas detail:", error);
      } finally {
        this.loading = false;
      }
    },

    async getFacultyColor() {
      if (this.currentFacultyColor) {
        return this.currentFacultyColor;
      }

      try {
        const response = await FakultasService.getDetail();
        if (response.data?.color1) {
          this.currentFacultyColor = response.data.color1;

          const rgbColor = hexToRgb(response.data.color1);
          const hslColor = hexToCssHsl(response.data.color1);

          document.documentElement.style.setProperty('--color-primary-r', rgbColor.r.toString());
          document.documentElement.style.setProperty('--color-primary-g', rgbColor.g.toString());
          document.documentElement.style.setProperty('--color-primary-b', rgbColor.b.toString());
          document.documentElement.style.setProperty('--background', hslColor);

          return response.data.color1;
        }
        return null;
      } catch (error) {
        console.error("Error fetching faculty color:", error);
        return null;
      }
    },
  },
});
