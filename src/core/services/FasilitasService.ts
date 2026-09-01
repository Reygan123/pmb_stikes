import ApiService from "./ApiService";

const FasilitasService = {
  getAll() {
    return ApiService.get("fasilitasUnggulan");
  },

  getAllHome() {
    return ApiService.get("fasilitas-home");
  },

  getById(id: number) {
    return ApiService.get(`fasilitas/${id}`)
  },

  getByFakultasId(id: number) {
    return ApiService.get(`fasilitas/fakultas/${id}`)
  },
};

export default FasilitasService;
