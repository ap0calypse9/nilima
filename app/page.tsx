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
import TrustedBy from "@/components/home/clients";
import Location from "@/components/home/location";
import FloatingContact from "@/components/contact/floating-contact";
import FeaturedVideo from "@/components/home/yt";
import IsoStripe from "@/components/home/iso";
import Faq from "@/components/home/faq";
import Stats from "@/components/home/stat";
import SurveyButton from "@/components/contact/survey-button";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <IsoStripe/>
        <TrustedBy/>
        <Identity />
        <Stats/>
        <Capabilities />
        <Projects />
        <FeaturedVideo/>
        <Expertise />
        <Trust />
        <Location/>
        <SurveyButton />
        <FloatingContact />
        <Faq/>
        <CTA />
      </main>
      <Footer />
    </>
  );
}