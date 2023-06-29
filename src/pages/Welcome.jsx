import { Link } from 'react-router-dom';
import Card from '../modules/Card';

export default function Welcome() {
  return (
    <>
      <header className="bg-black p-5 mt-16">
        <h1 className="text-5xl text-primary py-5 font font-title">
          Hi! my name is Franco
        </h1>
        <p className="text-2xl ">
          I'm a self-taught Frontend developer. Always looking ahead to learn
          new things.
        </p>
      </header>
      <article className="mt-20 bg-secondary flex flex-col align-center p-3">
        <h2 className="text-2xl mb-10">These are some of my projects:</h2>
        <div className="flex flex-wrap gap-10 md:grid xl:grid-cols-3 2xl:grid-cols-4 grid-cols-2 items-center justify-center">
          <Card
            label={'Tic-Tac-Toe'}
            desc="Tic-Tac-Toe game using vanilla Javascript"
            pagelink={'https://francoasalinas.github.io/TicTacToe-project/'}
            codelink=""
            src="src\assets\tictac.png"
          />
          <Card
            label={'To-Do List'}
            desc="To-Do list using drag & drop"
            pagelink={'https://francoasalinas.github.io/To-Do-List/'}
            codelink=""
            src="src/assets/todo.png"
          />
          <Card
            label={'Weather App'}
            desc="Weather App using Weather API"
            pagelink={'https://francoasalinas.github.io/Weather-app/'}
            codelink=""
            src="src/assets/weather.png"
          />
          <Card label="See all my projects" />
        </div>
        <div className="mt-10">
          <Link to="works" className="mt">
            Click here to visit all my projects.
          </Link>
          <a href="#">Or here to visit my GitHub.</a>
        </div>
      </article>
    </>
  );
}
