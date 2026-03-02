import ProductsSection from "@/app/Component/ProductsSection";
import PageBanner from "@/app/Component/PageBanner";
import { Package } from "lucide-react";

type Locale = "tr" | "en";

export default async function UrunlerPage({
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
        titleTr="Ürünlerimiz"
        titleEn="Our Products"
        subtitleTr="Yüksek performanslı güç kalitesi ve pano çözümleri sunuyoruz."
        subtitleEn="We provide high-performance power quality and panel solutions."
        icon={<Package size={24} />}
        breadcrumbs={[{ labelTr: "Ürünler", labelEn: "Products" }]}
      />
      <ProductsSection locale={locale} />
    </>
  );
}
