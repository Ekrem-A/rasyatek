import ContactSection from "@/app/Component/ContactSection";

type Locale = "tr" | "en";

export default async function IletisimPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale = (raw === "en" ? "en" : "tr") as Locale;

  return <ContactSection locale={locale} />;
}
