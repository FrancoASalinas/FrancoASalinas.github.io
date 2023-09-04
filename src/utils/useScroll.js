import { useEffect } from 'react';
import { useState } from 'react';

function useScroll() {
  const [scrollProgress, setScrollProgress] = useState(1);
  let prevScroll = window.scrollY;

  useEffect(() => {
    const listener = (e) => {
      let currentScroll = window.scrollY;
      if (prevScroll > currentScroll) {
        setScrollProgress(1);
      } else if (prevScroll < currentScroll) {
        setScrollProgress(0);
      }
      prevScroll = currentScroll;
    };

    window.addEventListener('scroll', listener);

  }, []);

  return scrollProgress;
}

export default useScroll;
