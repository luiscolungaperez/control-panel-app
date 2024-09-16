import { Pagination } from '@/components/common/pagination';
import { UserList } from '@/components/users/userList';
import { useUsers } from './hook';
import styles from './style.module.css';

const Users: React.FC = () => {
  const { userLoading, usersData, filters, updatePage, sectionRef } =
    useUsers();

  if (userLoading) {
    return <>loading</>;
  }

  return (
    <section ref={sectionRef} className={styles.users}>
      <span className={styles.title}>Users list</span>
      {usersData && (
        <UserList users={usersData?.results} total={filters.total} />
      )}
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
