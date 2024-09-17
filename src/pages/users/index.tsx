import { Pagination } from '@/components/common/pagination';
import { FilterUsers } from '@/components/users/filterUsers';
import { UserList } from '@/components/users/userList';
import { useUsers } from './hook';
import styles from './style.module.css';

const Users: React.FC = () => {
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

export default Users;
