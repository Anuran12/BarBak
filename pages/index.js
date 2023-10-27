import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Specials from "@/components/Specials";
import Stats from "@/components/Stats";

export default function HomePage() {
  return(
    <div>
      <Header />
      <Hero />
      <Stats />
      <Services />
      <Specials />
      <div>Home Page</div>
      <Footer />
    </div>
  );
}