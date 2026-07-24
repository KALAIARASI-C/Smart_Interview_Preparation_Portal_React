import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Companies from "../components/Companies";
import WhyChoose from "../components/WhyChoose";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import CTA from "../components/CTA";


import Contact from "../components/Contact";
function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <Companies />
      <WhyChoose />
      <Testimonials />
       <FAQ />
        <Contact />
        <CTA/>
      <Features />
      <Footer />
    </>
  );
}
export default Home;