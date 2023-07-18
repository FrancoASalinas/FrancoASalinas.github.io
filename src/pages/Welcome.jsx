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

export default function Welcome() {
  return (
    <>
      <header className="bg-black p-5 mt-16">
        <h1 className="text-5xl text-primary font-bold py-5  font-def">
          <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString(' Hi! my name is Franco').start();
            }}
            options={{
              cursor: '_',
              cursorClassName: 'cursor',
            }}
          />
        </h1>
        <p className="text-2xl ">
          I'm a self-taught Frontend developer. Always looking ahead to learn
          new things.
        </p>
      </header>
      <article className="mt-20 bg-secondary flex flex-col align-center p-3">
        <section>
          <h2 className="text-2xl mb-10 ">
            These are some of my{' '}
            <Link to="works" className="text-[#E8A005] underline">
              projects
            </Link>
            :
          </h2>
          <CardsContainer className="flex flex-wrap gap-10 md:grid xl:grid-cols-3 2xl:grid-cols-4 grid-cols-2 items-center justify-center">
            <Card label="Chelsea clone" src={chelsea} cover>
              <CardContent
                desc="My last project, used React & Tailwind for this one"
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
      </article>
    </>
  );
}
