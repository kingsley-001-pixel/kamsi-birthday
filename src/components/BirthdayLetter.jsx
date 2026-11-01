
import { motion } from "framer-motion";
import { Heart, Sparkles, ArrowDown } from "lucide-react";

export default function BirthdayLetter({ onContinue }) {
  return (
    <main className="min-h-screen bg-[#FFF9F6] px-6 py-24">

      <section className="max-w-3xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Sparkles
            className="mx-auto text-[#D6B98C] mb-6"
            size={26}
          />

          <p className="text-[#C98291] uppercase tracking-[5px] text-xs mb-6">
            A few words from me
          </p>

          <h1 className="text-5xl md:text-6xl text-[#49332F]">
            A Letter
            <br />
            <span className="italic text-[#C98291]">
              To You, Kamsi.
            </span>
          </h1>

        </motion.div>

        {/* Letter */}
        <motion.article
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="bg-white shadow-xl px-7 py-12 md:px-16 md:py-16 relative"
        >

          <div className="absolute top-5 right-6 text-[#E9BEC7]">
            <Heart size={25} />
          </div>

          <div className="space-y-6 text-[#725A55] leading-9 text-base md:text-lg">

            <p className="italic text-[#C98291] text-xl">
              Dear Kamsi,
            </p>

            <p>
              First of all, happy birthday! ❤️
            </p>

            <p>
              I hope you know that today isn't just another
              date on the calendar. It's a reminder that
              someone as wonderfully unique as you gets
              to experience another year of life, growth,
              possibilities and beautiful moments.
            </p>

            <p>
              I hope this new chapter gives you reasons
              to smile even on days when smiling feels
              difficult. I hope you find opportunities
              that excite you, people who genuinely value
              you, and moments that remind you how far
              you've come.
            </p>

            <p>
              I hope you never feel the need to become
              someone else just to be appreciated.
              There's beauty in the person you already
              are, in your different moods, your laughter,
              your little imperfections and everything
              that makes you Kamsi.
            </p>

            <p>
              I also hope you give yourself more credit.
              For the things you've overcome, the things
              you're still figuring out, and the person
              you're gradually becoming.
            </p>

            <p>
              I may not always have the perfect words
              to express certain things, but I genuinely
              think you're someone worth appreciating.
              And I'm glad our paths crossed.
            </p>

            <p>
              May this year bring you peace that stays,
              happiness that feels genuine, unexpected
              blessings, answered prayers and memories
              that make you grateful you lived them.
            </p>

            <p>
              And whenever life gets busy, difficult or
              overwhelming, I hope you remember that
              you deserve kindness, patience, softness
              and all the beautiful things life has to offer.
            </p>

            <p className="text-[#B96E80] italic text-xl">
              Please keep being you. The world is better
              with your own little touch in it.
            </p>

            <div className="pt-8 border-t border-[#F1E3DF]">

              <p className="italic">
                Happy birthday once again, Kamsi.
              </p>

              <p className="mt-5 text-[#C98291] text-2xl italic">
                With warmth and genuine affection,
              </p>

              <p className="text-[#49332F] text-xl mt-2">
                Kingsley. ❤️
              </p>

            </div>

          </div>

        </motion.article>

        {/* Continue */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >

          <p className="text-[#967B76] italic mb-7">
            But wait... I saved one last surprise for you.
          </p>

          <button
            onClick={onContinue}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#B96E80] text-white hover:bg-[#965B6B] transition-all shadow-lg"
          >
            One last thing
            <ArrowDown size={17} />
          </button>

        </motion.div>

      </section>
    </main>
  );
}
