import ApiService from "./ApiService";

const IdentityService = {
  getAll() {
    return ApiService.get("identity");
  },
};

export default IdentityService;
