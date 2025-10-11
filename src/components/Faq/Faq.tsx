"use client";
import React, { useState } from "react";
import Image from "next/image";

type QnAItemProps = {
  question: string;
  answer: string;
};
const QnAItem = ({ question, answer }: QnAItemProps) => {
  const [open, setOpen] = useState(false);

  const styles = {
    item: {
      borderBottom: "1px solid #ddd",
      padding: "10px 0",
    },

    question: {
      background: "none",
      border: "none",
      fontSize: "1.1rem",
      fontWeight: "bold",
      cursor: "pointer",
      display: "flex",
      justifyContent: "space-between",
      width: "100%",
    },
    answer: {
      marginTop: "8px",
      paddingLeft: "10px",
      color: "#444",
      transition: "all 0.3s ease",
    },
    width: "100px",
  };

  return (
    <div style={styles.item}>
      <button style={styles.question} onClick={() => setOpen(!open)}>
        {question}
        <span>{open ? "▲" : "▼"}</span>
      </button>
      {open && <div style={styles.answer}>{answer}</div>}
    </div>
  );
};

export const Faq = () => {
  const data = [
    {
      question: "What is World citizens Alliance?",
      answer:
        "World Citizens Alliance (WCA) is the entity that  was established in 2025 to strategically coordinate and ensure consistent operating policies and standards globally across all regions.",
    },
    {
      question:
        "Who started World Citizens Alliance (WCA)? How did World Citizens Alliance (WCA) begin??",
      answer:
        "World Citizens Alliance (WCA)was founded in 2025 by Edem kofi Gbeku in response to the needs of urban dwellers living on the street. ",
    },
    {
      question: "How is World Citizens Alliance (WCA) funded??",
      answer:
        "World Citizens Alliance (WCA) receives a majority of its funding from individuals, foundations and corporations. Such private funding accounts for 63% of World Citizens Alliance (WCA)’s operating budget, with the rest coming from multilateral agencies and governments. ",
    },
    {
      question:
        "Is World Citizens Alliance (WCA) a non-governmental organisation?",
      answer:
        "World Citizens Alliance (WCA) is not formally affiliated with any government, denomination, foundation or corporation, though it maintains positive working relationships with all of these. Because of this independent status, World Citizens Alliance (WCA) does meet the standard definition of a non-governmental organisation.",
    },
    {
      question:
        "Is World Citizens Alliance (WCA) formally tied to or a subsidiary of any other entity??",
      answer:
        "World Citizens Alliance (WCA) is an independent private Christian organisation and is not formally affiliated with any government, denomination, foundation or corporation, though it maintains positive working relationships with all of these.",
    },
    {
      question:
        "Do World Citizens Alliance (WCA) projects create dependence on outside resources?",
      answer:
        "No. Community development projects are designed to be sustainable with locally available resources, technology, materials, and leadership. Families and individuals share in project leadership, responsibilities, and activities from the start. They are well equipped and motivated to continue in these roles when World Citizens Alliance (WCA) ends its direct involvement in a community.      ",
    },

    {
      question:
        "Do people living in project communities contribute to World Citizens Alliance (WCA) projects?",
      answer:
        "Communities always contribute to development projects and have a real sense of ownership and true participation. Community participation is integral to transformational development.",
    },
  ];

  const styles = {
    list: {
      width: "100%",
      justifyContent: " center" /* Horizontal centering */,
    },
  };

  return (
    <>
      <section className="py-40 bg-[url('/images/background/herosub-banner.png')] bg-no-repeat bg-cover lg:mt-40 sm:mt-44 mt-20">
        <div className="container mx-auto lg:max-w-(--breakpoint-xl) px-4">
          <h2
            className="text-white md:text-6xl text-4xl font-medium"
            data-aos="fade-right"
          >
            FAQ
          </h2>
        </div>
      </section>
      <section className="lg:py-28 py-16 bg-white dark:bg-dark">
        <div className="container mx-auto lg:max-w-(--breakpoint-xl) px-4">
          <div className="text-center">
            <h2
              className="text-3xl mb-3 font-medium"
              data-aos-delay={"100"}
              data-aos="fade-right"
            >
              Still having questions about World Citizens Alliance?
            </h2>
            <p className="text-muted dark:text-white/60 text-base">
              Read through our frequently asked questions below or contact us to
              find out more.
              <br className="lg:block hidden" /> Every effort makes a
              difference!
            </p>
          </div>
        </div>
      </section>

      <div className="space-y-20">
        {/* Section 1: Image left, Text right */}
        <section className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="relative w-full h-64 lg:h-96">
            <Image
              src="/images/causes/cause-5.jpg"
              alt="Our identity"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Our identity</h2>
            <p className="text-slate-700">
              We are a global relief, development, and advocacy organization
              dedicated to working with children, families, and communities to
              overcome poverty and injustice.
            </p>
          </div>
        </section>

        {/* Section 2: Text left, Image right */}
        <section className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6 order-2 lg:order-1">
            <h2 className="text-2xl font-semibold">Our work</h2>
            <p className="text-slate-700">
              Our projects span short-term emergency relief, long-term
              sustainable community development, and policy-level advocacy to
              address unjust systems that perpetuate poverty.
            </p>
          </div>
          <div className="relative w-full h-64 lg:h-96 order-1 lg:order-2">
            <Image
              src="/images/causes/cause-7.jpg"
              alt="Our work"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </section>

        {/* Section 3: Image left, Text right */}
        <section className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="relative w-full h-64 lg:h-96">
            <Image
              src="/images/causes/cause-6.jpg"
              alt="Our faith"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Our faith</h2>
            <p className="text-slate-700">
              We hold our faith as central to our identity and motivation to
              serve, while providing aid based on need alone and partnering
              inclusively.
            </p>
          </div>
        </section>
      </div>
      <section className="lg:py-28 py-16 bg-white dark:bg-dark">
        <div className="container mx-auto lg:max-w-(--breakpoint-xl) px-4">
          <div className="text-center">
            <h2
              className="text-3xl mb-3 font-medium"
              data-aos-delay={"100"}
              data-aos="fade-right"
            >
              FREQUENTLY ASKED QUESTIONS
            </h2>
          </div>
        </div>
      </section>
      <div className="qna-list" style={styles.list}>
        {data.map((item, idx) => (
          <QnAItem key={idx} {...item} />
        ))}
      </div>
      <section className="lg:py-28 py-16 bg-white dark:bg-dark">
        <div className="container mx-auto lg:max-w-(--breakpoint-xl) px-4">
          <div className="text-center"></div>
        </div>
      </section>
    </>
  );
};
