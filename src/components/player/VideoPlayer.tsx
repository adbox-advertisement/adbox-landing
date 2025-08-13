import React, { useEffect, useRef } from "react";
import Hls from "hls.js";

interface VideoCardProps {
  title: string;
  hlsUrl: string;
  uploaderName: string;
  uploaderBio: string;
  uploaderImage: string;
  thumbnail: string;
}

const VideoCard: React.FC<VideoCardProps> = ({
  title,
  hlsUrl,
  uploaderName,
  uploaderBio,
  uploaderImage,
  thumbnail,
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const player = videoRef.current;
    if (!player) return;

    if (Hls.isSupported()) {
      const hls = new Hls({ enableWorker: true, lowLatencyMode: true });
      hls.loadSource(hlsUrl);
      hls.attachMedia(player);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        player.play().catch((err) => console.warn("Autoplay blocked:", err));
      });
      return () => hls.destroy();
    } else if (player.canPlayType("application/vnd.apple.mpegurl")) {
      player.src = hlsUrl;
      player.play().catch((err) => console.warn("Autoplay blocked:", err));
    }
  }, [hlsUrl]);

  const handleVideoClick = (e: React.MouseEvent<HTMLVideoElement>) => {
    const vid = e.currentTarget;
    vid.muted = false; // turn on sound when clicked
    if (vid.paused) {
      vid.play();
    } else {
      vid.pause();
    }
  };

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
      <div className="relative">
        <video
          ref={videoRef}
          className="w-full h-48 object-cover"
          playsInline
          muted
          autoPlay
          crossOrigin="anonymous"
          poster={thumbnail}
          onClick={handleVideoClick}
        />
        <div className="absolute top-3 right-3 bg-green-500 text-white px-2 py-1 rounded-full text-sm font-bold">
          Watch & Earn
        </div>
      </div>

      <div className="p-4 flex items-start space-x-3">
        <img
          src={uploaderImage}
          alt={uploaderName}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <h3 className="font-bold text-gray-900">{title}</h3>
          <p className="text-gray-600 text-sm">{uploaderName}</p>
          <p className="text-gray-500 text-xs">{uploaderBio}</p>
        </div>
      </div>
    </div>
  );
};

export default function VideoGallery() {
  const videos: VideoCardProps[] = [
    {
      title: "How to Make Perfect Jollof Rice",
      hlsUrl:
        "https://adbox-bucket.s3.us-east-1.amazonaws.com/videos/29c4b049-803f-4337-80dc-b2cf74275351/hls/720p/index.m3u8",
      uploaderName: "Chef Ama",
      uploaderBio: "Ghanaian food blogger & chef",
      uploaderImage: "https://randomuser.me/api/portraits/women/45.jpg",
      thumbnail:
        "https://images.unsplash.com/photo-1604152135912-04a3382ef68c?w=400&h=200&fit=crop",
    },
    {
      title: "Explore Beautiful Accra",
      hlsUrl: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
      uploaderName: "Kwame Asante",
      uploaderBio: "Travel vlogger exploring Ghana",
      uploaderImage: "https://randomuser.me/api/portraits/men/46.jpg",
      thumbnail:
        "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=400&h=200&fit=crop",
    },
    {
      title: "Traditional Kente Weaving",
      hlsUrl: "https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8",
      uploaderName: "Akosua Boateng",
      uploaderBio: "Cultural historian & textile artist",
      uploaderImage: "https://randomuser.me/api/portraits/women/47.jpg",
      thumbnail:
        "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?w=400&h=200&fit=crop",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {videos.map((video, index) => (
        <VideoCard key={index} {...video} />
      ))}
    </div>
  );
}
