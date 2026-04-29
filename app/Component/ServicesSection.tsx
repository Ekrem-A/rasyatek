"use client";

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
import { motion } from "framer-motion";
import { services } from "@/data/services";

type Locale = "tr" | "en";

const iconMap: Record<string, React.ReactNode> = {
  "hv-operation": <Zap size={28} />,
  "measurement-reporting": <BarChart3 size={28} />,
  "maintenance-repair": <Wrench size={28} />,
  "electrical-design": <PenTool size={28} />,
  contracting: <HardHat size={28} />,
  "smart-home": <Home size={28} />,
};

const gradientMap: Record<string, string> = {
  "hv-operation": "from-amber-500 to-orange-500",
  "measurement-reporting": "from-emerald-500 to-teal-500",
  "maintenance-repair": "from-blue-500 to-cyan-500",
  "electrical-design": "from-violet-500 to-purple-500",
  contracting: "from-rose-500 to-pink-500",
  "smart-home": "from-sky-500 to-indigo-500",
};

const borderColorMap: Record<string, string> = {
  "hv-operation": "border-amber-500",
  "measurement-reporting": "border-emerald-500",
  "maintenance-repair": "border-blue-500",
  "electrical-design": "border-violet-500",
  contracting: "border-rose-500",
  "smart-home": "border-sky-500",
};

const glowMap: Record<string, string> = {
  "hv-operation": "card-glow-amber",
  "measurement-reporting": "card-glow-emerald",
  "maintenance-repair": "card-glow-blue",
  "electrical-design": "card-glow-violet",
  contracting: "card-glow-rose",
  "smart-home": "card-glow-sky",
};

const iconBgMap: Record<string, string> = {
  "hv-operation": "bg-amber-50 text-amber-600 group-hover:bg-amber-500",
  "measurement-reporting": "bg-emerald-50 text-emerald-600 group-hover:bg-emerald-500",
  "maintenance-repair": "bg-blue-50 text-blue-600 group-hover:bg-blue-500",
  "electrical-design": "bg-violet-50 text-violet-600 group-hover:bg-violet-500",
  contracting: "bg-rose-50 text-rose-600 group-hover:bg-rose-500",
  "smart-home": "bg-sky-50 text-sky-600 group-hover:bg-sky-500",
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

const headingVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function ServicesSection({ locale }: { locale: Locale }) {
  const isEn = locale === "en";

  return (
    <section className="bg-slate-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">

        {/* Başlık */}
        <motion.div
          className="mx-auto max-w-2xl text-center"
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-rasyatek-primary-soft px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-rasyatek-primary">
            <Cog size={14} />
            {isEn ? "Our Services" : "Hizmetlerimiz"}
          </div>
          <h2 className="mt-5 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl md:text-4xl lg:text-5xl">
            {isEn ? "We manage the entire " : "Projelendirmeden saha uygulamasına kadar "}
            <span className="gradient-text">
              {isEn ? "process from design to site." : "tüm süreci yönetiyoruz."}
            </span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-slate-600 md:text-lg">
            {isEn
              ? "In electrical and engineering projects, we offer end-to-end solutions focused on planning, control and compliance with regulations."
              : "Elektrik ve mühendislik projelerinde, planlama, kontrol ve yönetmeliklere uygunluk odaklı uçtan uca çözümler sunuyoruz."}
          </p>
        </motion.div>

        {/* Hizmet Kartları */}
        <motion.div
          className="mt-10 grid gap-5 sm:mt-16 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {services.map((service, i) => (
            <motion.div
              key={service.slug}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { type: "spring", stiffness: 300, damping: 20 } }}
              className={`group relative overflow-hidden rounded-3xl border-l-4 ${
                borderColorMap[service.slug] ?? "border-rasyatek-primary"
              } ${glowMap[service.slug] ?? ""} bg-white p-8 shadow-sm ring-1 ring-slate-100 hover:ring-slate-200 transition-shadow duration-300`}
            >
              {/* Üst gradient çizgi — her zaman görünür */}
              <div
                className={`absolute left-0 top-0 h-1 w-full bg-linear-to-r ${
                  gradientMap[service.slug] ?? "from-rasyatek-primary to-sky-500"
                }`}
              />

              {/* Dekoratif arka plan numarası */}
              <span className="pointer-events-none absolute bottom-4 right-5 select-none text-8xl font-black text-slate-900/4 leading-none">
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* İkon */}
              <motion.div
                className={`flex h-16 w-16 items-center justify-center rounded-2xl transition-colors duration-300 group-hover:text-white group-hover:shadow-lg ${
                  iconBgMap[service.slug] ?? "bg-rasyatek-primary-soft text-rasyatek-primary group-hover:bg-rasyatek-primary"
                }`}
                whileHover={{ rotate: 5, scale: 1.1, transition: { type: "spring", stiffness: 400, damping: 15 } }}
              >
                {iconMap[service.slug] ?? <Cog size={28} />}
              </motion.div>

              <h3 className="mt-6 text-xl font-bold text-slate-900 lg:text-2xl">
                {isEn ? service.titleEn : service.titleTr}
              </h3>

              <p className="mt-3 text-base leading-relaxed text-slate-500">
                {isEn ? service.shortEn : service.shortTr}
              </p>

              {/* Madde işaretleri */}
              <ul className="mt-5 space-y-3">
                {(isEn ? service.bulletsEn : service.bulletsTr).map(
                  (bullet, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-sm text-slate-600">
                      <ArrowRight
                        size={14}
                        className="mt-0.5 shrink-0 text-rasyatek-primary"
                      />
                      {bullet}
                    </li>
                  )
                )}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
