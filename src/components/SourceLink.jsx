import { ExternalLink } from "lucide-react";
import { sources } from "../data/sources";
import { useLocale } from "../hooks/useLocale";
export default function SourceLink({ id }) {
  const { lang } = useLocale();
  const source = sources[id];
  return (
    <a
      className="source-link"
      href={source.url}
      target="_blank"
      rel="noopener noreferrer"
    >
      {source.label[lang]}
      <ExternalLink size={14} aria-hidden="true" />
    </a>
  );
}
