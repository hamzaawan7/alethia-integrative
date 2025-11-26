import { useEffect, useRef } from "react";

interface TemplateMountProps {
  html: string;
  styles: string[];
}

export default function TemplateMount({ html, styles }: TemplateMountProps) {
  const hostRef = useRef<HTMLDivElement | null>(null);
  const shadowRef = useRef<ShadowRoot | null>(null);

  useEffect(() => {
    if (!hostRef.current) return;
    if (!shadowRef.current) {
      shadowRef.current = hostRef.current.attachShadow({ mode: "open" });
    }
    const shadow = shadowRef.current!;

    // Clear previous content
    while (shadow.firstChild) shadow.removeChild(shadow.firstChild);

    // Append styles into shadow root
    styles.forEach((styleHtml) => {
      const wrap = document.createElement("div");
      wrap.innerHTML = styleHtml;
      const styleEl = wrap.querySelector("style");
      if (styleEl) shadow.appendChild(styleEl);
    });

    // Append content
    const contentWrap = document.createElement("div");
    contentWrap.innerHTML = html;
    shadow.appendChild(contentWrap);

    return () => {
      while (shadow.firstChild) shadow.removeChild(shadow.firstChild);
    };
  }, [html, styles]);

  return <div ref={hostRef} />;
}
