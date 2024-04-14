import getLangDirection from "@/core/utils/langDirection";
import clsx from "clsx";
import Image from "next/image";

interface Props {
  img: string;
  imgAlt: string;
  title: string;
  steps: string[];
  number: number;
  locale: string;
  inverse?: boolean;
}
export default function HowItWorksCard({
  img,
  imgAlt,
  title,
  steps,
  number,
  locale,
  inverse = false,
}: Props) {
  return (
    <div className="rounded-md bg-slate-50 dark:bg-gray-900 pt-6 pb-10 lg:py-20 px-8 group transition-all hover:dark:bg-gray-850 hover:-translate-y-2 hover:scale-105 hover:shadow-sm">
      <div
        className={clsx(
          "flex flex-col  justify-between items-center gap-10 lg:gap-20",
          inverse ? "lg:flex-row-reverse" : "lg:flex-row"
        )}
      >
        <div
          className={clsx(
            "flex flex-col gap-10 items-center md:justify-between lg:justify-normal",
            inverse ? "md:flex-row-reverse" : " md:flex-row"
          )}
        >
          <p className="text-[15rem] font-bold leading-[0.7] text-primary">
            {number}
          </p>
          <div className="">
            <div className="title-sm mb-3">{title}</div>
            <ul className="list-disc ms-4 marker:text-primary flex flex-col gap-3">
              {steps.map((step, index) => {
                return (
                  <li key={index} className="sub-title-lg">
                    {step}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <Image
          src={img}
          width={400}
          height={300}
          alt={imgAlt}
          className={clsx(
            "rounded-md transition-all group-hover:-translate-y-2 group-hover:scale-105 group-hover:shadow-lg auto",
            getLangDirection(locale) === "ltr"
              ? inverse
                ? "group-hover:-rotate-6"
                : "group-hover:rotate-6"
              : inverse
              ? "group-hover:rotate-6"
              : "group-hover:-rotate-6"
          )}
        />
      </div>
    </div>
  );
}
