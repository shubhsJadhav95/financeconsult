"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, CheckCircle, ArrowRight } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [done, setDone]   = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setDone(true);
    setTimeout(() => { setDone(false); setEmail(""); }, 4500);
  };

  return (
    <section className="py-14 bg-[#f0f4ff] border-t border-blue-50">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <motion.div initial={{ opacity:0,y:14 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }}>
          <div className="w-11 h-11 rounded-2xl bg-white border border-blue-100 flex items-center justify-center mx-auto mb-4 shadow-sm">
            <Mail size={18} className="text-[#3b5bdb]" />
          </div>
          <h3 className="text-xl font-bold text-[#1a1f5e] mb-2">Stay ahead of every tax deadline</h3>
          <p className="text-gray-400 text-sm mb-6">
            Weekly tax tips, filing reminders, and money-saving insights — straight to your inbox.
          </p>

          <AnimatePresence mode="wait">
            {done ? (
              <motion.div key="ok" initial={{ opacity:0,scale:.95 }} animate={{ opacity:1,scale:1 }}
                className="inline-flex items-center gap-2 text-[#12b886] bg-white border border-green-100 px-6 py-3 rounded-xl shadow-sm">
                <CheckCircle size={15}/><span className="font-semibold text-sm">Subscribed successfully!</span>
              </motion.div>
            ) : (
              <motion.form key="form" initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }}
                onSubmit={submit} className="flex gap-2 max-w-md mx-auto">
                <input type="email" required value={email} onChange={e=>setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-1 bg-white border border-gray-200 focus:border-[#3b5bdb] text-[#1a1f5e] placeholder-gray-400 text-sm px-4 py-2.5 rounded-xl outline-none transition-all shadow-sm"/>
                <button type="submit"
                  className="bg-[#3b5bdb] hover:bg-[#2f4ac7] text-white font-bold px-5 py-2.5 rounded-xl text-sm flex items-center gap-1.5 whitespace-nowrap shadow-sm shadow-blue-200 transition-all">
                  Subscribe <ArrowRight size={13}/>
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
