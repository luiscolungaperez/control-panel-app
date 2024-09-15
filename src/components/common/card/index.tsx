import React from 'react';
import styles from './style.module.css';

interface Props {
  children: React.ReactNode;
}

export const Card: React.FC<Props> = ({ children }) => {
  return <section className={styles.card}>{children}</section>;
};
