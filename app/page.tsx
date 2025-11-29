import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustBar from "./components/TrustBar";
import About from "./components/About";
import ServicesGrid from "./components/ServicesGrid";
import Team from "./components/Team";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505]">
      <Navbar />
      <Hero />
      <TrustBar />
      <About />
      <ServicesGrid />
      <Team />
      <Contact />
      <Footer />
    </main>
  );
}
