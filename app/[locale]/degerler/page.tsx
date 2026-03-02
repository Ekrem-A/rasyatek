import ValuesSection from "@/app/Component/ValuesSection";
import PageBanner from "@/app/Component/PageBanner";
import { Heart } from "lucide-react";

type Locale = "tr" | "en";

export default async function DegerlerPage({
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
        titleTr="Değerlerimiz"
        titleEn="Our Values"
        subtitleTr="Mühendisliği sorumluluk gerektiren bir iş olarak görüyoruz."
        subtitleEn="We see engineering as a responsibility."
        icon={<Heart size={24} />}
        breadcrumbs={[{ labelTr: "Değerlerimiz", labelEn: "Our Values" }]}
      />
      <ValuesSection locale={locale} />
    </>
  );
}
