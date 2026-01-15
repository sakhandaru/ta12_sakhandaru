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
    { id: 1, name: "Identifikasi modul prioritas", icon: <Layers size={16} /> },
    {
      id: 2,
      name: "Penyusunan struktur komponen modular",
      icon: <Layout size={16} />,
    },
    {
      id: 3,
      name: "Penerapan refaktorisasi bertahap",
      icon: <RefreshCcw size={16} />,
    },
    {
      id: 4,
      name: "Evaluasi sistem",
      icon: <BarChart size={16} />,
      isFinal: true,
    },
  ];

  return (
    <div className="w-full h-full bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-white p-12 flex flex-col">
      {/* Header */}
      <div className="flex items-end justify-between mb-6 border-b border-zinc-200 dark:border-zinc-800 pb-4">
        <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight">
          Rancangan Implementasi
        </h2>
        <div className="text-5xl md:text-6xl font-black text-zinc-200 dark:text-zinc-800">
          10.
        </div>
      </div>

      {/* Grid Content */}
      <div className="flex-1 grid grid-cols-1 md:grid-cols-12 gap-8 overflow-hidden">
        {/* Left: Description */}
        <div className="md:col-span-4 flex flex-col justify-center gap-6">
          <div>
            <h3 className="text-2xl font-bold mb-3">Strategi Eksekusi</h3>
            <p className="text-zinc-600 dark:text-zinc-400 text-base leading-relaxed">
              Rancangan implementasi disusun secara sistematis untuk memastikan
              proses refaktorisasi berjalan terkontrol.
            </p>
          </div>

          <div className="p-5 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl">
            <h4 className="font-bold text-zinc-900 dark:text-zinc-200 mb-2">
              Fokus Tahapan
            </h4>
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
        <div className="md:col-span-8 bg-zinc-100 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-6 relative flex flex-col items-center justify-center">
          <div className="absolute inset-0 bg-grid-zinc-200/50 dark:bg-grid-zinc-800/30 [mask-image:linear-gradient(to_bottom,transparent,black)]"></div>

          <h4 className="relative z-10 text-[10px] font-mono uppercase text-zinc-500 tracking-widest mb-4">
            Implementation Workflow
          </h4>

          <div className="relative z-10 w-full h-full flex flex-col justify-center items-center gap-0">
            {steps.map((step, idx) => (
              <div
                key={step.id}
                className="relative w-full max-w-lg pb-4 last:pb-0"
              >
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * idx }}
                  className={`flex items-center gap-4 p-4 rounded-xl border w-full relative z-10 transition-all ${
                    step.isFinal
                      ? "bg-blue-50 dark:bg-blue-900/10 border-blue-200 dark:border-blue-800"
                      : "bg-white dark:bg-zinc-800/80 border-zinc-200 dark:border-zinc-700 shadow-sm"
                  }`}
                >
                  <div
                    className={`flex items-center justify-center w-8 h-8 rounded-lg text-sm font-bold border shrink-0 ${
                      step.isFinal
                        ? "bg-blue-500 text-white border-blue-600"
                        : "bg-zinc-100 dark:bg-zinc-950 text-zinc-500 border-zinc-200 dark:border-zinc-800"
                    }`}
                  >
                    {step.id}
                  </div>
                  <div
                    className={`p-2 rounded-lg shrink-0 ${
                      step.isFinal
                        ? "bg-blue-200 dark:bg-blue-800 text-blue-700 dark:text-blue-100"
                        : "bg-zinc-100 dark:bg-zinc-700 text-zinc-500 dark:text-zinc-400"
                    }`}
                  >
                    {step.icon}
                  </div>
                  <span
                    className={`text-lg font-semibold ${
                      step.isFinal
                        ? "text-blue-700 dark:text-blue-300"
                        : "text-zinc-700 dark:text-zinc-200"
                    }`}
                  >
                    {step.name}
                  </span>
                </motion.div>

                {/* Connector Line */}
                {idx < steps.length - 1 && (
                  <div className="absolute left-8 top-1/2 h-full w-0.5 bg-zinc-200 dark:bg-zinc-700 -ml-[1px] z-0" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
