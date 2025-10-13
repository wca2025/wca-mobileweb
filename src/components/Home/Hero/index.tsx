"use client";

import { getPathFunc } from "@/utils/testing";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { Test } from "./Test";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Donation } from "./Donation";
import DonationFormContext from "@/app/context/donationContext";

const Hero = () => {
  const donationInfo = useContext(DonationFormContext);
  return (
    <>
      <section className="relative bg-cover text-white md:pt-40 md:pb-28 py-20 bg-no-repeat bg-[url('/images/hero/banner-bg.jpg')] lg:mt-40 sm:mt-44 mt-20">
        <div className="container mx-auto lg:max-w-(--breakpoint-xl) px-4 grid grid-cols-12">
          {/* Overlay to darken the background */}
          <div className="absolute inset-0 bg-black/50"></div>

          <div className="relative container mx-auto lg:max-w-[--breakpoint-xl] px-4">
            <h3 className="text-white sm:text-2xl text-lg font-bold mb-5"></h3>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
