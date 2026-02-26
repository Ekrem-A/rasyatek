import { Heart, CheckCircle2, ShieldCheck, HardHat, Clock } from "lucide-react";

type Locale = "tr" | "en";

const valuesData = [
  {
    icon: <CheckCircle2 size={20} />,
    titleTr: "Güvenilirlik",
    titleEn: "Reliability",
    descTr:
      "Söz verdiğimiz işi, söz verdiğimiz şekilde ve sürede teslim ederiz. Güven, iş ilişkilerimizin temelidir.",
    descEn:
      "We deliver the promised work, in the promised way and on time. Trust is the foundation of our business relationships.",
  },
  {
    icon: <ShieldCheck size={20} />,
    titleTr: "Mühendislik Disiplini",
    titleEn: "Engineering Discipline",
    descTr:
      "Her projemizde standartlara ve yönetmeliklere uygun çözümler üretiriz; kestirme yol tercih etmeyiz.",
    descEn:
      "We produce solutions in compliance with standards and regulations in every project; we never take shortcuts.",
  },
  {
    icon: <Heart size={20} />,
    titleTr: "Kalite ve Sürdürülebilirlik",
    titleEn: "Quality and Sustainability",
    descTr:
      "Uzun ömürlü, bakım maliyeti düşük ve çevreye duyarlı sistem tasarımları yaparız.",
    descEn:
      "We design long-lasting, low-maintenance and environmentally conscious systems.",
  },
  {
    icon: <HardHat size={20} />,
    titleTr: "İş Güvenliği Önceliği",
    titleEn: "Occupational Safety",
    descTr:
      "Saha çalışmalarımızda insan güvenliği her şeyin üstünde tutulur. İSG kurallarından asla taviz vermeyiz.",
    descEn:
      "Human safety is always the top priority in our field operations. We never compromise on OHS rules.",
  },
  {
    icon: <Clock size={20} />,
    titleTr: "Zamanında ve Doğru Uygulama",
    titleEn: "On-Time Accurate Execution",
    descTr:
      "Planlı çalışma ve etkin koordinasyonla projeleri zamanında ve teknik şartnameye uygun tamamlarız.",
    descEn:
      "We complete projects on time and in compliance with technical specifications through planned work and effective coordination.",
  },
];

export default function ValuesSection({ locale }: { locale: Locale }) {
  const isEn = locale === "en";

  return (
    <section
      id="degerler"
      className="section-divider scroll-mt-24 bg-slate-50/60 py-20"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
          {/* Sol başlık */}
          <div className="max-w-md animate-fade-in-up lg:sticky lg:top-28">
            <div className="inline-flex items-center gap-2 rounded-full bg-rasyatek-primary-soft px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-rasyatek-primary">
              <Heart size={14} />
              {isEn ? "Our Values" : "Değerlerimiz"}
            </div>
            <h2 className="mt-5 text-2xl font-bold tracking-tight text-slate-900 md:text-3xl lg:text-4xl">
              {isEn ? "We see engineering as " : "Mühendisliği sorumluluk gerektiren bir "}
              <span className="gradient-text">
                {isEn ? "a responsibility." : "iş olarak görüyoruz."}
              </span>
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-600 md:text-base">
              {isEn
                ? "Reliability, engineering discipline and long-term usability principles form the basis of our projects."
                : "Projelerimizin temelinde güvenilirlik, mühendislik disiplini ve uzun ömürlü kullanım prensipleri yer alır."}
            </p>
          </div>

          {/* Sağ kartlar */}
          <div className="grid flex-1 gap-4 sm:grid-cols-2 lg:max-w-2xl">
            {valuesData.map((value, i) => (
              <div
                key={i}
                className={`card-hover animate-fade-in-up delay-${(i + 1) * 100} rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100`}
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-rasyatek-primary-soft text-rasyatek-primary">
                  {value.icon}
                </div>
                <p className="mt-4 text-base font-semibold text-slate-900">
                  {isEn ? value.titleEn : value.titleTr}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">
                  {isEn ? value.descEn : value.descTr}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
