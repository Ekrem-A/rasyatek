import ContactSection from "@/app/Component/ContactSection";
import PageBanner from "@/app/Component/PageBanner";
import { MessageSquare } from "lucide-react";

type Locale = "tr" | "en";

export default async function IletisimPage({
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
        titleTr="İletişim"
        titleEn="Contact"
        subtitleTr="Projeniz için birlikte en doğru çözümü planlayalım."
        subtitleEn="Let's plan the right solution for your project together."
        icon={<MessageSquare size={24} />}
        breadcrumbs={[{ labelTr: "İletişim", labelEn: "Contact" }]}
      />
      <ContactSection locale={locale} />
    </>
  );
}
