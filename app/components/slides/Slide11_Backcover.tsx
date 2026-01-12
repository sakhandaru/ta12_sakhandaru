import React from "react";
import { motion } from "framer-motion";
import { MessageCircle, ThumbsUp } from "lucide-react";

export default function Slide11_Backcover() {
  return (
    <div className="w-full h-full bg-zinc-950 text-white p-12 flex flex-col justify-between">
      {/* Top Decor */}
      <div className="flex justify-between items-start border-b border-zinc-800 pb-6">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-white rounded-full"></div>
          <span className="text-sm font-mono tracking-widest uppercase text-zinc-400">
            End of Session
          </span>
        </div>
        <div className="text-right">
          <p className="text-xs text-zinc-500 font-mono">
            PHASE 1: FUNDAMENTAL
          </p>
          <p className="text-xs text-zinc-500 font-mono">2026</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center text-center gap-8">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-24 h-24 bg-zinc-900 border border-zinc-800 rounded-full flex items-center justify-center mb-4"
        >
          <ThumbsUp size={48} className="text-zinc-200" />
        </motion.div>

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-6xl md:text-8xl font-bold tracking-tight"
        >
          Terima Kasih
        </motion.h1>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="max-w-2xl"
        >
          <p className="text-2xl text-zinc-400 leading-relaxed">
            "Atas perhatian Bapak/Ibu Penguji, saya ucapkan terima kasih."
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-12 p-6 bg-zinc-900 border border-zinc-800 rounded-2xl flex items-center gap-4"
        >
          <div className="p-3 bg-blue-500/10 rounded-xl text-blue-400">
            <MessageCircle size={32} />
          </div>
          <div className="text-left">
            <p className="text-sm text-zinc-500 uppercase tracking-widest font-semibold mb-1">
              Sesi Tanya Jawab
            </p>
            <p className="text-lg font-medium text-zinc-200">
              Saya siap menerima pertanyaan dan masukan.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-end border-t border-zinc-800 pt-6">
        <div className="text-9xl font-bold text-zinc-900 leading-none select-none -mb-4">
          11
        </div>
        <div className="text-sm text-zinc-500 max-w-xs text-right">
          Final Project Presentation
        </div>
      </div>
    </div>
  );
}
