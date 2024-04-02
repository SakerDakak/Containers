import ImageX from "@/config/assets/images";
import clsx from "clsx";
import Image from "next/image";

interface Props {
  header: string;
  headerSpan?: string;
  subHeader: string;
  img?: string;
  imageAlt?: string;
  className?: string;
}

export default function Hero({
  header,
  headerSpan,
  subHeader,
  img,
  imageAlt,
  className,
}: Props) {
  return (
    <div className={clsx("bg-gray-50 dark:bg-gray-950", className)}>
      <div className="container flex flex-col md:flex-row gap-16 md:gap-16 justify-between items-center">
        <div className="space-y-6 self-center pt-16 md:py-40 text-center md:text-start">
          <h1 className="text-6xl font-bold leading-normal">
            {header}
            <span className="text-primary"> {headerSpan}</span>
          </h1>
          <p className="text-2xl tracking-wider">{subHeader}</p>
        </div>
        <div className="flex flex-col">
          <Image
            className=" md:my-10 rounded-md "
            src={img || ImageX.container_2}
            width={400}
            height={100}
            alt={imageAlt || "Hero Image"}
          />
        </div>
      </div>
    </div>
  );
}
