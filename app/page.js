
import ContactUs from "@/components/ContactUs";
import { FAQ } from "@/components/FAQ";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Judges from "@/components/Judges";
import { PrizesSection } from "@/components/PrizesSection";
import Image from "next/image";


export default function Home() {
  return (
    <>
    <div className="bg-cover w-full bg-top" style={{ backgroundImage: "url('/background-images/heroSectionBackground.png')" }}>
      <HeroSection/>
      <Judges/>
      <PrizesSection/>
      <FAQ/>

      <ContactUs/>
      <Footer/>

    </div>
    </>
  );
}
