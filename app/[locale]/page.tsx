import HeroSection from "@/app/Component/HeroSection";

type Locale = "tr" | "en";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale = (raw === "en" ? "en" : "tr") as Locale;

  return <HeroSection locale={locale} />;
}