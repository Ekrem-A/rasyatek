import ProductsSection from "@/app/Component/ProductsSection";

type Locale = "tr" | "en";

export default async function UrunlerPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale = (raw === "en" ? "en" : "tr") as Locale;

  return <ProductsSection locale={locale} />;
}
