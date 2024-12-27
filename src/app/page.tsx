'use client'

import Image from "next/image";
import { Suspense } from 'react'
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Deals} from "@/components/LandingPage";
// import Search from "@/components/Search";

export default function Home() {
  return (
    <div className="pb-20 gap-16 font-[family-name:var(--font-geist-sans)]">
      <Header />
      <div className="px-10">
      {/* <Suspense fallback={<div>Loading...</div>}>
      <Search />
     </Suspense> */}
      <Deals/>
      </div>
      <Footer/>
    </div>
  );
}
