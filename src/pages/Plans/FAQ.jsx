import { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  // FAQs Data
  const faqs = [
    { question: "Are there any initial or additional costs?", answer: "No, there are no initial costs." },
    { question: "Can I try it out?", answer: "Yes, a free trial is available." },
    { question: "Are there any volume discounts?", answer: "Yes, we offer discounts for large volumes." },
    { question: "How long does it take to start using it?", answer: "You can start immediately after signing up." },
    { question: "Can I change plans during the contract period?", answer: "Yes, you can change plans at any time." },
    { question: "What is the payment cycle and method?", answer: "Payments are monthly, and we accept all major cards." },
    { question: "Does Lark integrate with external applications or systems?", answer: "Yes, Lark integrates with many systems." },
  ];

  return (
    <div className="flex flex-col lg:flex-row max-w-7xl mx-auto p-6 lg:py-12 space-y-8 lg:space-y-0 lg:space-x-12 pl-12 pr-12">
      {/* FAQs Section */}
      <div className="flex-1">
        <h2 className="text-3xl font-bold mb-6">Find the answers that you need</h2>
        <div>
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200">
              <button
                className="w-full flex justify-between items-center py-4 text-left font-medium text-gray-800 hover:text-blue-500"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                {faq.question}
                <span className="transform transition-transform duration-300">
                  {openIndex === index ? "-" : "+"}
                </span>
              </button>
              {openIndex === index && (
                <div className="pb-4 text-gray-600">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Section */}
      <div className="flex-1 bg-blue-50 rounded-xl p-6 lg:p-8 shadow-lg">
        <div className="mb-6">
          <img
            src="https://i.ibb.co.com/LP2bNhs/planfaq.jpg"
            alt="Case Study"
            className="rounded-md shadow-md"
          />
        </div>
        <div className="grid place-items-center">
  <div className="text-center">
    <h3 className="text-3xl font-semibold mb-4">Case Study</h3>
    <p className="text-gray-700 mb-6">
      Still uncertain? Find out how Haidilao significantly boosted operational efficiency by
      25% by switching to Lark.
    </p>
  </div>
</div>

        <div className="flex items-center justify-center">
  <button className="tablet-only text-lg font-semibold rounded-full bg-blue-500 px-4 py-2 text-white hover:bg-blue-700">
    Download Case Study
  </button>
</div>

      </div>
    </div>
  );
};

export default FAQ;
