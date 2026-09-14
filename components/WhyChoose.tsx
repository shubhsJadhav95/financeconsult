"use client";

import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight, CheckCircle } from "lucide-react";

/* ─────────────────────────────────────────
   Slide data
───────────────────────────────────────── */
const slides = [
  {
    tag: "Maximum Tax Refund",
    title: "Maximum Tax",
    accent: "Refund",
    body: "Whether you file by yourself or with our tax experts, we identify every deduction you qualify for — guaranteed maximum refund every time.",
    img: "/img/finance_india.jpg",
    imgPosition: "object-left-top", // finance_india - little bit left side
    ui: <MaxRefundCard />,
  },
  {
    tag: "24x7 Support",
    title: "24x7",
    accent: "Support",
    body: "Our team of tax professionals is available around the clock — via chat, phone, or email — ready to guide you through every step.",
    img: "/img/finance_consultant.jpg",
    imgPosition: "object-center", // finance_consultant - center
    ui: <SupportCard />,
  },
  {
    tag: "100% Accuracy",
    title: "100%",
    accent: "Accuracy",
    body: "Our error-detection technology reviews your return, catching mistakes and missed entries — so you can file confidently.",
    img: "/img/finance_aest.jpg",
    imgPosition: "object-left-top", // finance_aest - left side
    ui: <AccuracyCard />,
  },
];

/* ─────────────────────────────────────────
   Floating UI cards
───────────────────────────────────────── */
function MaxRefundCard() {
  return (
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
      className="bg-white rounded-2xl shadow-xl border border-gray-100 p-4 w-52"
    >
      <p className="text-[11px] font-bold text-gray-500 mb-1">Total Refund</p>
      <p className="text-2xl font-black text-[#3b5bdb] mb-3">₹ 89,090</p>
      <div className="space-y-2">
        {[
          ["Gross Income",  "₹ 30,26,152", ""],
          ["Deductions",    "₹ 3,99,673",  "text-[#12b886]"],
          ["Taxable",       "₹ 22,36,464", ""],
          ["Tax payable",   "₹ 3,68,807",  "text-orange-500"],
        ].map(([l, v, c]) => (
          <div key={l} className="flex justify-between items-center text-[11px] border-b border-gray-50 pb-1">
            <span className="text-gray-400">{l}</span>
            <span className={`font-bold ${c || "text-gray-700"}`}>{v}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function SupportCard() {
  const [online, setOnline] = useState(true);
  useEffect(() => {
    const t = setInterval(() => setOnline(v => !v), 2000);
    return () => clearInterval(t);
  }, []);
  return (
    <motion.div
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className="bg-white rounded-2xl shadow-xl border border-blue-50 p-4 w-48"
    >
      <div className="w-10 h-10 flex items-center justify-center mb-2 overflow-hidden">
        <Image src="/logo.svg" alt="FinanceConsult" width={32} height={32} className="object-contain" />
      </div>
      <p className="text-sm font-bold text-[#1a1f5e]">FinanceConsult</p>
      <p className="text-[11px] text-gray-400 mb-3">Tax Expert Support</p>
      <div className="flex gap-2">
        {["/img/finance_india.jpg", "/img/finance_write.jpg", "/img/finance_plant.jpg"].map((src, i) => (
          <div key={i} className="w-8 h-8 rounded-full border-2 border-white overflow-hidden relative shadow-sm">
            <Image src={src} alt="" fill className="object-cover" />
          </div>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.p key={String(online)}
          initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
          className={`text-[11px] font-semibold mt-2 flex items-center gap-1 ${online ? "text-[#12b886]" : "text-gray-400"}`}>
          <span className={`w-2 h-2 rounded-full inline-block ${online ? "bg-[#12b886] animate-pulse" : "bg-gray-300"}`} />
          {online ? "3 experts online now" : "Avg reply: 2 min"}
        </motion.p>
      </AnimatePresence>
    </motion.div>
  );
}

function AccuracyCard() {
  const rows = ["Salary", "Gross professional receipts", "LTCG"];
  const [filled, setFilled] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setFilled(f => (f + 1) % (rows.length + 1)), 900);
    return () => clearInterval(t);
  }, [rows.length]);

  return (
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
      className="bg-white rounded-2xl shadow-xl border border-gray-100 p-4 w-52"
    >
      <p className="text-xl font-black text-[#1a1f5e]">100%</p>
      <p className="text-[11px] font-semibold text-gray-500 mb-3">Accurate and notice protected</p>
      <p className="text-[10px] text-gray-400 mb-2">System validation and CA reviews</p>
      <div className="space-y-2">
        {rows.map((r, i) => (
          <div key={r} className="flex justify-between items-center text-[11px] border-b border-gray-50 pb-1">
            <span className="text-gray-500">{r}</span>
            <AnimatePresence mode="wait">
              {filled > i ? (
                <motion.span key="done" initial={{ scale: 0 }} animate={{ scale: 1 }} className="text-[#12b886] font-bold flex items-center gap-0.5">
                  ✓ <span className="text-gray-600">{i === 0 ? "₹ 20,54,872" : i === 1 ? "₹ 5,13,580" : "₹ 4,57,693"}</span>
                </motion.span>
              ) : (
                <motion.span key="empty" className="text-gray-200 text-[10px]">—</motion.span>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function PhoneCard() {
  const values = ["₹ 88,090", "₹ 1,12,400", "₹ 67,320", "₹ 2,09,760"];
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx(i => (i + 1) % values.length), 1800);
    return () => clearInterval(t);
  }, [values.length]);

  return (
    <motion.div
      animate={{ y: [0, -12, 0] }}
      transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
      className="bg-[#ffd43b] rounded-3xl shadow-2xl p-5 w-44 text-center border-4 border-white"
    >
      <p className="text-[11px] font-bold text-gray-700 mb-1">ITR Refund</p>
      <AnimatePresence mode="wait">
        <motion.p key={idx}
          initial={{ y: 12, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -12, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="text-2xl font-black text-[#1a1f5e]">
          {values[idx]}
        </motion.p>
      </AnimatePresence>
      <div className="mt-3 flex items-center justify-center gap-1">
        <CheckCircle size={12} className="text-[#12b886]" />
        <span className="text-[10px] font-semibold text-gray-600">Maximum refund</span>
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────
   Main component
───────────────────────────────────────── */
export default function WhyChoose() {
  const [cur, setCur] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  // Create infinite loop by duplicating slides
  const infiniteSlides = [...slides, ...slides, ...slides];
  const totalSlides = infiniteSlides.length;

  const scrollTo = (idx: number) => {
    setCur(idx);
    const el = trackRef.current?.children[idx] as HTMLElement;
    // Use scrollTo instead of scrollIntoView to avoid page jumping
    if (trackRef.current && el) {
      const container = trackRef.current;
      const scrollLeft = el.offsetLeft - (container.offsetWidth / 2) + (el.offsetWidth / 2);
      container.scrollTo({ left: scrollLeft, behavior: 'smooth' });
    }
  };

  // Auto-scroll carousel continuously right to left
  useEffect(() => {
    const interval = setInterval(() => {
      setCur(prev => {
        const next = prev + 1;
        // When reaching the end of second set, jump to start of second set
        if (next >= slides.length * 2) {
          const jumpTo = slides.length;
          const el = trackRef.current?.children[jumpTo] as HTMLElement;
          // Scroll without moving the page - use scrollLeft instead of scrollIntoView
          if (trackRef.current && el) {
            const container = trackRef.current;
            const scrollLeft = el.offsetLeft - (container.offsetWidth / 2) + (el.offsetWidth / 2);
            container.scrollTo({ left: scrollLeft, behavior: 'auto' });
          }
          return jumpTo;
        }
        // Smooth scroll for normal advancement without affecting page scroll
        const el = trackRef.current?.children[next] as HTMLElement;
        if (trackRef.current && el) {
          const container = trackRef.current;
          const scrollLeft = el.offsetLeft - (container.offsetWidth / 2) + (el.offsetWidth / 2);
          container.scrollTo({ left: scrollLeft, behavior: 'smooth' });
        }
        return next;
      });
    }, 4000); // Auto-advance every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-white overflow-hidden">
      {/* Heading — contained with max-width */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-10">
        <motion.h2
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-extrabold text-[#1a1f5e] text-center">
          Why choose <span className="gradient-text">FinanceConsult</span> to file your taxes
        </motion.h2>
      </div>

      {/* Carousel track — centered with peek and infinite loop */}
      <div className="relative">
        <div
          ref={trackRef}
          className="flex overflow-x-auto no-scrollbar gap-12 pb-2"
          style={{ 
            scrollSnapType: 'none',
            scrollBehavior: 'auto',
            scrollPaddingLeft: 'calc((100vw - 900px) / 2)',
            scrollPaddingRight: 'calc((100vw - 900px) / 2)',
            paddingLeft: 'calc((100vw - 900px) / 2)',
            paddingRight: 'calc((100vw - 900px) / 2)'
          }}
        >
          {infiniteSlides.map((s, i) => (
            <motion.div
              key={`${i}-${s.tag}`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: (i % slides.length) * 0.08 }}
              className="flex-shrink-0 w-[900px] h-[420px] bg-[#eef2ff] rounded-3xl overflow-hidden flex items-center gap-8"
              onClick={() => scrollTo(i)}
            >
              {/* ── Center: full-height person image + floating UI card ── */}
              <div className="relative w-[340px] h-full flex-shrink-0">
                {/* Person image - position varies per slide */}
                <Image
                  src={s.img}
                  alt={s.title}
                  fill
                  className={`object-cover ${s.imgPosition}`}
                />

                {/* Floating UI card — positioned on right side to see more of image */}
                <div className="absolute bottom-8 right-4 z-10">
                  {s.ui}
                </div>
              </div>

              {/* ── Right: text content ── */}
              <div className="flex-1 flex flex-col justify-center pr-12">
                <motion.span
                  initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                  className="inline-block bg-blue-100 text-[#3b5bdb] text-[11px] font-bold px-3 py-1 rounded-full w-fit mb-5">
                  {s.tag}
                </motion.span>
                <h3 className="text-3xl sm:text-4xl font-extrabold text-[#1a1f5e] leading-tight mb-4">
                  {s.title}{" "}
                  <span className="gradient-text">{s.accent}</span>
                </h3>
                <p className="text-gray-500 text-[15px] leading-relaxed max-w-md">
                  {s.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Arrow nav — works with infinite loop */}
        <button
            onClick={() => {
              const prev = cur - 1;
              if (prev >= 0) {
                scrollTo(prev);
              } else {
                // Jump to end of second set when going back from start
                const jumpTo = slides.length * 2 - 1;
                const el = trackRef.current?.children[jumpTo] as HTMLElement;
                if (trackRef.current && el) {
                  const container = trackRef.current;
                  const scrollLeft = el.offsetLeft - (container.offsetWidth / 2) + (el.offsetWidth / 2);
                  container.scrollTo({ left: scrollLeft, behavior: 'auto' });
                }
                setCur(jumpTo);
              }
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-sm border border-gray-100 flex items-center justify-center text-[#3b5bdb] hover:shadow-md transition-all z-10"
          >
          <ChevronLeft size={18} />
        </button>
        <button
            onClick={() => {
              const next = cur + 1;
              if (next < totalSlides) {
                scrollTo(next);
              }
              // Loop logic handled in auto-play
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-sm border border-gray-100 flex items-center justify-center text-[#3b5bdb] hover:shadow-md transition-all z-10"
          >
          <ChevronRight size={18} />
        </button>
      </div>

      {/* Dots — show only original 3 slides */}
      <div className="flex gap-2 justify-center mt-6">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i + slides.length)}
              className={`rounded-full transition-all duration-300 ${(cur % slides.length) === i ? "w-6 h-2.5 bg-[#3b5bdb]" : "w-2.5 h-2.5 bg-gray-200 hover:bg-gray-300"}`}
          />
        ))}
      </div>
    </section>
  );
}
