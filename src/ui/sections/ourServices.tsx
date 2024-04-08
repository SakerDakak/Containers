import TranslationX from "@/config/translation/translation";
import SectionTitle from "./sectionTitle";
import Image from "next/image";
import ImageX from "@/config/assets/images";
import clsx from "clsx";
import getLangDirection from "@/core/utils/langDirection";

export default function OurServices({locale}:{locale:string}) {
    const t = TranslationX.t(TranslationX.namespace.ourServices);
    return (
      <div className="relative">
        <Image
          className="w-full h-[40rem] object-cover"
          alt={t("img-alt")}
          width={1920}
          height={1080}
          src={ImageX.ourServices}
        />
        <div
          className={
              clsx(
                "w-full h-[40rem] top-0 absolute  from-black/70 md:from-black/0 to-black/70 md:to-black/70",
              getLangDirection(locale) === "ltr"
                ? "bg-gradient-to-l"
                : "bg-gradient-to-r"
            )
          }
        />

        <div className="absolute top-0 bottom-0 h-full w-full text-white">
          <div className="container py-20 h-full flex flex-col gap-4 items-start justify-center">
            <SectionTitle section={t("section")} />
            <p className="title-lg">{t("title")}</p>
            <p className="sub-title text-gray-100">{t("sub-title")}</p>
            <div className="text-gray-200 flex flex-col mt-5 gap-2.5 text-lg *:before:content-['✓'] *:before:me-2 *:before:text-primary">
              <p>{t("service-1")}</p>
              <p>{t("service-2")}</p>
              <p>{t("service-3")}</p>
              <p>{t("service-4")}</p>
              <p>{t("service-5")}</p>
              <p>{t("service-6")}</p>
            </div>
          </div>
        </div>
      </div>
    );
}