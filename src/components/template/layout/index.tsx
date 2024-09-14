import { Header } from '@/components/template/header';
import { Outlet } from 'react-router-dom';
import { Aside } from '../aside';
import styles from './style.module.css';

export const Layout: React.FC = () => {
  return (
    <div className={styles.layout}>
      <Header />
      <Aside />
      <main className={styles.content}>
        <Outlet />
      </main>
    </div>
  );
};
