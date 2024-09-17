import clsx from 'clsx';
import React from 'react';
import { LuUsers, LuUserSquare } from 'react-icons/lu';
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
      text: 'Profile',
      icon: <LuUserSquare size={32} />,
    },
    {
      to: '/',
      text: 'Users',
      icon: <LuUsers size={32} />,
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
