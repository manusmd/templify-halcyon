"use client";

import type { PageKey } from "@/lib/content";
import { content } from "@/lib/content";

export default function Header({
  page,
  onGo,
  menuOpen,
  onToggle,
}: {
  page: PageKey;
  onGo: (k: PageKey) => void;
  menuOpen: boolean;
  onToggle: () => void;
}) {
  const activeKey: PageKey = page === "suite" ? "rooms" : page;
  const topNav = content.nav.slice(0, 3); // The Hotel / Rooms / Experience

  return (
    <>
      <header className="h-header">
        <div className="h-header-inner">
          <button className="h-brand" onClick={() => onGo("home")} aria-label="Halcyon — home">
            <span className="h-wordmark">{content.brand}</span>
            <span className="h-folio">{content.folio}</span>
          </button>

          <nav className="h-nav" aria-label="Primary">
            {topNav.map((n) => (
              <button
                key={n.key}
                className="h-nav-item"
                data-active={activeKey === n.key}
                onClick={() => onGo(n.key)}
              >
                {n.label}
              </button>
            ))}
            <button className="h-nav-reserve" onClick={() => onGo("reserve")}>
              Reserve
            </button>
          </nav>

          <button
            className={`h-burger ${menuOpen ? "is-open" : ""}`}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={onToggle}
          >
            <span />
            <span />
          </button>
        </div>
      </header>

      <div className={`h-menu ${menuOpen ? "is-open" : ""}`} role="dialog" aria-label="Menu" aria-hidden={!menuOpen}>
        <div className="h-menu-nav">
          {content.nav.map((n) => (
            <button
              key={n.key}
              className="h-menu-item"
              tabIndex={menuOpen ? 0 : -1}
              onClick={() => onGo(n.key)}
            >
              <span className="h-menu-num">{n.num}</span>
              <span className="h-menu-label">{n.label}</span>
            </button>
          ))}
        </div>
        <div className="h-menu-foot">
          <span>{content.contact.region}</span>
          <span>{content.contact.phone}</span>
          <span>{content.contact.email}</span>
        </div>
      </div>
    </>
  );
}
