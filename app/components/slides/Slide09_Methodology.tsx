import React from "react";
import { motion } from "framer-motion";
import { Search, PenTool, Code, CheckCircle, RefreshCw } from "lucide-react";

export default function Slide09_Methodology() {
  const steps = [
    {
      id: 1,
      name: "Perencanaan",
      desc: "Identifikasi kebutuhan dan modul yang akan direfaktorisasi",
      icon: <Search className="text-blue-400" size={24} />,
      pos: "top",
    },
    {
      id: 2,
      name: "Perancangan",
      desc: "Penyusunan struktur komponen modular",
      icon: <PenTool className="text-yellow-400" size={24} />,
      pos: "right",
    },
    {
      id: 3,
      name: "Implementasi",
      desc: "Penerapan refaktorisasi secara bertahap",
      icon: <Code className="text-green-400" size={24} />,
      pos: "bottom",
    },
    {
      id: 4,
      name: "Pengujian & Evaluasi",
      desc: "Evaluasi kinerja dan kualitas arsitektur sistem",
      icon: <CheckCircle className="text-red-400" size={24} />,
      pos: "left",
    },
  ];

  return (
    <div className="w-full h-full bg-zinc-950 text-white p-6 md:p-12 flex flex-col">
      {/* Header */}
      <div className="flex items-end justify-between mb-6 md:mb-8 border-b border-zinc-800 pb-4 md:pb-6">
        <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight">
          Metode Penelitian
        </h2>
        <div className="text-4xl md:text-6xl font-black text-zinc-800">09.</div>
      </div>

      {/* Main Content */}
      <div className="flex-1 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 overflow-y-auto md:overflow-hidden pb-4 md:pb-0">
        {/* Left: Text Description */}
        <div className="md:col-span-5 flex flex-col justify-center">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/30 border border-blue-800 text-blue-400 text-xs font-bold uppercase tracking-wider mb-4">
              <RefreshCw size={14} className="animate-spin-slow" />
              Iterative Approach
            </div>
            <h3 className="text-3xl font-bold text-white mb-4">
              Extreme Programming (XP)
            </h3>
            <p className="text-zinc-400 text-lg leading-relaxed">
              Penelitian ini menggunakan metode pengembangan perangkat lunak
              Extreme Programming dengan pendekatan siklus yang cepat dan
              berulang.
            </p>
          </div>

          <div className="space-y-4">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 p-4 border border-zinc-800/50 rounded-xl hover:bg-zinc-900 transition-colors"
              >
                <div className="mt-1 opacity-80">{step.icon}</div>
                <div>
                  <h4 className="font-bold text-zinc-200">{step.name}</h4>
                  <p className="text-sm text-zinc-500">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Loop Visualization */}
        <div className="md:col-span-7 relative flex items-center justify-center">
          <div className="relative w-[500px] h-[500px]">
            {/* Connecting Circle/Ring */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none rotate-45">
              <circle
                cx="50%"
                cy="50%"
                r="35%"
                fill="none"
                stroke="#27272a"
                strokeWidth="2"
              />
              {/* Animated Path */}
              <motion.circle
                cx="50%"
                cy="50%"
                r="35%"
                fill="none"
                stroke="#3b82f6"
                strokeWidth="2"
                strokeDasharray="10 20"
                strokeLinecap="round"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
            </svg>

            {/* Center Label */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-zinc-900 border border-zinc-700 w-32 h-32 rounded-full flex flex-col items-center justify-center z-10 shadow-2xl">
                <span className="text-4xl font-black text-zinc-800">XP</span>
                <span className="text-[10px] text-zinc-500 uppercase tracking-widest mt-1">
                  Cycle
                </span>
              </div>
            </div>

            {/* Nodes */}
            {/* Top Node */}
            <div className="absolute top-[15%] left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 }}
                className="w-16 h-16 bg-zinc-900 border-2 border-blue-500/50 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-900/20"
              >
                <Search className="text-blue-400" />
              </motion.div>
            </div>

            {/* Right Node */}
            <div className="absolute top-1/2 right-[15%] -translate-y-1/2 flex flex-col items-center gap-2">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.4 }}
                className="w-16 h-16 bg-zinc-900 border-2 border-yellow-500/50 rounded-2xl flex items-center justify-center shadow-lg shadow-yellow-900/20"
              >
                <PenTool className="text-yellow-400" />
              </motion.div>
            </div>

            {/* Bottom Node */}
            <div className="absolute bottom-[15%] left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.6 }}
                className="w-16 h-16 bg-zinc-900 border-2 border-green-500/50 rounded-2xl flex items-center justify-center shadow-lg shadow-green-900/20"
              >
                <Code className="text-green-400" />
              </motion.div>
            </div>

            {/* Left Node */}
            <div className="absolute top-1/2 left-[15%] -translate-y-1/2 flex flex-col items-center gap-2">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.8 }}
                className="w-16 h-16 bg-zinc-900 border-2 border-red-500/50 rounded-2xl flex items-center justify-center shadow-lg shadow-red-900/20"
              >
                <CheckCircle className="text-red-400" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
