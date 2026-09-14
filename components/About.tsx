import Image from "next/image";
import { Eye, Target, Heart } from "lucide-react";

const values = [
  { icon: Eye,    title: "Transparency",  desc: "No hidden fees, no confusing jargon. You always know exactly what we're doing and why." },
  { icon: Target, title: "Accuracy",      desc: "Every return is reviewed by a qualified professional before filing. We catch what others miss." },
  { icon: Heart,  title: "Client-first",  desc: "Your goals shape every recommendation. We don't push products — we build plans that fit your life." },
];

export default function About() {
  return (
    <section className="py-20 bg-white" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-14 items-center">

        {/* Left text */}
        <div>
          <span className="text-xs font-bold tracking-widest uppercase text-[#16a34a] mb-3 block">About Us</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight mb-5">
            Tax experts and financial advisors,{" "}
            <span className="text-[#16a34a]">under one roof</span>
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed mb-4">
            TaxWise Advisory is a team of tax consultants and financial advisors helping individuals and businesses manage two of the most important parts of personal finance — taxes and wealth-building — in one place.
          </p>
          <p className="text-gray-500 text-sm leading-relaxed mb-8">
            We started because we kept seeing the same problem: people working with a CA for taxes and a separate advisor for investments, with neither talking to the other. We combined both — so your tax saving feeds into your investment plan, and vice versa.
          </p>

          {/* Mission */}
          <div className="bg-[#f0fdf4] border border-emerald-100 rounded-xl p-5 mb-8">
            <h4 className="font-bold text-gray-900 text-sm mb-2">Our Mission</h4>
            <p className="text-sm text-gray-600 leading-relaxed">
              To make tax compliance simple and investing accessible, so you can focus on your life and career while we handle the numbers.
            </p>
          </div>

          {/* Values */}
          <div className="grid sm:grid-cols-3 gap-4">
            {values.map((v) => (
              <div key={v.title} className="text-center p-4 rounded-xl border border-gray-100 hover:border-emerald-200 hover:bg-[#f0fdf4] transition-all">
                <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center mx-auto mb-3">
                  <v.icon size={18} className="text-[#16a34a]" />
                </div>
                <h4 className="font-bold text-gray-900 text-sm mb-1">{v.title}</h4>
                <p className="text-xs text-gray-400 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right image collage */}
        <div className="relative h-[480px]">
          <div className="absolute top-0 left-0 w-3/4 h-72 rounded-2xl overflow-hidden shadow-xl">
            <Image src="/img/finance_consultant.jpg" alt="Our team" fill className="object-cover" />
          </div>
          <div className="absolute bottom-0 right-0 w-3/5 h-56 rounded-2xl overflow-hidden shadow-xl border-4 border-white">
            <Image src="/img/finance_bank.jpg" alt="Office" fill className="object-cover" />
          </div>
          {/* Floating stat card */}
          <div className="absolute bottom-24 left-0 bg-[#0f2d1a] text-white rounded-xl px-5 py-4 shadow-2xl">
            <p className="text-2xl font-extrabold text-[#22c55e]">5,000+</p>
            <p className="text-xs text-white/60 mt-0.5">Happy clients across India</p>
          </div>
        </div>
      </div>
    </section>
  );
}
