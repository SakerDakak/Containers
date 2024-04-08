import IconX from "@/config/assets/icons";
import InfoX from "@/config/info/info";
import TranslationX from "@/config/translation/translation";
import { NavbarItemList } from "@/data/constant/navbar";
import Icon from "@/ui/components/basic/icon";
import Logo from "@/ui/components/basic/logo";
import NavigationLink from "@/ui/components/basic/navigationLink";

export default function Footer({
  isOnlyCoperight = false,
}: {
  isOnlyCoperight?: boolean;
}) {
  const t = TranslationX.t(TranslationX.namespace.footer);
  const t_nav = TranslationX.t(TranslationX.namespace.navbar);
  const t_contact = TranslationX.t(TranslationX.namespace.contact);
  return (
    <footer className="border-t">
      {isOnlyCoperight || (
        <div
          className="py-10 xl:px-app-xl lg:px-app-lg px-app grid gap-x-10 gap-y-6 text-gray-700 dark:text-gray-200
        grid-cols-2 justify-center md:grid-cols-4 xl:grid-cols-5"
        >
          {/* Logo */}
          <div className="space-y-4 col-span-1 xl:col-span-2 xl:pe-32">
            <Logo className="w-36 p-2" darkMode />
            <p className="text-xs dark:text-gray-400 max-w-sm">
              {t("description")}
            </p>
          </div>
          {/* Site Map */}
          <div className="space-y-4">
            <p className="text-lg font-bold text-primary">{t("navigation")}</p>
            <ul className="space-y-2">
              {NavbarItemList.map((value, index) => {
                return (
                  <li key={index}>
                    <NavigationLink
                      href={value.path}
                      className="transition-colors hover:text-primary"
                    >
                      {t_nav(value.title)}
                    </NavigationLink>
                  </li>
                );
              })}
            </ul>
          </div>
          {/* Contant */}
          <div className="space-y-4">
            <p className="text-lg font-bold text-primary">{t("contant")}</p>
            <div
              className="space-y-4 *:flex *:gap-2 text-sm *:justify-start *:items-center
            [&>*]:transition-colors [&>*:hover]:text-primary"
            >
              {/* Phone */}
              <a href={"tel:" + InfoX.contant.phone[0]} target="_blank">
                <Icon icon={IconX.phone} />
                <bdo dir="ltr">{InfoX.contant.phone[0]}</bdo>
              </a>
              {/* Email */}
              <a href={"mailto:" + InfoX.contant.email} target="_blank">
                <bdo dir="ltr">
                  <Icon icon={IconX.email} />
                </bdo>
                {InfoX.contant.email}
              </a>
              {/* Addreass */}
              <a href={InfoX.contant.map} target="_blank">
                <Icon icon={IconX.address} />
                {t_contact("address")}
              </a>
            </div>
          </div>
          {/* Social Media */}
          <div className="space-y-4">
            <p className="text-lg font-bold text-primary">{t("social")}</p>
            <ul className="list-none flex gap-4 text-lg [&>*]:transition-colors [&>*:hover]:text-primary">
              {/* Facebook */}
              <li>
                <a
                  href={InfoX.socialMedia.facebook}
                  aria-label="Facebook"
                  target="_blank"
                >
                  <Icon icon={IconX.facebook} />
                </a>
              </li>
              <li>
                {/* Instagram */}
                <a
                  href={InfoX.socialMedia.instagram}
                  aria-label="Instagram"
                  target="_blank"
                >
                  <Icon icon={IconX.instagram} />
                </a>
              </li>
              {/* Snapchat */}
              <li>
                <a
                  href={InfoX.socialMedia.snapchat}
                  aria-label="Snapchat"
                  target="_blank"
                >
                  <Icon icon={IconX.snapchat} />
                </a>
              </li>
              {/* X Twitter */}
              <li>
                <a
                  href={InfoX.socialMedia.xTwitter}
                  aria-label="Twitter"
                  target="_blank"
                >
                  <Icon icon={IconX.xTwitter} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}

      <div className="border-t">
        <p className="text-center text-sm py-2 text-gray-400">
          {t("copyright", { year: new Date().getFullYear() })}
        </p>
      </div>
    </footer>
  );
}
