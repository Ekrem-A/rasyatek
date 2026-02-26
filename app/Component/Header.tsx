"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { Menu, X } from "lucide-react";

type Locale = "tr" | "en";

const navLinks = [
  { href: "", labelTr: "Anasayfa", labelEn: "Home" },
  { href: "/hakkimizda", labelTr: "Hakkımızda", labelEn: "About" },
  { href: "/degerler", labelTr: "Değerlerimiz", labelEn: "Our Values" },
  { href: "/vizyon-misyon", labelTr: "Vizyon & Misyon", labelEn: "Vision & Mission" },
  { href: "/urunler", labelTr: "Ürünler", labelEn: "Products" },
  { href: "/hizmetler", labelTr: "Hizmetler", labelEn: "Services" },
  { href: "/iletisim", labelTr: "İletişim", labelEn: "Contact" },
] as const;

function MobileMenu({
  locale,
  isEn,
  open,
  onClose,
}: {
  locale: Locale;
  isEn: boolean;
  open: boolean;
  onClose: () => void;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!mounted) return null;

  return createPortal(
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-[9998] bg-black/50 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`fixed right-0 top-0 z-[9999] flex h-dvh w-[300px] max-w-[85vw] flex-col bg-white shadow-2xl transition-transform duration-300 ease-out lg:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-md bg-rasyatek-primary text-white">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
            </div>
            <span className="text-sm font-bold text-slate-900">
              RASYATEK
            </span>
          </div>
          <button
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-600"
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        {/* Links */}
        <nav className="flex-1 overflow-y-auto px-3 py-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={`/${locale}${link.href}`}
              onClick={onClose}
              className="flex items-center rounded-xl px-4 py-3.5 text-[15px] font-medium text-slate-700 transition-colors hover:bg-rasyatek-primary-soft hover:text-rasyatek-primary"
            >
              {isEn ? link.labelEn : link.labelTr}
            </a>
          ))}
        </nav>

        {/* Language Switcher */}
        <div className="border-t border-slate-100 p-4">
          <p className="mb-2 text-[11px] font-semibold uppercase tracking-wide text-slate-400">
            {isEn ? "Language" : "Dil"}
          </p>
          <div className="flex gap-2 text-sm font-semibold">
            <a
              href="/tr"
              className={`flex-1 rounded-xl py-3 text-center transition-all ${
                !isEn
                  ? "bg-rasyatek-primary text-white shadow-sm"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              Türkçe
            </a>
            <a
              href="/en"
              className={`flex-1 rounded-xl py-3 text-center transition-all ${
                isEn
                  ? "bg-rasyatek-primary text-white shadow-sm"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              English
            </a>
          </div>
        </div>
      </div>
    </>,
    document.body
  );
}

export default function Header({ locale }: { locale: Locale }) {
  const isEn = locale === "en";
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
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
            <Image
              src="/rasyatek-logo.png"
              alt="Rasyatek Mühendislik Logo"
              width={160}
              height={48}
              className="h-9 w-auto sm:h-10 md:h-12 object-contain"
              priority
            />
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
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={`/${locale}${link.href}`}
                className="relative rounded-lg px-3 py-2 transition-colors hover:bg-rasyatek-primary-soft hover:text-rasyatek-primary"
              >
                {isEn ? link.labelEn : link.labelTr}
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
            onClick={() => setMobileOpen(true)}
            className="flex items-center justify-center rounded-lg p-2 text-slate-700 transition-colors hover:bg-slate-100 lg:hidden"
            aria-label="Toggle menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      <MobileMenu
        locale={locale}
        isEn={isEn}
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
      />
    </>
  );
}
