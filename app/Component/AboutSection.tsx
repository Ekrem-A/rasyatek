import { Users, Wrench, Lightbulb } from "lucide-react";

type Locale = "tr" | "en";

export default function AboutSection({ locale }: { locale: Locale }) {
  const isEn = locale === "en";

  return (
    <section
      className="py-20"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid gap-12 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
          {/* Sol Başlık */}
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 rounded-full bg-rasyatek-primary-soft px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-rasyatek-primary">
              <Users size={14} />
              {isEn ? "About" : "Hakkımızda"}
            </div>
            <h2 className="mt-5 text-2xl font-bold tracking-tight text-slate-900 md:text-3xl lg:text-4xl">
              {isEn ? "We bring together field " : "Sahadan gelen tecrübe ile "}
              <span className="gradient-text">
                {isEn
                  ? "experience and engineering discipline."
                  : "mühendislik disiplinini buluşturuyoruz."}
              </span>
            </h2>

            {/* Hızlı bilgi kartları */}
            <div className="mt-8 space-y-3">
              {[
                {
                  icon: <Wrench size={16} />,
                  titleTr: "2016'dan bu yana",
                  titleEn: "Since 2016",
                  descTr: "Sahada aktif mühendislik deneyimi",
                  descEn: "Active on-site engineering experience",
                },
                {
                  icon: <Lightbulb size={16} />,
                  titleTr: "Uçtan uca çözüm",
                  titleEn: "End-to-end solutions",
                  descTr: "Projelendirmeden uygulamaya kadar",
                  descEn: "From design to implementation",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 rounded-xl bg-slate-50 p-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-rasyatek-primary-soft text-rasyatek-primary">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      {isEn ? item.titleEn : item.titleTr}
                    </p>
                    <p className="text-xs text-slate-500">
                      {isEn ? item.descEn : item.descTr}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sağ İçerik */}
          <div className="animate-fade-in-up delay-200 space-y-5 text-sm leading-relaxed text-slate-600 md:text-base">
            <p className="text-lg leading-relaxed">
              {isEn
                ? "Rasyatek Engineering Investment Co. is an engineering company that has been actively operating in the electrical and engineering sector since 2016 and combines its field experience with engineering discipline."
                : "Rasyatek Mühendislik Yatırım Ltd. Şti., 2016 yılından bu yana elektrik ve mühendislik sektöründe aktif olarak faaliyet gösteren, sahadan gelen tecrübesini mühendislik disipliniyle birleştiren bir mühendislik firmasıdır."}
            </p>
            <p>
              {isEn
                ? "Since our establishment, we have provided services in electrical contracting, engineering and on-site implementation in many projects of different scales, primarily residential buildings, commercial structures and industrial plants."
                : "Kurulduğumuz günden bu yana; konut, ticari yapılar ve endüstriyel tesisler başta olmak üzere farklı ölçeklerde birçok projede elektrik taahhüt, mühendislik ve uygulama alanlarında hizmet verdik."}
            </p>
            <p>
              {isEn
                ? "In every project, we prioritise not only compliance with technical specifications but also occupational safety, quality and sustainability principles. Our goal is not just to complete the job, but to build long-lasting and reliable systems."
                : "Her projede, teknik şartnamelere uygunluk kadar iş güvenliği, kalite ve sürdürülebilirlik ilkelerini de ön planda tutuyoruz. Amacımız yalnızca işi tamamlamak değil; uzun ömürlü ve güvenilir sistemler kurmak."}
            </p>

            {/* İmza vurgusu */}
            <div className="mt-6 rounded-2xl border-l-4 border-rasyatek-primary bg-rasyatek-primary-soft/50 px-5 py-4">
              <p className="text-sm font-medium italic text-slate-700">
                {isEn
                  ? '"We don\'t just complete the job; we build long-lasting and reliable systems."'
                  : '"Amacımız yalnızca işi tamamlamak değil; uzun ömürlü ve güvenilir sistemler kurmak."'}
              </p>
              <p className="mt-2 text-xs font-semibold text-rasyatek-primary">
                — Rasyatek Mühendislik
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
