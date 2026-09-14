"use client";
import * as Accordion from "@radix-ui/react-accordion";
import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  { q:"Who needs to file an Income Tax Return?",
    a:"Anyone whose income exceeds the basic exemption limit must file. Even when not mandatory, filing helps with loan approvals, visa applications, and claiming refunds. We'll assess your situation free of charge." },
  { q:"What documents do I need for ITR filing?",
    a:"Typically Form 16 (salaried), bank statements, investment proofs, Form 26AS/AIS, and details of any other income — rent, capital gains, freelance income. We send you a clear checklist once you sign up." },
  { q:"I missed the July 31 deadline — can you still help?",
    a:"Yes. Belated returns can be filed until December 31. Late filing may attract a penalty under Section 234F (up to ₹5,000), but it's always better to file late than never." },
  { q:"What's the difference between Old and New Tax Regime?",
    a:"The old regime lets you claim deductions (80C, HRA, etc.) while the new regime offers lower slab rates with fewer deductions. We run both scenarios and recommend whichever saves you more — for free." },
  { q:"How much should I invest to save tax under 80C?",
    a:"The 80C limit is ₹1.5 lakh. But the right investment depends on your income slab, existing investments, and the tax regime you've chosen. Book a free call and we'll calculate the exact amount." },
  { q:"Is my financial data safe with you?",
    a:"Yes. We use 256-bit encryption for all data storage and transfer. Your information is never shared with third parties, and can be deleted permanently on request after your engagement ends." },
  { q:"Can you handle income tax notices?",
    a:"Yes. Share the notice with us and we'll assess it immediately. We handle scrutiny assessments, demand notices, Section 143(1) intimations, and all other departmental queries." },
  { q:"How are your fees structured?",
    a:"We have fixed, transparent pricing based on the complexity of your return — shared upfront before you commit. Investment advisory plans are discussed in the free consultation. No hidden fees, guaranteed." },
];

export default function FAQ() {
  return (
    <section className="py-20 bg-[#f8f9ff]" id="faq">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block bg-blue-50 text-[#3b5bdb] text-[11px] font-bold px-3 py-1 rounded-full border border-blue-100 mb-3">
            FAQs
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a1f5e]">
            Questions we hear{" "}
            <span className="gradient-text">all the time</span>
          </h2>
        </motion.div>

        <Accordion.Root type="single" collapsible className="space-y-2">
          {faqs.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <Accordion.Item
                value={`q${i}`}
                className="bg-white rounded-2xl border border-gray-100 overflow-hidden card-shadow hover:border-blue-100 transition-all"
              >
                <Accordion.Header>
                  <Accordion.Trigger className="group flex w-full items-center justify-between px-5 py-4 text-left text-sm font-semibold text-[#1a1f5e] hover:text-[#3b5bdb] transition-colors">
                    {f.q}
                    <span className="ml-4 flex-shrink-0 w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center text-[#3b5bdb]">
                      <Plus size={13} className="group-data-[state=open]:hidden" />
                      <Minus size={13} className="hidden group-data-[state=open]:block" />
                    </span>
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="accordion-content overflow-hidden">
                  <p className="px-5 pb-4 text-[13px] text-gray-500 leading-relaxed border-t border-gray-50 pt-2">
                    {f.a}
                  </p>
                </Accordion.Content>
              </Accordion.Item>
            </motion.div>
          ))}
        </Accordion.Root>

        {/* Can't find CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <p className="text-gray-400 text-sm mb-3">Can&apos;t find your question?</p>
          <a
            href="mailto:hello@financeconsult.in"
            className="inline-block bg-white border border-gray-200 hover:border-[#3b5bdb] text-[#3b5bdb] font-semibold px-6 py-2.5 rounded-xl text-sm transition-all card-shadow"
          >
            Email us →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
