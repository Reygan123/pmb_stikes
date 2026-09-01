import ApiService from "./ApiService";

const AkademikService = {
  getAll() {
    return ApiService.get("akademik");
  },
};

export default AkademikService;
