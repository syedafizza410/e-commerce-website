'use client';

import { useState } from 'react';

const FAQPage = () => {
  const faqs = [
    {
      question: "What is the return policy for Timeless Watches?",
      answer: "You can return your watch within 30 days of purchase if it’s unworn and in original packaging. For more details, visit our Returns page.",
    },
    {
      question: "Do Timeless Watches come with a warranty?",
      answer: "Yes, all Timeless Watches come with a 2-year warranty covering manufacturing defects.",
    },
    {
      question: "How can I track my order?",
      answer: "Once your order ships, you will receive an email with a tracking number. You can use it to track your order on our website.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept credit/debit cards, PayPal, and Apple Pay for your convenience.",
    },
    {
      question: "Are Timeless Watches water-resistant?",
      answer: "Yes, most of our watches are water-resistant up to 50 meters. Please check the product description for specific details.",
    },
  ];

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-6">
      <h1 className="text-4xl font-bold mb-10 text-center">Frequently Asked Questions</h1>
      <div className="w-full max-w-3xl space-y-4">
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </main>
  );
};

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`border border-gray-600 rounded-md overflow-hidden ${
        isOpen ? "bg-gray-800" : "bg-gray-900"
      }`}
    >
      <button
        className="w-full flex justify-between items-center p-4 text-lg font-medium text-left text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{question}</span>
        <span>{isOpen ? "-" : "+"}</span>
      </button>
      {isOpen && (
        <div className="p-4 border-t border-gray-700 text-gray-300">
          {answer}
        </div>
      )}
    </div>
  );
};

export default FAQPage;
