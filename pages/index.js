import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";

export default function HomePage() {
  return(
    <div>
      <Header />
      <Hero />
      <Stats />
      <div>Home Page</div>
      <Footer />
    </div>
  );
}