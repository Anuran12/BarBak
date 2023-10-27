import AboutHero from "@/components/AboutHero";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function About() {
	return (
        <div>
            <Header />
            <AboutHero />
            <div className="page">About Page</div>
            <Footer />
        </div>
    );
}