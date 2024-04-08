import clsx from "clsx";

export default function SectionTitle({
  section,
  className,
}: {
  section: string;
  className?: string;
}) {
  return (
    <h2
      className={clsx(
        "text-base font-semibold bg-primary inline-block py-1.5 px-4 rounded-md text-white",
        className
      )}
    >
      {section}
    </h2>
  );
}
