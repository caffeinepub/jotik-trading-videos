import type { Video } from "@/data/videos";
import { X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

interface VideoModalProps {
  video: Video | null;
  onClose: () => void;
}

export function VideoModal({ video, onClose }: VideoModalProps) {
  return (
    <AnimatePresence>
      {video && (
        <motion.div
          data-ocid="video.modal"
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-background/90 backdrop-blur-md" />

          {/* Modal content */}
          <motion.div
            className="relative w-full max-w-3xl z-10"
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.92, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Title bar */}
            <div className="flex items-center justify-between mb-3 px-1">
              <div className="flex-1 min-w-0 pr-4">
                <h2 className="font-display font-bold text-foreground text-lg leading-tight truncate">
                  {video.title}
                </h2>
                <p className="text-muted-foreground text-sm mt-0.5">
                  {video.channel}
                </p>
              </div>
              <button
                type="button"
                data-ocid="video.close_button"
                onClick={onClose}
                className="flex-shrink-0 w-9 h-9 rounded-full bg-secondary flex items-center justify-center border border-border hover:bg-destructive/20 hover:border-destructive/40 hover:text-destructive transition-colors"
                aria-label="Close video"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Video iframe */}
            <div className="aspect-video w-full rounded-lg overflow-hidden border border-border shadow-glow">
              <iframe
                src={`https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0&modestbranding=1`}
                title={video.title}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
