import ValuesSection from "@/app/Component/ValuesSection";

type Locale = "tr" | "en";

export default async function DegerlerPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;

  return <ValuesSection locale={locale} />;
}
