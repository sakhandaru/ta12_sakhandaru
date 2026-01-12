import React from "react";
import { motion } from "framer-motion";
import {
  ChevronDown,
  Layers,
  PenTool,
  Database,
  Layout,
  Play,
  BarChart,
  RefreshCcw,
  Rocket,
  ArrowRight,
} from "lucide-react";

export default function Slide10_Implementation() {
  const steps = [
    { id: 1, name: "Identifikasi Masalah", icon: <Layers size={16} /> },
    { id: 2, name: "Analisis Struktur", icon: <Database size={16} /> },
    { id: 3, name: "Redesain Arsitektur", icon: <PenTool size={16} /> },
    { id: 4, name: "Komponenisasi", icon: <Layout size={16} /> },
    { id: 5, name: "Implementasi & Refactor", icon: <Play size={16} /> },
    { id: 6, name: "Pengujian (Web Vitals)", icon: <BarChart size={16} /> },
    { id: 7, name: "Perbaikan Iteratif", icon: <RefreshCcw size={16} /> },
    { id: 8, name: "Deploy Final", icon: <Rocket size={16} />, isFinal: true },
  ];

  return (
    <div className="w-full h-full bg-zinc-950 text-white p-12 flex flex-col">
      {/* Header */}
      <div className="flex items-end justify-between mb-6 border-b border-zinc-800 pb-4">
        <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight">
          Rancangan Implementasi
        </h2>
        <div className="text-5xl md:text-6xl font-black text-zinc-800">10.</div>
      </div>

      {/* Grid Content */}
      <div className="flex-1 grid grid-cols-1 md:grid-cols-12 gap-8 overflow-hidden">
        {/* Left: Description */}
        <div className="md:col-span-4 flex flex-col justify-center gap-6">
          <div>
            <h3 className="text-2xl font-bold mb-3">Strategi Eksekusi</h3>
            <p className="text-zinc-400 text-base leading-relaxed">
              Rancangan implementasi disusun secara sistematis untuk memastikan
              proses refaktorisasi berjalan terkontrol.
            </p>
          </div>

          <div className="p-5 bg-zinc-900 border border-zinc-800 rounded-2xl">
            <h4 className="font-bold text-zinc-200 mb-2">Fokus Tahapan</h4>
            <ul className="space-y-2">
              {[
                "Identifikasi modul prioritas",
                "Penyusunan struktur komponen modular",
                "Penerapan refaktorisasi bertahap",
                "Evaluasi sistem",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-2 text-zinc-400 text-sm"
                >
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right: Compact Flow Diagram using 2 Columns */}
        <div className="md:col-span-8 bg-zinc-900/50 border border-zinc-800 rounded-3xl p-6 relative flex flex-col items-center justify-center">
          <div className="absolute inset-0 bg-grid-zinc-800/30 mask-[linear-gradient(to_bottom,transparent,black)] pointer-events-none"></div>
          <div className="absolute top-1/2 left-8 md:left-12 bottom-8 w-0.5 bg-zinc-800 mask-[linear-gradient(to_bottom,transparent,black)]"></div>

          <h4 className="relative z-10 text-[10px] font-mono uppercase text-zinc-500 tracking-widest mb-4">
            Implementation Workflow
          </h4>

          <div className="relative z-10 grid grid-cols-2 gap-x-8 gap-y-4 w-full h-full content-center">
            {/* Column 1: Steps 1-4 */}
            <div className="flex flex-col gap-3 justify-center">
              {steps.slice(0, 4).map((step, idx) => (
                <div
                  key={step.id}
                  className="relative flex flex-col items-center"
                >
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + idx * 0.1 }}
                    className="flex items-center gap-3 py-2 px-3 rounded-lg border bg-zinc-800/80 border-zinc-700 w-full"
                  >
                    <div className="flex items-center justify-center w-6 h-6 bg-zinc-950 rounded text-xs font-mono text-zinc-500 border border-zinc-800 shrink-0">
                      {step.id}
                    </div>
                    <div className="p-1.5 bg-zinc-700 rounded text-zinc-400 shrink-0">
                      {step.icon}
                    </div>
                    <span className="text-sm text-zinc-300 font-medium truncate">
                      {step.name}
                    </span>
                  </motion.div>
                  {/* Down Arrow for internal column flow */}
                  {idx < 3 && (
                    <ChevronDown size={14} className="text-zinc-600 my-0.5" />
                  )}
                </div>
              ))}
            </div>

            {/* Transition Arrow between Columns */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:block">
              <ArrowRight size={24} className="text-zinc-600 opacity-50" />
            </div>

            {/* Column 2: Steps 5-8 */}
            <div className="flex flex-col gap-3 justify-center">
              {steps.slice(4, 8).map((step, idx) => (
                <div
                  key={step.id}
                  className="relative flex flex-col items-center"
                >
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + idx * 0.1 }}
                    className={`flex items-center gap-3 py-2 px-3 rounded-lg border w-full ${
                      step.isFinal
                        ? "bg-blue-900/20 border-blue-500/50"
                        : "bg-zinc-800/80 border-zinc-700"
                    }`}
                  >
                    <div
                      className={`flex items-center justify-center w-6 h-6 rounded text-xs font-mono border shrink-0 ${
                        step.isFinal
                          ? "bg-blue-800 text-blue-100 border-blue-500/50"
                          : "bg-zinc-950 text-zinc-500 border-zinc-800"
                      }`}
                    >
                      {step.id}
                    </div>
                    <div
                      className={`p-1.5 rounded shrink-0 ${
                        step.isFinal
                          ? "bg-blue-500 text-white"
                          : "bg-zinc-700 text-zinc-400"
                      }`}
                    >
                      {step.icon}
                    </div>
                    <span
                      className={`text-sm font-medium truncate ${
                        step.isFinal ? "text-blue-200" : "text-zinc-300"
                      }`}
                    >
                      {step.name}
                    </span>
                  </motion.div>
                  {/* Down Arrow for internal column flow */}
                  {idx < 3 && (
                    <ChevronDown size={14} className="text-zinc-600 my-0.5" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
