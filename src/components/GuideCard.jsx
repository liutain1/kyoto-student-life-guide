import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { GuideIcon } from "./Icons";
import { useLocale } from "../hooks/useLocale";
export default function GuideCard({ guide, index = 0 }) {
  const { t } = useLocale();
  return (
    <Link to={`/guide/${guide.id}`} className={`guide-card guide-${guide.id}`}>
      <div className="card-top">
        <span className="icon-box">
          <GuideIcon id={guide.id} size={27} />
        </span>
        <span className="card-number">0{index + 1}</span>
      </div>
      <h3>
        {guide.title}
        <ArrowUpRight size={18} />
      </h3>
      <p>{guide.summary}</p>
      <span className="card-link">
        {t.readGuide}
        <ArrowRight size={15} />
      </span>
    </Link>
  );
}
