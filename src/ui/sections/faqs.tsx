import ImageX from "@/config/assets/images";
import TranslationX from "@/config/translation/translation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/ui/components/shadcn-ui/accordion";
import { Card } from "@/ui/components/shadcn-ui/card";
import Image from "next/image";
import SectionTitle from "./sectionTitle";
import clsx from "clsx";

export default function Faqs({className}:{className?:string}) {
  const t = TranslationX.t(TranslationX.namespace.faq);
  const faqs = [1, 2, 3, 4, 5];

  return (
    <div className={clsx("container flex flex-col lg:gap-20 lg:flex-row justify-between items-center lg:items-start",className)}>
      <div className="mb-8 lg:mb-14 lg:space-y-14 lg:text-start flex-1">
        <SectionTitle section={t("section")} />
        <div className="text-center">
          <Image
            src={ImageX.questionMark}
            width={250}
            height={600}
            alt=""
            className="hidden lg:inline-block mt-30 dark:filter dark:invert"
          />
        </div>
      </div>
      <div className="flex-[3] space-y-10">
        <p className="title text-center lg:text-start">{t("title")}</p>
        <Card className="p-4 md:p-10 md:py-4 dark:bg-gray-900">
          <Accordion
            type="single"
            collapsible
            defaultValue="item-1"
            className="w-full"
          >
            {faqs.map((item, index) => {
              return (
                <AccordionItem
                  key={index}
                  value={"item-" + item}
                  className={faqs.length === index + 1 ? "border-none" : ""}
                >
                  <AccordionTrigger className="accordionOpen hover:no-underline font-semibold text-lg hover:text-primary py-7">
                    {t(`qus-${item}`)}
                  </AccordionTrigger>
                  <AccordionContent className="whitespace-pre-line pb-8 text-base text-gray-500 leading-8">
                    {t(`ans-${item}`)}
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </Card>
      </div>
    </div>
  );
}
