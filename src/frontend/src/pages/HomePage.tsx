import { SectionHeader } from "@/components/SectionHeader";
import { VideoCard } from "@/components/VideoCard";
import type { Video } from "@/data/videos";
import { beginnerVideos, intermediateVideos, proVideos } from "@/data/videos";
import { motion } from "motion/react";

interface HomePageProps {
  onVideoClick: (video: Video) => void;
  onSeeAll: () => void;
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

function VideoRow({
  videos,
  onVideoClick,
  baseIndex,
}: {
  videos: Video[];
  onVideoClick: (v: Video) => void;
  baseIndex: number;
}) {
  return (
    <div className="flex gap-3 overflow-x-auto scrollbar-hide px-4 pb-1">
      {videos.map((video, i) => (
        <VideoCard
          key={video.id}
          video={video}
          onClick={onVideoClick}
          index={baseIndex + i + 1}
          compact
        />
      ))}
    </div>
  );
}

export function HomePage({ onVideoClick, onSeeAll }: HomePageProps) {
  return (
    <motion.main
      className="flex-1 overflow-y-auto pb-20 pt-2"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {/* Hero banner */}
      <div className="px-4 mb-6">
        <div className="rounded-xl bg-gradient-to-r from-chart-3/10 via-primary/10 to-chart-5/10 border border-border/50 p-4">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-1">
            Learning Path
          </p>
          <h1 className="font-display font-bold text-foreground text-lg leading-snug">
            Stock Market: Beginner to Pro
          </h1>
          <p className="text-muted-foreground text-sm mt-1">
            Follow the path — start from basics and master advanced strategies.
          </p>
        </div>
      </div>

      {/* Step 1: Beginner */}
      <motion.section
        data-ocid="home.beginner_section"
        variants={item}
        className="mb-7"
      >
        <SectionHeader title="Step 1 — Beginner" onSeeAll={onSeeAll} />
        <VideoRow
          videos={beginnerVideos}
          onVideoClick={onVideoClick}
          baseIndex={0}
        />
      </motion.section>

      {/* Step 2: Intermediate */}
      <motion.section
        data-ocid="home.intermediate_section"
        variants={item}
        className="mb-7"
      >
        <SectionHeader title="Step 2 — Intermediate" onSeeAll={onSeeAll} />
        <VideoRow
          videos={intermediateVideos}
          onVideoClick={onVideoClick}
          baseIndex={10}
        />
      </motion.section>

      {/* Step 3: Pro */}
      <motion.section
        data-ocid="home.pro_section"
        variants={item}
        className="mb-7"
      >
        <SectionHeader title="Step 3 — Pro" onSeeAll={onSeeAll} />
        <VideoRow
          videos={proVideos}
          onVideoClick={onVideoClick}
          baseIndex={20}
        />
      </motion.section>

      {/* Footer */}
      <footer className="text-center px-4 pb-4 pt-2">
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
    </motion.main>
  );
}
