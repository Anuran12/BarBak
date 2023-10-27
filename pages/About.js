import AboutHero from "@/components/AboutHero";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Services from "@/components/Services";
import Team from "@/components/Team";
import Trust from "@/components/Trust";

export default function About() {
	return (
        <div>
            <Header />
            <AboutHero />
            <Trust />
            <Team />
            <Services />
            <div className="page">About Page</div>
            <Footer />
        </div>
    );
}