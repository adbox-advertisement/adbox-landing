import React, { useEffect, useRef, useState } from "react";
import Hls from "hls.js";
import { Play } from "lucide-react";

interface HLSVideoProps {
  hlsUrl: string;
  poster?: string;
}

const HLSVideo: React.FC<HLSVideoProps> = ({ hlsUrl, poster }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(hlsUrl);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play().catch((err) => console.warn("Autoplay blocked:", err));
      });
      return () => hls.destroy();
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = hlsUrl;
      video.play().catch((err) => console.warn("Autoplay blocked:", err));
    }
  }, [hlsUrl]);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="relative bg-gradient-light  rounded-lg h-32 flex items-center justify-center overflow-hidden">
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        playsInline
        muted
        loop
        autoPlay
        poster={poster}
        onClick={togglePlay}
      />
      {!isPlaying && (
        <Play className="absolute text-adbox-primary w-8 h-8 bg-white/90 rounded-full p-2 pointer-events-none" />
      )}
    </div>
  );
};

export default HLSVideo;
