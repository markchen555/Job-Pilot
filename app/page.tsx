import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { FeatureSpotlight } from "@/components/homepage/FeatureSpotlight";
import { FinalCta } from "@/components/homepage/FinalCta";
import { Hero } from "@/components/homepage/Hero";
import { Testimonial } from "@/components/homepage/Testimonial";
import { createInsforgeServer } from "@/lib/insforge-server";

export default async function Home() {
    const insforge = await createInsforgeServer();
    const {
        data: { user },
    } = await insforge.auth.getCurrentUser();

    return (
        <main className="min-h-screen bg-surface">
            <Navbar isAuthenticated={Boolean(user)} />
            <Hero isAuthenticated={Boolean(user)} />
            <FeatureSpotlight />
            <Testimonial />
            <FinalCta isAuthenticated={Boolean(user)} />
            <Footer />
        </main>
    );
}
