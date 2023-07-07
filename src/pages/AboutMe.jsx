import me from '../assets/me1.jpg';

export default function AboutMe() {
  return (
    <div className=" mt-16 p-10 overflow-hidden bg-[#111] min-h-screen">
      <div className="flex flex-col lg:flex-row gap-6 items-center border p-5 border-details">
        <img className=" w-[25rem]  object-fit" src={me}></img>
        <p className="lg:text-xl text-[#aaa]">
          My name is Franco Andrés Salinas Miño, I'm a 19 years old Frontend
          Developer from Villaguay, Entre Ríos. Currently working on myself,
          improving my habilities as a programmer, with no experience in the
          industry yet. <br /> <br />
          At a more personal level I can say that I'm a videogames player since
          I was a child, and I think that's the reason for my deep desire of
          being constantly solving problems. I must also note that programming{' '}
          <strike>teached</strike> is teaching me very important things in
          addition to all the programming concepts: constance, perseverance,
          patience and a stronger mentality above all. The sum of these things
          grew in me a love for programming, and the most important, a constant
          love for improving and learning every day a little more.
        </p>
      </div>
    </div>
  );
}
