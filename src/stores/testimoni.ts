import { defineStore } from "pinia";
import type { Testimonial, TestimoniFakultas } from "@/core/types/testimoni";
import TestimoniService from "@/core/services/TestimoniService";

interface TestimoniState {
  testimoni: Testimonial[];
  currentTestimoni: Testimonial[];
  testimoniFakultas: TestimoniFakultas[]
  loading: boolean;
  error: string | null;
  lastFetched: number | null;
}

export const useTestimoniStore = defineStore("testimoni", {
  state: (): TestimoniState => ({
    testimoni: [],
    currentTestimoni: [],
    testimoniFakultas: [],
    loading: false,
    error: null,
    lastFetched: null,
  }),

  getters: {
    shouldRefetch: (state) => {
      return !state.lastFetched || Date.now() - state.lastFetched > 5 * 60 * 1000;
    },
    hasPartners: (state) => state.testimoni.length > 0,
  },

  actions: {
    async fetchTestimoni(force: boolean = false) {
      if (this.loading || (!force && !this.shouldRefetch && this.hasPartners)) {
        return;
      }

      this.loading = true;
      this.error = null;
      try {
        const response = await TestimoniService.getAll();
        this.testimoni = response.data;
      } catch (error: any) {
        this.error = error.message || "Failed to fetch testimoni";
        console.error("Error fetching testimoni:", error);
      } finally {
        this.loading = false;
      }
    },

    async fetchTestimoniHome(force: boolean = false) {
      if (this.loading || (!force && !this.shouldRefetch && this.hasPartners)) {
        return;
      }

      this.loading = true;
      this.error = null;
      try {
        const response = await TestimoniService.getAllHome();
        this.testimoni = response.data;
      } catch (error: any) {
        this.error = error.message || "Failed to fetch testimoni";
        console.error("Error fetching testimoni:", error);
      } finally {
        this.loading = false;
      }
    },

    async fetchTestimonibyId(id: number) {
      this.loading = true;
      this.error = null;
      try {
        const testimoni = await TestimoniService.getById(id);
        this.currentTestimoni = testimoni.data;
      } catch (error: any) {
        this.error = error.message || "Failed to fetch testimoni";
        console.error("Error fetching testimoni:", error);
      } finally {
        this.loading = false;
      }
    },

    async fetchTestimoniFakultas(id: number, force: boolean = false) {
      if (this.loading || (!force && !this.shouldRefetch && this.hasPartners)) {
        return;
      }

      this.loading = true;
      this.error = null;
      try {
        const response = await TestimoniService.getByFakultasId(id);
        this.testimoniFakultas = response.data.data;
      } catch (error: any) {
        this.error = error.message || "Failed to fetch testimoniFakultas";
        console.error("Error fetching testimoniFakultas:", error);
      } finally {
        this.loading = false;
      }
    },

    async fetchTestimoniProdi(id: number, force: boolean = false) {
      if (this.loading || (!force && !this.shouldRefetch && this.hasPartners)) {
        return;
      }

      this.loading = true;
      this.error = null;
      try {
        const response = await TestimoniService.getByProdiId(id);
        this.testimoniFakultas = response.data;
      } catch (error: any) {
        this.error = error.message || "Failed to fetch testimoniFakultas";
        console.error("Error fetching testimoniFakultas:", error);
      } finally {
        this.loading = false;
      }
    },
  },
});
