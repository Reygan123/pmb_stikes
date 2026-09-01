import { defineStore } from "pinia";
import type { Partner } from "@/core/types/partner";
import PartnerService from "@/core/services/PartnerService";

interface PartnerState {
  partners: Partner[];
  currentPartner: Partner[];
  loading: boolean;
  error: string | null;
  lastFetched: number | null;
}

export const usePartnerStore = defineStore("partner", {
  state: (): PartnerState => ({
    partners: [],
    currentPartner: [],
    loading: false,
    error: null,
    lastFetched: null,
  }),

  getters: {
    shouldRefetch: (state) => {
      return !state.lastFetched || Date.now() - state.lastFetched > 5 * 60 * 1000;
    },
    hasPartners: (state) => state.partners.length > 0,
  },

  actions: {
    async fetchPartners(force: boolean = false) {
      if (this.loading || (!force && !this.shouldRefetch && this.hasPartners)) {
        return;
      }

      this.loading = true;
      this.error = null;
      try {
        const response = await PartnerService.getAll();
        this.partners = response.data;
      } catch (error: any) {
        this.error = error.message || "Failed to fetch partners";
        console.error("Error fetching partners:", error);
      } finally {
        this.loading = false;
      }
    },

    async fetchPartnersHome(force: boolean = false) {
      if (this.loading || (!force && !this.shouldRefetch && this.hasPartners)) {
        return;
      }

      this.loading = true;
      this.error = null;
      try {
        const response = await PartnerService.getAllHome();
        this.partners = response.data;
      } catch (error: any) {
        this.error = error.message || "Failed to fetch partners";
        console.error("Error fetching partners:", error);
      } finally {
        this.loading = false;
      }
    },

    async fetchPartnerbyId(id: number) {
      this.loading = true;
      this.error = null;
      try {
        const partner = await PartnerService.getById(id);
        this.currentPartner = partner.data;
      } catch (error: any) {
        this.error = error.message || "Failed to fetch partner";
        console.error("Error fetching partner:", error);
      } finally {
        this.loading = false;
      }
    },
  },
});
