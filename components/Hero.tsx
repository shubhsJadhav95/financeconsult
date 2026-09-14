"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Shield, CheckCircle } from "lucide-react";

/* ── Animated refund ticker ── */
const refundValues = ["₹ 88,090", "₹ 1,24,500", "₹ 67,320", "₹ 2,09,760", "₹ 85,560"];

const taxRows = [
  { label: "Gross Income",             val: "₹ 30,26,152", color: "" },
  { label: "Tax savings (deductions)", val: "₹ 3,99,673",  color: "text-[#12b886]", arrow: true },
  { label: "Taxable Income",           val: "₹ 2,626,479", color: "" },
  { label: "Tax payable",              val: "₹ 3,68,807",  color: "", arrow: true },
  { label: "Taxes Paid",               val: "₹ 4,56,892",  color: "" },
];

export default function Hero() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx(i => (i + 1) % refundValues.length), 2000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative bg-white pt-16 overflow-hidden">

      {/* ── Background blobs ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full bg-[#eef2ff] opacity-60 animate-blob" />
        <div className="absolute top-1/2 -left-32 w-[400px] h-[400px] rounded-full bg-[#e8f5ff] opacity-40 animate-blob" style={{ animationDelay: "4s" }} />
      </div>

      {/* ── Main content ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 items-center min-h-[calc(100vh-64px)] pt-12 pb-0">

          {/* ════ LEFT ════ */}
          <div>
            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-[54px] font-black text-[#1a1f5e] leading-[1.1] mb-5"
            >
              File ITR with Expert Support &<br />
              <span className="gradient-text">100% Accuracy</span>
            </motion.h1>

            {/* Green badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-[#e6fdf5] border border-[#12b886]/30 px-4 py-2 rounded-lg mb-5"
            >
              <CheckCircle size={14} className="text-[#12b886]" />
              <span className="text-sm font-semibold text-[#1a1f5e]">
                <span className="text-[#12b886] font-bold">Maximum Tax Refund,</span>{" "}Guaranteed
              </span>
            </motion.div>

            {/* Notice protect */}
            <motion.div
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
              className="inline-flex items-start gap-3 bg-white border border-gray-200 rounded-xl px-4 py-3 mb-8 shadow-sm"
            >
              <Shield size={16} className="text-[#3b5bdb] flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-[10px] font-extrabold text-[#3b5bdb] uppercase tracking-widest leading-none mb-0.5">
                  FinanceConsult <span className="text-orange-500">NOTICE PROTECT</span>
                </p>
                <p className="text-[11px] text-gray-500">
                  Received a notice? <strong className="text-[#1a1f5e]">We Handle It Free</strong>
                  <br />Computation Error? <strong className="text-[#1a1f5e]">100% Refund.</strong>
                </p>
              </div>
            </motion.div>

            {/* Two option cards */}
            <motion.div
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
              className="grid grid-cols-2 gap-4 max-w-md"
            >
              {/* File your taxes */}
              <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-md hover:border-blue-200 transition-all group">
                {/* Icon */}
                <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center mb-3">
                  <svg viewBox="0 0 32 32" fill="none" className="w-6 h-6">
                    <rect x="6" y="2" width="20" height="26" rx="3" fill="#fde68a" stroke="#f59e0b" strokeWidth="1.5"/>
                    <path d="M11 10h10M11 15h7M11 20h8" stroke="#f59e0b" strokeWidth="1.5" strokeLinecap="round"/>
                    <circle cx="23" cy="23" r="7" fill="#3b5bdb"/>
                    <path d="M20 23l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h4 className="font-bold text-[#1a1f5e] text-sm mb-0.5">File your taxes</h4>
                <p className="text-[12px] text-gray-400 mb-4">
                  with <span className="text-[#12b886] font-bold">expert support</span>
                </p>
                <a href="#contact"
                  className="block w-full bg-[#3b5bdb] hover:bg-[#2f4ac7] text-white text-[12px] font-bold py-2 rounded-xl text-center transition-all group-hover:-translate-y-0.5 shadow-sm">
                  File Now
                </a>
              </div>

              {/* Hire an Expert */}
              <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-md hover:border-blue-200 transition-all group">
                {/* Icon */}
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center mb-3">
                  <svg viewBox="0 0 32 32" fill="none" className="w-6 h-6">
                    <circle cx="16" cy="10" r="6" fill="#bfdbfe" stroke="#3b5bdb" strokeWidth="1.5"/>
                    <path d="M6 26c0-5.5 4.5-9 10-9s10 3.5 10 9" stroke="#3b5bdb" strokeWidth="1.5" strokeLinecap="round"/>
                    <circle cx="24" cy="22" r="5" fill="#3b5bdb"/>
                    <path d="M22 22l1.5 1.5 3-3" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h4 className="font-bold text-[#1a1f5e] text-sm mb-0.5">Hire an Expert</h4>
                <p className="text-[12px] text-gray-400 mb-4">
                  ITR Filed in <span className="text-[#3b5bdb] font-bold">24 hrs</span>
                </p>
                <a href="#hire-expert"
                  className="block w-full bg-[#3b5bdb] hover:bg-[#2f4ac7] text-white text-[12px] font-bold py-2 rounded-xl text-center transition-all group-hover:-translate-y-0.5 shadow-sm">
                  Hire an Expert
                </a>
              </div>
            </motion.div>
          </div>

          {/* ════ RIGHT ════ */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.25, duration: 0.6 }}
            className="hidden lg:flex items-center justify-center relative"
          >
            {/* Circular "100% ACCURACY" ring */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-gradient-to-br from-[#eef2ff] via-[#dbe4ff] to-[#c5d3ff] opacity-60 animate-spin-slow" />
            <div className="absolute right-2 top-1/2 -translate-y-1/2 w-64 h-64 rounded-full border-2 border-dashed border-[#3b5bdb]/20 animate-spin-slow" />
            {/* "100% ACCURACY" text on ring */}
            <div className="absolute right-[-10px] top-1/2 -translate-y-1/2 w-72 h-72 flex items-center justify-center pointer-events-none z-20">
              <svg viewBox="0 0 200 200" className="w-72 h-72 absolute animate-spin-slow opacity-50">
                <defs>
                  <path id="circle" d="M 100,100 m -75,0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"/>
                </defs>
                <text fontSize="11" fontWeight="700" fill="#3b5bdb" letterSpacing="6">
                  <textPath href="#circle">100% ACCURACY • 100% ACCURACY • </textPath>
                </text>
              </svg>
            </div>

            {/* Woman image */}
            <div className="relative z-10 w-80 h-[420px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white ml-16">
              <Image
                src="/img/finance_ca.jpg"
                alt="Happy customer"
                fill
                className="object-cover object-center"
              />
            </div>

            {/* Tax summary card — floats left of image */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-2xl shadow-xl border border-gray-100 p-5 w-56 z-20"
            >
              <p className="text-[11px] text-gray-400 mb-0.5">Total Refund</p>
              <div className="overflow-hidden h-9 mb-3">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={idx}
                    initial={{ y: 16, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -16, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-2xl font-black text-[#3b5bdb]"
                  >
                    {refundValues[idx]}
                  </motion.p>
                </AnimatePresence>
              </div>

              <div className="space-y-2">
                {taxRows.map((r, i) => (
                  <motion.div
                    key={r.label}
                    initial={{ opacity: 0, x: -6 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + i * 0.07 }}
                    className="flex justify-between items-center border-b border-gray-50 pb-1.5 last:border-0"
                  >
                    <span className="text-[11px] text-gray-400">{r.label}</span>
                    <span className={`text-[11px] font-semibold flex items-center gap-0.5 ${r.color || "text-gray-700"}`}>
                      {r.arrow && <span className="text-gray-300">↓</span>}
                      {r.val}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
