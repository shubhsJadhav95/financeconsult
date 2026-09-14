import { FileText, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1a1f5e] text-white/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-14 pb-8">

        {/* Brand */}
        <div className="flex flex-col items-center text-center mb-8">
          <a href="#" className="flex items-center gap-2.5 mb-5">
            <img src="/logo.svg" alt="FinanceConsult" className="w-10 h-10" />
            <div className="flex flex-col leading-none">
              <span className="text-white font-extrabold text-[18px]">FinanceConsult</span>
              <span className="text-blue-300 text-[11px] tracking-widest uppercase">ITR & Tax Advisory</span>
            </div>
          </a>
          <p className="text-[13px] leading-relaxed mb-5 text-white/50 max-w-md">
            Expert-assisted ITR filing, tax planning, and investment advisory. Maximum refund guaranteed.
          </p>
          <div className="flex gap-2 flex-wrap justify-center">
            {["WhatsApp","Facebook","LinkedIn","YouTube","Instagram"].map(s => (
              <a key={s} href="#" aria-label={s}
                className="w-9 h-9 rounded-full bg-white/8 border border-white/10 flex items-center justify-center text-[12px] text-white/50 hover:bg-[#3b5bdb] hover:text-white hover:border-[#3b5bdb] transition-all">
                {s[0]}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 border-t border-white/8">
        <p className="text-[10px] text-white/25 leading-relaxed mb-2 text-center">
          <strong className="text-white/35">Disclaimer:</strong> FinanceConsult is a tax consultancy and financial advisory firm. Investment advice is for informational purposes only. Verify advisor credentials before acting. Past performance is not indicative of future results.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-2">
          <p className="text-[11px] text-white/30">© 2025 FinanceConsult. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="text-[11px] text-white/30 hover:text-white/60 transition-colors">Privacy Policy</a>
            <a href="#" className="text-[11px] text-white/30 hover:text-white/60 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
