import { RefObject, useEffect, useState } from 'react';

export const useClickOutside = <T extends HTMLElement>(ref: RefObject<T>) => {
  const [isClickedOutside, setIsClickedOutside] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsClickedOutside(true);
      } else {
        setIsClickedOutside(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);

  return { isClickedOutside };
};
