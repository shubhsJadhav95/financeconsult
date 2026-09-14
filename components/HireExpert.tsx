"use client";

import ExpertMatch from "@/components/ExpertMatch";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { CheckCircle, RefreshCw } from "lucide-react";

/* ── Auto-fill rows ── */
const fillRows = [
  { label: "Taxes Paid",             delay: 0    },
  { label: "Tax saving deductions",  delay: 1200 },
  { label: "Salary income",          delay: 2400 },
];

type FillState = "idle" | "fetching" | "done";

function AutoFillRow({ label, delay }: { label: string; delay: number }) {
  const [state, setState] = useState<FillState>("idle");

  useEffect(() => {
    const t1 = setTimeout(() => setState("fetching"), delay + 400);
    const t2 = setTimeout(() => setState("done"),     delay + 1600);
    const t3 = setTimeout(() => setState("idle"),     delay + 5000);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [delay]);

  /* restart loop */
  useEffect(() => {
    if (state !== "idle") return;
    const loop = setTimeout(() => {
      const t1 = setTimeout(() => setState("fetching"), delay + 400);
      const t2 = setTimeout(() => setState("done"),     delay + 1600);
      const t3 = setTimeout(() => setState("idle"),     delay + 5000);
      return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
    }, 1000);
    return () => clearTimeout(loop);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  return (
    <div className="flex items-center justify-between py-2.5 border-b border-gray-100 last:border-0">
      <span className="text-[13px] text-gray-600">{label}</span>
      <AnimatePresence mode="wait">
        {state === "idle" && (
          <motion.span key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="text-[12px] text-gray-300">—</motion.span>
        )}
        {state === "fetching" && (
          <motion.span key="fetch" initial={{ opacity: 0, x: 6 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }}
            className="flex items-center gap-1.5 text-[12px] text-blue-400 font-medium">
            <RefreshCw size={11} className="animate-spin" /> Fetching...
          </motion.span>
        )}
        {state === "done" && (
          <motion.span key="done"
            initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
            className="flex items-center gap-1 text-[12px] text-[#12b886] font-semibold">
            Auto filled <CheckCircle size={13} className="text-[#12b886]" />
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ── Animated bar chart ── */
function BarChart() {
  const [started, setStarted] = useState(false);
  useEffect(() => { const t = setTimeout(() => setStarted(true), 600); return () => clearTimeout(t); }, []);

  return (
    <div className="flex items-end gap-6 justify-center h-36">
      {/* Other platform — taller, green */}
      <div className="flex flex-col items-center gap-2">
        <motion.div
          className="w-14 rounded-t-xl bg-gradient-to-t from-[#12b886] to-[#38d9a9] relative overflow-hidden"
          initial={{ height: 0 }}
          animate={{ height: started ? 120 : 0 }}
          transition={{ duration: 0.9, ease: [0.34, 1.26, 0.64, 1], delay: 0.2 }}
        >
          <div className="absolute bottom-2 left-0 right-0 text-center text-white text-[10px] font-bold">15 Days</div>
        </motion.div>
        <span className="text-[10px] text-gray-400 text-center">other<br/>platform</span>
      </div>

      {/* FinanceConsult — shorter, blue */}
      <div className="flex flex-col items-center gap-2">
        <motion.div
          className="w-14 rounded-t-xl bg-gradient-to-t from-[#3b5bdb] to-[#74c0fc] relative overflow-hidden"
          initial={{ height: 0 }}
          animate={{ height: started ? 65 : 0 }}
          transition={{ duration: 0.9, ease: [0.34, 1.26, 0.64, 1], delay: 0.5 }}
        >
          <div className="absolute bottom-2 left-0 right-0 text-center text-white text-[10px] font-bold">~12 hrs</div>
        </motion.div>
        <span className="text-[10px] text-[#3b5bdb] font-semibold text-center">finance<br/>consult</span>
      </div>
    </div>
  );
}

/* ── Review & file pill animation ── */
function TaxSummaryCard() {
  const [showBtn, setShowBtn] = useState(false);
  useEffect(() => {
    const t = setInterval(() => setShowBtn(v => !v), 2800);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-3 w-full text-left relative overflow-hidden">
      <p className="text-[11px] font-bold text-gray-700 mb-2">Tax summary</p>
      <div className="space-y-1.5">
        {[
          ["Gross Income",   "₹ 30,26,152", ""],
          ["savings (deductions)", "₹ 7,89,688", "text-[#12b886]"],
          ["Taxable Income", "₹ 22,36,464", ""],
        ].map(([l, v, c]) => (
          <div key={l} className="flex justify-between text-[10px]">
            <span className="text-gray-400">{l}</span>
            <span className={`font-semibold ${c || "text-gray-700"}`}>{v}</span>
          </div>
        ))}
      </div>
      {/* Animated "Auto filled" + "Review & file" */}
      <div className="mt-2 flex items-center gap-1.5 flex-wrap">
        <span className="flex items-center gap-1 text-[9px] text-[#12b886] font-semibold bg-green-50 px-1.5 py-0.5 rounded-full">
          <CheckCircle size={9}/> Auto filled
        </span>
        <AnimatePresence>
          {showBtn && (
            <motion.button
              initial={{ opacity: 0, x: 10, scale: 0.9 }}
              animate={{ opacity: 1, x: 0,  scale: 1   }}
              exit={{   opacity: 0, x: 10, scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className="text-[9px] font-bold bg-[#3b5bdb] text-white px-2.5 py-1 rounded-full shadow-md"
            >
              Review &amp; file
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════
   MAIN COMPONENT
══════════════════════════════════════════ */
export default function HireExpert() {
  return (
    <section className="py-20 bg-white" id="hire-expert">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Heading */}
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a1f5e]">
            Need more help? Hire India&apos;s<br />
            <span className="gradient-text">Top Tax Experts</span> and file within 24 hours
          </h2>
        </motion.div>

        {/* ── BENTO GRID ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-auto">

          {/* ── Card 1: Expert Match — animated spin component ── */}
          <div className="sm:row-span-2">
            <ExpertMatch />
          </div>

          {/* ── Card 2: Zero Manual Entry ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="bg-[#f8f9ff] rounded-3xl p-6 flex flex-col justify-between"
          >
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 mb-5">
              {fillRows.map(r => (
                <AutoFillRow key={r.label} label={r.label} delay={r.delay} />
              ))}
            </div>
            <div>
              <h3 className="text-lg font-extrabold text-[#1a1f5e] mb-2">
                Zero Manual Entry.<br />Zero Delays.
              </h3>
              <p className="text-[13px] text-gray-400 leading-relaxed">
                Form 16, AIS, 26AS — pulled and pre-filled in minutes
              </p>
            </div>
          </motion.div>

          {/* ── Card 3: No back and forth ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="bg-[#f8f9ff] rounded-3xl p-6 flex flex-col justify-between"
          >
            <div className="mb-5">
              <TaxSummaryCard />
            </div>
            <div>
              <h3 className="text-lg font-extrabold text-[#1a1f5e] mb-2">
                No back and forth, no<br />revision loops.
              </h3>
              <p className="text-[13px] text-gray-400 leading-relaxed">
                Everything captured upfront so filing happens in one shot
              </p>
            </div>
          </motion.div>

          {/* ── Card 4: Average filing time (wide bottom) ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
            className="bg-[#eef2ff] rounded-3xl p-7 sm:col-span-2 flex flex-col sm:flex-row items-center justify-between gap-8"
          >
            {/* Bar chart */}
            <div className="flex-shrink-0">
              <BarChart />
            </div>

            {/* Text */}
            <div className="text-center sm:text-left">
              <h3 className="text-2xl font-extrabold text-[#1a1f5e] mb-3">
                Average filing time:{" "}
                <span className="gradient-text">12 hours.</span>
              </h3>
              <p className="text-[13px] text-gray-500 leading-relaxed max-w-sm">
                Expert assigned, documents verified, and ITR filed — all done before the day even ends
              </p>
            </div>
          </motion.div>
        </div>

        {/* ── Bottom CTA — matches screenshot: light blue bg, large image, accuracy ring ── */}
        <motion.div
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className="mt-5 relative bg-gradient-to-r from-[#dce8ff] via-[#eef4ff] to-[#e0ecff] rounded-3xl overflow-hidden flex flex-col sm:flex-row items-center justify-between gap-0 min-h-[220px]"
        >
          {/* Left text side */}
          <div className="p-8 sm:p-10 flex-1 z-10">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1a1f5e] mb-3 leading-tight">
              File with confidence
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-6 max-w-xs">
              with every detail handled right from start to submission.
            </p>
            <a href="#contact"
              className="inline-block bg-[#3b5bdb] hover:bg-[#2f4ac7] text-white font-bold px-7 py-3 rounded-xl text-sm transition-all shadow-sm shadow-blue-200">
              Hire a Tax Expert
            </a>
          </div>

          {/* Right — large image with spinning accuracy ring */}
          <div className="relative flex-shrink-0 h-52 sm:h-64 w-full sm:w-auto sm:min-w-[420px] flex items-end justify-center overflow-hidden">
            {/* Spinning accuracy ring */}
            <div className="absolute left-8 top-1/2 -translate-y-1/2 z-10 pointer-events-none">
              <svg viewBox="0 0 180 180" className="w-44 h-44 animate-spin-slow opacity-70">
                <defs>
                  <path id="cring" d="M 90,90 m -68,0 a 68,68 0 1,1 136,0 a 68,68 0 1,1 -136,0"/>
                </defs>
                <text fontSize="12" fontWeight="700" fill="#3b5bdb" letterSpacing="5">
                  <textPath href="#cring">100% ACCURACY • 100% ACCURACY • </textPath>
                </text>
              </svg>
            </div>

            {/* People image — large, no border radius on right/bottom to bleed out */}
            <div className="relative w-full h-full sm:w-[420px]">
              <Image
                src="/img/finance_consult.jpg"
                alt="Tax experts"
                fill
                className="object-cover object-center"
                sizes="(max-width:640px) 100vw, 420px"
              />
              {/* Left fade */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#dce8ff] via-transparent to-transparent w-28" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
