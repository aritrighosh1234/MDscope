/**
 * MINDSCOPE BY ARITRI — Main Component (v2)
 *
 * Dependencies:
 *   npm install lucide-react
 *
 * In your index.html <head>:
 *   <link rel="preconnect" href="https://fonts.googleapis.com">
 *   <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
 *   <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500&family=DM+Serif+Display:ital@0;1&display=swap" rel="stylesheet">
 *
 * In App.jsx:
 *   import './Mindscope.css';
 *   import Mindscope from './Mindscope';
 */

import { useState, useEffect, useRef } from "react";
import {
  Heart, Shield, Compass, Mail, Phone, MapPin, Instagram,
  ArrowRight, ArrowLeft, X, Leaf
} from "lucide-react";
import { SITE, DOCTOR, ABOUT_CARDS, SERVICES, RESOURCES, CONTACT } from "./content";
import "./Mindscope.css";
import heroLogo from "./assets/Hero.png" 
import therapist from "./assets/Therapist.jpeg" 
import footerLogo from "./assets/Footer.png" 
import thoughtful from "./assets/Thoughtful.png"

// ── Per-service accent colours (cycles if more services added) ──────────
const CARD_ACCENTS = [
  { bg: "#eef4ec", pill: "#c8ddc5", abbr: "#4a7a50", bar: "linear-gradient(135deg,#6b8c6e,#b5c4b1)" },
  { bg: "#fdf0eb", pill: "#f0cdb8", abbr: "#b5673a", bar: "linear-gradient(135deg,#c4896b,#e8c4b0)" },
  { bg: "#eef0f8", pill: "#c5cceb", abbr: "#4a52a0", bar: "linear-gradient(135deg,#6878c8,#a8b4e8)" },
  { bg: "#fdf6ea", pill: "#f0ddb0", abbr: "#a07820", bar: "linear-gradient(135deg,#c8a040,#e8d090)" },
  { bg: "#f4eef8", pill: "#d8c5eb", abbr: "#7040a8", bar: "linear-gradient(135deg,#9068c8,#c8b0e8)" },
  { bg: "#eef8f2", pill: "#b8e0cc", abbr: "#2a7855", bar: "linear-gradient(135deg,#4a9870,#90c8b0)" },
  { bg: "#f8eef4", pill: "#e8c0d5", abbr: "#a03868", bar: "linear-gradient(135deg,#c05888,#e0a8c5)" },
];

const ABOUT_CARD_COLORS = [
  { icon: "#4a7a50", iconBg: "#d0e5cc", bar: "#6b8c6e" },
  { icon: "#b5673a", iconBg: "#f0cdb8", bar: "#c4896b" },
  { icon: "#4a52a0", iconBg: "#c5cceb", bar: "#6878c8" },
];

const RESOURCE_ACCENTS = ["#4a7a50", "#b5673a", "#4a52a0", "#2a7855"];

// ── Icon resolver ────────────────────────────────────────────────────────
const ICON_MAP = { Heart, Shield, Compass };
function DynIcon({ name, size = 22 }) {
  const Icon = ICON_MAP[name] || Leaf;
  return <Icon size={size} strokeWidth={1.5} />;
}

// ── Scroll reveal hook ───────────────────────────────────────────────────
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal, .reveal-left, .reveal-right");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) { e.target.classList.add("visible"); observer.unobserve(e.target); }
        });
      },
      { threshold: 0.1 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

// ── Modal wrapper ────────────────────────────────────────────────────────
function Modal({ onClose, children }) {
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const handler = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => { document.body.style.overflow = prev; window.removeEventListener("keydown", handler); };
  }, [onClose]);

  return (
    <div className="modal-overlay" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="modal" role="dialog" aria-modal="true">
        <button className="modal-close" onClick={onClose} aria-label="Close"><X size={16} strokeWidth={1.5} /></button>
        {children}
      </div>
    </div>
  );
}

function ServiceModal({ service, accent, onClose }) {
  return (
    <Modal onClose={onClose}>
      <div className="modal-service-header" style={{ background: accent.bg }}>
        <div className="modal-abbr" style={{ color: accent.abbr }}>{service.abbr}</div>
        <div className="modal-title">{service.title}</div>
        <div className="modal-tags">
          {service.tags.map((t) => (
            <span key={t} className="service-tag" style={{ background: accent.pill, color: accent.abbr, border: "none" }}>{t}</span>
          ))}
        </div>
      </div>
      <div className="modal-service-body">
        <p>{service.fullDescription}</p>
      </div>
    </Modal>
  );
}

function ResourceModal({ resource, onClose }) {
  return (
    <Modal onClose={onClose}>
      {resource.image && <img className="modal-blog-image" src={resource.image} alt={resource.title} />}
      <div className="modal-blog-header">
        <div className="modal-blog-date">{resource.date}</div>
        <div className="modal-blog-title">{resource.title}</div>
        <div className="modal-author">{resource.credits.author}, {resource.credits.book}</div>
      </div>
      <div className="modal-blog-body">
        <p dangerouslySetInnerHTML={{ __html: resource.content.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>").replace(/\n/g, "<br/>") }} />
      </div>
    </Modal>
  );
}
// ── WhatsApp FAB ──────────────────────────────────────────────────────────
function WhatsAppFAB() {
  const url = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent("Hi! I'd like to know more about therapy sessions at Mindscope by Aritri.")}`;
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="wa-fab" aria-label="Chat on WhatsApp">
      <svg width="28" height="28" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.532 5.858L0 24l6.302-1.508A11.955 11.955 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.007-1.37l-.36-.214-3.733.893.936-3.618-.235-.372A9.818 9.818 0 1112 21.818z"/>
      </svg>
    </a>
  );
}
// ── Navbar ───────────────────────────────────────────────────────────────
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const close = () => setMenuOpen(false);

  return (
    <nav className={`navbar${scrolled ? " scrolled" : ""}`} aria-label="Main navigation">
      <a href="#home" className="nav-logo" onClick={close}>
        <img src={heroLogo} alt="" />
      </a>

      <ul className={`nav-links${menuOpen ? " open" : ""}`} role="list">
        {[["#home","Home"],["#about","About"],["#services","Services"],["#resources","Resources"],["#contact","Contact"]].map(([href, label]) => (
          <li key={href}><a href={href} onClick={close}>{label}</a></li>
        ))}
        <li><a href="#contact" className="nav-cta" onClick={close}>Book a Session</a></li>
      </ul>

      <button className="nav-hamburger" onClick={() => setMenuOpen(o => !o)} aria-label="Toggle menu" aria-expanded={menuOpen}>
        <span style={menuOpen ? { transform: "rotate(45deg) translate(4px,5px)" } : {}} />
        <span style={menuOpen ? { opacity: 0 } : {}} />
        <span style={menuOpen ? { transform: "rotate(-45deg) translate(4px,-5px)" } : {}} />
      </button>
    </nav>
  );
}

// ── Hero ─────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-bg">
        <div className="hero-blob hero-blob-1" />
        <div className="hero-blob hero-blob-2" />
        <div className="hero-blob hero-blob-3" />
        <div className="hero-blob hero-blob-4" />
      </div>

      <svg className="hero-decor" viewBox="0 0 380 520" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M190 500 C190 500 190 80 190 40" stroke="#6b8c6e" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M190 300 C190 300 110 245 68 188" stroke="#6b8c6e" strokeWidth="1.3" strokeLinecap="round"/>
        <path d="M190 340 C190 340 270 285 312 208" stroke="#6b8c6e" strokeWidth="1.3" strokeLinecap="round"/>
        <path d="M190 230 C190 230 125 180 95 132" stroke="#6b8c6e" strokeWidth="1.1" strokeLinecap="round"/>
        <path d="M190 260 C190 260 255 215 285 168" stroke="#6b8c6e" strokeWidth="1.1" strokeLinecap="round"/>
        <path d="M190 170 C190 170 155 148 138 122" stroke="#c4896b" strokeWidth="1" strokeLinecap="round"/>
        <path d="M190 185 C190 185 225 164 243 140" stroke="#c4896b" strokeWidth="1" strokeLinecap="round"/>
        <ellipse cx="68" cy="183" rx="34" ry="23" transform="rotate(-32 68 183)" fill="#6b8c6e" fillOpacity="0.28"/>
        <ellipse cx="313" cy="203" rx="34" ry="23" transform="rotate(32 313 203)" fill="#6b8c6e" fillOpacity="0.28"/>
        <ellipse cx="93" cy="128" rx="26" ry="17" transform="rotate(-42 93 128)" fill="#c4896b" fillOpacity="0.22"/>
        <ellipse cx="285" cy="163" rx="26" ry="17" transform="rotate(42 285 163)" fill="#c4896b" fillOpacity="0.22"/>
        <ellipse cx="136" cy="118" rx="18" ry="12" transform="rotate(-50 136 118)" fill="#9068c8" fillOpacity="0.18"/>
        <ellipse cx="244" cy="136" rx="18" ry="12" transform="rotate(50 244 136)" fill="#9068c8" fillOpacity="0.18"/>
        <circle cx="190" cy="42" r="11" fill="#6b8c6e" fillOpacity="0.45"/>
        <circle cx="190" cy="42" r="5.5" fill="#6b8c6e" fillOpacity="0.85"/>
      </svg>

      <div className="hero-content">
          <span className="hero-eyebrow">MINDSCOPE BY ARITRI</span>
        <div className="section-hero">
        
        <h1 className="hero-title">
          Boutique Therapy for<br/>
          <img className="hero-accent" src={thoughtful} alt="th" /> Emotional Care
        </h1>
        <p className="hero-sub">{SITE.heroSubtext}</p>
        <div className="hero-actions">
          <a href="#contact" className="btn-primary">Book Consultation</a>
          <a href="#services" className="btn-ghost">
            Explore Services <ArrowRight size={15} strokeWidth={1.5} />
          </a></div>
        </div>
      </div>

      <div className="hero-scroll-hint" aria-hidden="true">
        <span>Scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  );
}

// ── About ────────────────────────────────────────────────────────────────
function About() {
  return (
    <section id="about" className="about">
      <div className="section-container">
        <div className="about-header reveal">
          <p className="section-label">About</p>
          <h2 className="section-title">The heart behind <em>Mindscope</em></h2>
        </div>

        <div className="about-doctor">
          <div className="doctor-image-frame reveal-left">
            <img src={therapist} alt={DOCTOR.name} />
              
          </div>
          <div className="doctor-bio reveal-right">
            <p className="section-label">Meet your therapist</p>
            <h3 className="doctor-name">{DOCTOR.name}</h3>
            <p className="doctor-desc">{DOCTOR.description}</p>
            <p className="doctor-desc">{DOCTOR.description_p2}</p>
            <a href="#contact" className="btn-primary doctor-cta">
              Book a Session <ArrowRight size={15} strokeWidth={1.5} />
            </a>
          </div>
        </div>

        <div className="about-divider reveal"><span>What guides this practice</span></div>

        <div className="about-cards">
          {ABOUT_CARDS.map((card, i) => {
            const c = ABOUT_CARD_COLORS[i % ABOUT_CARD_COLORS.length];
            return (
              <div key={card.title} className={`about-card reveal delay-${i + 2}`}>
                <div className="about-card-bar" style={{ background: c.bar }} />
                <div className="about-card-icon" style={{ background: c.iconBg, color: c.icon }}>
                  <DynIcon name={card.icon} />
                </div>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ── Services ─────────────────────────────────────────────────────────────
const SCROLL_BY = 348; // card width (324) + gap (24)

function Services() {
  const [active, setActive] = useState(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(true);
  const trackRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollStart = useRef(0);

  const updateArrows = () => {
    const el = trackRef.current;
    if (!el) return;
    setCanLeft(el.scrollLeft > 4);
    setCanRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
  };

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    updateArrows();
    el.addEventListener("scroll", updateArrows, { passive: true });
    window.addEventListener("resize", updateArrows);
    return () => { el.removeEventListener("scroll", updateArrows); window.removeEventListener("resize", updateArrows); };
  }, []);

  const scrollTo = (dir) => trackRef.current?.scrollBy({ left: dir * SCROLL_BY, behavior: "smooth" });

  const onMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.pageX - trackRef.current.offsetLeft;
    scrollStart.current = trackRef.current.scrollLeft;
  };
  const onMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - trackRef.current.offsetLeft;
    trackRef.current.scrollLeft = scrollStart.current - (x - startX.current);
  };
  const stopDrag = () => { isDragging.current = false; };

  return (
    <section id="services" className="services">
      <div className="section-container">
        <div className="services-header reveal">
          <div className="services-header-left">
            <p className="section-label">Services</p>
            <div className="section-hero">
            <h2 className="section-title">Therapies <em>tailored</em> to you</h2>
            <p className="section-intro">
              Every approach is selected to meet you where you are. Click any card to learn more.
            </p>
            </div>
          </div>
          
        </div>
        <div className="services-arrows">
            <button
              className={`svc-arrow${!canLeft ? " disabled" : ""}`}
              onClick={() => scrollTo(-1)}
              aria-label="Scroll left"
              disabled={!canLeft}
            >
              <ArrowLeft size={18} strokeWidth={2} />
            </button>
            <button
              className={`svc-arrow${!canRight ? " disabled" : ""}`}
              onClick={() => scrollTo(1)}
              aria-label="Scroll right"
              disabled={!canRight}
            >
              <ArrowRight size={18} strokeWidth={2} />
            </button>
          </div>

        <div className="services-track-wrapper reveal">
          <div
            className="services-track"
            ref={trackRef}
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={stopDrag}
            onMouseLeave={stopDrag}
          >
            {SERVICES.map((svc, i) => {
              const acc = CARD_ACCENTS[i % CARD_ACCENTS.length];
              return (
                <article
                  key={svc.id}
                  className="service-card"
                  style={{ background: acc.bg }}
                  onClick={() => setActive({ svc, acc })}
                  tabIndex={0}
                  role="button"
                  aria-label={`Learn more about ${svc.title}`}
                  onKeyDown={(e) => e.key === "Enter" && setActive({ svc, acc })}
                >
                  <div className="service-card-bar" style={{ background: acc.bar }} />
                  <div className="service-abbr" style={{ color: acc.abbr }}>{svc.abbr}</div>
                  <div className="service-title">{svc.title}</div>
                  <p className="service-note">{svc.shortNote}</p>
                  <div className="service-tags">
                    {svc.tags.map((t) => (
                      <span key={t} className="service-tag" style={{ background: acc.pill, color: acc.abbr, borderColor: "transparent" }}>{t}</span>
                    ))}
                  </div>
                  <button className="service-more-btn" style={{ color: acc.abbr }} tabIndex={-1}>
                    Read more <ArrowRight size={13} strokeWidth={1.5} />
                  </button>
                </article>
              );
            })}
          </div>
        </div>
      </div>

      {active && <ServiceModal service={active.svc} accent={active.acc} onClose={() => setActive(null)} />}
    </section>
  );
}

// ── Resources ────────────────────────────────────────────────────────────
function Resources() {
  const [active, setActive] = useState(null);

  return (
    <section id="resources" className="resources">
      <div className="section-container">
        <div className="resources-header reveal">
          <p className="section-label">Resources</p>
          <div className="section-hero">
          <h2 className="section-title">Words for the <em>wandering mind</em></h2>
          <p className="section-intro">
            Thoughts, perspectives, and gentle nudges — written to support you between sessions and beyond.
          </p></div>
        </div>

        <div className="resources-grid">
          {RESOURCES.map((r, i) => {
            const color = RESOURCE_ACCENTS[i % RESOURCE_ACCENTS.length];
            return (
              <article
                key={r.id}
                className={`resource-card reveal delay-${(i % 4) + 1}`}
                onClick={() => setActive(r)}
                tabIndex={0}
                role="button"
                aria-label={`Read: ${r.title}`}
                onKeyDown={(e) => e.key === "Enter" && setActive(r)}
              >
                {r.image && (
                  <div className="resource-image-wrap">
                    <img className="resource-image" src={r.image} alt={r.title} loading="lazy" />
                    <div className="resource-image-tint" style={{ background: color + "28" }} />
                  </div>
                )}
                <div className="resource-body">
                  <p className="resource-date" style={{ color }}>{r.date}</p>
                  <h3 className="resource-title">{r.title}</h3>
                  <p className="resource-excerpt">{r.excerpt}</p>
                  <span className="resource-read-more" style={{ color }}>
                    Read more <ArrowRight size={12} strokeWidth={1.5} />
                  </span>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {active && <ResourceModal resource={active} onClose={() => setActive(null)} />}
    </section>
  );
}

// ── Contact ───────────────────────────────────────────────────────────────
function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const submit = (e) => {
  e.preventDefault();

 
  const message =
    `Hello Aritri,\n\n` +
  `I’d like to enquire about therapy sessions at Mindscope.\n\n` +

  `— Details —\n` +
  `Name: ${form.name}\n` +
  `Email: ${form.email}\n` +
  `${form.phone ? `Phone: ${form.phone}\n` : ""}` +

  `${form.message ? `\nMessage:\n${form.message}\n` : ""}` +

  `\nLooking forward to your response.\nThank you. `;

  const waUrl = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(message)}`;

  setSent(true);
  window.open(waUrl, "_blank", "noopener,noreferrer");
};

  const DETAILS = [
    { Icon: Phone,  label: "Phone / WhatsApp", value: CONTACT.phone,    color: "#c4896b" },
    { Icon: Mail,   label: "Email",            value: CONTACT.email,    color: "#6b8c6e" },
    { Icon: Instagram, label: "Instagram", value: CONTACT.instagram, color: "#E4405F" },
    { Icon: MapPin, label: "Location", link:"https://share.google/Nnd2wUHND0CewCwoz", value: CONTACT.location, color: "#6878c8" },
  ];

  return (
    <section id="contact" className="contact">
      <div className="contact-bg-text" aria-hidden="true">Heal</div>
      <div className="section-container">
        <div className="contact-inner">
          <div className="contact-left reveal-left">
            <p className="section-label">Contact</p>
            <div className="section-hero">
            <h2 className="section-title">Take the first<br/><em>gentle step</em></h2>
            <p className="section-intro">
              Reaching out is the hardest part — and the most important one. I'd love to hear from you.
            </p></div>
            <div className="contact-details">
              {DETAILS.map(({ Icon, label, value,link, color }) => (
                <div className="contact-detail" key={label}>
                  <div className="contact-detail-icon" style={{ background: color + "28", color }}>
                    <Icon size={17} strokeWidth={1.5} />
                  </div>
                  <div className="contact-detail-text">
                    <div className="contact-detail-label" style={{ color }}>{label}</div>
                    <a href={link} className="contact-detail-value">{value}</a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="contact-form-wrap reveal-right">
            {sent ? (
              <div className="form-success">Thank you — I'll be in touch soon. 🌿</div>
            ) : (
              <form onSubmit={submit} noValidate>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input id="name" name="name" type="text" placeholder="Your name" required value={form.name} onChange={handle} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input id="email" name="email" type="email" placeholder="you@email.com" required value={form.email} onChange={handle} />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone (optional)</label>
                    <input id="phone" name="phone" type="tel" placeholder="+91 00000 00000" value={form.phone} onChange={handle} />
                  </div>
                </div>
                <div className="form-group form-group-full">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows={4} placeholder="What would you like to share or ask?" value={form.message} onChange={handle} />
                </div>
                <button type="submit" className="form-submit">Send Enquiry</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Footer ────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="footer">
      <div className="section-container footer-inner">
        <img src={footerLogo} alt="" />
        <span className="footer-copy">© {new Date().getFullYear()} Mindscope by Aritri · All sessions are confidential</span>
      </div>
    </footer>
  );
}

// ── Root ──────────────────────────────────────────────────────────────────
export default function Mindscope() {
  useReveal();
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Resources />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFAB /> 
    </>
  );
}
