
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import Services from "@/components/Services";
import Differentials from "@/components/Differentials";
import Testimonials from "@/components/Testimonials";
import CaseStudies from "@/components/CaseStudies";
import CallToAction from "@/components/CallToAction";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        <Hero />
        <AboutUs />
        <Services />
        <Differentials />
        <Testimonials />
        <CaseStudies />
        <CallToAction />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
