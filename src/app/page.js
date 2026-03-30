import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Reviews from '@/components/Reviews';
import HowItWorks from '@/components/HowItWorks';
import TrustContent from '@/components/TrustContent';
import Services from '@/components/Services';
import WhyChooseUs from '@/components/WhyChooseUs';
import EmergencyCTA from '@/components/EmergencyCTA';
import Stats from '@/components/Stats';
import CarBrands from '@/components/CarBrands';
import FAQ from '@/components/FAQ';
import AreasWeCover from '@/components/AreasWeCover';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Reviews />
        <HowItWorks />
        <TrustContent />
        <Services />
        <WhyChooseUs />
        <EmergencyCTA />
        <Stats />
        <CarBrands />
        <FAQ />
        <AreasWeCover />
      </main>
      <Footer />
    </>
  );
}
