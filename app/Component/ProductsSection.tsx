import { Package, Gauge, Activity, Server } from "lucide-react";

type Locale = "tr" | "en";

const productsData = [
  {
    icon: <Gauge size={24} />,
    tag: "SVG",
    titleTr: "Statik Var Jeneratör (SVG)",
    titleEn: "Static Var Generator (SVG)",
    descTr: "Reaktif güç kompanzasyonu ve güç kalitesi iyileştirme çözümleri. Hızlı tepki süresi ile dinamik kompanzasyon sağlar.",
    descEn: "Reactive power compensation and power quality improvement solutions. Provides dynamic compensation with fast response time.",
    gradient: "from-blue-500/10 to-cyan-500/10",
  },
  {
    icon: <Activity size={24} />,
    tag: "AHF",
    titleTr: "Aktif Harmonik Filtre (AHF)",
    titleEn: "Active Harmonic Filter (AHF)",
    descTr: "Harmonik akımların filtrelenmesi ve sistem kararlılığının artırılması. Nonlineer yüklerin sebep olduğu harmonikleri elimine eder.",
    descEn: "Filtering harmonic currents and improving system stability. Eliminates harmonics caused by non-linear loads.",
    gradient: "from-violet-500/10 to-purple-500/10",
  },
  {
    icon: <Server size={24} />,
    tag: "",
    titleTr: "Alçak Gerilim ve Otomasyon Panoları",
    titleEn: "Low Voltage and Automation Panels",
    descTr: "Projeye özel, yönetmeliklere uygun pano tasarımı ve üretimi. Motor kontrol merkezleri ve otomasyon panoları dahil.",
    descEn: "Project-specific panel design and production in compliance with regulations. Including motor control centers and automation panels.",
    gradient: "from-amber-500/10 to-orange-500/10",
  },
];

export default function ProductsSection({ locale }: { locale: Locale }) {
  const isEn = locale === "en";

  return (
    <section
      className="bg-slate-50/60 py-20"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        {/* Başlık */}
        <div className="animate-fade-in-up mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-rasyatek-primary-soft px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-rasyatek-primary">
            <Package size={14} />
            {isEn ? "Our Products" : "Ürünlerimiz"}
          </div>
          <h2 className="mt-5 text-2xl font-bold tracking-tight text-slate-900 md:text-3xl lg:text-4xl">
            {isEn ? "High-performance " : "Yüksek performanslı "}
            <span className="gradient-text">
              {isEn ? "power quality and panel solutions" : "güç kalitesi ve pano çözümleri"}
            </span>
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-600 md:text-base">
            {isEn
              ? "We provide energy quality and distribution solutions for industrial facilities and commercial buildings."
              : "Endüstriyel tesisler ve ticari yapılara yönelik enerji kalitesi ve dağıtım çözümleri sunuyoruz."}
          </p>
        </div>

        {/* Ürün Kartları */}
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {productsData.map((product, i) => (
            <div
              key={i}
              className={`card-hover animate-fade-in-up delay-${(i + 1) * 100} group relative overflow-hidden rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-100`}
            >
              {/* Gradient arka plan */}
              <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />

              <div className="relative">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-rasyatek-primary-soft text-rasyatek-primary transition-colors duration-300 group-hover:bg-rasyatek-primary group-hover:text-white">
                  {product.icon}
                </div>
                {product.tag && (
                  <span className="mt-4 inline-block rounded-full bg-slate-100 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-slate-500">
                    {product.tag}
                  </span>
                )}
                <h3 className="mt-3 text-lg font-bold text-slate-900">
                  {isEn ? product.titleEn : product.titleTr}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-500">
                  {isEn ? product.descEn : product.descTr}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
