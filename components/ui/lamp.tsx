'use client';
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

export function LampDemo() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
      >
      </motion.h1>
    </LampContainer>
  );
}

export const LampContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "relative flex min-h-screen flex-col items-center justify-center overflow-hidden w-full rounded-md -mb-14 z-0",
        className
      )}
    >
      <div className="relative flex w-full flex-1 items-center justify-center isolate z-0">
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto right-1/2 h-36 md:h-72 overflow-visible w-[15rem] md:w-[30rem] bg-gradient-conic from-purple via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
        >
          <div className="absolute w-full left-0 bg-slate-950 h-28 md:h-56 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="absolute w-28 md:w-56 h-full left-0 bg-slate-950 bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto left-1/2 h-36 md:h-72 w-[15rem] md:w-[30rem] bg-gradient-conic from-transparent via-transparent to-purple text-white [--conic-position:from_290deg_at_center_top]"
        >
          <div className="absolute w-28 md:w-56 h-full right-0 bg-slate-950 bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="absolute w-full right-0 bg-slate-950 h-28 md:h-56 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>
        <div className="absolute top-1/2 h-36 md:h-72 w-full translate-y-12 md:translate-y-24 scale-x-150 bg-slate-950 blur-xl md:blur-2xl"></div>
        <div className="absolute top-1/2 z-50 h-36 md:h-72 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
        <div className="absolute inset-auto z-50 h-24 md:h-48 w-[14rem] md:w-[28rem] -translate-y-1/2 rounded-full bg-purple opacity-50 blur-3xl"></div>
        <motion.div
          initial={{ width: "8rem" }}
          whileInView={{ width: "16rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-30 h-24 md:h-48 w-32 md:w-64 -translate-y-[4rem] md:-translate-y-[8rem] rounded-full bg-purple blur-xl md:blur-2xl"
        ></motion.div>
        <motion.div
          initial={{ width: "15rem" }}
          whileInView={{ width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-50 h-0.5 w-[20rem] md:w-[30rem] -translate-y-[4.5rem] md:-translate-y-[9rem] bg-purple"
        ></motion.div>
        <div className="absolute inset-auto z-40 h-28 md:h-56 w-full -translate-y-[8rem] md:-translate-y-[16rem] bg-slate-950"></div>
      </div>
      <div className="relative z-50 flex -translate-y-36 md:-translate-y-72 flex-col items-center px-5">
        {children}
      </div>
    </div>
  );
};
