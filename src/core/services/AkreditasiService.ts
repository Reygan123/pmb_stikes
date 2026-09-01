import ApiService from "./ApiService";

const AkreditasiService = {
  getAll() {
    return ApiService.get("legal");
  },
};

export default AkreditasiService;
