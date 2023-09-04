import { Link } from 'react-router-dom';
import Card from '../modules/Card';
import CardContent from '../modules/CardContent';
import CardsContainer from '../modules/CardsContainer';
import Typewriter from 'typewriter-effect';
import webpage from '../assets/webpage.png';
import chelsea from '../assets/chelsea.png';
import Skillset from '../modules/Skillset';
import codeimg from '../assets/codeimg.jpg';
import recipescalc from '../assets/recipescalc.png';
import football from '../assets/football.png';
import { motion, useScroll } from 'framer-motion';

export default function Welcome() {
  const scroll = useScroll();

  return (
    <>
      <motion.header className=" p-3 min-h-screen flex flex-col justify-center gap-5 items-center sm:px-36 mx-auto">
        <h1 className="xl:text-6xl h-[calc(2.25rem_*_3)] items-center text-3xl text-primary font-bold py-3 w-full justify-center flex font-def">
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
                .typeString('Salinas')
                .pauseFor(500)
                .deleteChars(7)
                .pauseFor(500)
                .typeString('Miño');
            }}
            options={{
              cursor: '_',
              cursorClassName: 'cursor',
            }}
          />
        </h1>
        <motion.p className="text-2xl flex flex-col  xl:flex-row justify-center gap-2">
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
        </motion.p>
      </motion.header>
      <motion.article
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="sm:min-w-[640px] sm:w-3/4 rounded-2xl mx-auto flex flex-col align-center p-5 mb-16"
      >
        <section>
          <h2 className="text-2xl mb-10 ">
            These are some of my{' '}
            <Link to="works" className="text-[#E8A005] underline">
              projects
            </Link>
            :
          </h2>
          <CardsContainer className="flex flex-wrap gap-10 md:grid items-center justify-center">
            <Card label={'Football Stats'} src={football}>
              <CardContent
                linkPage={'https://francoasalinas.github.io/FootballStats-v2/'}
                desc="PWA that uses Football API, showing stats for players, competitions and teams using React, Tailwind and libraries like react-router and Zustand."
              />
            </Card>
            <Card label="Chelsea clone" src={chelsea} cover>
              <CardContent
                desc="Chelsea clone page, I used React and Tailwind"
                linkPage="https://francoasalinas.github.io/Chelsea-clone-project/"
              />
            </Card>
            <Card label="WebPage Project" src={webpage} cover>
              <CardContent
                desc="First Webpage I made, I used vanilla Javascript"
                linkPage="https://francoasalinas.github.io/webpage-project/"
              />
            </Card>
            <Card label={'Recipes Calculator'} src={recipescalc}>
              <CardContent
                linkPage={
                  'https://francoasalinas.github.io/Recipes-calculator/'
                }
                desc="SPA that calculates the amount of ingredients for a given recipe with a modified output target. I made this one using React & MaterialUI"
              />
            </Card>
            <Card label="See all my projects" src={codeimg}>
              <CardContent>
                <button className="bg-[#E8A005] text-secondary rounded-md p-1 m-1">
                  <Link to="works">Let's go!</Link>
                </button>
              </CardContent>
            </Card>
          </CardsContainer>
        </section>
        <div className="w-full border-t border-white border-opacity-30 my-16 px-24"></div>
        <Skillset />
      </motion.article>
    </>
  );
}
