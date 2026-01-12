"use client";

import React, { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
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
  Slide01_Cover,
  Slide02_Background,
  Slide03_AsIs,
  Slide04_Problem,
  Slide05_Objectives,
  Slide06_Benefits,
  Slide07_Scope,
  Slide08_ToBe,
  Slide09_Methodology,
  Slide10_Implementation,
  Slide11_Backcover,
];

export default function SlideDeck() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showGrid, setShowGrid] = useState(false);

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
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide, showGrid]);

  const CurrentSlideComponent = SLIDES[currentSlide];

  return (
    <main className="relative w-screen h-screen bg-zinc-950 overflow-hidden text-white">
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
            className="absolute inset-0 z-50 bg-black/80 flex items-center justify-center p-12"
            onClick={() => setShowGrid(false)}
          >
            <div className="grid grid-cols-4 md:grid-cols-6 gap-4 w-full max-w-6xl">
              {SLIDES.map((SlideComp, index) => (
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
                      : "bg-zinc-900 border-zinc-800 hover:border-zinc-500"
                  }`}
                >
                  <div className="absolute top-2 left-2 text-xs font-mono opacity-50">
                    {index + 1}
                  </div>
                  {/* Mini Preview Placeholder (Using Slide Name or Content) */}
                  <div className="text-[10px] uppercase tracking-widest text-center px-2 opacity-70">
                    {SlideComp.name.replace("Slide", "").replace(/_/g, " ")}
                  </div>
                </button>
              ))}
            </div>
            <div className="absolute bottom-8 text-center text-zinc-500 text-sm">
              Press{" "}
              <span className="text-white font-mono px-2 py-1 bg-zinc-800 rounded">
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
          className="pointer-events-auto p-2 rounded-full bg-zinc-800/50 hover:bg-zinc-700/80 disabled:opacity-0 transition opacity-0 group-hover:opacity-100"
        >
          <ChevronLeft size={32} />
        </button>

        <div className="pointer-events-auto flex flex-col items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="text-sm font-mono text-zinc-500">
            {currentSlide + 1} / {SLIDES.length}
          </div>
          <button
            onClick={() => setShowGrid(true)}
            className="text-xs text-zinc-400 hover:text-white underline underline-offset-4"
          >
            View Grid
          </button>
        </div>

        <button
          onClick={nextSlide}
          disabled={currentSlide === SLIDES.length - 1}
          className="pointer-events-auto p-2 rounded-full bg-zinc-800/50 hover:bg-zinc-700/80 disabled:opacity-0 transition opacity-0 group-hover:opacity-100"
        >
          <ChevronRight size={32} />
        </button>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-zinc-900 z-30">
        <motion.div
          className="h-full bg-blue-500"
          initial={{ width: 0 }}
          animate={{ width: `${((currentSlide + 1) / SLIDES.length) * 100}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </main>
  );
}
