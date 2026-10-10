export interface Category {
  id: number;
  name: string;
  name_en?: string;
  slug: string;
  image: string;
  created_at: string;
  updated_at: string;
}

export interface Post {
  id: number;
  title: string;
  title_en?: string;
  slug: string;
  category_id: number;
  description: string;
  description_en?: string;
  content: string;
  content_en?: string;
  image: string;
  user_id: number;
  pub_date: string;
  created_at: string;
  updated_at: string;
  category: Category;
}

export interface PostApiResponse {
  data: Post[];
  current_page: number;
  per_page: number;
  total: number;
  last_page: number;
  next_page_url: string | null;
  prev_page_url: string | null;
}

export interface SinglePostApiResponse {
  data: Post;
}