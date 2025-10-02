import { useState, useEffect } from "react";
import {
  Play,
  Heart,
  MessageCircle,
  Share2,
  Bookmark,
  Music,
  MoreHorizontal,
  Plus,
} from "lucide-react";

export default function SocialPhoneMockup() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [likes, setLikes] = useState(24567);
  const [progress, setProgress] = useState(0);

  // Simulate video progress
  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setProgress((prev) => (prev >= 100 ? 0 : prev + 0.5));
      }, 50);
      return () => clearInterval(interval);
    }
  }, [isPlaying]);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikes(isLiked ? likes - 1 : likes + 1);
  };

  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="relative w-full max-w-[20rem] h-[600px]">
        {/* Phone Frame */}
        <div
          className="relative w-full h-full bg-gradient-to-b from-gray-900 to-black rounded-[2.5rem] p-3 shadow-2xl overflow-hidden"
          style={{ boxShadow: "0 30px 60px rgba(0,0,0,0.5)" }}
        >
          {/* Screen */}
          <div className="w-full h-full bg-black rounded-[2rem] overflow-hidden relative">
            {/* Status Bar */}
            <div className="absolute top-0 left-0 right-0 z-50 flex justify-between items-center px-4 py-2 text-white text-xs">
              <span>9:41</span>
              <div className="flex gap-1">
                <div className="w-3 h-2 border border-white rounded-sm"></div>
                <div className="w-3 h-2 border border-white rounded-sm"></div>
                <div className="w-3 h-2 border border-white rounded-sm bg-white"></div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="absolute top-8 left-0 right-0 h-0.5 bg-white/20 z-50">
              <div
                className="h-full bg-white transition-all duration-100"
                style={{ width: `${progress}%` }}
              ></div>
            </div>

            {/* Simulated Video */}
            <div
              className="absolute inset-0 cursor-pointer"
              onClick={() => setIsPlaying(!isPlaying)}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 animate-pulse"></div>
              <div className="absolute inset-0 opacity-30">
                <div
                  className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500 to-transparent animate-pulse"
                  style={{ animationDelay: "0.5s" }}
                ></div>
                <div
                  className="absolute bottom-0 right-0 w-3/4 h-3/4 bg-gradient-to-tl from-pink-500 to-transparent animate-pulse"
                  style={{ animationDelay: "1s" }}
                ></div>
              </div>

              {!isPlaying && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm z-20">
                  <Play
                    className="w-16 h-16 text-white opacity-80"
                    fill="white"
                  />
                </div>
              )}

              <div className="absolute inset-0 overflow-hidden">
                <div
                  className="absolute -inset-full animate-shimmer bg-gradient-to-r from-transparent via-white/10 to-transparent"
                  style={{ animation: "shimmer 3s infinite" }}
                ></div>
              </div>
            </div>

            {/* Right Side Actions */}
            <div className="absolute right-4 bottom-24 z-30 flex flex-col gap-6">
              {/* Profile */}
              <div className="relative">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 border-2 border-white"></div>
                <button className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center border-2 border-black">
                  <Plus className="w-4 h-4 text-white" />
                </button>
              </div>

              {/* Like */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleLike();
                }}
                className="flex flex-col items-center gap-1 group"
              >
                <div
                  className={`transition-transform ${
                    isLiked ? "scale-125" : "group-hover:scale-110"
                  }`}
                >
                  <Heart
                    className={`w-8 h-8 ${
                      isLiked ? "text-red-500 fill-red-500" : "text-white"
                    }`}
                  />
                </div>
                <span className="text-white text-xs font-semibold">
                  {likes.toLocaleString()}
                </span>
              </button>

              {/* Comment */}
              <button
                onClick={(e) => e.stopPropagation()}
                className="flex flex-col items-center gap-1 group"
              >
                <MessageCircle className="w-8 h-8 text-white group-hover:scale-110 transition-transform" />
                <span className="text-white text-xs font-semibold">1,234</span>
              </button>

              {/* Save */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsSaved(!isSaved);
                }}
                className="flex flex-col items-center gap-1 group"
              >
                <Bookmark
                  className={`w-8 h-8 ${
                    isSaved ? "text-yellow-400 fill-yellow-400" : "text-white"
                  } group-hover:scale-110 transition-transform`}
                />
                <span className="text-white text-xs font-semibold">Save</span>
              </button>

              {/* Share */}
              <button
                onClick={(e) => e.stopPropagation()}
                className="flex flex-col items-center gap-1 group"
              >
                <Share2 className="w-8 h-8 text-white group-hover:scale-110 transition-transform" />
                <span className="text-white text-xs font-semibold">Share</span>
              </button>

              {/* More */}
              <button onClick={(e) => e.stopPropagation()} className="group">
                <MoreHorizontal className="w-8 h-8 text-white group-hover:scale-110 transition-transform" />
              </button>
            </div>

            {/* Bottom Content */}
            <div className="absolute bottom-0 left-0 right-0 z-30 p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent pt-12">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-white font-bold text-sm">
                  @creativecreator
                </span>
                <button className="px-3 py-1 border border-white rounded-md text-white text-xs font-semibold hover:bg-white hover:text-black transition-colors">
                  Follow
                </button>
              </div>

              <p className="text-white text-sm mb-3">
                Creating amazing content for my audience 🎨✨ #viral #creative
                #trending
              </p>

              <div className="flex items-center gap-2">
                <Music className="w-4 h-4 text-white" />
                <div className="flex-1 overflow-hidden">
                  <div className="text-white text-xs whitespace-nowrap animate-marquee">
                    Original Audio - Creative Creator • Trending Sound
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-400 to-purple-400 animate-spin-slow"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-shimmer {
          animation: shimmer 3s infinite;
        }
        .animate-marquee {
          animation: marquee 10s linear infinite;
        }
        .animate-spin-slow {
          animation: spin 3s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
