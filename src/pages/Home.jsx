import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Search, MapPin, Info, Equal, Check } from "lucide-react";
import { useLocale } from "../hooks/useLocale";
import GuideCard from "../components/GuideCard";
import KyotoScene from "../components/KyotoScene";
import Checklist from "../components/Checklist";
import { searchGuides } from "../utils/search";
export default function Home() {
  const { t, content } = useLocale();
  const [query, setQuery] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const results = searchGuides(content.guides, query);
  function submit(e) {
    e.preventDefault();
    setSubmitted(true);
    document.getElementById("guides")?.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="hero-badge">
              <span /> {t.heroEyebrow}
            </span>
            <h1>{t.heroTitle}</h1>
            <p>{t.heroBody}</p>
            <div className="hero-buttons">
              <Link className="button primary" to="/#guides">
                {t.start}
                <ArrowRight size={18} />
              </Link>
              <Link className="text-button" to="/#checklist">
                {t.checkCta}
                <ArrowRight size={17} />
              </Link>
            </div>
            <div className="hero-languages">
              <span>
                <Check size={14} />
                日本語
              </span>
              <span>简体中文</span>
              <span>English</span>
            </div>
          </div>
          <KyotoScene />
        </div>
      </section>
      <div className="container">
        <section className="search-panel">
          <div className="search-heading">
            <Search size={22} />
            <h2>{t.searchLabel}</h2>
          </div>
          <form onSubmit={submit} role="search">
            <label className="sr-only" htmlFor="guide-search">
              {t.searchLabel}
            </label>
            <input
              id="guide-search"
              type="search"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setSubmitted(true);
              }}
              placeholder={t.searchPlaceholder}
            />
            <button className="button primary" type="submit">
              <Search size={18} />
              {t.search}
            </button>
          </form>
          <div className="popular">
            <span>{t.popular}</span>
            {content.guides.slice(0, 3).map((g) => (
              <button
                key={g.id}
                onClick={() => {
                  setQuery(g.title);
                  setSubmitted(true);
                }}
              >
                {g.title}
                <ArrowRight size={12} />
              </button>
            ))}
          </div>
        </section>
        <section id="guides" className="section-space guides-section">
          <div className="section-heading">
            <div>
              <span className="eyebrow">{t.lifeEyebrow}</span>
              <h2>{query.trim() ? t.results : t.exploreTitle}</h2>
              <p>{t.exploreBody}</p>
            </div>
            <span className="section-caption">
              <MapPin size={15} /> KYOTO, JAPAN
            </span>
          </div>
          {submitted && (
            <div className="results-status" role="status">
              {t.results}: {results.length} / 5{" "}
              {query && (
                <button
                  onClick={() => {
                    setQuery("");
                    setSubmitted(false);
                  }}
                >
                  {t.clear}
                </button>
              )}
            </div>
          )}
          <div className="guide-grid">
            {results.map((g) => (
              <GuideCard
                key={g.id}
                guide={g}
                index={content.guides.findIndex((item) => item.id === g.id)}
              />
            ))}
          </div>
          {results.length === 0 && (
            <div className="empty-state">
              <Search size={30} />
              <p>{t.noResults}</p>
            </div>
          )}
          <div className="notice">
            <Info size={18} />
            <span>{t.notice}</span>
          </div>
        </section>
        <Checklist />
        <section className="sdg-banner">
          <div className="sdg-symbol">
            <span>10</span>
            <Equal size={42} />
            <small>
              REDUCED
              <br />
              INEQUALITIES
            </small>
          </div>
          <div>
            <span className="eyebrow">{t.purposeEyebrow}</span>
            <h2>{t.sdgTitle}</h2>
            <p>{t.sdgBody}</p>
          </div>
          <Link className="text-button" to="/about">
            {t.about}
            <ArrowRight size={18} />
          </Link>
        </section>
      </div>
    </>
  );
}
