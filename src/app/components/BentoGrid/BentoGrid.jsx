"use client";
import { cn } from "../../utils/cn";

export const BentoGrid = ({ className, children }) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-2 p-4 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl hover:shadow-purple-800 transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-white dark:border-white/[0.2] bg-slate-900 border border-transparent justify-between flex flex-col space-y-4",
        className
      )}
    >
      {header}
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        {icon}
        <div className="font-sans font-bold text-xl text-slate-100 dark:text-slate-200 mb-2 mt-2">
          {title}
        </div>
        <div className="font-sans font-normal text-slate-300 text-base dark:text-slate-300">
          {description}
        </div>
      </div>
    </div>
  );
};
