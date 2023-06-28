import { Link } from 'react-router-dom';

export default function Welcome() {
  return (
    <>
      <header className="bg-black p-5">
        <h1 className="text-5xl text-primary py-5 font font-title">
          Hi! my name is Franco
        </h1>
        <p className="text-2xl ">
          I'm a self-taught Frontend developer. Always looking ahead to learn
          new things.
        </p>
      </header>
      <article className="my-20 bg-secondary flex flex-col align-center p-3">
        <h2 className="text-2xl mb-10">These are some of my projects:</h2>
        <div className="flex flex-col align-center space-y-14">
          <Card label={'Webpage'} desc="" />
          <Card label={'Chelsae'} desc="" />
          <Card label={'Realtire'} desc="" />
          <Card label={'Forset'} desc="" />
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

function Card({ label, desc }) {
  return (
    <div className="border border-[#aaa] rounded-3xl p-3 flex flex-col items-center w-[18rem] ">
      <h3 className="text-primary mb-2">{label}</h3>
      <div className="border border-secondary object-contain w-60 h-auto rounded-3xl">
        <img src="https://picsum.photos/1000" alt="" className="rounded-3xl" />
      </div>
      <p className="text-center">{desc}</p>
    </div>
  );
}
