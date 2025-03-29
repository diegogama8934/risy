"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface TextAnimationProps {
  children: ReactNode;
}

export default function TextAnimation({ children }: TextAnimationProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="inline-block"
    >
      {children}
    </motion.div>
  );
}