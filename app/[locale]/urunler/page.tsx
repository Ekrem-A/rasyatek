import ProductsSection from "@/app/Component/ProductsSection";

type Locale = "tr" | "en";

export default async function UrunlerPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;

  return <ProductsSection locale={locale} />;
}
