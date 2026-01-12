import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Box, Layers, Play } from "lucide-react";

export default function Slide08_ToBe() {
  return (
    <div className="w-full h-full bg-zinc-950 text-white p-12 flex flex-col">
      {/* Header */}
      <div className="flex items-end justify-between mb-8 border-b border-zinc-800 pb-6">
        <h2 className="text-5xl font-bold uppercase tracking-tight">
          Solusi (To-Be)
        </h2>
        <div className="text-6xl font-black text-zinc-800">08.</div>
      </div>

      {/* Main Layout */}
      <div className="flex-1 grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Left Panel: Text Content */}
        <div className="md:col-span-5 flex flex-col justify-center gap-8">
          <div>
            <h3 className="text-3xl font-bold text-white mb-4 leading-tight">
              Penerapan Refaktorisasi
              <br />
              <span className="text-blue-500">Berbasis Komponen Modular</span>
            </h3>
            <p className="text-zinc-400 text-lg leading-relaxed">
              Penelitian ini mengusulkan transformasi sistem monolith yang kaku
              menjadi arsitektur modular yang fleksibel untuk meningkatkan
              efisiensi jangka panjang.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-4 p-4 bg-zinc-900 border border-zinc-800 rounded-2xl">
              <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
                <Box size={20} />
              </div>
              <div>
                <h4 className="font-bold text-zinc-200">
                  Struktur Komponen Modular
                </h4>
                <p className="text-sm text-zinc-500">
                  Antarmuka disusun dari unit-unit kecil yang independen dan
                  dapat digunakan kembali.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-zinc-900 border border-zinc-800 rounded-2xl">
              <div className="p-2 bg-green-500/10 rounded-lg text-green-400">
                <Play size={20} />
              </div>
              <div>
                <h4 className="font-bold text-zinc-200">
                  Refaktorisasi Bertahap
                </h4>
                <p className="text-sm text-zinc-500">
                  Proses perbaikan dilakukan iteratif tanpa mengganggu
                  fungsionalitas utama.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Panel: Visual Comparison */}
        <div className="md:col-span-7 bg-zinc-900 rounded-3xl border border-zinc-800 p-8 flex flex-col relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-zinc-800/30 [mask-image:linear-gradient(to_bottom,transparent,black)]"></div>

          {/* Header Label for Visual */}
          <div className="flex justify-between items-center mb-8 relative z-10">
            <span className="text-xs font-mono uppercase text-zinc-500 tracking-widest">
              Visual Concept
            </span>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-red-400">As-Is</span>
              <ArrowRight size={16} className="text-zinc-600" />
              <span className="text-xs font-bold text-green-400">To-Be</span>
            </div>
          </div>

          {/* The Visual Animation */}
          <div className="flex-1 flex items-center justify-center gap-12 relative z-10">
            {/* As-Is: Chaos */}
            <div className="w-48 h-48 relative opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
              <div className="absolute inset-0 border-2 border-dashed border-red-500/30 rounded-2xl"></div>
              {/* Random Scattered Boxes */}
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: 5 }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                className="absolute top-4 left-4 w-16 h-12 bg-zinc-800 border border-zinc-700"
              ></motion.div>
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: -5 }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                className="absolute bottom-6 right-8 w-12 h-16 bg-zinc-800 border border-zinc-700"
              ></motion.div>
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: 10 }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                className="absolute top-12 right-4 w-14 h-14 bg-zinc-800 border border-zinc-700"
              ></motion.div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-red-500 font-bold bg-zinc-950 px-2">
                  Monolith
                </span>
              </div>
            </div>

            {/* Transition Arrow */}
            <motion.div
              animate={{ x: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ArrowRight size={32} className="text-zinc-600" />
            </motion.div>

            {/* To-Be: Order */}
            <div className="w-48 h-48 relative">
              <div className="absolute inset-0 border-2 border-green-500/30 rounded-2xl bg-green-500/5"></div>
              {/* Organized Grid */}
              <div className="absolute inset-4 grid grid-cols-2 gap-2">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5 }}
                  className="bg-zinc-800 border border-green-500/50 rounded-lg flex items-center justify-center"
                >
                  <Box size={16} className="text-green-500" />
                </motion.div>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.6 }}
                  className="bg-zinc-800 border border-green-500/50 rounded-lg flex items-center justify-center"
                >
                  <Box size={16} className="text-green-500" />
                </motion.div>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.7 }}
                  className="bg-zinc-800 border border-green-500/50 rounded-lg flex items-center justify-center"
                >
                  <Box size={16} className="text-green-500" />
                </motion.div>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.8 }}
                  className="bg-zinc-800 border border-green-500/50 rounded-lg flex items-center justify-center"
                >
                  <Box size={16} className="text-green-500" />
                </motion.div>
              </div>
              <div className="absolute -bottom-8 left-0 right-0 text-center">
                <span className="text-green-500 text-sm font-bold bg-zinc-950 px-2">
                  Modular
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
