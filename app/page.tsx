"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const phoneDisplay = "07944 311402";
const phoneHref = "tel:07944311402";
const whatsappHref = "https://wa.me/447944311402";
const emailHref = "mailto:pineanddandytrees@gmail.com";
const facebookHref = "https://www.facebook.com/profile.php?id=100076005677673";
const instagramHref = "https://www.instagram.com/pineanddandytree/";

const navItems = ["Home", "Services", "Work", "Reviews", "Contact"];

const services = [
  ["Tree Work", "Professional tree reductions, pruning, shaping and removals carried out with care around your property."],
  ["Hedge Work", "Laurel hedges, boundary hedges and overgrown garden screening reduced, trimmed and tidied."],
  ["Stump Grinding", "Old stumps removed below ground level to help reclaim space and leave gardens safer and neater."],
  ["Garden Tidies", "Long grass, overgrowth, shrubs and green waste cleared to bring outdoor spaces back under control."],
  ["Site Clearances", "Grounds, gardens and outdoor areas cleared for homeowners, landlords and small commercial sites."],
  ["Waste Removed", "Green waste and cuttings taken away after the job so you are left with a tidy, usable space."],
];

const areas = [
  "Lymm",
  "Warrington",
  "Altrincham",
  "Sale",
  "Knutsford",
  "Timperley",
  "Hale",
  "Bowdon",
  "Partington",
  "Dunham Massey",
  "Cheshire",
  "North West",
];

const galleryImages = Array.from({ length: 10 }, (_, index) => `/images/gallery/job${index + 1}.png`);

const reviews = [
  {
    quote:
      "Excellent communication and really friendly guy. Ground out some tree stumps in 30 degree heat and did a top notch job. Will definitely use again.",
    name: "Tina Christmas",
    date: "Facebook recommendation",
  },
  {
    quote:
      "We've had Dan and Jimmy round a few times to help with our conifer hedges. They've done a fantastic job. Reliable and knowledgeable.",
    name: "Jack Moulton",
    date: "Facebook recommendation",
  },
  {
    quote:
      "Excellent service. Professional work, value for money, all cuttings removed and advice given. Would use again. 100% recommend.",
    name: "Kay Gill",
    date: "Facebook recommendation",
  },
  {
    quote:
      "Excellent workmanship. Always shows up, leaves everywhere tidy and does a brilliant job.",
    name: "Abi Owers",
    date: "Facebook recommendation",
  },
  {
    quote:
      "Fantastic job shaping and trimming our tree. Very happy with the work and would highly recommend.",
    name: "Greta Max Frimmel",
    date: "Facebook recommendation",
  },
  {
    quote:
      "Fabulous service. Communication was fast, clear and organised. Work completed quickly, all debris cleared and taken away.",
    name: "Maxine Thornhill",
    date: "Facebook recommendation",
  },
  {
    quote:
      "Brilliant job and done perfectly. The pride the guys take in their work and the tidy up afterwards was exceptional.",
    name: "Scott Hendry",
    date: "Facebook recommendation",
  },
  {
    quote:
      "The garden looks completely transformed. Great advice, all rubbish taken away and a quality job throughout.",
    name: "David Hurst",
    date: "Facebook recommendation",
  },
  {
    quote:
      "Dan and his team were responsive, reliable, knowledgeable and tidy, with not a twig left behind.",
    name: "Alison Smith",
    date: "Facebook recommendation",
  },
  {
    quote:
      "Fantastic service. Came the next day after enquiry and went above and beyond. Really considerate and thoughtful.",
    name: "Lydia Louvain",
    date: "Facebook recommendation",
  },
];

function PhoneIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.86 19.86 0 0 1 3.09 5.18 2 2 0 0 1 5.11 3h3a2 2 0 0 1 2 1.72c.12.86.32 1.7.6 2.5a2 2 0 0 1-.45 2.11L9 10.59a16 16 0 0 0 4.41 4.41l1.26-1.26a2 2 0 0 1 2.11-.45c.8.28 1.64.48 2.5.6A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function WhatsAppIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M20.52 3.48A11.8 11.8 0 0 0 12.1 0C5.53 0 .2 5.33.2 11.9c0 2.1.55 4.16 1.6 5.97L0 24l6.28-1.65a11.86 11.86 0 0 0 5.82 1.48h.01c6.56 0 11.9-5.33 11.9-11.9 0-3.18-1.24-6.17-3.48-8.45ZM12.1 21.82a9.86 9.86 0 0 1-5.03-1.38l-.36-.21-3.72.98.99-3.63-.24-.37a9.86 9.86 0 0 1-1.51-5.31c0-5.45 4.43-9.89 9.88-9.89 2.64 0 5.12 1.03 6.98 2.9a9.82 9.82 0 0 1 2.9 6.99c0 5.45-4.43 9.89-9.89 9.89Zm5.42-7.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.08-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.65-2.05-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.05 1.03-1.05 2.5 0 1.47 1.08 2.9 1.23 3.1.15.2 2.12 3.24 5.14 4.54.72.31 1.28.5 1.72.64.72.23 1.38.2 1.9.12.58-.09 1.76-.72 2.01-1.42.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35Z" />
    </svg>
  );
}

function FacebookIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.03 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.96h-1.51c-1.49 0-1.96.93-1.96 1.89v2.27h3.33l-.53 3.49h-2.8V24C19.61 23.1 24 18.1 24 12.07Z" />
    </svg>
  );
}

function InstagramIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <path d="M17.5 6.5h.01" />
    </svg>
  );
}

function LeafIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20.5 3.5C12 4 5.5 8.5 4 16.5c6.5.8 12-2.3 16.5-13Z" />
      <path d="M4 20c3.8-6.2 8.2-9.4 13.5-11" />
    </svg>
  );
}

function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Image
      src="/images/logo.png"
      alt="Pine & Dandy Hedge and Tree Specialists"
      width={compact ? 220 : 360}
      height={compact ? 140 : 230}
      className={`h-auto object-contain ${compact ? "w-[92px]" : "w-[190px]"}`}
      priority
    />
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [galleryStart, setGalleryStart] = useState(0);
  const [galleryVisible, setGalleryVisible] = useState(true);
  const [galleryPaused, setGalleryPaused] = useState(false);
  const [reviewStart, setReviewStart] = useState(0);
  const [introVisible, setIntroVisible] = useState(true);
  const [introLeaving, setIntroLeaving] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [quoteName, setQuoteName] = useState("");
  const [quotePhone, setQuotePhone] = useState("");
  const [quoteJobType, setQuoteJobType] = useState("");
  const [quoteDetails, setQuoteDetails] = useState("");

  const quoteMessage = encodeURIComponent(
    `Hi Pine & Dandy, I'd like a free quote.\n\nName: ${quoteName || "Not provided"}\nPhone: ${quotePhone || "Not provided"}\nJob type: ${quoteJobType || "Not selected"}\nDetails: ${quoteDetails || "Not provided"}`
  );
  const quoteWhatsappHref = `${whatsappHref}?text=${quoteMessage}`;

  useEffect(() => {
    const leaveTimer = setTimeout(() => setIntroLeaving(true), 900);
    const removeTimer = setTimeout(() => setIntroVisible(false), 1500);

    return () => {
      clearTimeout(leaveTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (galleryPaused) return;

    const timer = setInterval(() => {
      setGalleryVisible(false);
      setTimeout(() => {
        setGalleryStart((current) => (current + 1) % galleryImages.length);
        setGalleryVisible(true);
      }, 450);
    }, 4500);

    return () => clearInterval(timer);
  }, [galleryPaused]);

  useEffect(() => {
    const timer = setInterval(() => {
      setReviewStart((current) => (current + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const visibleGallery = Array.from(
    { length: 6 },
    (_, i) => galleryImages[(galleryStart + i) % galleryImages.length]
  );

  const visibleReviews = Array.from(
    { length: 3 },
    (_, i) => reviews[(reviewStart + i) % reviews.length]
  );

  const mobileReview = reviews[reviewStart % reviews.length];

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f7f6f1] text-[#101510]">
      <style jsx global>{`
        @keyframes review-slide-in {
          0% { opacity: 0; transform: translateX(120%); }
          100% { opacity: 1; transform: translateX(0); }
        }
        .review-slide-in { animation: review-slide-in 1.05s cubic-bezier(0.22, 1, 0.36, 1) both; }
      `}</style>

      {introVisible && (
        <div className={`fixed inset-0 z-[999] flex items-center justify-center bg-black transition-all duration-700 ease-out ${introLeaving ? "pointer-events-none opacity-0 blur-md" : "opacity-100 blur-0"}`}>
          <div className={`transition-all duration-700 ease-out ${introLeaving ? "scale-[1.28] opacity-0 blur-md" : "scale-100 opacity-100 blur-0"}`}>
            <Logo />
          </div>
        </div>
      )}

      <header className="fixed top-0 z-50 w-full md:pointer-events-none">
        <div className={`hidden transition-all duration-500 md:block ${scrolled ? "mt-0 w-full max-w-none px-0" : "mx-auto mt-5 max-w-7xl px-6"}`}>
          {!scrolled ? (
            <div className="pointer-events-auto grid h-[158px] grid-cols-[310px_1fr_220px] grid-rows-[64px_94px] overflow-hidden rounded-[2rem] bg-black shadow-2xl ring-1 ring-[#98c87c]/25">
              <a href="#" className="row-span-2 flex items-center justify-center bg-black px-7">
                <Logo />
              </a>

              <div className="col-span-1 flex h-full items-center justify-end gap-8 rounded-bl-[2rem] bg-[#98c87c] px-9 text-sm font-bold text-black">
                <a href={phoneHref} className="flex items-center gap-2 hover:opacity-70">
                  <PhoneIcon className="h-5 w-5 text-black" />
                  {phoneDisplay}
                </a>
                <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:opacity-70">
                  <WhatsAppIcon className="h-5 w-5 text-black" />
                  WhatsApp
                </a>
                <span className="hidden items-center gap-2 text-black/80 xl:flex">
                  <LeafIcon className="h-5 w-5 text-black" />
                  Free quotes
                </span>
              </div>

              <a href={phoneHref} className="flex h-full items-center justify-center bg-white px-6 text-[1.02rem] font-bold tracking-[0.05em] text-black transition hover:bg-[#98c87c]">
                Call Now
              </a>

              <nav className="flex items-center justify-center gap-9 text-xs font-bold uppercase tracking-[0.15em] text-white">
                {navItems.map((item) => (
                  <a key={item} href={item === "Home" ? "#" : `#${item.toLowerCase()}`} className="transition hover:text-[#98c87c]">{item}</a>
                ))}
              </nav>

              <div className="bg-black" />
            </div>
          ) : (
            <div className="pointer-events-auto flex h-[86px] w-full items-center justify-between bg-black px-10 shadow-md ring-1 ring-[#98c87c]/20">
              <a href="#" className="flex items-center"><Logo compact /></a>

              <nav className="flex items-center gap-9 text-xs font-bold uppercase tracking-[0.15em] text-white">
                {navItems.map((item) => (
                  <a key={item} href={item === "Home" ? "#" : `#${item.toLowerCase()}`} className="transition hover:text-[#98c87c]">{item}</a>
                ))}
              </nav>

              <a href={phoneHref} className="rounded-full bg-[#98c87c] px-8 py-3.5 text-sm font-bold tracking-[0.05em] text-black transition hover:bg-white">
                Call For Quote
              </a>
            </div>
          )}
        </div>

        <div className="bg-black shadow-sm md:hidden">
          <div className="mx-auto grid max-w-7xl grid-cols-[96px_1fr_auto] items-center gap-3 px-4 py-3">
            <a href="#" className="flex items-center justify-start"><Logo compact /></a>
            <a href={phoneHref} className="mobile-call-wobble rounded-full bg-[#98c87c] px-3 py-3 text-center text-xs font-bold uppercase tracking-[0.08em] text-black transition hover:bg-white">
              Call Now
            </a>
            <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-black text-white">
              <span className="flex flex-col gap-1.5">
                <span className="block h-0.5 w-5 rounded-full bg-white" />
                <span className="block h-0.5 w-5 rounded-full bg-white" />
                <span className="block h-0.5 w-5 rounded-full bg-white" />
              </span>
            </button>
          </div>

          {menuOpen && (
            <div className="border-t border-white/10 bg-black px-5 py-5">
              <div className="flex flex-col gap-4 text-center text-lg font-bold text-white">
                {navItems.map((item) => (
                  <a key={item} href={item === "Home" ? "#" : `#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{item}</a>
                ))}
                <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="rounded-full bg-[#98c87c] px-5 py-3 text-sm uppercase tracking-[0.08em] text-black">WhatsApp Dan</a>
              </div>
            </div>
          )}
        </div>
      </header>

      <section className="relative h-[100svh] overflow-hidden md:h-screen">
        <video
          className="absolute inset-0 h-full w-full object-cover md:hidden"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src="/videos/hero-video.mp4" type="video/mp4" />
        </video>

        <Image
          src="/images/hero.png"
          alt="Pine & Dandy tree and hedge specialists at work"
          fill
          sizes="100vw"
          className="hidden object-cover saturate-[0.95] contrast-[1.03] brightness-[0.92] md:block"
          style={{ objectPosition: "center center" }}
          priority
        />

        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/28 via-black/48 to-black/76 md:bg-gradient-to-r md:from-black/82 md:via-black/48 md:to-black/8" />
        <div className="absolute right-[-120px] top-[22%] z-10 hidden h-[430px] w-[430px] rounded-full bg-[#98c87c]/22 blur-3xl md:block" />

        <div className="relative z-20 mx-auto flex h-full w-full max-w-7xl px-4 pt-[76px] md:px-6 md:pb-8 md:pt-[186px]">
          <div className="flex h-full w-full items-center">
            <div className="w-full animate-fade-up text-white">
              <h1 className="font-serif max-w-[12ch] text-[3rem] font-semibold leading-[0.9] tracking-tight sm:text-[3.4rem] md:max-w-[13ch] md:text-[4rem] lg:text-[4.55rem] xl:text-[5rem]">
Hedge & Tree Specialists.             </h1>

              <p className="mt-4 max-w-xl text-base font-medium leading-7 text-white/90 md:text-lg md:leading-8">
                Tree work, hedge reductions, stump grinding and garden tidies across Lymm, Cheshire and the North West.
              </p>

              <div className="mt-4 grid gap-2 text-sm font-semibold leading-5 text-white/92 sm:grid-cols-2 md:max-w-2xl">
                {[
                  "Over 200 Google reviews",
                  "5-star reviews across Google & Facebook",
                  "All green waste taken away",
                  "Free quotes by call, text or WhatsApp",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#98c87c] text-[12px] font-bold leading-none text-black">✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-5 grid w-full max-w-[330px] grid-cols-1 gap-4 sm:max-w-[560px] sm:grid-cols-2">
                <a href={phoneHref} className="rounded-full bg-[#98c87c] px-6 py-4 text-center text-sm font-bold uppercase tracking-[0.08em] text-black transition hover:bg-white">
                  Call {phoneDisplay}
                </a>
                <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/60 bg-white/10 px-6 py-4 text-center text-sm font-bold uppercase tracking-[0.08em] text-white backdrop-blur transition hover:bg-white hover:text-black">
                  WhatsApp Quote
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="bg-[#f7f6f1] px-4 pb-12 pt-14 md:px-5 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 grid gap-5 md:grid-cols-[0.85fr_1fr] md:items-end">
            <div>
              <p className="font-bold uppercase tracking-[0.25em] text-[#45673b]">What We Do</p>
              <h2 className="font-serif mt-3 max-w-4xl text-[2.35rem] font-semibold leading-[0.95] tracking-tight md:text-5xl">
                Careful tree work and tidy outdoor spaces.
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-black/65 md:ml-auto md:text-base">
              Pine & Dandy handle everything from hedge reductions and tree work to stump grinding, garden tidies and site clearances.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
            <div className="relative min-h-[460px] overflow-hidden rounded-[2rem] bg-black shadow-2xl ring-1 ring-black/10 sm:min-h-[560px] lg:min-h-0">
              <video
                className="absolute inset-0 h-full w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
              >
                <source src="/videos/website-video.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/82 via-black/18 to-black/10" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white md:p-8">
                <div className="mb-4 inline-flex rounded-full bg-[#98c87c] px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-black">See the work</div>
                <h3 className="font-serif max-w-md text-3xl font-semibold leading-[0.98] md:text-4xl">Hedges reduced. Trees shaped. Gardens reclaimed.</h3>
                <p className="mt-4 max-w-md text-sm font-medium leading-7 text-white/75">Don't let overgrown trees and hedges take over your outdoor space. Get in touch today.</p>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {services.map(([title, copy], index) => (
                <div key={title} className="group rounded-[1.25rem] bg-black p-5 text-white shadow-sm ring-1 ring-white/10 transition duration-500 hover:-translate-y-0.5 hover:shadow-xl">
                  <div className="mb-3 flex items-center justify-between gap-4">
                    <LeafIcon className="h-6 w-6 text-[#98c87c]" />
                    <span className="text-[10px] font-bold tracking-[0.25em] text-white/30">0{index + 1}</span>
                  </div>
                  <h3 className="font-serif text-[1.45rem] font-semibold tracking-tight">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/65">{copy}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="bg-black px-4 py-16 text-white md:px-5 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 grid gap-5 md:mb-10 md:grid-cols-[0.9fr_1fr] md:items-end">
            <div>
              <p className="font-bold uppercase tracking-[0.25em] text-[#98c87c]">Recent Work</p>
              <h2 className="font-serif mt-3 max-w-3xl text-[2.35rem] font-semibold leading-[0.95] tracking-tight md:text-5xl">
                Before, after and everything tidied away.
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-white/65 md:ml-auto md:text-base">
A selection of recently completed tree, hedge & garden projects we've completed.            </p>
          </div>

          <div className={`grid grid-cols-1 gap-4 transition-opacity duration-700 ease-out sm:grid-cols-2 lg:grid-cols-3 ${galleryVisible ? "opacity-100" : "opacity-0"}`} onMouseEnter={() => setGalleryPaused(true)} onMouseLeave={() => setGalleryPaused(false)}>
            {visibleGallery.map((src, index) => (
              <div key={`${src}-${index}-${galleryStart}`} className="group relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-black shadow-sm ring-1 ring-white/10 transition-all duration-700 hover:-translate-y-1 hover:shadow-2xl">
                <Image src={src} alt={`Pine & Dandy recent tree or hedge work ${index + 1}`} fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="object-cover saturate-[0.98] contrast-[1.02] brightness-[0.96] transition-all duration-1000 ease-out group-hover:scale-105" />
                <div className="absolute left-4 top-4 rounded-full bg-[#98c87c] px-3 py-1.5 text-xs font-bold uppercase tracking-[0.12em] text-black">Recent Job</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="bg-[#f7f6f1] px-4 py-16 md:px-5 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 grid gap-5 md:grid-cols-[0.85fr_1fr] md:items-end">
            <div>
              <p className="font-bold uppercase tracking-[0.25em] text-[#45673b]">Customer Reviews</p>
              <h2 className="font-serif mt-3 max-w-4xl text-[2.35rem] font-semibold leading-[0.95] tracking-tight md:text-5xl">
                Trusted across Lymm and the North West.
              </h2>
            </div>
            <div className="max-w-xl md:ml-auto">
              <div className="text-2xl font-black tracking-[0.08em] text-[#98c87c] drop-shadow-[0_1px_0_rgba(0,0,0,0.45)]">★★★★★</div>
              <p className="mt-3 text-sm leading-7 text-black/65 md:text-base">
                Over 200 five-star Google reviews & 100% Facebook recommendation for tree work, hedge work and garden tidies.
              </p>
            </div>
          </div>

          <div className="overflow-hidden">
            <div key={`mobile-review-${reviewStart}`} className="review-slide-in md:hidden">
              <div className="flex min-h-[260px] flex-col justify-between rounded-[1.5rem] bg-white p-6 shadow-sm ring-1 ring-black/5">
                <div>
                  <div className="mb-5 text-lg font-black tracking-[0.1em] text-[#98c87c]">★★★★★</div>
                  <p className="text-base font-semibold leading-7 text-black/75">“{mobileReview.quote}”</p>
                </div>
                <div className="mt-8 border-t border-black/10 pt-5">
                  <p className="font-bold text-black">{mobileReview.name}</p>
                  <p className="mt-1 text-sm font-semibold text-black/45">{mobileReview.date}</p>
                </div>
              </div>
            </div>

            <div key={`desktop-reviews-${reviewStart}`} className="hidden gap-4 md:grid md:grid-cols-3">
              {visibleReviews.map((review, index) => (
                <div key={`${review.name}-${review.date}`} className="review-slide-in flex min-h-[260px] flex-col justify-between rounded-[1.5rem] bg-white p-6 shadow-sm ring-1 ring-black/5 transition duration-500 hover:-translate-y-1 hover:shadow-xl" style={{ animationDelay: `${index * 90}ms` }}>
                  <div>
                    <div className="mb-5 text-lg font-black tracking-[0.1em] text-[#98c87c]">★★★★★</div>
                    <p className="text-base font-semibold leading-7 text-black/75">“{review.quote}”</p>
                  </div>
                  <div className="mt-8 border-t border-black/10 pt-5">
                    <p className="font-bold text-black">{review.name}</p>
                    <p className="mt-1 text-sm font-semibold text-black/45">{review.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-col items-start justify-between gap-4 rounded-[1.5rem] bg-black p-5 text-white md:flex-row md:items-center">
            <p className="max-w-2xl text-sm font-medium leading-7 text-white/70">
              Need tree work, hedge work or a garden tidy? Call, text or WhatsApp Dan to arrange a free quote.
            </p>
            <a href={phoneHref} className="rounded-full bg-[#98c87c] px-6 py-3.5 text-sm font-bold uppercase tracking-[0.08em] text-black transition hover:bg-white">
              Call Dan
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 md:px-5 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1fr]">
          <div>
            <p className="font-bold uppercase tracking-[0.25em] text-[#45673b]">Why Choose Us</p>
            <h2 className="font-serif mt-3 max-w-3xl text-[2.35rem] font-semibold leading-[0.95] tracking-tight md:text-5xl">
              Neat work, clear communication and proper clean-up.
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-black/65 md:text-base">
              The work is only finished when the space is tidy. Pine & Dandy take away waste, keep communication simple and leave gardens looking cared for.
            </p>
            <div className="mt-8 rounded-[1.6rem] bg-black p-6 text-white">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#98c87c]">Free Quotes Available</p>
              <p className="font-serif mt-3 text-3xl font-semibold tracking-tight">Call, Text or WhatsApp</p>
              <p className="mt-3 text-sm leading-7 text-white/60">Send photos where possible and Dan can advise on the best next step.</p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["Tree & Hedge Specialists", "Focused on outdoor work including reductions, pruning, shaping, stump grinding and clearances."],
              ["Waste Taken Away", "Cuttings, branches and green waste removed so customers are not left with a mess."],
              ["Highly Reviewed", "Strong review footprint across Google and Facebook gives new customers confidence."],
              ["Local & Reliable", "Based in Lymm and serving nearby Cheshire and North West areas."],
            ].map(([title, copy]) => (
              <div key={title} className="rounded-[1.4rem] bg-[#f7f6f1] p-6 ring-1 ring-black/5">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#98c87c] font-bold text-black"><LeafIcon className="h-5 w-5" /></div>
                <h3 className="font-serif text-[1.55rem] font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-black/65">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="areas" className="bg-[#f7f6f1] px-4 py-16 md:px-5 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 rounded-[2rem] bg-black p-6 text-white shadow-2xl md:grid-cols-[0.8fr_1fr] md:p-10">
            <div>
              <p className="font-bold uppercase tracking-[0.25em] text-[#98c87c]">Areas Covered</p>
              <h2 className="font-serif mt-3 text-[2.2rem] font-semibold leading-[0.95] tracking-tight md:text-5xl">
                Tree and hedge work across Lymm and nearby areas.
              </h2>
              <p className="mt-5 leading-7 text-white/65">
                Based in Lymm and covering Cheshire, Greater Manchester and surrounding North West areas.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {areas.map((area) => (
                <div key={area} className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-3 text-center text-sm font-semibold">{area}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-black px-4 py-16 text-white md:px-5 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <p className="font-bold uppercase tracking-[0.25em] text-[#98c87c]">Get A Free Quote</p>
            <h2 className="font-serif mt-3 text-[2.35rem] font-semibold leading-[0.95] tracking-tight md:text-5xl">
              Tell us what needs doing.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-white/65">
              Call, text or WhatsApp for a free quote. Photos of the hedge, tree or garden area are always helpful.
            </p>
          </div>

          <div className="mx-auto max-w-3xl rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 text-white shadow-2xl md:p-8">
            <div className="grid gap-4 md:grid-cols-2">
              <input className="field" placeholder="Your name" value={quoteName} onChange={(event) => setQuoteName(event.target.value)} />
              <input className="field" placeholder="Phone number" value={quotePhone} onChange={(event) => setQuotePhone(event.target.value)} />
              <select className="field md:col-span-2" value={quoteJobType} onChange={(event) => setQuoteJobType(event.target.value)}>
                <option value="">What do you need?</option>
                <option>Tree work</option>
                <option>Hedge work</option>
                <option>Stump grinding</option>
                <option>Garden tidy</option>
                <option>Site clearance</option>
                <option>Not sure yet</option>
              </select>
              <textarea className="field min-h-[160px] md:col-span-2" placeholder="Briefly tell us what needs doing..." value={quoteDetails} onChange={(event) => setQuoteDetails(event.target.value)} />
              <a href={quoteWhatsappHref} target="_blank" rel="noopener noreferrer" className="rounded-full bg-[#98c87c] px-8 py-4 text-center text-sm font-bold uppercase tracking-[0.08em] text-black transition hover:bg-white md:col-span-2">
                Start Chat On WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-2xl ring-4 ring-white/30 transition hover:scale-105" aria-label="WhatsApp Pine and Dandy Tree Services">
        <WhatsAppIcon className="h-8 w-8" />
      </a>

      <footer className="bg-black px-4 py-12 text-white md:px-5">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.2fr_1fr_1fr] md:items-start">
          <div>
            <div className="inline-flex overflow-hidden rounded-2xl bg-black ring-1 ring-[#98c87c]/25"><Logo /></div>
            <p className="mt-5 max-w-md leading-7 text-white/55">
              Hedge and tree specialists based in Lymm, covering tree work, hedge work, stump grinding, garden tidies and site clearances.
            </p>
          </div>

          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-[#98c87c]">Services</p>
            <div className="space-y-2 text-white/65">
              <p>Tree Work</p>
              <p>Hedge Work</p>
              <p>Stump Grinding</p>
              <p>Garden Tidies</p>
              <p>Site Clearances</p>
              <p>Waste Taken Away</p>
            </div>
          </div>

          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-[#98c87c]">Contact</p>
            <div className="space-y-3 text-white/65">
              <p className="font-bold text-white">Pine & Dandy Tree Services</p>
              <p>Lymm & North West</p>
              <a href={phoneHref} className="block hover:text-[#98c87c]">{phoneDisplay}</a>
              <a href={emailHref} className="block hover:text-[#98c87c]">pineanddandytrees@gmail.com</a>
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-[#98c87c]"><WhatsAppIcon className="h-5 w-5 text-[#98c87c]" />WhatsApp Dan</a>
              <a href={facebookHref} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-[#98c87c]"><FacebookIcon className="h-5 w-5 text-[#98c87c]" />Facebook</a>
              <a href={instagramHref} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-[#98c87c]"><InstagramIcon className="h-5 w-5 text-[#98c87c]" />Instagram</a>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-10 flex max-w-7xl flex-col justify-between gap-3 border-t border-white/10 pt-6 text-sm text-white/35 md:flex-row">
          <p>© Pine & Dandy Tree Services. All rights reserved.</p>
          <p>Tree Work • Hedge Work • Garden Tidies</p>
        </div>
      </footer>
    </main>
  );
}
