// src/stores/agenda.ts
import { defineStore } from "pinia";
import type { Agenda } from "@/core/types/agenda";
import AgendaService from "@/core/services/AgendaService";

interface AgendaState {
  agendas: Agenda[];
  currentAgenda: Agenda | null;
  loading: boolean;
  error: string | null;
  lastFetched: number | null;
}

export const useAgendaStore = defineStore("agenda", {
  state: (): AgendaState => ({
    agendas: [],
    currentAgenda: null,
    loading: false,
    error: null,
    lastFetched: null,
  }),

  getters: {
    shouldRefetch: (state) => {
      return !state.lastFetched || Date.now() - state.lastFetched > 5 * 60 * 1000;
    },
    hasAgendas: (state) => state.agendas.length > 0,
  },

  actions: {
    async fetchAgendas(force: boolean = false) {
      if (this.loading || (!force && !this.shouldRefetch && this.hasAgendas)) {
        return;
      }

      this.loading = true;
      this.error = null;
      try {
        const response = await AgendaService.getAll();
        this.agendas = response.data;
      } catch (error: any) {
        this.error = error.message || "Failed to fetch agendas";
        console.error("Error fetching agendas:", error);
      } finally {
        this.loading = false;
      }
    },

    async fetchAgendaBySlug(slug: string) {
      this.loading = true;
      this.error = null;
      try {
        const agenda = await AgendaService.getBySlug(slug);
        this.currentAgenda = agenda;
      } catch (error: any) {
        this.error = error.message || "Failed to fetch agenda";
        console.error("Error fetching agenda:", error);
      } finally {
        this.loading = false;
      }
    },
  },
});
