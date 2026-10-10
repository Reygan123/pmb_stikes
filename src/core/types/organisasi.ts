export interface Kategori {
  id: number;
  title: string;
  description: string;
  created_at: string;
  updated_at: string;
}

export interface Organization {
  id: number;
  kategori_id: number | null;
  title: string;
  title_en?: string;
  description: string;
  description_en?: string;
  image: string;
  created_at: string;
  updated_at: string;
  program_id: number | null;
  home: number | null;
  fakultas_display: number | null;
  kategori: Kategori | null;
}

export interface Kategori {
  id: number;
  title: string;
  description: string;
  created_at: string;
  updated_at: string;
}

export interface OrganisasiFakultas {
  id: number;
  kategori_id: number;
  title: string;
  description: string;
  image: string;
  created_at: string;
  updated_at: string;
  program_id: number;
  home: number | null;
  fakultas_display: number;
  kategori: Kategori | null;
}
