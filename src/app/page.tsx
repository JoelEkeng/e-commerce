import Image from "next/image";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Deals} from "@/components/LandingPage";
import Search from "@/components/Search";

export default function Home() {
  return (
    <div className="pb-20 gap-16 font-[family-name:var(--font-geist-sans)]">
      <Header />
      <div className="px-10">
      <Search/> 
      <Deals/>
      </div>
      <Footer/>
    </div>
  );
}
