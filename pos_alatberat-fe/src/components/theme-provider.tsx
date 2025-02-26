"use client";

import { useEffect } from "react";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Setup media query untuk dark mode
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    // Function untuk update theme
    const updateTheme = (e: MediaQueryListEvent | MediaQueryList) => {
      const root = document.documentElement;
      root.classList.remove("light", "dark");
      root.classList.add(e.matches ? "dark" : "light");
    };

    // check theme
    updateTheme(mediaQuery);

    // Listener untuk perubahan system theme
    mediaQuery.addEventListener("change", updateTheme);

    // Clean saat unmount
    return () => mediaQuery.removeEventListener("change", updateTheme);
  }, []);

  return children;
}
