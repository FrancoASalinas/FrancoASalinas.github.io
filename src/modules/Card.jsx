import { Children } from 'react';

export default function Card({ label, desc, pagelink, codelink, src }) {
  return (
    <div className="border border-[#aaa] rounded-3xl p-3 flex flex-col items-center w-[18rem] lg:w-[24rem] place-self-center pb-10">
      <h3 className="text-primary mb-2">{label}</h3>
      <div className="border relative border-[#aaa] group object-contain w-[80%] h-auto rounded-3xl z-0">
        <div className="absolute w-full h-full rounded-3xl bg-black group-hover:bg-opacity-70 group-hover:visible invisible z-10 duration-200 bg-opacity-0 grid justify-center items-center">
          <p className="text-center">{desc}</p>
          <div className="lg:flex grid justify-center">
            {pagelink && (
              <button className="bg-primary text-secondary rounded-md p-1 m-1">
                <a href={pagelink} target="_blank">
                  Visit the Page
                </a>
              </button>
            )}
            {codelink && (
              <button className="bg-primary text-secondary rounded-md p-1 m-1">
                <a href={codelink} target="_blank">
                  Watch the Code
                </a>
              </button>
            )}
            {...Children}
          </div>
        </div>
        <div>
          <img src={src} alt="" className="rounded-3xl aspect-square" />
        </div>
      </div>
    </div>
  );
}
