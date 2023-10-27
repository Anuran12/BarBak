import AboutHero from "@/components/AboutHero";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Trust from "@/components/Trust";
import TryServices from "@/components/TrySrevices";

export default function About() {
	return (
        <div>
            <Header />
            <AboutHero />
            <Trust />
            <TryServices />
            <div className="page">About Page</div>
            <Footer />
        </div>
    );
}