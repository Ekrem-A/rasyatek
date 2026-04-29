"use client";

import { Package, Gauge, Activity, Server } from "lucide-react";
import { motion } from "framer-motion";

type Locale = "tr" | "en";

const productsData = [
  {
    icon: <Gauge size={28} />,
    tag: "SVG",
    titleTr: "Statik Var Generator (SVG)",
    titleEn: "Static Var Generator (SVG)",
    descTr: "Reaktif güç kompanzasyonu ve güç kalitesi iyileştirme çözümleri. Hızlı tepki süresi ile dinamik kompanzasyon sağlar.",
    descEn: "Reactive power compensation and power quality improvement solutions. Provides dynamic compensation with fast response time.",
    gradient: "from-blue-500/10 to-cyan-500/10",
    border: "border-blue-500",
    iconBg: "bg-blue-50 text-blue-600 group-hover:bg-blue-500",
    glow: "card-glow-blue",
    tagColor: "bg-blue-50 text-blue-600",
  },
  {
    icon: <Activity size={28} />,
    tag: "AHF",
    titleTr: "Aktif Harmonik Filtre (AHF)",
    titleEn: "Active Harmonic Filter (AHF)",
    descTr: "Harmonik akımların filtrelenmesi ve sistem kararlılığının artırılması. Nonlineer yüklerin sebep olduğu harmonikleri elimine eder.",
    descEn: "Filtering harmonic currents and improving system stability. Eliminates harmonics caused by non-linear loads.",
    gradient: "from-violet-500/10 to-purple-500/10",
    border: "border-violet-500",
    iconBg: "bg-violet-50 text-violet-600 group-hover:bg-violet-500",
    glow: "card-glow-violet",
    tagColor: "bg-violet-50 text-violet-600",
  },
  {
    icon: <Server size={28} />,
    tag: "LV",
    titleTr: "Alçak Gerilim ve Otomasyon Panoları",
    titleEn: "Low Voltage and Automation Panels",
    descTr: "Projeye özel, yönetmeliklere uygun pano tasarımı ve üretimi. Motor kontrol merkezleri ve otomasyon panoları dahil.",
    descEn: "Project-specific panel design and production in compliance with regulations. Including motor control centers and automation panels.",
    gradient: "from-amber-500/10 to-orange-500/10",
    border: "border-amber-500",
    iconBg: "bg-amber-50 text-amber-600 group-hover:bg-amber-500",
    glow: "card-glow-amber",
    tagColor: "bg-amber-50 text-amber-600",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
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

export default function ProductsSection({ locale }: { locale: Locale }) {
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
            <Package size={14} />
            {isEn ? "Our Products" : "Ürünlerimiz"}
          </div>
          <h2 className="mt-5 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl md:text-4xl lg:text-5xl">
            {isEn ? "High-performance " : "Yüksek performanslı "}
            <span className="gradient-text">
              {isEn ? "power quality and panel solutions" : "güç kalitesi ve pano çözümleri"}
            </span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-slate-600 md:text-lg">
            {isEn
              ? "We provide energy quality and distribution solutions for industrial facilities and commercial buildings."
              : "Endüstriyel tesisler ve ticari yapılara yönelik enerji kalitesi ve dağıtım çözümleri sunuyoruz."}
          </p>
        </motion.div>

        {/* Ürün Kartları */}
        <motion.div
          className="mt-10 grid gap-5 sm:mt-16 sm:gap-6 md:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {productsData.map((product, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { type: "spring", stiffness: 300, damping: 20 } }}
              className={`group relative overflow-hidden rounded-3xl border-l-4 ${product.border} ${product.glow} bg-white p-8 shadow-sm ring-1 ring-slate-100 hover:ring-slate-200 transition-shadow duration-300`}
            >
              {/* Üst gradient çizgi */}
              <div className={`absolute left-0 top-0 h-1 w-full bg-linear-to-r ${product.gradient.replace("/10", "")}`} />

              {/* Hover'da hafif gradient arka plan */}
              <div className={`pointer-events-none absolute inset-0 bg-linear-to-br ${product.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />

              {/* Dekoratif arka plan numarası */}
              <span className="pointer-events-none absolute bottom-4 right-5 select-none text-8xl font-black text-slate-900/4 leading-none">
                {String(i + 1).padStart(2, "0")}
              </span>

              <div className="relative">
                {/* İkon */}
                <motion.div
                  className={`flex h-16 w-16 items-center justify-center rounded-2xl transition-colors duration-300 group-hover:text-white group-hover:shadow-lg ${product.iconBg}`}
                  whileHover={{ rotate: 5, scale: 1.1, transition: { type: "spring", stiffness: 400, damping: 15 } }}
                >
                  {product.icon}
                </motion.div>

                {/* Tag rozeti */}
                {product.tag && (
                  <span className={`mt-5 inline-block rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider ${product.tagColor}`}>
                    {product.tag}
                  </span>
                )}

                <h3 className="mt-3 text-xl font-bold text-slate-900 lg:text-2xl">
                  {isEn ? product.titleEn : product.titleTr}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-slate-500">
                  {isEn ? product.descEn : product.descTr}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
