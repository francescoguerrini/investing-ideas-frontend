"use client";
import { CompanyDataProvider } from "./context/CompanyDataContext";
import Navbar from "./components/common/Navbar";
import Hero from "./components/hero/Hero";
import Footer from "./components/common/Footer";

export default function Home() {
  return (
    <CompanyDataProvider>
      <div className="h-full w-[96%] md:w-full flex flex-col gap-2">
        <div className="flex-grow flex flex-col gap-2 md:gap-6 md:px-[7%] ">
          <Navbar />
          <Hero />
        </div>
        <Footer />
      </div>
    </CompanyDataProvider>
  );
}
