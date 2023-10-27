import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Stats from "@/components/Stats";

export default function HomePage() {
  return(
    <div>
      <Header />
      <Hero />
      <Stats />
      <Services />
      <div>Home Page</div>
      <Footer />
    </div>
  );
}