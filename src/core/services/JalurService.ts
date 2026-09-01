import type { Jalur } from "../types/jalur";
import ApiService from "./ApiService";

const JalurService = {
  getAll() {
    return ApiService.get("registration");
  },

  getBySlug(slug: string): Promise<Jalur> {
    return ApiService.get(`registration/${slug}`)
      .then(response => response.data)
      .catch(error => {
        console.error("Error fetching jalur by slug:", error);
        throw error;
      });
  },
};

export default JalurService;
