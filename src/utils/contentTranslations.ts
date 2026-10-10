export const contentDictionary: Record<string, string> = {
  "Badan Eksekutif Mahasiswa (BEM)": "Student Executive Board (BEM)",
  "Himpunan Mahasiswa Program Studi Keperawatan (HIMA Keperawatan)": "Nursing Student Association (HIMA Nursing)",
  "Himpunan Mahasiswa Program Studi Kebidanan (HIMA Kebidanan)": "Midwifery Student Association (HIMA Midwifery)",
  "Unit Kegiatan Mahasiswa Islam (UKMI)": "Islamic Student Activity Unit (UKMI)",
  "Budi Luhur Language Club (BULB)": "Budi Luhur Language Club (BULB)",
  "Lulusan Unggul & Berdaya Saing Nasional": "Outstanding Graduates with National Competitiveness",
  "Dosen Profesional & Berpengalaman": "Professional & Experienced Faculty",
  "Pendidikan Berbasis Mutu & Etika": "Quality & Ethics-Based Education",
  "Tridharma yang Kuat": "Robust Tri Dharma Academic Foundation",
  "Jaringan & Kerjasama Luas": "Extensive Hospital & Healthcare Network",
  "Kurikulum Relevan (Lokal-Global)": "Relevant Local & Global Curriculum",
  "Dosen Berpengalaman Internasional": "Faculty with Global Academic Experience",
  "Laboratorium Center of Excellence": "Center of Excellence Laboratories",
  "Jaringan Kemitraan Global & Peluang Internasional": "Global Partnerships & International Career Horizons",
  "Keunggulan Kardiovaskuler": "Cardiovascular Nursing Focus",
  "Didukung Langsung Praktisi Sukses": "Direct Mentorship from Practicing Clinicians",
  "Jejaring Bisnis yang Luas": "Extensive Professional & Industry Network",
  "Peluang Magang di Perusahaan Mitra": "Clinical Internship in Premier Partner Hospitals",
  "Laboratorium Keperawatan": "Nursing Clinical Simulation Laboratory",
  "Laboratorium Kebidanan": "Maternity & Midwifery Practice Laboratory",
  "Laboratorium Komputer": "CBT Exam & Digital Learning Center",
  "Perpustakaan": "Integrated Health Sciences Library",
  "Auditorium": "Main Campus Auditorium",
  "Ruang Kelas": "Smart Multimedia Classrooms",
  "Masjid": "Campus Mosque & Spiritual Center",
  "Gelombang I": "Wave I Admission Track",
  "Gelombang II": "Wave II Admission Track",
  "Gelombang III": "Wave III Admission Track",
  "Jalur Prestasi": "Academic & Non-Academic Merit Track",
  "Jalur Reguler": "Regular Admission Track",
  "Jalur Alih Jenjang": "Direct Transfer & Continuing Studies Track",
  "S1 Keperawatan": "Bachelor of Nursing (S.Kep)",
  "Profesi Ners": "Nurse Professional Degree (Ns.)",
  "D3 Keperawatan": "Diploma in Nursing (A.Md.Kep)",
  "S1 Kebidanan": "Bachelor of Midwifery (S.Keb)",
  "Profesi Bidan": "Midwife Professional Degree (Bdn.)",
  "D3 Kebidanan": "Diploma in Midwifery (A.Md.Keb)",
  "Tingkat Nasional": "National Level",
  "Tingkat Internasional": "International Level",
  "Tingkat Wilayah": "Regional Level",
  "Tingkat Provinsi": "Provincial Level",
  "Keperawatan": "Nursing",
  "Kebidanan": "Midwifery",
  "Fakultas Keperawatan": "Faculty of Nursing",
  "Fakultas Kebidanan": "Faculty of Midwifery",
  "Program Studi Keperawatan": "Department of Nursing",
  "Program Studi Kebidanan": "Department of Midwifery",
  "Akademik": "Academic",
  "Non-Akademik": "Non-Academic",
  "Riset & Inovasi": "Research & Innovation",
  "Seputar Kampus": "Campus Life",
  "Organisasi": "Organizations",
  "UKM": "Student Activity Units",
  "Prestasi": "Achievements",
  "Kemahasiswaan": "Student Affairs",
  "Berita": "News",
  "Pengumuman": "Announcements",
  "Kelulusan": "Graduation",
  "Pendaftaran": "Admission",
  "Beasiswa": "Scholarships",
  "Fasilitas Kampus": "Campus Facilities",
  "Laboratorium": "Laboratories"
};

export function lookupTranslation(text?: string | null): string | null {
  if (!text) return null;
  const trimmed = text.trim();
  if (contentDictionary[trimmed]) {
    return contentDictionary[trimmed];
  }
  for (const [key, value] of Object.entries(contentDictionary)) {
    if (trimmed.toLowerCase() === key.toLowerCase()) {
      return value;
    }
  }
  return null;
}
