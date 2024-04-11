import clsx from "clsx";
import SectionTitle from "./sectionTitle";
import TranslationX from "@/config/translation/translation";

export default function Map({
  className,
}: {
  height?: number;
  className?: string;
}) {
  const t = TranslationX.t(TranslationX.namespace.contactMap);
  return (
    <div className="text-center container">
      <SectionTitle section={t("section")} className="mb-6" />
      <p className="mb-10 title">{t("title")}</p>
      <div className="overflow-hidden rounded-md relative dark:filter dark:invert dark:grayscale">
        <iframe
          className={clsx("w-full h-80 md:h-96 lg:h-[30rem] ", className)}
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3650.050306225691!2d46.774631746544884!3d24.69810909885942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjTCsDQxJzU0LjgiTiA0NsKwNDYnMjEuMiJF!5e0!3m2!1sar!2snl!4v1710530715630!5m2!1sar!2snl"
          height={400}
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          title={t("iframe-title")}
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
}
