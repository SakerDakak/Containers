import { ReactNode } from "react";
import "@/ui/styles/globals.css";
import ThemeProvider from "@/core/providers/themeProvider";

type Props = {
  children: ReactNode;
};

// Since we have a `not-found.tsx` page on the root, a layout file
// is required, even if it's just passing children through.
export default function RootLayout({ children }: Props) {
  return children;
}
