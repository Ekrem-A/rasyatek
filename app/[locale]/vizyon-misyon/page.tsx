import VisionMissionSection from "@/app/Component/VisionMissionSection";

type Locale = "tr" | "en";

export default async function VizyonMisyonPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale = (raw === "en" ? "en" : "tr") as Locale;

  return <VisionMissionSection locale={locale} />;
}
