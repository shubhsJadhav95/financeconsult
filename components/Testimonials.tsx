"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const reviews = [
  { i:"PK", name:"Priya Kapoor",     city:"Bangalore", tag:"ITR Filing",     stars:5, text:"Spotted a deduction I'd missed for 3 years. Got a ₹24,500 refund I never knew I was owed. Filed in 2 days." },
  { i:"RS", name:"Rahul Sharma",     city:"Mumbai",    tag:"Tax Planning",    stars:5, text:"Finally have a proper plan — SIPs, ELSS, insurance. For the first time taxes and investments work together." },
  { i:"AN", name:"Anita Nair",       city:"Chennai",   tag:"Tax Planning",    stars:5, text:"Saved ₹35,000 extra last year just by restructuring. We plan in April, not March. Total game changer." },
  { i:"VG", name:"Vijay Gupta",      city:"Delhi",     tag:"Notice Handled",  stars:5, text:"Got an IT notice and panicked. They handled everything. Matter closed in 3 weeks with zero stress." },
  { i:"SM", name:"Sneha Mehta",      city:"Pune",      tag:"Freelancer ITR",  stars:5, text:"As a freelancer my income varies. They built a plan that accounts for that. First advisor who truly gets it." },
  { i:"AK", name:"Arjun Kumar",      city:"Hyderabad", tag:"Full Service",    stars:5, text:"Tax saving directly fed into my investment plan. First advisor to do both together. Absolutely brilliant." },
];

const avatarColors = ["bg-blue-100 text-blue-700","bg-green-100 text-green-700","bg-purple-100 text-purple-700","bg-amber-100 text-amber-700","bg-pink-100 text-pink-700","bg-cyan-100 text-cyan-700"];

export default function Testimonials() {
  const [cur, setCur] = useState(0);
  const PER = 3;

  useEffect(() => {
    const t = setInterval(() => setCur(c => c + 1 > reviews.length - PER ? 0 : c + 1), 4500);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div initial={{opacity:0,y:16}} whileInView={{opacity:1,y:0}} viewport={{once:true}}
          className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a1f5e] mb-3">
            Real people.{" "}<span className="gradient-text">Real results.</span>
          </h2>
          <div className="flex items-center justify-center gap-1.5">
            {[...Array(5)].map((_,i)=><Star key={i} size={14} fill="#f59e0b" className="text-amber-400"/>)}
            <span className="text-[13px] text-gray-400 ml-1.5">4.9 average · 8M+ users</span>
          </div>
        </motion.div>

        <div className="flex items-center gap-3">
          <button onClick={()=>setCur(Math.max(0,cur-1))} disabled={cur===0}
            className="w-9 h-9 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-[#3b5bdb] disabled:opacity-20 hover:shadow-md transition-all flex-shrink-0">
            <ChevronLeft size={16}/>
          </button>

          <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-4 overflow-hidden">
            <AnimatePresence mode="popLayout">
              {reviews.slice(cur,cur+PER).map(r=>(
                <motion.div key={r.name} layout
                  initial={{opacity:0,scale:.95}} animate={{opacity:1,scale:1}} exit={{opacity:0,scale:.95}}
                  transition={{duration:.25}}
                  className="bg-white rounded-2xl p-5 border border-gray-100 card-shadow hover:card-shadow-lg transition-all">
                  <div className="flex items-start justify-between mb-3">
                    <Quote size={18} className="text-blue-100"/>
                    <span className="text-[10px] font-bold bg-blue-50 text-[#3b5bdb] px-2 py-0.5 rounded-full">{r.tag}</span>
                  </div>
                  <div className="flex gap-0.5 mb-3">
                    {[...Array(r.stars)].map((_,i)=><Star key={i} size={11} fill="#f59e0b" className="text-amber-400"/>)}
                  </div>
                  <p className="text-[13px] text-gray-600 leading-relaxed mb-4">{r.text}</p>
                  <div className="flex items-center gap-2.5 pt-3 border-t border-gray-50">
                    <div className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 ${avatarColors[reviews.indexOf(r)]}`}>
                      {r.i}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#1a1f5e]">{r.name}</p>
                      <p className="text-[11px] text-gray-400">{r.city}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <button onClick={()=>setCur(Math.min(reviews.length-PER,cur+1))} disabled={cur>=reviews.length-PER}
            className="w-9 h-9 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-[#3b5bdb] disabled:opacity-20 hover:shadow-md transition-all flex-shrink-0">
            <ChevronRight size={16}/>
          </button>
        </div>

        <div className="flex gap-1.5 justify-center mt-5">
          {Array.from({length:reviews.length-PER+1}).map((_,i)=>(
            <button key={i} onClick={()=>setCur(i)}
              className={`rounded-full transition-all ${i===cur?"w-5 h-2 bg-[#3b5bdb]":"w-2 h-2 bg-gray-200"}`}/>
          ))}
        </div>
      </div>
    </section>
  );
}
