import {
  Landmark,
  HeartPulse,
  TramFront,
  BriefcaseBusiness,
  House,
} from "lucide-react";
const icons = {
  bank: Landmark,
  health: HeartPulse,
  transport: TramFront,
  work: BriefcaseBusiness,
  living: House,
};
export function GuideIcon({ id, ...props }) {
  const Icon = icons[id] || House;
  return <Icon aria-hidden="true" {...props} />;
}
export function BrandMark() {
  return (
    <span className="brand-mark" aria-hidden="true">
      <House size={23} strokeWidth={1.7} />
      <span />
    </span>
  );
}
