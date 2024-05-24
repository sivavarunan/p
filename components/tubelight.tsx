'use client'
import React from 'react'
import { LampContainer } from './ui/lamp'
import { motion } from "framer-motion";
import { FlipWordsDemo } from "@/components/flip";

export function LampDemo() {
  return (
    <div className="flex flex-col items-center justify-center mt-5 p-4"id="about">
      <LampContainer className="w-full max-w-4xl px-4 mt-3">
        <motion.div
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="text-left w-full"
        >
          <div className="">
          <FlipWordsDemo />
          </div>
        </motion.div>
      </LampContainer>
        <h1 className="heading mt-5">
            More about {' '}
            <span className='text-purple'>Me
            </span>
        </h1>
    </div>
    
  )
}
