import ReactDOM from 'react-dom';

import { useClickOutside } from '@/hooks';
import { useEffect, useRef } from 'react';
import { MdClose } from 'react-icons/md';
import styles from './styles.module.css';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const Modal: React.FC<Props> = ({ isOpen, onClose, children }) => {
  const wrapper = useRef<HTMLDivElement>(null);
  const { isClickedOutside } = useClickOutside(wrapper);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  useEffect(() => {
    if (isClickedOutside) onClose();
  }, [isClickedOutside, onClose]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className={styles['modal-overlay']}>
      <div ref={wrapper} className={styles['modal-container']}>
        <button className={styles['close-button']} onClick={onClose}>
          <MdClose size={24} />
        </button>
        {children}
      </div>
    </div>,
    document.body,
  );
};
