"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white flex flex-col items-center justify-center text-center p-4">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="absolute top-4 left-4"
      >
        <Image src="/dog-paw.svg" alt="Dog Paw" width={50} height={50} />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="absolute top-4 right-4"
      >
        <Image src="/dog-paw.svg" alt="Dog Paw" width={50} height={50} />
      </motion.div>
      <motion.h1
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-5xl md:text-7xl font-bold mb-4"
      >
        Welcome to the Dog Talent Show!
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-lg md:text-2xl mb-8"
      >
        Prepare to be amazed by the most talented dogs in the world!
      </motion.p>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="bg-white text-purple-600 font-bold py-3 px-8 rounded-full text-lg"
      >
        Get Your Tickets Now!
      </motion.button>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="absolute bottom-4 left-4"
      >
        <Image src="/dog-paw.svg" alt="Dog Paw" width={50} height={50} />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="absolute bottom-4 right-4"
      >
        <Image src="/dog-paw.svg" alt="Dog Paw" width={50} height={50} />
      </motion.div>
    </div>
  );
}