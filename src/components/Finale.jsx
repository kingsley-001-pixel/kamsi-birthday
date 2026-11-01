
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Heart,
  Sparkles,
  RotateCcw,
  PartyPopper
} from "lucide-react";

export default function Finale({ onReplay }) {
  const [candleOut, setCandleOut] = useState(false);

  return (
    <main className="min-h-screen bg-[#FFF9F6] flex items-center justify-center px-6 py-20 overflow-hidden relative">

      {/* Floating decorations */}
      {Array.from({ length: 12 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-[#C98291] opacity-50 pointer-events-none"
          initial={{
            y: "100vh",
            x: `${(i * 37) % 100}vw`,
            opacity: 0
          }}
          animate={{
            y: "-10vh",
            opacity: [0, 0.7, 0]
          }}
          transition={{
            duration: 7 + (i % 4),
            repeat: Infinity,
            delay: i * 0.5
          }}
        >
          <Heart size={12 + (i % 3) * 7} fill="currentColor" />
        </motion.div>
      ))}

      <section className="relative z-10 max-w-2xl w-full text-center">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Sparkles
            size={28}
            className="mx-auto text-[#D6B98C] mb-7"
          />

          <p className="text-[#C98291] uppercase tracking-[5px] text-xs mb-6">
            And finally...
          </p>

          <h1 className="text-5xl md:text-7xl text-[#49332F] leading-tight">
            Happy Birthday,
            <br />
            <span className="italic text-[#C98291]">
              Beautiful Kamsi.
            </span>
          </h1>

          <p className="text-[#967B76] mt-7 leading-8 max-w-md mx-auto">
            May your days be filled with unexpected happiness,
            beautiful opportunities, genuine love and countless
            reasons to smile.
          </p>
        </motion.div>

        {/* Birthday cake */}
        <motion.div
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-16 mb-12 flex flex-col items-center"
        >

          {/* Candle */}
          <div className="relative mb-1">

            {!candleOut && (
              <motion.div
                animate={{
                  scale: [1, 1.15, 0.9, 1],
                  opacity: [1, 0.8, 1]
                }}
                transition={{ duration: 1, repeat: Infinity }}
                className="w-5 h-7 bg-[#E9B75F] rounded-full blur-[2px]"
              />
            )}

            <div className="w-3 h-14 bg-[#F2C8CF] mx-auto rounded-sm" />

          </div>

          {/* Cake layers */}
          <div className="w-48 h-16 bg-[#E9BEC7] rounded-t-xl relative shadow-md">
            <div className="absolute top-0 left-0 right-0 h-5 bg-[#FFF0ED] rounded-full" />
            <div className="absolute bottom-0 left-0 right-0 h-3 bg-[#C98291] rounded-b-xl" />
          </div>

          <div className="w-56 h-10 bg-[#C98291] rounded-b-xl shadow-lg relative">
            <div className="absolute top-0 left-0 right-0 h-3 bg-[#F6DDE1] rounded-full" />
          </div>

          <p className="text-[#967B76] italic text-sm mt-7">
            {candleOut
              ? "Your wish is on its way... ❤️"
              : "Make a wish, Kamsi."}
          </p>

          <button
            onClick={() => setCandleOut(true)}
            disabled={candleOut}
            className="mt-4 px-7 py-3 rounded-full bg-[#B96E80] text-white text-sm hover:bg-[#965B6B] disabled:opacity-60 transition"
          >
            {candleOut ? "Wish made ♡" : "Blow out your candle"}
          </button>

        </motion.div>

        {/* Final message */}
        <AnimatePresence>
          {candleOut && (
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white p-7 md:p-10 shadow-lg rounded-sm"
            >
              <PartyPopper
                className="mx-auto text-[#C98291] mb-5"
                size={30}
              />

              <h2 className="text-2xl md:text-3xl italic text-[#49332F]">
                Here's to you, Kamsi.
              </h2>

              <p className="text-[#967B76] mt-5 leading-8">
                Never forget that you are worthy of beautiful
                things, beautiful experiences and genuine
                happiness.
              </p>

              <p className="text-[#C98291] italic mt-6 text-xl">
                Keep shining. Keep growing. Keep being you.
              </p>

              <Heart
                fill="#C98291"
                color="#C98291"
                className="mx-auto mt-7"
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Replay */}
        <button
          onClick={onReplay}
          className="mt-14 inline-flex items-center gap-3 text-[#967B76] hover:text-[#B96E80] transition text-sm"
        >
          <RotateCcw size={16} />
          Experience it again
        </button>

        <p className="text-xs text-[#BDA6A0] mt-10">
          Made with genuine affection, just for you. ❤️
        </p>

      </section>
    </main>
  );
}
