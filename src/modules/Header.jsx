import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [nav, setNav] = useState(false);
  const [contact, setContact] = useState(false);

  const LinkItem = ({ to, label }) => (
    <li>
      <Link onClick={handleClick} className="w-full block py-4 px-2" to={to}>
        {label}
      </Link>
    </li>
  );

  function handleClick() {
    setNav((prev) => !prev);
  }

  function handleContact() {
    setContact((prev) => !prev);
  }

  return (
    <header className="bg-secondary items-center h-20 w-full flex justify-between text-2xl text-primary relative drop-shadow-lg">
      <h2 className="">Franco Miño</h2>
      <button className="h-16 w-16 " onClick={handleClick}>
        <i className="fa-solid fa-bars "></i>
      </button>{' '}
      <nav
        className={
          nav
            ? 'bg-secondary absolute top-full w-60 h-screen right-0 translate-x-0 transition-all  z-10'
            : 'bg-secondary invisible absolute top-full -right-full transition-all h-screen w-40'
        }
      >
        <ul className=" divide-y-2 bg-secondary divide-details  relative z-10">
          <LinkItem label={'Home'} to="/" />
          <LinkItem label={'Projects / works'} to="Works" />
          <LinkItem label={'About Me'} to="about" />
          <li onClick={handleContact}>
            <a className="w-full block py-4 px-2">
              Contact{' '}
              <i
                className={
                  contact
                    ? 'fa-solid fa-caret-right transition-all rotate-90'
                    : 'fa-solid fa-caret-right  transition-all'
                }
              ></i>
            </a>
          </li>
        </ul>
        <ul
          className={
            contact
              ? 'divide-y-2 divide-details translate-y-0 transition-all relative z-0 text-xl'
              : 'divide-y-2 divide-details -translate-y-full transition-all invisible relative z-0 text-xl'
          }
        >
          <li>
            <a className="flex justify-between w-full  py-4 px-2">
              <i className="fa-regular fa-envelope"></i>
              <span>E-mail me</span>
            </a>
          </li>
          <li>
            <a className="flex justify-between w-full  py-4 px-2">
              <i className="fa-brands fa-github"></i>
              <span>Github</span>
            </a>
          </li>
          <li>
            <a className="flex justify-between w-full  py-4 px-2">
              <i className="fa-brands fa-linkedin"></i>
              <span>LinkedIn</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
