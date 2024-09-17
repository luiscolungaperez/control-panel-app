import { UserInfo } from '@/components/common/userInfo';
import { UserContact } from '@/components/profile/userContact';
import { UserUbication } from '@/components/profile/userUbication';
import { TCountryCode } from 'countries-list';
import { useUser } from './hook';
import styles from './styles.module.css';

const User: React.FC = () => {
  const { user, isLoading } = useUser();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <section className={styles.user}>
      {user && (
        <>
          <UserInfo
            avatar={user.picture.large}
            location={user.location}
            nationality={user.nat as TCountryCode}
            name={`${user.name.first} ${user.name.last}`}
            gender={user.gender}
            age={user.dob.age}
            redirect={false}
          />
          <UserContact cell={user.cell} email={user.email} />
          <UserUbication location={user.location} />
        </>
      )}
    </section>
  );
};

export default User;
