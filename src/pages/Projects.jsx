import CardsContainer from '../modules/CardsContainer';
import {
  ChangeGame,
  Chelsea,
  FootballStats,
  Reciper,
  RickandMorty,
  SayIt,
  TicTacToe,
  ToDoList,
  Weather,
  WebpageProject,
  SlumberSync,
  WeatherExplorer,
} from '../modules/ProjectCards';

export default function Projects() {
  return (
    <>
      <div className=' my-28 sm:min-w-[640px] sm:w-3/4 mx-auto flex flex-col align-center p-5  '>
        <header className='text-3xl p-5 '>
          Here you can see all my projects:
        </header>
        <CardsContainer>
          <WeatherExplorer />
          <SlumberSync />
          <SayIt />
          <RickandMorty />
          <FootballStats />
          <Chelsea />
          <Reciper />
          <WebpageProject />
          <ChangeGame />
          <ToDoList />
          <TicTacToe />
          <Weather />
        </CardsContainer>
      </div>
    </>
  );
}
