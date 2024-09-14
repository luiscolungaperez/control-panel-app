import { Button } from '@/components/common/button';
import { GiHamburgerMenu } from 'react-icons/gi';
import styles from './style.module.css';

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <Button type='button' icon={<GiHamburgerMenu size={28} />} />
    </header>
  );
};
