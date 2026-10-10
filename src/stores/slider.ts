import { defineStore } from "pinia";
import type { Slider } from "@/core/types/slider";
import SliderService from "@/core/services/SliderService";

interface SliderStore {
  sliders: Slider[];
  currentSlider: Slider[];
  loading: boolean;
  error: string | null;
}

export const useSliderStore = defineStore("slider", {
  state: (): SliderStore => ({
    sliders: [
      {
        id: 1,
        title: "Penerimaan Mahasiswa Baru STIKes Budi Luhur Cimahi",
        slug: "pmb-stikes-budi-luhur",
        program_id: 2,
        image: "faculty-image/TEA25aKWZkbL1D3oiGAieMvVW2B1nxv237PJJ4f4.jpg",
        image2: "",
        description: "Mencetak Tenaga Kesehatan Profesional, Unggul, dan Berakhlak Mulia yang Siap Bersaing Global.",
        align: "left",
        button: "Daftar Sekarang",
        link: "/pendaftaran",
        yt_id: "KVBOdL3DUdk",
        home: "1",
        created_at: "",
        updated_at: ""
      }
    ],
    currentSlider: [],
    loading: false,
    error: null,
  }),

  actions: {
    async fetchSlider() {
      this.loading = true;
      this.error = null;
      try {
        const response = await SliderService.getAll();
        this.sliders = response.data;
      } catch (error: any) {
        this.error = error.message || "Failed to fetch sliders";
        console.error("Error fetching sliders:", error);
      } finally {
        this.loading = false;
      }
    },

    async fetchSliderHome() {
      this.loading = true;
      this.error = null;
      try {
        const response = await SliderService.getAllHome();
        this.sliders = response.data;
      } catch (error: any) {
        this.error = error.message || "Failed to fetch sliders";
        console.error("Error fetching sliders:", error);
      } finally {
        this.loading = false;
      }
    },

    async fetchSliderbyId(id: number) {
      this.loading = true;
      this.error = null;
      try {
        const slider = await SliderService.getById(id);
        this.currentSlider = slider.data;
      } catch (error: any) {
        this.error = error.message || "Failed to fetch slider";
        console.error("Error fetching slider:", error);
      } finally {
        this.loading = false;
      }
    },
  },
});
