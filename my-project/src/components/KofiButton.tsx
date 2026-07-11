"use client";

import Script from "next/script";
import { useRef } from "react";

declare global {
  interface Window {
    kofiwidget2: {
      init: (text: string, color: string, id: string) => void;
      getHTML: () => string;
    };
  }
}

export default function KofiButton() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef}>
      <Script
        src="https://storage.ko-fi.com/cdn/widget/Widget_2.js"
        strategy="lazyOnload"
        onLoad={() => {
          window.kofiwidget2.init("Support me on Ko-fi", "#72a4f2", "Q8A622YPQD");
          if (containerRef.current) {
            containerRef.current.innerHTML = window.kofiwidget2.getHTML();
          }
        }}
      />
    </div>
  );
}
