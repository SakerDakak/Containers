import { IconType } from "react-icons";
import Icon from "../basic/icon";

interface Props {
  icon: IconType;
  text: string;
  href: string;
  dir?: string;
}

export default function ContantCard({ icon, text, dir, href }: Props) {
  return (
    <a
      href={href}
      target="_blank"
      className="
    transition-all duration-500
    border p-7 md:p-10 rounded-md text-center space-y-3 md:space-y-6 hover:border-primary hover:bg-gray-50 dark:bg-gray-900 hover:dark:bg-neutral-800 cursor-pointer hover:-translate-y-2"
    >
      <Icon icon={icon} className="text-4xl text-primary mx-auto" />
      <p className="text-xl" dir={dir}>
        {text}
      </p>
    </a>
  );
}
