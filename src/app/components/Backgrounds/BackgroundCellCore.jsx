"use client";
import { cn } from "../../utils/cn";
import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const BackgroundCellCore = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const ref = useRef(null);

  const handleMouseMove = (event) => {
    const rect = ref.current && ref.current.getBoundingClientRect();
    setMousePosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  const size = 300;
  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      className="h-full bg-slate-950 relative inset-0"
    >
      <div className="relative h-[20rem] inset-y-0  overflow-hidden">
        <div className="absolute h-full w-full pointer-events-none -bottom-2  bg-slate-950 [mask-image:linear-gradient(to_bottom,transparent,black)]"></div>
        <div
          className="absolute inset-0 z-20 bg-transparent"
          style={{
            maskImage: `radial-gradient(
                  ${size / 4}px circle at center,
                 white, transparent
                )`,
            WebkitMaskImage: `radial-gradient(
                ${size / 4}px circle at center,
                white, transparent
              )`,
            WebkitMaskPosition: `${mousePosition.x - size / 2}px ${
              mousePosition.y - size / 2
            }px`,
            WebkitMaskSize: `${size}px`,
            maskSize: `${size}px`,
            pointerEvents: "none",
            maskRepeat: "no-repeat",
            WebkitMaskRepeat: "no-repeat",
          }}
        >
          <Pattern cellClassName="border-purple-600 relative z-[100]" />
        </div>
        <Pattern className="opacity-[0.8]" cellClassName="border-neutral-700" />
      </div>
    </div>
  );
};

const PatternCell = ({
  rowIdx,
  colIdx,
  onClick,
  cellClassName,
  clickedCell,
}) => {
  const controls = useAnimation();

  useEffect(() => {
    if (clickedCell) {
      const distance = Math.sqrt(
        Math.pow(clickedCell[0] - rowIdx, 2) +
          Math.pow(clickedCell[1] - colIdx, 2)
      );
      controls.start({
        opacity: [0, 1 - distance * 0.1, 0],
        transition: { duration: distance * 0.2 },
      });
    }
  }, [clickedCell]);

  return (
    <div
      className={cn(
        "bg-transparent border-l border-b border-neutral-600",
        cellClassName
      )}
      onClick={onClick}
    >
      <motion.div
        initial={{
          opacity: 0,
        }}
        whileHover={{
          opacity: [0, 1, 0.5],
        }}
        transition={{
          duration: 0.5,
          ease: "backOut",
        }}
        animate={controls}
        className="bg-[rgba(14,165,233,0.15)] h-12 w-12"
      ></motion.div>
    </div>
  );
};

const Pattern = ({ className, cellClassName }) => {
  const x = new Array(47).fill(0);
  const y = new Array(30).fill(0);
  const matrix = x.map((_, i) => y.map((_, j) => [i, j]));
  const [clickedCell, setClickedCell] = useState(null);

  return (
    <div className={cn("flex flex-row  relative z-30", className)}>
      {matrix.map((row, rowIdx) => (
        <div
          key={`matrix-row-${rowIdx}`}
          className="flex flex-col  relative z-20 border-b"
        >
          {row.map((column, colIdx) => (
            <PatternCell
              key={`matrix-col-${colIdx}`}
              rowIdx={rowIdx}
              colIdx={colIdx}
              onClick={() => setClickedCell([rowIdx, colIdx])}
              cellClassName={cellClassName}
              clickedCell={clickedCell}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default BackgroundCellCore;
