import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import NavigationChips from "@/components/home/NavigationChips";
import TopCompaniesSection from "@/components/home/TopCompaniesSection";
import FeaturedCompaniesSection from "@/components/home/FeaturedCompaniesSection";
import CampusSection from "@/components/home/CampusSection";
import InterviewSection from "@/components/home/InterviewSection";
import PopularSearchesSection from "@/components/home/PopularSearchesSection";
import PremiumServicesSection from "@/components/home/PremiumServicesSection";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <HeroSection />
      <NavigationChips />
      <TopCompaniesSection />
      <FeaturedCompaniesSection />
      <PopularSearchesSection />
      <CampusSection />
      <PremiumServicesSection />
      <InterviewSection />
      <Footer />
    </main>
  );
}
