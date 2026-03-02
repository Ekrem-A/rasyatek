import AboutSection from "@/app/Component/AboutSection";
import PageBanner from "@/app/Component/PageBanner";
import { Users } from "lucide-react";

type Locale = "tr" | "en";

export default async function HakkimizdaPage({
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
        titleTr="Hakkımızda"
        titleEn="About Us"
        subtitleTr="Sahadan gelen tecrübe ile mühendislik disiplinini buluşturuyoruz."
        subtitleEn="We combine field experience with engineering discipline."
        icon={<Users size={24} />}
        breadcrumbs={[{ labelTr: "Hakkımızda", labelEn: "About Us" }]}
      />
      <AboutSection locale={locale} />
    </>
  );
}
