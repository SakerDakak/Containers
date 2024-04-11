import ImageX from "@/config/assets/images";
import TranslationX from "@/config/translation/translation";
import { Button } from "@/ui/components/shadcn-ui/button";
import Image from "next/image";
import Link from "next/link";

export default function HomeHero() {
  const t = TranslationX.t(TranslationX.namespace.home);
  return (
    <div className="container flex flex-col items-center xl:flex-row xl:gap-20 mb-10 justify-between xl:items-start">
      <div className="flex flex-col gap-6 lg:gap-8 pt-10 lg:px-24 xl:px-0 xl:py-20 text-center xl:text-start">
        <p className="text-red-600 text-xl">{t("hero.section")}</p>
        <h1
          className="text-[5rem] leading-tight xl:leading-tight capitalize font-bold bg-gradient-to-b
        from-black via-slate-800 to-slate-600 bg-clip-text text-transparent
        dark:from-slate-200 dark:via-slate-200 dark:to-slate-500
        "
        >
          {t("hero.title")}
        </h1>
        <p className="text-lg leading-relaxed dark:text-gray-400">
          {t("hero.sub-title")}
        </p>
        <Link href={"/contact"}>
          <Button size={"lg"} className="text-lg">
            {t("hero.but-contant")}
          </Button>
        </Link>
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
