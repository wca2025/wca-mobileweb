import { HeaderItem } from "@/types/menu";

export const headerData: HeaderItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Who We Are",
    href: "#",
    submenu: [
      { label: "About us", href: "/cause" },
      { label: "Our Founder", href: "/cause/cause-1" },
      { label: "The Board", href: "/cause/cause-1" },
      { label: "Leadership", href: "/cause/cause-1" },
      { label: "Financials", href: "/cause/cause-1" },
      { label: "Policies & Notice", href: "/cause/cause-1" },
    ],
  },
  {
    label: "What We Do",
    href: "#",
    submenu: [
      { label: "Justice & Equality", href: "/events" },
      { label: "Environmental Sustainability", href: "/events/event-1" },
      { label: "Health & Wellbeing", href: "/events/event-1" },
      { label: "Technological responsibility", href: "/events/event-1" },
      { label: "Humanitarian Advocacy", href: "/events/event-1" },
      { label: "Cultural Preservation & Education", href: "/events/event-1" },
      { label: "Global Collaboration", href: "/events/event-1" },

    ],
  },
  {
    label: "Where We Work",
    href: "#",
    submenu: [
      { label: "Africa", href: "/blog" },
      { label: "Europe", href: "/blog/blog_1" },
      { label: "Asia Pacific", href: "/blog/blog_1" },
      { label: "Americas", href: "/blog/blog_1" },
      { label: "Middle East", href: "/blog/blog_1" },

    ],
  },
  {
    label: "Our Work",
    href: "#",
    submenu: [
      { label: "Fund raise", href: "/blog" },
    ],
  },  {
    label: "Get Involved",
    href: "#",
    submenu: [
      { label: "Ways to give", href: "/blog/blog_1" },
      { label: "Ways to Participate", href: "/blog/blog_1" },
      { label: "Attend an Event", href: "/blog" },
     
    ],
  },
  {
    label: "Latest News",
    href: "#",
    submenu: [
      { label: "News & Stories", href: "/blog" },
      { label: "Latest Campaign", href: "/blog/blog_1" },
      { label: "Event Calender", href: "/blog" },
    ],
  },
];
