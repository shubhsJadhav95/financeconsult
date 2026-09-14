import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ 
  subsets:["latin"], 
  variable:"--font-poppins", 
  display:"swap",
  weight: ["400", "500", "600", "700", "800", "900"]
});

export const metadata: Metadata = {
  title: "FinanceConsult – File ITR with Expert Support & 100% Accuracy",
  description: "India's most trusted tax filing platform. File your ITR accurately and on time. Maximum refund guaranteed. Expert-assisted or self-file.",
  icons: {
    icon: "/logo.svg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="antialiased bg-white text-[#1a1f5e]">{children}</body>
    </html>
  );
}
