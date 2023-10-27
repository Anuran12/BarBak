import AboutHero from "@/components/AboutHero";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Trust from "@/components/Trust";

export default function About() {
	return (
        <div>
            <Header />
            <AboutHero />
            <Trust />
            <div className="page">About Page</div>
            <Footer />
        </div>
    );
}