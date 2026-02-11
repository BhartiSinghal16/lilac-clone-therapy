import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MoodSelector from "./components/MoodSelector";
import Services from "./components/Services";
import Process from "./components/Process";
import About from "./components/About";
import Office from "./components/Office";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <MoodSelector />
      <Services />
      <Process />
      <About />
      <Office />
      <Testimonials />
      <CTA />
      <Footer />

      {/* Floating Button */}
      <a
        href="#contact"
        className="fixed bottom-6 right-6 bg-[var(--color-primary)] text-white px-6 py-3 rounded-full shadow-lg hover:bg-[var(--color-accent)] transition duration-300 z-50"
      >
        Book Now
      </a>
    </>
  );
}




