import { UserInfo } from '@/components/common/userInfo';
import { UserContact } from '@/components/profile/userContact';
import { UserUbication } from '@/components/profile/userUbication';
import { UsersContext } from '@/context/users/context';
import { RandomUser } from '@/types/Person';
import { useQueryClient } from '@tanstack/react-query';
import { TCountryCode } from 'countries-list';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import styles from './styles.module.css';

const User: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  const queryClient = useQueryClient();
  const context = useContext(UsersContext);
  const { filters } = context!;

  const user = (
    queryClient.getQueryData([
      'users',
      filters.currentPage,
      filters.limit,
      filters.gender,
    ]) as RandomUser.Result
  )?.results.find(
    (user) =>
      user.name.first === name?.split(' ')[0] &&
      user.name.last === name?.split(' ')[1],
  );
  // .find((user) => user.name.first );

  // const { loadingProfile, profileData } = useProfile();

  // if (loadingProfile) {
  //   return <>Loading</>;
  // }

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
          />
          <UserContact cell={user.cell} email={user.email} />
          <UserUbication location={user.location} />
        </>
      )}
    </section>
  );
};

export default User;
