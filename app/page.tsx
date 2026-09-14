import Navbar          from "@/components/Navbar";
import Hero            from "@/components/Hero";
import TrustBar        from "@/components/TrustBar";
import WhyChoose       from "@/components/WhyChoose";
import Features        from "@/components/Features";
import HireExpert      from "@/components/HireExpert";
import HowItWorks      from "@/components/HowItWorks";
import FAQ             from "@/components/FAQ";
import Contact         from "@/components/Contact";
import Newsletter      from "@/components/Newsletter";
import Footer          from "@/components/Footer";
import StickyBottomCTA from "@/components/StickyBottomCTA";

export default function Home() {
  return (
    <main className="bg-white">
      <Navbar />
      <Hero />
      <TrustBar />
      <WhyChoose />
      <Features />
      <HireExpert />
      <HowItWorks />
      <FAQ />
      <Contact />
      <Newsletter />
      <Footer />
      <StickyBottomCTA />
    </main>
  );
}
