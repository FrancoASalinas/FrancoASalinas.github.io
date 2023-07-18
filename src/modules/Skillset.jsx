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
                <img src={html} className="w-8  h-8"></img>
                <img src={css} className="w-5  h-8"></img>
                HTML & CSS
              </div>
              <div className="w-8 h-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={() => setAccordion((prev) => (prev !== 1 ? 1 : 0))}
                  className={`fa-solid w-full h-full ${
                    accordion === 1 ? ' rotate-90' : ' rotate-0'
                  } fa-angle-right hover:bg-details rounded-full px-3 py-2 transition-all cursor-pointer self-end`}
                  viewBox="0 0 320 512"
                >
                  <path
                    fill="currentColor"
                    d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"
                  />
                </svg>
              </div>
            </span>
            <ul
              className={`${
                accordion === 1
                  ? 'visible w-full h-full translate-y-0'
                  : 'invisible w-0 h-0 -translate-y-full'
              } transition-all relative z-0`}
            >
              <li className="w-full p-3 flex gap-5">
                -Tailwind <img src={tailwind} className=" w-8  h-9 "></img>
              </li>
              <li className="p-3 w-full flex gap-5">
                -Sass <img src={sass} className=" w-8  h-8"></img>
              </li>
            </ul>
          </li>
          <li className=" flex flex-col group">
            <span className="flex justify-between relative z-10 bg-[#111] w-full p-3">
              <div className="flex gap-3 items-center">
                <img src={js} className=" w-8  h-8"></img>
                <img className="group-hover:translate-x-0 w-5  h-5 invisible"></img>
                Javascript
              </div>

              <div className="w-8 h-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={() => setAccordion((prev) => (prev !== 2 ? 2 : 0))}
                  className={`fa-solid w-full h-full ${
                    accordion === 2 ? ' rotate-90' : ' rotate-0'
                  } fa-angle-right hover:bg-details rounded-full px-3 py-2 transition-all cursor-pointer self-end`}
                  viewBox="0 0 320 512"
                >
                  <path
                    fill="currentColor"
                    d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"
                  />
                </svg>
              </div>
            </span>
            <ul
              className={`${
                accordion === 2
                  ? 'visible w-full h-full translate-y-0'
                  : 'invisible w-0 h-0 -translate-y-full'
              } transition-all relative z-0`}
            >
              <li className="w-full p-3 flex gap-5">
                -React <img src={react} className=" w-8  h-8"></img>
              </li>
            </ul>
          </li>
          <li className=" flex flex-col group">
            <span className="flex justify-between relative z-10 bg-[#111] w-full p-3">
              <div className="flex gap-3 items-center">
                <img src={git} className=" w-8  h-8"></img>
                <img className="group-hover:translate-x-0 w-5  h-5 invisible"></img>
                Git
              </div>

              <div className="w-8 h-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={() => setAccordion((prev) => (prev !== 3 ? 3 : 0))}
                  className={`fa-solid w-full h-full ${
                    accordion === 3 ? ' rotate-90' : ' rotate-0'
                  } fa-angle-right hover:bg-details rounded-full px-3 py-2 transition-all cursor-pointer self-end`}
                  viewBox="0 0 320 512"
                >
                  <path
                    fill="currentColor"
                    d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"
                  />
                </svg>
              </div>
            </span>
            <ul
              className={`${
                accordion === 3
                  ? 'visible w-full h-full translate-y-0'
                  : 'invisible w-0 h-0 -translate-y-full'
              } transition-all relative z-0`}
            >
              <li className="w-full p-3 flex gap-5">
                Github <img src={github} className=" w-8  h-8"></img>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </section>
  );
}
