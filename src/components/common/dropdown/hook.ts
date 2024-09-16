import { useClickOutside } from '@/hooks';
import { useEffect, useRef, useState } from 'react';

export const useDropdown = (onClick: (value?: string | number) => void) => {
  const wrapperRef = useRef(null);
  const { isClickedOutside } = useClickOutside(wrapperRef);

  const [isOpen, setIsOpen] = useState(false);

  const handleIsOpen = () => setIsOpen((value) => !value);

  const handleClick = (value?: string | number) => {
    if (value) {
      onClick(value);
    } else {
      onClick(undefined);
    }

    handleIsOpen();
  };

  useEffect(() => {
    if (isClickedOutside && isOpen) handleIsOpen();
  }, [isClickedOutside, isOpen]);

  return { wrapperRef, isOpen, handleIsOpen, handleClick };
};
