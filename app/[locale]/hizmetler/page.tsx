import ServicesSection from "@/app/Component/ServicesSection";

type Locale = "tr" | "en";

export default async function HizmetlerPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;

  return <ServicesSection locale={locale} />;
}
