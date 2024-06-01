import React from "react";
import PageWrapper from "@/components/Container/PageWrapper";
import HeroSection from "@/components/LandingPage/HeroSection";

export default function Home() {
  return (
    <PageWrapper>
      <div className="h-screen">
        <HeroSection />
      </div>
    </PageWrapper>
  );
}
