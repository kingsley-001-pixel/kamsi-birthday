
import { motion } from "framer-motion";
import { Heart, Sparkles, ArrowDown } from "lucide-react";

export default function Memory({ onContinue }) {
  return (
    <main className="min-h-screen bg-[#FFF9F6] px-6 py-24 relative overflow-hidden">

      {/* Decorative elements */}
      <div className="absolute top-20 left-8 text-[#D6B98C] opacity-40">
        <Sparkles size={28} />
      </div>

      <div className="absolute bottom-32 right-8 text-[#C98291] opacity-30">
        <Heart size={30} />
      </div>

      <section className="max-w-3xl mx-auto">

        {/* Chapter heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-[#C98291] uppercase tracking-[5px] text-xs mb-6">
            A memory I kept
          </p>

          <h1 className="text-5xl md:text-7xl text-[#49332F] leading-tight">
            The Day
            <br />
            <span className="italic text-[#C98291]">
              Time Stood Still.
            </span>
          </h1>

          <p className="text-[#967B76] italic mt-7">
            Some moments stay with us longer than we expect.
          </p>
        </motion.div>

        {/* Story card */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="bg-white shadow-xl p-8 md:p-14 rounded-sm relative"
        >

          <div className="absolute top-4 left-4 text-[#E9BEC7] text-4xl">
            "
          </div>

          <div className="space-y-7 text-[#725A55] text-base md:text-lg leading-9">

            <p>
              I don't know if you remember that particular
              day at your mum's shop, upstairs.
            </p>

            <p>
              We were just lying down, having one of those
              ordinary moments. You were busy styling your
              hair, probably not thinking much of it.
            </p>

            <p>
              But somewhere in that moment, I caught myself
              looking at you.
            </p>

            <p className="text-[#B96E80] text-xl md:text-2xl italic leading-10">
              And Kamsi, you looked really beautiful.
            </p>

            <p>
              I can't really explain what happened in my head.
              It was such a simple moment, yet something about
              the way you looked made everything else feel
              quiet for a little while.
            </p>

            <p>
              It almost felt like time had paused. You were
              just there, being yourself, and I found myself
              wishing I could keep that little moment exactly
              as it was.
            </p>

            <p>
              I'll be honest, a thought crossed my mind.
              I was tempted to kiss you, but I didn't.
            </p>

            <p>
              And looking back, I'm glad I didn't turn a
              beautiful moment into something you hadn't
              chosen. Some feelings can be sincere without
              needing to be acted on in that instant.
            </p>

            <p>
              Funny enough, I don't think you realised how
              beautiful you looked to me that day.
            </p>

            <p>
              Maybe that's why I remember it. Nothing
              extraordinary happened, yet somehow, it became
              one of those little moments I don't want to forget.
            </p>

          </div>

          <div className="mt-12 pt-8 border-t border-[#F1E3DF] text-center">

            <Heart
              fill="#C98291"
              color="#C98291"
              size={22}
              className="mx-auto mb-4"
            />

            <p className="italic text-[#C98291] text-xl">
              Some moments don't need photographs
              to stay with us.
            </p>

          </div>

        </motion.div>

        {/* Continue */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >

          <p className="text-[#967B76] italic mb-7">
            And that's just one of the little things
            I wanted you to know.
          </p>

          <button
            onClick={onContinue}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#B96E80] text-white hover:bg-[#965B6B] transition-all shadow-lg"
          >
            There's something else for you
            <ArrowDown size={17} />
          </button>

        </motion.div>

      </section>
    </main>
  );
}
