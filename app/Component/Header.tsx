"use client";

import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { Menu, X, ChevronDown, Users, Heart, Eye, Package, Cog } from "lucide-react";

type Locale = "tr" | "en";

/* ─── Düz linkler ─── */
const simpleLinks = [
  { href: "", labelTr: "Anasayfa", labelEn: "Home" },
  { href: "/iletisim", labelTr: "İletişim", labelEn: "Contact" },
] as const;

/* ─── Dropdown grupları ─── */
const dropdownGroups = [
  {
    labelTr: "Kurumsal",
    labelEn: "Corporate",
    children: [
      { href: "/hakkimizda", labelTr: "Hakkımızda", labelEn: "About", icon: <Users size={16} /> },
      { href: "/degerler", labelTr: "Değerlerimiz", labelEn: "Our Values", icon: <Heart size={16} /> },
      { href: "/vizyon-misyon", labelTr: "Vizyon & Misyon", labelEn: "Vision & Mission", icon: <Eye size={16} /> },
    ],
  },
  {
    labelTr: "Çözümler",
    labelEn: "Solutions",
    children: [
      { href: "/urunler", labelTr: "Ürünler", labelEn: "Products", icon: <Package size={16} /> },
      { href: "/hizmetler", labelTr: "Hizmetler", labelEn: "Services", icon: <Cog size={16} /> },
    ],
  },
] as const;

/* ─── All nav links for mobile ─── */
const allNavLinks = [
  { href: "", labelTr: "Anasayfa", labelEn: "Home" },
  { href: "/hakkimizda", labelTr: "Hakkımızda", labelEn: "About" },
  { href: "/degerler", labelTr: "Değerlerimiz", labelEn: "Our Values" },
  { href: "/vizyon-misyon", labelTr: "Vizyon & Misyon", labelEn: "Vision & Mission" },
  { href: "/urunler", labelTr: "Ürünler", labelEn: "Products" },
  { href: "/hizmetler", labelTr: "Hizmetler", labelEn: "Services" },
  { href: "/iletisim", labelTr: "İletişim", labelEn: "Contact" },
];

/* ─── Desktop Dropdown Bileşeni ─── */
function NavDropdown({
  locale,
  isEn,
  labelTr,
  labelEn,
  children,
}: {
  locale: Locale;
  isEn: boolean;
  labelTr: string;
  labelEn: string;
  children: readonly { href: string; labelTr: string; labelEn: string; icon: React.ReactNode }[];
}) {
  const [open, setOpen] = useState(false);
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  const enter = () => {
    if (timeout.current) clearTimeout(timeout.current);
    setOpen(true);
  };
  const leave = () => {
    timeout.current = setTimeout(() => setOpen(false), 150);
  };

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={enter}
      onMouseLeave={leave}
    >
      {/* Trigger */}
      <button
        className="nav-link-animated relative inline-flex items-center gap-1 rounded-lg px-3 py-2 transition-all duration-300 hover:text-rasyatek-primary"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        {isEn ? labelEn : labelTr}
        <ChevronDown
          size={14}
          className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
        <span className="nav-underline" />
      </button>

      {/* Dropdown panel */}
      <div
        className={`absolute left-1/2 top-full z-50 pt-2 -translate-x-1/2 transition-all duration-300 ${
          open
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0"
        }`}
      >
        <div className="min-w-[230px] overflow-hidden rounded-2xl bg-white/95 p-2 shadow-2xl shadow-rasyatek-primary/8 ring-1 ring-slate-100/80 backdrop-blur-lg">
          {children.map((child, idx) => (
            <a
              key={child.href}
              href={`/${locale}${child.href}`}
              className="group/item flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-slate-600 transition-all duration-200 hover:bg-gradient-to-r hover:from-rasyatek-primary/5 hover:to-rasyatek-accent/5 hover:text-rasyatek-primary hover:translate-x-1"
              style={{ animationDelay: `${idx * 50}ms` }}
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-50 text-slate-400 transition-all duration-300 group-hover/item:bg-rasyatek-primary group-hover/item:text-white group-hover/item:shadow-md group-hover/item:shadow-rasyatek-primary/25 group-hover/item:scale-110">
                {child.icon}
              </span>
              {isEn ? child.labelEn : child.labelTr}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

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
          {allNavLinks.map((link) => (
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
        className={`sticky top-0 z-50 border-b transition-all duration-500 ${
          scrolled
            ? "border-slate-200/60 bg-white/90 shadow-lg shadow-slate-900/5 backdrop-blur-xl"
            : "border-transparent bg-white/80 backdrop-blur-md"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6 md:py-4">
          {/* Logo */}
          <a href={`/${locale}`} className="relative flex items-center gap-3 group">
            {/* Glow aura */}
            <div className="pointer-events-none absolute -inset-3 rounded-2xl bg-gradient-to-r from-rasyatek-primary/0 via-rasyatek-primary/8 to-rasyatek-accent/0 opacity-0 blur-xl transition-all duration-700 group-hover:opacity-100 group-hover:blur-2xl" />
            <div className="pointer-events-none absolute -inset-1 rounded-xl bg-gradient-to-br from-rasyatek-primary/5 to-rasyatek-accent/5 opacity-0 transition-all duration-500 group-hover:opacity-100" />
            <Image
              src="/rasyatek-logo.png"
              alt="Rasyatek Mühendislik Logo"
              width={320}
              height={120}
              className="relative h-16 w-auto sm:h-[4.5rem] md:h-[5.5rem] object-contain transition-all duration-500 group-hover:scale-[1.03] group-hover:brightness-110"
              style={{
                filter: "drop-shadow(0 2px 8px rgba(0,96,170,0.18)) drop-shadow(0 6px 20px rgba(0,96,170,0.08))",
              }}
              priority
            />
          </a>        

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-1 text-[15px] font-medium text-slate-600 lg:flex">
            {/* Anasayfa */}
            <a
              href={`/${locale}`}
              className="nav-link-animated relative rounded-lg px-3 py-2 transition-all duration-300 hover:text-rasyatek-primary"
              style={{ animationDelay: "0.1s" }}
            >
              {isEn ? "Home" : "Anasayfa"}
              <span className="nav-underline" />
            </a>

            {/* Dropdown grupları */}
            {dropdownGroups.map((group, i) => (
              <NavDropdown
                key={group.labelTr}
                locale={locale}
                isEn={isEn}
                labelTr={group.labelTr}
                labelEn={group.labelEn}
                children={group.children}
              />
            ))}

            {/* İletişim */}
            <a
              href={`/${locale}/iletisim`}
              className="nav-link-animated relative rounded-lg px-3 py-2 transition-all duration-300 hover:text-rasyatek-primary"
              style={{ animationDelay: "0.4s" }}
            >
              {isEn ? "Contact" : "İletişim"}
              <span className="nav-underline" />
            </a>

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
