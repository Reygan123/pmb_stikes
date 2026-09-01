import ApiService from "./ApiService";

const UnggulanService = {
  getAll() {
    return ApiService.get("unggulan");
  },

  getAllHome() {
    return ApiService.get("unggulan-home");
  },

  getById(id: number) {
    return ApiService.get(`unggulan/${id}`)
  },

  getByFakultasId(id: number) {
    return ApiService.get(`unggulan/fakultas/${id}`)
  },
};

export default UnggulanService;
