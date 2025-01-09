"use client";
import Script from "next/script";
export default function InteractiveBackground() {
  return (
    <div>
      <canvas className="fixed w-full h-full z-0" />
      <Script src="./background-scripts/config.js" />
      <Script src="./background-scripts/shaders.js" />
      <Script
        src="./background-scripts/script.js"
        crossOrigin="anonymous"
        type="module"
        strategy="afterInteractive"
      />
    </div>
  );
}
