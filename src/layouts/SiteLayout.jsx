import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { ArrowUp, Globe2, Menu, X, ArrowUpRight } from "lucide-react";
import { BrandMark } from "../components/Icons";
import { useLocale } from "../hooks/useLocale";
import { languages } from "../locales";
export default function SiteLayout() {
  const { t, content, lang, setLang, storageError } = useLocale();
  const [open, setOpen] = useState(false);
  const [showTop, setShowTop] = useState(false);
  const location = useLocation();
  useEffect(() => {
    setOpen(false);
    if (!location.hash) window.scrollTo(0, 0);
    else
      requestAnimationFrame(() =>
        document.getElementById(location.hash.slice(1))?.scrollIntoView(),
      );
    document.getElementById("main")?.focus({ preventScroll: true });
  }, [location.pathname, location.hash, location.key]);
  useEffect(() => {
    const scroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", scroll, { passive: true });
    return () => window.removeEventListener("scroll", scroll);
  }, []);
  useEffect(() => {
    const title = location.pathname.startsWith("/guide/")
      ? content.guides.find((g) => location.pathname === `/guide/${g.id}`)
          ?.title
      : location.pathname === "/about"
        ? t.about
        : t.home;
    document.title = `${title || t.notFound} | ${t.brand}`;
  }, [location.pathname, t, content]);
  return (
    <>
      <a
        className="skip-link"
        href="#main"
        onClick={(e) => {
          e.preventDefault();
          document.getElementById("main")?.focus();
        }}
      >
        {t.skip}
      </a>
      <div className="top-strip">
        <div className="container">
          <span>KCGI · LEADERSHIP THEORY · GROUP 39</span>
          <span>
            SDGs 10 <span className="strip-dot" /> {t.sdgGoal}
          </span>
        </div>
      </div>
      <header className="site-header">
        <div className="container header-main">
          <Link to="/" className="brand">
            <BrandMark />
            <span>
              <strong>{t.brand}</strong>
              <small>INTERNATIONAL STUDENT LIFE GUIDE</small>
            </span>
          </Link>
          <nav aria-label={t.menu} className="desktop-nav">
            <NavLink to="/" end>
              {t.home}
            </NavLink>
            <Link to="/#guides">{t.guides}</Link>
            <NavLink to="/about">{t.about}</NavLink>
          </nav>
          <div className="header-actions">
            <label className="language-select">
              <Globe2 size={17} aria-hidden="true" />
              <span className="sr-only">{t.language}</span>
              <select
                value={lang}
                onChange={(e) => setLang(e.target.value)}
                aria-label={t.language}
              >
                {languages.map((l) => (
                  <option key={l.id} value={l.id}>
                    {l.label}
                  </option>
                ))}
              </select>
            </label>
            <button
              className="mobile-toggle"
              aria-label={t.menu}
              aria-expanded={open}
              aria-controls="mobile-nav"
              onClick={() => setOpen(!open)}
            >
              {open ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {open && (
          <nav
            id="mobile-nav"
            className="mobile-nav container"
            aria-label={t.menu}
          >
            <NavLink to="/" onClick={() => setOpen(false)}>
              {t.home}
            </NavLink>
            {content.guides.map((g) => (
              <NavLink
                key={g.id}
                to={`/guide/${g.id}`}
                onClick={() => setOpen(false)}
              >
                {g.title}
              </NavLink>
            ))}
            <NavLink to="/about" onClick={() => setOpen(false)}>
              {t.about}
            </NavLink>
          </nav>
        )}
      </header>
      {storageError && (
        <p role="status" className="container storage-warning">
          {t.storageError}
        </p>
      )}
      <main id="main" tabIndex="-1">
        <Outlet />
      </main>
      <footer>
        <div className="container footer-main">
          <div className="footer-brand">
            <Link to="/" className="brand">
              <BrandMark />
              <span>
                <strong>{t.brand}</strong>
                <small>INTERNATIONAL STUDENT LIFE GUIDE</small>
              </span>
            </Link>
            <p>{t.footerTag}</p>
            <p className="small">{t.footer}</p>
          </div>
          <div className="footer-links">
            <h3>{t.guides}</h3>
            {content.guides.map((g) => (
              <Link key={g.id} to={`/guide/${g.id}`}>
                {g.title}
              </Link>
            ))}
          </div>
          <div className="footer-links">
            <h3>KCGI · GROUP 39</h3>
            <Link to="/about">
              {t.about}
              <ArrowUpRight size={14} />
            </Link>
            <Link to="/about#feedback">{t.feedbackTitle}</Link>
            <p className="small">{t.privacy}</p>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>© 2026 KCGI Leadership Theory · Group 39</span>
          <span>{t.madeFor}</span>
        </div>
      </footer>
      {showTop && (
        <button
          className="back-top"
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: window.matchMedia("(prefers-reduced-motion: reduce)")
                .matches
                ? "instant"
                : "smooth",
            })
          }
          aria-label={t.backTop}
        >
          <ArrowUp size={20} />
        </button>
      )}
    </>
  );
}
