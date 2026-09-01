export interface Testimonial {
  id: number;
  id_departement: number | null;
  name: string;
  title: string;
  description: string;
  home?: string | null;
  yt: string;
  image: string;
  created_at: string;
  updated_at: string;
}

export interface TestimoniFakultas {
  id: number;
  name: string;
  title: string;
  slug: string;
  program_id: number;
  description: string;
  image: string;
  yt_link: string | null;
  home: number;
  fakultas_display: number;
  created_at: string;
  updated_at: string;
}

