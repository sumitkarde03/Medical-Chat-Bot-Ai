import React from "react";

const Pricing = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-gray-800 mb-6">
          Pricing Plans
        </h2>
        <p className="text-lg text-gray-600 mb-12">
          Choose the plan that best fits your needs.
        </p>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6">
          {/* Free Plan */}
          <div className="bg-white p-8 rounded-2xl shadow-lg text-center border border-gray-200 transition transform hover:scale-105 hover:shadow-xl hover:border-green-500">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Free Plan
            </h3>
            <p className="text-gray-600 mb-6">
              Get AI-powered basic medical assistance for free.
            </p>
            <ul className="text-gray-700 space-y-2 mb-6">
              <li>✔ Symptom Checker</li>
              <li>✔ General Health Tips</li>
              <li>✔ AI Chatbot Support</li>
            </ul>
            <button className="bg-green-600 text-white py-2 px-6 rounded-lg font-semibold hover:bg-green-700 transition">
              Get Started Free
            </button>
          </div>

          {/* Paid Plan */}
          <div className="bg-white p-8 rounded-2xl shadow-lg text-center border border-gray-200 transition transform hover:scale-105 hover:shadow-xl hover:border-green-500">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Doctor Consultation
            </h3>
            <p className="text-gray-600 mb-6">
              Consult a real doctor anytime at an affordable rate.
            </p>
            <ul className="text-gray-700 space-y-2 mb-6">
              <li>✔ Live Chat with Doctors</li>
              <li>✔ Personalized Health Advice</li>
              <li>✔ 24/7 Expert Support</li>
            </ul>
            <p className="text-xl font-bold text-gray-800 mb-4">₹150/hr</p>
            <button className="bg-green-600 text-white py-2 px-6 rounded-lg font-semibold hover:bg-green-700 transition">
              Book a Doctor
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
