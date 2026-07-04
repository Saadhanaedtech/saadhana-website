import { LucideIcon } from "lucide-react";

interface SolutionCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function SolutionCard({
  icon: Icon,
  title,
  description,
}: SolutionCardProps) {
  return (
    <div
      className="
        rounded-[32px]
        border
        border-slate-200
        bg-white
        p-10
        transition-all
        duration-300
        hover:-translate-y-2
        hover:shadow-xl
      "
    >
      <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-50">
        <Icon className="h-7 w-7 text-[#F97316]" />
      </div>

      <h3 className="mb-5 text-2xl font-bold text-slate-900">
        {title}
      </h3>

      <p className="text-lg leading-8 text-slate-600">
        {description}
      </p>
    </div>
  );
}