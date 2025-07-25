import CTA from "@/components/sections/cta/default";
import FAQ from "@/components/sections/faq/default";
import Hero from "@/components/sections/hero/default";
import Items from "@/components/sections/items/default";
import Navbar from "@/components/sections/navbar/default";
import Footer from "@/components/sections/footer/default";

export default function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <Items />
            <FAQ />
            <CTA />
            <Footer />
        </>)
}
