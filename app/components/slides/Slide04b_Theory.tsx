import React from "react";
import { motion } from "framer-motion";
import { Database, GitCommit, LayoutGrid } from "lucide-react";

export default function Slide04b_Theory() {
  const theories = [
    {
      id: 1,
      name: "Sistem Informasi",
      desc: "Sistem informasi merupakan sekumpulan komponen yang saling berinteraksi untuk mengolah data menjadi informasi yang berguna dalam mendukung aktivitas dan pengambilan keputusan.",
      icon: <Database className="text-blue-400" size={24} />,
    },
    {
      id: 2,
      name: "Refaktorisasi Perangkat Lunak",
      desc: "Refaktorisasi adalah proses perbaikan struktur internal perangkat lunak tanpa mengubah fungsionalitas sistem, dengan tujuan meningkatkan kualitas, keterbacaan, dan kemudahan pemeliharaan.",
      icon: <GitCommit className="text-yellow-400" size={24} />,
    },
    {
      id: 3,
      name: "Arsitektur Berbasis Komponen",
      desc: "Arsitektur berbasis komponen menekankan pemisahan sistem ke dalam bagian-bagian modular yang independen, sehingga mendukung efisiensi pengembangan dan keberlanjutan sistem.",
      icon: <LayoutGrid className="text-green-400" size={24} />,
    },
  ];

  return (
    <div className="w-full h-full bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-white p-12 flex flex-col">
      {/* Header */}
      <div className="flex items-end justify-between mb-8 border-b border-zinc-200 dark:border-zinc-800 pb-6">
        <h2 className="text-5xl font-bold uppercase tracking-tight">
          Landasan Teoretis Penelitian
        </h2>
        <div className="text-6xl font-black text-zinc-200 dark:text-zinc-800">
          04b.
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        {theories.map((theory, index) => (
          <motion.div
            key={theory.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + index * 0.15 }}
            className="h-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-8 rounded-3xl flex flex-col hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors duration-300"
          >
            {/* ID & Icon */}
            <div className="flex justify-between items-start mb-6">
              <div className="w-12 h-12 bg-zinc-100 dark:bg-zinc-800 rounded-xl flex items-center justify-center border border-zinc-200 dark:border-zinc-700">
                {theory.icon}
              </div>
              <span className="text-4xl font-black text-zinc-100 dark:text-zinc-800">
                0{theory.id}
              </span>
            </div>

            {/* Content */}
            <h3 className="text-2xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
              {theory.name}
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              {theory.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
