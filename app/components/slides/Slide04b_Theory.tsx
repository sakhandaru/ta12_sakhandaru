import React from "react";
import { motion } from "framer-motion";
import { Layers, Box, Cpu, GitMerge } from "lucide-react";

export default function Slide04b_Theory() {
  const theories = [
    {
      icon: <GitMerge className="text-blue-500" size={32} />,
      title: "Refaktorisasi & Maintainability",
      desc: "Refaktorisasi meningkatkan maintainability dan kualitas arsitektur tanpa mengubah fungsi sistem (Ferreira et al., 2025).",
    },
    {
      icon: <Box className="text-purple-500" size={32} />,
      title: "Arsitektur Berbasis Komponen",
      desc: "Arsitektur berbasis komponen terbukti mengurangi technical debt dan meningkatkan modularitas aplikasi (Rahman et al., 2023).",
    },
    {
      icon: <Layers className="text-amber-500" size={32} />,
      title: "Dampak Teknologi Legacy",
      desc: "Penggunaan teknologi legacy seperti jQuery berdampak negatif pada performa web, khususnya LCP dan TTI (Serrano et al., 2022; Government Digital Service, 2022).",
    },
    {
      icon: <Cpu className="text-emerald-500" size={32} />,
      title: "Modern Tech Stack",
      desc: "Penerapan React Query, Zustand, dan Tailwind CSS meningkatkan efisiensi pengelolaan data, konsistensi UI, serta performa aplikasi (Tan et al., 2022; Gupta & Sharma, 2024; Rahman et al., 2023).",
    },
  ];

  return (
    <div className="w-full h-full bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-white p-12 flex flex-col">
      {/* Header */}
      <div className="flex items-end justify-between mb-12 border-b border-zinc-200 dark:border-zinc-800 pb-6">
        <h2 className="text-5xl font-bold uppercase tracking-tight">
          Kajian Pustaka
        </h2>
        <div className="text-6xl font-black text-zinc-200 dark:text-zinc-800">
          04.
        </div>
      </div>

      {/* Content Grid */}
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8">
        {theories.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-blue-500/50 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-all duration-300"
          >
            <div className="flex items-start gap-6">
              <div className="p-4 bg-zinc-50 dark:bg-zinc-950 rounded-xl border border-zinc-100 dark:border-zinc-800 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-zinc-900 dark:text-zinc-100 group-hover:text-blue-500 transition-colors">
                  {item.title}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm">
                  {item.desc}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
