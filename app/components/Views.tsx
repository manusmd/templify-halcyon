"use client";

import type { PageKey } from "@/lib/content";
import { content, suites, heroImage, swimmingRockImage } from "@/lib/content";
import Img from "./Img";

const c = content;

/* Cover image in a clipping frame (optional hover-zoom). */
function Frame({
  image,
  alt,
  ratio,
  height,
  hover = false,
  sizes = "100vw",
}: {
  image: string;
  alt: string;
  ratio?: string;
  height?: string;
  hover?: boolean;
  sizes?: string;
}) {
  return (
    <div className={`h-frame ${hover ? "h-frame-hover" : ""}`} style={height ? { height } : { aspectRatio: ratio }}>
      <div className="h-frame-img">
        <Img src={image} alt={alt} sizes={sizes} />
      </div>
    </div>
  );
}

/* ═══════════════ HOME ═══════════════ */
export function HomeView({ onGo }: { onGo: (k: PageKey, s?: number) => void }) {
  const h = c.home;
  const featured = [0, 5, 10].map((i) => ({ i, s: suites[i] }));
  return (
    <div>
      <section className="h-hero">
        <div className="h-hero-bg" data-hero aria-hidden>
          <Img src={heroImage} alt="" priority sizes="100vw" />
          <div className="h-hero-scrim" />
        </div>
        <div className="h-hero-copy">
          <span className="h-hero-kicker">{h.kicker}</span>
          <h1 className="h-hero-title">{h.title}</h1>
          <p className="h-hero-intro">{h.intro}</p>
          <div className="h-booking">
            <label className="h-booking-field">
              <span className="h-mono-xs">Arrival</span>
              <input type="date" />
            </label>
            <label className="h-booking-field">
              <span className="h-mono-xs">Departure</span>
              <input type="date" />
            </label>
            <label className="h-booking-field h-booking-guests">
              <span className="h-mono-xs">Guests</span>
              <select defaultValue="Two">
                <option>Two</option>
                <option>One</option>
                <option>Three</option>
                <option>Four</option>
              </select>
            </label>
            <button className="h-booking-go" onClick={() => onGo("reserve")}>
              Check availability
            </button>
          </div>
        </div>
      </section>

      <section className="h-place">
        <div className="h-place-grid">
          <div data-reveal className="h-place-text">
            <span className="h-eyebrow h-accent">{h.place.kicker}</span>
            <h2 className="h-serif-h2">{h.place.heading}</h2>
            {h.place.body.map((p, i) => (
              <p key={i} className="h-place-p">
                {p}
              </p>
            ))}
            <p className="h-mono-note">{h.place.signoff}</p>
          </div>
          <figure data-reveal data-rd="160" className="h-place-fig">
            <Frame image={h.place.insetImage} alt={h.place.insetCaption} height="clamp(340px,52vh,560px)" sizes="(max-width:900px) 100vw, 40vw" />
          </figure>
        </div>
      </section>

      <section className="h-wrap h-rooms-teaser">
        <div data-reveal className="h-teaser-head">
          <div>
            <span className="h-eyebrow h-accent">{h.roomsIntro.kicker}</span>
            <h2 className="h-serif-h2">{h.roomsIntro.heading}</h2>
          </div>
          <button className="h-textlink" onClick={() => onGo("rooms")}>
            {h.roomsIntro.allLink}
          </button>
        </div>
        <div className="h-feature-grid">
          {featured.map(({ i, s }, k) => (
            <button
              key={s.n}
              className="h-card"
              data-reveal
              data-rd={String(k * 140)}
              onClick={() => onGo("suite", i)}
            >
              <Frame image={s.image} alt={s.n} height="clamp(300px,48vh,500px)" hover sizes="(max-width:900px) 100vw, 33vw" />
              <div className="h-card-meta">
                <h3 className="h-card-name">{s.n}</h3>
                <span className="h-mono h-accent">from €{s.rate}</span>
              </div>
              <p className="h-card-one">{s.one}</p>
            </button>
          ))}
        </div>
      </section>

      <section className="h-amenities">
        <div data-reveal className="h-wrap h-amenities-row">
          {h.amenities.map((a, i) => (
            <span key={a} className={i === 0 ? "h-accent" : ""}>
              {a}
            </span>
          ))}
        </div>
      </section>

      <section className="h-quote">
        <div data-reveal className="h-quote-inner">
          <span className="h-eyebrow h-faint">{h.quote.label}</span>
          <blockquote className="h-quote-text">{h.quote.text}</blockquote>
          <span className="h-mono h-muted">{h.quote.by}</span>
        </div>
      </section>

      <section className="h-fullbleed">
        <div className="h-fullbleed-bg" aria-hidden>
          <Img src={swimmingRockImage} alt="" sizes="100vw" />
          <div className="h-fullbleed-scrim" />
        </div>
        <div data-reveal className="h-fullbleed-copy">
          <h2 className="h-serif-h2 h-cream">{h.ctaHeading}</h2>
          <button className="h-btn-solid" onClick={() => onGo("reserve")}>
            Check availability
          </button>
        </div>
      </section>
    </div>
  );
}

/* ═══════════════ ROOMS ═══════════════ */
export function RoomsView({ onGo }: { onGo: (k: PageKey, s?: number) => void }) {
  const r = c.rooms;
  const groups = r.groups.map((g) => ({
    ...g,
    rooms: suites
      .map((s, i) => ({ s, i }))
      .filter(({ s }) => s.type === g.type),
  }));
  const rowH = ["clamp(280px,44vh,460px)", "clamp(240px,36vh,380px)", "clamp(320px,52vh,540px)"];
  return (
    <div className="h-page">
      <section className="h-wrap h-rooms-head">
        <div className="h-rooms-head-grid">
          <div>
            <span className="h-eyebrow h-accent">{r.kicker}</span>
            <h1 className="h-page-title">{r.heading}</h1>
          </div>
          <p className="h-rooms-intro">{r.intro}</p>
        </div>
      </section>

      {groups.map((g) => (
        <section key={g.k} className="h-wrap h-group">
          <div data-reveal className="h-group-head">
            <h2 className="h-serif-h3">{g.k}</h2>
            <span className="h-mono h-faint">{g.count}</span>
            <p className="h-group-desc">{g.c}</p>
          </div>
          <div className="h-group-rooms">
            {g.rooms.map(({ s, i }, k) => (
              <button
                key={s.n}
                className={`h-room-row ${k % 2 ? "h-room-row-rev" : ""}`}
                data-reveal
                onClick={() => onGo("suite", i)}
              >
                <div className="h-room-img" style={{ height: rowH[k % 3] }}>
                  <Frame image={s.image} alt={s.n} height="100%" hover sizes="(max-width:900px) 100vw, 55vw" />
                </div>
                <div className="h-room-info">
                  <div className="h-room-top">
                    <h3 className="h-serif-h3">{s.n}</h3>
                    <span className="h-mono h-accent">from €{s.rate}</span>
                  </div>
                  <div className="h-room-specs">
                    <span>{s.m} m²</span>
                    <span>Sleeps {s.s}</span>
                    <span>{s.view}</span>
                  </div>
                  <p className="h-room-one">{s.one}</p>
                  <span className="h-textlink">View suite →</span>
                </div>
              </button>
            ))}
          </div>
        </section>
      ))}

      <section className="h-includes">
        <div data-reveal className="h-wrap h-includes-grid">
          <h2 className="h-serif-h2 h-cream h-includes-title">{r.includesHeading}</h2>
          <div className="h-includes-list">
            {r.includes.map((it) => (
              <span key={it}>{it}</span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

/* ═══════════════ SUITE ═══════════════ */
export function SuiteView({ index, onGo }: { index: number; onGo: (k: PageKey, s?: number) => void }) {
  const s = suites[index];
  const x = c.suiteExtras;
  const facts: [string, string | number][] = [
    ["Size", `${s.m} m²`],
    ["Sleeps", s.s],
    ["Bed", s.bed],
    ["View", s.view],
    ["Floor", s.floor],
    ["Rate", `from €${s.rate}`],
  ];
  const prev = suites[(index - 1 + suites.length) % suites.length];
  const next = suites[(index + 1) % suites.length];
  const prevIdx = (index - 1 + suites.length) % suites.length;
  const nextIdx = (index + 1) % suites.length;
  return (
    <div className="h-page">
      <section className="h-wrap h-suite-head">
        <button className="h-back" onClick={() => onGo("rooms")}>
          ← All rooms
        </button>
        <div className="h-suite-head-row">
          <div>
            <span className="h-eyebrow h-accent">{s.type}</span>
            <h1 className="h-page-title">{s.n}</h1>
          </div>
          <span className="h-mono h-accent h-suite-rate">from €{s.rate} / night</span>
        </div>
      </section>

      <section className="h-wrap h-suite-hero-sec">
        <div className="h-suite-hero">
          <Img src={s.image} alt={s.caption} priority sizes="100vw" />
        </div>
        <p className="h-mono-note h-suite-caption">{s.caption}</p>
      </section>

      <section className="h-wrap h-suite-body">
        <div data-reveal className="h-suite-text">
          <p className="h-suite-lede">{s.lede}</p>
          <p className="h-suite-p">{s.p1}</p>
          <p className="h-suite-p">{s.p2}</p>
          <p className="h-suite-p">{s.p3}</p>
          <div className="h-suite-amenities">
            {x.amenities.map((a) => (
              <span key={a}>{a}</span>
            ))}
          </div>
        </div>
        <aside className="h-suite-aside">
          <div className="h-facts">
            <span className="h-eyebrow h-faint">The facts</span>
            <div className="h-facts-list">
              {facts.map(([k, v]) => (
                <div className="h-facts-row" key={k}>
                  <span className="h-mono h-faint">{k}</span>
                  <span className="h-facts-v">{v}</span>
                </div>
              ))}
            </div>
            <button className="h-btn-solid h-facts-cta" onClick={() => onGo("reserve")}>
              Reserve this suite
            </button>
            <p className="h-mono-fine">{x.reserveNote}</p>
          </div>
        </aside>
      </section>

      <section className="h-wrap h-suite-gallery-sec">
        <span data-reveal className="h-eyebrow h-accent">{x.galleryLabel}</span>
        <div className="h-suite-gallery">
          {x.gallery.map((g, i) => (
            <div key={i} className="h-gal-item" data-reveal data-rd={String(i * 110)} style={{ height: i % 2 ? "clamp(280px,44vh,470px)" : "clamp(240px,36vh,400px)" }}>
              <Frame image={g.image} alt={g.label} height="100%" hover sizes="(max-width:900px) 50vw, 25vw" />
            </div>
          ))}
        </div>
      </section>

      <section className="h-wrap h-suite-nav">
        <button className="h-suite-nav-item" onClick={() => onGo("suite", prevIdx)}>
          <span className="h-mono h-faint">← Previous</span>
          <p className="h-suite-nav-name">{prev.n}</p>
        </button>
        <button className="h-suite-nav-item h-suite-nav-next" onClick={() => onGo("suite", nextIdx)}>
          <span className="h-mono h-faint">Next →</span>
          <p className="h-suite-nav-name">{next.n}</p>
        </button>
      </section>
    </div>
  );
}

/* ═══════════════ EXPERIENCE ═══════════════ */
export function ExperienceView() {
  const e = c.experience;
  return (
    <div className="h-page">
      <section className="h-wrap h-exp-head">
        <div className="h-exp-head-grid">
          <div>
            <span className="h-eyebrow h-accent">{e.kicker}</span>
            <h1 className="h-page-title">{e.heading}</h1>
          </div>
          <p className="h-rooms-intro">{e.intro}</p>
        </div>
      </section>

      <section className="h-dining">
        <div className="h-wrap h-dining-grid">
          <div data-reveal className="h-dining-text">
            <span className="h-eyebrow h-accent">{e.dining.kicker}</span>
            <h2 className="h-serif-h2 h-cream">{e.dining.heading}</h2>
            {e.dining.body.map((p, i) => (
              <p key={i} className="h-dining-p">
                {p}
              </p>
            ))}
            <div className="h-menu">
              {e.dining.menu.map((m) => (
                <div key={m.no} className="h-menu-row">
                  <span className="h-mono h-accent h-menu-no">{m.no}</span>
                  <span className="h-menu-dish">{m.dish}</span>
                </div>
              ))}
              <span className="h-mono-fine h-cream-dim">{e.dining.menuNote}</span>
            </div>
          </div>
          <figure data-reveal data-rd="150" className="h-dining-fig">
            <Frame image={e.dining.image} alt={e.dining.caption} height="clamp(340px,58vh,620px)" sizes="(max-width:900px) 100vw, 40vw" />
          </figure>
        </div>
      </section>

      <section className="h-wrap h-exp-list">
        {e.experiences.map((x, k) => (
          <div key={x.no} className={`h-exp-row ${k % 2 ? "h-exp-row-rev" : ""}`} data-reveal>
            <div className="h-exp-img">
              <Frame image={x.image} alt={x.t} height="clamp(280px,46vh,500px)" hover sizes="(max-width:900px) 100vw, 45vw" />
            </div>
            <div className="h-exp-info">
              <span className="h-mono h-accent">{x.no}</span>
              <h3 className="h-serif-h3">{x.t}</h3>
              <p className="h-exp-d">{x.d}</p>
              <span className="h-mono h-faint">{x.meta}</span>
            </div>
          </div>
        ))}
      </section>

      <section className="h-wrap h-getting">
        <div data-reveal className="h-getting-col">
          <span className="h-eyebrow h-accent">{e.gettingHere.kicker}</span>
          <h2 className="h-serif-h3">{e.gettingHere.heading}</h2>
          <div className="h-travel">
            {e.gettingHere.travel.map((t) => (
              <div className="h-travel-row" key={t.k}>
                <span className="h-mono h-faint">{t.k}</span>
                <span className="h-facts-v">{t.v}</span>
              </div>
            ))}
          </div>
          <p className="h-getting-note">{e.gettingHere.note}</p>
        </div>

        <div data-reveal data-rd="140" className="h-map" aria-hidden>
          <div className="h-map-sea" />
          <div className="h-map-road" />
          <div className="h-map-dot" />
          <div className="h-map-dot h-map-pulse" />
          <span className="h-map-label">Halcyon</span>
          <span className="h-map-coords">{e.gettingHere.coords}</span>
        </div>

        <div data-reveal data-rd="220" className="h-nearby">
          <span className="h-eyebrow h-accent">Nearby</span>
          <div className="h-nearby-list">
            {e.nearby.map((n) => (
              <div key={n.t} className="h-nearby-row">
                <p className="h-nearby-t">{n.t}</p>
                <span className="h-mono h-faint">{n.d}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

/* ═══════════════ RESERVE ═══════════════ */
export function ReserveView({
  sent,
  onSubmit,
}: {
  sent: boolean;
  onSubmit: (e: React.FormEvent) => void;
}) {
  const r = c.reserve;
  const roomOptions = ["Any available room", ...suites.map((s) => `${s.n} — from €${s.rate}`)];
  return (
    <div className="h-page">
      <section className="h-wrap h-reserve-head">
        <span className="h-eyebrow h-accent">{r.kicker}</span>
        <h1 className="h-page-title">{r.heading}</h1>
      </section>

      <section className="h-wrap h-reserve-body">
        <form className="h-form" onSubmit={onSubmit}>
          <div className="h-form-row">
            <label className="h-field">
              <span className="h-mono-xs">Arrival</span>
              <input type="date" required />
            </label>
            <label className="h-field">
              <span className="h-mono-xs">Departure</span>
              <input type="date" required />
            </label>
          </div>
          <div className="h-form-row">
            <label className="h-field">
              <span className="h-mono-xs">Guests</span>
              <select defaultValue="Two">
                <option>Two</option>
                <option>One</option>
                <option>Three</option>
                <option>Four</option>
              </select>
            </label>
            <label className="h-field h-field-wide">
              <span className="h-mono-xs">Room</span>
              <select defaultValue={roomOptions[0]}>
                {roomOptions.map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            </label>
          </div>
          <div className="h-form-row">
            <label className="h-field">
              <span className="h-mono-xs">Name</span>
              <input type="text" required placeholder="First and last" />
            </label>
            <label className="h-field">
              <span className="h-mono-xs">Email</span>
              <input type="email" required placeholder="you@email.com" />
            </label>
          </div>
          <label className="h-field">
            <span className="h-mono-xs">Anything we should know</span>
            <textarea rows={3} placeholder="Late arrival, a birthday, something you cannot eat." />
          </label>
          <button type="submit" className="h-btn-solid h-form-submit">
            Request these dates
          </button>
          {sent && <p className="h-sent">{r.sent}</p>}
          <p className="h-mono-fine">{r.depositNote}</p>
        </form>

        <aside className="h-reserve-aside">
          <div className="h-rates">
            <span className="h-eyebrow h-accent">Rates 2026</span>
            <div className="h-rates-list">
              {r.rates2026.map((rt) => (
                <div key={rt.k} className="h-rates-row">
                  <span className="h-serif-sm">{rt.k}</span>
                  <span className="h-mono h-cream">{rt.v}</span>
                </div>
              ))}
            </div>
            <p className="h-rates-note">{r.ratesNote}</p>
          </div>
          <div className="h-write">
            <span className="h-eyebrow h-faint">{r.writeLabel}</span>
            <p className="h-write-email">{c.contact.email}</p>
            <div className="h-write-lines">
              <span>{c.contact.phone}</span>
              {c.contact.addressLines.map((l) => (
                <span key={l}>{l}</span>
              ))}
              <span>{c.contact.reception}</span>
            </div>
          </div>
        </aside>
      </section>
    </div>
  );
}

/* ═══════════════ FOOTER ═══════════════ */
export function Footer({ onGo }: { onGo: (k: PageKey) => void }) {
  const f = c.footer;
  return (
    <footer className="h-footer">
      <div className="h-wrap">
        <div className="h-footer-grid">
          <div className="h-footer-brand-col">
            <span className="h-wordmark h-footer-mark">{c.brand}</span>
            <p className="h-footer-tag">{f.tagline}</p>
          </div>
          <div className="h-footer-nav">
            {c.nav.map((n) => (
              <button key={n.key} onClick={() => onGo(n.key)}>
                {n.label}
              </button>
            ))}
          </div>
          <div className="h-footer-contact">
            {c.contact.addressLines.map((l) => (
              <span key={l}>{l}</span>
            ))}
            <span>{c.contact.phone}</span>
            <span>{c.contact.email}</span>
          </div>
        </div>
        <div className="h-footer-bottom">
          {f.bottom.map((b) => (
            <span key={b}>{b}</span>
          ))}
        </div>
      </div>
    </footer>
  );
}
