import Header from "@/app/Component/Header";
import Footer from "@/app/Component/Footer";

type Locale = "tr" | "en";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale = (raw === "en" ? "en" : "tr") as Locale;

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <Header locale={locale} />
      <main>{children}</main>
      <Footer locale={locale} />
    </div>
  );
}
