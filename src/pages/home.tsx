import { useState, useEffect, useRef } from "react";
import {
  Play,
  Smartphone,
  Shield,
  Video,
  Users,
  Clock,
  Briefcase,
  Phone,
  Mail,
  // MapPin,
  Menu,
  X,
  ArrowRight,
  TrendingUp,
  Target,
  Zap,
  ChevronDown,
  Globe,
  Award,
  BarChart3,
} from "lucide-react";
import { Link } from "wouter";
import SocialPhoneMockup from "@/components/socialMedia/social";
// Define types for state and props
interface MousePosition {
  x: number;
  y: number;
}

interface AnimatedStats {
  publishers: number;
  adSpend: number;
  completion: number;
  costPerView: number;
}

export default function ModernAdboxLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: 0,
    y: 0,
  });
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [animatedStats, setAnimatedStats] = useState<AnimatedStats>({
    publishers: 0,
    adSpend: 0,
    completion: 0,
    costPerView: 0,
  });
  const heroRef = useRef<HTMLElement | null>(null);
  const parallaxRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Optimize event handlers with throttling
    let scrollTimeout: NodeJS.Timeout;
    let mouseTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        const scrollY = window.scrollY;
        setIsScrolled(scrollY > 50);

        // Parallax effect for elements
        if (parallaxRef.current) {
          const parallaxElements =
            parallaxRef.current.querySelectorAll(".parallax-element");
          parallaxElements.forEach((el: Element, index: number) => {
            const speed = 0.3 + index * 0.1; // Reduced speed for smoother effect
            (el as HTMLElement).style.transform = `translateY(${
              scrollY * speed
            }px)`;
          });
        }
      }, 16); // Throttle to ~60fps
    };

    const handleMouseMove = (e: MouseEvent) => {
      clearTimeout(mouseTimeout);
      mouseTimeout = setTimeout(() => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      }, 16); // Throttle mouse updates
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      clearTimeout(scrollTimeout);
      clearTimeout(mouseTimeout);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const heroGradientStyle = {
    background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15) 0%, rgba(16, 24, 40, 0.8) 50%)`,
  };

  // Animated counter effect
  useEffect(() => {
    const animateStats = () => {
      const targets: AnimatedStats = {
        publishers: 1200,
        adSpend: 45,
        completion: 92,
        costPerView: 65,
      };
      const duration = 2000;
      const steps = 60;
      const increment = duration / steps;

      let current: AnimatedStats = {
        publishers: 0,
        adSpend: 0,
        completion: 0,
        costPerView: 0,
      };

      const timer = setInterval(() => {
        current.publishers = Math.min(
          current.publishers + targets.publishers / steps,
          targets.publishers
        );
        current.adSpend = Math.min(
          current.adSpend + targets.adSpend / steps,
          targets.adSpend
        );
        current.completion = Math.min(
          current.completion + targets.completion / steps,
          targets.completion
        );
        current.costPerView = Math.min(
          current.costPerView + targets.costPerView / steps,
          targets.costPerView
        );

        setAnimatedStats({ ...current });

        if (current.publishers >= targets.publishers) {
          clearInterval(timer);
        }
      }, increment);
    };

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        animateStats();
        observer.disconnect();
      }
    });

    const statsSection = document.getElementById("stats-section");
    if (statsSection) observer.observe(statsSection);

    console.log("Observer set on stats section", heroGradientStyle);
    return () => observer.disconnect();
  }, []);

  // Auto-sliding testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="font-inter text-gray-900 overflow-x-hidden">
      {/* Custom CSS for animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-20px) rotate(1deg); }
          66% { transform: translateY(-10px) rotate(-1deg); }
        }

        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(139, 92, 246, 0.3); }
          50% { box-shadow: 0 0 40px rgba(139, 92, 246, 0.6), 0 0 60px rgba(139, 92, 246, 0.3); }
        }

        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes slide-up {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }

        .gradient-animated {
          background: linear-gradient(-45deg, #8B5CF6, #A855F7, #C084FC, #DDD6FE);
          background-size: 400% 400%;
          animation: gradient-shift 4s ease infinite;
        }

        .floating-card {
          transition: transform 0.3s ease;
        }

        .glow-effect {
          animation: pulse-glow 2s ease-in-out infinite;
        }

        .slide-up-animation {
          animation: slide-up 0.8s ease forwards;
        }

        .hover-lift {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .hover-lift:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }

        .text-gradient {
          background: linear-gradient(135deg, #8B5CF6, #EC4899);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .backdrop-blur-glass {
          backdrop-filter: blur(20px);
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .feature-card-shimmer {
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
          background-size: 200% 100%;
          animation: shimmer 2s infinite;
        }

        .feature-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          transition: left 0.5s;
        }

        .feature-card:hover::before {
          left: 100%;
        }
      `}</style>

      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "backdrop-blur-glass border-b border-white/20"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-12 h-12 gradient-animated rounded-xl flex items-center justify-center glow-effect">
                  <Play className="text-white w-6 h-6" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
              </div>
              <span className="font-bold text-2xl text-white">Adbox</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {["Process overview", "Success Stories"].map((item) => (
                <button
                  key={item}
                  onClick={() =>
                    scrollToSection(item.toLowerCase().replace(" ", "_"))
                  }
                  className="text-white/80 hover:text-white transition-all duration-300 hover:scale-110 relative group cursor-pointer"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300"></span>
                </button>
              ))}
              <div className="flex items-center space-x-4">
                <Link
                  href="/signin"
                  className="text-white/80 hover:text-white transition-all duration-300 hover:scale-110 font-medium"
                >
                  Sign In
                </Link>
                {/* <button className="text-white/80 hover:text-white transition-all duration-300 hover:scale-110 font-medium">
                  Sign In
                </button> */}
                <Link
                  href="/signup"
                  className="gradient-animated text-white px-8 py-3 rounded-full hover:scale-105 transition-all duration-300 transform font-medium shadow-lg hover:shadow-xl glow-effect"
                >
                  Start Campaign
                </Link>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white p-2 rounded-lg backdrop-blur-glass hover:scale-110 transition-transform"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden backdrop-blur-glass border-t border-white/20 py-6 slide-up-animation">
              <div className="flex flex-col space-y-4">
                {["Process Overview", "Success Stories"].map((item) => (
                  <button
                    key={item}
                    onClick={() =>
                      scrollToSection(item.toLowerCase().replace(" ", "_"))
                    }
                    className="text-white/80 hover:text-white transition-colors text-left px-4 py-2 hover:bg-white/10 rounded-lg"
                  >
                    {item}
                  </button>
                ))}
                <div className="px-4 space-y-3 pt-4 border-t border-white/20">
                  <Link
                    href="/signin"
                    className="block w-full text-white/80 hover:text-white transition-colors font-medium text-left py-2"
                  >
                    Sign In
                  </Link>

                  <Link
                    href="/signup"
                    className="block w-full gradient-animated text-white px-6 py-3 rounded-full hover:scale-105 transition-transform font-medium text-center shadow-lg"
                  >
                    Start Campaign
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden relative flex items-center"
      >
        {/* Animated Background */}
        <div className="absolute inset-0" ref={parallaxRef}>
          <div className="parallax-element absolute top-20 left-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="parallax-element absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
          <div
            className="parallax-element absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl animate-spin"
            style={{ animationDuration: "20s" }}
          ></div>

          {/* Floating particles */}
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            ></div>
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-8 slide-up-animation">
                <Globe className="w-4 h-4 mr-2 text-green-400" />
                <span className="text-sm">Now Live in Ghana</span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-8 slide-up-animation">
                Reach Ghana's
                <br />
                <span className="text-gradient animate-pulse text-6xl sm:text-7xl lg:text-8xl">
                  30 Million
                </span>
                <br />
                Mobile Users
              </h1>

              <p className="text-xl text-white/80 mb-10 max-w-lg mx-auto lg:mx-0 slide-up-animation animation-delay-200">
                The most effective digital advertising platform for brands
                targeting Ghana's engaged mobile audience. Launch campaigns that
                convert in 24 hours.
              </p>

              <div className="flex flex-col items-center sm:flex-row gap-6 justify-center lg:justify-start slide-up-animation animation-delay-400">
                {/* New Download App Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href="https://apps.apple.com/app/adbox/id123456789" // Replace with actual App Store link
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative border-2 border-gray-200/20 bg-white/10 backdrop-blur-lg text-white px-6 py-3 rounded-2xl font-semibold text-base tracking-tight hover:bg-white/20 hover:border-gray-200/40 transition-all duration-300 ease-in-out transform flex items-center justify-center space-x-3 shadow-md hover:shadow-lg"
                  >
                    <span className="sm:inline">Download for iOS</span>
                    <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  </a>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.adbox.app" // Replace with actual Google Play link
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative border-2 border-gray-200/20 bg-white/10 backdrop-blur-lg text-white px-6 py-3 rounded-2xl font-semibold text-base tracking-tight hover:bg-white/20 hover:border-gray-200/40 transition-all duration-300 ease-in-out transform flex items-center justify-center space-x-3 shadow-md hover:shadow-lg"
                  >
                    <span className="sm:inline">Download for Android</span>
                    <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  </a>
                </div>
              </div>

              {/* Live metrics */}
              <div className="grid grid-cols-3 gap-6 mt-16 slide-up-animation animation-delay-600">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-1">
                    95%
                  </div>
                  <div className="text-sm text-white/60">Completion Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400 mb-1">
                    ₵0.65
                  </div>
                  <div className="text-sm text-white/60">Cost Per View</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-1">
                    24hr
                  </div>
                  <div className="text-sm text-white/60">Launch Time</div>
                </div>
              </div>
            </div>

            <SocialPhoneMockup />
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
          <ChevronDown className="w-8 h-8" />
        </div>
      </section>

      {/* Stats Section */}
      <section
        id="stats-section"
        className="py-20 bg-white relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-50/50 to-pink-50/50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Platform Performance
            </h2>
            <p className="text-xl text-gray-600">
              Real numbers from our advertising ecosystem
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                value: Math.round(animatedStats.publishers),
                suffix: "+",
                label: "Active Publishers",
                color: "purple",
                icon: Users,
              },
              {
                value: "₵",
                suffix: `${Math.round(animatedStats.adSpend)}M+`,
                label: "Ad Spend Processed",
                color: "green",
                icon: TrendingUp,
              },
              {
                value: Math.round(animatedStats.completion),
                suffix: "%",
                label: "Average Completion Rate",
                color: "blue",
                icon: Target,
              },
              {
                value: "₵0.",
                suffix: Math.round(animatedStats.costPerView),
                label: "Average Cost Per View",
                color: "pink",
                icon: Zap,
              },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-lg hover-lift border border-gray-100 text-center group"
              >
                <div
                  className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-${stat.color}-100 flex items-center justify-center group-hover:scale-110 transition-transform`}
                >
                  <stat.icon className={`w-8 h-8 text-${stat.color}-600`} />
                </div>
                <div
                  className={`text-4xl font-bold text-${stat.color}-600 mb-2`}
                >
                  {stat.value}
                  {stat.suffix}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Features Section - Enhanced Styling */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-purple-50 to-pink-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-40 h-40 bg-purple-200/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-60 h-60 bg-pink-200/30 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-100/20 to-pink-100/20 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Why Publishers Choose Adbox
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The most cost-effective platform to reach Ghana's mobile-first
              audience with guaranteed engagement
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Precision Targeting",
                desc: "Target specific demographics, locations, and interests across Ghana with advanced audience segmentation.",
                color: "purple",
              },
              {
                icon: Award,
                title: "Guaranteed Results",
                desc: "92% average completion rate with engaged audiences. Pay only for verified views and meaningful engagement.",
                color: "red",
              },
              {
                icon: Shield,
                title: "Transparent Analytics",
                desc: "Real-time campaign analytics, completion rates, audience insights, and ROI tracking for all campaigns.",
                color: "blue",
              },
              {
                icon: Video,
                title: "Premium Ad Formats",
                desc: "Video ads, interactive surveys, product demos, and branded content optimized for mobile engagement.",
                color: "red",
              },
              {
                icon: Users,
                title: "Audience Targeting",
                desc: "Target specific demographics, interests, and locations across Ghana for maximum campaign effectiveness.",
                color: "blue",
              },
              {
                icon: Smartphone,
                title: "Mobile-First Platform",
                desc: "Optimized for Ghana's mobile-first audience with seamless experience across all network conditions.",
                color: "purple",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className={`feature-card group bg-white rounded-3xl p-8 shadow-lg hover-lift border border-gray-100 relative overflow-hidden slide-up-animation ${
                  index % 2 === 0
                    ? "animation-delay-200"
                    : "animation-delay-400"
                }`}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform =
                    "translateY(-12px) scale(1.03)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform =
                    "translateY(0) scale(1)";
                }}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br from-${feature.color}-50 to-${feature.color}-100 opacity-0 group-hover:opacity-100 transition-all duration-700`}
                ></div>

                <div
                  className={`relative w-20 h-20 bg-gradient-to-br from-${feature.color}-500 to-${feature.color}-600 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-500 shadow-lg hover:shadow-2xl`}
                >
                  <feature.icon className="text-white w-10 h-10" />
                </div>

                <h3 className="relative text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-all duration-300">
                  {feature.title}
                </h3>
                <p className="relative text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {feature.desc}
                </p>

                <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0">
                  <ArrowRight className={`w-6 h-6 text-${feature.color}-500`} />
                </div>

                {/* Shimmer overlay on hover */}
                <div className="absolute inset-0 feature-card-shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Success Stories Carousel */}
      <section id="success_stories" className=" py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              See how leading brands are reaching Ghana's mobile audience
            </p>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-3xl">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {[
                  {
                    company: "MTN Ghana",
                    metric: "95%",
                    metricLabel: "Completion Rate",
                    bg: "from-yellow-400 to-red-500",
                    results: "Reached 25,000+ users with 95% completion rate",
                    roi: "+340% ROI",
                  },
                  {
                    company: "Vodafone",
                    metric: "₵18K",
                    metricLabel: "Revenue Generated",
                    bg: "from-red-500 to-pink-500",
                    results: "Increased app downloads by 280% in 2 months",
                    roi: "+280% Downloads",
                  },
                  {
                    company: "GhanaPost GPS",
                    metric: "12K",
                    metricLabel: "New Signups",
                    bg: "from-blue-500 to-green-500",
                    results: "Generated 12,000+ new app signups in 30 days",
                    roi: "+450% Signups",
                  },
                ].map((story, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div
                      className={`bg-gradient-to-br ${story.bg} rounded-3xl p-12 text-white relative overflow-hidden`}
                    >
                      <div className="absolute inset-0 bg-black/20"></div>
                      <div className="relative z-10">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                          <div>
                            <h3 className="text-4xl font-bold mb-4">
                              {story.company}
                            </h3>
                            <p className="text-xl mb-6 text-white/90">
                              {story.results}
                            </p>
                            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-3">
                              <TrendingUp className="w-5 h-5 mr-2" />
                              <span className="font-semibold">{story.roi}</span>
                            </div>
                          </div>
                          <div className="text-center">
                            <div className="text-6xl font-bold mb-2">
                              {story.metric}
                            </div>
                            <div className="text-xl text-white/80">
                              {story.metricLabel}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Animated background elements */}
                      <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
                      <div className="absolute bottom-10 left-10 w-24 h-24 bg-white/10 rounded-full blur-2xl animate-pulse animation-delay-1000"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Carousel indicators */}
            <div className="flex justify-center mt-8 space-x-3">
              {[0, 1, 2].map((index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index ? "bg-purple-500 w-8" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section
        id="process_overview"
        className="py-24 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden"
      >
        <div className="absolute inset-0">
          <div className="absolute top-40 left-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-40 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 id="" className="text-5xl font-bold mb-6">
              Launch in 3 Simple Steps
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Start reaching Ghana's mobile audience in just 24 hours with our
              streamlined campaign process
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                step: "01",
                icon: Target,
                title: "Define Your Audience",
                desc: "Choose demographics, interests, and locations across Ghana. Our AI helps optimize targeting for maximum engagement.",
              },
              {
                step: "02",
                icon: Video,
                title: "Create Your Campaign",
                desc: "Upload your video ad, set your budget, and customize your campaign settings. Our team provides creative support.",
              },
              {
                step: "03",
                icon: BarChart3,
                title: "Launch & Optimize",
                desc: "Go live in 24 hours and track real-time performance. Optimize campaigns based on detailed analytics and insights.",
              },
            ].map((item, index) => (
              <div key={index} className="relative group">
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 hover:bg-white/15 transition-all duration-500 hover:scale-105 border border-white/20">
                  <div className="flex items-center mb-6">
                    <div className="text-6xl font-bold text-purple-400 mr-4">
                      {item.step}
                    </div>
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-2xl flex items-center justify-center">
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                  <p className="text-white/80 leading-relaxed">{item.desc}</p>
                </div>

                {/* Connection line */}
                {index < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-6 w-12 h-0.5 bg-gradient-to-r from-purple-400 to-transparent"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-50/50 to-pink-50/50"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center bg-purple-100 text-purple-800 rounded-full px-6 py-2 mb-8">
            <Zap className="w-4 h-4 mr-2" />
            <span className="text-sm font-semibold">
              Limited Time: No Setup Fees
            </span>
          </div>

          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Ready to Reach Ghana's Mobile Audience?
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Join 1,200+ publishers already earning with Adbox. Launch your first
            campaign today and see results in 24 hours.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Link
              href="/signup"
              className="group bg-gradient-to-r from-purple-500 to-pink-500 text-white px-12 py-6 rounded-2xl font-semibold hover:scale-105 transition-all duration-300 transform flex items-center justify-center space-x-3 shadow-2xl hover:shadow-purple-500/25 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Briefcase className="w-6 h-6 relative z-10" />
              <span className="relative z-10 text-lg">Start Campaign Now</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
            </Link>

            <button
              onClick={() => scrollToSection("contact")}
              className="cursor-pointer group border-2 border-purple-200 text-purple-600 px-12 py-6 rounded-2xl font-semibold hover:scale-105 hover:border-purple-400 hover:bg-purple-50 transition-all duration-300 transform flex items-center justify-center space-x-3"
            >
              <Phone className="w-6 h-6 group-hover:scale-110 transition-transform" />
              <span className="text-lg">Schedule Demo</span>
            </button>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-gray-500">
            <div className="flex items-center">
              <Shield className="w-5 h-5 mr-2 text-green-500" />
              <span>No Setup Fees</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-5 h-5 mr-2 text-blue-500" />
              <span>24hr Launch Time</span>
            </div>
            <div className="flex items-center">
              <Award className="w-5 h-5 mr-2 text-purple-500" />
              <span>92% Success Rate</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 gradient-animated rounded-xl flex items-center justify-center">
                  <Play className="text-white w-6 h-6" />
                </div>
                <span className="font-bold text-2xl">Adbox</span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                Ghana's leading digital advertising platform connecting brands
                with engaged mobile audiences. Reach 30M+ users with guaranteed
                results.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                  <Globe className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                  <Users className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                  <Video className="w-5 h-5" />
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-6">Platform</h4>
              <ul className="space-y-4 text-gray-400">
                <li onClick={() => scrollToSection("process_overview")}>
                  <a className="hover:text-white cursor-pointer transition-colors">
                    Process overview
                  </a>
                </li>
                {/* <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Pricing
                  </a>
                </li> */}
                <li onClick={() => scrollToSection("success_stories")}>
                  <a className="hover:text-white cursor-pointer transition-colors">
                    Success Stories
                  </a>
                </li>
                {/* <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Analytics
                  </a>
                </li> */}
              </ul>
            </div>

            <div id="contact">
              <h4 className="font-semibold text-lg mb-6">Support</h4>
              <ul className="space-y-4 text-gray-400">
                <li className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  <span>+233 53 889 7225</span>
                </li>
                <li className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  <span>info@adboxgh.com</span>
                </li>
                {/* <li className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>Accra, Ghana</span>
                </li> */}
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              © 2025 Adbox Ghana. All rights reserved.
            </p>
            <div className="flex space-x-6 text-gray-400">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
