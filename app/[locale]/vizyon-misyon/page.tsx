import VisionMissionSection from "@/app/Component/VisionMissionSection";

type Locale = "tr" | "en";

export default async function VizyonMisyonPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;

  return <VisionMissionSection locale={locale} />;
}
