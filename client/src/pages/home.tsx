import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import Features from "@/components/features";
import Screenshots from "@/components/screenshots";
import Download from "@/components/download";
import Support from "@/components/support";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <Hero />
      <Features />
      <Screenshots />
      <Download />
      <Support />
      <Footer />
    </div>
  );
}
