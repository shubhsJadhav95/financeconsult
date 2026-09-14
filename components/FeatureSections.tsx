import Image from "next/image";
import { Users } from "lucide-react";

export default function FeatureSections() {
  return (
    <>
      {/* Simplified data — light pink/lavender bg */}
      <section className="bg-[#fdf6ff] py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text — left */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 leading-tight mb-4">
              Simplified data for<br />amplified returns
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              <span className="text-[#1a8a5a] font-semibold">ET Money</span> presents you all the useful data in the most
              simplified manner that helps you separate the investing signals from the noise.
            </p>
          </div>

          {/* Illustration — right: use image as placeholder for 3D chart */}
          <div className="flex justify-center">
            <div className="relative w-64 h-64">
              <Image src="/img/finance_coin.jpg" alt="Analytics" fill className="object-cover rounded-2xl shadow-xl" />
              {/* Overlay coins/charts feel */}
              <div className="absolute -bottom-3 -right-3 w-16 h-16 rounded-xl overflow-hidden shadow-sm border-2 border-white">
                <Image src="/img/finance_coin2.jpg" alt="coin" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personality — light blue bg */}
      <section className="bg-[#f0f8ff] py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Illustration — left */}
          <div className="flex justify-center">
            <div className="relative w-72 h-64">
              {/* Main large image */}
              <div className="absolute left-8 bottom-0 w-44 h-52 rounded-2xl overflow-hidden shadow-xl">
                <Image src="/img/finance_consultant.jpg" alt="personality" fill className="object-cover" />
              </div>
              {/* Small overlay cards */}
              <div className="absolute top-0 right-0 w-32 h-32 rounded-2xl overflow-hidden shadow-sm border-2 border-white">
                <Image src="/img/finance_money_sit.jpg" alt="type" fill className="object-cover" />
              </div>
              <div className="absolute bottom-4 right-0 w-24 h-24 rounded-2xl overflow-hidden shadow-sm border-2 border-white">
                <Image src="/img/finance_write.jpg" alt="type" fill className="object-cover" />
              </div>
              {/* Role badges */}
              <div className="absolute top-2 left-0 bg-white text-[10px] font-bold text-gray-700 px-2 py-1 rounded-lg shadow-md border">STRATEGISER</div>
              <div className="absolute bottom-2 left-2 bg-white text-[10px] font-bold text-gray-700 px-2 py-1 rounded-lg shadow-md border">PROTECTOR</div>
            </div>
          </div>

          {/* Text — right */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 leading-tight mb-4">
              Bring advantage of your personality to investing
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-5">
              Success in your story happens when you know what you are doing and why.
              Bring an edge to your investing by taking decisions that match with your investor personality.
            </p>
            <a href="#" className="inline-block bg-[#1a5c38] hover:bg-[#154a2d] text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all mb-4">
              Take the FREE assessment
            </a>
            <div className="flex items-center gap-2 text-[12px] text-gray-500 mt-3">
              <Users size={14} className="text-gray-400" />
              <span>3,00,000+ assessments taken so far...</span>
            </div>
          </div>
        </div>
      </section>

      {/* Genius — dark section */}
      <section className="bg-[#0d1117] py-16 sm:py-20 text-white" id="genius">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative h-80 rounded-2xl overflow-hidden shadow-2xl">
            <Image src="/img/finance_coin.jpg" alt="Genius" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
          <div>
            <span className="inline-block bg-yellow-400/20 text-yellow-400 text-xs font-bold px-3 py-1 rounded-full mb-4">
              ✨ ET Money Genius
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold leading-tight mb-4">
              Leave no room for <span className="text-[#22c55e]">second guessing</span>
            </h2>
            <p className="text-white/70 text-sm leading-relaxed mb-3">
              Right investing decisions can alter the story of one's life. ET Money Genius removes
              fears and anxieties by bringing method to your investing.
            </p>
            <p className="text-white/80 text-sm mb-7">And helps you <strong>invest like a pro.</strong></p>
            <a href="#" className="inline-block bg-[#22c55e] hover:bg-[#16a34a] text-white font-bold px-6 py-3 rounded-full transition-all text-sm">
              Know more about Genius →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
