import { UserInfo } from '@/components/common/userInfo';
import { RandomUser } from '@/types/Person';
import { TCountryCode } from 'countries-list';

interface Props {
  users: RandomUser.Person[];
}

export const UserList: React.FC<Props> = ({ users }) => {
  return (
    <article>
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
