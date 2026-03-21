"use client";

import { ReactLenis } from "lenis/react";

export default function SmoothScroll({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReactLenis
      root
      options={{
        duration: 1.1,
        smoothWheel: true,
        touchMultiplier: 1.1,
      }}
    >
      {children}
    </ReactLenis>
  );
}
