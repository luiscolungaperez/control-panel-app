import ReactDOM from 'react-dom';

import { useEffect } from 'react';
import { MdClose } from 'react-icons/md';
import styles from './styles.module.css';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const Modal: React.FC<Props> = ({ isOpen, onClose, children }) => {
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

  if (!isOpen) return null;

  const closeModal = (e: React.MouseEvent) => {
    e.stopPropagation();
    onClose();
  };

  return ReactDOM.createPortal(
    <div className={styles['modal-overlay']} onClick={closeModal}>
      <div className={styles['modal-container']}>
        <button className={styles['close-button']} onClick={closeModal}>
          <MdClose size={24} />
        </button>
        {children}
      </div>
    </div>,
    document.body,
  );
};
