import ImageX from "@/config/assets/images";
import TranslationX from "@/config/translation/translation";
import { Button } from "@/ui/components/shadcn-ui/button";
import MainLayout from "@/ui/layouts/main";
import CTA from "@/ui/sections/cta";
import Faqs from "@/ui/sections/faqs";
import Header from "@/ui/sections/header/header";
import Hero from "@/ui/sections/hero/hero";
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
        className="mb-20"
      />
      <CTA/>
    </MainLayout>
  );
}
