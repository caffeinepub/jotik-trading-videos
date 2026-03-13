import { VideoCard } from "@/components/VideoCard";
import type { Video, VideoCategory } from "@/data/videos";
import {
  beginnerVideos,
  intermediateVideos,
  proVideos,
  videos,
} from "@/data/videos";
import { motion } from "motion/react";
import { useState } from "react";

interface VideosPageProps {
  onVideoClick: (video: Video) => void;
}

const tabs: { label: string; value: VideoCategory | "all" }[] = [
  { label: "All", value: "all" },
  { label: "Beginner", value: "beginner" },
  { label: "Intermediate", value: "intermediate" },
  { label: "Pro", value: "pro" },
];

const filterMap: Record<VideoCategory | "all", Video[]> = {
  all: videos,
  beginner: beginnerVideos,
  intermediate: intermediateVideos,
  pro: proVideos,
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35 } },
};

export function VideosPage({ onVideoClick }: VideosPageProps) {
  const [activeTab, setActiveTab] = useState<VideoCategory | "all">("all");
  const filtered = filterMap[activeTab];

  return (
    <main className="flex-1 overflow-y-auto pb-20 pt-4">
      <div className="px-4 mb-4">
        <h2 className="font-display font-bold text-foreground text-xl">
          All Videos
        </h2>
        <p className="text-muted-foreground text-sm mt-0.5">
          {videos.length} curated stock market videos
        </p>
        <div className="mt-3 h-px bg-gradient-to-r from-primary/60 via-primary/20 to-transparent rounded-full" />
      </div>

      {/* Level filter tabs */}
      <div className="flex gap-2 px-4 mb-4 overflow-x-auto scrollbar-hide">
        {tabs.map((tab) => (
          <button
            key={tab.value}
            type="button"
            data-ocid={"videos.filter.tab"}
            onClick={() => setActiveTab(tab.value)}
            className={`flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-semibold border transition-colors ${
              activeTab === tab.value
                ? "bg-primary text-primary-foreground border-primary"
                : "bg-muted text-muted-foreground border-border/50 hover:bg-muted/80"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <motion.div
        key={activeTab}
        className="grid grid-cols-2 gap-3 px-4"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {filtered.map((video, i) => (
          <motion.div key={video.id} variants={item}>
            <VideoCard video={video} onClick={onVideoClick} index={i + 1} />
          </motion.div>
        ))}
      </motion.div>

      {/* Footer */}
      <footer className="text-center px-4 pb-4 pt-6">
        <p className="text-muted-foreground text-xs">
          &copy; {new Date().getFullYear()}.{" "}
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            Built with &hearts; using caffeine.ai
          </a>
        </p>
      </footer>
    </main>
  );
}
