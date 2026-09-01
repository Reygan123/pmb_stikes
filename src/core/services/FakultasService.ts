import type { FacultyResponse } from "../types/fakultas";
import ApiService from "./ApiService";

const FakultasService = {
  getDetail() {
    return ApiService.get("fakultas");
  },

  getBySlug(slug: string): Promise<FacultyResponse> {
    return ApiService.get(`fakultas/${slug}`)
      .then(response => response.data)
      .catch(error => {
        console.error("Error fetching fakultas by slug:", error);
        throw error;
      });
  },
};

export default FakultasService;
