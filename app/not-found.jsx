"use client";
import { motion } from "motion/react"
import Link from "next/link";

export default function NotFound() {
    return (
        <div className="w-full h-[70vh] flex justify-center items-center flex-col gap-5">
            <h1 className="text-7xl lg:text-9xl font-bold w-fit text-center p-5">
                <span className="gradientText w-fit">404</span> <br /> <span className="text-2xl lg:text-7xl gradientText w-fit">PÁGINA NÃO ENCONTRADA</span>
            </h1>

            <Link href="/">
                <motion.p
                    className="bg-linear-to-r from-[#8800f780] to-transparent border border-purple-600 rounded-2xl p-3 text-center text-purple-300"
                    whileHover={{ scale: 1.1, borderColor: "#ffffff", color: "#ffffff" }}
                    whileTap={{ scale: 1.1 }}
                    transition={{ type: "spring" }}
                >
                    Voltar para o início
                </motion.p>
            </Link>

        </div >
    );
}