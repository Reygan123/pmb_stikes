import OrganisasiService from "@/core/services/OrganisasiService";
import type { OrganisasiFakultas, Organization } from "@/core/types/organisasi";
import { defineStore } from "pinia";

interface OrganisasiStore {
  organizations: Organization[];
  currentOrganizations: Organization[];
  organisasiFakultas: OrganisasiFakultas[];
  loading: boolean;
  error: string | null;
  lastFetched: number | null;
}

export const useOrganisasiStore = defineStore("organisasi", {
  state: (): OrganisasiStore => ({
    organizations: [],
    currentOrganizations: [],
    organisasiFakultas: [],
    loading: false,
    error: null,
    lastFetched: null,
  }),

  getters: {
    shouldRefetch: (state) => {
      return !state.lastFetched || Date.now() - state.lastFetched > 5 * 60 * 1000;
    },
    hasOrganizations: (state) => state.organizations.length > 0,
  },

  actions: {
    async fetchOrganisasi(force: boolean = false) {
      if (this.loading || (!force && !this.shouldRefetch && this.hasOrganizations)) {
        return;
      }

      this.loading = true;
      this.error = null;
      try {
        const response = await OrganisasiService.getAll();
        this.organizations = response.data;
      } catch (error: any) {
        this.error = error.message || "Failed to fetch organizations";
        console.error("Error fetching organizations:", error);
      } finally {
        this.loading = false;
      }
    },

    async fetchOrganisasiHome(force: boolean = false) {
      if (this.loading || (!force && !this.shouldRefetch && this.hasOrganizations)) {
        return;
      }

      this.loading = true;
      this.error = null;
      try {
        const response = await OrganisasiService.getAllHome();
        this.organizations = response.data;
      } catch (error: any) {
        this.error = error.message || "Failed to fetch organizations";
        console.error("Error fetching organizations:", error);
      } finally {
        this.loading = false;
      }
    },

    async fetchOrganisasibyId(id: number) {
      this.loading = true;
      this.error = null;
      try {
        const organisasi = await OrganisasiService.getById(id);
        this.currentOrganizations = organisasi.data;
      } catch (error: any) {
        this.error = error.message || "Failed to fetch organisasi";
        console.error("Error fetching organisasi:", error);
      } finally {
        this.loading = false;
      }
    },

    async fetchOrganisasiFakultas(id: number, force: boolean = false) {
      if (this.loading || (!force && !this.shouldRefetch && this.hasOrganizations)) {
        return;
      }

      this.loading = true;
      this.error = null;
      try {
        const response = await OrganisasiService.getByFakultasId(id);
        this.organisasiFakultas = response.data.data;
      } catch (error: any) {
        this.error = error.message || "Failed to fetch organisasiFakultas";
        console.error("Error fetching organisasiFakultas:", error);
      } finally {
        this.loading = false;
      }
    },

    async fetchOrganisasiProdi(id: number, force: boolean = false) {
      if (this.loading || (!force && !this.shouldRefetch && this.hasOrganizations)) {
        return;
      }

      this.loading = true;
      this.error = null;
      try {
        const response = await OrganisasiService.getByProdiId(id);
        this.organisasiFakultas = response.data.data;
      } catch (error: any) {
        this.error = error.message || "Failed to fetch organisasiProdi";
        console.error("Error fetching organisasiProdi:", error);
      } finally {
        this.loading = false;
      }
    },
  },
});
