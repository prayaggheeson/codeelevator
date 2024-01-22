import React, { useEffect, useContext, useRef, useState } from "react";
import { motion } from "framer-motion";

const Marquee = () => {
  const [textWidth, setTextWidth] = useState(0);
  const text = `✨ Get yout Blackchian App developed by our expert at Code Elevator `;
  const repeatTimes = 50;
  const repeatedText = Array(repeatTimes).fill(text).join(" ");

  const textRef = useRef(null);

  useEffect(() => {
    if (textRef.current) {
      setTextWidth(textRef.current.offsetWidth);
    }
  }, [textRef]);

  const tickerVariants = {
    animate: {
      x: [0, -textWidth],
      transition: {
        x: {
          duration: 220,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
        },
      },
    },
  };

  return (
    <div className="overflow-hidden whitespace-nowrap w-full flex">
      <motion.div
        className={` inline-block text-[3rem]`}
        variants={tickerVariants}
        initial="animate"
        animate="animate"
        ref={textRef}
      >
        {repeatedText}
      </motion.div>
      <motion.div
        className={`inline-block text-[3rem]`}
        variants={tickerVariants}
        initial="animate"
        animate="animate"
      >
        {repeatedText}
      </motion.div>
    </div>
  );
};

export default Marquee;
