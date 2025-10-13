"use client";

import DonationFormContext from "@/app/context/donationContext";
import Link from "next/link";
import { useContext } from "react";

const UrgentDonation = () => {
  const donationInfo = useContext(DonationFormContext);
  return (
    <section className="relative bg-[url('/images/background/donate-banner.jpg')] bg-cover sm:py-52 lg:py-28 py-16 bg-no-repeat">
      {/* Overlay to darken the background */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative container mx-auto lg:max-w-[--breakpoint-xl] px-4">
        <h3 className="text-white sm:text-2xl text-lg font-bold mb-5"> </h3>
      </div>
    </section>
  );
};

export default UrgentDonation;
