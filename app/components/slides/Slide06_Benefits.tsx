import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Briefcase, CheckCircle } from "lucide-react";

export default function Slide06_Benefits() {
  const practicalBenefits = [
    "Menjadi acuan pengelolaan dan pengembangan website TVKU",
    "Membantu meningkatkan kinerja dan kemudahan pemeliharaan sistem",
    "Mendukung pengembangan sistem yang lebih efisien dan berkelanjutan",
  ];

  return (
    <div className="w-full h-full bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-white p-12 flex flex-col">
      {/* Header */}
      <div className="flex items-end justify-between mb-8 border-b border-zinc-200 dark:border-zinc-800 pb-6">
        <h2 className="text-5xl font-bold uppercase tracking-tight">
          Manfaat Penelitian
        </h2>
        <div className="text-6xl font-black text-zinc-200 dark:text-zinc-800">
          06.
        </div>
      </div>

      {/* Content Grid */}
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Manfaat Teoretis (Left) */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-8 flex flex-col"
        >
          <div className="w-14 h-14 bg-zinc-100 dark:bg-zinc-800 rounded-2xl flex items-center justify-center mb-6 text-zinc-500 dark:text-zinc-400">
            <BookOpen size={32} />
          </div>
          <h3 className="text-3xl font-bold mb-6 text-zinc-900 dark:text-zinc-100">
            Manfaat Teoretis
          </h3>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Memberikan kontribusi keilmuan di bidang sistem informasi, khususnya
            terkait penerapan{" "}
            <span className="text-zinc-900 dark:text-white font-semibold">
              Modernisasi Arsitektur Web
            </span>{" "}
            untuk meningkatkan kualitas arsitektur sistem.
          </p>

          {/* Decor */}
          <div className="mt-auto pt-12">
            <div className="h-2 w-24 bg-zinc-200 dark:bg-zinc-800 rounded-full">
              <div className="h-full w-1/3 bg-zinc-900 dark:bg-white rounded-full"></div>
            </div>
          </div>
        </motion.div>

        {/* Manfaat Praktis (Right) */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-zinc-900 dark:bg-zinc-100 text-zinc-100 dark:text-zinc-900 rounded-3xl p-8 flex flex-col"
        >
          <div className="w-14 h-14 bg-zinc-800 dark:bg-zinc-200 rounded-2xl flex items-center justify-center mb-6 text-zinc-100 dark:text-zinc-900">
            <Briefcase size={32} />
          </div>
          <h3 className="text-3xl font-bold mb-8">Manfaat Praktis</h3>

          <div className="space-y-6">
            {practicalBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="flex items-start gap-4"
              >
                <CheckCircle
                  size={24}
                  className="shrink-0 mt-1 text-blue-600"
                />
                <p className="text-lg font-medium leading-normal">{benefit}</p>
              </motion.div>
            ))}
          </div>

          {/* Decor */}
          <div className="mt-auto pt-12 flex justify-end">
            <div className="px-4 py-2 bg-zinc-800 dark:bg-white rounded-full text-xs font-bold uppercase tracking-widest border border-zinc-700 dark:border-zinc-200">
              TVKU Case Study
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
