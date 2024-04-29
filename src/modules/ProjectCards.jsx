import Card from '../modules/Card';
import CardContent from '../modules/CardContent';
import change from '../assets/change.png';
import tictac from '../assets/tictac.png';
import weather from '../assets/weather.png';
import webpage from '../assets/webpage.png';
import todo from '../assets/todo.png';
import chelsea from '../assets/chelsea.png';
import football from '../assets/football.png';
import rickAndMorty from '../assets/rm.png';
import reciper from '../assets/reciper-narrow.png';
import sayIt from '../assets/SayItHome.png';

export const SayIt = () => (
    <Card label={'SayIt'} src={sayIt}>
      <CardContent
        linkCode='https://github.com/FrancoASalinas/Blog-Project'
        desc='Social Webpage where the user can do things like create posts and look for other users. This is my first fullstack project, I used node with express and PostgreSQL on the backend and react on the frontend.'
      />
    </Card>
  ),
  RickandMorty = () => (
    <Card label={'Rick and Morty DB'} src={rickAndMorty}>
      <CardContent
        linkCode='https://github.com/FrancoASalinas/rick-and-morty'
        linkPage={'https://rickandmorty-db.vercel.app/'}
        desc='NextJS app where the user can look for characters, locations and episodes of the Rick and Morty universe thanks to Rick and Morty API (GraphQL).'
      />
    </Card>
  ),
  FootballStats = () => (
    <Card label={'Football Stats'} src={football}>
      <CardContent
        linkCode='https://github.com/FrancoASalinas/FootballStats-v2'
        linkPage={'https://francoasalinas.github.io/FootballStats-v2/'}
        desc='PWA that uses Football API, showing stats for players, competitions and teams using React and Tailwind.'
      />
    </Card>
  ),
  Chelsea = () => (
    <Card label='Chelsea clone' src={chelsea} cover>
      <CardContent
        desc='Chelsea clone page with React and Tailwind'
        linkCode='https://github.com/FrancoASalinas/Chelsea-clone-project'
        linkPage='https://francoasalinas.github.io/Chelsea-clone-project/'
      />
    </Card>
  ),
  Reciper = () => (
    <Card label='Reciper' src={reciper} cover>
      <CardContent
        desc='Reciper is an app for resizing recipes, I used React and Tailwind.'
        linkCode='https://github.com/FrancoASalinas/Recipes-calculator/'
        linkPage='https://francoasalinas.github.io/Recipes-calculator/'
      />
    </Card>
  ),
  WebpageProject = () => (
    <Card label='WebPage Project' src={webpage} cover>
      <CardContent
        desc='First Webpage I made, I used vanilla Javascript'
        linkCode='https://github.com/FrancoASalinas/webpage-project'
        linkPage='https://francoasalinas.github.io/webpage-project/'
      />
    </Card>
  ),
  ChangeGame = () => (
    <Card label='Change Game' src={change}>
      <CardContent
        desc="This is a game that looks for simulating change returning, obviusly in it's core is a substraction game, I made this one using vanilla Javascript"
        linkCode='https://github.com/FrancoASalinas/Generador-de-Vueltos'
        linkPage='https://francoasalinas.github.io/Generador-de-Vueltos/'
      />
    </Card>
  ),
  ToDoList = () => (
    <Card label={'To-Do List'} src={todo}>
      <CardContent
        linkCode='https://github.com/FrancoASalinas/To-Do-List'
        linkPage={'https://francoasalinas.github.io/To-Do-List/'}
        desc='To-Do list using drag & drop'
      />
    </Card>
  ),
  TicTacToe = () => (
    <Card label={'Tic-Tac-Toe'} src={tictac}>
      <CardContent
        linkCode='https://github.com/FrancoASalinas/TicTacToe-project'
        linkPage={'https://francoasalinas.github.io/TicTacToe-project/'}
        desc='Tic-Tac-Toe game using vanilla Javascript'
      />
    </Card>
  ),
  Weather = () => (
    <Card label={'Weather App'} src={weather}>
      <CardContent
        linkCode='https://github.com/FrancoASalinas/Weather-app'
        desc='Weather App using Weather API'
        linkPage={'https://francoasalinas.github.io/Weather-app/'}
      />
    </Card>
  );
