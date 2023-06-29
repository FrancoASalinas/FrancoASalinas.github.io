import { Link } from 'react-router-dom';
import Card from '../modules/Card';
import CardContent from '../modules/CardContent';
import CardsContainer from '../modules/CardsContainer';
import Typewriter from 'typewriter-effect';

export default function Welcome() {
  return (
    <>
      <header className="bg-black p-5 mt-16">
        <h1 className="text-5xl text-primary py-5 font font-title">
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
        <h2 className="text-2xl mb-10 ">
          These are some of my{' '}
          <Link to="/Works" className="text-[#E8A005] underline">
            projects
          </Link>
          :
        </h2>
        <CardsContainer className="flex flex-wrap gap-10 md:grid xl:grid-cols-3 2xl:grid-cols-4 grid-cols-2 items-center justify-center">
          <Card label={'Tic-Tac-Toe'} src="src\assets\tictac.png">
            <CardContent
              linkPage={'https://francoasalinas.github.io/TicTacToe-project/'}
              desc="Tic-Tac-Toe game using vanilla Javascript"
            />
          </Card>
          <Card label={'To-Do List'} codelink="" src="src/assets/todo.png">
            <CardContent
              linkPage={'https://francoasalinas.github.io/To-Do-List/'}
              desc="To-Do list using drag & drop"
            />
          </Card>
          <Card label={'Weather App'} codelink="" src="src/assets/weather.png">
            <CardContent
              desc="Weather App using Weather API"
              linkPage={'https://francoasalinas.github.io/Weather-app/'}
            />
          </Card>
          <Card label="See all my projects" src="https://picsum.photos/1000">
            <CardContent>
              <button className="bg-[#E8A005] text-secondary rounded-md p-1 m-1">
                <Link to="/Works">Let's go!</Link>
              </button>
            </CardContent>
          </Card>
        </CardsContainer>
      </article>
    </>
  );
}
