import {
  Cog,
  Zap,
  BarChart3,
  Wrench,
  PenTool,
  HardHat,
  Home,
  ArrowRight,
} from "lucide-react";
import { services } from "@/data/services";

type Locale = "tr" | "en";

const iconMap: Record<string, React.ReactNode> = {
  "hv-operation": <Zap size={22} />,
  "measurement-reporting": <BarChart3 size={22} />,
  "maintenance-repair": <Wrench size={22} />,
  "electrical-design": <PenTool size={22} />,
  contracting: <HardHat size={22} />,
  "smart-home": <Home size={22} />,
};

const gradientMap: Record<string, string> = {
  "hv-operation": "from-amber-500 to-orange-500",
  "measurement-reporting": "from-emerald-500 to-teal-500",
  "maintenance-repair": "from-blue-500 to-cyan-500",
  "electrical-design": "from-violet-500 to-purple-500",
  contracting: "from-rose-500 to-pink-500",
  "smart-home": "from-sky-500 to-indigo-500",
};

export default function ServicesSection({ locale }: { locale: Locale }) {
  const isEn = locale === "en";

  return (
    <section
      className="py-20"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        {/* Başlık */}
        <div className="animate-fade-in-up mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-rasyatek-primary-soft px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-rasyatek-primary">
            <Cog size={14} />
            {isEn ? "Our Services" : "Hizmetlerimiz"}
          </div>
          <h2 className="mt-5 text-2xl font-bold tracking-tight text-slate-900 md:text-3xl lg:text-4xl">
            {isEn ? "We manage the entire " : "Projelendirmeden saha uygulamasına kadar "}
            <span className="gradient-text">
              {isEn ? "process from design to site." : "tüm süreci yönetiyoruz."}
            </span>
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-600 md:text-base">
            {isEn
              ? "In electrical and engineering projects, we offer end-to-end solutions focused on planning, control and compliance with regulations."
              : "Elektrik ve mühendislik projelerinde, planlama, kontrol ve yönetmeliklere uygunluk odaklı uçtan uca çözümler sunuyoruz."}
          </p>
        </div>

        {/* Hizmet Kartları */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <div
              key={service.slug}
              className={`card-hover animate-fade-in-up delay-${((i % 3) + 1) * 100} group relative overflow-hidden rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-100`}
            >
              {/* Üst gradient çizgi */}
              <div
                className={`absolute left-0 top-0 h-1 w-full bg-gradient-to-r ${
                  gradientMap[service.slug] ?? "from-rasyatek-primary to-sky-500"
                } opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
              />

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-rasyatek-primary-soft text-rasyatek-primary transition-all duration-300 group-hover:bg-rasyatek-primary group-hover:text-white group-hover:shadow-lg group-hover:shadow-rasyatek-primary/20">
                {iconMap[service.slug] ?? <Cog size={22} />}
              </div>

              <h3 className="mt-5 text-lg font-bold text-slate-900">
                {isEn ? service.titleEn : service.titleTr}
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-slate-500">
                {isEn ? service.shortEn : service.shortTr}
              </p>

              {/* Madde işaretleri */}
              <ul className="mt-4 space-y-2">
                {(isEn ? service.bulletsEn : service.bulletsTr).map(
                  (bullet, j) => (
                    <li key={j} className="flex items-start gap-2 text-xs text-slate-600">
                      <ArrowRight
                        size={12}
                        className="mt-0.5 shrink-0 text-rasyatek-primary"
                      />
                      {bullet}
                    </li>
                  )
                )}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
