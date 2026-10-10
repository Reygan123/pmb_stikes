export interface Pengumuman {
  id: number;
  title: string;
  title_en?: string;
  slug: string;
  category: string;
  category_en?: string;
  start_date: string;
  location?: string | null;
  content?: string | null;
  content_en?: string | null;
  contact?: string | null;
  file?: string | null;
  status: boolean | number;
  created_at?: string;
  updated_at?: string;
}
