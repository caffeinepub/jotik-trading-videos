import { Badge } from "@/components/ui/badge";
import type { Video } from "@/data/videos";
import { PlayCircle } from "lucide-react";

const categoryColors: Record<string, string> = {
  beginner: "bg-chart-3/20 text-chart-3 border-chart-3/30",
  intermediate: "bg-primary/20 text-primary border-primary/30",
  pro: "bg-chart-5/20 text-chart-5 border-chart-5/30",
};

const categoryLabels: Record<string, string> = {
  beginner: "Beginner",
  intermediate: "Intermediate",
  pro: "Pro",
};

interface VideoCardProps {
  video: Video;
  onClick: (video: Video) => void;
  index: number;
  compact?: boolean;
}

export function VideoCard({
  video,
  onClick,
  index,
  compact = false,
}: VideoCardProps) {
  const thumbnailUrl = `https://img.youtube.com/vi/${video.id}/mqdefault.jpg`;

  return (
    <button
      type="button"
      data-ocid={`video.card.${index}`}
      className={`card-hover text-left cursor-pointer bg-card rounded-lg overflow-hidden border border-border/60 flex-shrink-0 ${
        compact ? "w-48" : "w-full"
      }`}
      onClick={() => onClick(video)}
    >
      {/* Thumbnail */}
      <div className="relative aspect-video bg-muted">
        <img
          src={thumbnailUrl}
          alt={video.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        {/* Play overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-background/30 opacity-0 hover:opacity-100 transition-opacity duration-200">
          <PlayCircle className="w-12 h-12 text-primary drop-shadow-lg" />
        </div>
        {/* Category badge */}
        <div className="absolute top-2 left-2">
          <Badge
            variant="outline"
            className={`text-xs font-medium border ${categoryColors[video.category]} backdrop-blur-sm`}
          >
            {categoryLabels[video.category]}
          </Badge>
        </div>
      </div>

      {/* Info */}
      <div className="p-2.5">
        <h3
          className={`font-display font-semibold text-foreground leading-tight line-clamp-2 ${
            compact ? "text-xs" : "text-sm"
          }`}
        >
          {video.title}
        </h3>
        {video.description && (
          <p className="text-muted-foreground mt-0.5 line-clamp-1 text-xs">
            {video.description}
          </p>
        )}
        <p className="text-muted-foreground/70 mt-1 truncate text-xs">
          {video.channel}
        </p>
      </div>
    </button>
  );
}
