import { Eye, Target } from "lucide-react";

type Locale = "tr" | "en";

export default function VisionMissionSection({ locale }: { locale: Locale }) {
  const isEn = locale === "en";

  return (
    <section
      id="vizyon-misyon"
      className="section-divider scroll-mt-24 py-20"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2">
          {/* Vizyon */}
          <div className="animate-fade-in-up card-hover group relative overflow-hidden rounded-3xl bg-gradient-to-br from-rasyatek-primary-soft via-white to-sky-50 p-8 ring-1 ring-sky-100">
            {/* Dekoratif arka plan */}
            <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-rasyatek-primary/5 transition-transform duration-500 group-hover:scale-150" />

            <div className="relative">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-rasyatek-primary text-white shadow-lg shadow-rasyatek-primary/25">
                <Eye size={22} />
              </div>
              <h2 className="mt-5 text-sm font-semibold uppercase tracking-[0.25em] text-rasyatek-primary">
                {isEn ? "Our Vision" : "Vizyonumuz"}
              </h2>
              <p className="mt-3 text-xl font-bold tracking-tight text-slate-900">
                {isEn
                  ? "To be a trusted, preferred and reference engineering company in the sector."
                  : "Sektöründe güvenilir, tercih edilen ve referans gösterilen bir mühendislik firması olmak."}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">
                {isEn
                  ? "By continuously improving our experience in engineering, we aim to be a brand that stands out with engineering quality, signing qualified projects on a national scale with our innovative approach, technical competence and investment-oriented mindset."
                  : "Mühendislik alanında edindiğimiz tecrübeyi sürekli geliştirerek; yenilikçi yaklaşımımız, teknik yeterliliğimiz ve yatırım odaklı bakış açımızla ulusal ölçekte nitelikli projelere imza atan, mühendislik kalitesiyle fark yaratan bir marka olmayı hedefliyoruz."}
              </p>
            </div>
          </div>

          {/* Misyon */}
          <div className="animate-fade-in-up delay-200 card-hover group relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8 text-white ring-1 ring-slate-700/50">
            {/* Dekoratif arka plan */}
            <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-rasyatek-primary/10 transition-transform duration-500 group-hover:scale-150" />

            <div className="relative">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-sky-300 ring-1 ring-white/10 backdrop-blur">
                <Target size={22} />
              </div>
              <h2 className="mt-5 text-sm font-semibold uppercase tracking-[0.25em] text-sky-300">
                {isEn ? "Our Mission" : "Misyonumuz"}
              </h2>
              <p className="mt-3 text-xl font-bold tracking-tight text-white">
                {isEn
                  ? "To produce safe, sustainable and high-quality solutions in electrical and engineering projects."
                  : "Güvenli, sürdürülebilir ve kaliteli elektrik & mühendislik çözümleri üretmek."}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-slate-300">
                {isEn
                  ? "With the field experience and engineering know-how we have gained since 2016, we go beyond mere compliance with technical specifications in electrical and engineering projects by prioritising occupational safety, timing and long-term usability."
                  : "2016 yılından bu yana edindiğimiz saha deneyimi ve mühendislik birikimiyle; elektrik ve mühendislik projelerinde teknik şartnamelere uygunluğun ötesine geçerek iş güvenliği, zamanlama ve uzun ömürlü kullanım prensiplerini esas alıyoruz."}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                {isEn
                  ? "We consider offering solutions that create value for our customers, are applicable on site and comply with engineering discipline as our primary priority."
                  : "Müşterilerimiz için değer üreten, sahada uygulanabilir ve mühendislik disiplinine uygun çözümler sunmayı temel önceliğimiz kabul ediyoruz."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
