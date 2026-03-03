import {
  Zap,
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  ChevronRight,
  Linkedin,
  Instagram,
} from "lucide-react";
import Image from "next/image";

type Locale = "tr" | "en";

const quickLinks = [
  { href: "", labelTr: "Anasayfa", labelEn: "Home" },
  { href: "/hakkimizda", labelTr: "Hakkımızda", labelEn: "About" },
  { href: "/vizyon-misyon", labelTr: "Vizyon & Misyon", labelEn: "Vision & Mission" },
  { href: "/degerler", labelTr: "Değerlerimiz", labelEn: "Our Values" },
];

const solutionLinks = [
  { href: "/hizmetler", labelTr: "Hizmetler", labelEn: "Services" },
  { href: "/urunler", labelTr: "Ürünler", labelEn: "Products" },
  { href: "/iletisim", labelTr: "İletişim", labelEn: "Contact" },
];

export default function Footer({ locale }: { locale: Locale }) {
  const isEn = locale === "en";

  return (
    <footer className="relative overflow-hidden bg-linear-to-b from-rasyatek-dark via-[#0a1e35] to-[#060f1a]">
      {/* Üst accent çizgi */}
      <div className="h-1 w-full bg-linear-to-r from-rasyatek-primary via-rasyatek-accent to-rasyatek-primary" />

      {/* Dekoratif arka plan elemanları */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-rasyatek-primary/5 blur-3xl" />
        <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-rasyatek-accent/5 blur-3xl" />
        <div className="absolute left-1/2 top-1/3 h-64 w-64 -translate-x-1/2 rounded-full bg-rasyatek-primary/3 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 md:px-6">
        {/* ──── Ana İçerik ──── */}
        <div className="grid gap-10 py-12 sm:py-16 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Logo & Açıklama — 4 kolon */}
          <div className="lg:col-span-4">
            <a
              href={`/${locale}`}
              className="group relative inline-flex items-center gap-3"
            >
              <div className="pointer-events-none absolute -inset-3 rounded-2xl bg-linear-to-r from-rasyatek-primary/0 via-rasyatek-primary/10 to-rasyatek-accent/0 opacity-0 blur-xl transition-all duration-700 group-hover:opacity-100" />
              <Image
                src="/rasyatek-logo.png"
                alt="Rasyatek Mühendislik Logo"
                width={320}
                height={120}
                className="relative h-14 w-auto object-contain brightness-0 invert transition-all duration-500 group-hover:scale-[1.03]"
                style={{
                  filter:
                    "brightness(0) invert(1) drop-shadow(0 2px 12px rgba(0,180,216,0.2))",
                }}
              />
            </a>

            <p className="mt-5 max-w-xs text-sm leading-relaxed text-slate-400">
              {isEn
                ? "Safe, high-quality and sustainable electrical & engineering solutions since 2016."
                : "2016'dan bu yana güvenli, kaliteli ve sürdürülebilir elektrik ve mühendislik çözümleri."}
            </p>

            {/* Sosyal Medya */}
            <div className="mt-6 flex items-center gap-3">
              {[
                {
                  icon: <Linkedin size={18} />,
                  href: "https://www.linkedin.com/company/rasyatek",
                  label: "LinkedIn",
                },
                {
                  icon: <Instagram size={18} />,
                  href: "https://www.instagram.com/rasyatek",
                  label: "Instagram",
                },
                {
                  icon: <Mail size={18} />,
                  href: "mailto:resul.ankara@rasyatek.com",
                  label: "Email",
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="group/icon flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-400 backdrop-blur-sm transition-all duration-300 hover:border-rasyatek-accent/40 hover:bg-rasyatek-accent/10 hover:text-rasyatek-accent hover:shadow-[0_0_20px_rgba(0,180,216,0.15)]"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Hızlı Bağlantılar — 2 kolon */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-bold uppercase tracking-widest text-rasyatek-accent">
              {isEn ? "Company" : "Kurumsal"}
            </h3>
            <nav className="mt-5 flex flex-col gap-3">
              {quickLinks.map((link) => (
                <a
                  key={link.href}
                  href={`/${locale}${link.href}`}
                  className="group/link flex items-center gap-1.5 text-sm text-slate-400 transition-all duration-300 hover:translate-x-1 hover:text-white"
                >
                  <ChevronRight
                    size={14}
                    className="text-rasyatek-primary/60 transition-colors group-hover/link:text-rasyatek-accent"
                  />
                  {isEn ? link.labelEn : link.labelTr}
                </a>
              ))}
            </nav>
          </div>

          {/* Çözümler — 2 kolon */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-bold uppercase tracking-widest text-rasyatek-accent">
              {isEn ? "Solutions" : "Çözümler"}
            </h3>
            <nav className="mt-5 flex flex-col gap-3">
              {solutionLinks.map((link) => (
                <a
                  key={link.href}
                  href={`/${locale}${link.href}`}
                  className="group/link flex items-center gap-1.5 text-sm text-slate-400 transition-all duration-300 hover:translate-x-1 hover:text-white"
                >
                  <ChevronRight
                    size={14}
                    className="text-rasyatek-primary/60 transition-colors group-hover/link:text-rasyatek-accent"
                  />
                  {isEn ? link.labelEn : link.labelTr}
                </a>
              ))}
            </nav>
          </div>

          {/* İletişim — 4 kolon */}
          <div className="lg:col-span-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-rasyatek-accent">
              {isEn ? "Contact" : "İletişim"}
            </h3>

            <div className="mt-5 space-y-4">
              {/* E-posta */}
              <a
                href="mailto:resul.ankara@rasyatek.com"
                className="group/contact flex items-start gap-3 rounded-xl border border-white/5 bg-white/3 px-4 py-3 transition-all duration-300 hover:border-rasyatek-primary/30 hover:bg-white/6"
              >
                <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-rasyatek-primary/15 text-rasyatek-primary transition-colors group-hover/contact:bg-rasyatek-primary/25">
                  <Mail size={15} />
                </div>
                <div>
                  <p className="text-xs font-medium text-slate-500">
                    {isEn ? "Email" : "E-posta"}
                  </p>
                  <p className="text-sm text-slate-300 transition-colors group-hover/contact:text-white">
                    resul.ankara@rasyatek.com
                  </p>
                </div>
              </a>

              {/* Telefon */}
              <a
                href="tel:+905537709120"
                className="group/contact flex items-start gap-3 rounded-xl border border-white/5 bg-white/3 px-4 py-3 transition-all duration-300 hover:border-rasyatek-primary/30 hover:bg-white/6"
              >
                <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-rasyatek-primary/15 text-rasyatek-primary transition-colors group-hover/contact:bg-rasyatek-primary/25">
                  <Phone size={15} />
                </div>
                <div>
                  <p className="text-xs font-medium text-slate-500">
                    {isEn ? "Phone" : "Telefon"}
                  </p>
                  <p className="text-sm text-slate-300 transition-colors group-hover/contact:text-white">
                    +90 (553) 770 91 20
                  </p>
                </div>
              </a>

              {/* Adres */}
              <div className="flex items-start gap-3 rounded-xl border border-white/5 bg-white/3 px-4 py-3">
                <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-rasyatek-primary/15 text-rasyatek-primary">
                  <MapPin size={15} />
                </div>
                <div>
                  <p className="text-xs font-medium text-slate-500">
                    {isEn ? "Address" : "Adres"}
                  </p>
                  <p className="text-sm leading-relaxed text-slate-300">
                    İdealtepe Mahallesi Dik Sokak No:13 İç Kapı No:2 Maltepe/İstanbul
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ──── Alt Bölüm ──── */}
        <div className="relative border-t border-white/10 py-6">
          <div className="flex flex-col items-center gap-3 text-xs text-slate-500 sm:flex-row sm:justify-between">
            <p>
              © {new Date().getFullYear()} Rasyatek Mühendislik Yatırım Ltd. Şti.{" "}
              {isEn ? "All rights reserved." : "Tüm hakları saklıdır."}
            </p>
            <p className="flex items-center gap-1.5">
              <Zap size={12} className="text-rasyatek-accent" />
              <span>
                {isEn
                  ? "Smart engineering solutions for a sustainable future."
                  : "Sürdürülebilir bir gelecek için akılcı mühendislik çözümleri."}
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
