import React from 'react';
import styles from './style.module.css';

interface Props {
  children: React.ReactNode;
  title?: string;
}

export const Card: React.FC<Props> = ({ children, title }) => {
  return (
    <section className={styles.card}>
      {title && <span className={styles.title}>{title}</span>}
      {children}
    </section>
  );
};
