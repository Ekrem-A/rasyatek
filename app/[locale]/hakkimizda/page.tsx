import AboutSection from "@/app/Component/AboutSection";

type Locale = "tr" | "en";

export default async function HakkimizdaPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;

  return <AboutSection locale={locale} />;
}
