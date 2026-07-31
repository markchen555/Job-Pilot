import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { FeatureSpotlight } from "@/components/homepage/FeatureSpotlight";
import { FinalCta } from "@/components/homepage/FinalCta";
import { Hero } from "@/components/homepage/Hero";
import { Testimonial } from "@/components/homepage/Testimonial";

export default function Home() {
    return (
        <main className="min-h-screen bg-surface">
            <Navbar />
            <Hero />
            <FeatureSpotlight />
            <Testimonial />
            <FinalCta />
            <Footer />
        </main>
    );
}
