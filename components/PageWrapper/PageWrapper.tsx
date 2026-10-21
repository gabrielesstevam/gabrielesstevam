"use client";

import { motion } from "framer-motion"
import { main } from "framer-motion/client";
import React from "react";

const pageVariants = {
    initial: { opacity: 1, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
}

const pageTransition = { duration: 0.35, ease: "easeOut" } ;

export function PageWrapper({ children }: { children: React.ReactNode }) {
    return(
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
    )
}