import { Link } from "react-router-dom";
import { ArrowUpRight, ClipboardCheck } from "lucide-react";
import { useLocale } from "../hooks/useLocale";
import { usePersistentState } from "../hooks/usePersistentState";
export default function Checklist() {
  const { t, content } = useLocale();
  const [checked, setChecked, error] = usePersistentState(
    "kyoto-guide-checklist-v1",
    [],
    (v) =>
      Array.isArray(v) &&
      v.every((id) => content.checkItems.some((item) => item.id === id)),
  );
  return (
    <section id="checklist" className="checklist-section section-space">
      <div className="checklist-intro">
        <span className="eyebrow">{t.stepsLabel}</span>
        <h2>{t.checklist}</h2>
        <p>{t.checkIntro}</p>
        <div className="progress-meta">
          <ClipboardCheck size={20} />
          <span>
            <strong>{checked.length}</strong> / {content.checkItems.length}{" "}
            {t.completed}
          </span>
        </div>
        <progress
          aria-label={t.checklist}
          max={content.checkItems.length}
          value={checked.length}
        />
        <p className="small muted">{t.saved}</p>
        {error && (
          <p role="status" className="storage-warning">
            {t.storageError}
          </p>
        )}
      </div>
      <div className="checklist-items">
        {content.checkItems.map((item, i) => (
          <div
            className={`check-row ${checked.includes(item.id) ? "checked" : ""}`}
            key={item.id}
          >
            <label>
              <input
                type="checkbox"
                checked={checked.includes(item.id)}
                onChange={() =>
                  setChecked((prev) =>
                    prev.includes(item.id)
                      ? prev.filter((id) => id !== item.id)
                      : [...prev, item.id],
                  )
                }
              />
              <span>
                <span className="check-title">{item.title}</span>
                <span className="check-body">{item.body}</span>
              </span>
            </label>
            <Link
              to={`/guide/${item.guide}`}
              aria-label={`${item.title} — ${t.readGuide}`}
            >
              <ArrowUpRight size={19} />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
