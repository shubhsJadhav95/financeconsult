"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FileText, TrendingUp, Calculator, Receipt, CheckCircle, ArrowRight } from "lucide-react";

const services = [
  {
    icon: FileText,
    color: "from-[#00b386] to-[#00d4a0]",
    glow: "shadow-[#00b386]/20",
    title: "ITR Filing",
    badge: "Most Popular",
    img: "/img/finance_taxday.jpg",
    points: ["Salaried & Freelancers", "Business Owners & NRIs", "Capital Gains Filing", "Tax Notice Handling", "Form 26AS Reconciliation"],
    desc: "Accurate, on-time tax return filing for every income type. Expert-reviewed before submission.",
    cta: "File Now",
  },
  {
    icon: Calculator,
    color: "from-blue-500 to-cyan-400",
    glow: "shadow-blue-500/20",
    title: "Tax Planning",
    badge: "Save More",
    img: "/img/finance_aest.jpg",
    points: ["Old vs New Regime Analysis", "80C & Beyond Optimisation", "Advance Tax Planning", "Year-Round Advisory", "Salary Restructuring"],
    desc: "Reduce your tax liability legally, all year round — not just in March.",
    cta: "Plan Now",
  },
  {
    icon: TrendingUp,
    color: "from-amber-500 to-orange-400",
    glow: "shadow-amber-500/20",
    title: "Investment Advisory",
    badge: "Goal-Based",
    img: "/img/finance_plant.jpg",
    points: ["Mutual Fund Advisory", "ELSS Tax Saving", "Portfolio Review", "Risk Profiling", "Retirement Planning"],
    desc: "Goal-based investment plans built around your life — not generic templates.",
    cta: "Invest Smart",
  },
  {
    icon: Receipt,
    color: "from-purple-500 to-pink-400",
    glow: "shadow-purple-500/20",
    title: "GST & Compliance",
    badge: "Business",
    img: "/img/finance_bank.jpg",
    points: ["GST Registration", "Monthly GSTR Filing", "TDS Returns", "Business Incorporation", "Bookkeeping Support"],
    desc: "End-to-end GST compliance and business accounting so you focus on growth.",
    cta: "Get Started",
  },
];

export default function Services() {
  return (
    <section className="py-20 bg-[#0f1a0f]" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Heading */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center mb-14">
          <span className="inline-block glass text-[#00b386] text-[11px] font-bold px-3 py-1 rounded-full border border-[#00b386]/20 mb-3">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">
            Everything you need,{" "}
            <span className="gradient-text">under one roof</span>
          </h2>
          <p className="text-gray-500 text-sm max-w-xl mx-auto">
            From ITR filing to investment planning — handled by qualified experts, not automated templates.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className={`glass rounded-2xl overflow-hidden border border-white/5 hover:border-[#00b386]/20 shadow-xl ${s.glow} transition-all duration-300 group`}
            >
              {/* Image */}
              <div className="relative h-36 overflow-hidden">
                <Image src={s.img} alt={s.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f1a0f] via-[#0f1a0f]/20 to-transparent" />
                {/* Icon + badge */}
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${s.color} flex items-center justify-center shadow-sm`}>
                    <s.icon size={14} className="text-white" />
                  </div>
                  <span className={`text-[10px] font-bold text-white bg-gradient-to-r ${s.color} px-2 py-0.5 rounded-full`}>
                    {s.badge}
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="p-5">
                <h3 className="font-bold text-white text-base mb-1.5">{s.title}</h3>
                <p className="text-[12px] text-gray-500 leading-relaxed mb-4">{s.desc}</p>

                {/* Points */}
                <ul className="space-y-1.5 mb-5">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-center gap-2 text-[11px] text-gray-400">
                      <CheckCircle size={11} className="text-[#00b386] flex-shrink-0" /> {p}
                    </li>
                  ))}
                </ul>

                <a href="#contact"
                  className={`flex items-center justify-center gap-1.5 w-full py-2.5 rounded-xl bg-gradient-to-r ${s.color} text-white text-[12px] font-bold hover:opacity-90 transition-opacity`}>
                  {s.cta} <ArrowRight size={12} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
