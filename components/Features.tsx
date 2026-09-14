"use client";
import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, CheckCircle } from "lucide-react";
import Image from "next/image";

/* ─── UI Mockup components ─── */
function DeductionsCard() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 w-64">
      <p className="text-[12px] text-gray-500 text-center mb-4 leading-snug">
        Exemptions &amp; setoffs are applied<br/>automatically
      </p>
      <div className="space-y-3">
        {[
          ["Standard deduction", "₹ 75,000"],
          ["Section 80C",        "₹ 1,50,000"],
          ["LTCG Exemption",     "₹ 1,25,000"],
        ].map(([l, v]) => (
          <div key={l} className="flex justify-between items-center border-b border-gray-50 pb-2">
            <span className="text-[12px] text-gray-500">{l}</span>
            <span className="text-[12px] font-bold text-gray-700 flex items-center gap-1">
              {v} <CheckCircle size={13} className="text-[#12b886]"/>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function RegimeCard() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 w-64">
      <p className="text-[11px] text-gray-400 text-center mb-3">
        Auto-selecting best regime that saves you most in taxes
      </p>
      <div className="space-y-3 mb-3">
        <div className="border border-[#3b5bdb]/30 rounded-xl p-3 bg-blue-50/50">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-[12px] font-bold text-[#1a1f5e]">New regime</p>
              <p className="text-[11px] text-[#12b886]">Tax payable ₹ 3,88,807</p>
            </div>
            <CheckCircle size={18} className="text-[#12b886]"/>
          </div>
          <div className="h-1.5 bg-[#3b5bdb] rounded-full mt-2"/>
        </div>
        <div className="border border-gray-100 rounded-xl p-3">
          <p className="text-[12px] text-gray-500 font-medium">Old regime</p>
          <p className="text-[11px] text-red-400">Tax payable ₹ 5,78,557</p>
          <div className="h-1.5 bg-red-200 rounded-full mt-2 w-4/5"/>
        </div>
      </div>
      <p className="text-[12px] font-bold text-[#12b886] text-center">
        New Regime saves<br/>₹ 2,09,760 more
      </p>
    </div>
  );
}

function LossCard() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 w-64">
      <p className="text-[13px] font-bold text-gray-700 text-center mb-4">Your Loss Adjustment</p>
      <div className="space-y-3">
        {[
          ["Capital Gains",       "₹ 4,57,892"],
          ["Brought Forward Loss","₹ 3,24,673"],
          ["Net Gains",           "₹ 1,33,219"],
        ].map(([l, v]) => (
          <div key={l} className="flex justify-between items-center border-b border-gray-50 pb-2">
            <span className="text-[12px] text-gray-500">{l}</span>
            <span className="text-[12px] font-bold text-gray-700 flex items-center gap-1">
              {v} <CheckCircle size={13} className="text-[#12b886]"/>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function BrokerCard() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden relative">
      {/* Two large arc strokes as background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Outer arc */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-[-60%] w-[700px] h-[700px] rounded-full border-[2px] border-[#D2F3E1]" />
        {/* Inner arc */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-[-60%] w-[500px] h-[500px] rounded-full border-[2px] border-[#9AE9BF]" />
      </div>

      {/* Content */}
      <div className="relative z-10 p-4 w-64">
        <p className="text-[12px] font-bold text-[#314259] text-center mb-3">
          80+ Brokers Supported
        </p>
        <div className="space-y-2 mb-3">
          {[
          { icon: "/img/zerodha_icon.jpeg", name: "Zerodha", amount: "₹ 7,54,40", complete: true },
          { icon: "/img/groww_icon.png", name: "Groww", amount: "FETCHING..", complete: false },
          { icon: "/img/upstox.jpeg", name: "Upstox", amount: "FETCHING..", complete: false },
        ].map((b, i) => (
          <div key={i} className="flex items-center justify-between bg-white rounded-xl p-3 border border-gray-100">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
                <Image
                  src={b.icon}
                  alt={b.name}
                  width={32}
                  height={32}
                  className="object-cover"
                />
              </div>
              <span className="text-[11px] font-semibold text-gray-700">{b.name}</span>
            </div>
            <span className={`text-[10px] font-bold ${b.complete ? "text-[#12b886] flex items-center gap-1" : "text-blue-400"}`}>
              {b.amount}
              {b.complete && <CheckCircle size={10} className="text-[#12b886]"/>}
            </span>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
}

function PreFilledCard() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 w-64">
      <p className="text-[12px] font-bold text-gray-700 text-center mb-3">
        Pre-filled from all your sources
      </p>
      <div className="space-y-2.5">
        {[
          ["Form 16",        "Auto filled", true ],
          ["AIS / 26AS",     "Auto filled", true ],
          ["Bank Interest",  "Auto filled", true ],
          ["Capital Gains",  "Auto filled", true ],
          ["Rental Income",  "Fetching...", false],
        ].map(([l, v, done]) => (
          <div key={String(l)} className="flex justify-between items-center border-b border-gray-50 pb-2">
            <span className="text-[12px] text-gray-500">{l}</span>
            <span className={`text-[11px] font-semibold flex items-center gap-1 ${done ? "text-[#12b886]" : "text-blue-400"}`}>
              {done ? <CheckCircle size={12}/> : <span className="w-3 h-3 border-2 border-blue-400 border-t-transparent rounded-full animate-spin inline-block"/>}
              {v}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Slide data ─── */
const features = [
  {
    title: "Zero manual entry, pre-filled from your records",
    ui: <PreFilledCard />,
    color: "#FFE4E6", // pastel pink
  },
  {
    title: "Every trade pulled in from 80+ brokers in 1-click",
    ui: <BrokerCard />,
    color: "#DCFCE7", // pastel green
  },
  {
    title: "Capital gains, F&O, trading income, all auto-computed, precisely",
    ui: <LossCard />,
    color: "#FFEDD5", // pastel orange
  },
  {
    title: "Right form, right regime, both auto-selected",
    ui: <RegimeCard />,
    color: "#DBEAFE", // pastel blue
  },
  {
    title: "Every loss set off and carried forward, nothing missed",
    ui: <DeductionsCard />,
    color: "#FEE2E2", // pastel red
  },
];

export default function Features() {
  const [cur, setCur] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  // Auto-scroll carousel continuously
  useEffect(() => {
    const interval = setInterval(() => {
      setCur(prev => {
        const next = (prev + 1) % features.length;
        const el = trackRef.current?.children[next] as HTMLElement;
        if (trackRef.current && el) {
          const container = trackRef.current;
          const scrollLeft = el.offsetLeft - (container.offsetWidth / 2) + (el.offsetWidth / 2);
          container.scrollTo({ left: scrollLeft, behavior: 'smooth' });
        }
        return next;
      });
    }, 4000); // Change every 4 seconds
    return () => clearInterval(interval);
  }, []);

  const scrollTo = (idx: number) => {
    setCur(idx);
    const cards = trackRef.current?.querySelectorAll(".feat-card");
    (cards?.[idx] as HTMLElement)?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
  };

  const go = (dir: number) => scrollTo(Math.max(0, Math.min(features.length - 1, cur + dir)));

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Subtle radial gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/40 via-white to-purple-50/40"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-blue-100/30 to-purple-100/30 rounded-full blur-3xl"></div>
      
      {/* Heading */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-12 relative z-10">
        <motion.div
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-gray-400 text-base mb-2">Tax filing, as easy as it gets.</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a1f5e]">
            And as <span className="gradient-text">accurate</span> as it needs to be.
          </h2>
        </motion.div>
      </div>

      {/* Carousel — FULL WIDTH */}
      <div className="relative z-10">
        <div
          ref={trackRef}
          className="flex gap-8 overflow-x-auto scroll-snap-x no-scrollbar pb-3"
        >
          {features.map((f, i) => (
            <div
              key={i}
              className="feat-card snap-start flex-shrink-0 w-[min(100vw,480px)] flex flex-col items-center"
            >
              {/* Rounded blob container with gradient bg */}
              <div className="relative w-full max-w-sm aspect-[4/5] rounded-[3rem] p-6 flex flex-col items-center justify-between mb-6 overflow-visible border border-gray-100">
                {/* Curved background shape - large arc */}
                <svg viewBox="0 0 375 375" fill="none" className="absolute inset-0 -z-10">
                  <motion.circle
                    cx="187.5"
                    cy="475"
                    r="320"
                    fill={f.color}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    style={{ transformOrigin: "50% 50%" }}
                  />
                  <motion.circle
                    cx="187.5"
                    cy="455"
                    r="300"
                    fill={f.color}
                    opacity="0.7"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    style={{ transformOrigin: "50% 50%" }}
                  />
                </svg>
                {/* Floating animated UI card */}
                <motion.div
                  animate={{ y: [0, -12, 0] }}
                  transition={{ duration: 3.5 + i * 0.3, repeat: Infinity, ease: "easeInOut" }}
                  className="w-full flex flex-col items-center"
                >
                  {f.ui}
                  {/* Text at bottom of container */}
                  <div className="text-center px-4 mt-6 mb-4">
                    <h4 className="text-lg font-semibold text-[#1a1f5e] leading-tight">
                      {f.title}
                    </h4>
                  </div>
                </motion.div>
              </div>
            </div>
          ))}
        </div>

        {/* Arrows */}
        <button onClick={() => go(-1)} disabled={cur === 0}
          className="absolute left-4 top-1/3 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-sm border border-gray-100 flex items-center justify-center text-[#3b5bdb] hover:shadow-md transition-all z-10">
          <ChevronLeft size={18} />
        </button>
        <button onClick={() => go(1)} disabled={cur === features.length - 1}
          className="absolute right-4 top-1/3 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-sm border border-gray-100 flex items-center justify-center text-[#3b5bdb] hover:shadow-md transition-all z-10">
          <ChevronRight size={18} />
        </button>
      </div>

      {/* Dots */}
      <div className="flex gap-2 justify-center mt-6">
        {features.map((_, i) => (
          <button key={i} onClick={() => scrollTo(i)}
            className={`rounded-full transition-all duration-300 ${i === cur ? "w-6 h-2.5 bg-[#3b5bdb]" : "w-2.5 h-2.5 bg-gray-200 hover:bg-gray-300"}`}
          />
        ))}
      </div>
    </section>
  );
}
