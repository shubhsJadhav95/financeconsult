"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const locations = [
  {
    id: "manali",
    x: "32%",
    y: "18%",
    name: "Rahul Diwan",
    city: "Manali",
    quote: "Filing used to eat my whole weekend. This year it was done in two days, zero back-and-forth."
  },
  {
    id: "mumbai",
    x: "24%",
    y: "52%",
    name: "Priya Kapoor",
    city: "Mumbai",
    quote: "They caught a deduction my old CA missed two years running."
  },
  {
    id: "bangalore",
    x: "35%",
    y: "68%",
    name: "Arjun Singh",
    city: "Bangalore",
    quote: "Saved ₹35,000 extra last year just by restructuring. Total game changer."
  },
  {
    id: "hyderabad",
    x: "42%",
    y: "60%",
    name: "Neha Sharma",
    city: "Hyderabad",
    quote: "Finally have a proper tax plan. For the first time everything works together."
  },
  {
    id: "delhi",
    x: "40%",
    y: "25%",
    name: "Vikram Reddy",
    city: "Delhi",
    quote: "Got a ₹24,500 refund I never knew I was owed. Filed in 2 days."
  },
  {
    id: "kolkata",
    x: "60%",
    y: "42%",
    name: "Anita Nair",
    city: "Kolkata",
    quote: "We plan in April, not March. This changed everything for our family."
  },
];

export default function TestimonialMap() {
  const [activeId, setActiveId] = useState("manali");
  const activeLocation = locations.find(loc => loc.id === activeId) || locations[0];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-green-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-block bg-green-50 text-green-700 text-[11px] font-bold px-3 py-1 rounded-full border border-green-100 mb-3">
            Real Stories
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a1f5e] mb-3">
            Trusted by clients <span className="gradient-text">across India</span>
          </h2>
          <p className="text-gray-400 text-sm">Real people. Real results. Real tax savings.</p>
        </motion.div>

        {/* Map Container */}
        <div className="relative max-w-2xl mx-auto min-h-[600px] flex items-center justify-center">
          
          {/* India Dotted Map - using actual map.svg */}
          <div className="relative w-full h-[600px] flex items-center justify-center">
            <img 
              src="/img/map.svg" 
              alt="India Map" 
              className="w-auto h-full max-w-full object-contain opacity-50"
              style={{ filter: 'brightness(0) saturate(100%) invert(73%) sepia(10%) saturate(2486%) hue-rotate(87deg) brightness(94%) contrast(89%)' }}
            />

            {/* Location Markers */}
            {locations.map((location) => (
              <button
                key={location.id}
                onClick={() => setActiveId(location.id)}
                onMouseEnter={() => setActiveId(location.id)}
                style={{ 
                  left: location.x, 
                  top: location.y,
                }}
                className={`absolute -translate-x-1/2 -translate-y-1/2 transition-all duration-300 z-20 ${
                  activeId === location.id ? 'scale-110' : 'scale-100 hover:scale-105'
                }`}
              >
                {/* Marker dot */}
                <div className={`w-5 h-5 rounded-full transition-all duration-300 ${
                  activeId === location.id 
                    ? 'bg-green-700 shadow-sm' 
                    : 'bg-green-600'
                }`}>
                  {/* Pulse ring for active marker */}
                  {activeId === location.id && (
                    <motion.div
                      initial={{ scale: 1, opacity: 0.6 }}
                      animate={{ scale: 2.5, opacity: 0 }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="absolute inset-0 rounded-full border-2 border-green-600"
                    />
                  )}
                </div>
                
                {/* Outer ring for active marker */}
                {activeId === location.id && (
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="absolute inset-0 -m-3 w-11 h-11 rounded-full border-3 border-green-600"
                  />
                )}
              </button>
            ))}

            {/* Testimonial Card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeId}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                style={{ 
                  left: activeLocation.x,
                  top: activeLocation.y,
                }}
                className="absolute -translate-x-1/2 -translate-y-full -mt-16 w-[300px] z-30 pointer-events-none"
              >
                {/* Card */}
                <div className="bg-white rounded-xl shadow-2xl p-5 relative border border-gray-100">
                  {/* Arrow pointing down */}
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-r border-b border-gray-100 rotate-45 z-0"></div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <p className="text-gray-700 text-sm leading-relaxed mb-4 italic">
                      "{activeLocation.quote}"
                    </p>
                    
                    <div className="pt-3 border-t border-gray-100">
                      <p className="text-sm font-bold text-[#1a1f5e]">
                        {activeLocation.name}
                      </p>
                      <p className="text-xs text-gray-400 mt-0.5">
                        {activeLocation.city}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
