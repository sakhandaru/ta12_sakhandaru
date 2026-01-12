import React from "react";
import { motion } from "framer-motion";
import { AlertCircle, Layers, Activity, Settings } from "lucide-react";

export default function Slide02_Background() {
  return (
    <div className="w-full h-full bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-white p-12 flex flex-col">
      {/* Header */}
      <div className="flex items-end justify-between mb-8 border-b border-zinc-200 dark:border-zinc-800 pb-6">
        <h2 className="text-5xl font-bold uppercase tracking-tight">
          Latar Belakang
        </h2>
        <div className="text-6xl font-black text-zinc-200 dark:text-zinc-800">
          02.
        </div>
      </div>

      {/* Grid Content */}
      <div className="flex-1 grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Main Context Area (Left) */}
        <div className="md:col-span-7 flex flex-col gap-6">
          {/* Context Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white dark:bg-zinc-900/50 p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 flex-1 flex flex-col justify-center"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-8 bg-blue-500 rounded-full"></div>
              <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
                Konteks Sistem TVKU
              </h3>
            </div>
            <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed mb-6">
              Website TVKU berfungsi sebagai media informasi utama untuk berita,
              program siaran, dan konten institusional.
            </p>
            <p className="text-zinc-800 dark:text-zinc-300 text-lg leading-relaxed font-medium">
              Sebagai sistem informasi vital, website ini dituntut memiliki
              kinerja tinggi, struktur terkelola, dan mendukung pengembangan
              jangka panjang.
            </p>
          </motion.div>

          {/* Conclusion / Need Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-zinc-200 dark:bg-zinc-100 text-black p-6 rounded-3xl flex items-center gap-6"
          >
            <AlertCircle size={32} className="text-zinc-900 shrink-0" />
            <p className="text-lg font-bold leading-tight">
              Diperlukan perbaikan sisi internal (refactoring) tanpa mengganggu
              fungsi utama website.
            </p>
          </motion.div>
        </div>

        {/* Problems Area (Right) */}
        <div className="md:col-span-5 flex flex-col gap-4">
          <div className="flex items-center justify-between px-2">
            <span className="text-xs font-mono uppercase text-zinc-500 tracking-widest">
              Permasalahan Umum
            </span>
            <div className="h-px w-12 bg-zinc-300 dark:bg-zinc-800"></div>
          </div>

          {/* Problem Cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800/50 p-6 rounded-2xl flex items-start gap-4 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors"
          >
            <div className="p-3 bg-zinc-100 dark:bg-zinc-800 rounded-xl shrink-0">
              <Layers size={24} className="text-blue-400" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-zinc-900 dark:text-zinc-200 mb-1">
                Struktur Non-Modular
              </h4>
              <p className="text-sm text-zinc-500">
                Antarmuka belum tersusun secara modular, menyulitkan penggunaan
                ulang komponen.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800/50 p-6 rounded-2xl flex items-start gap-4 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors"
          >
            <div className="p-3 bg-zinc-100 dark:bg-zinc-800 rounded-xl shrink-0">
              <Activity size={24} className="text-red-400" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-zinc-900 dark:text-zinc-200 mb-1">
                Kinerja Belum Optimal
              </h4>
              <p className="text-sm text-zinc-500">
                Waktu muat halaman lambat dan interaksi pengguna kurang
                responsif.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800/50 p-6 rounded-2xl flex items-start gap-4 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors"
          >
            <div className="p-3 bg-zinc-100 dark:bg-zinc-800 rounded-xl shrink-0">
              <Settings size={24} className="text-yellow-400" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-zinc-900 dark:text-zinc-200 mb-1">
                Pemeliharaan Tidak Efisien
              </h4>
              <p className="text-sm text-zinc-500">
                Proses pengembangan fitur baru memakan waktu lama akibat kode
                yang kompleks.
              </p>
            </div>
          </motion.div>

          {/* Visual Decorator */}
          <div className="flex-1 bg-linear-to-br from-blue-100 dark:from-blue-900/10 to-zinc-50 dark:to-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800/30 relative overflow-hidden group">
            <div className="absolute inset-0 flex items-center justify-center opacity-20">
              <div className="w-32 h-32 border border-blue-500/30 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
