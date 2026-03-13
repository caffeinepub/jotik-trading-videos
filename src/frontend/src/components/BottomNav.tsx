import { Home, PlaySquare } from "lucide-react";

export type AppPage = "home" | "videos";

interface BottomNavProps {
  current: AppPage;
  onChange: (page: AppPage) => void;
}

export function BottomNav({ current, onChange }: BottomNavProps) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 border-t border-border bg-card/95 backdrop-blur-md">
      <div className="flex items-stretch h-16 max-w-lg mx-auto">
        {/* Home tab */}
        <button
          type="button"
          data-ocid="nav.home_link"
          className={`flex-1 flex flex-col items-center justify-center gap-1 transition-colors relative ${
            current === "home"
              ? "text-primary"
              : "text-muted-foreground hover:text-foreground"
          }`}
          onClick={() => onChange("home")}
          aria-label="Home"
        >
          {current === "home" && (
            <span className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-0.5 rounded-full bg-primary nav-glow" />
          )}
          <Home className="w-5 h-5" />
          <span className="text-xs font-medium">Home</span>
        </button>

        {/* Videos tab */}
        <button
          type="button"
          data-ocid="nav.videos_link"
          className={`flex-1 flex flex-col items-center justify-center gap-1 transition-colors relative ${
            current === "videos"
              ? "text-primary"
              : "text-muted-foreground hover:text-foreground"
          }`}
          onClick={() => onChange("videos")}
          aria-label="Videos"
        >
          {current === "videos" && (
            <span className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-0.5 rounded-full bg-primary nav-glow" />
          )}
          <PlaySquare className="w-5 h-5" />
          <span className="text-xs font-medium">Videos</span>
        </button>
      </div>
    </nav>
  );
}
