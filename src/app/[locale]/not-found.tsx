import TranslationX from "@/config/translation/translation";
import MainLayout from "@/ui/layouts/main";
import Link from "next/link";

// Note that `app/[locale]/[...rest]/page.tsx`
// is necessary for this page to render.
export default function NotFoundPage({ params }: { params: any }) {
  const t = TranslationX.t(TranslationX.namespace.notFound);

  return (
    <MainLayout params={params}>
      <div className="h-screen -mt-nav w-full flex flex-col justify-center items-center dark:bg-black">
        <h1 className="leading-none text-9xl text-[10rem] font-extrabold tracking-widest">
          404
        </h1>
        <div className="bg-red-500 text-white px-2 text-sm rounded rotate-12 absolute">
          {t("title")}
        </div>
        <Link
          href="/"
          className="mt-5 text-sm font-medium border-2 border-red-500 hover:bg-red-500 hover:text-white px-8 py-3 rounded-md"
        >
          {t("go-home")}
        </Link>
      </div>
    </MainLayout>
  );
}
