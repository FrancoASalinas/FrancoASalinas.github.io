import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0},
  show: {opacity: 100, transition: {
    delayChildren: .5,
    staggerChildren: .3
  }}
}

export const card = {
  hidden: {opacity: 0},
  show: {opacity: 100}
}
export default function CardsContainer({ children }) {


  return (
    <motion.div variants={container} viewport={{once: true}} initial={'hidden'} whileInView={'show'} className="flex flex-wrap gap-10 md:grid xl:grid-cols-3 2xl:grid-cols-4 grid-cols-2 items-center justify-center">
      {children}
    </motion.div>
  );
}
