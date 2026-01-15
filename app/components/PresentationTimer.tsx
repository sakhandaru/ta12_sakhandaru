"use client";

import React, { useState, useEffect } from "react";
import { Play, Pause, RotateCcw, Timer } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function PresentationTimer() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const toggleTimer = () => setIsRunning(!isRunning);

  const resetTimer = () => {
    setIsRunning(false);
    setTime(0);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div className="fixed bottom-24 right-8 z-50 flex flex-col items-end pointer-events-auto">
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-2xl p-4 mb-4 w-48"
          >
            <div className="flex flex-col items-center gap-2">
              <div className="text-4xl font-mono font-bold text-zinc-900 dark:text-zinc-100 tabular-nums tracking-wider">
                {formatTime(time)}
              </div>
              <div className="flex items-center gap-2 w-full">
                <button
                  onClick={toggleTimer}
                  className={`flex-1 flex items-center justify-center p-2 rounded-lg transition-colors ${
                    isRunning
                      ? "bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400 hover:bg-amber-200 dark:hover:bg-amber-900/50"
                      : "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400 hover:bg-green-200 dark:hover:bg-green-900/50"
                  }`}
                >
                  {isRunning ? <Pause size={20} /> : <Play size={20} />}
                </button>
                <button
                  onClick={resetTimer}
                  className="p-2 rounded-lg bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
                >
                  <RotateCcw size={20} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className={`p-3 rounded-full shadow-lg transition-all duration-300 flex items-center gap-2 ${
          isExpanded || isRunning
            ? "bg-blue-600 text-white"
            : "bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-800 hover:border-blue-500 hover:text-blue-500"
        }`}
      >
        <Timer size={24} />
        {(isExpanded || isRunning) && (
          <span className="font-mono font-bold text-sm pr-1">
            {formatTime(time)}
          </span>
        )}
      </button>
    </div>
  );
}
