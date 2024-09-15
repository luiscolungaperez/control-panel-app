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
  const options = [
    {
      to: '/profile',
      text: 'Perfíl',
      icon: <LuUserSquare size={32} />,
    },
    {
      to: '/',
      text: 'Usuarios',
      icon: <LuUsers size={32} />,
    },
    {
      to: '/messages',
      text: 'Mensajes',
      icon: <LuMessagesSquare size={32} />,
    },
  ];

  return (
    <aside
      className={clsx(
        styles.navigation,
        isOpen && styles.open,
        !isOpen && styles.close,
      )}>
      <nav className={styles.list}>
        {options.map((option) => (
          <Link
            key={option.to.slice(1)}
            className={styles.option}
            onClick={handleMenu}
            to={option.to}>
            {option.icon}
            {option.text}
          </Link>
        ))}
      </nav>
    </aside>
  );
};
