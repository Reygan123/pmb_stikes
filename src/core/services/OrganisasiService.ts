import ApiService from "./ApiService";

const OrganisasiService = {
  getAll() {
    return ApiService.get("organisasi");
  },

  getAllHome() {
    return ApiService.get("organisasi-home");
  },

  getById(id: number) {
    return ApiService.get(`organisasi/${id}`)
  },

  getByFakultasId(id: number) {
    return ApiService.get(`organisasi/fakultas/${id}`)
  },

  getByProdiId(id: number) {
    return ApiService.get(`organisasi/departement/${id}`)
  },
};

export default OrganisasiService;
