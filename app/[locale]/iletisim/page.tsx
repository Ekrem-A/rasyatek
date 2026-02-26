import ContactSection from "@/app/Component/ContactSection";

type Locale = "tr" | "en";

export default async function IletisimPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;

  return <ContactSection locale={locale} />;
}
