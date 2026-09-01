export interface Departement {
  id: number;
  name: string;
  slug: string;
  category: string | null;
  image_head: string | null;
  title1: string;
  description1: string;
  image1: string | null;
  title2: string;
  description2: string;
  image2: string | null;
  title3: string;
  description3: string;
  image3: string | null;
  title4: string;
  description4: string;
  image4: string | null;
  age: string | null;
  weekly: string | null;
  periode: string | null;
  ourteam_id: number | null;
  class_size: string | null;
  time_table: string | null;
  time_table2: string | null;
  content: string | null;
  cta: string | null;
  link_program: string | null;
  id_yt: string | null;
  brosur: string | null;
  color: string | null;
  created_at: string;
  updated_at: string;
}

export interface Test {
  fakultas_name: string;
  fakultas_slug: string;
}

export interface Dekan {
  id: number;
  program_id: number;
  ot_id: number | null;
  title: string;
  name: string;
  fb: string | null;
  ig: string | null;
  tt: string | null;
  phone: string | null;
  email: string | null;
  image: string | null;
  created_at: string;
  updated_at: string;
}

export interface Unggulan {
  id: number;
  title: string;
  slug: string;
  image: string | null;
  description: string;
  link: string | null;
  program_id: number;
  home: number | null;
  created_at: string;
  updated_at: string;
}

export interface Fasilitas {
    title: string,
    image: string,
    subtitle: string,
    description: string
}

export interface ProdiResponse {
  departement: Departement;
  test: Test;
  dekan: Dekan;
  unggulan: Unggulan[];
  ourteam: any[];   // kalau nanti ada struktur jelas, bisa diganti
  fasilitas: Fasilitas[]; 
}
