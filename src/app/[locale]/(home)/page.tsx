import ImageX from "@/config/assets/images";
import TranslationX from "@/config/translation/translation";
import HowItWorksCard from "@/ui/components/costoum/howItWorksCard";
import { Button } from "@/ui/components/shadcn-ui/button";
import MainLayout from "@/ui/layouts/main";
import CTA from "@/ui/sections/cta";
import Customers from "@/ui/sections/customers";
import Faqs from "@/ui/sections/faqs";
import HomeHero from "@/ui/sections/hero/homeHero";
import HowItWorks from "@/ui/sections/howItWorks";
import Map from "@/ui/sections/map";
import OurServices from "@/ui/sections/ourServices";
import Shippings from "@/ui/sections/shippings";
import WhyUs from "@/ui/sections/whyUs";
import Image from "next/image";
import Link from "next/link";

export default function Home({ params }: { params: any }) {
  TranslationX.setRequestLocale(params.locale);
  const t = TranslationX.t(TranslationX.namespace.getOrder);
  const stages = [
    [1, 2, 3, 4, 5],
    [1, 2, 3],
    [1, 2, 3, 4],
  ];
  return (
    <MainLayout params={params}>
      <HomeHero />
      <WhyUs />
      <HowItWorks isSmall locale={params.locale} />
      <Customers />
      <OurServices locale={params.locale} />
      <Shippings />
      <Faqs />
      <Map />
      <CTA />
    </MainLayout>
  );
}
