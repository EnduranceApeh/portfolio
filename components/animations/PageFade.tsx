"use client";

import { motion, MotionConfig } from "framer-motion";
import * as React from "react";

export function PageFade({ children }: { children: React.ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="flex-1 w-full"
      >
        {children}
      </motion.div>
    </MotionConfig>
  );
}
