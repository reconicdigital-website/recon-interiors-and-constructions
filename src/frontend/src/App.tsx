import {
  Building2,
  CheckCircle2,
  ChevronRight,
  Clock,
  Compass,
  Droplets,
  Eye,
  FileCheck,
  Hammer,
  Home,
  Layers,
  Mail,
  Map as MapIcon,
  MapPin,
  Menu,
  MessageCircle,
  PenTool,
  Phone,
  RefreshCw,
  Search,
  Star,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Packages", href: "#packages" },
  { label: "Vastu", href: "#vastu" },
  { label: "Safety", href: "#safety" },
  { label: "Contact", href: "#contact" },
];

const SERVICES = [
  { icon: FileCheck, label: "Building Permission & CC" },
  { icon: PenTool, label: "Approval Drawing & Estimation" },
  { icon: Home, label: "Interior Designing" },
  { icon: Building2, label: "Exterior Designing" },
  { icon: Hammer, label: "Building Contract" },
  { icon: RefreshCw, label: "Renovation & Restoration" },
  { icon: Layers, label: "RCC & Steel Structural Design" },
  { icon: MapIcon, label: "Architectural Planning" },
  { icon: Compass, label: "Vastu Consultation" },
  { icon: Eye, label: "Building Supervision" },
  { icon: Droplets, label: "Waterproofing Solutions" },
  { icon: Search, label: "Site Inspection" },
];

const PACKAGES = [
  { name: "Classic", price: "\u20b91,872", featured: false },
  { name: "Standard", price: "\u20b92,151", featured: false },
  { name: "Premium-I", price: "\u20b92,511", featured: true },
  { name: "Premium-II", price: "\u20b92,691", featured: false },
];

const PROJECTS = [
  {
    title: "Renovation & Restoration",
    description: "80-year-old mud wall building renovated at Keshwapur Hubli.",
    color: "from-amber-800 to-amber-600",
  },
  {
    title: "Residential Building Renovation",
    description: "20-year-old building at Kalidas Nagar Hubli renovated.",
    color: "from-stone-700 to-stone-500",
  },
  {
    title: "Innovative Building Project",
    description:
      "Residential building using interlocking mud-blocks at Hebballi village.",
    color: "from-teal-800 to-teal-600",
  },
  {
    title: "Architectural Residential Building",
    description: "Modern residential building at Gabbur village, Hubli.",
    color: "from-slate-700 to-slate-500",
  },
];

const GALLERY_ITEMS = [
  { id: "project-1", color: "from-[#C9772A] to-amber-700" },
  { id: "project-2", color: "from-[#1F3545] to-slate-600" },
  { id: "project-3", color: "from-stone-600 to-stone-400" },
  { id: "project-4", color: "from-amber-700 to-yellow-600" },
  { id: "project-5", color: "from-slate-700 to-slate-500" },
  { id: "project-6", color: "from-teal-700 to-teal-500" },
];

const ELEVATION_ITEMS = [
  { id: "elev-1", color: "from-[#1F3545] to-blue-800" },
  { id: "elev-2", color: "from-stone-700 to-stone-500" },
  { id: "elev-3", color: "from-[#C9772A] to-orange-600" },
  { id: "elev-4", color: "from-slate-600 to-slate-400" },
  { id: "elev-5", color: "from-amber-800 to-amber-600" },
  { id: "elev-6", color: "from-teal-800 to-teal-600" },
  { id: "elev-7", color: "from-zinc-700 to-zinc-500" },
  { id: "elev-8", color: "from-blue-900 to-blue-700" },
  { id: "elev-9", color: "from-stone-600 to-amber-600" },
];

const SAFETY_POINTS = [
  "Comprehensive safety training for all workers",
  "Restricted site access & supervision",
  "Mandatory safety gear usage",
];

const VASTU_BENEFITS = [
  "Enhances health and well-being",
  "Attracts prosperity and success",
  "Fosters peace and harmony",
  "Increases positive energy flow",
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-recon-bg font-sans">
      {/* STICKY HEADER */}
      <header
        data-ocid="nav.panel"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white shadow-md" : "bg-white/95 shadow-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-lg bg-recon-orange flex items-center justify-center">
                <Building2 className="w-5 h-5 text-white" />
              </div>
              <div className="leading-tight">
                <span className="text-xl font-extrabold text-recon-dark tracking-wider">
                  RECON
                </span>
                <span className="hidden sm:block text-[9px] font-semibold text-recon-gray uppercase tracking-widest -mt-1">
                  Interiors & Constructions
                </span>
              </div>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <button
                  type="button"
                  key={link.label}
                  data-ocid={`nav.${link.label.toLowerCase()}.link`}
                  onClick={() => scrollTo(link.href)}
                  className="px-3 py-2 text-sm font-medium text-recon-dark hover:text-recon-orange transition-colors rounded-lg hover:bg-orange-50"
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* CTA */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                data-ocid="nav.quote.button"
                onClick={() => scrollTo("#contact")}
                className="hidden sm:flex items-center gap-1 bg-recon-orange text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-orange-700 transition-colors"
              >
                GET A QUOTE
                <ChevronRight className="w-4 h-4" />
              </button>
              <button
                type="button"
                data-ocid="nav.menu.toggle"
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden p-2 rounded-lg text-recon-dark hover:bg-gray-100"
              >
                {menuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              data-ocid="nav.mobile.panel"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
            >
              <div className="px-4 py-3 flex flex-col gap-1">
                {NAV_LINKS.map((link) => (
                  <button
                    type="button"
                    key={link.label}
                    onClick={() => scrollTo(link.href)}
                    className="text-left px-3 py-2.5 text-sm font-medium text-recon-dark hover:text-recon-orange hover:bg-orange-50 rounded-lg transition-colors"
                  >
                    {link.label}
                  </button>
                ))}
                <button
                  type="button"
                  onClick={() => scrollTo("#contact")}
                  className="mt-2 bg-recon-orange text-white px-5 py-2.5 rounded-full text-sm font-semibold"
                >
                  GET A QUOTE
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* HERO */}
      <section
        id="home"
        className="relative min-h-[520px] md:min-h-[580px] flex items-center justify-center text-center overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('/assets/generated/hero-recon.dim_1920x600.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-recon-navy/90 via-recon-dark/80 to-recon-navy/70" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 px-4 max-w-4xl mx-auto pt-20"
        >
          <div className="inline-flex items-center gap-2 bg-recon-orange/20 border border-recon-orange/40 text-orange-200 text-xs font-semibold px-4 py-1.5 rounded-full mb-6 uppercase tracking-widest">
            <Building2 className="w-3.5 h-3.5" />
            Trusted Construction & Interiors
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold uppercase text-white tracking-tight leading-tight mb-4">
            RECON Interiors
            <br />
            <span className="text-recon-orange">& Constructions</span>
          </h1>
          <p className="text-xl md:text-2xl font-semibold text-orange-200 mb-3 uppercase tracking-widest">
            Build with the Best
          </p>
          <p className="text-white/75 text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Quick turnaround, practical solutions, and cost-effective
            engineering for your dream construction.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              type="button"
              data-ocid="hero.projects.button"
              onClick={() => scrollTo("#projects")}
              className="bg-recon-orange text-white px-8 py-3.5 rounded-full font-semibold text-sm uppercase tracking-wide hover:bg-orange-700 transition-colors"
            >
              View Our Projects
            </button>
            <button
              type="button"
              data-ocid="hero.contact.button"
              onClick={() => scrollTo("#contact")}
              className="bg-white/15 border border-white/30 text-white px-8 py-3.5 rounded-full font-semibold text-sm uppercase tracking-wide hover:bg-white/25 transition-colors"
            >
              Contact Us
            </button>
          </div>
        </motion.div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-recon-orange font-semibold text-sm uppercase tracking-widest mb-2">
                Who We Are
              </p>
              <h2 className="text-3xl md:text-4xl font-extrabold uppercase text-recon-dark mb-6">
                About Us
              </h2>
              <p className="text-recon-gray leading-relaxed text-base mb-6">
                RECON Interiors and Constructions is committed to providing
                quick turnaround and highly practical, cost-effective solutions
                for engineering and design requirements. Known for excellent
                customer service, collaboration with developers, architects, and
                contractors, we ensure projects move forward without delays.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  ["12+", "Years Experience"],
                  ["150+", "Projects Completed"],
                  ["50+", "Happy Clients"],
                  ["12", "Expert Services"],
                ].map(([num, label]) => (
                  <div key={label} className="bg-recon-bg rounded-xl p-4">
                    <div className="text-2xl font-extrabold text-recon-orange">
                      {num}
                    </div>
                    <div className="text-xs font-medium text-recon-gray mt-1">
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-recon-navy to-slate-700 aspect-[4/3]">
                <img
                  src="/assets/generated/hero-recon.dim_1920x600.jpg"
                  alt="RECON construction"
                  className="w-full h-full object-cover opacity-80"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-recon-orange text-white rounded-2xl p-4 shadow-lg">
                <div className="text-2xl font-extrabold">\u20b91,872</div>
                <div className="text-xs font-medium opacity-90">
                  Starting per sq.ft
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section id="packages" className="py-16 md:py-20 bg-recon-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-recon-orange font-semibold text-sm uppercase tracking-widest mb-2">
              Pricing
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold uppercase text-recon-dark">
              Packages for Building Constructions
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PACKAGES.map((pkg, i) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                data-ocid={`packages.item.${i + 1}`}
                className={`rounded-2xl p-7 shadow-card flex flex-col gap-4 relative ${
                  pkg.featured
                    ? "bg-recon-navy text-white ring-2 ring-recon-orange"
                    : "bg-white text-recon-dark"
                }`}
              >
                {pkg.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-recon-orange text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wide">
                    Most Popular
                  </div>
                )}
                <div>
                  <div
                    className={`text-xs font-bold uppercase tracking-widest mb-1 ${
                      pkg.featured ? "text-orange-300" : "text-recon-orange"
                    }`}
                  >
                    {pkg.name}
                  </div>
                  <div className="text-3xl font-extrabold">{pkg.price}</div>
                  <div
                    className={`text-sm font-medium ${
                      pkg.featured ? "text-white/60" : "text-recon-gray"
                    }`}
                  >
                    per sq.ft
                  </div>
                </div>
                <ul className="flex flex-col gap-2 flex-1">
                  {[
                    "Architectural drawings",
                    "Structural design",
                    "Interior planning",
                    "Supervision",
                  ].map((feat) => (
                    <li key={feat} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 flex-shrink-0 text-recon-orange" />
                      <span
                        className={
                          pkg.featured ? "text-white/80" : "text-recon-gray"
                        }
                      >
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  data-ocid={`packages.item.${i + 1}.button`}
                  onClick={() => scrollTo("#contact")}
                  className={`w-full py-2.5 rounded-full text-sm font-semibold transition-colors ${
                    pkg.featured
                      ? "bg-recon-orange text-white hover:bg-orange-700"
                      : "bg-recon-orange/10 text-recon-orange hover:bg-recon-orange hover:text-white border border-recon-orange"
                  }`}
                >
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-recon-orange font-semibold text-sm uppercase tracking-widest mb-2">
              What We Offer
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold uppercase text-recon-dark">
              Our Services
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {SERVICES.map((service, i) => (
              <motion.div
                key={service.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
                data-ocid={`services.item.${i + 1}`}
                className="bg-recon-bg rounded-xl p-5 flex flex-col gap-3 hover:shadow-card transition-shadow group"
              >
                <div className="w-11 h-11 rounded-lg bg-recon-orange/10 flex items-center justify-center group-hover:bg-recon-orange transition-colors">
                  <service.icon className="w-5 h-5 text-recon-orange group-hover:text-white transition-colors" />
                </div>
                <p className="text-sm font-semibold text-recon-dark leading-snug">
                  {service.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-16 md:py-20 bg-recon-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-recon-orange font-semibold text-sm uppercase tracking-widest mb-2">
              Our Work
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold uppercase text-recon-dark">
              Our Projects
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROJECTS.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                data-ocid={`projects.item.${i + 1}`}
                className="bg-white rounded-2xl overflow-hidden shadow-card"
              >
                <div
                  className={`h-40 bg-gradient-to-br ${project.color} flex items-end p-4`}
                >
                  <Building2 className="w-10 h-10 text-white/40" />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-recon-dark text-sm mb-2">
                    {project.title}
                  </h3>
                  <p className="text-recon-gray text-xs leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY - Completed Projects */}
      <section id="gallery" className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-recon-orange font-semibold text-sm uppercase tracking-widest mb-2">
              Portfolio
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold uppercase text-recon-dark">
              Completed Projects Gallery
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {GALLERY_ITEMS.map(({ id, color: itemColor }, i) => (
              <motion.div
                key={id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
                data-ocid={`gallery.item.${i + 1}`}
                className={`rounded-xl bg-gradient-to-br ${itemColor} aspect-video flex items-end p-4 cursor-pointer hover:opacity-90 transition-opacity`}
              >
                <span className="text-white font-semibold text-sm bg-black/30 px-3 py-1 rounded-full">
                  Project {i + 1}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY - Elevation Designs */}
      <section className="py-16 md:py-20 bg-recon-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-recon-orange font-semibold text-sm uppercase tracking-widest mb-2">
              Design Showcase
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold uppercase text-recon-dark">
              Elevation Designs Gallery
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {ELEVATION_ITEMS.map(({ id, color: itemColor }, i) => (
              <motion.div
                key={id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.04 }}
                data-ocid={`elevation.item.${i + 1}`}
                className={`rounded-xl bg-gradient-to-br ${itemColor} aspect-video flex items-end p-4 cursor-pointer hover:opacity-90 transition-opacity`}
              >
                <span className="text-white font-semibold text-sm bg-black/30 px-3 py-1 rounded-full">
                  Elevation {i + 1}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SAFETY */}
      <section id="safety" className="py-16 md:py-20 bg-recon-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-orange-300 font-semibold text-sm uppercase tracking-widest mb-2">
                Our Commitment
              </p>
              <h2 className="text-3xl md:text-4xl font-extrabold uppercase text-white mb-6">
                Safety Standards
              </h2>
              <p className="text-white/60 mb-8 leading-relaxed">
                At RECON, safety is never compromised. We maintain strict safety
                protocols across all our construction sites to protect our
                workers and clients.
              </p>
              <ul className="flex flex-col gap-4">
                {SAFETY_POINTS.map((point, idx) => (
                  <li
                    key={point}
                    data-ocid={`safety.item.${idx + 1}`}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-recon-orange flex-shrink-0 mt-0.5" />
                    <span className="text-white/85 font-medium">{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                ["100%", "Safety Compliance"],
                ["0", "Safety Incidents"],
                ["50+", "Trained Workers"],
                ["24/7", "Site Monitoring"],
              ].map(([num, label]) => (
                <div
                  key={label}
                  className="bg-white/10 border border-white/10 rounded-xl p-5 text-center"
                >
                  <div className="text-2xl font-extrabold text-recon-orange">
                    {num}
                  </div>
                  <div className="text-white/60 text-xs mt-1 font-medium">
                    {label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* VASTU */}
      <section id="vastu" className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-64 h-64 mx-auto md:mx-0 rounded-full bg-gradient-to-br from-orange-50 to-amber-100 border-4 border-recon-orange/20 flex items-center justify-center">
                <div className="w-48 h-48 rounded-full bg-gradient-to-br from-recon-orange/20 to-amber-200 flex items-center justify-center">
                  <Compass className="w-20 h-20 text-recon-orange" />
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <p className="text-recon-orange font-semibold text-sm uppercase tracking-widest mb-2">
                Ancient Wisdom
              </p>
              <h2 className="text-3xl md:text-4xl font-extrabold uppercase text-recon-dark mb-4">
                Vastu Shastra
              </h2>
              <p className="text-recon-gray leading-relaxed mb-6">
                The ancient science of harmonious living. Vastu enhances health
                and well-being, attracts prosperity and success, fosters peace
                and harmony, and increases positive energy flow.
              </p>
              <ul className="flex flex-col gap-3">
                {VASTU_BENEFITS.map((text) => (
                  <li key={text} className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-full bg-recon-orange/10 flex items-center justify-center flex-shrink-0">
                      <Star className="w-3.5 h-3.5 text-recon-orange fill-recon-orange" />
                    </div>
                    <span className="text-recon-dark font-medium text-sm">
                      {text}
                    </span>
                  </li>
                ))}
              </ul>
              <button
                type="button"
                data-ocid="vastu.contact.button"
                onClick={() => scrollTo("#contact")}
                className="mt-6 bg-recon-orange text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-orange-700 transition-colors"
              >
                Book Vastu Consultation
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-16 md:py-20 bg-recon-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-recon-orange font-semibold text-sm uppercase tracking-widest mb-2">
              Reach Us
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold uppercase text-recon-dark">
              Contact Us
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Details */}
            <div className="bg-white rounded-2xl p-8 shadow-card">
              <h3 className="font-bold text-recon-dark text-lg mb-6">
                Get in Touch
              </h3>
              <ul className="flex flex-col gap-5">
                <li className="flex gap-4">
                  <div className="w-10 h-10 bg-recon-orange/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-recon-orange" />
                  </div>
                  <div>
                    <div className="font-semibold text-recon-dark text-sm mb-1">
                      Address
                    </div>
                    <div className="text-recon-gray text-sm leading-relaxed">
                      Patted Complex, Opp. Empire Square Building, Beside
                      Haripriya Hotel, Shirur Park, Vidya Nagar, Hubballi,
                      Karnataka 580021
                    </div>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-10 h-10 bg-recon-orange/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-recon-orange" />
                  </div>
                  <div>
                    <div className="font-semibold text-recon-dark text-sm mb-1">
                      Phone
                    </div>
                    <div className="text-recon-gray text-sm flex flex-wrap gap-1">
                      {[
                        ["tel:+919741579578", "97415 79578"],
                        ["tel:+919019836590", "90198 36590"],
                        ["tel:+917795985354", "77959 85354"],
                        ["tel:+919980170504", "99801 70504"],
                      ].map(([href, num]) => (
                        <a
                          key={href}
                          href={href}
                          className="hover:text-recon-orange transition-colors"
                        >
                          {num}
                        </a>
                      ))}
                    </div>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-recon-dark text-sm mb-1">
                      WhatsApp
                    </div>
                    <a
                      href="https://wa.me/919019836590"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 font-medium text-sm hover:text-green-700"
                    >
                      9019836590
                    </a>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-10 h-10 bg-recon-orange/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-recon-orange" />
                  </div>
                  <div>
                    <div className="font-semibold text-recon-dark text-sm mb-1">
                      Email
                    </div>
                    <a
                      href="mailto:reconintofficial99@gmail.com"
                      className="text-recon-orange text-sm hover:text-orange-700 break-all"
                    >
                      reconintofficial99@gmail.com
                    </a>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-10 h-10 bg-recon-orange/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-recon-orange" />
                  </div>
                  <div>
                    <div className="font-semibold text-recon-dark text-sm mb-1">
                      Working Hours
                    </div>
                    <div className="text-recon-gray text-sm">9 AM to 8 PM</div>
                    <div className="text-red-500 text-xs font-medium">
                      Closed on Sundays
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            {/* Quick Contact / CTA */}
            <div className="flex flex-col gap-5">
              <div className="bg-recon-navy rounded-2xl p-8 text-white flex-1">
                <h3 className="font-bold text-xl mb-3">Ready to Build?</h3>
                <p className="text-white/65 text-sm leading-relaxed mb-6">
                  Contact us today for a free consultation and quote. Our team
                  is ready to bring your vision to life with expert
                  craftsmanship and timely delivery.
                </p>
                <div className="flex flex-col gap-3">
                  <a
                    href="tel:+919741579578"
                    data-ocid="contact.phone.button"
                    className="flex items-center gap-3 bg-recon-orange text-white px-5 py-3 rounded-full font-semibold text-sm hover:bg-orange-700 transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    Call 97415 79578
                  </a>
                  <a
                    href="https://wa.me/919019836590"
                    data-ocid="contact.whatsapp.button"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 bg-green-600 text-white px-5 py-3 rounded-full font-semibold text-sm hover:bg-green-700 transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp Us
                  </a>
                  <a
                    href="mailto:reconintofficial99@gmail.com"
                    data-ocid="contact.email.button"
                    className="flex items-center gap-3 bg-white/15 border border-white/20 text-white px-5 py-3 rounded-full font-semibold text-sm hover:bg-white/25 transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    Send Email
                  </a>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-card">
                <div className="flex items-center gap-3 mb-3">
                  <MapPin className="w-5 h-5 text-recon-orange" />
                  <span className="font-semibold text-recon-dark text-sm">
                    Our Location
                  </span>
                </div>
                <div className="rounded-xl bg-gradient-to-br from-recon-bg to-gray-200 h-36 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-8 h-8 text-recon-orange mx-auto mb-1" />
                    <p className="text-recon-gray text-xs font-medium">
                      Vidya Nagar, Hubballi
                    </p>
                    <p className="text-recon-gray text-xs">Karnataka 580021</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-recon-footer text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-3 gap-10 mb-10">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-9 h-9 rounded-lg bg-recon-orange flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-extrabold tracking-wider">
                  RECON
                </span>
              </div>
              <p className="text-white/50 text-sm leading-relaxed mb-4">
                Committed to providing quick turnaround and highly practical,
                cost-effective solutions for engineering and design
                requirements.
              </p>
              <p className="text-recon-orange text-sm font-semibold italic">
                "Build with the Best"
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="font-bold text-white uppercase text-xs tracking-widest mb-4">
                Quick Links
              </h4>
              <ul className="flex flex-col gap-2">
                {NAV_LINKS.map((link) => (
                  <li key={link.label}>
                    <button
                      type="button"
                      data-ocid={`footer.${link.label.toLowerCase()}.link`}
                      onClick={() => scrollTo(link.href)}
                      className="text-white/50 text-sm hover:text-recon-orange transition-colors"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold text-white uppercase text-xs tracking-widest mb-4">
                Contact Details
              </h4>
              <ul className="flex flex-col gap-3">
                <li className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-recon-orange flex-shrink-0 mt-0.5" />
                  <span className="text-white/50 text-sm leading-relaxed">
                    Patted Complex, Vidya Nagar, Hubballi, Karnataka 580021
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-recon-orange flex-shrink-0" />
                  <a
                    href="tel:+919741579578"
                    className="text-white/50 text-sm hover:text-recon-orange transition-colors"
                  >
                    97415 79578
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-recon-orange flex-shrink-0" />
                  <a
                    href="mailto:reconintofficial99@gmail.com"
                    className="text-white/50 text-sm hover:text-recon-orange transition-colors break-all"
                  >
                    reconintofficial99@gmail.com
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-recon-orange flex-shrink-0" />
                  <span className="text-white/50 text-sm">
                    9 AM \u2013 8 PM (Closed Sundays)
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-white/40 text-xs">
              \u00a9 {new Date().getFullYear()} RECON Interiors and
              Constructions. All rights reserved.
            </p>
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/30 text-xs hover:text-white/60 transition-colors"
            >
              Built with \u2764\ufe0f using caffeine.ai
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
