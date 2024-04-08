import ImageX from "@/config/assets/images";
import TranslationX from "@/config/translation/translation";
import MainLayout from "@/ui/layouts/main";
import CTA from "@/ui/sections/cta";
import Customers from "@/ui/sections/customers";
import Hero from "@/ui/sections/hero/hero";
import Map from "@/ui/sections/map";
import WhyUs from "@/ui/sections/whyUs";

export default function FAQPage({ params }: { params: any }) {
  TranslationX.setRequestLocale(params.locale);
  const t = TranslationX.t(TranslationX.namespace.about);
  return (
    <MainLayout params={params}>
      <Hero
        header={t("header.text")}
        headerSpan={t("header.span")}
        subHeader={t("sub-header")}
        img={ImageX.aboutHero}
        className="bg-transparent"
      />
      <WhyUs/>
      <Customers/>
      <Map/>
      <CTA/>
    </MainLayout>
  );
}
