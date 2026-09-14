"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, Send } from "lucide-react";

const locations = [
  {
    id: "pune",
    x: "34%",
    y: "60%",
    name: "Sahil Gaikwad",
    city: "Pune",
    quote: "Filing used to eat my whole weekend. This year it was done in two days, zero back-and-forth.",
    color: "green",
  },
    {
    id: "satara",
    x: "34%",
    y: "65%",
    name: "Ajay Bhosale",
    city: "Satara",
    quote: "Finally got my tax filing done without any stress.",
    color: "green",
  },
  {
    id: "mumbai",
    x: "28%",
    y: "58%",
    name: "Rohan Jarkal",
    city: "Mumbai",
    quote: "They caught a deduction my old CA missed two years running.",
    color: "green",
  },
  {
    id: "nagpur",
    x: "43%",
    y: "55%",
    name: "Pritam Pawar",
    city: "Nagpur",
    quote: "Saved ₹35,000 extra last year just by restructuring. Total game changer.",
    color: "green",
  },
  {
    id: "nashik",
    x: "36%",
    y: "56%",
    name: "Sejal Patil",
    city: "Nashik",
    quote: "Finally have a proper tax plan. For the first time everything works together.",
    color: "green",
  },
  {
    id: "kolkata",
    x: "22%",
    y: "38%",
    name: "Aditi Rathi",
    city: "Jaisalmer",
    quote: "Professional service with excellent tax planning advice.",
    color: "green",
  },
  {
    id: "Punjab",
    x: "35%",
    y: "25%",
    name: "Amrit Singh",
    city: "Amritsar",
    quote: "Saved thousands in taxes with their expert guidance.",
    color: "green",
  },
  {
    id: "bhubaneswar",
    x: "58%",
    y: "52%",
    name: "Priya Mohanty",
    city: "Bhubaneswar",
    quote: "Quick and efficient ITR filing with maximum refund.",
    color: "green",
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name:"", phone:"", email:"", service:"", message:"" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [activeId, setActiveId] = useState("pune");
  const activeLocation = locations.find(loc => loc.id === activeId) || locations[0];

  // Auto-rotate testimonials every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveId(prev => {
        const currentIndex = locations.findIndex(loc => loc.id === prev);
        const nextIndex = (currentIndex + 1) % locations.length;
        return locations[nextIndex].id;
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch('https://dg6tcu1nkj.execute-api.us-east-1.amazonaws.com/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong');
      }

      setSent(true);
      setTimeout(() => {
        setSent(false);
        setForm({ name:"", phone:"", email:"", service:"", message:"" });
      }, 5000);
    } catch (err: any) {
      setError(err.message || 'Failed to submit form. Please try again.');
      setTimeout(() => setError(""), 5000);
    } finally {
      setLoading(false);
    }
  };

  const inputCls = "w-full bg-gray-50 border border-gray-200 focus:border-[#3b5bdb] focus:bg-white rounded-xl px-4 py-2.5 text-sm text-[#1a1f5e] placeholder-gray-400 outline-none transition-all";

  return (
    <section className="py-20 bg-white" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-block bg-blue-50 text-[#3b5bdb] text-[11px] font-bold px-3 py-1 rounded-full border border-blue-100 mb-3">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a1f5e] mb-3">
            Ready to sort your taxes and{" "}
            <span className="gradient-text">maximise your refund?</span>
          </h2>
          <p className="text-gray-400 text-sm">Free, no-obligation consultation. We respond within 2 hours.</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* Left - Testimonial Map */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative min-h-[600px] flex items-center justify-center"
          >
            {/* India Dotted Map */}
            <div className="relative w-full h-[600px] flex items-center justify-center">
              <img
                src="/img/map.svg"
                alt="India Map"
                className="w-auto h-full max-w-full object-contain opacity-50"
                style={{ filter: 'brightness(0) saturate(100%) invert(73%) sepia(10%) saturate(2486%) hue-rotate(87deg) brightness(94%) contrast(89%)' }}
              />

              {/* Maharashtra Label */}
              

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
                      ? location.color === 'green' ? 'bg-green-700 shadow-sm' : 'bg-red-700 shadow-sm'
                      : location.color === 'green' ? 'bg-green-600' : 'bg-red-600'
                  }`}>
                    {/* Pulse ring for active marker */}
                    {activeId === location.id && (
                      <motion.div
                        initial={{ scale: 1, opacity: 0.6 }}
                        animate={{ scale: 2.5, opacity: 0 }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className={`absolute inset-0 rounded-full border-2 ${location.color === 'green' ? 'border-green-600' : 'border-red-600'}`}
                      />
                    )}
                  </div>

                  {/* Outer ring for active marker */}
                  {activeId === location.id && (
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className={`absolute inset-0 -m-3 w-11 h-11 rounded-full border-3 ${location.color === 'green' ? 'border-green-600' : 'border-red-600'}`}
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
                  className="absolute -translate-x-1/2 -translate-y-full -mt-16 w-[280px] z-30 pointer-events-none"
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
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl border border-gray-100 card-shadow-lg p-7"
          >
            <h3 className="font-bold text-[#1a1f5e] text-lg mb-6">Book a Free Consultation</h3>

            <AnimatePresence mode="wait">
              {sent ? (
                <motion.div key="ok" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center py-14 text-center">
                  <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mb-4 border border-green-100">
                    <CheckCircle size={28} className="text-[#12b886]" />
                  </div>
                  <h4 className="font-bold text-[#1a1f5e] mb-2">Request received!</h4>
                  <p className="text-sm text-gray-400">Our team will reach out within 2 hours.</p>
                </motion.div>
              ) : (
                <motion.form key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} onSubmit={submit} className="space-y-4">
                  {error && (
                    <motion.div 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm">
                      {error}
                    </motion.div>
                  )}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[11px] font-semibold text-gray-500 mb-1 block">Full Name *</label>
                      <input required type="text" value={form.name}
                        onChange={e => setForm({...form, name:e.target.value})}
                        placeholder="Rahul Sharma" className={inputCls} disabled={loading} />
                    </div>
                    <div>
                      <label className="text-[11px] font-semibold text-gray-500 mb-1 block">Phone Number</label>
                      <input type="tel" value={form.phone}
                        onChange={e => setForm({...form, phone:e.target.value})}
                        placeholder="+91 98765 43210" className={inputCls} disabled={loading} />
                    </div>
                  </div>
                  <div>
                    <label className="text-[11px] font-semibold text-gray-500 mb-1 block">Email Address</label>
                    <input type="email" value={form.email}
                      onChange={e => setForm({...form, email:e.target.value})}
                      placeholder="rahul@email.com" className={inputCls} disabled={loading} />
                  </div>
                  <div>
                    <label className="text-[11px] font-semibold text-gray-500 mb-1 block">I need help with *</label>
                    <select required value={form.service}
                      onChange={e => setForm({...form, service:e.target.value})}
                      className={inputCls} disabled={loading}>
                      <option value="">Select a service</option>
                      <option>ITR Filing</option>
                      <option>Tax Planning</option>
                      <option>Investment Advisory</option>
                      <option>Income Tax Notice</option>
                      <option>GST / TDS Filing</option>
                      <option>Hire a Tax Expert</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-[11px] font-semibold text-gray-500 mb-1 block">Anything specific? (optional)</label>
                    <textarea value={form.message}
                      onChange={e => setForm({...form, message:e.target.value})}
                      placeholder="e.g. I have capital gains from stocks, or I need to plan retirement in 10 years..."
                      rows={3} className={inputCls + " resize-none"} disabled={loading} />
                  </div>
                  <button type="submit"
                    disabled={loading}
                    className="w-full bg-[#3b5bdb] hover:bg-[#2f4ac7] disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 text-sm shadow-lg shadow-blue-200 transition-all hover:-translate-y-0.5">
                    {loading ? (
                      <>
                        <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Send size={14} /> Book Free Consultation
                      </>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
