import Image from "next/image";
import { Play } from "lucide-react";

const videos = [
  { img:"/img/finance_money.jpg",  title:"What is SIP? A Beginner's Guide",  tag:"Beginner" },
  { img:"/img/finance_coin.jpg",   title:"Types of Mutual Funds Explained",  tag:"Intermediate" },
  { img:"/img/finance_plant.jpg",  title:"How to Save Tax with ELSS Funds",  tag:"Advanced" },
  { img:"/img/finance_aest.jpg",   title:"Analysing Your Portfolio Health",   tag:"Intermediate" },
];
const tagCol: Record<string,string> = { Beginner:"bg-green-100 text-green-700", Intermediate:"bg-amber-100 text-amber-700", Advanced:"bg-red-100 text-red-700" };

export default function LearnSection() {
  return (
    <section className="py-16 sm:py-20 bg-[#0d2d1a]" id="learn">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 text-white">
          <p className="text-xs font-bold tracking-widest uppercase text-[#22c55e]/70 mb-3">Watch & Learn</p>
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-2">Maximize your Mutual Fund Returns</h2>
          <p className="text-white/50 text-sm">More than 5.6 Lakh Subscribers</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {videos.map((v,i) => (
            <div key={i} className="bg-white/8 border border-white/12 rounded-xl overflow-hidden hover:-translate-y-1 hover:bg-white/12 transition-all duration-300 cursor-pointer">
              <div className="relative h-36 group">
                <Image src={v.img} alt={v.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-black/25 flex items-center justify-center group-hover:bg-black/35 transition-colors">
                  <div className="w-11 h-11 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play size={16} className="text-[#1a5c38] ml-0.5" fill="#1a5c38" />
                  </div>
                </div>
              </div>
              <div className="p-3.5">
                <p className="text-sm font-semibold text-white leading-snug mb-2">{v.title}</p>
                <span className={`text-[11px] font-bold px-2 py-0.5 rounded ${tagCol[v.tag]}`}>{v.tag}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <a href="#" className="inline-block border border-white/30 hover:bg-white/10 text-white text-sm font-semibold px-6 py-2.5 rounded-full transition-all">
            Watch All Videos →
          </a>
        </div>
      </div>
    </section>
  );
}
