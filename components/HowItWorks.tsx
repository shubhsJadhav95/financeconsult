"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const steps = [
  { n:1, title:"Select Your Income Sources",       desc:"Salary, capital gains, F&O, business income, or other types.",
    icon:<svg viewBox="0 0 52 52" fill="none" className="w-9 h-9"><rect x="4" y="4" width="44" height="44" rx="10" fill="#eef2ff" stroke="#3b5bdb" strokeWidth="1.5"/><path d="M13 26h26M13 18h16M13 34h20" stroke="#3b5bdb" strokeWidth="2" strokeLinecap="round"/><circle cx="38" cy="38" r="8" fill="#3b5bdb"/><path d="M35 38l2 2 4-4" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg> },
  { n:2, title:"Fetch Pre-Filled Tax Data",         desc:"We securely import your tax details from the ITD.",
    icon:<svg viewBox="0 0 52 52" fill="none" className="w-9 h-9"><rect x="4" y="4" width="44" height="44" rx="10" fill="#eef2ff" stroke="#3b5bdb" strokeWidth="1.5"/><rect x="13" y="16" width="26" height="6" rx="2" fill="#eef2ff" stroke="#3b5bdb" strokeWidth="1.5"/><path d="M13 28h18M13 34h12" stroke="#3b5bdb" strokeWidth="2" strokeLinecap="round"/><path d="M38 28l-4 4 4 4M34 32h8" stroke="#3b5bdb" strokeWidth="1.8" strokeLinecap="round"/></svg> },
  { n:3, title:"Compare Tax Regimes",              desc:"We compare old vs new regime and pick the best for you.",
    icon:<svg viewBox="0 0 52 52" fill="none" className="w-9 h-9"><rect x="4" y="4" width="44" height="44" rx="10" fill="#eef2ff" stroke="#3b5bdb" strokeWidth="1.5"/><rect x="11" y="17" width="11" height="18" rx="3" fill="#eef2ff" stroke="#3b5bdb" strokeWidth="1.5"/><rect x="28" y="21" width="11" height="14" rx="3" stroke="#3b5bdb" strokeWidth="1.5"/><circle cx="38" cy="38" r="7" fill="#3b5bdb"/><path d="M35.5 38l2 2 3.5-3.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg> },
  { n:4, title:"Review & Maximise Savings",        desc:"Claim every deduction and optimise your tax outcome.",
    icon:<svg viewBox="0 0 52 52" fill="none" className="w-9 h-9"><rect x="4" y="4" width="44" height="44" rx="10" fill="#eef2ff" stroke="#3b5bdb" strokeWidth="1.5"/><circle cx="26" cy="26" r="9" stroke="#3b5bdb" strokeWidth="1.5"/><path d="M23 26l2 2 4-4" stroke="#3b5bdb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M26 11v3M26 38v3M11 26h3M38 26h3" stroke="#3b5bdb" strokeWidth="1.5" strokeLinecap="round"/></svg> },
  { n:5, title:"e-File & Get Confirmation",        desc:"Submit online and receive official acknowledgment from ITD.",
    icon:<svg viewBox="0 0 52 52" fill="none" className="w-9 h-9"><rect x="9" y="3" width="30" height="40" rx="5" fill="#eef2ff" stroke="#3b5bdb" strokeWidth="1.5"/><path d="M16 18h20M16 25h14M16 32h16" stroke="#3b5bdb" strokeWidth="2" strokeLinecap="round"/><rect x="20" y="0" width="10" height="7" rx="2" fill="#3b5bdb"/><circle cx="38" cy="42" r="9" fill="#3b5bdb"/><path d="M34.5 42l2.5 2.5 5-5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg> },
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-[#f8f9ff]" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-14">
          <motion.div initial={{opacity:0,y:16}} whileInView={{opacity:1,y:0}} viewport={{once:true}}>
            <span className="inline-block bg-blue-50 text-[#3b5bdb] text-[11px] font-bold px-3 py-1 rounded-full border border-blue-100 mb-3">
              How It Works
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a1f5e]">
              File Your ITR in{" "}
              <span className="gradient-text">Just 5 Simple Steps</span>
            </h2>
          </motion.div>
          <a href="#contact"
            className="flex-shrink-0 inline-flex items-center gap-2 bg-[#3b5bdb] hover:bg-[#2f4ac7] text-white font-bold px-6 py-3 rounded-xl text-sm shadow-sm shadow-blue-200 transition-all">
            File Now <ArrowUpRight size={14}/>
          </a>
        </div>

        <div className="relative">
          {/* Dotted line — desktop */}
          <div className="hidden lg:block absolute top-[52px] left-[9.5%] right-[9.5%]"
            style={{borderTop:"2px dashed #c5d0ff"}}/>
          {[25,50,75].map(p=>(
            <div key={p} className="hidden lg:block absolute top-[44px] w-4 h-4 rounded-full bg-[#3b5bdb] border-2 border-white shadow"
              style={{left:`${p}%`,transform:"translateX(-50%)"}}/>
          ))}

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-4">
            {steps.map((s,i)=>(
              <motion.div key={i}
                initial={{opacity:0,y:28}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.09}}
                className="flex flex-col items-center text-center group">
                <div className="relative mb-4">
                  <div className="w-24 h-24 rounded-full bg-white border-2 border-blue-100 shadow-md flex items-center justify-center
                    group-hover:border-[#3b5bdb]/40 group-hover:shadow-sm group-hover:shadow-blue-100 transition-all duration-300 p-4">
                    {s.icon}
                  </div>
                  <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-[#3b5bdb] flex items-center justify-center shadow">
                    <span className="text-white text-[10px] font-extrabold">{s.n}</span>
                  </div>
                </div>
                <h4 className="font-bold text-[#1a1f5e] text-sm mb-1.5 leading-snug">{s.title}</h4>
                <p className="text-[11px] text-gray-400 leading-relaxed max-w-[140px]">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
