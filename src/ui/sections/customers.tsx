import ImageX from "@/config/assets/images";
import TranslationX from "@/config/translation/translation";
import Image from "next/image";

export default function Customers() {
  const customers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const t = TranslationX.t(TranslationX.namespace.customers);
  return (
    <div className="bg-gray-50 dark:bg-gray-900 py-20">
      <div className="container flex flex-col md:flex-row gap-20 md:gap-32 items-center justify-between">
        <div className="grid gap-y-4 gap-x-8 grid-cols-3 order-2 md:order-1">
          {customers.map((num, index) => {
            return (
              <Image
                key={index}
                src={ImageX.customer(num)}
                alt=""
                width={100}
                height={100}
                className="filter dark:invert grayscale hover:filter-none hover:invert-0 hover:grayscale-0 transition-all hover:scale-105 hover:-translate-y-2 rounded-md"
              />
            );
          })}
        </div>
        <div className="space-y-4 text-center md:text-start">
          <h2 className="title-lg">{t("title")}</h2>
          <div className="text-xl text-gray-400">{t("sub-title")}</div>
        </div>
      </div>
    </div>
  );
}
