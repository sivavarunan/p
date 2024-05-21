import React from "react";
import { FlipWords } from "./ui/flipWords";

export function FlipWordsDemo() {
  const words = ["better", "cute", "beautiful", "modern", "efficient"];

  return (
    <div
      className="border border-black-200 p-5 rounded-3xl"
      style={{
        background: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
        boxShadow: "0 0 20px 10px rgba(128, 0, 128, 0.2)"
      }}
    >
      <div className="h-auto flex flex-col justify-center sm:px-8 px-5">
        <div className="flex flex-col sm:flex-row items-start sm:items-center">
          <div className="sm:w-2/3 text-xl sm:text-3xl font-bold text-neutral-100 dark:text-neutral-400 sm:mb-0 mb-4">
             <FlipWords words={words} /> <br />
            <span className="text-lg sm:text-2xl">A bit about me</span>
            <p className="text-base sm:text-xl mt-2">
              I am a full-stack developer specializing in building (and occasionally designing) 
              exceptional digital experiences. Currently, I'm focused on building responsive full
              stack web applications along with continuously progressing with multiple Java projects.
            </p>
          </div>
          <div className="sm:w-1/3 flex justify-end mt-4 sm:mt-0">
            <div
              className="p-1 border-1 rounded-3xl shadow-xl"
              style={{
                boxShadow: "0 0 15px 5px rgba(128, 0, 128, 0.2)"
              }}
            >
              <img
                className="rounded-3xl object-cover object-center w-24 h-24 sm:w-32 sm:h-32"
                src="siva.jpg"
                alt="Build Icon"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
