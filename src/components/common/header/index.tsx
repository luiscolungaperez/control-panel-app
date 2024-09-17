import { Button } from '@/components/common/button';
import { GiHamburgerMenu } from 'react-icons/gi';
import { LuLogOut } from 'react-icons/lu';
import { useNavigate } from 'react-router-dom';
import styles from './style.module.css';

interface Props {
  handleMenu: () => void;
}

export const Header: React.FC<Props> = ({ handleMenu }) => {
  const navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.removeItem('Authorization');

    navigate('/login', { replace: true, unstable_flushSync: true });
  };

  return (
    <header className={styles.header}>
      <Button
        type='button'
        icon={<GiHamburgerMenu size={28} onClick={handleMenu} />}
      />

      <Button
        type='button'
        text='Log out'
        icon={<LuLogOut size={16} />}
        onClick={handleLogOut}
      />
    </header>
  );
};
