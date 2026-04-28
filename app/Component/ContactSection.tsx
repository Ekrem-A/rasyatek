"use client";

import { useState, type FormEvent } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageSquare,
  CheckCircle2,
  AlertCircle,
  Loader2,
} from "lucide-react";

type Locale = "tr" | "en";
type FormStatus = "idle" | "sending" | "success" | "error";

export default function ContactSection({ locale }: { locale: Locale }) {
  const isEn = locale === "en";

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const updateField = (field: keyof typeof form, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus("error");
      setErrorMsg(
        isEn
          ? "Please fill in name, email and message fields."
          : "Lütfen ad, e-posta ve mesaj alanlarını doldurun."
      );
      return;
    }

    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Request failed");
      }

      setStatus("success");
      setForm({ name: "", email: "", phone: "", subject: "", message: "" });
    } catch {
      setStatus("error");
      setErrorMsg(
        isEn
          ? "An error occurred while sending. Please try again."
          : "Gönderim sırasında bir hata oluştu. Lütfen tekrar deneyin."
      );
    }
  };

  return (
    <section className="py-12 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        {/* Başlık */}
        <div className="animate-fade-in-up mx-auto mb-14 max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-rasyatek-primary-soft px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-rasyatek-primary">
            <MessageSquare size={14} />
            {isEn ? "Contact" : "İletişim"}
          </div>
          <h2 className="mt-4 text-xl font-bold tracking-tight text-slate-900 sm:mt-5 sm:text-2xl md:text-3xl lg:text-4xl">
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
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center rounded-2xl bg-white p-8 text-center shadow-lg ring-1 ring-slate-100 sm:rounded-3xl sm:p-12">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-500">
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="mt-5 text-xl font-bold text-slate-900">
                  {isEn ? "Message Sent!" : "Mesajınız Gönderildi!"}
                </h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-slate-500">
                  {isEn
                    ? "Thank you for reaching out. Our team will review your request and get back to you as soon as possible."
                    : "Bizimle iletişime geçtiğiniz için teşekkür ederiz. Ekibimiz talebinizi inceleyip en kısa sürede size dönüş yapacaktır."}
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-6 rounded-xl bg-rasyatek-primary px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-sky-700"
                >
                  {isEn ? "Send Another Message" : "Yeni Mesaj Gönder"}
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl bg-white p-4 shadow-lg ring-1 ring-slate-100 sm:rounded-3xl sm:p-6 md:p-8"
              >
                <div className="grid gap-5">
                  <div className="grid gap-2">
                    <label
                      htmlFor="name"
                      className="text-xs font-semibold uppercase tracking-wide text-slate-600"
                    >
                      {isEn ? "Name / Company" : "Ad Soyad / Firma"}{" "}
                      <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => updateField("name", e.target.value)}
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
                        E-mail <span className="text-red-400">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => updateField("email", e.target.value)}
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
                        value={form.phone}
                        onChange={(e) => updateField("phone", e.target.value)}
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
                      value={form.subject}
                      onChange={(e) => updateField("subject", e.target.value)}
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
                      {isEn ? "Project / Request Details" : "Proje / Talep Detayı"}{" "}
                      <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      value={form.message}
                      onChange={(e) => updateField("message", e.target.value)}
                      placeholder={
                        isEn
                          ? "Briefly describe your project or needs."
                          : "Projeniz veya ihtiyacınız hakkında kısa bilgi verin."
                      }
                      className="resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition-all focus:border-rasyatek-primary focus:bg-white focus:ring-2 focus:ring-rasyatek-primary/20"
                    />
                  </div>
                  {status === "error" && errorMsg && (
                    <div className="flex items-center gap-2 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600">
                      <AlertCircle size={16} className="shrink-0" />
                      {errorMsg}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="group mt-2 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-rasyatek-primary px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-rasyatek-primary/25 transition-all hover:bg-sky-700 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-60 sm:w-max"
                  >
                    {status === "sending" ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        {isEn ? "Sending..." : "Gönderiliyor..."}
                      </>
                    ) : (
                      <>
                        <Send
                          size={16}
                          className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        />
                        {isEn ? "Send Form" : "Formu Gönder"}
                      </>
                    )}
                  </button>

                  <p className="text-xs text-slate-400">
                    {isEn
                      ? "Your information will only be used to respond to your request."
                      : "Bilgileriniz yalnızca talebinize yanıt vermek amacıyla kullanılacaktır."}
                  </p>
                </div>
              </form>
            )}
          </div>

          {/* İletişim Bilgileri */}
          <div className="animate-fade-in-up delay-200 lg:sticky lg:top-28">
            <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-5 text-white shadow-2xl sm:rounded-3xl sm:p-8">
              <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-rasyatek-primary/10 blur-3xl" />

              <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-sky-300">
                {isEn ? "Contact Details" : "İletişim Bilgileri"}
              </p>
              <p className="mt-3 text-xl font-bold">Rasyatek Mühendislik</p>
              <p className="mt-1 text-sm text-slate-400">Yatırım Ltd. Şti.</p>
              <p className="mt-4 text-sm leading-relaxed text-slate-300">
                {isEn
                  ? "Get in touch for electrical contracting, design and investment-oriented engineering solutions."
                  : "Elektrik taahhüt, projelendirme ve yatırım odaklı mühendislik çözümleri için bizimle iletişime geçin."}
              </p>

              <div className="mt-8 space-y-5">
                <div className="h-px bg-slate-700/80" />
                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/10 text-sky-300">
                    <Mail size={16} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-200">E-mail</p>
                    <p className="mt-1 text-sm text-slate-400">
                      info@rasyatek.com
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/10 text-sky-300">
                    <Phone size={16} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-200">
                      {isEn ? "Phone" : "Telefon"}
                    </p>
                    <p className="mt-1 text-sm text-slate-400">
                      +90 (553) 770 91 20
                    </p>
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
                        ? "İdealtepe Mahallesi Dik Sokak No:13 İç Kapı No:2 Maltepe/İstanbul"
                        : "İdealtepe Mahallesi Dik Sokak No:13 İç Kapı No:2 Maltepe/İstanbul"}
                    </p>
                  </div>
                </div>
                <div className="h-px bg-slate-700/80" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
