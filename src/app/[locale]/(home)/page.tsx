import ImageX from "@/config/assets/images";
import TranslationX from "@/config/translation/translation";
import MainLayout from "@/ui/layouts/main";
import CTA from "@/ui/sections/cta";
import Customers from "@/ui/sections/customers";
import Faqs from "@/ui/sections/faqs";
import HomeHero from "@/ui/sections/hero/homeHero";
import Map from "@/ui/sections/map";
import Shippings from "@/ui/sections/shippings";
import WhyUs from "@/ui/sections/whyUs";
import Image from "next/image";

export default function Home({ params }: { params: any }) {
  TranslationX.setRequestLocale(params.locale);
  return (
    <MainLayout params={params}>
      <HomeHero />
      <WhyUs />
      <Customers/>
      <Faqs />
      <Shippings />
      <Map />
      <CTA />
    </MainLayout>
  );
}
