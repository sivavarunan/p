'use client';
import React from 'react';
import { motion } from "framer-motion";
import { FlipWords } from "./ui/flipWords";

export function About() {
  const words = ["better", "modern", "elegant"];

  return (
    <div className='pt-40'>
      <div className="flex flex-col items-center justify-center pb-20 pt-36 px-4" id="about">
        <motion.div
          initial={{ opacity: 0.5, y: -40 }}
          whileInView={{ opacity: 1, y: -200 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="text-left w-full max-w-4xl"
        >
          <div
            className="border border-black-200 px-30 py-14 rounded-2xl"
            style={{
              background: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              boxShadow: "0 0 20px 10px rgba(152, 97, 250, 0.5)",
            }}
          >
            <div className="h-auto flex flex-col justify-center sm:px-8 px-5">
              <div className="flex flex-col sm:flex-row items-start sm:items-center">
                <div className="sm:w-2/3 text-xl sm:text-3xl text-center font-bold text-neutral-100 dark:text-neutral-400 sm:mb-0 mb-4">
                  <span className="text-2xl text-center sm:text-2xl">A Bit About <span className="text-purple">Me</span></span>
                  <div className="text-center text-lg mt-2 sm:text-xl">
                    I am a full-stack developer specializing in building (and occasionally designing)
                    <FlipWords words={words} /> digital experiences. Currently, I am focused on building responsive full
                    stack web applications along with continuously progressing with multiple Java projects.
                  </div>
                </div>
                <div className="sm:w-1/3 flex justify-center ml-32 mt-4 sm:mt-0">
                  <div
                    className=" border-1 rounded-full shadow-xl"
                    style={{ boxShadow: "0 0 15px 5px rgba(152, 97, 250, 0.24)" }}
                  >
                    <img
                      className="rounded-full object-cover object-center w-24 h-24 sm:w-32 sm:h-32"
                      src="siva.jpg"
                      alt="Profile Picture"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        <h1 className="heading mt-5">
          More about <span className="text-purple">Me</span>
        </h1>
      </div>
    </div>
  );
}
