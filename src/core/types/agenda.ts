export interface Agenda {
  id: number;
  title: string;
  slug: string;
  agendacat: string | null;
  start_date: string;
  end_date: string;
  start_time: string;
  end_time: string;
  content: string;
  location: string;
  yt_link: string | null;
  organizer: string;
  register_link: string;
  contact: string;
  image: string;
  created_at: string;
  updated_at: string;
}
