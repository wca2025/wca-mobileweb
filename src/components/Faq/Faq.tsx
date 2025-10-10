"use client";
import React, { useState } from "react";
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
      question: "What is React?",
      answer: "A JavaScript library for building UIs.",
    },
    {
      question: "What is a component?",
      answer: "A reusable piece of UI logic.",
    },
    {
      question: "What is state?",
      answer: "An object that determines how a component renders and behaves.",
    },
  ];
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
      <div className="qna-list">
        {data.map((item, idx) => (
          <QnAItem key={idx} {...item} />
        ))}
      </div>
    </>
  );
};
