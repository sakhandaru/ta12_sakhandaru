import React from "react";
import Image from "next/image";
import { FolderTree, Database, Layers, Server } from "lucide-react";

export default function Slide02a_Evidence() {
  return (
    <div className="w-full h-full bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-white p-12 flex flex-col font-sans">
      {/* Header */}
      <div className="flex items-end justify-between mb-8 border-b border-zinc-200 dark:border-zinc-800 pb-6 shrink-0">
        <div className="flex flex-col">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider mb-2 w-fit">
            <Server size={14} />
            <span>Architectural Analysis</span>
          </div>
          <h2 className="text-5xl font-bold uppercase tracking-tight">
            Analisis Struktur
          </h2>
        </div>
        <div className="text-6xl font-black text-zinc-200 dark:text-zinc-800">
          02a.
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full flex-1 min-h-0">
        {/* Evidence 1: Directory Structure */}
        <div className="group relative bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-6 hover:border-blue-500/30 transition-all duration-300 flex flex-col h-full">
          <div className="absolute inset-0 bg-blue-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity" />

          <div className="flex items-center gap-3 mb-4 shrink-0">
            <div className="p-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-xl">
              <FolderTree size={24} />
            </div>
            <h3 className="text-xl font-bold text-zinc-900 dark:text-white">
              Unified Structure
            </h3>
          </div>

          <div className="relative flex-1 w-full min-h-[200px] bg-zinc-100 dark:bg-zinc-950 rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-inner group-hover:shadow-lg transition-shadow">
            <Image
              src="/bukti1.png"
              alt="Bukti 1: Unified Structure"
              fill
              className="object-cover object-top hover:scale-110 transition-transform duration-500"
            />
          </div>

          <p className="mt-4 text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed shrink-0">
            Semua layer MVC berada dalam{" "}
            <strong className="text-zinc-900 dark:text-white">
              satu repositori pusat
            </strong>
            . Tidak ada pemisahan concern berdasarkan unit deployment.
          </p>
        </div>

        {/* Evidence 2: Tight Coupling (Code) */}
        <div className="group relative bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-6 hover:border-pink-500/30 transition-all duration-300 flex flex-col h-full">
          <div className="absolute inset-0 bg-pink-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity" />

          <div className="flex items-center gap-3 mb-4 shrink-0">
            <div className="p-2 bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400 rounded-xl">
              <Database size={24} />
            </div>
            <h3 className="text-xl font-bold text-zinc-900 dark:text-white">
              In-Process Calls
            </h3>
          </div>

          <div className="relative flex-1 w-full min-h-[200px] bg-zinc-100 dark:bg-zinc-950 rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-inner group-hover:shadow-lg transition-shadow">
            <Image
              src="/bukti2.png"
              alt="Bukti 2: In-Process Calls"
              fill
              className="object-cover object-top hover:scale-110 transition-transform duration-500"
            />
          </div>

          <p className="mt-4 text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed shrink-0">
            Akses database dilakukan via{" "}
            <strong className="text-zinc-900 dark:text-white">
              pemanggilan fungsi langsung
            </strong>{" "}
            di memori yang sama, bukan melalui Network API.
          </p>
        </div>

        {/* Evidence 3: Server Side Rendering */}
        <div className="group relative bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-6 hover:border-emerald-500/30 transition-all duration-300 flex flex-col h-full">
          <div className="absolute inset-0 bg-emerald-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity" />

          <div className="flex items-center gap-3 mb-4 shrink-0">
            <div className="p-2 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-xl">
              <Layers size={24} />
            </div>
            <h3 className="text-xl font-bold text-zinc-900 dark:text-white">
              Coupled UI
            </h3>
          </div>

          <div className="relative flex-1 w-full min-h-[200px] bg-zinc-100 dark:bg-zinc-950 rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-inner group-hover:shadow-lg transition-shadow">
            <Image
              src="/bukti3.png"
              alt="Bukti 3: Coupled UI"
              fill
              className="object-cover object-top hover:scale-110 transition-transform duration-500"
            />
          </div>

          <p className="mt-4 text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed shrink-0">
            Backend bertanggung jawab penuh atas{" "}
            <strong className="text-zinc-900 dark:text-white">
              HTML generation
            </strong>
            . UI tidak terpisah sebagai aplikasi mandiri.
          </p>
        </div>
      </div>
    </div>
  );
}
