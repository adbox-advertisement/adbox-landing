import { useState, useEffect } from "react";
import {
  Play,
  Coins,
  Smartphone,
  Shield,
  Video,
  Users,
  Clock,
  GraduationCap,
  Briefcase,
  Home as HomeIcon,
  Star,
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  ArrowRight,
  Download,
} from "lucide-react";
import VideoPlayer from "@/components/player/VideoPlayer";
import HLSVideo from "@/components/player/HLSVideo";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="font-inter text-gray-900">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md border-b border-gray-100"
            : "bg-white/90 backdrop-blur-md border-b border-gray-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Play className="text-white w-4 h-4" />
              </div>
              <span className="font-bold text-xl text-gray-900">Adbox</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection("features")}
                className="text-gray-600 hover:text-adbox-primary transition-colors"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection("how-it-works")}
                className="text-gray-600 hover:text-adbox-primary transition-colors"
              >
                How It Works
              </button>
              <button
                onClick={() => scrollToSection("benefits")}
                className="text-gray-600 hover:text-adbox-primary transition-colors"
              >
                Benefits
              </button>
              <button
                onClick={() => scrollToSection("download")}
                className="bg-gradient-primary text-white px-6 py-2 rounded-full hover:opacity-90 transition-opacity"
              >
                Download App
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600"
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
            <div className="md:hidden bg-white border-t border-gray-100 py-4">
              <div className="flex flex-col space-y-4">
                <button
                  onClick={() => scrollToSection("features")}
                  className="text-gray-600 hover:text-adbox-primary transition-colors text-left px-4"
                >
                  Features
                </button>
                <button
                  onClick={() => scrollToSection("how-it-works")}
                  className="text-gray-600 hover:text-adbox-primary transition-colors text-left px-4"
                >
                  How It Works
                </button>
                <button
                  onClick={() => scrollToSection("benefits")}
                  className="text-gray-600 hover:text-adbox-primary transition-colors text-left px-4"
                >
                  Benefits
                </button>
                <button
                  onClick={() => scrollToSection("download")}
                  className="bg-gradient-primary  text-white px-6 py-2 rounded-full hover:opacity-90 transition-opacity mx-4"
                >
                  Download App
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-primary text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Watch Videos,
                <br />
                <span className="text-yellow-300">Earn Money</span>
                <br />
                {/* in Ghana */}
              </h1>
              <p className="text-xl text-purple-100 mb-8 max-w-lg mx-auto lg:mx-0">
                Join thousands of People earning real money by watching
                entertaining videos on Adbox. Start earning today!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="bg-white text-adbox-primary px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2">
                  <Play className="w-5 h-5" />
                  <span>Download for Android</span>
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-adbox-primary transition-colors flex items-center justify-center space-x-2">
                  <Play className="w-5 h-5" />
                  <span>Watch Demo</span>
                </button>
              </div>
            </div>

            <div className="relative">
              {/* Smartphone mockup */}
              <div className="relative mx-auto w-64 h-96 bg-gray-900 rounded-3xl p-2 shadow-2xl">
                <div className="w-full h-full bg-white rounded-2xl overflow-hidden">
                  {/* Status bar */}
                  <div className="bg-gradient-primary h-2 w-full"></div>
                  {/* App content mockup */}
                  <div className="p-4 space-y-4">
                    <div className="text-center">
                      <div className="text-sm font-semibold text-gray-800">
                        Your Earnings
                      </div>
                      <div className="text-2xl font-bold text-green-600">
                        ₵45.20
                      </div>
                    </div>
                    {/* Video thumbnail mockup */}
                    {/* <div className="bg-gradient-light  rounded-lg h-32 flex items-center justify-center relative">
                      <Play className="text-adbox-primary w-8 h-8 bg-white/90 rounded-full p-2" />
                    </div> */}
                    <HLSVideo
                      hlsUrl="https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8"
                      poster="https://images.unsplash.com/photo-1604152135912-04a3382ef68c?w=400"
                    />

                    <div className="space-y-2">
                      <div className="text-xs font-medium text-gray-800">
                        Watch & Earn ₵2.50
                      </div>
                      <div className="bg-purple-100 rounded-lg p-3">
                        <div className="text-xs text-purple-800">
                          Next video ready
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -left-4 bg-yellow-300 text-adbox-primary px-3 py-2 rounded-full text-sm font-bold animate-bounce">
                +₵2.50
              </div>
              <div className="absolute top-20 -right-8 bg-green-400 text-white px-3 py-2 rounded-full text-sm font-bold animate-pulse">
                Earned!
              </div>
            </div>
          </div>
        </div>

        {/* Wave decoration */}
        <div className="absolute  -bottom-8 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="w-full h-20 text-white">
            <path
              fill="currentColor"
              d="M0,0 C240,60 480,60 720,30 C960,0 1200,0 1440,30 L1440,120 L0,120 Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="text-3xl font-bold text-adbox-primary mb-2">
                10,000+
              </div>
              <div className="text-gray-600">Active Users in your Country</div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="text-3xl font-bold text-green-600 mb-2">
                ₵2.5M+
              </div>
              <div className="text-gray-600">Total Earnings Paid</div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="text-3xl font-bold text-adbox-secondary mb-2">
                1M+
              </div>
              <div className="text-gray-600">Videos Watched</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Adbox?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The smartest way to earn money while enjoying entertaining content
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6">
                <Coins className="text-white w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Instant Earnings
              </h3>
              <p className="text-gray-600">
                Earn ₵1.50 - ₵5.00 for every video you watch. Money is credited
                to your account immediately.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6">
                <Smartphone className="text-white w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Mobile First
              </h3>
              <p className="text-gray-600">
                Watch videos anywhere, anytime on your phone. Works perfectly
                with your mobile networks.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6">
                <Shield className="text-white w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Secure Payments
              </h3>
              <p className="text-gray-600">
                Withdraw earnings directly to Mobile Money (MTN, Vodafone,
                AirtelTigo) or bank accounts.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6">
                <Video className="text-white w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Quality Content
              </h3>
              <p className="text-gray-600">
                Enjoy entertaining videos from various creators and
                international brands.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6">
                <Users className="text-white w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Referral Bonus
              </h3>
              <p className="text-gray-600">
                Earn ₵10 for each friend you refer plus 10% of their earnings
                forever.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6">
                <Clock className="text-white w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Flexible Schedule
              </h3>
              <p className="text-gray-600">
                Watch videos on your own time. No minimum hours or commitments
                required.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Showcase Section */}
      <section className="py-20 bg-gradient-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Popular Videos
            </h2>
            <p className="text-xl text-gray-600">
              See what other People are watching and earning from
            </p>
          </div>
          <VideoPlayer />
          {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative h-48 bg-gradient-to-r from-orange-300 to-red-400 flex items-center justify-center">
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <Play className="text-white w-12 h-12 bg-adbox-primary/80 rounded-full p-3" />
                </div>
                <div className="absolute top-4 right-4 bg-green-500 text-white px-2 py-1 rounded-full text-sm font-bold">
                  +₵3.50
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-gray-900 mb-2">
                  How to Make Perfect Jollof Rice
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Learn the secrets of authentic Ghanaian jollof rice
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">5:32 mins</span>
                  <span className="text-adbox-primary font-semibold">
                    Watch & Earn
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative h-48 bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center">
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <Play className="text-white w-12 h-12 bg-adbox-primary/80 rounded-full p-3" />
                </div>
                <div className="absolute top-4 right-4 bg-green-500 text-white px-2 py-1 rounded-full text-sm font-bold">
                  +₵2.50
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-gray-900 mb-2">
                  Explore Beautiful Accra
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Discover hidden gems in Ghana's capital city
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">3:15 mins</span>
                  <span className="text-adbox-primary font-semibold">
                    Watch & Earn
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative h-48 bg-gradient-to-r from-green-400 to-yellow-500 flex items-center justify-center">
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <Play className="text-white w-12 h-12 bg-adbox-primary/80 rounded-full p-3" />
                </div>
                <div className="absolute top-4 right-4 bg-green-500 text-white px-2 py-1 rounded-full text-sm font-bold">
                  +₵4.00
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-gray-900 mb-2">
                  Traditional Kente Weaving
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  The art behind Ghana's most famous textile
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">7:45 mins</span>
                  <span className="text-adbox-primary font-semibold">
                    Watch & Earn
                  </span>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600">
              Start earning in just 3 simple steps
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Step 1 */}
            <div className="text-center relative">
              <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Download & Sign Up
              </h3>
              <p className="text-gray-600">
                Download the Adbox app and create your free account using your
                phone number.
              </p>
            </div>

            {/* Arrow for desktop */}
            <div className="hidden md:block absolute top-10 left-1/3 transform -translate-y-1/2">
              <ArrowRight className="text-adbox-primary w-8 h-8" />
            </div>

            {/* Step 2 */}
            <div className="text-center relative">
              <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Watch Videos
              </h3>
              <p className="text-gray-600">
                Browse and watch entertaining videos from various categories and
                creators.
              </p>
            </div>

            {/* Arrow for desktop */}
            <div className="hidden md:block absolute top-10 right-1/3 transform -translate-y-1/2">
              <ArrowRight className="text-adbox-primary w-8 h-8" />
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Get Paid</h3>
              <p className="text-gray-600">
                Earnings are added instantly. Withdraw anytime to Mobile Money
                or your bank.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                Perfect for Students & Workers in accross the Country
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="text-green-600 w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Students</h3>
                    <p className="text-gray-600">
                      Earn extra money for school fees, books, and daily
                      expenses while studying.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Briefcase className="text-blue-600 w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">
                      Working Professionals
                    </h3>
                    <p className="text-gray-600">
                      Make additional income during lunch breaks or commute
                      time.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <HomeIcon className="text-purple-600 w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">
                      Stay-at-home Parents
                    </h3>
                    <p className="text-gray-600">
                      Earn money from home while taking care of your family.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="text-yellow-600 w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">
                      Flexible Timing
                    </h3>
                    <p className="text-gray-600">
                      Watch videos whenever convenient - early morning, lunch
                      time, or before bed.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-adbox-gradient rounded-2xl shadow-2xl flex items-center justify-center">
                <div className="text-center text-white">
                  <Smartphone className="w-20 h-20 mx-auto mb-4 opacity-80" />
                  <p className="text-lg font-semibold">
                    Happy Streaming to Everybody using Adbox
                  </p>
                </div>
              </div>

              {/* Earning notification overlay */}
              <div className="absolute top-8 right-8 bg-green-500 text-white px-4 py-2 rounded-2xl shadow-lg animate-pulse">
                <div className="text-sm font-bold">Just Earned!</div>
                <div className="text-lg font-bold">+₵5.50</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What People Are Saying
            </h2>
            <p className="text-xl text-gray-600">
              Real stories from real users across the country
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">KA</span>
                </div>
                <div className="ml-4">
                  <div className="font-bold text-gray-900">Kwame Asante</div>
                  <div className="text-sm text-gray-600">
                    University Student, Accra
                  </div>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                "I've earned over ₵500 in my first month! Perfect for covering
                my transport and lunch money at campus."
              </p>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">AA</span>
                </div>
                <div className="ml-4">
                  <div className="font-bold text-gray-900">Ama Adjei</div>
                  <div className="text-sm text-gray-600">Teacher, Kumasi</div>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                "Easy way to earn extra income after work. The withdrawal to
                Mobile Money is instant and hassle-free."
              </p>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">YB</span>
                </div>
                <div className="ml-4">
                  <div className="font-bold text-gray-900">Yaw Boateng</div>
                  <div className="text-sm text-gray-600">
                    Entrepreneur, Takoradi
                  </div>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                "I watch videos during my breaks and have made ₵300 this week.
                Great app for busy entrepreneurs!"
              </p>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-20 bg-gradient-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Earning?</h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Join over 10,000 People who are already earning money by watching
            videos. Download Adbox now and start earning today!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="bg-white text-adbox-primary px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center space-x-3">
              <Play className="w-8 h-8" />
              <div className="text-left">
                <div className="text-xs">Get it on</div>
                <div className="text-lg font-bold">Google Play</div>
              </div>
            </button>
            <button className="bg-white text-adbox-primary px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center space-x-3">
              <Download className="w-8 h-8" />
              <div className="text-left">
                <div className="text-xs">Download on the</div>
                <div className="text-lg font-bold">App Store</div>
              </div>
            </button>
          </div>

          <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-4">Quick Stats</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-yellow-300">₵150+</div>
                <div className="text-purple-100">Average monthly earnings</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-300">2 mins</div>
                <div className="text-purple-100">Average video length</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-300">24/7</div>
                <div className="text-purple-100">Earning opportunities</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <Play className="text-white w-4 h-4" />
                </div>
                <span className="font-bold text-xl">Adbox</span>
              </div>
              <p className="text-gray-400 mb-6">
                The leading platform for earning money by watching videos. Join
                thousands of users earning daily.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-lg mb-6">Quick Links</h4>
              <ul className="space-y-4">
                <li>
                  <button
                    onClick={() => scrollToSection("features")}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Features
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("how-it-works")}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    How It Works
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("benefits")}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Benefits
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("download")}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Download
                  </button>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="font-semibold text-lg mb-6">Support</h4>
              <ul className="space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Help Center
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold text-lg mb-6">Contact</h4>
              <ul className="space-y-4 text-gray-400">
                <li className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>info@adboxgh.com</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>+233 26 267 7977</span>
                </li>
                <li className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>Accra, Ghana</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Adbox. All rights reserved</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
