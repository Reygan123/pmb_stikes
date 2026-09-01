import type { Post, PostApiResponse } from "../types/post";
import ApiService from "./ApiService";

const PostService = {
  getAll(page: number = 1): Promise<PostApiResponse> {
    return ApiService.get("post", `?page=${page}`)
      .then(response => response.data)
      .catch(error => {
        console.error("Error fetching posts:", error);
        throw error;
      });
  },

  getBySlug(slug: string): Promise<Post> {
    return ApiService.get("post", slug)
      .then(response => {
        if (response.data.data) {
          return response.data.data;
        }
        return response.data;
      })
      .catch(error => {
        console.error("Error fetching post by slug:", error);
        throw error;
      });
  },

  search(query: string, page: number = 1): Promise<PostApiResponse> {
    return ApiService.get("post", `?search=${encodeURIComponent(query)}&page=${page}`)
      .then(response => response.data)
      .catch(error => {
        console.error("Error searching posts:", error);
        throw error;
      });
  },

  getByCategory(categoryId: number, page: number = 1): Promise<PostApiResponse> {
    return ApiService.get("post", `?category_id=${categoryId}&page=${page}`)
      .then(response => response.data)
      .catch(error => {
        console.error("Error fetching posts by category:", error);
        throw error;
      });
  },
};

export default PostService;