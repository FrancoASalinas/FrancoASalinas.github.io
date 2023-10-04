import { Link } from 'react-router-dom';
import Card from '../modules/Card';
import CardContent from '../modules/CardContent';
import CardsContainer from '../modules/CardsContainer';
import Typewriter from 'typewriter-effect';
import chelsea from '../assets/chelsea.png';
import Skillset from '../modules/Skillset';
import reciper from '../assets/reciper-narrow.png';
import football from '../assets/football.png';
import rickAndMorty from '../assets/rm.png'
import { motion, useScroll } from 'framer-motion';

export default function Welcome() {
  const scroll = useScroll();

  return (
    <>
      <motion.header className=" p-3 min-h-screen flex flex-col justify-center gap-5 items-center sm:px-36 mx-auto">
        <h1 className="xl:text-6xl h-[calc(2.25rem_*_3)] items-center text-3xl text-primary font-bold py-3 w-full justify-center text-center flex font-def">
          <Typewriter
            component={'p'}
            onInit={(typewriter) => {
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
        <p className="text-2xl flex flex-col  xl:flex-row justify-center gap-2">
          <motion.span
            transition={{ delay: 2, type: 'just' }}
            className=" py-5 justify-center flex-wrap text-center flex items-center"
            animate={{ x: [-300, 0], opacity: [0, 100] }}
          >
            I'm a Frontend developer.
          </motion.span>
          <motion.span
            transition={{ delay: 3.5, type: 'just' }}
            className=" py-5 xl:mt-10 justify-center flex-wrap text-center flex items-center"
            animate={{ x: [300, 0], opacity: [0, 100] }}
          >
            {' Always looking ahead to learn new things.'}
          </motion.span>
        </p>
      </motion.header>
      <article
        className="sm:min-w-[640px] max-w-5xl sm:w-3/4 rounded-2xl mx-auto flex flex-col align-center p-5 mb-16"
      >
        <section>
          <motion.h2 className="text-2xl mb-10" viewport={{once: true}} whileInView={{opacity: 100, x: 0}} initial={{opacity: 0, x: -200}} transition={{delay: 1, type: 'just'}}>
            These are some of my{' '}
            <Link to="works" className="text-[#E8A005] underline">
              projects
            </Link>
            :
          </motion.h2>
          <CardsContainer className="flex flex-wrap gap-10 md:grid items-center justify-center">
            <Card label={'Rick and Morty DB'} src={rickAndMorty}>
              <CardContent
                linkCode='https://github.com/FrancoASalinas/rick-and-morty'
                linkPage={'https://rickandmorty-db.vercel.app/'}
                desc="NextJS app where the user can look for characters, locations and episodes of the Rick and Morty universe thanks to Rick and Morty API (GraphQL), I used Typescript for this project."
              />
            </Card>
            <Card label={'Football Stats'} src={football}>
              <CardContent
                linkCode='https://github.com/FrancoASalinas/FootballStats-v2'
                linkPage={'https://francoasalinas.github.io/FootballStats-v2/'}
                desc="PWA that uses Football API, showing stats for players, competitions and teams using React, Tailwind and libraries like react-router and Zustand."
              />
            </Card>
            <Card label="Chelsea clone" src={chelsea} cover>
              <CardContent
                desc="Chelsea clone page, I used React and Tailwind"
                linkCode='https://github.com/FrancoASalinas/Chelsea-clone-project'
                linkPage="https://francoasalinas.github.io/Chelsea-clone-project/"
              />
            </Card>
            <Card label="Reciper" src={reciper} cover>
              <CardContent
                desc="Reciper is an app for resizing recipes, I used React, Tailwind and react-router"
                linkCode='https://github.com/FrancoASalinas/Recipes-calculator/'
                linkPage="https://francoasalinas.github.io/Recipes-calculator/"
              />
            </Card>
          </CardsContainer>
        </section>
        <motion.div whileInView={{opacity: 100}} initial={{opacity: 0}} className="w-full border-t border-white border-opacity-30 my-16 px-24"></motion.div>
        <Skillset />
      </article>
    </>
  );
}
