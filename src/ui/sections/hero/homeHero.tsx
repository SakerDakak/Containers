import ImageX from "@/config/assets/images";
import TranslationX from "@/config/translation/translation";
import { Button } from "@/ui/components/shadcn-ui/button";
import Image from "next/image";

export default function HomeHero() {
  const t = TranslationX.t(TranslationX.namespace.home);
  return (
    <div className="container flex flex-col items-center xl:flex-row xl:gap-20 mb-10 justify-between xl:items-start">
      <div className="space-y-6 lg:space-y-8 pt-10 lg:px-24 xl:px-0 xl:py-20 text-center xl:text-start">
        <span className="text-red-600 text-xl">{t("hero.section")}</span>
        <h1
          className="text-[5rem] leading-tight xl:leading-tight font-bold bg-gradient-to-b
        from-black via-slate-800 to-slate-600 bg-clip-text text-transparent
        dark:from-slate-200 dark:via-slate-200 dark:to-slate-500
        "
        >
          {t("hero.title")}
        </h1>
        <p className="text-lg leading-relaxed dark:text-gray-400">
          {t("hero.sub-title")}
        </p>
        <Button
          size={"lg"}
          className="text-lg self-center hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-primary hover:scale-110 hover:shadow-md"
        >
          {t("hero.but-contant")}
        </Button>
      </div>
      <Image
        alt={t("hero.img-alt")}
        width={500}
        height={400}
        quality={100}
        src={ImageX.container_1}
        className="object-cover"
      />
    </div>
  );
}
