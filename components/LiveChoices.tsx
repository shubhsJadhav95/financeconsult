"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const stories = [
  { name: "Raman Goel, 35 yrs",    dream: "Wants his son to become an astronaut",     img: "/img/finance_consultant.jpg",  invested: "20 Apr 2018", horizon: "20 Apr 2033", pct: 30 },
  { name: "Nivedita Paul, 28 yrs",  dream: "Wants to go big on teaching yoga!",         img: "/img/finance_money_sit.jpg",   invested: "10 Sep 2020", horizon: "10 Sep 2030", pct: 45 },
  { name: "Jitendra Shukla, 22 yrs",dream: "Wants to become the next Zakir Khan",       img: "/img/finance_india.jpg",       invested: "15 Jul 2018", horizon: "15 Jul 2028", pct: 55 },
  { name: "Ayushi Kochar, 30 yrs",  dream: "Aspires to write a global best-seller",     img: "/img/finance_write.jpg",       invested: "5 Mar 2020",  horizon: "5 Mar 2025",  pct: 22 },
];

export default function LiveChoices() {
  const [cur, setCur] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setCur((c) => (c + 1) % stories.length), 3500);
    return () => clearInterval(t);
  }, []);

  const s = stories[cur];

  return (
    <section className="bg-[#e6faf4] py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-3">Live your choices.</h2>
          <p className="text-gray-500 text-sm max-w-md mx-auto leading-relaxed">
            When you are free to choose, the possibilities are endless. Maybe you want to create the
            next big startup, or take YouTube by storm, take your mom on a world tour, or write a
            bestseller. Whatever you want from life, go for it.
          </p>
        </div>

        {/* Story card area */}
        <div className="flex gap-4 items-start justify-center max-w-3xl mx-auto">

          {/* Avatar strip — left column */}
          <div className="flex flex-col gap-3 flex-shrink-0">
            {stories.map((story, i) => (
              <button
                key={i}
                onClick={() => setCur(i)}
                className={`relative w-11 h-11 rounded-full overflow-hidden border-2 transition-all ${
                  i === cur ? "border-[#1a8a5a] scale-110 shadow-sm" : "border-transparent opacity-60 hover:opacity-90"
                }`}
              >
                <Image src={story.img} alt={story.name} fill className="object-cover" />
              </button>
            ))}
          </div>

          {/* Main story card */}
          <div className="flex-1 relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={cur}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-2xl overflow-hidden shadow-xl flex"
              >
                {/* Image */}
                <div className="relative w-48 sm:w-60 flex-shrink-0 h-52">
                  <Image src={s.img} alt={s.name} fill className="object-cover" />
                </div>

                {/* Info */}
                <div className="flex flex-col justify-between p-5 flex-1">
                  {/* Name + dream */}
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm mb-1">{s.name}</h4>
                    <p className="text-[#1a8a5a] text-xs font-semibold mb-3">{s.dream}</p>
                  </div>

                  {/* Progress */}
                  <div>
                    {/* You are here tag */}
                    <div className="inline-flex items-center gap-1.5 bg-gray-900 text-white text-[10px] font-semibold px-2.5 py-1 rounded mb-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e] inline-block" />
                      You are here: {cur === 0 ? "3 yrs" : cur === 1 ? "4.5 yrs" : cur === 2 ? "5.5 yrs" : "2.2 yrs"}
                    </div>

                    {/* Timeline bar */}
                    <div className="mb-2">
                      <div className="flex justify-between text-[10px] text-gray-400 mb-1">
                        <span>Invested</span>
                        <span>Horizon</span>
                      </div>
                      <div className="h-1 bg-gray-100 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-[#1a8a5a] rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${s.pct}%` }}
                          transition={{ duration: 0.8 }}
                        />
                      </div>
                      <div className="flex justify-between text-[10px] text-gray-400 mt-1">
                        <span>{s.invested}</span>
                        <span>{s.horizon}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
