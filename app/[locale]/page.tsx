import Header from "@/app/Component/Header";
import HeroSection from "@/app/Component/HeroSection";
import AboutSection from "@/app/Component/AboutSection";
import ValuesSection from "@/app/Component/ValuesSection";
import VisionMissionSection from "@/app/Component/VisionMissionSection";
import ProductsSection from "@/app/Component/ProductsSection";
import ServicesSection from "@/app/Component/ServicesSection";
import ContactSection from "@/app/Component/ContactSection";
import Footer from "@/app/Component/Footer";

type Locale = "tr" | "en";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <Header locale={locale} />

      <main>
        <HeroSection locale={locale} />
        <AboutSection locale={locale} />
        <ValuesSection locale={locale} />
        <VisionMissionSection locale={locale} />
        <ProductsSection locale={locale} />
        <ServicesSection locale={locale} />
        <ContactSection locale={locale} />
      </main>

      <Footer locale={locale} />
    </div>
  );
}