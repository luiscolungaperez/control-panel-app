import { UserInfo } from '@/components/common/userInfo';
import { RandomUser } from '@/types/Person';
import { TCountryCode } from 'countries-list';

import styles from './styles.module.css';

interface Props {
  users: RandomUser.Person[];
}

export const UserList: React.FC<Props> = ({ users }) => {
  return (
    <>
      {!users.length ? (
        <span>No users</span>
      ) : (
        <article className={styles['user-list']}>
          {users?.map((person) => (
            <UserInfo
              key={person.login.uuid}
              avatar={`${person.picture.large}`}
              gender={person.gender}
              location={person.location}
              name={`${person.name.first} ${person.name.last}`}
              nationality={person.nat as TCountryCode}
              age={person.dob.age}
              redirect
            />
          ))}
        </article>
      )}
    </>
  );
};
