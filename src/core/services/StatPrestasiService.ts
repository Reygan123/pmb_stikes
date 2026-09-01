import ApiService from "./ApiService";

const StatPrestasiService = {
  getAll() {
    return ApiService.get("prestasi-statistik");
  }
};

export default StatPrestasiService;
