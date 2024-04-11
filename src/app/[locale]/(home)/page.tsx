import TranslationX from "@/config/translation/translation";
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

export default function Home({ params }: { params: any }) {
  TranslationX.setRequestLocale(params.locale);
  return (
    <MainLayout params={params}>
      <HomeHero />
      <WhyUs />
      <HowItWorks isSmall link="/get-order" locale={params.locale} />
      <Customers />
      <OurServices locale={params.locale} />
      <Shippings />
      <Faqs />
      <Map />
      <CTA />
    </MainLayout>
  );
}
