import Card from '../modules/Card';
import CardContent from '../modules/CardContent';
import CardsContainer from '../modules/CardsContainer';
import calculator from '../assets/calculator.png';
import change from '../assets/change.png';
import tictac from '../assets/tictac.png';
import weather from '../assets/weather.png';
import webpage from '../assets/webpage.png';
import todo from '../assets/todo.png';
import chelsea from '../assets/chelsea.png';
import recipescalc from '../assets/recipescalc.png';
import football from '../assets/football.png';

export default function Projects() {
  return (
    <>
      <div className=" my-28 sm:min-w-[640px] sm:w-3/4 mx-auto flex flex-col align-center p-5  ">
      <header className="text-3xl p-5 ">Here you can see all my projects:</header>
        <CardsContainer>
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
          <Card label="WebPage Project" src={webpage} cover>
              <CardContent
                desc="First Webpage I made, I used vanilla Javascript"
                linkCode='https://github.com/FrancoASalinas/webpage-project'
                linkPage="https://francoasalinas.github.io/webpage-project/"
              />
            </Card>
            <Card label={'Recipes Calculator'} src={recipescalc}>
              <CardContent
              linkCode='https://github.com/FrancoASalinas/Recipes-calculator'
                linkPage={
                  'https://francoasalinas.github.io/Recipes-calculator/'
                }
                desc="SPA that calculates the amount of ingredients for a given recipe with a modified output target. I made this one using React & MaterialUI"
              />
            </Card>
          <Card label="Change Game" src={change}>
            <CardContent
              desc="This is a game that looks for simulating change returning, obviusly in it's core is a substraction game, I made this one using vanilla Javascript"
              linkCode='https://github.com/FrancoASalinas/Generador-de-Vueltos'
              linkPage="https://francoasalinas.github.io/Generador-de-Vueltos/"
            />
          </Card>
          <Card label={'To-Do List'} src={todo}>
            <CardContent
            linkCode='https://github.com/FrancoASalinas/To-Do-List'
              linkPage={'https://francoasalinas.github.io/To-Do-List/'}
              desc="To-Do list using drag & drop"
            />
          </Card>
          <Card label={'Tic-Tac-Toe'} src={tictac}>
            <CardContent
            linkCode='https://github.com/FrancoASalinas/TicTacToe-project'
              linkPage={'https://francoasalinas.github.io/TicTacToe-project/'}
              desc="Tic-Tac-Toe game using vanilla Javascript"
            />
          </Card>

          <Card label={'Weather App'} src={weather}>
            <CardContent
            linkCode='https://github.com/FrancoASalinas/Weather-app'
              desc="Weather App using Weather API"
              linkPage={'https://francoasalinas.github.io/Weather-app/'}
            />
          </Card>
          <Card label="Calculator" src={calculator}>
            <CardContent
            linkCode='https://github.com/FrancoASalinas/calcProject'
              desc="The legendary calculator, my first project on Javascript."
              linkPage="https://francoasalinas.github.io/calcProject/"
              />
          </Card>
        </CardsContainer>
      </div>
  </>
  );
}
