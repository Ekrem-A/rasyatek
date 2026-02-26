export type ServiceSlug =
  | "hv-operation"
  | "measurement-reporting"
  | "maintenance-repair"
  | "electrical-design"
  | "contracting"
  | "smart-home";

export interface ServiceItem {
  slug: ServiceSlug;
  titleTr: string;
  titleEn: string;
  shortTr: string;
  shortEn: string;
  bulletsTr: string[];
  bulletsEn: string[];
}

export const services: ServiceItem[] = [
  {
    slug: "hv-operation",
    titleTr: "Yüksek Gerilim İşletme Sorumluluğu",
    titleEn: "High Voltage Operation Responsibility",
    shortTr:
      "Trafo merkezleri ve OG hücreler için mevzuata uygun yüksek gerilim işletme sorumluluğu hizmetleri.",
    shortEn:
      "High voltage operation responsibility services for transformer substations and MV switchgears in compliance with regulations.",
    bulletsTr: [
      "Trafo merkezi ve OG hücrelerinin periyodik kontrolü",
      "Arıza durumlarında hızlı müdahale",
      "Yasal mevzuata uygun işletme kayıtları",
    ],
    bulletsEn: [
      "Periodic inspection of transformer substations and MV switchgears",
      "Fast intervention in case of failures",
      "Operation records in line with legal regulations",
    ],
  },
  {
    slug: "measurement-reporting",
    titleTr: "Ölçüm ve Raporlama",
    titleEn: "Measurement and Reporting",
    shortTr:
      "Enerji kalitesi, harmonik ve yük analizleri için ölçüm, raporlama ve çözüm önerileri.",
    shortEn:
      "Measurements, reporting and solution proposals for energy quality, harmonic and load analysis.",
    bulletsTr: [
      "Harmonik ölçümleri ve raporlanması",
      "Reaktif güç ve kompanzasyon analizi",
      "Enerji kalitesi raporları ve öneriler",
    ],
    bulletsEn: [
      "Harmonic measurements and reporting",
      "Reactive power and compensation analysis",
      "Energy quality reports and recommendations",
    ],
  },
  {
    slug: "maintenance-repair",
    titleTr: "Bakım ve Onarım",
    titleEn: "Maintenance and Repair",
    shortTr:
      "Elektrik panoları, kablo hatları ve sistem bileşenleri için planlı bakım ve arıza onarım hizmetleri.",
    shortEn:
      "Planned maintenance and failure repair services for electrical panels, cable lines and system components.",
    bulletsTr: [
      "Periyodik bakım planlarının oluşturulması",
      "Saha ekipleri ile hızlı arıza müdahalesi",
      "Kayıtlı bakım ve servis raporları",
    ],
    bulletsEn: [
      "Creation of periodic maintenance plans",
      "Fast on-site failure intervention teams",
      "Recorded maintenance and service reports",
    ],
  },
  {
    slug: "electrical-design",
    titleTr: "Elektrik Projelendirme",
    titleEn: "Electrical Design",
    shortTr:
      "Konut, ticari ve endüstriyel projeler için yönetmeliklere uygun elektrik projeleri.",
    shortEn:
      "Electrical designs for residential, commercial and industrial projects in compliance with regulations.",
    bulletsTr: [
      "Yürürlükteki standart ve yönetmeliklere uygun proje tasarımı",
      "Tek hat şemaları, kısa devre ve yük hesapları",
      "Uygulama projeleri ve revizyon desteği",
    ],
    bulletsEn: [
      "Project design in line with current standards and regulations",
      "Single-line diagrams, short circuit and load calculations",
      "Implementation drawings and revision support",
    ],
  },
  {
    slug: "contracting",
    titleTr: "Elektrik Taahhüt ve Uygulama",
    titleEn: "Electrical Contracting and Implementation",
    shortTr:
      "Alçak ve orta gerilim elektrik sistemlerinin uçtan uca saha uygulaması.",
    shortEn:
      "End-to-end on-site implementation of low and medium voltage electrical systems.",
    bulletsTr: [
      "Ana dağıtım ve tali pano montajı",
      "Kablo çekimi ve devre bağlantıları",
      "Test, devreye alma ve dokümantasyon",
    ],
    bulletsEn: [
      "Main and sub distribution panel installation",
      "Cable routing and circuit terminations",
      "Testing, commissioning and documentation",
    ],
  },
  {
    slug: "smart-home",
    titleTr: "Akıllı Ev Otomasyon Sistemleri",
    titleEn: "Smart Home Automation Systems",
    shortTr:
      "Konfor, güvenlik ve enerji verimliliği odaklı akıllı ev otomasyon çözümleri.",
    shortEn:
      "Smart home automation solutions focused on comfort, safety and energy efficiency.",
    bulletsTr: [
      "Aydınlatma, perde, iklimlendirme otomasyonu",
      "Uzaktan erişim ve senaryo yönetimi",
      "Akıllı cihaz ve sensör entegrasyonları",
    ],
    bulletsEn: [
      "Lighting, shading and HVAC automation",
      "Remote access and scenario management",
      "Smart device and sensor integrations",
    ],
  },
];

