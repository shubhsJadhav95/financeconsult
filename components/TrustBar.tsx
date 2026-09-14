"use client";
import { useEffect, useRef, useState } from "react";

const companies = [
  "Accurate Filing",
  "Honest Pricing",
  "Real Support",
  "Trusted Accuracy",
  "Transparent Pricing",
  "Always On Call",
  "Precise Filing",
  "Secure Data",
  "Zero Hidden Fees",
  "Built on Trust",
  "Verified Accuracy",
  "Dedicated Support",
  "No Fine Print",
  "Compliant & Secure",
  "Client-First",
  "Fast & Accurate",
  "Fully Transparent",
];

const stats = [
  { val:1,     suffix:"",       prefix:"",       label:"Dedicated Support",     decimal:0 },
  { val:100,   suffix:"%",      prefix:"",       label:"Client Retention",      decimal:0 },
  { val:99.8,  suffix:"%",      prefix:"",       label:"Filing Accuracy",       decimal:1 },
  { val:0,     suffix:"",       prefix:"",       label:"Missed Deadlines",      decimal:0 },
];

function Counter({ val, suffix, prefix, decimal }:{ val:number; suffix:string; prefix:string; decimal:number }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const fired = useRef(false);

  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !fired.current) {
        fired.current = true;
        const steps=60, dur=1600, inc=val/steps; let cur=0;
        const t = setInterval(()=>{ cur+=inc; if(cur>=val){cur=val;clearInterval(t);} setN(cur); }, dur/steps);
      }
    }, { threshold:.5 });
    obs.observe(el); return ()=>obs.disconnect();
  }, [val]);

  const fmt = decimal>0 ? n.toFixed(decimal) : Math.floor(n).toLocaleString("en-IN");
  return <span ref={ref}>{prefix}{fmt}{suffix}</span>;
}

export default function TrustBar() {
  return (
    <section className="bg-white border-y border-gray-100">

      {/* Stats */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0">
        {stats.map((s,i) => (
          <div key={i} className={`text-center py-2 ${i<3?"lg:border-r lg:border-gray-100":""}`}>
            <div className="text-2xl sm:text-3xl font-extrabold gradient-text mb-1">
              {i === 0 ? (
                <span>1-on-1</span>
              ) : (
                <Counter {...s}/>
              )}
            </div>
            <p className="text-xs text-gray-400">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Marquee */}
      <div className="border-t border-gray-50 py-5 overflow-hidden bg-[#f8f9ff]">
        <p className="text-center text-[11px] text-gray-400 uppercase tracking-widest mb-4">
          Where Accuracy Meets Honest Service
        </p>
        <div className="flex w-max animate-marquee">
          {[...companies,...companies].map((c,i)=>(
            <div key={i} className="flex items-center gap-5 px-7">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3b5bdb]/30 flex-shrink-0"/>
              <span className="text-[13px] font-semibold text-gray-400 whitespace-nowrap hover:text-[#3b5bdb] transition-colors">{c}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
