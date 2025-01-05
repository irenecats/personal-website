"use client";
import Script from "next/script";
export default function InteractiveBackground() {
  return (
    <>
      <canvas className="absolute w-full h-full" />
      <Script src="./background/config.js" />
      <Script src="./background/shaders.js" />
      <Script
        src="./background/script.js"
        crossOrigin="anonymous"
        type="module"
        strategy="afterInteractive"
      />
    </>
  );
}
