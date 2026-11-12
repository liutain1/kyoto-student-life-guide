import { Link } from "react-router-dom";
import { useLocale } from "../hooks/useLocale";
export default function NotFound() {
  const { t } = useLocale();
  return (
    <div className="container not-found">
      <span className="eyebrow">404</span>
      <h1>{t.notFound}</h1>
      <Link className="button primary" to="/">
        {t.backHome}
      </Link>
    </div>
  );
}
