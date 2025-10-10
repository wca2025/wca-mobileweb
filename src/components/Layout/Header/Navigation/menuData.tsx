import { HeaderItem } from "@/types/menu";

export const headerData: HeaderItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Who We Are",
    href: "#",
    submenu: [
      // { label: "About us", href: "/cause" },
      // { label: "Our Founder", href: "/cause/cause-1" },
      { label: "About us", href: "/#/" },
      { label: "Our Founder", href: "/#/" },
      { label: "The Board", href: "/#/" },
      { label: "Leadership", href: "/#/" },
      { label: "Financials", href: "/#/" },
      { label: "Policies & Notice", href: "/#/" },
    ],
  },
  {
    label: "What We Do",
    href: "#",
    submenu: [
      // { label: "Justice & Equality", href: "/events" },
      // { label: "Environmental Sustainability", href: "/events/event-1" },
      { label: "Justice & Equality", href: "/#/" },
      { label: "Environmental Sustainability", href: "/#/" },
      { label: "Health & Wellbeing", href: "/#/" },
      { label: "Technological responsibility", href: "/#/" },
      { label: "Humanitarian Advocacy", href: "/#/" },
      { label: "Cultural Preservation & Education", href: "/#/" },
      { label: "Global Collaboration", href: "/#/" },
    ],
  },
  {
    label: "Where We Work",
    href: "#",
    submenu: [
      // // { label: "Africa", href: "/blog" },
      // // { label: "Europe", href: "/blog/blog_1" },
      { label: "Africa", href: "/#/" },
      { label: "Europe", href: "/#/" },
      { label: "Asia Pacific", href: "/#/" },
      { label: "Americas", href: "/#/" },
      { label: "Middle East", href: "/#/" },
    ],
  },
  {
    label: "Our Work",
    href: "#",
    submenu: [{ label: "Fund raise", href: "/#/" }],
  },
  {
    label: "Get Involved",
    href: "#",
    submenu: [
      { label: "Ways to give", href: "/#/" },
      { label: "Ways to Participate", href: "/#/" },
      { label: "Attend an Event", href: "/#/" },
    ],
  },
  {
    label: "Latest News",
    href: "#",
    submenu: [
      { label: "News & Stories", href: "/#/" },
      { label: "Latest Campaign", href: "/#/" },
      { label: "Event Calender", href: "/#/" },
    ],
  },
];
