import ServicesSection from "@/app/Component/ServicesSection";
import PageBanner from "@/app/Component/PageBanner";
import { Cog } from "lucide-react";

type Locale = "tr" | "en";

export default async function HizmetlerPage({
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
        titleTr="Hizmetlerimiz"
        titleEn="Our Services"
        subtitleTr="Projelendirmeden saha uygulamasına kadar tüm süreci yönetiyoruz."
        subtitleEn="We manage the entire process from design to site implementation."
        icon={<Cog size={24} />}
        breadcrumbs={[{ labelTr: "Hizmetler", labelEn: "Services" }]}
      />
      <ServicesSection locale={locale} />
    </>
  );
}
