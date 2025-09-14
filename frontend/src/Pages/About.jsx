import React from "react";

const AboutUs = () => {
  return (
    <section className="bg-[#f9fefb] py-16 px-6">
      <div className="container mx-auto max-w-6xl text-center">
        <h1 className="text-4xl font-bold text-[#00695c] mb-6 drop-shadow-md">
          About Us
        </h1>
        <p className="text-lg text-gray-700 mb-12 leading-relaxed max-w-3xl mx-auto">
          Our platform is built on the belief that accurate, up-to-date health
          information empowers patients and improves healthcare outcomes. By
          integrating state-of-the-art artificial intelligence with deep
          insights from clinical research, we provide reliable, evidence-based
          guidance for everyday health questions.
        </p>
      </div>

      {/* Reusable Section */}
      {[
        {
          title: "Our Medical Board",
          content:
            "Our Medical Board is a dedicated panel of board-certified physicians, clinical researchers, and healthcare experts from diverse specialties. They rigorously evaluate all medical content to ensure accuracy and compliance with the latest clinical standards. Their oversight builds trust by guaranteeing that our chatbot delivers reliable, safe, and ethically sound guidance.",
        },
        {
          title: "Careers",
          content:
            "We are always on the lookout for passionate, innovative professionals who want to transform digital health. Our team includes AI developers, data scientists, engineers, and clinical researchers—all working to bridge the gap between cutting-edge technology and patient-centered care. If you’re ready to make an impact, explore career opportunities with us.",
          button: { text: "Join Our Team", link: "/careers" },
        },
        {
          title: "Press & Media",
          content:
            "Our work in medical AI has been featured in leading industry publications, research journals, and media outlets. Stay updated with our latest news, innovations, and collaborations in the healthcare space.",
          button: { text: "Read More", link: "/press" },
        },
      ].map((section, idx) => (
        <div
          key={idx}
          className="bg-[#e9f9f1] py-12 px-6 rounded-3xl shadow-[8px_8px_20px_rgba(0,0,0,0.1),-6px_-6px_16px_rgba(255,255,255,0.8)] max-w-4xl mx-auto mt-12 border border-[#b2dfdb]"
        >
          <h2 className="text-3xl font-semibold text-center text-[#00695c] mb-6 drop-shadow-sm">
            {section.title}
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
            {section.content}
          </p>

          {section.button && (
            <div className="text-center mt-6">
              <a
                href={section.button.link}
                className="bg-[#a5d6a7] text-[#004d40] px-8 py-3 rounded-full text-lg font-semibold shadow-[4px_4px_12px_rgba(0,0,0,0.15),-4px_-4px_12px_rgba(255,255,255,0.9)] hover:scale-105 transition transform"
              >
                {section.button.text}
              </a>
            </div>
          )}
        </div>
      ))}
    </section>
  );
};

export default AboutUs;
