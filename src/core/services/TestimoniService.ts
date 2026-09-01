import ApiService from "./ApiService";

const TestimoniService = {
  getAll() {
    return ApiService.get("testimoni");
  },

  getAllHome() {
    return ApiService.get("testimoni-home");
  },

  getById(id: number) {
    return ApiService.get(`testimoni/${id}`)
  },

  getByFakultasId(id: number) {
    return ApiService.get(`testimoni/fakultas/${id}`)
  },

  getByProdiId(id: number) {
    return ApiService.get(`testimoni-departement/${id}`)
  },
};

export default TestimoniService;
