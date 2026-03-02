"use client";

import { useEffect, useState } from "react";
import { ChevronRight, Home } from "lucide-react";

type Locale = "tr" | "en";

interface PageBannerProps {
  locale: Locale;
  titleTr: string;
  titleEn: string;
  subtitleTr?: string;
  subtitleEn?: string;
  breadcrumbs: { labelTr: string; labelEn: string; href?: string }[];
  icon?: React.ReactNode;
}

/* Floating geometric particles */
function Particles() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Large circle */}
      <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/[0.04] animate-float" />
      <div className="absolute -left-10 bottom-0 h-48 w-48 rounded-full bg-rasyatek-accent/[0.06] animate-float delay-300" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,.5) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      {/* Diagonal line accent */}
      <div className="absolute right-[15%] top-[20%] h-32 w-px rotate-[30deg] bg-gradient-to-b from-transparent via-white/10 to-transparent" />
      <div className="absolute right-[25%] top-[10%] h-48 w-px rotate-[30deg] bg-gradient-to-b from-transparent via-rasyatek-accent/10 to-transparent" />

      {/* Glowing orbs */}
      <div className="absolute left-[60%] top-[30%] h-2 w-2 rounded-full bg-rasyatek-accent/40 blur-sm animate-pulse-banner" />
      <div className="absolute left-[30%] top-[60%] h-1.5 w-1.5 rounded-full bg-white/30 blur-sm animate-pulse-banner delay-500" />
      <div className="absolute left-[80%] top-[50%] h-1 w-1 rounded-full bg-sky-300/50 blur-sm animate-pulse-banner delay-200" />
    </div>
  );
}

export default function PageBanner({
  locale,
  titleTr,
  titleEn,
  subtitleTr,
  subtitleEn,
  breadcrumbs,
  icon,
}: PageBannerProps) {
  const isEn = locale === "en";

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-rasyatek-dark via-[#0a2a4a] to-[#0b1f3a]">
      {/* Particles overlay */}
      <Particles />

      {/* Top gradient line */}
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-rasyatek-accent/30 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 pb-10 pt-10 sm:pb-14 sm:pt-12 md:px-6 md:pb-16 md:pt-14">
        {/* Breadcrumb */}
        <nav className="animate-fade-in mb-6 flex items-center gap-1.5 text-xs sm:text-sm">
          <a
            href={`/${locale}`}
            className="flex items-center gap-1 text-slate-400 transition-colors hover:text-white"
          >
            <Home size={14} />
            <span>{isEn ? "Home" : "Anasayfa"}</span>
          </a>
          {breadcrumbs.map((crumb, i) => (
            <span key={i} className="flex items-center gap-1.5">
              <ChevronRight size={12} className="text-slate-600" />
              {crumb.href ? (
                <a
                  href={crumb.href}
                  className="text-slate-400 transition-colors hover:text-white"
                >
                  {isEn ? crumb.labelEn : crumb.labelTr}
                </a>
              ) : (
                <span className="font-medium text-rasyatek-accent">
                  {isEn ? crumb.labelEn : crumb.labelTr}
                </span>
              )}
            </span>
          ))}
        </nav>

        {/* Title area */}
        <div className="flex items-start gap-4 sm:items-center sm:gap-5">
          {icon && (
            <div className="animate-fade-in-up flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/[0.08] text-rasyatek-accent ring-1 ring-white/[0.08] backdrop-blur-sm sm:h-14 sm:w-14">
              {icon}
            </div>
          )}
          <div>
            <h1 className="animate-fade-in-up text-xl font-bold tracking-tight text-white sm:text-2xl md:text-3xl lg:text-4xl">
              {isEn ? titleEn : titleTr}
            </h1>
            {(subtitleTr || subtitleEn) && (
              <p className="animate-fade-in-up delay-100 mt-2 max-w-2xl text-sm leading-relaxed text-slate-400 sm:text-base">
                {isEn ? subtitleEn : subtitleTr}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Bottom gradient edge */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-700/50 to-transparent" />

      {/* Smooth transition to white */}
      <div className="absolute -bottom-px left-0 right-0 h-8 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
