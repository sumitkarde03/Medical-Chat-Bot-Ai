import React, { useState } from "react";

const faqData = [
  {
    question: "What is this website about?",
    answer: "This website provides information about various topics and services.",
  },
  {
    question: "How can I contact support?",
    answer: "You can reach out to our support team via email at support@example.com.",
  },
  {
    question: "Is there a refund policy?",
    answer: "Yes, If you are not satisfied then it is refunded.",
  },
  {
    question: "Is the medical advice provided by this chatbot accurate?",
    answer:
      "Our chatbot is built using up-to-date, evidence-based medical information curated by healthcare experts. However, while we strive for accuracy, it should not replace professional medical advice.",
  },
  {
    question: "Can this chatbot replace a consultation with a doctor?",
    answer:
      "No. Our chatbot is intended to assist with general health information and guidance. It is not a substitute for a personalized evaluation by a qualified healthcare professional.",
  },
  {
    question: "How do you protect my personal health data?",
    answer:
      "We adhere to strict privacy standards such as the GDPR for European users and HIPAA in the US. Data is encrypted, anonymized when possible, and only used for legitimate healthcare purposes.",
  },
  {
    question: "What should I do in an emergency?",
    answer:
      "Our service is not designed for emergency situations. If you’re experiencing a medical emergency, please call your local emergency services immediately.",
  },
  {
    question: "How frequently is the medical content updated?",
    answer:
      "Our medical content is regularly reviewed and updated by a team of medical professionals and AI experts to ensure the latest guidelines and research are incorporated.",
  },
  {
    question: "Who develops and maintains this chatbot?",
    answer:
      "Our chatbot is developed by a collaborative team of healthcare professionals, data scientists, and AI engineers, ensuring that both medical expertise and technical robustness guide its operation.",
  },
  {
    question: "Can I trust the chatbot with my sensitive information?",
    answer:
      "We take data security very seriously. By following robust encryption protocols and strict regulatory compliance measures, we ensure that your data is securely handled and remains confidential.",
  },
  {
    question: "What if I disagree with the chatbot's advice?",
    answer:
      "We recommend using the chatbot as a supplementary resource. If you’re uncertain or disagree with any advice provided, please consult your doctor for further evaluation.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full min-h-screen bg-white flex justify-center items-center p-6">
      <div className="max-w-3xl w-full bg-green-50 shadow-[6px_6px_12px_#c2eac2,-6px_-6px_12px_#ffffff] rounded-3xl p-10">
        <h2 className="text-3xl font-bold text-green-800 mb-8 text-center">
          🌿 Frequently Asked Questions
        </h2>
        <div className="space-y-5">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl p-5 bg-green-100 shadow-[4px_4px_10px_#c2eac2,-4px_-4px_10px_#ffffff] transition-all duration-300 hover:scale-[1.02] hover:shadow-[6px_6px_12px_#c2eac2,-6px_-6px_12px_#ffffff]"
            >
              <button
                className="w-full text-left flex justify-between items-center text-lg font-semibold text-green-700"
                onClick={() => toggleFaq(index)}
              >
                {item.question}
                <span className="text-green-600">
                  {openIndex === index ? "▲" : "▼"}
                </span>
              </button>
              {openIndex === index && (
                <p className="mt-3 text-green-800 leading-relaxed">
                  {item.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
