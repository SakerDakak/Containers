import {
  Pathnames,
  createLocalizedPathnamesNavigation,
} from "next-intl/navigation";
import TranslationX from "../translation/translation";

// change path name by language
export const pathnames = {
  "/": "/",
  "/about": "/about",
  "/get-order": "/get-order",
  "/services": "/services",
  "/faq": "/faq",
  "/contact": "/contact",
} satisfies Pathnames<typeof TranslationX.locales>;

export type AppPathnames = keyof typeof pathnames;

export const { Link, redirect, usePathname, useRouter } =
  createLocalizedPathnamesNavigation({
    locales: TranslationX.locales,
    localePrefix: TranslationX.localePrefix,
    pathnames: pathnames,
  });
