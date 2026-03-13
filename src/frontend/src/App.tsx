import { BottomNav } from "@/components/BottomNav";
import type { AppPage } from "@/components/BottomNav";
import { VideoModal } from "@/components/VideoModal";
import type { Video } from "@/data/videos";
import { HomePage } from "@/pages/HomePage";
import { VideosPage } from "@/pages/VideosPage";
import { TrendingUp } from "lucide-react";
import { useState } from "react";

export default function App() {
  const [currentPage, setCurrentPage] = useState<AppPage>("home");
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

  return (
    <div className="flex flex-col h-screen max-w-lg mx-auto bg-background relative">
      {/* App Header */}
      <header className="flex items-center gap-3 px-4 py-3.5 border-b border-border bg-card/80 backdrop-blur-md flex-shrink-0">
        <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/15 border border-primary/30">
          <TrendingUp className="w-4 h-4 text-primary" />
        </div>
        <div>
          <h1 className="font-display font-bold text-foreground text-base leading-tight tracking-tight">
            Jotik Trading Videos
          </h1>
          <p className="text-muted-foreground text-xs">Curated for traders</p>
        </div>
        {/* Decorative ticker-like dots */}
        <div className="ml-auto flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          <span className="text-xs text-primary font-medium">LIVE</span>
        </div>
      </header>

      {/* Page content */}
      {currentPage === "home" ? (
        <HomePage
          onVideoClick={setSelectedVideo}
          onSeeAll={() => setCurrentPage("videos")}
        />
      ) : (
        <VideosPage onVideoClick={setSelectedVideo} />
      )}

      {/* Bottom navigation */}
      <BottomNav current={currentPage} onChange={setCurrentPage} />

      {/* Video modal */}
      <VideoModal
        video={selectedVideo}
        onClose={() => setSelectedVideo(null)}
      />
    </div>
  );
}
