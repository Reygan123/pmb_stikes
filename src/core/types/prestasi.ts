export interface Prestasi {
  id: number;
  title: string;
  title_en?: string;
  slug: string;
  name: string;
  name_en?: string;
  categoriprestasi_id: number;
  program_id: number;
  home: number | null;
  image: string;
  tanggal: string;
  created_at: string;
  updated_at: string;
  categoriprestasi: {
    id: number;
    name: string;
    slug: string;
    image: string;
    created_at: string;
    updated_at: string;
  };
}

export interface PrestasiFakultas {
  id: number;
  title: string;
  slug: string;
  name: string;
  categoriprestasi_id: number;
  program_id: number;
  home: number;
  fakultas_display: number;
  image: string;
  tanggal: string;
  created_at: string;
  updated_at: string;
}
