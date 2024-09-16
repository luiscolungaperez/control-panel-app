import { Pagination } from '@/components/common/pagination';
import { FilterUsers } from '@/components/users/filterUsers';
import { UserList } from '@/components/users/userList';
import { UsersProvider } from '@/context/users/context';
import { useUsers } from './hook';
import styles from './style.module.css';

const Wrapper = () => {
  const { usersData, userLoading, updatePage, filters, sectionRef } =
    useUsers();

  if (userLoading) {
    return <>loading</>;
  }

  return (
    <section ref={sectionRef} className={styles.users}>
      <span className={styles.title}>Users list</span>
      <span>User total: {filters.total}</span>
      <FilterUsers />
      {usersData && <UserList users={usersData?.results} />}
      <Pagination
        total={filters.total}
        currentPage={filters.currentPage}
        limit={filters.limit}
        maxVisiblePages={6}
        updatePage={updatePage}
      />
    </section>
  );
};

const Users: React.FC = () => {
  return (
    <UsersProvider>
      <Wrapper />
    </UsersProvider>
  );
};

export default Users;
