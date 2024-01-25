import React from "react";
import { motion } from "framer-motion";

const Step = ({ title, description, icon, position }) => {
  const isLeft = position === "left";

  const stepVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className={`mt-6 text-white sm:mt-0 ${
        isLeft ? "sm:mb-12" : "sm:mb-12 sm:flex-row-reverse"
      }`}
      initial="hidden"
      animate="visible"
      variants={stepVariants}
    >
      <div className="flex flex-col sm:flex-row items-center">
        <div
          className={`flex justify-${
            isLeft ? "start" : "end"
          }  mx-auto items-center`}
        >
          <div className={` sm:w-1/2 ${isLeft ? "sm:pr-8" : "sm:pl-8"}`}>
            <motion.div
              className="p-4 bg-black hover:shadow-xl hover:shadow-purple-500 rounded shadow"
              whileHover={{ scale: 1.05 }}
            >
              <h2 className="font-bold">{title}</h2>
              <p className="text-base">{description}</p>
            </motion.div>
          </div>
        </div>
        <motion.div
          className={`rounded-full bg-purple-500 border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center ${
            isLeft ? "" : "sm:order-1"
          }`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {icon}
        </motion.div>
      </div>
    </motion.div>
  );
};

const DynamicSteps = ({ steps }) => {
  return (
    <div className="py-3 sm:max-w-xl sm:mx-auto w-full px-2 sm:px-0">
      <div className="relative text-gray-700 antialiased">
        <div className="hidden sm:block w-1 bg-purple-300 absolute h-full left-1/2 transform -translate-x-1/2"></div>
        {steps.map((step, index) => (
          <Step
            key={index}
            {...step}
            position={index % 2 === 0 ? "left" : "right"}
          />
        ))}
      </div>
    </div>
  );
};

export default DynamicSteps;
