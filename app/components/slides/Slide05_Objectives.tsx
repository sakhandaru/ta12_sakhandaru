import React from "react";
import { motion } from "framer-motion";
import { Target, LayoutTemplate, Zap, CheckCircle2 } from "lucide-react";

export default function Slide05_Objectives() {
  const objectives = [
    {
      id: 1,
      icon: <Zap size={32} className="text-zinc-900" />,
      title: "Meningkatkan Kinerja",
      desc: "Menerapkan refaktorisasi berbasis komponen modular untuk optimasi performa sistem.",
      color: "bg-yellow-400",
    },
    {
      id: 2,
      icon: <LayoutTemplate size={32} className="text-zinc-900" />,
      title: "Optimasi Arsitektur",
      desc: "Meningkatkan kualitas arsitektur frontend agar lebih terstruktur dan maintainable.",
      color: "bg-blue-400",
    },
    {
      id: 3,
      icon: <Target size={32} className="text-zinc-900" />,
      title: "Efisiensi Pengembangan",
      desc: "Meningkatkan efisiensi proses pengembangan dan pemeliharaan jangka panjang.",
      color: "bg-green-400",
    },
  ];

  return (
    <div className="w-full h-full bg-zinc-950 text-white p-6 md:p-12 flex flex-col">
      {/* Header */}
      <div className="flex items-end justify-between mb-6 md:mb-8 border-b border-zinc-800 pb-4 md:pb-6">
        <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight">
          Manfaat Penelitian
        </h2>
        <div className="text-4xl md:text-6xl font-black text-zinc-800">06.</div>
      </div>

      {/* Content Grid */}
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 overflow-y-auto md:overflow-hidden pb-4 md:pb-0">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 pb-4 md:pb-0">
          {objectives.map((obj, index) => (
            <motion.div
              key={obj.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.15 }}
              className="relative group"
            >
              {/* Card Background with Glow Effect */}
              <div
                className={`absolute inset-0 ${obj.color} blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-3xl`}
              ></div>

              <div className="relative h-full bg-zinc-900 border border-zinc-800 p-8 rounded-3xl flex flex-col hover:translate-y-[-5px] transition-transform duration-300">
                {/* Icon Header */}
                <div className="flex justify-between items-start mb-6">
                  <div
                    className={`w-16 h-16 ${obj.color} rounded-2xl flex items-center justify-center shadow-lg`}
                  >
                    {obj.icon}
                  </div>
                  <div className="text-zinc-700 font-bold text-4xl opacity-50">
                    0{obj.id}
                  </div>
                </div>

                {/* Text Content */}
                <h3 className="text-2xl font-bold mb-4">{obj.title}</h3>
                <p className="text-zinc-400 leading-relaxed text-lg">
                  {obj.desc}
                </p>

                {/* Bottom Indication */}
                <div className="mt-auto pt-8 flex items-center gap-2 text-zinc-500 group-hover:text-white transition-colors">
                  <CheckCircle2 size={16} />
                  <span className="text-xs uppercase tracking-widest font-semibold">
                    Tercapai
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
