export interface Departement {
  program_name: string;
  slug: string;
  image1: string | null;
  fakultas_name: string;
}

export interface Fakultas {
  id: number;
  name: string;
  slug: string;
  subtitle: string | null;
  yt_id: string | null;
  ourteam_id: number | null;
  title1: string | null;
  description1: string | null;
  statistik1: string | null;
  statistik2: string | null;
  statistik3: string | null;
  statistik4: string | null;
  tt: string | null;
  ig: string | null;
  fb: string | null;
  yt: string | null;
  linkedin: string | null;
  email: string | null;
  phone: string | null;
  address: string | null;
  map: string | null;
  title2: string | null;
  description2: string | null;
  title3: string | null;
  description3: string | null;
  image1: string | null;
  image2: string | null;
  image3: string | null;
  image4: string | null;
  image5: string | null;
  link_fakultas: string | null;
  color: string | null;
  created_at: string;
  updated_at: string;
}

export interface FacultyResponse {
  fakultas: Fakultas;
  departements: Departement[];
}
