import ValuesSection from "@/app/Component/ValuesSection";

type Locale = "tr" | "en";

export default async function DegerlerPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale = (raw === "en" ? "en" : "tr") as Locale;

  return <ValuesSection locale={locale} />;
}
