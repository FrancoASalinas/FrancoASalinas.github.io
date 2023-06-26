import { Link } from 'react-router-dom';

export default function Welcome() {
  return (
    <>
      <header className="bg-black">
        <h1 className="text-5xl text-primary p-5 font font-title">
          Hi! my name is Franco
        </h1>
        <p className="text-2xl ">
          I'm a self-taught Frontend developer. Always looking ahead to learn
          new things.
        </p>
      </header>
      <article className="my-20">
        <h2 className="text-2xl">These are some of my projects:</h2>
        <div className="grid">
          <Card label={'Webpage'} />
          <Card label={'Chelsae'} />
          <Card label={'Realtire'} />
          <Card label={'Forset'} />
          <Link to="works">Click here to visit all my projects.</Link>
          <a href="#">Or here to visit my GitHub.</a>
        </div>
      </article>
    </>
  );
}

function Card({ label }) {
  return (
    <div className="border border-secondary rounded-3xl p-3 flex flex-col items-center my-10">
      <h3 className="text-primary mb-5">{label}</h3>
      <div className="border border-secondary object-contain w-60 h-auto rounded-3xl">
        <img src="https://picsum.photos/1000" alt="" className="rounded-3xl" />
      </div>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit..</p>
    </div>
  );
}
