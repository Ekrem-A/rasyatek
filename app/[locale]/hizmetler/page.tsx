import ServicesSection from "@/app/Component/ServicesSection";

type Locale = "tr" | "en";

export default async function HizmetlerPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale = (raw === "en" ? "en" : "tr") as Locale;

  return <ServicesSection locale={locale} />;
}
