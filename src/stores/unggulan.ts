import { defineStore } from "pinia";
import type { Unggulan, UnggulanFakultas } from "@/core/types/unggulan";
import UnggulanService from "@/core/services/UnggulanService";

interface UnggulanState {
  unggulans: Unggulan[];
  currentUnggulan: Unggulan[];
  unggulanFakultas: UnggulanFakultas[];
  loading: boolean;
  error: string | null;
  lastFetched: number | null;
}

export const useUnggulanStore = defineStore("unggulan", {
  state: (): UnggulanState => ({
    unggulans: [],
    currentUnggulan: [],
    unggulanFakultas: [],
    loading: false,
    error: null,
    lastFetched: null,
  }),

  getters: {
    shouldRefetch: (state) => {
      return !state.lastFetched || Date.now() - state.lastFetched > 5 * 60 * 1000;
    },
    hasPartners: (state) => state.unggulans.length > 0,
  },

  actions: {
    async fetchUnggulans(force: boolean = false) {
      if (this.loading || (!force && !this.shouldRefetch && this.hasPartners)) {
        return;
      }

      this.loading = true;
      this.error = null;
      try {
        const response = await UnggulanService.getAll();
        this.unggulans = response.data;
      } catch (error: any) {
        this.error = error.message || "Failed to fetch unggulans";
        console.error("Error fetching unggulans:", error);
      } finally {
        this.loading = false;
      }
    },

    async fetchUnggulansHome(force: boolean = false) {
      if (this.loading || (!force && !this.shouldRefetch && this.hasPartners)) {
        return;
      }

      this.loading = true;
      this.error = null;
      try {
        const response = await UnggulanService.getAllHome();
        this.unggulans = response.data;
      } catch (error: any) {
        this.error = error.message || "Failed to fetch unggulans";
        console.error("Error fetching unggulans:", error);
      } finally {
        this.loading = false;
      }
    },

    async fetchUnggulanbyId(id: number) {
      this.loading = true;
      this.error = null;
      try {
        const unggulan = await UnggulanService.getById(id);
        this.currentUnggulan = unggulan.data;
      } catch (error: any) {
        this.error = error.message || "Failed to fetch unggulan";
        console.error("Error fetching unggulan:", error);
      } finally {
        this.loading = false;
      }
    },

    async fetchUnggulanFakultas(id:number, force: boolean = false) {
      if (this.loading || (!force && !this.shouldRefetch && this.hasPartners)) {
        return;
      }

      this.loading = true;
      this.error = null;
      try {
        const response = await UnggulanService.getByFakultasId(id);
        this.unggulanFakultas = response.data.data;
      } catch (error: any) {
        this.error = error.message || "Failed to fetch unggulanFakultas";
        console.error("Error fetching unggulanFakultas:", error);
      } finally {
        this.loading = false;
      }
    },
  },
});
