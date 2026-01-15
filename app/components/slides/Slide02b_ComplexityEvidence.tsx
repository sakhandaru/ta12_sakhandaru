import React from "react";
import {
  Network,
  Activity,
  Clock,
  AlertOctagon,
  FileCode,
  ArrowDown,
  AlertTriangle,
} from "lucide-react";

export default function Slide02b_ComplexityEvidence() {
  return (
    <div className="w-full h-full bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-white p-12 flex flex-col font-sans">
      {/* Header */}
      <div className="flex items-end justify-between mb-8 border-b border-zinc-200 dark:border-zinc-800 pb-6 shrink-0">
        <div className="flex flex-col">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 text-xs font-bold uppercase tracking-wider mb-2 w-fit">
            <AlertTriangle size={14} />
            <span>Critical Issue</span>
          </div>
          <h2 className="text-5xl font-bold uppercase tracking-tight">
            Analisis Kinerja
          </h2>
        </div>
        <div className="text-6xl font-black text-zinc-200 dark:text-zinc-800">
          02b.
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full flex-1">
        {/* Left Column: Metrics & Analysis */}
        <div className="lg:col-span-5 flex flex-col justify-center gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
              Performa di Bawah Standar
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed">
              Berdasarkan pengujian Lighthouse, nilai{" "}
              <strong className="text-zinc-900 dark:text-zinc-200">
                Largest Contentful Paint (LCP)
              </strong>{" "}
              mencapai{" "}
              <span className="text-red-600 dark:text-red-400 font-bold bg-red-100 dark:bg-red-900/30 px-1 rounded">
                19,4 detik
              </span>
              .
            </p>
            <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed">
              Angka ini jauh di atas ambang batas ideal 2,5 detik, sehingga
              halaman utama membutuhkan waktu yang sangat lama untuk menampilkan
              konten utama kepada pengguna.
            </p>
          </div>

          {/* Metrics Cards */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white dark:bg-zinc-900 p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm flex flex-col items-center justify-center text-center">
              <span className="text-zinc-500 text-xs font-bold uppercase tracking-wider mb-2">
                Overall Performance
              </span>
              <div className="text-5xl font-black text-orange-500 mb-1">62</div>
              <span className="text-xs px-2 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 rounded-full font-medium">
                Perlu Optimasi
              </span>
            </div>

            <div className="bg-red-50 dark:bg-red-900/10 p-5 rounded-2xl border border-red-200 dark:border-red-900/30 shadow-sm flex flex-col items-center justify-center text-center relative overflow-hidden">
              <div className="absolute top-2 right-2 animate-pulse">
                <AlertOctagon className="text-red-500" size={20} />
              </div>
              <span className="text-zinc-500 text-xs font-bold uppercase tracking-wider mb-2">
                LCP (Critical)
              </span>
              <div className="text-5xl font-black text-red-600 dark:text-red-500 mb-1">
                19.4s
              </div>
              <span className="text-xs px-2 py-1 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-full font-medium">
                Poor (Limit: 2.5s)
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Evidence Image */}
        <div className="lg:col-span-7 flex items-center justify-center relative">
          <div className="relative w-full h-full max-h-[500px] bg-zinc-100 dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 overflow-hidden shadow-2xl group">
            <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent z-10 pointer-events-none"></div>
            {/* Using standard img tag as directed for simplicity in this context, or next/image if preferred. Assuming standard img for local asset without next/image setup overhead here, but can switch if needed. */}
            <img
              src="/buktiperforma.png"
              alt="Bukti Performa Lighthouse"
              className="w-full h-full object-contain bg-zinc-900 p-2"
            />
          </div>

          {/* Floating Badge */}
          <div className="absolute -bottom-4 -right-4 bg-white dark:bg-zinc-800 p-4 rounded-2xl shadow-xl border border-zinc-200 dark:border-zinc-700 z-20 hidden md:flex items-center gap-3 animate-bounce">
            <div className="bg-red-500 rounded-full p-2 text-white">
              <Activity size={24} />
            </div>
            <div>
              <div className="text-sm font-bold text-zinc-900 dark:text-white">
                User Experience
              </div>
              <div className="text-xs text-red-500 font-bold">
                Severely Impacted
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
