
import { motion } from "framer-motion";
import { Heart, Sparkles, ArrowDown } from "lucide-react";

export default function Hero({ onContinue }) {
  return (
    <main className="min-h-screen bg-[#FFF9F6] relative overflow-hidden">

      <div className="absolute top-20 right-10 text-[#D6B98C] opacity-50">
        <Sparkles size={25} />
      </div>

      <div className="absolute top-1/2 left-8 text-[#C98291] opacity-30">
        <Heart size={25} />
      </div>

      <section className="max-w-6xl mx-auto min-h-screen px-6 py-16 flex flex-col justify-center items-center text-center">

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[#C98291] uppercase tracking-[5px] text-xs mb-8"
        >
          November 2, 2026
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-7xl text-[#49332F] leading-tight"
        >
          Happy Birthday,
          <br />
          <span className="italic text-[#C98291]">
            Kamsi.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-[#967B76] max-w-md mt-6 leading-8 text-sm md:text-base"
        >
          Today deserves more than an ordinary birthday wish.
          So I made you a little something, filled with thoughts,
          memories and words I hope will make you smile.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-12 relative"
        >
          <div className="absolute -inset-3 border border-[#D6B98C] rounded-t-full rounded-b-lg rotate-3" />

          <img
  src="/images/kamsi-1.jpg"
  alt="Kamsi"
  onError={(e) => {
    e.currentTarget.style.display = "none";
  }}
  className="w-64 h-80 md:w-72 md:h-96 object-cover rounded-t-full rounded-b-lg shadow-xl relative"
/>

          <div className="absolute -bottom-5 -right-5 bg-white p-3 rounded-full shadow-md">
            <Heart fill="#C98291" color="#C98291" size={23} />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="mt-16"
        >
          <p className="text-[#967B76] italic text-sm mb-5">
            A little reminder of how special you are.
          </p>

          <button
            onClick={onContinue}
            className="group flex items-center gap-3 mx-auto px-8 py-4 rounded-full bg-[#B96E80] text-white hover:bg-[#965B6B] transition-all duration-300 shadow-lg"
          >
            Explore your little surprise
            <ArrowDown
              size={17}
              className="group-hover:translate-y-1 transition-transform"
            />
          </button>
        </motion.div>

      </section>
    </main>
  );
}
