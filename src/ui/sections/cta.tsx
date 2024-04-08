import Image from "next/image";
import ImageX from "@/config/assets/images";
import TranslationX from "@/config/translation/translation";
import Link from "next/link";
import clsx from "clsx";

export default function CTA({ className = "mb-10" }: { className?: string }) {
  const t = TranslationX.t(TranslationX.namespace.cta);
  return (
    <div className={clsx(className, "container")}>
      <div
        className="px-5 py-10 lg:py-8
       flex flex-col items-center lg:justify-center  text-center bg-primary rounded-md w-full relative"
      >
        <p className="text-3xl font-bold text-white">{t("title")}</p>
        <p className="text-lg pt-4 pb-6 text-gray-100 max-w-[40rem]">
          {t("sub-title")}
        </p>
        <Link
          href={"/contact"}
          className="transition-colors bg-black text-white rounded-sm py-2.5 px-8 hover:bg-white hover:text-black"
        >
          {" "}
          {t("button")}
        </Link>
        <Image
          src={ImageX.container_3}
          alt={t("img-alt")}
          width={200}
          height={160}
          quality={100}
          className="h-28 w-auto absolute hidden md:inline right-0 bottom-0"
        />
      </div>
    </div>
  );
}
