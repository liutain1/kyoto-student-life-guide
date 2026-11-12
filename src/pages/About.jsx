import { Link } from "react-router-dom";
import { ArrowUpRight, MessageSquareText, Equal } from "lucide-react";
import { useLocale } from "../hooks/useLocale";
import SourceLink from "../components/SourceLink";
import { config } from "../data/config";
export default function About() {
  const { t, content } = useLocale();
  const a = content.about;
  return (
    <div className="container about-page">
      <div className="breadcrumbs">
        <Link to="/">{t.home}</Link>
        <span>/</span>
        {t.about}
      </div>
      <header className="about-hero">
        <span className="eyebrow">{t.aboutEyebrow}</span>
        <h1>{a.title}</h1>
        <p>{a.intro}</p>
        <div className="about-tags">
          <span>KCGI</span>
          <span>Leadership Theory</span>
          <span>Group 39</span>
          <span>SDGs 10</span>
        </div>
      </header>
      <section className="about-sdg">
        <div className="sdg-symbol">
          <span>10</span>
          <Equal size={45} />
        </div>
        <div>
          <h2>{t.sdgGoal}</h2>
          <p>{t.sdgBody}</p>
          <SourceLink id="sdg" />
        </div>
      </section>
      <div className="about-grid">
        {a.sections.map((s, i) => (
          <section key={s.title}>
            <span className="eyebrow">0{i + 1}</span>
            <h2>{s.title}</h2>
            <p>{s.body}</p>
          </section>
        ))}
      </div>
      <section id="feedback" className="feedback-panel">
        <MessageSquareText size={32} />
        <h2>{t.feedbackTitle}</h2>
        <p>{t.feedbackBody}</p>
        {config.feedbackUrl ? (
          <a
            className="button primary"
            href={config.feedbackUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.feedbackReady}
            <ArrowUpRight size={18} />
          </a>
        ) : (
          <span className="pending-badge" role="status">
            {t.feedbackPending}
          </span>
        )}
      </section>
    </div>
  );
}
