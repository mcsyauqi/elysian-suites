import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import FeaturedSuites from "@/components/FeaturedSuites";
import Benefits from "@/components/Benefits";
import Locations from "@/components/Locations";
import Testimonials from "@/components/Testimonials";
import PricingTable from "@/components/PricingTable";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <SocialProof />
      <FeaturedSuites />
      <Benefits />
      <Locations />
      <Testimonials />
      <PricingTable />
      <FAQ />
      <FinalCTA />
      <Footer />
      <StickyMobileCTA />
    </>
  );
}
