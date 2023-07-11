import Card from '../modules/Card';
import CardContent from '../modules/CardContent';
import CardsContainer from '../modules/CardsContainer';
import calculator from '../assets/calculator.png';
import change from '../assets/change.png';
import tictac from '../assets/tictac.png';
import wattpad from '../assets/wattpad.png';
import weather from '../assets/weather.png';
import webpage from '../assets/webpage.png';
import todo from '../assets/todo.png';
import chelsea from '../assets/chelsea.png';
import recipescalc from '../assets/recipescalc.png';

export default function Projects() {
  return (
    <div className="w-full bg-secondary mt-16 p-5">
      <h2 className="text-3xl">This is where you can see all my projects:</h2>
      <div className="mt-16">
        <CardsContainer>
          <Card label="Chelsea clone" src={chelsea} cover>
            <CardContent
              desc="My last project, used React & Tailwind for this one"
              linkPage="https://francoasalinas.github.io/Chelsea-clone-project/"
            />
          </Card>
          <Card label={'Recipes Calculator'} src={recipescalc}>
            <CardContent
              linkPage={'https://francoasalinas.github.io/Recipes-calculator/'}
              desc="SPA that calculates the amount of ingredients for a given recipe with a modified output target. I made this one using React & MaterialUI"
            />
          </Card>
          <Card label="Wattpad Clone" src={wattpad} cover>
            <CardContent
              desc="This was my first try cloning a webpage, I used React and SCSS"
              linkPage="https://francoasalinas.github.io/Wattpad-clone/"
            />
          </Card>
          <Card label="WebPage Project" src={webpage} cover>
            <CardContent
              desc="First Webpage I made, I used vanilla Javascript"
              linkPage="https://francoasalinas.github.io/webpage-project/"
            />
          </Card>
          <Card label="Change Game" src={change}>
            <CardContent
              desc="This is a game I made for a friend who got a job as a cashier, he wanted some practice at returning the change, so I made him this one using vanilla Javascript."
              linkPage="https://francoasalinas.github.io/Generador-de-Vueltos/"
            />
          </Card>
          <Card label={'To-Do List'} src={todo}>
            <CardContent
              linkPage={'https://francoasalinas.github.io/To-Do-List/'}
              desc="To-Do list using drag & drop"
            />
          </Card>
          <Card label={'Tic-Tac-Toe'} src={tictac}>
            <CardContent
              linkPage={'https://francoasalinas.github.io/TicTacToe-project/'}
              desc="Tic-Tac-Toe game using vanilla Javascript"
            />
          </Card>

          <Card label={'Weather App'} src={weather}>
            <CardContent
              desc="Weather App using Weather API"
              linkPage={'https://francoasalinas.github.io/Weather-app/'}
            />
          </Card>
          <Card label="Calculator" src={calculator}>
            <CardContent
              desc="The legendary calculator, my first project on Javascript."
              linkPage="https://francoasalinas.github.io/calcProject/"
            />
          </Card>
        </CardsContainer>
      </div>
    </div>
  );
}
