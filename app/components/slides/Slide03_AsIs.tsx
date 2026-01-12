import React from "react";
import { motion } from "framer-motion";
import { LayoutGrid, AlertTriangle, GitCommit } from "lucide-react";

export default function Slide03_AsIs() {
  return (
    <div className="w-full h-full bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-white p-12 flex flex-col">
      {/* Header */}
      <div className="flex items-end justify-between mb-8 border-b border-zinc-200 dark:border-zinc-800 pb-6">
        <h2 className="text-5xl font-bold uppercase tracking-tight">
          Kondisi Sistem (As-Is)
        </h2>
        <div className="text-6xl font-black text-zinc-200 dark:text-zinc-800">
          03.
        </div>
      </div>

      {/* Grid Content */}
      <div className="flex-1 grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Main Content (Left) */}
        <div className="md:col-span-6 flex flex-col gap-6">
          <div className="prose prose-invert max-w-none">
            <p className="text-xl text-zinc-700 dark:text-zinc-300 leading-relaxed">
              Berdasarkan hasil observasi, website TVKU telah berfungsi sebagai
              media informasi, namun memiliki keterbatasan mendasar pada
              struktur dan kinerja.
            </p>
          </div>

          {/* Conditions List */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-start gap-4 p-4 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800"
            >
              <div className="p-2 bg-zinc-100 dark:bg-zinc-800 rounded-lg">
                <LayoutGrid
                  size={20}
                  className="text-zinc-500 dark:text-zinc-400"
                />
              </div>
              <div>
                <h4 className="font-bold text-zinc-900 dark:text-zinc-200">
                  Struktur Tidak Terstandarisasi
                </h4>
                <p className="text-sm text-zinc-500">
                  Antarmuka bersifat repetitif dan tidak memiliki pola yang
                  konsisten.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="flex items-start gap-4 p-4 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800"
            >
              <div className="p-2 bg-zinc-100 dark:bg-zinc-800 rounded-lg">
                <AlertTriangle
                  size={20}
                  className="text-zinc-500 dark:text-zinc-400"
                />
              </div>
              <div>
                <h4 className="font-bold text-zinc-900 dark:text-zinc-200">
                  Kinerja Bervariasi
                </h4>
                <p className="text-sm text-zinc-500">
                  Performansi menurun seiring bertambahnya kompleksitas
                  tampilan.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="flex items-start gap-4 p-4 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800"
            >
              <div className="p-2 bg-zinc-100 dark:bg-zinc-800 rounded-lg">
                <GitCommit
                  size={20}
                  className="text-zinc-500 dark:text-zinc-400"
                />
              </div>
              <div>
                <h4 className="font-bold text-zinc-900 dark:text-zinc-200">
                  Ketergantungan Tinggi
                </h4>
                <p className="text-sm text-zinc-500">
                  Perubahan satu bagian berpotensi memengaruhi bagian lain
                  (Tightly Coupled).
                </p>
              </div>
            </motion.div>
          </div>

          <div className="mt-auto p-4 border-l-2 border-red-500 bg-red-900/10">
            <p className="text-red-200 italic">
              "Kondisi ini berpotensi menghambat pengelolaan dan pengembangan
              sistem ke depan."
            </p>
          </div>
        </div>

        {/* Visual Area (Right) - "Random Boxes" Illustration */}
        <div className="md:col-span-6 bg-zinc-100 dark:bg-zinc-900/50 rounded-3xl border border-zinc-200 dark:border-zinc-800 overflow-hidden relative flex items-center justify-center">
          <div className="absolute inset-0 bg-grid-zinc-200/50 dark:bg-grid-zinc-800/50 [mask-image:linear-gradient(to_bottom,transparent,black)]"></div>

          {/* The "Messy" Structure Visualization */}
          <div className="relative w-full h-full p-8">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-80 h-80">
                {/* Connecting Lines (Messy Dependencies) */}
                <svg
                  className="absolute inset-0 w-full h-full text-zinc-300 dark:text-zinc-700 pointer-events-none"
                  style={{ strokeWidth: 1 }}
                >
                  <motion.path
                    d="M40,40 L200,80"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    stroke="currentColor"
                    strokeDasharray="4 4"
                  />
                  <motion.path
                    d="M200,80 L80,240"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1, delay: 0.7 }}
                    stroke="currentColor"
                    strokeDasharray="4 4"
                  />
                  <motion.path
                    d="M80,240 L240,200"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1, delay: 0.9 }}
                    stroke="currentColor"
                  />
                  <motion.path
                    d="M240,200 L40,40"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1, delay: 1.1 }}
                    stroke="currentColor"
                    strokeDasharray="4 4"
                  />
                  <motion.path
                    d="M150,150 L280,60"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1, delay: 1.3 }}
                    stroke="currentColor"
                  />
                </svg>

                {/* Random Boxes */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5, type: "spring" }}
                  className="absolute top-0 left-0 w-24 h-24 bg-white dark:bg-zinc-800 border-2 border-zinc-300 dark:border-zinc-600 rounded-lg flex items-center justify-center z-10"
                >
                  <span className="text-xs text-zinc-500 dark:text-zinc-400 font-mono">
                    Module A
                  </span>
                </motion.div>

                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.6, type: "spring" }}
                  className="absolute top-10 right-10 w-32 h-20 bg-white dark:bg-zinc-800 border-2 border-zinc-300 dark:border-zinc-600 rounded-lg flex items-center justify-center z-20 shadow-xl"
                >
                  <span className="text-xs text-zinc-500 dark:text-zinc-400 font-mono">
                    Component B
                  </span>
                </motion.div>

                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.7, type: "spring" }}
                  className="absolute bottom-10 left-10 w-28 h-28 bg-white dark:bg-zinc-800 border-2 border-zinc-300 dark:border-zinc-600 rounded-lg flex items-center justify-center z-10"
                >
                  <span className="text-xs text-zinc-500 dark:text-zinc-400 font-mono">
                    Logic C
                  </span>
                </motion.div>

                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.8, type: "spring" }}
                  className="absolute bottom-20 right-0 w-24 h-24 bg-white dark:bg-zinc-800 border-2 border-zinc-300 dark:border-zinc-600 rounded-lg flex items-center justify-center z-30 shadow-2xl"
                >
                  <span className="text-xs text-zinc-500 dark:text-zinc-400 font-mono">
                    Style D
                  </span>
                </motion.div>

                {/* Central Conflict */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.5 }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-red-900/80 rounded-full blur-xl z-0"
                />
              </div>
            </div>
            <div className="absolute bottom-6 right-6 text-right">
              <p className="text-xs text-zinc-500 uppercase tracking-widest mb-1">
                Visual Insight
              </p>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 font-medium">
                Ilustrasi Struktur Acak &<br />
                Non-Modular
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
