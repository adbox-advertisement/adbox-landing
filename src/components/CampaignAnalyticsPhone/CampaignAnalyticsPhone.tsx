import { Play } from "lucide-react";
import { FloatingCard } from "../floatingCoard/floatingCard";

export default function CampaignAnalyticsPhone() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-blue-100 flex items-center justify-center p-4 sm:p-8">
      <div className="relative w-full max-w-sm">
        <div className="relative mx-auto w-full aspect-[9/16] max-w-[380px] max-h-[95vh]">
          <div
            className="relative w-full h-full bg-gradient-to-b from-gray-800 to-black rounded-[2rem] sm:rounded-[3rem] p-2 sm:p-3 shadow-2xl hover:scale-105 transition-all duration-500"
            style={{ boxShadow: "0 50px 100px rgba(0,0,0,0.3)" }}
          >
            <div className="w-full h-full bg-white rounded-[1.5rem] sm:rounded-[2.5rem] overflow-hidden relative">
              {/* Animated Top Bar */}
              <div className="gradient-animated h-3 w-full"></div>

              {/* Content */}
              <div className="h-full overflow-y-auto p-4 sm:p-6 space-y-4 sm:space-y-6 bg-gradient-to-b from-purple-50 to-blue-50">
                <div className="text-center">
                  <div className="text-base sm:text-lg font-bold text-gray-800 mb-2">
                    Live Campaign Analytics
                  </div>
                </div>

                {/* Video Preview Card */}
                <div className="relative bg-gradient-to-br from-purple-400 to-pink-400 rounded-2xl h-36 sm:h-40 flex items-center justify-center overflow-hidden group">
                  <div className="absolute inset-0 bg-black/20"></div>
                  <Play className="text-white w-10 h-10 sm:w-12 sm:h-12 bg-white/20 backdrop-blur-sm rounded-full p-2 sm:p-3 group-hover:scale-110 transition-transform z-10" />

                  <div className="absolute top-2 sm:top-3 left-2 sm:left-3 bg-red-500 text-white px-2 sm:px-3 py-1 rounded-lg text-xs font-bold animate-pulse">
                    LIVE
                  </div>
                  <div className="absolute bottom-2 sm:bottom-3 right-2 sm:right-3 bg-green-500 text-white px-2 sm:px-3 py-1 rounded-lg text-xs font-bold">
                    95% CTR
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-purple-300 to-pink-300 opacity-60">
                    <div className="h-full bg-white/30 animate-pulse"></div>
                  </div>
                </div>

                {/* Stats Card */}
                <div className="bg-white rounded-2xl p-4 shadow-lg">
                  <div className="text-sm font-semibold text-gray-800 mb-3">
                    MTN Ghana Campaign
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-600">Views</span>
                      <span className="text-sm font-bold text-purple-600">
                        2,847
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-600">Completion</span>
                      <span className="text-sm font-bold text-green-600">
                        94%
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-600">Cost/View</span>
                      <span className="text-sm font-bold text-blue-600">
                        ₵0.85
                      </span>
                    </div>
                  </div>

                  <div className="mt-4 bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full animate-pulse"
                      style={{ width: "94%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Cards */}
          <FloatingCard delay={0}>
            <div className="absolute -top-6 sm:-top-8 -left-6 sm:-left-8 bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-xl border border-purple-100">
              <div className="text-xl sm:text-2xl font-bold text-purple-600">
                85%
              </div>
              <div className="text-xs text-gray-600">CTR</div>
            </div>
          </FloatingCard>
          <FloatingCard delay={2}>
            <div className="absolute bottom-16 sm:bottom-20 -left-8 sm:-left-12 bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-xl border border-blue-100">
              <div className="text-xl sm:text-2xl font-bold text-blue-600">
                2.5M
              </div>
              <div className="text-xs text-gray-600">Reach</div>
            </div>
          </FloatingCard>
        </div>
      </div>

      <style>{`
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .gradient-animated {
          background: linear-gradient(90deg, #a855f7, #ec4899, #3b82f6, #a855f7);
          background-size: 300% 300%;
          animation: gradient-shift 3s ease infinite;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
