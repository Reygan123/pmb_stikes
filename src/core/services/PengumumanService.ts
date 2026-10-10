import ApiService from "./ApiService";
import type { Pengumuman } from "../types/pengumuman";

const PengumumanService = {
  getAll(category?: string, query?: string) {
    let url = "pengumuman";
    const params = new URLSearchParams();
    if (category && category !== "All") {
      params.append("category", category);
    }
    if (query) {
      params.append("q", query);
    }
    const queryString = params.toString();
    if (queryString) {
      url += `?${queryString}`;
    }
    return ApiService.get(url);
  },

  getBySlug(slug: string): Promise<Pengumuman> {
    return ApiService.get(`pengumuman/${slug}`)
      .then(response => response.data)
      .catch(error => {
        console.error("Error fetching pengumuman by slug:", error);
        throw error;
      });
  },
};

export default PengumumanService;
