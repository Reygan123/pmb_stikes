import type { ProdiResponse } from "../types/prodi";
import ApiService from "./ApiService";

const ProdiService = {
  getDetail() {
    return ApiService.get("prodi");
  },

  getBySlug(slug: string): Promise<ProdiResponse> {
    return ApiService.get(`prodi/${slug}`)
      .then(response => response.data)
      .catch(error => {
        console.error("Error fetching prodi by slug:", error);
        throw error;
      });
  },
};

export default ProdiService;
