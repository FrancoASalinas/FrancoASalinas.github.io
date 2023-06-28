import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import MobileNav from './MobileNav';
import { LinkItem } from './LinkItem';

export default function Header() {
  const location = useLocation();

  const [nav, setNav] = useState(false);

  function handleClick() {
    setNav((prev) => !prev);
  }

  return (
    <header className="bg-secondary items-center h-20 w-full flex justify-between text-2xl text-primary relative drop-shadow-lg">
      <h2 className="">
        {'< '}Franco Miño{' />'}
      </h2>
      <button className="h-16 w-16 md:hidden" onClick={handleClick}>
        <i className="fa-solid fa-bars "></i>
      </button>{' '}
      <Nav />
      <MobileNav nav={nav} onClick={handleClick} />
    </header>
  );
}

function Nav() {
  return (
    <nav className="hidden w-max h-full md:flex items-center text-xl">
      <ul className="flex divide-x divide-gray-700 items-end h-full">
        <LinkItem label={'Home'} location={location} to="/" />
        <LinkItem label={'Projects / works'} location={location} to="/Works" />
        <LinkItem label={'About Me'} location={location} to="/about" />
        <li className="group relative cursor-pointer">
          <a className="w-full block py-4 px-2">
            Contact{' '}
            <i className=" fa-solid fa-caret-right group-hover:rotate-90 transition-all"></i>
          </a>
          <div className="absolute w-[10rem] right-0 h-max hidden group-hover:block">
            <ul className="divide-y-2 divide-details bg-secondary transition-all text-xl">
              <li className="">
                <a className="flex items-center justify-between w-full  py-4 px-2">
                  <i className="fa-regular fa-envelope"></i>
                  <span>E-mail me</span>
                </a>
              </li>
              <li className="">
                <a className="flex items-center justify-between w-full  py-4 px-2">
                  <i className="fa-brands fa-github"></i>
                  <span>Github</span>
                </a>
              </li>
              <li className="">
                <a className="flex items-center justify-between w-full  py-4 px-2">
                  <i className="fa-brands fa-linkedin"></i>
                  <span>LinkedIn</span>
                </a>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </nav>
  );
}
