import ImageX from "@/config/assets/images";
import TranslationX from "@/config/translation/translation";
import Image from "next/image";
import SectionTitle from "./sectionTitle";

export default function WhyUs() {
  const t = TranslationX.t(TranslationX.namespace.aboutWhyUs);
  return (
    <div className="flex flex-col justify-center  bg-gray-50 dark:bg-gray-900">
      <div
        className="container py-20
        flex flex-col-reverse md:flex-row gap-10 lg:gap-16 xl:gap-28 justify-center items-center"
      >
        <Image
          className="rounded-sm w-auto md:w-2/5 lg:w-1/2"
          alt={t("img-alt")}
          width={450}
          height={800}
          src={ImageX.about_1}
        />
        <div className="space-y-6 text-center md:text-start">
          <SectionTitle section={t("section")} />
          <p className="title-lg">{t("title")}</p>
          <p className="sub-title">
            {t("sub-title")}
          </p>
          <div
            className="mt-16 pt-2 grid grid-cols-2 gap-5 text-center
            *:p-5 *:shadow-sm *:rounded-sm font-medium font-lg *:bg-black *:text-white *:cursor-pointer [&>*:hover]:bg-primary [&>*:hover]:scale-105 [&>*:hover]:shadow-md"
          >
            <p>{t("features-1")}</p>
            <p>{t("features-2")}</p>
            <p>{t("features-3")}</p>
            <p>{t("features-4")}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
