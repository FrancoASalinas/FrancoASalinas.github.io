import { useState } from 'react';
import css from '../assets/css.png';
import html from '../assets/html.png';
import js from '../assets/js.png';
import react from '../assets/react.png';
import sass from '../assets/sass.png';
import tailwind from '../assets/tailwind.png';
import git from '../assets/git.png';
import github from '../assets/github.png';

export default function Skillset() {
  const [accordion, setAccordion] = useState(0);

  return (
    <section className="space-y-10 pb-10">
      <h2 className="text-2xl">My Skillset</h2>
      <div className="sm:flex flex-col justify-center items-center">
        <ul className="w-full bg-[#111] divide-details divide-y overflow-hidden sm:w-1/2">
          <li className=" flex flex-col">
            <span className="flex justify-between relative z-10 bg-[#111] w-full p-3 ">
              <div className="flex gap-3 items-center">
                <img src={html} className="w-8  h-auto"></img>
                <img src={css} className="w-5  h-auto"></img>
                HTML & CSS
              </div>

              <i
                onClick={() => setAccordion((prev) => (prev !== 1 ? 1 : 0))}
                className={`fa-solid ${
                  accordion === 1 ? ' rotate-90' : ' rotate-0'
                } fa-angle-right hover:bg-details rounded-full px-3 py-2 transition-all cursor-pointer self-end`}
              ></i>
            </span>
            <ul
              className={`${
                accordion === 1
                  ? 'visible w-full h-full translate-y-0'
                  : 'invisible w-0 h-0 -translate-y-full'
              } transition-all relative z-0`}
            >
              <li className="w-full p-3 flex gap-5">
                -Tailwind <img src={tailwind} className=" w-8  h-auto "></img>
              </li>
              <li className="p-3 w-full flex gap-5">
                -Sass <img src={sass} className=" w-8  h-auto"></img>
              </li>
            </ul>
          </li>
          <li className=" flex flex-col group">
            <span className="flex justify-between relative z-10 bg-[#111] w-full p-3">
              <div className="flex gap-3 items-center">
                <img src={js} className=" w-8  h-auto"></img>
                <img className="group-hover:translate-x-0 w-5  h-auto invisible"></img>
                Javascript
              </div>

              <i
                onClick={() => setAccordion((prev) => (prev !== 2 ? 2 : 0))}
                className={`fa-solid ${
                  accordion === 2 ? ' rotate-90' : ' rotate-0'
                } fa-angle-right hover:bg-details rounded-full px-3 py-2 transition-all cursor-pointer`}
              ></i>
            </span>
            <ul
              className={`${
                accordion === 2
                  ? 'visible w-full h-full translate-y-0'
                  : 'invisible w-0 h-0 -translate-y-full'
              } transition-all relative z-0`}
            >
              <li className="w-full p-3 flex gap-5">
                -React <img src={react} className=" w-8  h-auto"></img>
              </li>
            </ul>
          </li>
          <li className=" flex flex-col group">
            <span className="flex justify-between relative z-10 bg-[#111] w-full p-3">
              <div className="flex gap-3 items-center">
                <img src={git} className=" w-8  h-auto"></img>
                <img className="group-hover:translate-x-0 w-5  h-auto invisible"></img>
                Git
              </div>

              <i
                onClick={() => setAccordion((prev) => (prev !== 3 ? 3 : 0))}
                className={`fa-solid ${
                  accordion === 3 ? ' rotate-90' : ' rotate-0'
                } fa-angle-right hover:bg-details rounded-full px-3 py-2 transition-all cursor-pointer`}
              ></i>
            </span>
            <ul
              className={`${
                accordion === 3
                  ? 'visible w-full h-full translate-y-0'
                  : 'invisible w-0 h-0 -translate-y-full'
              } transition-all relative z-0`}
            >
              <li className="w-full p-3 flex gap-5">
                Github <img src={github} className=" w-8  h-auto"></img>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </section>
  );
}
