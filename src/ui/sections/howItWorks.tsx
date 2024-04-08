import ImageX from "@/config/assets/images";
import HowItWorksCard from "../components/costoum/howItWorksCard";
import SectionTitle from "./sectionTitle";
import { stagesHowItWorks } from "@/data/constant/stagesHowItWorks";
import TranslationX from "@/config/translation/translation";
import ShowMore from "../components/basic/showMore";

export default function HowItWorks({
  locale,
  isSmall = false,
}: {
  locale: string;
  isSmall?: boolean;
}) {
  const t = TranslationX.t(TranslationX.namespace.getOrder);

  return (
    <div className="flex flex-col gap-10">
      <div className="container text-center space-y-3">
        <SectionTitle section={t("section")} />
        <div className="title-lg">{t("title")}</div>
        <div className="sub-title">{t("sub-title")}</div>
      </div>
      <ShowMore disable={!isSmall} link="/contact">
        <div className="container flex flex-col gap-10">
          {stagesHowItWorks
            .slice(0, isSmall ? 3 : undefined)
            .map((stage, index) => {
              return (
                <HowItWorksCard
                  key={index}
                  img={ImageX.stage(index + 1)}
                  title={t("how-it-works.stage-" + (index + 1) + ".title")}
                  steps={stage.map((step) => {
                    return t(`how-it-works.stage-${index + 1}.step-${step}`);
                  })}
                  imgAlt={t("how-it-works.stage-" + (index + 1) + ".img-alt")}
                  number={index + 1}
                  locale={locale}
                  inverse={index % 2 !== 0}
                />
              );
            })}
        </div>
      </ShowMore>
    </div>
  );
}
