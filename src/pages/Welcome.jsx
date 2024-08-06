import { Link } from 'react-router-dom';
import CardsContainer from '../modules/CardsContainer';
import Typewriter from 'typewriter-effect';
import Skillset from '../modules/Skillset';
import { motion } from 'framer-motion';
import {SayIt, RickandMorty, FootballStats, Chelsea, Reciper, SlumberSync, WeatherExplorer} from '../modules/ProjectCards';

export default function Welcome() {
  return (
    <>
      <motion.header className=' p-3 min-h-screen flex flex-col justify-center gap-5 items-center sm:px-36 mx-auto'>
        <h1 className='xl:text-6xl h-[calc(2.25rem_*_3)] items-center text-3xl text-primary font-bold py-3 w-full justify-center text-center flex font-def'>
          <Typewriter
            component={'p'}
            onInit={typewriter => {
              typewriter
                .pauseFor(500)
                .typeString('Hi! my name is Franco ')
                .start()
                .pauseFor(500)
                .typeString('Andrés')
                .pauseFor(500)
                .deleteChars(6)
                .pauseFor(500)
                .typeString('Miño');
            }}
            options={{
              cursor: '_',
              cursorClassName: 'cursor',
            }}
          />
        </h1>
        <p className='text-2xl flex flex-col  xl:flex-row justify-center gap-2'>
          <motion.span
            transition={{ delay: 2, type: 'just' }}
            className=' py-5 justify-center flex-wrap text-center flex items-center'
            animate={{ x: [-300, 0], opacity: [0, 100] }}
          >
            I'm a Frontend developer.
          </motion.span>
          <motion.span
            transition={{ delay: 3.5, type: 'just' }}
            className=' py-5 xl:mt-10 justify-center flex-wrap text-center flex items-center'
            animate={{ x: [300, 0], opacity: [0, 100] }}
          >
            {' Always looking ahead to learn new things.'}
          </motion.span>
        </p>
      </motion.header>
      <article className='sm:min-w-[640px] max-w-5xl sm:w-3/4 rounded-2xl mx-auto flex flex-col align-center p-5 mb-16'>
        <section>
          <motion.h2
            className='text-2xl mb-10'
            viewport={{ once: true }}
            whileInView={{ opacity: 100, x: 0 }}
            initial={{ opacity: 0, x: -200 }}
            transition={{ delay: 1, type: 'just' }}
          >
            These are some of my{' '}
            <Link to='works' className='underline text-primary decoration-[#474747]'>
              projects
            </Link>
            :
          </motion.h2>
          <CardsContainer className='flex flex-wrap gap-10 md:grid items-center justify-center'>
            <WeatherExplorer />
            <SlumberSync/>
            <SayIt />
            <RickandMorty/>
            <Chelsea/>
            <Reciper/>
          </CardsContainer>
        </section>
        <motion.div
          whileInView={{ opacity: 100 }}
          initial={{ opacity: 0 }}
          className='w-full border-t border-white border-opacity-30 my-16 px-24'
        ></motion.div>
        <Skillset />
      </article>
    </>
  );
}
