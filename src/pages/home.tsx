import { useState, useEffect } from "react";
import { Link } from "wouter";
import {
  Play,
  Coins,
  Smartphone,
  Shield,
  Video,
  Users,
  Clock,
  Briefcase,
  Star,
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
} from "lucide-react";

import ghanaCity from "../assets/Ghana_digital_cityscape_background_b899cd3b.png";
import publisherImage from "../assets/Publisher_viewing_Adbox_analytics_dashboard_a90a6399.png";
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
                Platform
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
                Success Stories
              </button>
              <div className="flex items-center space-x-3">
                <Link
                  href="/signin"
                  className="text-gray-600 hover:text-adbox-primary transition-colors font-medium"
                >
                  Sign In
                </Link>
                <Link
                  href="/signup"
                  className="bg-gradient-primary text-white px-6 py-2 rounded-full hover:opacity-90 hover:scale-105 transition-all duration-300 transform font-medium"
                >
                  Sign Up
                </Link>
              </div>
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
                  Platform
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
                  Success Stories
                </button>
                <div className="px-4 space-y-3">
                  <Link
                    href="/signin"
                    className="block w-full text-gray-600 hover:text-adbox-primary transition-colors font-medium text-left"
                  >
                    Sign In
                  </Link>
                  <Link
                    href="/signup"
                    className="block w-full bg-gradient-primary text-white px-6 py-2 rounded-full hover:opacity-90 transition-opacity font-medium text-center"
                  >
                    Sign Up
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-primary text-white overflow-hidden relative">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={ghanaCity}
            alt="Ghana digital cityscape showcasing mobile-first digital economy"
            className="w-full h-full object-cover opacity-25 transform scale-105 animate-fade-in"
          />
          <div className="absolute inset-0 bg-gradient-primary/75"></div>
          {/* Additional overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-adbox-primary/90 via-adbox-primary/70 to-adbox-secondary/90"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-in-up">
                Reach Ghana's
                <br />
                <span className="text-yellow-300 animate-pulse">
                  50,000+ Mobile Users
                </span>
                <br />
                with Precision
              </h1>
              <p className="text-xl text-purple-100 mb-8 max-w-lg mx-auto lg:mx-0 animate-fade-in-up animation-delay-200">
                The most effective digital advertising platform for brands
                targeting Ghana's engaged mobile audience. Launch campaigns that
                convert.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up animation-delay-400">
                <button className="bg-white text-adbox-primary px-8 py-4 rounded-full font-semibold hover:bg-gray-100 hover:scale-105 transition-all duration-300 transform flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl">
                  <Briefcase className="w-5 h-5" />
                  <span>Launch Campaign</span>
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-adbox-primary hover:scale-105 transition-all duration-300 transform flex items-center justify-center space-x-2">
                  <Video className="w-5 h-5" />
                  <span>View Demo</span>
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
                    <div className="text-center animate-pulse">
                      <div className="text-sm font-semibold text-gray-800">
                        Live Campaign Analytics
                      </div>
                      <div className="text-2xl font-bold text-green-600 animate-bounce">
                        ₵12,450
                      </div>
                      <div className="text-xs text-gray-500">
                        Monthly Ad Spend
                      </div>
                    </div>
                    {/* Ad preview mockup */}
                    <div className="bg-gradient-light rounded-lg h-32 flex items-center justify-center relative animate-pulse">
                      <Play className="text-adbox-primary w-8 h-8 bg-white/90 rounded-full p-2 hover:scale-110 transition-transform" />
                      <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-bold animate-pulse">
                        LIVE
                      </div>
                      <div className="absolute bottom-2 right-2 bg-green-500 text-white px-2 py-1 rounded text-xs font-bold">
                        95% CTR
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-xs font-medium text-gray-800">
                        MTN Ghana Business Solutions
                      </div>
                      <div className="bg-purple-100 rounded-lg p-3 animate-fade-in">
                        <div className="text-xs text-purple-800">
                          2,847 views • 94% completion • ₵0.85 CPV
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -left-4 bg-yellow-300 text-adbox-primary px-3 py-2 rounded-full text-sm font-bold animate-bounce hover:scale-110 transition-transform cursor-pointer">
                85% CTR
              </div>
              <div className="absolute top-20 -right-8 bg-green-400 text-white px-3 py-2 rounded-full text-sm font-bold animate-pulse hover:scale-110 transition-transform cursor-pointer">
                ₵0.75 CPV
              </div>
              <div className="absolute bottom-8 -left-6 bg-blue-500 text-white px-3 py-2 rounded-full text-sm font-bold animate-bounce animation-delay-500 hover:scale-110 transition-transform cursor-pointer">
                2.5M Reach
              </div>
            </div>
          </div>
        </div>

        {/* Wave decoration */}
        <div className="absolute bottom-0 left-0 right-0">
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
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in">
              <div className="text-3xl font-bold text-adbox-primary mb-2 animate-count-up">
                1,200+
              </div>
              <div className="text-gray-600">Active Publishers</div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in animation-delay-200">
              <div className="text-3xl font-bold text-green-600 mb-2 animate-count-up">
                ₵45M+
              </div>
              <div className="text-gray-600">Ad Spend Processed</div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in animation-delay-400">
              <div className="text-3xl font-bold text-adbox-secondary mb-2 animate-count-up">
                92%
              </div>
              <div className="text-gray-600">Average Completion Rate</div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in animation-delay-600">
              <div className="text-3xl font-bold text-purple-600 mb-2 animate-count-up">
                ₵0.65
              </div>
              <div className="text-gray-600">Average Cost Per View</div>
            </div>
          </div>
        </div>
      </section>

      {/* Publisher Dashboard Video Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Real-Time Campaign Analytics
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Monitor your campaign performance with our comprehensive
                analytics dashboard. Track completion rates, demographics, and
                ROI in real-time.
              </p>
              <div className="bg-gradient-primary text-white px-6 py-3 rounded-lg mb-6 inline-block">
                <div className="flex items-center space-x-2">
                  <Play className="w-5 h-5" />
                  <span className="font-semibold">
                    Watch live dashboard demo
                  </span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-gray-700">
                    Live campaign monitoring
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-gray-700">
                    Detailed audience demographics
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-gray-700">
                    Instant performance optimization
                  </span>
                </div>
              </div>
            </div>

            <div className="relative animate-fade-in-up animation-delay-200">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 group cursor-pointer">
                <img
                  src={publisherImage}
                  alt="Publisher viewing Adbox analytics dashboard showing campaign performance metrics"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent group-hover:from-black/40 transition-all duration-300"></div>

                {/* Video Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="w-20 h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform duration-300">
                    <Play className="text-adbox-primary w-8 h-8 ml-1" />
                  </div>
                </div>

                <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold animate-pulse">
                  LIVE CAMPAIGN
                </div>
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg group-hover:bg-white transition-colors duration-300">
                  <div className="text-sm font-semibold text-gray-800">
                    ₵12,450 Revenue
                  </div>
                  <div className="text-xs text-gray-600">This Month</div>
                </div>

                {/* Video indicator */}
                <div className="absolute top-4 right-4 bg-red-500 text-white px-2 py-1 rounded text-xs font-bold flex items-center space-x-1">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  <span>LIVE DEMO</span>
                </div>
              </div>

              {/* Floating stats */}
              <div className="absolute -top-6 -right-6 bg-white rounded-xl p-4 shadow-lg animate-bounce hover:scale-110 transition-transform cursor-pointer">
                <div className="text-lg font-bold text-green-600">95%</div>
                <div className="text-xs text-gray-600">Completion</div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-lg animate-bounce animation-delay-300 hover:scale-110 transition-transform cursor-pointer">
                <div className="text-lg font-bold text-adbox-primary">
                  ₵0.65
                </div>
                <div className="text-xs text-gray-600">Cost/View</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Publishers Choose Adbox
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The most cost-effective platform to reach Ghana's mobile-first
              audience with guaranteed engagement
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 animate-fade-in-up">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6 animate-pulse">
                <Briefcase className="text-white w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Precision Targeting
              </h3>
              <p className="text-gray-600">
                Target specific demographics, locations, and interests across
                Ghana. Reach exactly who you want with advanced audience
                segmentation.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 animate-fade-in-up animation-delay-200">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6 animate-pulse animation-delay-200">
                <Coins className="text-white w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Guaranteed Results
              </h3>
              <p className="text-gray-600">
                92% average completion rate with engaged audiences. Pay only for
                verified views and meaningful engagement with your brand.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6">
                <Shield className="text-white w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Transparent Analytics
              </h3>
              <p className="text-gray-600">
                Real-time campaign analytics, completion rates, audience
                insights, and ROI tracking for all your advertising campaigns.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6">
                <Video className="text-white w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Premium Ad Formats
              </h3>
              <p className="text-gray-600">
                Video ads, interactive surveys, product demos, and branded
                content optimized for mobile engagement.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6">
                <Users className="text-white w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Audience Targeting
              </h3>
              <p className="text-gray-600">
                Target specific demographics, interests, and locations across
                Ghana for maximum campaign effectiveness.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6">
                <Smartphone className="text-white w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Mobile-First Platform
              </h3>
              <p className="text-gray-600">
                Optimized for Ghana's mobile-first audience with seamless
                experience across all network conditions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-gradient-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How Adbox Works
            </h2>
            <p className="text-xl text-gray-600">
              A simple ecosystem connecting Publishers and Viewers
            </p>
          </div>

          {/* Publisher Process */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-white rounded-2xl p-8 shadow-xl animate-fade-in-up">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 animate-pulse">
                  <Briefcase className="text-white w-10 h-10" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">
                  Launch Your Campaign in 4 Steps
                </h3>
                <p className="text-gray-600">
                  Get your ads in front of 50,000+ engaged users today
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-4 hover:bg-gray-50 p-4 rounded-xl transition-colors duration-300">
                  <div className="w-10 h-10 bg-adbox-primary rounded-full flex items-center justify-center mt-1 animate-bounce">
                    <span className="text-white text-lg font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg mb-2">
                      Set Your Budget
                    </h4>
                    <p className="text-gray-600">
                      Start with as little as ₵100. Pay only for verified views
                      and engagement.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 hover:bg-gray-50 p-4 rounded-xl transition-colors duration-300">
                  <div className="w-10 h-10 bg-adbox-primary rounded-full flex items-center justify-center mt-1 animate-bounce animation-delay-200">
                    <span className="text-white text-lg font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg mb-2">
                      Upload Creative
                    </h4>
                    <p className="text-gray-600">
                      Video ads, surveys, or product demos. Our team helps
                      optimize for mobile.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 hover:bg-gray-50 p-4 rounded-xl transition-colors duration-300">
                  <div className="w-10 h-10 bg-adbox-primary rounded-full flex items-center justify-center mt-1 animate-bounce animation-delay-400">
                    <span className="text-white text-lg font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg mb-2">
                      Target Precisely
                    </h4>
                    <p className="text-gray-600">
                      Choose age, location, interests, and device types across
                      all 16 regions of Ghana.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 hover:bg-gray-50 p-4 rounded-xl transition-colors duration-300">
                  <div className="w-10 h-10 bg-adbox-primary rounded-full flex items-center justify-center mt-1 animate-bounce animation-delay-600">
                    <span className="text-white text-lg font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg mb-2">
                      Track & Optimize
                    </h4>
                    <p className="text-gray-600">
                      Real-time analytics dashboard shows completion rates,
                      demographics, and ROI.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Performance Guarantee */}
          <div className="text-center animate-fade-in-up animation-delay-800">
            <div className="inline-flex items-center space-x-6 bg-gradient-primary text-white rounded-2xl px-12 py-6 shadow-xl hover:scale-105 transition-transform duration-300">
              <div className="text-center">
                <div className="text-2xl font-bold">92%</div>
                <div className="text-sm opacity-90">Completion Rate</div>
              </div>
              <div className="w-px h-12 bg-white/30"></div>
              <div className="text-center">
                <div className="text-2xl font-bold">₵0.65</div>
                <div className="text-sm opacity-90">Avg Cost Per View</div>
              </div>
              <div className="w-px h-12 bg-white/30"></div>
              <div className="text-center">
                <div className="text-2xl font-bold">24hrs</div>
                <div className="text-sm opacity-90">Campaign Launch</div>
              </div>
            </div>
            <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
              Your advertising budget reaches verified users who are
              incentivized to engage completely with your content.
            </p>
          </div>
        </div>
      </section>

      {/* Campaign Showcase Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              See how leading brands are reaching Ghana's mobile audience
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Success Story 1 - MTN */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 animate-fade-in-up">
              <div className="relative h-48 bg-gradient-to-r from-yellow-400 to-red-500 flex items-center justify-center">
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-3xl font-bold mb-2">95%</div>
                    <div className="text-sm">Completion Rate</div>
                  </div>
                </div>
                <div className="absolute top-4 left-4 bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-bold animate-pulse">
                  MTN Ghana
                </div>
                <div className="absolute bottom-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                  ₵0.65 CPV
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-gray-900 mb-2">
                  Data Plan Campaign Success
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Reached 25,000+ users with 95% completion rate
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">
                    3 month campaign
                  </span>
                  <span className="text-green-600 font-semibold text-sm">
                    +340% ROI
                  </span>
                </div>
              </div>
            </div>

            {/* Success Story 2 - Vodafone */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 animate-fade-in-up animation-delay-200">
              <div className="relative h-48 bg-gradient-to-r from-red-500 to-pink-500 flex items-center justify-center">
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-3xl font-bold mb-2">₵18K</div>
                    <div className="text-sm">Revenue Generated</div>
                  </div>
                </div>
                <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold animate-pulse">
                  Vodafone
                </div>
                <div className="absolute bottom-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                  ₵0.70 CPV
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-gray-900 mb-2">
                  Mobile Money Campaign
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Increased app downloads by 280% in 2 months
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">
                    2 month campaign
                  </span>
                  <span className="text-green-600 font-semibold text-sm">
                    +280% Downloads
                  </span>
                </div>
              </div>
            </div>

            {/* Success Story 3 - Local Business */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 animate-fade-in-up animation-delay-400">
              <div className="relative h-48 bg-gradient-to-r from-green-500 to-blue-500 flex items-center justify-center">
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-3xl font-bold mb-2">12K</div>
                    <div className="text-sm">New Signups</div>
                  </div>
                </div>
                <div className="absolute top-4 left-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold animate-pulse">
                  GhanaPost GPS
                </div>
                <div className="absolute bottom-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                  ₵0.58 CPV
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-gray-900 mb-2">
                  Digital Address Awareness
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  12,000+ new GPS address registrations
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">6 week campaign</span>
                  <span className="text-green-600 font-semibold text-sm">
                    +450% Awareness
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Publishers Choose Adbox
            </h2>
            <p className="text-xl text-gray-600">
              The most effective way to reach Ghana's engaged mobile audience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Benefit 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
                <Users className="text-green-600 w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Engaged Audience
              </h3>
              <p className="text-gray-600">
                Reach 50,000+ active users who are incentivized to watch your
                ads completely, ensuring high completion rates.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                <Shield className="text-blue-600 w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Fraud Protection
              </h3>
              <p className="text-gray-600">
                Advanced verification ensures real users and genuine engagement,
                protecting your ad spend from fake views.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
                <Smartphone className="text-purple-600 w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Mobile-First
              </h3>
              <p className="text-gray-600">
                Perfect for Ghana's mobile-first market with optimized
                experiences across all network conditions.
              </p>
            </div>

            {/* Benefit 4 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mb-6">
                <Clock className="text-yellow-600 w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Real-Time Analytics
              </h3>
              <p className="text-gray-600">
                Monitor campaign performance, audience demographics, and ROI
                with live dashboards and detailed insights.
              </p>
            </div>

            {/* Benefit 5 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mb-6">
                <Coins className="text-red-600 w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Cost Effective
              </h3>
              <p className="text-gray-600">
                Lower cost per view compared to Facebook and Google Ads while
                reaching highly engaged local audiences.
              </p>
            </div>

            {/* Benefit 6 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
                <Video className="text-green-600 w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Multiple Formats
              </h3>
              <p className="text-gray-600">
                Support for video ads, interactive surveys, product demos, and
                branded content to maximize engagement.
              </p>
            </div>
          </div>

          {/* Call-to-Action */}
          <div className="text-center mt-16">
            <div className="bg-white rounded-2xl p-8 shadow-lg max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to Start Advertising?
              </h3>
              <p className="text-gray-600 mb-6">
                Join 500+ publishers already reaching Ghana's most engaged
                audience through Adbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-primary text-white px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-opacity">
                  Start Your Campaign
                </button>
                <button className="border-2 border-adbox-primary text-adbox-primary px-8 py-4 rounded-full font-semibold hover:bg-adbox-primary hover:text-white transition-colors">
                  View Pricing
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Publisher Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Publishers Are Saying
            </h2>
            <p className="text-xl text-gray-600">
              Real results from brands using Adbox
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Publisher Testimonial 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">KA</span>
                </div>
                <div className="ml-4">
                  <div className="font-bold text-gray-900">Kofi Asante</div>
                  <div className="text-sm text-gray-600">
                    Marketing Director, MTN Ghana
                  </div>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                "Adbox gave us 95% completion rates and ₵0.65 cost per view.
                Best ROI we've seen compared to Facebook and Google Ads."
              </p>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
            </div>

            {/* Publisher Testimonial 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up animation-delay-200">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">AM</span>
                </div>
                <div className="ml-4">
                  <div className="font-bold text-gray-900">Ama Mensah</div>
                  <div className="text-sm text-gray-600">
                    Brand Manager, Vodafone Ghana
                  </div>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                "We reached 18,000+ users and increased mobile money signups by
                280%. The targeting is incredibly precise for the Ghanaian
                market."
              </p>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
            </div>

            {/* Publisher Testimonial 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up animation-delay-400">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">KO</span>
                </div>
                <div className="ml-4">
                  <div className="font-bold text-gray-900">Kwame Osei</div>
                  <div className="text-sm text-gray-600">
                    Founder, Ghana Startup Hub
                  </div>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                "As a local startup, Adbox gave us access to engaged Ghanaian
                users at costs we could afford. Generated 450% increase in brand
                awareness."
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

      {/* CTA Section */}
      <section
        id="download"
        className="py-20 bg-gradient-primary text-white relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 animate-fade-in-up">
            Ready to Launch Your Campaign?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
            Join 1,200+ publishers already reaching Ghana's most engaged mobile
            audience. Launch your first campaign today with as little as ₵100.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up animation-delay-400">
            <button className="bg-white text-adbox-primary px-8 py-4 rounded-full font-semibold hover:bg-gray-100 hover:scale-105 transition-all duration-300 transform flex items-center justify-center space-x-3 shadow-xl">
              <Briefcase className="w-6 h-6" />
              <div className="text-left">
                <div className="text-sm">Start Your</div>
                <div className="text-lg font-bold">Campaign Today</div>
              </div>
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-adbox-primary hover:scale-105 transition-all duration-300 transform flex items-center justify-center space-x-3">
              <Video className="w-6 h-6" />
              <div className="text-left">
                <div className="text-sm">Watch</div>
                <div className="text-lg font-bold">Platform Demo</div>
              </div>
            </button>
          </div>

          <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm animate-fade-in-up animation-delay-600">
            <h3 className="text-2xl font-bold mb-6">Platform Performance</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="hover:scale-105 transition-transform duration-300">
                <div className="text-4xl font-bold text-yellow-300 mb-2 animate-count-up">
                  92%
                </div>
                <div className="text-purple-100">Average completion rate</div>
              </div>
              <div className="hover:scale-105 transition-transform duration-300">
                <div className="text-4xl font-bold text-yellow-300 mb-2 animate-count-up">
                  ₵0.65
                </div>
                <div className="text-purple-100">Average cost per view</div>
              </div>
              <div className="hover:scale-105 transition-transform duration-300">
                <div className="text-4xl font-bold text-yellow-300 mb-2 animate-count-up">
                  24hrs
                </div>
                <div className="text-purple-100">Campaign launch time</div>
              </div>
            </div>
          </div>

          <p className="text-purple-200 mt-8 text-lg animate-fade-in-up animation-delay-800">
            No setup fees • No minimum spend • Cancel anytime
          </p>
        </div>

        {/* Floating animation elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-white/10 rounded-full animate-float animation-delay-400"></div>
        <div className="absolute top-40 right-20 w-12 h-12 bg-white/10 rounded-full animate-float animation-delay-600"></div>
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
                Ghana's premier digital advertising platform connecting brands
                with engaged mobile audiences.
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
                  <span>hello@adbox.gh</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>+233 50 123 4567</span>
                </li>
                <li className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>Accra, Ghana</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>
              &copy; 2024 Adbox. All rights reserved. Made with ❤️ in Ghana.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
