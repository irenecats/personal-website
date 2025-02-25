"use client";

import { useRouter } from "next/navigation";
import { localeOptions } from "../static-info/localeOptions";
import { useLocale } from "next-intl";

export default function LocaleSwitcher() {
  const router = useRouter();
  const locale = useLocale();

  function onLocaleChange(lang: string): void {
    router.push(lang, { scroll: false });
  }

  const other = localeOptions.filter((elem) => elem != locale);

  return (
    <button
      className="roundButton fixed bottom-4 right-4 z-10"
      onClick={() => {
        onLocaleChange(other[0]);
      }}
    >
      {locale}
    </button>
  );
}
