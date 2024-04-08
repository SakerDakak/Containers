"use client";
import { useCallback, useEffect, useState } from "react";
import clsx from "clsx";
import { ReactNode } from "react";

export default function HeaderContainer({ children }: { children: ReactNode }) {
  const [scrollY, setScrollY] = useState(0);

  const onScroll = useCallback(() => {
    setScrollY(window.scrollY);
  }, [scrollY]);
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", onScroll);
    }
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);
  return (
    <header
      className={clsx(
        `fixed z-40 top-0 w-full flex
      px-header lg:px-header-lg
      border-b
      transition-colors duration-500 backdrop-blur supports-backdrop-blur:bg-white/60
      supports-backdrop-blur:bg-white/95`,
        scrollY > 20
          ? " bg-white/80 dark:bg-black/75"
          : "bg-transparent"
      )}
    >
      {children}
    </header>
  );
}
