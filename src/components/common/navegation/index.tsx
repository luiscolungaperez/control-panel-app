import clsx from 'clsx';
import React from 'react';
import { LuMessagesSquare, LuUsers, LuUserSquare } from 'react-icons/lu';
import { Link } from 'react-router-dom';
import styles from './style.module.css';

interface Props {
  isOpen: boolean;
  handleMenu: () => void;
}

export const Navegation: React.FC<Props> = ({ isOpen, handleMenu }) => {
  return (
    <aside
      className={clsx(
        styles.navigation,
        isOpen && styles.open,
        !isOpen && styles.close,
      )}>
      <nav className={styles.list}>
        <Link className={styles.option} onClick={handleMenu} to='/profile'>
          <LuUserSquare size={32} />
          Perfíl
        </Link>
        <Link className={styles.option} onClick={handleMenu} to='/users'>
          <LuUsers size={32} />
          Usuarios
        </Link>
        <Link className={styles.option} onClick={handleMenu} to='/messages'>
          <LuMessagesSquare size={32} />
          Mensajes
        </Link>
      </nav>
    </aside>
  );
};
