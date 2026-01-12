import React from "react";
import { motion } from "framer-motion";
import { ScanSearch, Server, Monitor, Gauge } from "lucide-react";

export default function Slide07_Scope() {
  const scopes = [
    {
      icon: <Monitor className="text-blue-400" size={32} />,
      title: "Presentation Layer",
      desc: "Penelitian difokuskan pada penguatan Lapisan Presentasi dan Interaktivitas Pengguna dalam arsitektur sistem.",
    },
    {
      icon: <Server className="text-zinc-600" size={32} />,
      title: "Decoupled Backend",
      desc: "Menggunakan pendekatan Decoupled Architecture, memanfaatkan API/Backend yang sudah tersedia.",
      isNegative: true,
    },
    {
      icon: <Gauge className="text-green-400" size={32} />,
      title: "Metrik Evaluasi",
      desc: "Evaluasi difokuskan pada tiga aspek utama: Kinerja, Struktur Arsitektur, dan Maintainability.",
    },
    {
      icon: <ScanSearch className="text-yellow-400" size={32} />,
      title: "Scope Area",
      desc: "Penelitian terbatas pada modul-modul kritis dan halaman utama tertentu dalam sistem.",
    },
  ];

  return (
    <div className="w-full h-full bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-white p-12 flex flex-col">
      {/* Header */}
      <div className="flex items-end justify-between mb-12 border-b border-zinc-200 dark:border-zinc-800 pb-6">
        <h2 className="text-5xl font-bold uppercase tracking-tight">
          Batasan Masalah
        </h2>
        <div className="text-6xl font-black text-zinc-200 dark:text-zinc-800">
          07.
        </div>
      </div>

      {/* Grid Content */}
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
        {scopes.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 + index * 0.1 }}
            className={`p-8 rounded-3xl border ${
              item.isNegative
                ? "bg-zinc-100 dark:bg-zinc-900/30 border-zinc-200 dark:border-zinc-800/50 opacity-60 hover:opacity-100 transition-opacity"
                : "bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-800/80 transition-colors"
            } flex flex-col justify-between group`}
          >
            <div>
              <div className="flex justify-between items-start mb-6">
                <div className="p-4 bg-zinc-100 dark:bg-zinc-950 rounded-2xl border border-zinc-300 dark:border-zinc-800 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                {item.isNegative && (
                  <span className="px-3 py-1 bg-zinc-200 dark:bg-zinc-800 rounded-full text-[10px] uppercase tracking-widest text-zinc-600 dark:text-zinc-400">
                    Out of Scope
                  </span>
                )}
              </div>

              <h3
                className={`text-2xl font-bold mb-4 ${
                  item.isNegative
                    ? "text-zinc-500 dark:text-zinc-400"
                    : "text-zinc-900 dark:text-zinc-100"
                }`}
              >
                {item.title}
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed">
                {item.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
