"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

type Locale = "tr" | "en";

const sections = [
  { id: "anasayfa", labelTr: "Anasayfa", labelEn: "Home" },
  { id: "hakkimizda", labelTr: "Hakkımızda", labelEn: "About" },
  { id: "degerler", labelTr: "Değerlerimiz", labelEn: "Our Values" },
  { id: "vizyon-misyon", labelTr: "Vizyon & Misyon", labelEn: "Vision & Mission" },
  { id: "urunler", labelTr: "Ürünler", labelEn: "Products" },
  { id: "hizmetler", labelTr: "Hizmetler", labelEn: "Services" },
  { id: "iletisim", labelTr: "İletişim", labelEn: "Contact" },
] as const;

export default function Header({ locale }: { locale: Locale }) {
  const isEn = locale === "en";
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Body scroll lock
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-slate-200/80 bg-white/95 shadow-sm backdrop-blur-lg"
          : "border-transparent bg-white/90 backdrop-blur"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6 md:py-4">
        {/* Logo */}
        <a href={`/${locale}`} className="flex items-center gap-3 group">
          <div className="relative h-10 w-32 md:h-12 md:w-40 transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/rasyatek-logo.png"
              alt="Rasyatek Mühendislik Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="hidden flex-col text-xs leading-snug text-slate-600 lg:flex">
            <span className="font-semibold tracking-wide text-rasyatek-primary">
              RASYATEK MÜHENDİSLİK
            </span>
            <span className="text-slate-500">
              {isEn ? "Smart engineering solutions" : "Akılcı mühendislik çözümleri"}
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 text-sm font-medium text-slate-600 lg:flex">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="relative rounded-lg px-3 py-2 transition-colors hover:bg-rasyatek-primary-soft hover:text-rasyatek-primary"
            >
              {isEn ? section.labelEn : section.labelTr}
            </a>
          ))}
          <div className="mx-2 h-5 w-px bg-slate-200" />
          <div className="flex items-center gap-1 rounded-full bg-slate-100 p-1 text-xs font-semibold tracking-wide">
            <a
              href="/tr"
              className={`rounded-full px-3 py-1 transition-all ${
                !isEn
                  ? "bg-rasyatek-primary text-white shadow-sm"
                  : "text-slate-500 hover:text-rasyatek-primary"
              }`}
            >
              TR
            </a>
            <a
              href="/en"
              className={`rounded-full px-3 py-1 transition-all ${
                isEn
                  ? "bg-rasyatek-primary text-white shadow-sm"
                  : "text-slate-500 hover:text-rasyatek-primary"
              }`}
            >
              EN
            </a>
          </div>
        </nav>

        {/* Mobile button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex items-center justify-center rounded-lg p-2 text-slate-700 transition-colors hover:bg-slate-100 lg:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 top-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          mobileOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setMobileOpen(false)}
      />

      {/* Mobile menu */}
      <div
        className={`fixed right-0 top-0 z-50 flex h-full w-[280px] flex-col bg-white shadow-2xl transition-transform duration-300 ease-out lg:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-slate-100 px-4 py-4">
          <span className="text-sm font-semibold text-rasyatek-primary">
            {isEn ? "Menu" : "Menü"}
          </span>
          <button
            onClick={() => setMobileOpen(false)}
            className="rounded-lg p-2 text-slate-500 hover:bg-slate-100"
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>
        <nav className="flex-1 overflow-y-auto px-3 py-4">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              onClick={() => setMobileOpen(false)}
              className="flex items-center rounded-xl px-4 py-3 text-sm font-medium text-slate-700 transition-colors hover:bg-rasyatek-primary-soft hover:text-rasyatek-primary"
            >
              {isEn ? section.labelEn : section.labelTr}
            </a>
          ))}
        </nav>
        <div className="border-t border-slate-100 p-4">
          <div className="flex gap-2 text-sm font-semibold">
            <a
              href="/tr"
              className={`flex-1 rounded-xl py-2.5 text-center transition-all ${
                !isEn
                  ? "bg-rasyatek-primary text-white"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              Türkçe
            </a>
            <a
              href="/en"
              className={`flex-1 rounded-xl py-2.5 text-center transition-all ${
                isEn
                  ? "bg-rasyatek-primary text-white"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              English
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
