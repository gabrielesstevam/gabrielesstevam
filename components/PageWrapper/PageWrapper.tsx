"use client";

import { motion } from "framer-motion";
import type { Transition, Variants } from "framer-motion";
import React from "react";

const pageVariants: Variants = {
  initial: { opacity: 1, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

const pageTransition: Transition = {
  duration: 0.35,
  ease: "easeOut",
};

export function PageWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.main
      className="page"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={pageTransition}
    >
      {children}
    </motion.main>
  );
}