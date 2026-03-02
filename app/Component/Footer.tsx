import { Zap } from "lucide-react";

type Locale = "tr" | "en";

const footerLinks = [
  { href: "", labelTr: "Anasayfa", labelEn: "Home" },
  { href: "/hakkimizda", labelTr: "Hakkımızda", labelEn: "About" },
  { href: "/hizmetler", labelTr: "Hizmetler", labelEn: "Services" },
  { href: "/urunler", labelTr: "Ürünler", labelEn: "Products" },
  { href: "/iletisim", labelTr: "İletişim", labelEn: "Contact" },
];

export default function Footer({ locale }: { locale: Locale }) {
  const isEn = locale === "en";

  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        {/* Üst bölüm */}
        <div className="grid gap-6 py-8 sm:gap-8 sm:py-12 md:grid-cols-3">
          {/* Logo / Slogan */}
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-rasyatek-primary text-white">
                <Zap size={16} />
              </div>
              <span className="text-sm font-bold tracking-wide text-slate-900">
                RASYATEK
              </span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-slate-500">
              {isEn
                ? "Safe, high-quality and sustainable electrical and engineering solutions since 2016."
                : "2016'dan bu yana güvenli, kaliteli ve sürdürülebilir elektrik ve mühendislik çözümleri."}
            </p>
          </div>

          {/* Hızlı bağlantılar */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
              {isEn ? "Quick Links" : "Hızlı Bağlantılar"}
            </p>
            <nav className="mt-4 flex flex-col gap-2">
              {footerLinks.map((link) => (
                <a
                  key={link.href}
                  href={`/${locale}${link.href}`}
                  className="text-sm text-slate-600 transition-colors hover:text-rasyatek-primary"
                >
                  {isEn ? link.labelEn : link.labelTr}
                </a>
              ))}
            </nav>
          </div>

          {/* İletişim */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
              {isEn ? "Contact" : "İletişim"}
            </p>
            <div className="mt-4 space-y-2 text-sm text-slate-600">
              <p>info@rasyatek.com</p>
              <p>+90 () ___ __ __</p>
            </div>
          </div>
        </div>

        {/* Alt çizgi */}
        <div className="border-t border-slate-100 py-4 sm:py-5">
          <div className="flex flex-col gap-2 text-[11px] text-slate-400 sm:text-xs md:flex-row md:items-center md:justify-between">
            <p>
              © {new Date().getFullYear()} Rasyatek Mühendislik Yatırım Ltd. Şti.{" "}
              {isEn ? "All rights reserved." : "Tüm hakları saklıdır."}
            </p>
            <p>
              {isEn
                ? "Smart engineering solutions for a sustainable future."
                : "Sürdürülebilir bir gelecek için akılcı mühendislik çözümleri."}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
