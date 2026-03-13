import { BarChart2 } from "lucide-react";

interface SectionHeaderProps {
  title: string;
  onSeeAll?: () => void;
}

export function SectionHeader({ title, onSeeAll }: SectionHeaderProps) {
  return (
    <div className="flex items-center justify-between mb-3 px-4">
      <div className="flex items-center gap-2">
        <BarChart2 className="w-4 h-4 text-primary" />
        <h2 className="font-display font-bold text-foreground text-base tracking-tight">
          {title}
        </h2>
      </div>
      {onSeeAll && (
        <button
          type="button"
          onClick={onSeeAll}
          className="text-xs text-primary hover:text-primary/80 font-medium transition-colors"
        >
          See All
        </button>
      )}
    </div>
  );
}
