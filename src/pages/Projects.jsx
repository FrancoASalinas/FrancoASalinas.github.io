import Card from '../modules/Card';
import CardContent from '../modules/CardContent';
import CardsContainer from '../modules/CardsContainer';

export default function Projects() {
  return (
    <div className="w-full bg-secondary mt-16 p-5">
      <h2 className="text-3xl">
        This is where you can see all my projects, have fun!.
      </h2>
      <div className="mt-16">
        <CardsContainer>
          <Card label={'Tic-Tac-Toe'} src="src\assets\tictac.png">
            <CardContent
              linkPage={'https://francoasalinas.github.io/TicTacToe-project/'}
              desc="Tic-Tac-Toe game using vanilla Javascript"
            />
          </Card>
          <Card label={'To-Do List'} src="src/assets/todo.png">
            <CardContent
              linkPage={'https://francoasalinas.github.io/To-Do-List/'}
              desc="To-Do list using drag & drop"
            />
          </Card>
          <Card label={'Weather App'} src="src/assets/weather.png">
            <CardContent
              desc="Weather App using Weather API"
              linkPage={'https://francoasalinas.github.io/Weather-app/'}
            />
          </Card>
          <Card label="WebPage Project" src="src/assets/webpage.png" cover>
            <CardContent
              desc="First Webpage I made, I used vanilla Javascript"
              linkPage="https://francoasalinas.github.io/webpage-project/"
            />
          </Card>
          <Card label="Calculator" src="src/assets/calculator.png">
            <CardContent
              desc="The legendary calculator, my first project, learned a lot making this one"
              linkPage="https://francoasalinas.github.io/calcProject/"
            />
          </Card>
          <Card label="Change Game" src="src/assets/change.png">
            <CardContent
              desc="This is a game I made for a friend who got a job as a cashier, he wanted some practice at returning the change, so I made him this one using vanilla Javascript."
              linkPage="https://francoasalinas.github.io/Generador-de-Vueltos/"
            />
          </Card>
          <Card label="Wattpad Clone" src="src/assets/wattpad.png" cover>
            <CardContent
              desc="This was my first try cloning a webpage, I used React and SCSS"
              linkPage="https://francoasalinas.github.io/Wattpad-clone/"
            />
          </Card>
        </CardsContainer>
      </div>
    </div>
  );
}
