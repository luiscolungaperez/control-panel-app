import clsx from 'clsx';
import React from 'react';
import { LuMessagesSquare, LuUsers, LuUserSquare } from 'react-icons/lu';
import { Link } from 'react-router-dom';
import styles from './style.module.css';

interface Props {
  isOpen: boolean;
}

export const Navegation: React.FC<Props> = ({ isOpen }) => {
  return (
    <aside
      className={clsx(
        styles.navigation,
        isOpen && styles.open,
        !isOpen && styles.close,
      )}>
      <ul className={styles.list}>
        <Link className={styles.option} to='/'>
          <LuUserSquare size={32} />
          Perfíl
        </Link>
        <Link className={styles.option} to='/'>
          <LuUsers size={32} />
          Usuarios
        </Link>
        <Link className={styles.option} to='/'>
          <LuMessagesSquare size={32} />
          Mensajes
        </Link>
      </ul>
    </aside>
  );
};
