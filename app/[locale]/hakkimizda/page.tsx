import AboutSection from "@/app/Component/AboutSection";

type Locale = "tr" | "en";

export default async function HakkimizdaPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale = (raw === "en" ? "en" : "tr") as Locale;

  return <AboutSection locale={locale} />;
}
