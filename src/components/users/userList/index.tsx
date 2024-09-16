import { UserInfo } from '@/components/common/userInfo';
import { RandomUser } from '@/types/Person';
import { TCountryCode } from 'countries-list';
import { FilterUsers } from '../filterUsers';

interface Props {
  users: RandomUser.Person[];
  total: number;
}

export const UserList: React.FC<Props> = ({ users, total = 0 }) => {
  return (
    <article>
      <span>User total: {total}</span>
      <FilterUsers />
      {users?.map((person) => (
        <UserInfo
          key={person.login.uuid}
          avatar={`${person.picture.large}`}
          gender={person.gender}
          location={person.location}
          name={`${person.name.first} ${person.name.last}`}
          nationality={person.nat as TCountryCode}
        />
      ))}
    </article>
  );
};
