import Navbar from "@/components/navigation/navbar";
import SiteIntro from "@/components/intro/site-intro";
import Hero from "@/components/home/hero";
import Identity from "@/components/home/identity";
import Capabilities from "@/components/home/capabilities";
import Projects from "@/components/home/projects";
import Expertise from "@/components/home/expertise";
import Trust from "@/components/home/trust";
import CTA from "@/components/home/cta";
import Footer from "@/components/layout/footer";

export default function Home() {
  return (
    <>
      <SiteIntro />
      <Navbar />

      <main>
        <Hero />
        <Identity />
        <Capabilities />
        <Projects />
        <Expertise />
        <Trust />
        <CTA />
      </main>
      <Footer />
    </>
  );
}