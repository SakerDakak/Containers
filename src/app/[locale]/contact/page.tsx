import IconX from "@/config/assets/icons";
import InfoX from "@/config/info/info";
import TranslationX from "@/config/translation/translation";
import Icon from "@/ui/components/basic/icon";
import ContantCard from "@/ui/components/costoum/contactCard";
import MainLayout from "@/ui/layouts/main";
import Map from "@/ui/sections/map";

export default function ContactPage({ params }: { params: any }) {
  TranslationX.setRequestLocale(params.locale);
  const t = TranslationX.t(TranslationX.namespace.contact);
  return (
    <MainLayout isGradientBackground={false} isOnlyCoperight params={params}>
      <p className="title text-4xl md:text-5xl text-center mt-8 mb-12 animate-in slide-in-from-top duration-2000">
        {t("header.text")}
        <span className="text-primary"> {t("header.span")}</span>
      </p>

      <div className="w-full container mb-8 flex flex-col items-center animate-pulse duration-4000">
        <div className="bg-[url('/images/shapes/map.svg')] dark:bg-[url('/images/shapes/map-dark.svg')] w-full h-[22rem] lg:h-[28rem] bg-no-repeat bg-center bg-contain"></div>
      </div>

      <div
        className="container flex flex-col md:flex-row gap-8 justify-center mb-14"
        dir="ltr"
      >
        <ContantCard
          icon={IconX.phone}
          text={InfoX.contant.phone[0]}
          dir="ltr"
          href={"tel:" + InfoX.contant.phone[0]}
        />
        <ContantCard
          icon={IconX.email}
          text={InfoX.contant.email}
          dir="ltr"
          href={"mailto:" + InfoX.contant.email}
        />
        <ContantCard
          icon={IconX.address}
          text={t("address")}
          href={InfoX.contant.map}
        />
      </div>
      <ul
        className="list-none flex gap-10 justify-center text-3xl [&>*]:transition-colors [&>*:hover]:text-primary mb-16 text-gray-400 dark:text-neutral-600"
        dir="ltr"
      >
        {/* Facebook */}
        <li>
          <a href={InfoX.socialMedia.facebook} target="_blank">
            <Icon icon={IconX.facebook} />
          </a>
        </li>
        <li>
          {/* Instagram */}
          <a href={InfoX.socialMedia.instagram} target="_blank">
            <Icon icon={IconX.instagram} />
          </a>
        </li>
        {/* Snapchat */}
        <li>
          <a href={InfoX.socialMedia.snapchat} target="_blank">
            <Icon icon={IconX.snapchat} />
          </a>
        </li>
        {/* X Twitter */}
        <li>
          <a href={InfoX.socialMedia.xTwitter} target="_blank">
            <Icon icon={IconX.xTwitter} />
          </a>
        </li>
      </ul>
      <div className="dark:bg-gray-900 bg-gray-100 py-14 mb-10">
        <Map />
      </div>
    </MainLayout>
  );
}
