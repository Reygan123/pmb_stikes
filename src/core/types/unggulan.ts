export interface Unggulan {
  id: number;
  id_departement: number | null;
  title: string;
  description: string;
  title_en?: string;
  description_en?: string;
  image: string;
  home?: string | null;
  created_at: string;
  updated_at: string;
}

export interface UnggulanFakultas {
  id: number;
  title: string;
  slug: string;
  image: string;
  description: string;
  link: string | null;
  program_id: number;
  home: number;
  fakultas: number;
  created_at: string;
  updated_at: string;
}