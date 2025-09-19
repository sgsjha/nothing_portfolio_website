"use client";

import { useEffect, useState } from "react";

export default function AnalyticsLazy() {
  const [Comp, setComp] = useState<null | ((props: any) => JSX.Element)>(null);

  useEffect(() => {
    const onLoad = () => {
      const win: any = window as any;
      const schedule =
        typeof win.requestIdleCallback === "function"
          ? (cb: () => void) => win.requestIdleCallback(cb, { timeout: 3000 })
          : (cb: () => void) => setTimeout(cb, 1200);

      schedule(() => {
        import("@vercel/analytics/react")
          .then((m: any) => setComp(() => (m.Analytics ?? m.default ?? (() => null))))
          .catch(() => setComp(() => null));
      });
    };

    if (document.readyState === "complete") onLoad();
    else window.addEventListener("load", onLoad, { once: true });
    return () => window.removeEventListener("load", onLoad);
  }, []);

  if (!Comp) return null;
  const A = Comp as any;
  return <A />;
}
