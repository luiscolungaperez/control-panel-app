import { Aside } from '@/components/common/aside';
import { Header } from '@/components/common/header';
import { Outlet } from 'react-router-dom';
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
