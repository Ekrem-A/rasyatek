import Image from "next/image";
import { Zap, Shield, Building2, ArrowRight, ChevronRight } from "lucide-react";

type Locale = "tr" | "en";

export default function HeroSection({ locale }: { locale: Locale }) {
  const isEn = locale === "en";

  return (
    <section className="relative overflow-hidden py-12 sm:py-16 md:py-20">
      {/* Dekoratif arka plan */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-rasyatek-primary/5 blur-3xl" />
        <div className="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-rasyatek-accent/5 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,96,170,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0,96,170,.5) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 md:px-6">
        {/* Başlık alanı */}
        <div className="animate-fade-in-up mx-auto mb-10 max-w-3xl text-center sm:mb-14">
          <span className="inline-flex items-center gap-2 rounded-full bg-rasyatek-primary-soft px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-rasyatek-primary">
            <Zap size={14} />
            {isEn ? "Why Rasyatek?" : "Neden Rasyatek?"}
          </span>
          <h2 className="mt-5 text-xl font-bold tracking-tight text-slate-900 sm:text-2xl md:text-3xl lg:text-4xl">
            {isEn ? "Engineering expertise with " : "Sahadan gelen tecrübe ile "}
            <span className="gradient-text">
              {isEn ? "field experience" : "mühendislik disiplini"}
            </span>
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-600 md:text-base">
            {isEn
              ? "By prioritising safety, quality and sustainability, we provide end-to-end engineering solutions for residential, commercial and industrial buildings."
              : "Projelerimizde güvenlik, kalite ve sürdürülebilirliği esas alarak; konut, ticari ve endüstriyel yapılarda uçtan uca mühendislik çözümleri sunuyoruz."}
          </p>
        </div>

        {/* 3 İstatistik kartı + Sağ bilgi kartı */}
        <div className="grid gap-8 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] md:items-start">
          {/* Sol: İstatistik kartları */}
          <div className="grid gap-4 sm:grid-cols-3 sm:gap-5">
            {[
              {
                icon: <Zap size={20} />,
                labelTr: "Tecrübe",
                labelEn: "Experience",
                valueTr: "2016'dan bugüne",
                valueEn: "Since 2016",
                descTr: "Saha tecrübesi ile mühendislik disiplinini birleştiren ekip.",
                descEn: "A team that combines field experience with engineering discipline.",
              },
              {
                icon: <Shield size={20} />,
                labelTr: "Yaklaşım",
                labelEn: "Approach",
                valueTr: "Güvenli ve sürdürülebilir",
                valueEn: "Safe and sustainable",
                descTr: "Yönetmeliklere uygun, uzun ömürlü ve güvenli sistemler.",
                descEn: "Systems designed in compliance with regulations, long-lasting and safe.",
              },
              {
                icon: <Building2 size={20} />,
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
                className={`card-hover animate-fade-in-up delay-${(i + 1) * 100} rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100`}
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-rasyatek-primary-soft text-rasyatek-primary">
                  {stat.icon}
                </div>
                <p className="mt-4 text-[11px] font-semibold uppercase tracking-wide text-rasyatek-primary">
                  {isEn ? stat.labelEn : stat.labelTr}
                </p>
                <p className="mt-2 text-base font-bold text-slate-900">
                  {isEn ? stat.valueEn : stat.valueTr}
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-500">
                  {isEn ? stat.descEn : stat.descTr}
                </p>
              </div>
            ))}
          </div>

          {/* Sağ: Bilgi kartı */}
          <div className="hidden animate-fade-in-up delay-400 md:block">
            <div className="relative">
              <div className="absolute -inset-3 -z-10 rounded-[2rem] bg-gradient-to-br from-rasyatek-primary/10 via-transparent to-rasyatek-accent/10 blur-2xl" />
              <div className="rounded-3xl bg-gradient-to-br from-rasyatek-primary-soft via-white to-slate-50 p-7 shadow-xl ring-1 ring-slate-100/50 glow-primary">
                <div className="relative h-14 w-40">
                  <Image
                    src="/rasyatek-logo.png"
                    alt="Rasyatek Mühendislik Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="mt-5 text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">
                  {isEn ? "Smart Engineering" : "Akılcı Mühendislik"}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {isEn
                    ? "End-to-end service in electrical contracting, high voltage operation and investment-oriented engineering projects."
                    : "Elektrik taahhüt, yüksek gerilim işletme sorumluluğu ve yatırım odaklı mühendislik projelerinde uçtan uca hizmet."}
                </p>
                <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:gap-3">
                  <a
                    href={`/${locale}/iletisim`}
                    className="group inline-flex items-center justify-center gap-2 rounded-full bg-rasyatek-primary px-5 py-2.5 text-xs font-semibold text-white shadow-lg shadow-rasyatek-primary/25 transition-all hover:bg-sky-700"
                  >
                    {isEn ? "Request a Quote" : "Proje Talebi"}
                    <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
                  </a>
                  <a
                    href={`/${locale}/hizmetler`}
                    className="group inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 px-5 py-2.5 text-xs font-semibold text-slate-600 transition-all hover:border-rasyatek-primary hover:text-rasyatek-primary"
                  >
                    {isEn ? "Our Services" : "Hizmetlerimiz"}
                    <ChevronRight size={14} className="transition-transform group-hover:translate-x-0.5" />
                  </a>
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
