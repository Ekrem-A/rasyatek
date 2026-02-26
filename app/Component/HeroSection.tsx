import Image from "next/image";
import { ArrowRight, ChevronRight, Zap, Shield, Building2 } from "lucide-react";

type Locale = "tr" | "en";

export default function HeroSection({ locale }: { locale: Locale }) {
  const isEn = locale === "en";

  return (
    <section
      id="anasayfa"
      className="relative overflow-hidden pb-20 pt-12 md:pt-20"
    >
      {/* Dekoratif arka plan */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-rasyatek-primary/5 blur-3xl" />
        <div className="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-rasyatek-accent/5 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid gap-12 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] md:items-center">
          {/* Sol İçerik */}
          <div className="space-y-8">
            <div className="animate-fade-in-up">
              <span className="inline-flex items-center gap-2 rounded-full bg-rasyatek-primary-soft px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-rasyatek-primary">
                <Zap size={14} className="text-rasyatek-primary" />
                {isEn
                  ? "Electrical Contracting & Engineering"
                  : "Elektrik Taahhüt & Mühendislik"}
              </span>
            </div>

            <h1 className="animate-fade-in-up delay-100 text-balance text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl xl:text-[3.25rem] xl:leading-[1.15]">
              {isEn ? "From housing to industrial plants " : "Konuttan endüstriyel tesislere "}
              <span className="gradient-text">
                {isEn
                  ? "end-to-end engineering solutions"
                  : "uçtan uca mühendislik çözümleri"}
              </span>
            </h1>

            <p className="animate-fade-in-up delay-200 max-w-xl text-base leading-relaxed text-slate-600 md:text-lg">
              {isEn ? (
                <>
                  Rasyatek Engineering Investment Co. has been actively operating in the
                  electrical, construction and engineering fields since 2016, combining
                  on-site experience with engineering discipline. By prioritising safety,
                  quality and sustainability, we provide end-to-end engineering solutions
                  for residential, commercial and industrial buildings.
                </>
              ) : (
                <>
                  Rasyatek Mühendislik Yatırım Ltd. Şti., 2016 yılından bu yana elektrik,
                  inşaat ve mühendislik alanında sahada aktif olarak faaliyet gösteren,
                  mühendislik disiplinini uygulama tecrübesiyle birleştiren bir firmadır.
                  Projelerimizde güvenlik, kalite ve sürdürülebilirliği esas alarak; konut,
                  ticari ve endüstriyel yapılarda uçtan uca mühendislik çözümleri sunuyoruz.
                </>
              )}
            </p>

            <div className="animate-fade-in-up delay-300 flex flex-wrap gap-4">
              <a
                href="#iletisim"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-rasyatek-primary px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-rasyatek-primary/25 transition-all hover:bg-sky-700 hover:shadow-xl hover:shadow-rasyatek-primary/30"
              >
                {isEn ? "Request a Quote" : "Teklif / Proje Talebi"}
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#hizmetler"
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 px-7 py-3 text-sm font-semibold text-slate-700 transition-all hover:border-rasyatek-primary hover:text-rasyatek-primary"
              >
                {isEn ? "Explore Services" : "Hizmetlerimiz"}
                <ChevronRight size={16} className="transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            {/* İstatistik kartları */}
            <div className="animate-fade-in-up delay-400 grid gap-4 sm:grid-cols-3">
              {[
                {
                  icon: <Zap size={18} />,
                  labelTr: "Tecrübe",
                  labelEn: "Experience",
                  valueTr: "2016'dan bugüne",
                  valueEn: "Since 2016",
                  descTr: "Saha tecrübesi ile mühendislik disiplinini birleştiren ekip.",
                  descEn: "A team that combines field experience with engineering discipline.",
                },
                {
                  icon: <Shield size={18} />,
                  labelTr: "Yaklaşım",
                  labelEn: "Approach",
                  valueTr: "Güvenli ve sürdürülebilir",
                  valueEn: "Safe and sustainable",
                  descTr: "Yönetmeliklere uygun, uzun ömürlü ve güvenli sistemler.",
                  descEn: "Systems designed in compliance with regulations, long-lasting and safe.",
                },
                {
                  icon: <Building2 size={18} />,
                  labelTr: "Kapsam",
                  labelEn: "Scope",
                  valueTr: "Konut, ticari, endüstriyel",
                  valueEn: "Residential, commercial, industrial",
                  descTr: "Farklı ölçek ve tiplerde elektrik taahhüt ve mühendislik projeleri.",
                  descEn: "Electrical contracting and engineering projects at different scales.",
                },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="card-hover rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100"
                >
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-rasyatek-primary-soft text-rasyatek-primary">
                      {stat.icon}
                    </div>
                    <p className="text-[11px] font-semibold uppercase tracking-wide text-rasyatek-primary">
                      {isEn ? stat.labelEn : stat.labelTr}
                    </p>
                  </div>
                  <p className="mt-3 text-sm font-semibold text-slate-900">
                    {isEn ? stat.valueEn : stat.valueTr}
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-slate-500">
                    {isEn ? stat.descEn : stat.descTr}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Sağ Kart */}
          <div className="animate-slide-in-right delay-300 flex justify-center md:justify-end">
            <div className="relative w-full max-w-sm animate-float">
              {/* Glow */}
              <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-rasyatek-primary/10 via-transparent to-rasyatek-accent/10 blur-2xl" />
              <div className="rounded-3xl bg-gradient-to-br from-rasyatek-primary-soft via-white to-slate-50 p-7 shadow-2xl ring-1 ring-slate-100/50">
                <div className="relative h-14 w-40">
                  <Image
                    src="/rasyatek-logo.png"
                    alt="Rasyatek Mühendislik Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="mt-6 text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">
                  {isEn ? "Smart Engineering" : "Akılcı Mühendislik"}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {isEn
                    ? "End-to-end service in electrical contracting, high voltage operation and investment-oriented engineering projects."
                    : "Elektrik taahhüt, yüksek gerilim işletme sorumluluğu ve yatırım odaklı mühendislik projelerinde uçtan uca hizmet."}
                </p>
                <div className="mt-6 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl bg-white/80 p-3 ring-1 ring-slate-100 backdrop-blur">
                    <p className="text-[11px] font-semibold uppercase tracking-wide text-rasyatek-primary">
                      {isEn ? "Contracting" : "Elektrik Taahhüt"}
                    </p>
                    <p className="mt-1 text-xs text-slate-600">
                      {isEn
                        ? "From design to on-site implementation."
                        : "Projelendirmeden saha uygulamasına."}
                    </p>
                  </div>
                  <div className="rounded-2xl bg-white/80 p-3 ring-1 ring-slate-100 backdrop-blur">
                    <p className="text-[11px] font-semibold uppercase tracking-wide text-rasyatek-primary">
                      {isEn ? "High Voltage" : "Yüksek Gerilim"}
                    </p>
                    <p className="mt-1 text-xs text-slate-600">
                      {isEn
                        ? "Operation, measurement and reporting."
                        : "İşletme, ölçüm ve raporlama."}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Alt gradient ayracı */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
    </section>
  );
}
