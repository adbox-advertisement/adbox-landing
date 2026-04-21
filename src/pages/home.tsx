import { useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  BarChart3,
  Briefcase,
  CheckCircle2,
  ChevronDown,
  Clock,
  Mail,
  Menu,
  MousePointer2,
  Phone,
  Play,
  Shield,
  Smartphone,
  Sparkles,
  Store,
  Target,
  Users,
  Video,
  X,
  Zap,
} from "lucide-react";
import {
  LazyMotion,
  domAnimation,
  m,
} from "framer-motion";
import { Link } from "wouter";

type NodePoint = {
  id: string;
  x: number;
  y: number;
  label: string;
  value: string;
  image?: string;
  tone?: "mint" | "sky" | "rose" | "gold";
};

const viewerNodes: NodePoint[] = [
  { id: "v1", x: 6, y: 12, label: "Students", value: "42K", tone: "sky", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=96&h=96&q=55" },
  { id: "v2", x: 15, y: 34, label: "Shoppers", value: "18K", tone: "mint", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=96&h=96&q=55" },
  { id: "v3", x: 7, y: 58, label: "Families", value: "63K", tone: "rose", image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=96&h=96&q=55" },
  { id: "v4", x: 22, y: 83, label: "Commuters", value: "31K", tone: "gold", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=96&h=96&q=55" },
  { id: "v5", x: 28, y: 19, label: "Creators", value: "27K", tone: "rose", image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=96&h=96&q=55" },
  { id: "v6", x: 19, y: 68, label: "Workers", value: "55K", tone: "sky", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=96&h=96&q=55" },
  { id: "v7", x: 32, y: 48, label: "Buyers", value: "21K", tone: "mint", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=96&h=96&q=55" },
  { id: "v8", x: 12, y: 90, label: "Fans", value: "39K", tone: "gold", image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?auto=format&fit=crop&w=96&h=96&q=55" },
];

const businessNodes: NodePoint[] = [
  { id: "b1", x: 92, y: 13, label: "Retail owner", value: "+312%", image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=96&h=96&q=55" },
  { id: "b2", x: 82, y: 34, label: "Food owner", value: "8.1K", image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=96&h=96&q=55" },
  { id: "b3", x: 94, y: 58, label: "Fintech owner", value: "94%", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=96&h=96&q=55" },
  { id: "b4", x: 76, y: 82, label: "Event owner", value: "24h", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=96&h=96&q=55" },
  { id: "b5", x: 68, y: 20, label: "Service owner", value: "Active", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=96&h=96&q=55" },
  { id: "b6", x: 88, y: 78, label: "Health owner", value: "Live", image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=96&h=96&q=55" },
  { id: "b7", x: 70, y: 52, label: "Beauty owner", value: "High", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=96&h=96&q=55" },
  { id: "b8", x: 86, y: 91, label: "Travel owner", value: "Ready", image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=96&h=96&q=55" },
];

const hubNodes: NodePoint[] = [
  { id: "h1", x: 43, y: 22, label: "Interest", value: "Match" },
  { id: "h2", x: 52, y: 39, label: "Location", value: "Sync" },
  { id: "h3", x: 45, y: 61, label: "Intent", value: "Pulse" },
  { id: "h4", x: 57, y: 76, label: "Creative", value: "Flow" },
];

const allConnections = [
  ...viewerNodes.flatMap((viewer, viewerIndex) =>
    hubNodes.map((hub, hubIndex) => ({
      id: `${viewer.id}-${hub.id}`,
      from: viewer,
      to: hub,
      weight: (viewerIndex + hubIndex) % 2 === 0 ? "primary" : "soft",
    }))
  ),
  ...hubNodes.flatMap((hub, hubIndex) =>
    businessNodes.map((business, businessIndex) => ({
      id: `${hub.id}-${business.id}`,
      from: hub,
      to: business,
      weight: (hubIndex + businessIndex) % 2 === 0 ? "primary" : "soft",
    }))
  ),
  ...hubNodes.flatMap((hub, index) =>
    hubNodes
      .filter((_, nextIndex) => nextIndex > index)
      .map((nextHub) => ({
        id: `${hub.id}-${nextHub.id}`,
        from: hub,
        to: nextHub,
        weight: "core",
      }))
  ),
  ...viewerNodes.flatMap((viewer, viewerIndex) =>
    businessNodes
      .filter((_, businessIndex) => (viewerIndex * 2 + businessIndex) % 5 === 0)
      .map((business) => ({
        id: `${viewer.id}-${business.id}-direct`,
        from: viewer,
        to: business,
        weight: "direct",
      }))
  ),
];

const visibleConnections = allConnections.filter((_, index) => index % 3 === 0);

const stats = [
  { value: "30M+", label: "reachable mobile audience" },
  { value: "95%", label: "average video completion" },
  { value: "24h", label: "campaign launch window" },
  { value: "Live", label: "audience signal tracking" },
];

const capabilities = [
  {
    icon: Target,
    title: "Audience targeting",
    text: "Build campaigns around location, interest, behavior, and phone-first attention patterns.",
  },
  {
    icon: Video,
    title: "High-retention formats",
    text: "Run video ads, interactive prompts, demos, and reward-led placements designed for completion.",
  },
  {
    icon: BarChart3,
    title: "Live campaign intelligence",
    text: "Track views, completion, audience response, and conversion signals while the campaign is still moving.",
  },
  {
    icon: Shield,
    title: "Verified delivery",
    text: "Use clean reporting that shows which audiences, channels, and messages are creating momentum.",
  },
];

const flowSteps = [
  {
    number: "01",
    title: "Choose the market",
    text: "Pick the people, regions, and interests that matter to the business.",
  },
  {
    number: "02",
    title: "Launch the signal",
    text: "Adbox distributes the campaign through customer paths that already have attention.",
  },
  {
    number: "03",
    title: "Watch demand form",
    text: "Business owners see live results as customers engage, share, visit, and buy.",
  },
];

const storyCards = [
  {
    name: "Neighborhood retail",
    metric: "+312%",
    label: "store visits",
    image:
      "https://images.unsplash.com/photo-1556741533-6e6a62bd8b49?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Mobile food brand",
    metric: "8.1K",
    label: "new orders",
    image:
      "https://images.unsplash.com/photo-1526367790999-0150786686a2?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Service campaign",
    metric: "94%",
    label: "completion rate",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=80",
  },
];

function NetworkNode({
  node,
  type,
  index,
}: {
  node: NodePoint;
  type: "viewer" | "business" | "hub";
  index: number;
}) {
  const tone = node.tone ?? "sky";

  return (
    <m.div
      className={`absolute network-node ${
        type === "viewer"
          ? `viewer-node viewer-node-${tone}`
          : type === "hub"
            ? "hub-node"
            : "business-node"
      }`}
      style={{ left: `${node.x}%`, top: `${node.y}%` }}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.35 + index * 0.08, duration: 0.7, ease: "easeOut" }}
      whileHover={{ scale: 1.12, zIndex: 20 }}
    >
      {type === "viewer" ? (
        <>
          {node.image && <img className="node-photo" src={node.image} alt="" loading="eager" decoding="async" />}
          <span className="node-label">{node.label}</span>
          <span className="node-value">{node.value}</span>
        </>
      ) : (
        <>
          {type === "business" && node.image && (
            <img className="node-photo business-photo" src={node.image} alt="" loading="eager" decoding="async" />
          )}
          <span className="node-value">{node.value}</span>
          <span className="node-label">{node.label}</span>
        </>
      )}
    </m.div>
  );
}

function AdboxNetwork() {
  return (
    <div className="network-stage">
      <div className="network-halo halo-one" />
      <div className="network-halo halo-two" />
      <div className="network-copy left-copy">
        <Users className="h-4 w-4" />
        <span>Customers</span>
      </div>
      <div className="network-copy right-copy">
        <Store className="h-4 w-4" />
        <span>Business owners</span>
      </div>

      <svg className="connection-canvas" viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#40a7fa" />
            <stop offset="28%" stopColor="#1de5e7" />
            <stop offset="62%" stopColor="#b644f5" />
            <stop offset="100%" stopColor="#f85aef" />
          </linearGradient>
        </defs>
        {visibleConnections.map((connection, index) => {
          const midX = 50 + ((index % 7) - 3) * 2.8;
          const midY = 50 + ((index % 9) - 4) * 5.8;
          const path = `M ${connection.from.x} ${connection.from.y} Q ${midX} ${midY} ${connection.to.x} ${connection.to.y}`;
          const isSoft = connection.weight === "soft";
          const isDirect = connection.weight === "direct";

          return (
            <path
              key={connection.id}
              d={path}
              fill="none"
              stroke="url(#connectionGradient)"
              strokeWidth={connection.weight === "core" ? "0.42" : isDirect ? "0.18" : isSoft ? "0.12" : "0.26"}
              strokeLinecap="round"
              strokeDasharray={isDirect ? "1.2 1.4" : undefined}
              opacity={isSoft ? 0.34 : isDirect ? 0.42 : 0.66}
            />
          );
        })}
      </svg>

      {viewerNodes.map((node, index) => (
        <NetworkNode key={node.id} node={node} index={index} type="viewer" />
      ))}
      {businessNodes.map((node, index) => (
        <NetworkNode key={node.id} node={node} index={index} type="business" />
      ))}
      {hubNodes.map((node, index) => (
        <NetworkNode key={node.id} node={node} index={index} type="hub" />
      ))}

      <div className="adbox-core">
        <div className="orbit orbit-one" />
        <div className="orbit orbit-two" />
        <div className="core-disc">
          <img src="/use%20this.png" alt="" />
          <span>Adbox</span>
        </div>
        <div className="satellite satellite-one">
          <MousePointer2 className="h-4 w-4" />
        </div>
        <div className="satellite satellite-two">
          <Play className="h-4 w-4" />
        </div>
        <div className="satellite satellite-three">
          <Zap className="h-4 w-4" />
        </div>
      </div>
    </div>
  );
}

export default function ModernAdboxLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = useMemo(
    () => [
      { label: "Network", id: "network" },
      { label: "Process", id: "process_overview" },
      { label: "Results", id: "success_stories" },
    ],
    []
  );

  useEffect(() => {
    let ticking = false;
    let scrolled = false;
    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const nextScrolled = window.scrollY > 24;
        if (nextScrolled !== scrolled) {
          scrolled = nextScrolled;
          setIsScrolled(nextScrolled);
        }
        ticking = false;
      });
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <LazyMotion features={domAnimation}>
    <div className="adbox-page text-white">
      <nav className={`adbox-nav ${isScrolled ? "nav-scrolled" : ""}`}>
        <div className="nav-inner">
          <button className="brand-mark" onClick={() => scrollToSection("top")} aria-label="Go to top">
            <img className="brand-logo" src="/AdBox-logo-Coloured-Light.svg" alt="Adbox" />
          </button>

          <div className="desktop-nav">
            {navItems.map((item) => (
              <button key={item.id} onClick={() => scrollToSection(item.id)}>
                {item.label}
              </button>
            ))}
            <Link href="/signin" className="nav-link">
              Sign in
            </Link>
            <Link href="/signup" className="nav-cta">
              Start campaign
            </Link>
          </div>

          <button
            className="mobile-menu-button"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-label="Open navigation menu"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {isMenuOpen && (
          <m.div
            className="mobile-nav"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {navItems.map((item) => (
              <button key={item.id} onClick={() => scrollToSection(item.id)}>
                {item.label}
              </button>
            ))}
            <Link href="/signin">Sign in</Link>
            <Link href="/signup" className="mobile-cta">
              Start campaign
            </Link>
          </m.div>
        )}
      </nav>

      <m.section id="top" className="hero-section">
        <div className="grid-field" />
        <div className="hero-content">
          <m.div
            className="hero-copy"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="eyebrow">
              <Sparkles className="h-4 w-4" />
              Ghana's customer to business owner network
            </div>
            <h1>
              A bigger, brighter way to connect customers with business owners.
            </h1>
            <p>
              Adbox connects business owners to customers already watching, tapping,
              sharing, and discovering. Launch a campaign, follow the signal, and
              see attention move through the network.
            </p>
            <div className="hero-actions">
              <Link href="/signup" className="primary-action">
                Start campaign <ArrowRight className="h-5 w-5" />
              </Link>
              <button className="secondary-action" onClick={() => scrollToSection("network")}>
                Explore the network
              </button>
            </div>
          </m.div>

          <AdboxNetwork />
        </div>

        <div className="hero-stat-row">
          {stats.map((stat, index) => (
            <m.div
              key={stat.label}
              className="stat-tile"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65 + index * 0.08, duration: 0.55 }}
            >
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </m.div>
          ))}
        </div>

        <button className="scroll-cue" onClick={() => scrollToSection("network")} aria-label="Scroll to network">
          <ChevronDown className="h-7 w-7" />
        </button>
      </m.section>

      <section id="network" className="network-story-section">
        <div className="section-heading">
          <span>Signal flow</span>
          <h2>Customers and business owners do not sit in separate worlds anymore.</h2>
          <p>
            Adbox acts like a live bridge between attention and ambition:
            customers create momentum, business owners receive measurable demand, and the
            network keeps learning where the next conversion should go.
          </p>
        </div>

        <div className="signal-grid">
          {capabilities.map((item, index) => (
            <m.article
              key={item.title}
              className="signal-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ delay: index * 0.08, duration: 0.55 }}
            >
              <item.icon className="h-7 w-7" />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </m.article>
          ))}
        </div>

        <div className="team-showcase">
          <div className="team-image-wrap">
            <img
              src="/adboxteam.webp"
              alt="Adbox team"
              width="1536"
              height="1024"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="team-copy">
            <span>Team on the ground</span>
            <h3>Built close to the people, creators, and businesses it serves.</h3>
            <p>
              Adbox brings local market insight, campaign execution, and live
              audience feedback into one path, so business owners can move from
              idea to measurable demand without guesswork.
            </p>
          </div>
        </div>
      </section>

      <section id="process_overview" className="process-section">
        <div className="process-rail">
          {flowSteps.map((step, index) => (
            <m.div
              key={step.number}
              className="process-step"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.65, ease: "easeOut" }}
            >
              <span>{step.number}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </m.div>
          ))}
        </div>

        <m.div
          className="phone-console"
          initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7 }}
        >
          <div className="iphone-island" />
          <div className="phone-screen">
            <div className="campaign-visual" />
            <div className="phone-video-shade" />
            <div className="phone-status">
              <span>9:41</span>
              <span>5G</span>
            </div>
            <div className="phone-content">
              <div className="live-pill">Live campaign</div>
              <h3>Adbox signal preview</h3>
              <p>Customers are engaging with the campaign in real time.</p>
            </div>
            <div className="metric-stack">
              <div>
                <span>Views</span>
                <strong>128,450</strong>
              </div>
              <div>
                <span>Completion</span>
                <strong>95%</strong>
              </div>
              <div>
                <span>Audience pulse</span>
                <strong>Live</strong>
              </div>
            </div>
          </div>
        </m.div>
      </section>

      <section id="success_stories" className="results-section">
        <div className="section-heading">
          <span>Proof of movement</span>
          <h2>Every campaign becomes a visible path from attention to action.</h2>
        </div>

        <div className="story-grid">
          {storyCards.map((story, index) => (
            <m.article
              key={story.name}
              className="story-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <img src={story.image} alt="" width="900" height="600" loading="lazy" decoding="async" />
              <div className="story-overlay">
                <span>{story.name}</span>
                <strong>{story.metric}</strong>
                <p>{story.label}</p>
              </div>
            </m.article>
          ))}
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-panel">
          <div>
            <span className="eyebrow dark">
              <CheckCircle2 className="h-4 w-4" />
              Built for business owners
            </span>
            <h2>Put your business inside the attention network.</h2>
            <p>
              Start with a focused campaign, measure the response, and scale into
              the channels that are already producing customers.
            </p>
          </div>
          <div className="cta-actions">
            <Link href="/signup" className="primary-action dark-action">
              Start campaign <Briefcase className="h-5 w-5" />
            </Link>
            <button className="secondary-action dark-outline" onClick={() => scrollToSection("contact")}>
              Schedule demo
            </button>
          </div>
        </div>
      </section>

      <footer id="contact" className="footer-section">
        <div className="footer-brand">
          <div className="brand-mark static">
            <img className="brand-logo footer-logo" src="/AdBox-logo-white.svg" alt="Adbox" />
          </div>
          <p>
            Ghana's digital advertising platform for connecting business owners
            with customers who are ready to act.
          </p>
        </div>

        <div className="footer-contact">
          <a href="tel:+233538897225">
            <Phone className="h-4 w-4" /> +233 53 889 7225
          </a>
          <a href="mailto:info@adboxgh.com">
            <Mail className="h-4 w-4" /> info@adboxgh.com
          </a>
          <span>
            <Clock className="h-4 w-4" /> Campaigns launch in 24 hours
          </span>
          <span>
            <Smartphone className="h-4 w-4" /> Mobile-first delivery
          </span>
        </div>
      </footer>
    </div>
    </LazyMotion>
  );
}
