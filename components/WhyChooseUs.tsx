"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { GraduationCap, RefreshCw, Lock, BadgeCheck, CalendarClock, Headphones } from "lucide-react";

const features = [
  { icon: GraduationCap, title: "Qualified Experts",           desc: "CA-supervised filings. Every return reviewed by a trained professional — not an algorithm.",        color: "text-[#00b386]", bg: "bg-[#00b386]/10" },
  { icon: BadgeCheck,    title: "100% Accuracy Guarantee",     desc: "We stand behind our work. If there's an error caused by us, we fix it at no extra cost.",            color: "text-blue-400",  bg: "bg-blue-400/10"  },
  { icon: Lock,          title: "Bank-Grade Security",         desc: "256-bit encryption. Your financial data is never shared with third parties. Ever.",                   color: "text-amber-400", bg: "bg-amber-400/10" },
  { icon: RefreshCw,     title: "End-to-End Service",          desc: "Document collection to acknowledgment — we manage the complete process so you don't have to.",       color: "text-purple-400",bg: "bg-purple-400/10"},
  { icon: CalendarClock, title: "Year-Round Support",          desc: "Not just in March. Tax notices, revised returns, and planning queries handled any time of year.",    color: "text-pink-400",  bg: "bg-pink-400/10"  },
  { icon: Headphones,    title: "Dedicated Relationship",      desc: "One advisor who knows your history. Not a call centre — a personal expert who knows your file.",    color: "text-cyan-400",  bg: "bg-cyan-400/10"  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-[#0a0f0a] relative overflow-hidden">

      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#00b386]/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-[80px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — image collage */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="relative h-[500px]">
            <div className="absolute top-0 left-0 w-[65%] h-72 rounded-2xl overflow-hidden border border-[#00b386]/15 shadow-2xl">
              <Image src="/img/finance_taxsheet.jpg" alt="Expert" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-br from-[#00b386]/10 to-transparent" />
            </div>
            <div className="absolute bottom-0 right-0 w-[60%] h-60 rounded-2xl overflow-hidden border border-white/8 shadow-xl">
              <Image src="/img/finance_bank.jpg" alt="Office" fill className="object-cover" />
            </div>
            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }} transition={{ duration: 3, repeat: Infinity }}
              className="absolute bottom-20 left-0 glass rounded-2xl px-5 py-4 border border-[#00b386]/20 shadow-xl animate-pulse-glow">
              <p className="text-2xl font-extrabold gradient-text">5,000+</p>
              <p className="text-[11px] text-gray-400 mt-0.5">Happy clients across India</p>
            </motion.div>
            {/* Accuracy badge */}
            <motion.div
              animate={{ y: [0, 8, 0] }} transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              className="absolute top-8 right-0 glass rounded-xl px-4 py-3 border border-blue-400/20">
              <p className="text-lg font-extrabold text-blue-400">99.8%</p>
              <p className="text-[11px] text-gray-400">Filing Accuracy</p>
            </motion.div>
          </motion.div>

          {/* Right — features */}
          <div>
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <span className="inline-block glass text-[#00b386] text-[11px] font-bold px-3 py-1 rounded-full border border-[#00b386]/20 mb-3">
                Why FinanceConsult
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-10">
                Six reasons clients{" "}
                <span className="gradient-text">stay with us</span>
              </h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((f, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  whileHover={{ scale: 1.02 }}
                  className="glass rounded-xl p-4 border border-white/5 hover:border-[#00b386]/20 transition-all group"
                >
                  <div className={`w-9 h-9 rounded-lg ${f.bg} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                    <f.icon size={16} className={f.color} />
                  </div>
                  <h4 className="font-bold text-white text-sm mb-1">{f.title}</h4>
                  <p className="text-[11px] text-gray-500 leading-relaxed">{f.desc}</p>
                </motion.div>
              ))}
            </div>

            <motion.a initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
              href="#contact"
              className="btn-glow inline-flex items-center gap-2 mt-8 text-white font-bold px-6 py-3 rounded-full text-sm">
              Book Free Consultation →
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
