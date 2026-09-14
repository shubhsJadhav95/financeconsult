"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function StickyBottomCTA() {
  const [show, setShow]       = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const fn = () => { if (window.scrollY > 400 && !dismissed) setShow(true); else setShow(false); };
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, [dismissed]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0,  opacity: 1 }}
          exit={{   y: 80, opacity: 0 }}
          transition={{ type:"spring", stiffness:260, damping:22 }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-3xl"
        >
          <div className="bg-[#1a1f5e] rounded-2xl px-6 py-4 flex items-center justify-between gap-4 shadow-2xl shadow-blue-900/30">
            <div>
              <p className="text-white font-bold text-base">File ITR with Expert Support & 100% accuracy</p>
              <p className="text-blue-300 text-[12px]">Trusted by 8M+ users to get their maximum tax refund</p>
            </div>
            <div className="flex items-center gap-3 flex-shrink-0">
              <a href="#contact"
                className="bg-[#3b5bdb] hover:bg-[#4c6ef5] text-white font-bold px-6 py-2.5 rounded-xl text-sm transition-all whitespace-nowrap">
                Start Filing
              </a>
              <button onClick={() => { setDismissed(true); setShow(false); }}
                className="text-blue-300 hover:text-white transition-colors p-1">
                <X size={16}/>
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
