import IconX from "@/config/assets/icons";
import Icon from "../basic/icon";
import InfoX from "@/config/info/info";

export default function WhatsappFloatButton() {
  return (
    <div className=" cursor-pointer rounded-full bg-green-600 p-3 fixed bottom-4 right-6 text-white text-3xl shadow-lg">
      <a
        target="_blank"
        aria-label="Whats app"
        href={`https://api.whatsapp.com/send?phone=${InfoX.contant.whatsapp}&text=Hello`}
      >
        <Icon icon={IconX.whatsapp} />
      </a>
    </div>
  );
}
