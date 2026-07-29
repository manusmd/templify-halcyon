"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Lenis from "lenis";
import type { PageKey } from "@/lib/content";
import Header from "./components/Header";
import {
  HomeView,
  RoomsView,
  SuiteView,
  ExperienceView,
  ReserveView,
  Footer,
} from "./components/Views";

const reducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export default function App() {
  const [page, setPage] = useState<PageKey>("home");
  const [suite, setSuite] = useState(0);
  const [menu, setMenu] = useState(false);
  const [sent, setSent] = useState(false);
  const [fade, setFade] = useState(false);
  const lenisRef = useRef<Lenis | null>(null);

  const revealNow = useCallback(() => {
    const vh = window.innerHeight;
    document
      .querySelectorAll<HTMLElement>("[data-reveal]:not(.is-in)")
      .forEach((el) => {
        if (el.getBoundingClientRect().top < vh * 0.92) {
          const d = parseInt(el.dataset.rd || "0", 10);
          if (d) el.style.transitionDelay = `${d}ms`;
          el.classList.add("is-in");
        }
      });
  }, []);

  // ---- Lenis + hero parallax / reveal / progress loop ----
  useEffect(() => {
    if (reducedMotion()) return;
    const lenis = new Lenis({ lerp: 0.1, smoothWheel: true, autoRaf: false });
    lenisRef.current = lenis;
    let raf = 0;
    const loop = (time: number) => {
      lenis.raf(time);
      const y = window.scrollY;

      const hero = document.querySelector<HTMLElement>("[data-hero]");
      if (hero) hero.style.transform = `translate3d(0,${(y * 0.16).toFixed(1)}px,0)`;

      revealNow();

      const max = document.documentElement.scrollHeight - window.innerHeight;
      const bar = document.querySelector<HTMLElement>("[data-progress]");
      if (bar) bar.style.width = (max > 0 ? Math.min(1, y / max) * 100 : 0) + "%";

      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, [revealNow]);

  const scrollTop = () => {
    if (lenisRef.current) lenisRef.current.scrollTo(0, { immediate: true });
    else window.scrollTo(0, 0);
  };

  const go = (next: PageKey, suiteIdx?: number) => {
    setMenu(false);
    if (next === page && suiteIdx === undefined) {
      scrollTop();
      return;
    }
    const apply = () => {
      if (suiteIdx !== undefined) setSuite(suiteIdx);
      setSent(false);
      setPage(next);
      scrollTop();
      setFade(false);
      requestAnimationFrame(() => requestAnimationFrame(revealNow));
    };
    if (reducedMotion()) {
      apply();
      return;
    }
    setFade(true);
    setTimeout(apply, 260);
  };

  // ---- Mobile menu: lock scroll + pause Lenis while open, Esc to close ----
  useEffect(() => {
    const lenis = lenisRef.current;
    if (menu) {
      lenis?.stop();
      document.documentElement.style.overflow = "hidden";
      const onKey = (e: KeyboardEvent) => {
        if (e.key === "Escape") setMenu(false);
      };
      window.addEventListener("keydown", onKey);
      return () => {
        lenis?.start();
        document.documentElement.style.overflow = "";
        window.removeEventListener("keydown", onKey);
      };
    }
    document.documentElement.style.overflow = "";
  }, [menu]);

  return (
    <div className="h-root">
      <div className="h-progress" aria-hidden>
        <div className="h-progress-bar" data-progress />
      </div>

      <Header
        page={page}
        onGo={go}
        menuOpen={menu}
        onToggle={() => setMenu((o) => !o)}
      />

      <main
        className="h-main"
        style={{ opacity: fade ? 0 : 1, transform: fade ? "translateY(10px)" : "none" }}
        key={page + (page === "suite" ? `-${suite}` : "")}
      >
        {page === "home" && <HomeView onGo={go} />}
        {page === "rooms" && <RoomsView onGo={go} />}
        {page === "suite" && <SuiteView index={suite} onGo={go} />}
        {page === "experience" && <ExperienceView />}
        {page === "reserve" && (
          <ReserveView
            sent={sent}
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
          />
        )}
        <Footer onGo={go} />
      </main>
    </div>
  );
}
