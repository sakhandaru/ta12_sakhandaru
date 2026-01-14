import React from "react";
import {
  AlertTriangle,
  Copy,
  Trash2,
  AlertCircle,
  FileCode,
  Wrench,
} from "lucide-react";

export default function Slide02c_MaintenanceEvidence() {
  return (
    <div className="w-full h-full bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-white p-12 flex flex-col font-sans">
      {/* Header */}
      <div className="flex items-end justify-between mb-8 border-b border-zinc-200 dark:border-zinc-800 pb-6 shrink-0">
        <div className="flex flex-col">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-600 dark:text-yellow-400 text-xs font-bold uppercase tracking-wider mb-2 w-fit">
            <Wrench size={14} />
            <span>Code Quality Analysis</span>
          </div>
          <h2 className="text-5xl font-bold uppercase tracking-tight">
            Bukti Inefisiensi Maintenance
          </h2>
        </div>
        <div className="text-6xl font-black text-zinc-200 dark:text-zinc-800">
          02c.
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full flex-1 min-h-0">
        {/* Evidence 1: Copy-Paste Versioning */}
        <div className="group relative bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-6 hover:border-red-500/30 transition-all duration-300 flex flex-col h-full">
          <div className="absolute inset-0 bg-red-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity" />

          <div className="flex items-center gap-3 mb-4 shrink-0">
            <div className="p-2 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-xl">
              <Copy size={24} />
            </div>
            <h3 className="text-xl font-bold text-zinc-900 dark:text-white">
              Manual Versioning
            </h3>
          </div>

          <div className="flex-1 overflow-hidden">
            <div className="bg-zinc-100 dark:bg-zinc-950 rounded-xl p-4 font-mono text-xs text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-800 shadow-inner h-full">
              <div className="flex gap-2 mb-2 border-b border-zinc-200 dark:border-zinc-800 pb-2">
                <FileCode size={14} className="text-blue-500" />
                <span className="text-zinc-500">Home.php</span>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center bg-red-500/10 p-1 rounded">
                  <span>public function index()</span>
                  <span className="text-[10px] bg-red-500 text-white px-1.5 rounded-full font-bold">
                    227 Lines
                  </span>
                </div>
                <div className="flex justify-between items-center opacity-70">
                  <span>public function index_v1()</span>
                  <span className="text-[10px] border border-red-500/30 text-red-500 px-1 rounded">
                    Duplicate
                  </span>
                </div>
                <div className="flex justify-between items-center opacity-70">
                  <span>public function index2()</span>
                  <span className="text-[10px] border border-red-500/30 text-red-500 px-1 rounded">
                    Duplicate
                  </span>
                </div>
                <div className="flex justify-between items-center opacity-70">
                  <span>public function index3()</span>
                  <span className="text-[10px] border border-red-500/30 text-red-500 px-1 rounded">
                    Duplicate
                  </span>
                </div>
              </div>
            </div>
          </div>

          <p className="mt-4 text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed shrink-0">
            Alih-alih menggunakan Git Branch, fitur baru dibuat dengan{" "}
            <strong className="text-zinc-900 dark:text-white">
              copy-paste seluruh method
            </strong>{" "}
            (violating DRY principles).
          </p>
        </div>

        {/* Evidence 2: Fragile Hardcoded Logic */}
        <div className="group relative bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-6 hover:border-amber-500/30 transition-all duration-300 flex flex-col h-full">
          <div className="absolute inset-0 bg-amber-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity" />

          <div className="flex items-center gap-3 mb-4 shrink-0">
            <div className="p-2 bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 rounded-xl">
              <AlertCircle size={24} />
            </div>
            <h3 className="text-xl font-bold text-zinc-900 dark:text-white">
              Fragile Logic
            </h3>
          </div>

          <div className="flex-1 overflow-hidden">
            <div className="bg-zinc-100 dark:bg-zinc-950 rounded-xl p-4 font-mono text-xs text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-800 shadow-inner h-full">
              <span className="text-purple-600 dark:text-purple-400">
                public function
              </span>{" "}
              <span className="text-yellow-600 dark:text-yellow-200">
                DateToDay
              </span>
              () {"{"}
              <br />
              &nbsp;&nbsp;
              <span className="text-purple-600 dark:text-purple-400">if</span>(
              <span className="text-blue-600 dark:text-cyan-400">$day</span> =={" "}
              <span className="text-green-600 dark:text-green-400">
                'Sunday'
              </span>
              ) <span className="text-blue-600 dark:text-cyan-400">$id</span> ={" "}
              <span className="text-green-600 dark:text-green-400">
                'Minggu'
              </span>
              ;<br />
              &nbsp;&nbsp;
              <span className="text-purple-600 dark:text-purple-400">if</span>(
              <span className="text-blue-600 dark:text-cyan-400">$day</span> =={" "}
              <span className="text-green-600 dark:text-green-400">
                'Monday'
              </span>
              ) <span className="text-blue-600 dark:text-cyan-400">$id</span> ={" "}
              <span className="text-green-600 dark:text-green-400">
                'Senin'
              </span>
              ;<br />
              &nbsp;&nbsp;
              <span className="text-zinc-400 italic">
                ...repeated 7 times...
              </span>
              <br />
              &nbsp;&nbsp;
              <span className="text-purple-600 dark:text-purple-400">
                return
              </span>{" "}
              <span className="text-blue-600 dark:text-cyan-400">$id</span>;
              <br />
              {"}"}
            </div>
          </div>

          <p className="mt-4 text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed shrink-0">
            Hardcoded logic untuk hal sepele seperti mapping data. Menciptakan{" "}
            <strong className="text-zinc-900 dark:text-white">
              fungsi panjang yang sulit di-maintain
            </strong>{" "}
            dan rawan bug.
          </p>
        </div>

        {/* Evidence 3: Dead Code Accumulation */}
        <div className="group relative bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-6 hover:border-zinc-500/30 transition-all duration-300 flex flex-col h-full">
          <div className="absolute inset-0 bg-zinc-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity" />

          <div className="flex items-center gap-3 mb-4 shrink-0">
            <div className="p-2 bg-zinc-100 dark:bg-zinc-700/50 text-zinc-600 dark:text-zinc-400 rounded-xl">
              <Trash2 size={24} />
            </div>
            <h3 className="text-xl font-bold text-zinc-900 dark:text-white">
              Dead Code
            </h3>
          </div>

          <div className="flex-1 overflow-hidden">
            <div className="bg-zinc-100 dark:bg-zinc-950 rounded-xl p-4 font-mono text-xs text-zinc-500 border border-zinc-200 dark:border-zinc-800 shadow-inner h-full italic">
              <div className="flex gap-2 mb-2 border-b border-zinc-200 dark:border-zinc-800 pb-2 not-italic">
                <FileCode size={14} className="text-blue-500" />
                <span className="text-zinc-500">Home.php</span>
              </div>
              <span className="line-through decoration-zinc-400 opacity-60">
                // $this-&gt;link = 'http://103...';
              </span>
              <br />
              <span className="line-through decoration-zinc-400 opacity-60">
                // $carousels = $this-&gt;HomeModel-&gt;show();
              </span>
              <br />
              <span className="line-through decoration-zinc-400 opacity-60">
                // print_r($ourexpertise1);
              </span>
              <br />
              <span className="line-through decoration-zinc-400 opacity-60">
                // "page" =&gt; "home_nyari_masalah_load",
              </span>
            </div>
          </div>

          <p className="mt-4 text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed shrink-0">
            "Kuburan" kode (Dead Code) yang dibiarkan menumpuk, membuat codebase{" "}
            <strong className="text-zinc-900 dark:text-white">
              kotor dan sulit dibaca
            </strong>{" "}
            developer baru.
          </p>
        </div>
      </div>
    </div>
  );
}
