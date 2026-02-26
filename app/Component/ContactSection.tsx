import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react";

type Locale = "tr" | "en";

export default function ContactSection({ locale }: { locale: Locale }) {
  const isEn = locale === "en";

  return (
    <section
      className="py-20"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        {/* Başlık */}
        <div className="animate-fade-in-up mx-auto mb-14 max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-rasyatek-primary-soft px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-rasyatek-primary">
            <MessageSquare size={14} />
            {isEn ? "Contact" : "İletişim"}
          </div>
          <h2 className="mt-5 text-2xl font-bold tracking-tight text-slate-900 md:text-3xl lg:text-4xl">
            {isEn ? "Let's plan the " : "Projeniz için birlikte en "}
            <span className="gradient-text">
              {isEn ? "right solution " : "doğru çözümü "}
            </span>
            {isEn ? "for your project." : "planlayalım."}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-600 md:text-base">
            {isEn
              ? "Use the form below to request a quotation, survey or project consultancy. Our team will contact you shortly."
              : "Aşağıdaki formu kullanarak teklif, keşif veya proje danışmanlığı talebinde bulunabilirsiniz. Ekibimiz kısa süre içinde sizinle iletişime geçecektir."}
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
          {/* Form */}
          <div className="animate-fade-in-up">
            <form className="rounded-3xl bg-white p-6 shadow-lg ring-1 ring-slate-100 md:p-8">
              <div className="grid gap-5">
                <div className="grid gap-2">
                  <label
                    htmlFor="name"
                    className="text-xs font-semibold uppercase tracking-wide text-slate-600"
                  >
                    {isEn ? "Name / Company" : "Ad Soyad / Firma"}
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder={
                      isEn
                        ? "Enter your name or company name"
                        : "Adınızı veya firma adınızı yazın"
                    }
                    className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition-all focus:border-rasyatek-primary focus:bg-white focus:ring-2 focus:ring-rasyatek-primary/20"
                  />
                </div>
                <div className="grid gap-5 md:grid-cols-2">
                  <div className="grid gap-2">
                    <label
                      htmlFor="email"
                      className="text-xs font-semibold uppercase tracking-wide text-slate-600"
                    >
                      E-mail
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="ornek@firma.com"
                      className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition-all focus:border-rasyatek-primary focus:bg-white focus:ring-2 focus:ring-rasyatek-primary/20"
                    />
                  </div>
                  <div className="grid gap-2">
                    <label
                      htmlFor="phone"
                      className="text-xs font-semibold uppercase tracking-wide text-slate-600"
                    >
                      {isEn ? "Phone" : "Telefon"}
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      placeholder="+90 ..."
                      className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition-all focus:border-rasyatek-primary focus:bg-white focus:ring-2 focus:ring-rasyatek-primary/20"
                    />
                  </div>
                </div>
                <div className="grid gap-2">
                  <label
                    htmlFor="subject"
                    className="text-xs font-semibold uppercase tracking-wide text-slate-600"
                  >
                    {isEn ? "Request Type" : "Talep Türü"}
                  </label>
                  <input
                    id="subject"
                    type="text"
                    placeholder={
                      isEn
                        ? "e.g. electrical contracting, high voltage..."
                        : "Örn. Elektrik taahhüt, yüksek gerilim..."
                    }
                    className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition-all focus:border-rasyatek-primary focus:bg-white focus:ring-2 focus:ring-rasyatek-primary/20"
                  />
                </div>
                <div className="grid gap-2">
                  <label
                    htmlFor="message"
                    className="text-xs font-semibold uppercase tracking-wide text-slate-600"
                  >
                    {isEn ? "Project / Request Details" : "Proje / Talep Detayı"}
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder={
                      isEn
                        ? "Briefly describe your project or needs."
                        : "Projeniz veya ihtiyacınız hakkında kısa bilgi verin."
                    }
                    className="resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition-all focus:border-rasyatek-primary focus:bg-white focus:ring-2 focus:ring-rasyatek-primary/20"
                  />
                </div>
                <button
                  type="button"
                  className="group mt-2 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-rasyatek-primary px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-rasyatek-primary/25 transition-all hover:bg-sky-700 hover:shadow-xl md:w-max"
                >
                  <Send size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  {isEn ? "Send Form" : "Formu Gönder"}
                </button>
                <p className="text-xs text-slate-400">
                  {isEn
                    ? "This form is for demo purposes. Your info is not stored; real e-mail integration can be configured later."
                    : "Bu form demo amaçlıdır. Bilgileriniz saklanmaz; gerçek e-posta entegrasyonu daha sonra yapılandırılabilir."}
                </p>
              </div>
            </form>
          </div>

          {/* İletişim Bilgileri */}
          <div className="animate-slide-in-right delay-200 lg:sticky lg:top-28">
            <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8 text-white shadow-2xl">
              {/* Dekoratif */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-rasyatek-primary/10 blur-3xl" />

              <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-sky-300">
                {isEn ? "Contact Details" : "İletişim Bilgileri"}
              </p>
              <p className="mt-3 text-xl font-bold">
                Rasyatek Mühendislik
              </p>
              <p className="mt-1 text-sm text-slate-400">
                Yatırım Ltd. Şti.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-slate-300">
                {isEn
                  ? "Get in touch for electrical contracting, design and investment-oriented engineering solutions."
                  : "Elektrik taahhüt, projelendirme ve yatırım odaklı mühendislik çözümleri için bizimle iletişime geçin."}
              </p>

              <div className="mt-8 space-y-5">
                <div className="h-px bg-slate-700/80" />
                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/10 text-sky-300">
                    <Phone size={16} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-200">
                      {isEn ? "Phone" : "Telefon"}
                    </p>
                    <p className="mt-1 text-sm text-slate-400">
                      +90 (___) ___ __ __
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/10 text-sky-300">
                    <Mail size={16} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-200">E-mail</p>
                    <p className="mt-1 text-sm text-slate-400">info@rasyatek.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/10 text-sky-300">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-200">
                      {isEn ? "Address" : "Adres"}
                    </p>
                    <p className="mt-1 text-sm text-slate-400">
                      {isEn
                        ? "Office address will be placed here."
                        : "Ofis adresi bilgisi buraya gelecektir."}
                    </p>
                  </div>
                </div>
                <div className="h-px bg-slate-700/80" />
              </div>

              <p className="mt-6 text-[11px] leading-relaxed text-slate-500">
                {isEn
                  ? "Contact details can be updated with your corporate information once finalized."
                  : "Konum ve iletişim detayları hazır olduğunda kurumsal bilgilerinizle güncellenebilir."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
