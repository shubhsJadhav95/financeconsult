import Image from "next/image";
import { TrendingUp, PiggyBank, Shield, Building2, ArrowRight } from "lucide-react";

const products = [
  { id:"stocks",    icon:TrendingUp, iconBg:"bg-blue-50",   iconColor:"text-blue-500",   img:"/img/finance_money.jpg",  title:"Stocks",        desc:"Invest in top Indian companies. Build your equity portfolio with expert guidance." },
  { id:"nps",       icon:PiggyBank,  iconBg:"bg-orange-50", iconColor:"text-orange-500", img:"/img/finance_coin2.jpg", title:"NPS",           desc:"Build your retirement corpus with NPS. Save taxes while securing your future." },
  { id:"insurance", icon:Shield,     iconBg:"bg-green-50",  iconColor:"text-green-500",  img:"/img/finance_bank.jpg",  title:"Insurance",     desc:"Protect your family with term life and health insurance at the best prices." },
  { id:"fd",        icon:Building2,  iconBg:"bg-pink-50",   iconColor:"text-pink-500",   img:"/img/finance_doller.jpg",title:"Fixed Deposit", desc:"Earn guaranteed returns up to 8.3% p.a. with reliable fixed deposits." },
];

export default function Products() {
  return (
    <section className="py-16 sm:py-20 bg-white" id="stocks">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-2">
            Everything you need to grow your wealth
          </h2>
          <p className="text-gray-400 text-sm">One app for all your investment needs</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {products.map((p) => (
            <div key={p.id} id={p.id} className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <div className={`${p.iconBg} px-4 py-3`}><p.icon size={22} className={p.iconColor} /></div>
              <div className="relative h-36"><Image src={p.img} alt={p.title} fill className="object-cover" /></div>
              <div className="p-4">
                <h3 className="font-bold text-gray-900 text-sm mb-1">{p.title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed mb-3">{p.desc}</p>
                <a href="#" className="flex items-center gap-1 text-xs font-semibold text-[#1a8a5a] border-t border-gray-50 pt-3">
                  Explore {p.title} <ArrowRight size={12} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
