import { Faq } from "@/components/Faq/Faq";
import Volunteer from "@/components/SharedComponent/Volunteer";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Featurs | Endeavor",
};

export default function Page() {
  return (
    <>
      <Faq />
      
      <Volunteer />
    </>
  );
}
