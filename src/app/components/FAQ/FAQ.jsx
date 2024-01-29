// FAQ.js
import React, { useState } from "react";
import { motion } from "framer-motion";

const FAQItem = ({ question, answer, isOpen, toggleFAQ, className }) => {
  return (
    <motion.div layout className={`mb-4 `}>
      <motion.div
        onClick={toggleFAQ}
        className={`flex items-center justify-between ${className} p-4 rounded-md cursor-pointer hover:bg-gray-200 transition duration-300`}
      >
        <h3 className="text-lg font-semibold">{question}</h3>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          className="transform transition-transform"
        >
          &#9660;
        </motion.span>
      </motion.div>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <div className="p-4 bg-white rounded-md">
          <p>{answer}</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

const FAQ = ({ faqData, className }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      {faqData.map((item, index) => (
        <FAQItem
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={index === openIndex}
          toggleFAQ={() => toggleFAQ(index)}
          className={className}
        />
      ))}
    </div>
  );
};

export default FAQ;
