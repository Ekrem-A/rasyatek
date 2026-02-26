export type ProjectCategory = "residential" | "commercial" | "industrial";

export type ProjectServiceType =
  | "contracting"
  | "design"
  | "maintenance"
  | "hvOperation";

export interface Project {
  slug: string;
  nameTr: string;
  nameEn: string;
  category: ProjectCategory;
  serviceTypes: ProjectServiceType[];
  locationTr: string;
  locationEn: string;
  powerInfo?: string;
  descriptionTr: string;
  descriptionEn: string;
}

export const projects: Project[] = [
  {
    slug: "konut-site-enerji-cozumleri",
    nameTr: "Konut Sitesi Enerji ve Aydınlatma Çözümleri",
    nameEn: "Residential Complex Power & Lighting Solutions",
    category: "residential",
    serviceTypes: ["design", "contracting"],
    locationTr: "İstanbul",
    locationEn: "Istanbul",
    powerInfo: "Trafo + kompanzasyon + zayıf akım altyapısı",
    descriptionTr:
      "Yeni nesil konut sitesinde trafo merkezi, ana dağıtım panoları, ortak alan aydınlatma ve zayıf akım sistemlerinin projelendirilmesi ve uygulaması.",
    descriptionEn:
      "Design and implementation of transformer substation, main distribution panels, common area lighting and low-current systems for a new generation residential complex.",
  },
  {
    slug: "endustriyel-tesis-guc-kalitesi",
    nameTr: "Endüstriyel Tesis Güç Kalitesi İyileştirme",
    nameEn: "Industrial Plant Power Quality Improvement",
    category: "industrial",
    serviceTypes: ["contracting", "maintenance"],
    locationTr: "Kocaeli Organize Sanayi Bölgesi",
    locationEn: "Kocaeli Organized Industrial Zone",
    powerInfo: "SVG + AHF entegrasyonu",
    descriptionTr:
      "Üretim tesisinde harmoniklerin azaltılması ve reaktif güç kompanzasyonu için SVG ve AHF çözümlerinin projelendirilmesi ve devreye alınması.",
    descriptionEn:
      "Engineering and commissioning of SVG and AHF solutions to reduce harmonics and provide reactive power compensation in a production facility.",
  },
  {
    slug: "avm-yg-isletme-sorumlulugu",
    nameTr: "AVM Yüksek Gerilim İşletme Sorumluluğu",
    nameEn: "Shopping Mall High Voltage Operation Responsibility",
    category: "commercial",
    serviceTypes: ["hvOperation", "maintenance"],
    locationTr: "Ankara",
    locationEn: "Ankara",
    powerInfo: "YG merkezleri, OG hücreler, trafo izleme",
    descriptionTr:
      "Büyük ölçekli bir alışveriş merkezinde yüksek gerilim işletme sorumluluğu, periyodik bakım ve ölçüm/raporlama hizmetleri.",
    descriptionEn:
      "High voltage operation responsibility, periodic maintenance and measurement/reporting services for a large-scale shopping mall.",
  },
];

