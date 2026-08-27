import Navbar from "@/components/navigation/navbar";
import SiteIntro from "@/components/intro/site-intro";
import Hero from "@/components/home/hero";
import Identity from "@/components/home/identity";
import Capabilities from "@/components/home/capabilities";
import Projects from "@/components/home/projects";

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
      </main>
    </>
  );
}