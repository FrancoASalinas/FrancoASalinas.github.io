import { motion } from 'framer-motion';
import css from '../assets/css.png';
import html from '../assets/html.png';
import js from '../assets/js.png';
import react from '../assets/react.png';
import sass from '../assets/sass.png';
import tailwind from '../assets/tailwind.png';
import git from '../assets/git.png';
import github from '../assets/github.png';
import ts from '../assets/ts.png';

export default function Skillset() {

  const ul = {
    show: {opacity: 100, transition: {
      staggerChildren: .3,
      delayChildren: .4
    }},
    hidden: {opacity: 0}
  }

  const item = {
    show: {opacity: 100},
    hidden: {opacity: 0}
  }

  const CustomListItem = ({src, label}) => {
    return (
      <motion.li className='group w-16 flex hover:scale-150 relative items-center justify-center transition-all flex-col z-1 hover:z-10' variants={item}>
      <img className='w-10 h-auto' src={src} alt={label} />
      <span className='group-hover:opacity-100 select-none absolute top-full z-10 opacity-0'>{label}</span>
    </motion.li>

    )
  }
  return (
    <section className="space-y-10 pb-10">
      <motion.h2 viewport={{once: true}} whileInView={{opacity: 100, x: 0}} initial={{opacity: 0, x: -200}} transition={{delay: 1, type: 'just'}} className="text-2xl">My Skillset:</motion.h2>
      <div className="sm:flex flex-col justify-center items-center">
        <motion.ul viewport={{once: true}} variants={ul} className='flex items-center flex-wrap gap-x-5 gap-y-8 justify-center place-items-center w-full' initial={'hidden'} whileInView={'show'}>
          <CustomListItem src={html} label='HTML' />
          <CustomListItem src={css} label='CSS' />
          <CustomListItem src={js} label='Javascript' />
          <CustomListItem src={ts} label='Typescript' />
          <CustomListItem src={react} label='React' />
          <CustomListItem src={sass} label='Sass' />
          <CustomListItem src={tailwind} label='Tailwind' />
          <CustomListItem src={git} label='Git' />
          <CustomListItem src={github} label='Github' />
        </motion.ul>
      </div>
    </section>
  );
}
