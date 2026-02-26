import HeroSection from "@/app/Component/HeroSection";

type Locale = "tr" | "en";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;

  return <HeroSection locale={locale} />;
}