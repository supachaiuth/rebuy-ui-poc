import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import TrustStats from "@/components/sections/TrustStats";
import DeviceGrid from "@/components/sections/DeviceGrid";
import Features from "@/components/sections/Features";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--background)]">
      <Navbar />
      <Hero />
      <TrustStats />
      <DeviceGrid />
      <Features />
      <Footer />
    </main>
  );
}
