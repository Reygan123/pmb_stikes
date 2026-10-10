export interface About {
  id: number;
  title: string;
  slug: string;
  subtitle: string;
  description: string;
  content: string | null;
  title_en?: string;
  subtitle_en?: string;
  description_en?: string;
  content_en?: string;
  image1: string;
  image2: string;
  video: string;
  created_at: string | null;
  updated_at: string;
}
