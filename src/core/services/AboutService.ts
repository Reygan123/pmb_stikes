import ApiService from "./ApiService";

const AboutService = {
  getAll() {
    return ApiService.get("about");
  },
};

export default AboutService;
