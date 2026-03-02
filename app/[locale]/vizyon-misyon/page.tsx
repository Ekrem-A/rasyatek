import VisionMissionSection from "@/app/Component/VisionMissionSection";
import PageBanner from "@/app/Component/PageBanner";
import { Eye } from "lucide-react";

type Locale = "tr" | "en";

export default async function VizyonMisyonPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale = (raw === "en" ? "en" : "tr") as Locale;

  return (
    <>
      <PageBanner
        locale={locale}
        titleTr="Vizyon & Misyon"
        titleEn="Vision & Mission"
        subtitleTr="Sektöründe güvenilir ve referans gösterilen bir mühendislik firması olmak."
        subtitleEn="To be a trusted and reference engineering company in the sector."
        icon={<Eye size={24} />}
        breadcrumbs={[{ labelTr: "Vizyon & Misyon", labelEn: "Vision & Mission" }]}
      />
      <VisionMissionSection locale={locale} />
    </>
  );
}
