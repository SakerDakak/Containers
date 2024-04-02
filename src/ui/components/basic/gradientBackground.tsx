import ImageX from "@/config/assets/images";
import Image from "next/image";

export default function GradientBackground() {
  return (
    <div className="absolute z-20 top-0 inset-x-0 flex justify-center overflow-hidden pointer-events-none">
      <div className="w-[108rem] flex-none flex justify-end">
        <Image
          className="w-[90rem] flex-none max-w-none opacity-80 dark:opacity-50"
          // className="absolute top-0 w-full opacity-80 dark:opacity-50"
          width={1920}
          height={500}
          alt=""
          src={ImageX.background}
        />
      </div>
    </div>
  );
}
