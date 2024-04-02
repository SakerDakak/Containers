import { ReactNode } from "react";
import GradientBackground from "../components/basic/gradientBackground";
import WhatsappFloatButton from "../components/costoum/whatsappFloatButton";
import Footer from "../sections/footer/footer";
import Header from "../sections/header/header";
import clsx from "clsx";

type Props = {
  children: ReactNode;
  params?: { locale: string };
  className?: string;
  gap?: string;
  isOnlyCoperight?: boolean;
  isGradientBackground?: boolean;
};

export default function MainLayout({
  children,
  params,
  className,
  isOnlyCoperight = false,
  isGradientBackground = true,
  gap = "gap-16",
}: Props) {
  return (
    <main
      className={clsx(
        "flex flex-col justify-between min-h-screen w-full",
        className
      )}
    >
      {isGradientBackground && <GradientBackground />}
      <Header locale={params?.locale ?? "en"} />
      <div className={clsx("mt-nav flex flex-col", gap)}>{children}</div>
      <Footer isOnlyCoperight={isOnlyCoperight} />
      <WhatsappFloatButton />
    </main>
  );
}
