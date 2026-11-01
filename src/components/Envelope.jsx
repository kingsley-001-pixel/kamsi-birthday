
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";

export default function Envelope({ onOpen }) {
  const [opened, setOpened] = useState(false);

  const handleOpen = () => {
    setOpened(true);
  };

  return (
    <main className="min-h-screen bg-[#FFF9F6] flex items-center justify-center px-5 overflow-hidden relative">

      {/* Decorative background */}
      <div className="absolute top-16 left-10 text-[#D6B98C] opacity-50">
        <Sparkles size={25} />
      </div>

      <div className="absolute bottom-24 right-10 text-[#C98291] opacity-40">
        <Heart size={30} />
      </div>

      <div className="relative z-10 text-center max-w-md w-full">

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="uppercase tracking-[5px] text-xs text-[#C98291] mb-5"
        >
          A little something for you
        </motion.p>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-5xl text-[#49332F] mb-3"
        >
          Dear Kamsi,
        </motion.h1>

        <p className="text-[#967B76] text-sm mb-12">
          Some things are too beautiful to leave unsaid.
        </p>

        {/* Envelope */}
        <div className="relative mx-auto w-72 h-48">

          <div className="absolute inset-0 bg-[#F3D5DA] rounded-md shadow-xl" />

          {/* Envelope letter */}
          <AnimatePresence>
            {opened && (
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: -125, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="absolute left-5 right-5 top-4 h-40 bg-white rounded-sm shadow-md z-[25] flex flex-col items-center justify-center"
              >
                <Heart className="text-[#C98291] mb-3" />
                <p className="text-[#49332F] italic text-lg">
                  Made with love,
                </p>
                <p className="text-[#C98291] text-sm mt-1">
                  Just for you.
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Envelope flap */}
          <motion.div
            animate={opened ? { rotateX: 180 } : { rotateX: 0 }}
            transition={{ duration: 0.7 }}
            style={{ transformOrigin: "top" }}
            className="absolute top-0 left-0 w-full h-24 bg-[#E9BEC7] z-20"
          >
            <div
              className="absolute inset-0"
              style={{
                clipPath: "polygon(0 0, 100% 0, 50% 100%)",
              }}
            />
          </motion.div>

          {/* Wax seal */}
          {!opened && (
            <motion.button
              onClick={handleOpen}
              whileHover={{ scale: 1.12 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Open Kamsi's birthday envelope"
              className="absolute z-30 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-[#B96E80] shadow-lg flex items-center justify-center text-white"
            >
              <Heart fill="white" size={23} />
            </motion.button>
          )}

          {/* Envelope bottom folds */}
          <div
            className="absolute inset-0 z-[15] pointer-events-none"
            style={{
              background: "#F6DDE1",
              clipPath: "polygon(0 100%, 50% 48%, 100% 100%)",
            }}
          />

        </div>

        <AnimatePresence mode="wait">
          {!opened ? (
            <motion.div
              key="open"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-16"
            >
              <button
                onClick={handleOpen}
                className="px-8 py-3 rounded-full bg-[#B96E80] text-white text-sm tracking-wide hover:bg-[#965B6B] transition"
              >
                Open your surprise ♡
              </button>
            </motion.div>
          ) : (
            <motion.div
              key="continue"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-16"
            >
              <p className="text-[#967B76] italic mb-5">
                There's a little world waiting for you...
              </p>

              <button
                onClick={onOpen}
                className="px-8 py-3 rounded-full bg-[#B96E80] text-white text-sm hover:bg-[#965B6B] transition"
              >
                Step inside →
              </button>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </main>
  );
}
