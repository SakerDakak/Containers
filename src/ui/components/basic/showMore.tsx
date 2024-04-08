import { Button } from "../shadcn-ui/button";
import { ReactNode } from "react";
import TranslationX from "@/config/translation/translation";
import Link from "next/link";

export default function ShowMore({
  children,
  link,
  buttonText,
  className,
  disable = false,
}: {
  children: ReactNode;
  link: string;
  buttonText?: string;
  className?: string;
  disable?: boolean;
}) {
  const t = TranslationX.t(TranslationX.namespace.basic);
  if (disable) {
    return children;
  } else {
    return (
      <div className={className}>
        <div className="relative mt-10 md:mt-0">
          {children}
          <div className="w-full pointer-events-none absolute -inset-x-2.5 -bottom-10 h-[60%] bg-gradient-to-t from-background to-black/0 sm:h-[33.3%]" />
        </div>
        <div className="relative z-[2] flex justify-center">
          <Link href={link}>
            <Button className=" cursor-pointer" size={"lg"}>
              {buttonText || t("show-more")}
            </Button>
          </Link>
        </div>
      </div>
    );
  }
}
