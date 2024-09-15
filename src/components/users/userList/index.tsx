import { UserInfo } from '@/components/common/userInfo';
import { RandomUser } from '@/types/Person';
import { TCountryCode } from 'countries-list';

import { Pagination } from '@/components/common/pagination';
import { useState } from 'react';
import styles from './style.module.css';

interface Props {
  users: RandomUser.Person[];
  total: number;
}

export const UserList: React.FC<Props> = ({ users, total = 0 }) => {
  const [filters, setFilters] = useState({
    total: 100,
    currentPage: 1,
    limit: 10,
  });

  const updatePage = (page: number) => {
    setFilters({
      ...filters,
      currentPage: page,
    });
  };

  return (
    <article className={styles['user-list']}>
      <span>User total: {total}</span>
      {users?.map((person) => (
        <UserInfo
          key={person.login.uuid}
          avatar={person.picture.large}
          gender={person.gender}
          location={person.location}
          name={`${person.name.first} ${person.name.last}`}
          nationality={person.nat as TCountryCode}
        />
      ))}
      <Pagination
        total={filters.total}
        currentPage={filters.currentPage}
        limit={filters.limit}
        maxVisiblePages={6}
        updatePage={updatePage}
      />
    </article>
  );
};
