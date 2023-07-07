import { useState } from 'react';
import { LinkItem } from './LinkItem';

export default function MobileNav({ nav, onClick }) {
  const [contact, setContact] = useState(false);

  function handleContact() {
    setContact((prev) => !prev);
  }

  return (
    <nav
      className={
        nav
          ? 'md:hidden bg-secondary absolute top-full w-60 h-screen right-0 translate-x-0 transition-all  z-100'
          : 'md:hidden bg-secondary invisible absolute top-full -right-full transition-all h-screen w-40'
      }
    >
      <ul className=" divide-y-2 bg-secondary divide-details  relative z-10">
        <LinkItem
          label={'Home'}
          location={location}
          onClick={onClick}
          to="/Portfolio/"
        />
        <LinkItem
          label={'Projects / works'}
          onClick={onClick}
          location={location}
          to="/Portfolio/works"
        />
        <LinkItem
          label={'About Me'}
          onClick={onClick}
          location={location}
          to="/Portfolio/about"
        />
        <li onClick={handleContact} className="cursor-pointer">
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
          <a
            href="https://github.com/FrancoASalinas"
            target="_blank"
            className="flex justify-between w-full  py-4 px-2"
          >
            <i className="fa-brands fa-github"></i>
            <span>Github</span>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/franco-andres-salinas-mi%C3%B1o/"
            target="_blank"
            className="flex justify-between w-full  py-4 px-2"
          >
            <i className="fa-brands fa-linkedin"></i>
            <span>LinkedIn</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}
