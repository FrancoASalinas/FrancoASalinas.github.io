import { motion } from 'framer-motion';
import { card } from './CardsContainer';
export default function Card({ label, src, children, cover }) {
  return (
    <motion.div
      variants={card}
      className="border-2 py-6 border-emphasis rounded-3xl px-6 flex-col md:grid  flex grid-rows-[20px_1fr] grid-cols-[16rem_1fr] justify-items-center items-center w-[18rem] md:w-[40rem] gap-5 md:h-[20rem] place-self-center"
    >
      <h3 className="text-white row-[1/2] col-[1/3] text-xl mb-2">{label}</h3>
      <div className="border col-[1/2] relative border-[#aaa] w-full h-full rounded-3xl overflow-hidden">
        <img
          src={src}
          alt=""
          className={`rounded-3xl w-full h-full aspect-square object-cover `}
        />
      </div>
      <div className="pt-5 h-full col-[2/3]">{children}</div>
    </motion.div>
  );
}
