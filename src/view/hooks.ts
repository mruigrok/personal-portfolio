import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/** Automatically scroll to an anchor tag (#) on the current page */
export const useAutoScroll = () => {
  const { pathname, hash, key } = useLocation();
  useEffect(() => {
    /** If not a hash link, scroll to top, else scroll to id */
    if (hash === '') {
      window.scrollTo(0, 0);
      console.log('here');
    } else {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView();
        }
      }, 0);
    }
  }, [pathname, hash, key]); /** Do this on route change */
};
