"use client";

import { useState, useEffect, useCallback } from "react";
import { ArrowRight, ChevronLeft, ChevronRight, Zap, Shield, Building2 } from "lucide-react";

type Locale = "tr" | "en";

interface Slide {
  id: number;
  /** gradient fallback when no image */
  gradient: string;
  /** Optional image path – add real photos here later */
  image?: string;
  titleTr: string;
  titleEn: string;
  subtitleTr: string;
  subtitleEn: string;
  ctaLabelTr: string;
  ctaLabelEn: string;
  ctaHref: (locale: Locale) => string;
  icon: React.ReactNode;
}

const slides: Slide[] = [
  {
    id: 1,
    gradient: "from-[#0b1724] via-[#0a2a4a] to-[#0060aa]",
    image: "/slides/slide-1.jpg",
    titleTr: "Konuttan Endüstriyel Tesislere\nUçtan Uca Mühendislik Çözümleri",
    titleEn: "End-to-End Engineering Solutions\nFrom Housing to Industrial Plants",
    subtitleTr:
      "Rasyatek Mühendislik, 2016'dan bu yana elektrik taahhüt ve mühendislik alanında güvenli, kaliteli çözümler sunuyor.",
    subtitleEn:
      "Rasyatek Engineering has been providing safe and quality solutions in electrical contracting and engineering since 2016.",
    ctaLabelTr: "Teklif / Proje Talebi",
    ctaLabelEn: "Request a Quote",
    ctaHref: (locale) => `/${locale}/iletisim`,
    icon: <Zap size={20} />,
  },
  {
    id: 2,
    gradient: "from-[#0b1724] via-[#1a3a5c] to-[#00b4d8]",
    image: "/slides/slide-2.jpg",
    titleTr: "Yüksek Gerilim İşletme\nSorumluluğu & Ölçüm",
    titleEn: "High Voltage Operation\nResponsibility & Measurement",
    subtitleTr:
      "Trafo merkezleri ve OG hücreler için mevzuata uygun işletme, periyodik bakım ve ölçüm hizmetleri.",
    subtitleEn:
      "Operation, periodic maintenance and measurement services for transformer substations and MV switchgears.",
    ctaLabelTr: "Hizmetlerimizi Keşfedin",
    ctaLabelEn: "Explore Our Services",
    ctaHref: (locale) => `/${locale}/hizmetler`,
    icon: <Shield size={20} />,
  },
  {
    id: 3,
    gradient: "from-[#0b1724] via-[#1b2d44] to-[#3b8fd4]",
    image: "/slides/slide-3.jpg",
    titleTr: "Güç Kalitesi & Pano Çözümleri\nSVG · AHF · Otomasyon Panoları",
    titleEn: "Power Quality & Panel Solutions\nSVG · AHF · Automation Panels",
    subtitleTr:
      "Endüstriyel tesisler ve ticari yapılara yönelik yüksek performanslı güç kalitesi ürünleri.",
    subtitleEn:
      "High-performance power quality products for industrial facilities and commercial buildings.",
    ctaLabelTr: "Ürünlerimizi İnceleyin",
    ctaLabelEn: "View Our Products",
    ctaHref: (locale) => `/${locale}/urunler`,
    icon: <Building2 size={20} />,
  },
];

export default function HeroSlider({ locale }: { locale: Locale }) {
  const isEn = locale === "en";
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goTo = useCallback(
    (index: number, dir: "left" | "right") => {
      if (isTransitioning) return;
      setDirection(dir);
      setIsTransitioning(true);
      setCurrent(index);
      setTimeout(() => setIsTransitioning(false), 700);
    },
    [isTransitioning]
  );

  const next = useCallback(() => {
    goTo((current + 1) % slides.length, "right");
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + slides.length) % slides.length, "left");
  }, [current, goTo]);

  // Auto-play
  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = slides[current];

  return (
    <section className="relative h-[60vh] min-h-[420px] overflow-hidden sm:h-[65vh] md:h-[75vh] lg:h-[85vh]">
      {/* Slides */}
      {slides.map((s, i) => (
        <div
          key={s.id}
          className={`absolute inset-0 transition-all duration-700 ease-in-out ${
            i === current
              ? "z-10 scale-100 opacity-100"
              : i ===
                (direction === "right"
                  ? (current - 1 + slides.length) % slides.length
                  : (current + 1) % slides.length)
              ? "z-0 scale-105 opacity-0"
              : "z-0 scale-100 opacity-0"
          }`}
        >
          {/* Gradient background (always shown as fallback or overlay) */}
          <div
            className={`absolute inset-0 bg-gradient-to-br ${s.gradient}`}
          />

          {/* Image layer */}
          {s.image && (
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-[8000ms] ease-out"
              style={{
                backgroundImage: `url(${s.image})`,
                transform: i === current ? "scale(1.08)" : "scale(1)",
              }}
            />
          )}

          {/* Dark overlay on image for text readability */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Decorative elements */}
          <div className="pointer-events-none absolute inset-0">
            {/* Grid pattern */}
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.3) 1px, transparent 1px)",
                backgroundSize: "80px 80px",
              }}
            />
            {/* Gradient orbs */}
            <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-white/[0.03] blur-3xl" />
            <div className="absolute -left-20 bottom-0 h-60 w-60 rounded-full bg-rasyatek-accent/[0.05] blur-3xl" />
            {/* Diagonal lines */}
            <div className="absolute right-[10%] top-[15%] h-40 w-px rotate-[25deg] bg-gradient-to-b from-transparent via-white/10 to-transparent" />
            <div className="absolute right-[20%] top-[5%] h-56 w-px rotate-[25deg] bg-gradient-to-b from-transparent via-rasyatek-accent/10 to-transparent" />
          </div>
        </div>
      ))}

      {/* Content overlay */}
      <div className="relative z-20 flex h-full items-center">
        <div className="mx-auto w-full max-w-7xl px-4 md:px-6">
          <div className="max-w-3xl">
            {/* Badge */}
            <div
              key={`badge-${current}`}
              className="animate-fade-in-up mb-5 sm:mb-6"
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white/90 ring-1 ring-white/20 backdrop-blur-sm">
                {slide.icon}
                Rasyatek Mühendislik
              </span>
            </div>

            {/* Title */}
            <h1
              key={`title-${current}`}
              className="animate-fade-in-up delay-100 whitespace-pre-line text-2xl font-bold leading-tight tracking-tight text-white drop-shadow-lg sm:text-3xl md:text-4xl lg:text-5xl xl:text-[3.5rem] xl:leading-[1.12]"
            >
              {isEn ? slide.titleEn : slide.titleTr}
            </h1>

            {/* Subtitle */}
            <p
              key={`sub-${current}`}
              className="animate-fade-in-up delay-200 mt-4 max-w-2xl text-sm leading-relaxed text-white/70 sm:mt-6 sm:text-base md:text-lg"
            >
              {isEn ? slide.subtitleEn : slide.subtitleTr}
            </p>

            {/* CTA */}
            <div
              key={`cta-${current}`}
              className="animate-fade-in-up delay-300 mt-6 sm:mt-8"
            >
              <a
                href={slide.ctaHref(locale)}
                className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-rasyatek-dark shadow-xl transition-all hover:bg-rasyatek-primary hover:text-white hover:shadow-rasyatek-primary/30"
              >
                {isEn ? slide.ctaLabelEn : slide.ctaLabelTr}
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation arrows */}
      <div className="absolute left-4 right-4 top-1/2 z-30 flex -translate-y-1/2 items-center justify-between md:left-6 md:right-6">
        <button
          onClick={prev}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/20 backdrop-blur-sm transition-all hover:bg-white/20 hover:ring-white/40 sm:h-12 sm:w-12"
          aria-label="Previous slide"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={next}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/20 backdrop-blur-sm transition-all hover:bg-white/20 hover:ring-white/40 sm:h-12 sm:w-12"
          aria-label="Next slide"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Dots / indicator */}
      <div className="absolute bottom-6 left-0 right-0 z-30 flex items-center justify-center gap-2 sm:bottom-8">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i, i > current ? "right" : "left")}
            className={`h-2 rounded-full transition-all duration-500 ${
              i === current
                ? "w-8 bg-white"
                : "w-2 bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Bottom fade to white */}
      <div className="absolute bottom-0 left-0 right-0 z-20 h-16 bg-gradient-to-t from-white to-transparent" />

      {/* Top gradient for header blend */}
      <div className="absolute left-0 right-0 top-0 z-20 h-24 bg-gradient-to-b from-black/20 to-transparent" />
    </section>
  );
}
