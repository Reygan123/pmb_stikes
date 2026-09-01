import ApiService from "./ApiService";

const StatistikService = {
  getAll() {
    return ApiService.get("statistik");
  },
};

export default StatistikService;
