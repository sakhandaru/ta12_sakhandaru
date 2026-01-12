"use client";

import React, { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Sun, Moon } from "lucide-react";
import Slide01_Cover from "./components/slides/Slide01_Cover";
import Slide02_Background from "./components/slides/Slide02_Background";
import Slide03_AsIs from "./components/slides/Slide03_AsIs";
import Slide04_Problem from "./components/slides/Slide04_Problem";
import Slide05_Objectives from "./components/slides/Slide05_Objectives";
import Slide06_Benefits from "./components/slides/Slide06_Benefits";
import Slide07_Scope from "./components/slides/Slide07_Scope";
import Slide08_ToBe from "./components/slides/Slide08_ToBe";
import Slide09_Methodology from "./components/slides/Slide09_Methodology";
import Slide10_Implementation from "./components/slides/Slide10_Implementation";
import Slide11_Backcover from "./components/slides/Slide11_Backcover";

const SLIDES = [
  { component: Slide01_Cover, title: "COVER" },
  { component: Slide02_Background, title: "BACKGROUND" },
  { component: Slide03_AsIs, title: "AS-IS" },
  { component: Slide04_Problem, title: "PROBLEM" },
  { component: Slide05_Objectives, title: "OBJECTIVES" },
  { component: Slide06_Benefits, title: "BENEFITS" },
  { component: Slide07_Scope, title: "SCOPE" },
  { component: Slide08_ToBe, title: "TO-BE" },
  { component: Slide09_Methodology, title: "METHODOLOGY" },
  { component: Slide10_Implementation, title: "IMPLEMENTATION" },
  { component: Slide11_Backcover, title: "BACKCOVER" },
];

export default function SlideDeck() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showGrid, setShowGrid] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => Math.min(prev + 1, SLIDES.length - 1));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (showGrid) {
        if (e.key === "Escape") setShowGrid(false);
        return;
      }

      if (e.key === "ArrowRight" || e.key === " ") {
        nextSlide();
      } else if (e.key === "ArrowLeft") {
        prevSlide();
      } else if (e.key.toLowerCase() === "g") {
        setShowGrid(true);
      } else if (e.key.toLowerCase() === "t") {
        toggleTheme();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide, showGrid, toggleTheme]); // Added toggleTheme to dependencies

  const CurrentSlideComponent = SLIDES[currentSlide].component;

  return (
    <div className={theme}>
      <main className="relative w-screen h-screen bg-zinc-50 dark:bg-zinc-950 overflow-hidden text-zinc-900 dark:text-white transition-colors duration-300">
        {/* Slide Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full"
          >
            <CurrentSlideComponent />
          </motion.div>
        </AnimatePresence>

        {/* Grid Overlay */}
        <AnimatePresence>
          {showGrid && (
            <motion.div
              initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
              animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
              exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
              className="absolute inset-0 z-50 bg-white/80 dark:bg-black/80 flex items-center justify-center p-12"
              onClick={() => setShowGrid(false)}
            >
              <div className="grid grid-cols-4 md:grid-cols-6 gap-4 w-full max-w-6xl">
                {SLIDES.map((slide, index) => (
                  <button
                    key={index}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentSlide(index);
                      setShowGrid(false);
                    }}
                    className={`relative aspect-video rounded-xl border p-2 flex items-center justify-center transition-all hover:scale-105 ${
                      currentSlide === index
                        ? "bg-blue-600 border-blue-400 scale-105 shadow-2xl shadow-blue-500/50"
                        : "bg-zinc-100 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-500"
                    }`}
                  >
                    <div className="absolute top-2 left-2 text-xs font-mono opacity-50 text-zinc-600 dark:text-zinc-400">
                      {index + 1}
                    </div>
                    {/* Explicit Title Display */}
                    <div className="text-[10px] uppercase tracking-widest text-center px-2 opacity-70 font-semibold text-zinc-700 dark:text-zinc-300">
                      {slide.title}
                    </div>
                  </button>
                ))}
              </div>
              <div className="absolute bottom-8 text-center text-zinc-500 text-sm">
                Press{" "}
                <span className="text-zinc-900 dark:text-white font-mono px-2 py-1 bg-zinc-200 dark:bg-zinc-800 rounded">
                  ESC
                </span>{" "}
                to close
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Navigation Controls */}
        <div className="absolute inset-x-0 bottom-0 h-20 flex items-center justify-between px-8 z-40 group pointer-events-none">
          {/* Left/Right Buttons - Pointer events only on buttons */}
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="pointer-events-auto p-2 rounded-full bg-zinc-200/50 dark:bg-zinc-800/50 hover:bg-zinc-300/80 dark:hover:bg-zinc-700/80 disabled:opacity-0 transition opacity-0 group-hover:opacity-100 text-zinc-800 dark:text-zinc-100"
          >
            <ChevronLeft size={32} />
          </button>

          <div className="pointer-events-auto flex flex-col items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="text-sm font-mono text-zinc-500">
              {currentSlide + 1} / {SLIDES.length}
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setShowGrid(true)}
                className="text-xs text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white underline underline-offset-4"
              >
                View Grid
              </button>
              <span className="text-zinc-300 dark:text-zinc-700">|</span>
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full text-zinc-500 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-white transition-all"
                title={
                  theme === "dark"
                    ? "Switch to Light Mode"
                    : "Switch to Dark Mode"
                }
              >
                {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
              </button>
            </div>
          </div>

          <button
            onClick={nextSlide}
            disabled={currentSlide === SLIDES.length - 1}
            className="pointer-events-auto p-2 rounded-full bg-zinc-200/50 dark:bg-zinc-800/50 hover:bg-zinc-300/80 dark:hover:bg-zinc-700/80 disabled:opacity-0 transition opacity-0 group-hover:opacity-100 text-zinc-800 dark:text-zinc-100"
          >
            <ChevronRight size={32} />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-zinc-200 dark:bg-zinc-900 z-30">
          <motion.div
            className="h-full bg-blue-500"
            initial={{ width: 0 }}
            animate={{
              width: `${((currentSlide + 1) / SLIDES.length) * 100}%`,
            }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </main>
    </div>
  );
}
