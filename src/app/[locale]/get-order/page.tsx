import ImageX from "@/config/assets/images";
import TranslationX from "@/config/translation/translation";
import HowItWorksCard from "@/ui/components/costoum/howItWorksCard";
import MainLayout from "@/ui/layouts/main";
import CTA from "@/ui/sections/cta";
import Hero from "@/ui/sections/hero/hero";
import HowItWorks from "@/ui/sections/howItWorks";
import SectionTitle from "@/ui/sections/sectionTitle";
import Image from "next/image";

export default function FAQPage({ params }: { params: any }) {
  TranslationX.setRequestLocale(params.locale);
  const t = TranslationX.t(TranslationX.namespace.getOrder);

  return (
    <MainLayout params={params}>
      <Hero
        header={t("header.text")}
        headerSpan={t("header.span")}
        subHeader={t("sub-header")}
      />
      <HowItWorks locale={params.locale}/>
      <CTA />
    </MainLayout>
  );
}
