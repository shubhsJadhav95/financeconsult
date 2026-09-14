"use client";

import { useState, useCallback } from "react";
import * as Slider from "@radix-ui/react-slider";
import { motion } from "framer-motion";

function formatINR(val: number) {
  if (val >= 1e7) return `₹${(val / 1e7).toFixed(2)} cr`;
  if (val >= 1e5) return `₹${(val / 1e5).toFixed(2)} L`;
  return `₹${Math.round(val).toLocaleString("en-IN")}`;
}

export default function SIPCalculator() {
  const [amount, setAmount] = useState(7100);
  const [years, setYears] = useState(25);
  const [rate, setRate] = useState(12);

  const calc = useCallback(() => {
    const P = amount, n = years * 12, r = rate / 100 / 12;
    const invested = P * n;
    const total = r > 0 ? P * ((Math.pow(1 + r, n) - 1) / r) * (1 + r) : invested;
    return { invested, returns: total - invested, total };
  }, [amount, years, rate]);

  const { invested, returns, total } = calc();
  const investedPct = total > 0 ? (invested / total) * 100 : 50;

  return (
    <section className="bg-[#f5fffe] py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        {/* Calculator card — left */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-7">
          {/* Header row */}
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-sm font-semibold text-gray-700">Monthly SIP</h3>
            <div className="flex items-center gap-1 text-[#1a8a5a] font-bold text-base">
              <span>₹</span>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(Math.max(500, Number(e.target.value) || 500))}
                className="w-24 text-right outline-none font-bold text-[#1a8a5a] text-base bg-transparent"
              />
            </div>
          </div>

          {/* Donut / circle indicator */}
          <div className="flex justify-center mb-4">
            <div className="relative w-20 h-20">
              <svg className="w-20 h-20 -rotate-90" viewBox="0 0 80 80">
                <circle cx="40" cy="40" r="32" fill="none" stroke="#e5e7eb" strokeWidth="8" />
                <circle
                  cx="40" cy="40" r="32" fill="none"
                  stroke="#1a8a5a" strokeWidth="8"
                  strokeDasharray={`${2 * Math.PI * 32 * investedPct / 100} ${2 * Math.PI * 32}`}
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-xs font-bold text-gray-700">{Math.round(investedPct)}%</span>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="flex justify-between items-end mb-5 px-2">
            <div className="text-center">
              <p className="text-[11px] text-gray-400 mb-0.5">Invested</p>
              <p className="text-sm font-bold text-gray-800">{formatINR(invested)}</p>
            </div>
            <div className="text-center">
              <p className="text-[11px] text-gray-400 mb-0.5">Returns</p>
              <p className="text-sm font-bold text-[#1a8a5a]">{formatINR(returns)}</p>
            </div>
            <div className="text-center">
              <p className="text-[11px] text-gray-400 mb-0.5">Total</p>
              <p className="text-sm font-bold text-gray-800">{formatINR(total)}</p>
            </div>
          </div>

          {/* Chart bar */}
          <div className="flex rounded-full overflow-hidden h-3 mb-6">
            <motion.div
              className="bg-[#1a8a5a] h-full"
              animate={{ width: `${investedPct}%` }}
              transition={{ duration: 0.5 }}
            />
            <div className="bg-[#b3e5d6] h-full flex-1" />
          </div>

          {/* Sliders */}
          <div className="space-y-5">
            <div>
              <div className="flex justify-between mb-2 text-xs text-gray-500">
                <span>Investment Period</span>
                <span className="font-semibold text-gray-700">{years} yrs</span>
              </div>
              <Slider.Root min={1} max={40} step={1} value={[years]} onValueChange={([v]) => setYears(v)}
                className="relative flex items-center w-full h-4 cursor-pointer">
                <Slider.Track className="relative bg-gray-200 rounded-full h-1 flex-1">
                  <Slider.Range className="absolute bg-[#1a8a5a] rounded-full h-full" />
                </Slider.Track>
                <Slider.Thumb className="block w-4 h-4 bg-[#1a8a5a] rounded-full shadow focus:outline-none focus:ring-2 focus:ring-[#1a8a5a]/40" />
              </Slider.Root>
              <div className="flex justify-between text-[10px] text-gray-300 mt-1"><span>Today</span><span>25 yrs later</span></div>
            </div>

            <div>
              <div className="flex justify-between mb-2 text-xs text-gray-500">
                <span>Expected Returns (p.a.)</span>
                <span className="font-semibold text-gray-700">{rate}%</span>
              </div>
              <Slider.Root min={1} max={30} step={1} value={[rate]} onValueChange={([v]) => setRate(v)}
                className="relative flex items-center w-full h-4 cursor-pointer">
                <Slider.Track className="relative bg-gray-200 rounded-full h-1 flex-1">
                  <Slider.Range className="absolute bg-[#1a8a5a] rounded-full h-full" />
                </Slider.Track>
                <Slider.Thumb className="block w-4 h-4 bg-[#1a8a5a] rounded-full shadow focus:outline-none focus:ring-2 focus:ring-[#1a8a5a]/40" />
              </Slider.Root>
            </div>
          </div>
        </div>

        {/* Right text */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 leading-tight mb-4">
            Get there where you want with{" "}
            <span className="text-gray-900">Suitable funds options</span>
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed mb-7">
            Whoever you are and wherever you want to reach in life, ET Money's
            goal-based, suitability-led guided investing helps you get there with
            clarity and confidence.
          </p>
          <a
            href="#"
            className="inline-block bg-[#1a5c38] hover:bg-[#154a2d] text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all"
          >
            Explore Mutual Funds
          </a>
        </div>
      </div>
    </section>
  );
}
