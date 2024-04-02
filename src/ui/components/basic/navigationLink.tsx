"use client";

import { AppPathnames, Link } from "@/config/navigation/i18nNavigation";
import { useNavberHook } from "@/core/hooks/navbar";
import clsx from "clsx";
import { usePathname, useSelectedLayoutSegment } from "next/navigation";
import { ComponentProps } from "react";

export default function NavigationLink<Pathname extends AppPathnames>({
  href,
  ...rest
}: ComponentProps<typeof Link<Pathname>>) {
  const { isOpenNav, setIsOpenNav } = useNavberHook();
  const selectedLayoutSegment = useSelectedLayoutSegment();
  const _usePathname = usePathname();
  const pathname = selectedLayoutSegment
    // RegExp to remove Privite name like /(home) 
    ? `/${selectedLayoutSegment.replace(/[(](.*?)[)]/g, "")}`
    :_usePathname?_usePathname: "/";
  const isActive = pathname === href;
  return (
    <Link
      href={href}
      onClick={() => isOpenNav && setIsOpenNav(false)}
      aria-current={isActive ? "page" : undefined}
      className={clsx(
        "inline-block px-2 py-3 font-semibold transition-colors hover:text-primary",
        isActive ? "text-primary" : ""
      )}
      {...rest}
    />
  );
}
