
import { motion } from "framer-motion";
import { Heart, Play, Sparkles, ArrowDown } from "lucide-react";

export default function VideoSection({ onContinue }) {
  return (
    <main className="min-h-screen bg-[#FFF9F6] px-6 py-24">

      <section className="max-w-4xl mx-auto text-center">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Sparkles
            size={25}
            className="mx-auto text-[#D6B98C] mb-6"
          />

          <p className="text-[#C98291] uppercase tracking-[5px] text-xs mb-6">
            A little moment in motion
          </p>

          <h1 className="text-4xl md:text-6xl text-[#49332F]">
            Because some moments
            <br />
            <span className="italic text-[#C98291]">
              deserve to live on.
            </span>
          </h1>

          <p className="text-[#967B76] max-w-md mx-auto mt-7 leading-8">
            Pictures capture moments, but videos let us
            revisit a little piece of time.
            Here's another little piece of you.
          </p>
        </motion.div>

        {/* Video frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-14 max-w-sm mx-auto bg-white p-3 pb-5 shadow-xl rotate-1"
        >

          <div className="bg-[#F6DDE1] overflow-hidden">

            <video
              controls
              playsInline
              preload="metadata"
              poster="/images/kamsi-1.jpg"
              className="w-full max-h-[600px] object-contain"
            >
              <source
                src="/videos/kamsi-video.mp4"
                type="video/mp4"
              />

              Your browser does not support video playback.
            </video>

          </div>

          <div className="flex items-center justify-center gap-2 mt-5">
            <Heart
              size={16}
              fill="#C98291"
              color="#C98291"
            />

            <p className="text-[#967B76] italic text-sm">
              A little piece of Kamsi.
            </p>
          </div>

        </motion.div>

        {/* Continue button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20"
        >

          <p className="text-[#967B76] italic mb-7">
            There's something I've been wanting to tell you...
          </p>

          <button
            onClick={onContinue}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#B96E80] text-white hover:bg-[#965B6B] transition-all shadow-lg"
          >
            A letter for you
            <ArrowDown size={17} />
          </button>

        </motion.div>

      </section>
    </main>
  );
}
