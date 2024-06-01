"use client";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { AnimatedGradientTextComponent } from "./AnimatedGradientComponent";
import React from "react";
export default function HeroSection() {
  return (
    <div className="flex flex-col items-center justify-center leading-6 h-full">
      <div className="my-5">
        <AnimatedGradientTextComponent />
      </div>
      <h1 className="scroll-m-20 text-4xl sm:text-4xl md:text-6xl font-semibold tracking-tight lg:text-7xl text-center max-w-[1000px] bg-gradient-to-b from-black to-gray-700/80 dark:from-white dark:to-slate-400 inline-block text-transparent bg-clip-text">
        Order & Received Fast with KYPJ Cafe
      </h1>
      <p className="mx-auto max-w-[700px] text-gray-500 md:text-lg text-center mt-2 dark:text-gray-400">
        Everything you need to quickly Order your Foor or Drinks
      </p>
      <div className="flex justify-center items-center gap-3">
        <Link href="/dashboard" className="mt-5">
          <Button
            size="sm"
            className="animate-buttonheartbeat rounded-md bg-blue-600 hover:bg-blue-500 text-sm font-semibold text-white w-[100px]"
          >
            User
            <ArrowRight className="w-4 h-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
