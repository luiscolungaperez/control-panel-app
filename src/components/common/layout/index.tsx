import { Header } from '@/components/common/header';
import { Navegation } from '@/components/common/navegation';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import styles from './style.module.css';

export const Layout: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const updateIsOpen = () => {
    setIsOpen((value) => !value);
  };

  return (
    <>
      <Header handleMenu={updateIsOpen} />
      <Navegation isOpen={isOpen} handleMenu={updateIsOpen} />
      <main className={styles.main}>
        <Outlet />
      </main>
    </>
  );
};
