import Header from "@/app/Component/Header";
import Footer from "@/app/Component/Footer";

type Locale = "tr" | "en";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <Header locale={locale} />
      <main>{children}</main>
      <Footer locale={locale} />
    </div>
  );
}
