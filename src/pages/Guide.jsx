import { Link, useParams } from "react-router-dom";
import { ChevronRight, Info, Plus } from "lucide-react";
import { useLocale } from "../hooks/useLocale";
import { GuideIcon } from "../components/Icons";
import SourceLink from "../components/SourceLink";
import GuideCard from "../components/GuideCard";
import { config } from "../data/config";
import NotFound from "./NotFound";
export default function Guide() {
  const { id } = useParams();
  const { t, content } = useLocale();
  const guide = content.guides.find((g) => g.id === id);
  if (!guide) return <NotFound />;
  return (
    <div className="container guide-page">
      <div className="breadcrumbs">
        <Link to="/">{t.home}</Link>
        <ChevronRight size={14} />
        <span>{guide.title}</span>
      </div>
      <header className={`page-heading guide-${id}`}>
        <span className="icon-box">
          <GuideIcon id={id} size={32} />
        </span>
        <div>
          <span className="eyebrow">
            KYOTO LIFE GUIDE / 0{content.guides.indexOf(guide) + 1}
          </span>
          <h1>{guide.title}</h1>
          <p>{guide.summary}</p>
          <span className="small muted">
            {t.updated}: {config.reviewedAt}
          </span>
        </div>
      </header>
      <div className="article-layout">
        <aside className="toc">
          <h2>{t.toc}</h2>
          <nav>
            {guide.sections.map((s, i) => (
              <Link key={i} to={`/guide/${id}#section-${i}`}>
                <span>{String(i + 1).padStart(2, "0")}</span>
                {s.title}
              </Link>
            ))}
            <Link to={`/guide/${id}#faq`}>
              <span>?</span>
              {t.faq}
            </Link>
          </nav>
        </aside>
        <div className="article-content">
          <div className="notice">
            <Info size={20} />
            <span>{t.notice}</span>
          </div>
          {guide.sections.map((s, i) => (
            <section id={`section-${i}`} className="article-section" key={i}>
              <div className="article-title">
                <span>{String(i + 1).padStart(2, "0")}</span>
                <h2>{s.title}</h2>
              </div>
              <p>{s.body}</p>
              <SourceLink id={s.source} />
            </section>
          ))}
          <section id="faq" className="faq">
            <h2>{t.faq}</h2>
            {guide.faq.map((f, i) => (
              <details key={`${id}-${i}`}>
                <summary>
                  <span>
                    <b>Q.</b>
                    {f.q}
                  </span>
                  <Plus size={18} />
                </summary>
                <p>{f.a}</p>
              </details>
            ))}
          </section>
        </div>
      </div>
      <section className="related section-space">
        <h2>{t.related}</h2>
        <div className="guide-grid">
          {content.guides
            .filter((g) => g.id !== id)
            .slice(0, 3)
            .map((g) => (
              <GuideCard
                key={g.id}
                guide={g}
                index={content.guides.indexOf(g)}
              />
            ))}
        </div>
      </section>
    </div>
  );
}
