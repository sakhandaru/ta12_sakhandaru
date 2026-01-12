import React from "react";
import { motion } from "framer-motion";
import { HelpCircle, TrendingUp, Zap, Box } from "lucide-react";

export default function Slide04_Problem() {
  const problems = [
    {
      id: 1,
      icon: <Zap className="text-yellow-400" size={24} />,
      question:
        "Bagaimana penerapan refaktorisasi berbasis komponen modular data meningkatkan kinerja website TVKU?",
      focus: "Kinerja",
    },
    {
      id: 2,
      icon: <Box className="text-blue-400" size={24} />,
      question:
        "Bagaimana refaktorisasi tersebut dapat meningkatkan kualitas Arsitektur Client-Side pada sistem?",
      focus: "Kualitas Arsitektur",
    },
    {
      id: 3,
      icon: <TrendingUp className="text-green-400" size={24} />,
      question:
        "Bagaimana dampak refaktorisasi terhadap efisiensi pengembangan dan pemeliharaan sistem?",
      focus: "Efisiensi",
    },
  ];

  return (
    <div className="w-full h-full bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-white p-12 flex flex-col">
      {/* Header */}
      <div className="flex items-end justify-between mb-8 border-b border-zinc-200 dark:border-zinc-800 pb-6">
        <h2 className="text-5xl font-bold uppercase tracking-tight">
          Rumusan Masalah
        </h2>
        <div className="text-6xl font-black text-zinc-200 dark:text-zinc-800">
          04.
        </div>
      </div>

      {/* Content Grid */}
      <div className="flex-1 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        {/* Visual/Context (Left) */}
        <div className="md:col-span-4 h-full flex flex-col justify-center gap-6">
          <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-8 rounded-3xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-32 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-3xl -mr-16 -mt-16"></div>
            <h3 className="text-3xl font-bold leading-tight mb-4">
              Fokus
              <br />
              Penelitian
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400 text-lg">
              Penelitian ini berfokus pada transisi dari sistem lama ke
              arsitektur modular untuk menjawab tantangan kinerja dan
              skalabilitas.
            </p>
            <div className="mt-8 flex justify-end">
              <HelpCircle
                size={64}
                className="text-zinc-200 dark:text-zinc-800"
              />
            </div>
          </div>
        </div>

        {/* Problems List (Right) */}
        <div className="md:col-span-8 flex flex-col gap-6">
          {problems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="group bg-white dark:bg-zinc-900/50 hover:bg-zinc-50 dark:hover:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 p-6 rounded-2xl transition-all duration-300 flex items-center gap-6"
            >
              {/* Number & Icon */}
              <div className="w-16 h-16 bg-zinc-100 dark:bg-zinc-950 rounded-xl border border-zinc-300 dark:border-zinc-800 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                {item.icon}
              </div>

              {/* Text */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-mono text-zinc-500 border border-zinc-300 dark:border-zinc-800 px-2 py-0.5 rounded-full">
                    RQ-0{item.id}
                  </span>
                  <span className="text-xs uppercase tracking-wider font-semibold text-zinc-500 dark:text-zinc-400">
                    {item.focus}
                  </span>
                </div>
                <p className="text-xl md:text-2xl font-medium text-zinc-900 dark:text-zinc-200 leading-snug">
                  {item.question}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
