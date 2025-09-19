"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

import Spline from "@splinetool/react-spline";

export default function SplineLazy({
  scene,
  mobileScene,
}: {
  scene: string;
  mobileScene?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [isSmall, setIsSmall] = useState(false);

  useEffect(() => {
    // avoid auto-loading on small screens
    const m = window.matchMedia("(max-width: 768px)");
    setIsSmall(m.matches);
    const onChange = () => setIsSmall(m.matches);
    m.addEventListener("change", onChange);
    return () => m.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (shouldLoad) return;
    if (!ref.current) return;

    const node = ref.current;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldLoad(true);
            obs.disconnect();
          }
        });
      },
      { threshold: 0.25 }
    );

    obs.observe(node);
    return () => obs.disconnect();
  }, [ref, shouldLoad]);

  const selectedScene = isSmall && mobileScene ? mobileScene : scene;

  return (
    <div ref={ref} className="w-full h-full">
      {isSmall && !shouldLoad ? (
        <div className="w-full h-full flex items-center justify-center">
          <button
            className="px-4 py-2 bg-white/6 text-white rounded"
            onClick={() => setShouldLoad(true)}
          >
            Load 3D
          </button>
        </div>
      ) : shouldLoad ? (
        // dynamic import types can be finicky; cast to any for runtime props
        (() => {
          const S = Spline as any;
          return <S scene={selectedScene} />;
        })()
      ) : (
        <div className="w-full h-full bg-gradient-to-b from-black/40 to-black/10 flex items-center justify-center">
          <div className="w-20 h-20 rounded-lg bg-white/3 animate-pulse" />
        </div>
      )}
    </div>
  );
}
