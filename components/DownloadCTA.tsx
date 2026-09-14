import Image from "next/image";
import { PlayCircle, Apple } from "lucide-react";

export default function DownloadCTA() {
  return (
    <section className="py-16 bg-[#1a5c38] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-4">Start investing with <span className="text-[#a7f3d0]">expert support</span></h2>
          <p className="text-white/70 text-sm leading-relaxed mb-7 max-w-md">
            Get started with your financial journey today. Join 1.2 crore+ investors.
          </p>
          <div className="flex gap-3 flex-wrap">
            {[{icon:PlayCircle,top:"Get it on",bottom:"Google Play"},{icon:Apple,top:"Download on the",bottom:"App Store"}].map(b=>(
              <a key={b.bottom} href="#" className="flex items-center gap-2.5 bg-white text-gray-900 px-4 py-2.5 rounded-xl hover:bg-gray-50 transition-colors">
                <b.icon size={20} className="text-[#1a5c38]"/>
                <div className="flex flex-col leading-tight">
                  <span className="text-[10px] text-gray-500">{b.top}</span>
                  <strong className="text-sm">{b.bottom}</strong>
                </div>
              </a>
            ))}
          </div>
        </div>
        <div className="relative h-60 sm:h-72 rounded-2xl overflow-hidden shadow-2xl">
          <Image src="/img/finance_india.jpg" alt="App" fill className="object-cover"/>
        </div>
      </div>
    </section>
  );
}
