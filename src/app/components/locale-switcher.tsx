"use client";

import { useRouter } from "next/navigation";
import { localeOptions } from "../static-info/localeOptions";

export default function LocaleSwitcher() {
  const router = useRouter();

  function onLocaleChange(lang: string): void {
    router.push(lang, { scroll: false });
  }

  return (
    <>
      {localeOptions.map((lang) => (
        <button
          key={lang}
          className="uppercase pointer-events-auto"
          onClick={() => {
            onLocaleChange(lang);
          }}
        >
          {lang}
        </button>
      ))}
    </>
  );
}
