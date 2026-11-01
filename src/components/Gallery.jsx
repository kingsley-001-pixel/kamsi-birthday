
import { motion } from "framer-motion";
import { Heart, ArrowDown } from "lucide-react";

const memories = [
  {
    image: "/images/kamsi-1.jpg",
    caption: "A face that deserves to be admired.",
    note: "There's something beautiful about the way you carry yourself."
  },
  {
    image: "/images/kamsi-2.jpg",
    caption: "Simply, beautifully you.",
    note: "Never underestimate how much light you bring into a room."
  },
  {
    image: "/images/kamsi-3.jpg",
    caption: "One of my favourite views.",
    note: "I hope you always find reasons to smile as beautifully as this."
  }
];

export default function Gallery({ onContinue }) {
  return (
    <main className="min-h-screen bg-[#FFF9F6] px-6 py-24">

      <section className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-[#C98291] uppercase tracking-[5px] text-xs mb-5">
            A little collection
          </p>

          <h2 className="text-4xl md:text-6xl text-[#49332F]">
            Little pieces of
            <span className="italic text-[#C98291]"> you.</span>
          </h2>

          <p className="text-[#967B76] max-w-md mx-auto mt-6 leading-8">
            Three little reminders of someone who deserves
            to be celebrated, appreciated and loved.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {memories.map((memory, index) => (
            <motion.div
              key={memory.image}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`bg-white p-4 pb-8 shadow-lg ${
                index === 1 ? "md:rotate-3" : "md:-rotate-2"
              } hover:rotate-0 hover:-translate-y-2 transition-all duration-500`}
            >

              <div className="overflow-hidden">
                <img
                  src={memory.image}
                  alt={`Kamsi photograph ${index + 1}`}
                  className="w-full h-80 object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>

              <div className="text-center mt-6 px-2">

                <Heart
                  size={18}
                  fill="#C98291"
                  color="#C98291"
                  className="mx-auto mb-4"
                />

                <h3 className="text-xl text-[#49332F] italic">
                  {memory.caption}
                </h3>

                <p className="text-sm text-[#967B76] mt-3 leading-7">
                  {memory.note}
                </p>

              </div>

            </motion.div>
          ))}

        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <p className="text-[#967B76] italic mb-6">
            And there's one particular moment I want to tell you about...
          </p>

          <button
            onClick={onContinue}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#B96E80] text-white hover:bg-[#965B6B] transition-all shadow-lg"
          >
            There's a story behind this
            <ArrowDown size={17} />
          </button>

        </motion.div>

      </section>
    </main>
  );
}
