"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100" : "bg-white"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <a href="#" className="flex items-center gap-2 flex-shrink-0">
          <img src="/logo.svg" alt="FinanceConsult" className="w-8 h-8" />
          <span className="font-bold text-[#1a1f5e] text-[15px]">FinanceConsult</span>
        </a>

        {/* CTA */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <a href="#contact" className="text-[13px] font-bold border-2 border-[#3b5bdb] text-[#3b5bdb] hover:bg-[#3b5bdb] hover:text-white px-5 py-2 rounded-lg transition-all">
            Start Filing
          </a>
          <button className="md:hidden text-gray-700 p-1" onClick={() => setOpen(!open)}>
            {open ? <X size={22}/> : <Menu size={22}/>}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div initial={{opacity:0,height:0}} animate={{opacity:1,height:"auto"}} exit={{opacity:0,height:0}}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden">
            <div className="px-4 py-4">
              <a href="#contact" className="block text-center text-[13px] font-bold bg-[#3b5bdb] text-white py-2.5 rounded-xl">Start Filing</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
