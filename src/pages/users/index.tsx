import { UserList } from '@/components/users/userList';
import { useUsers } from './hook';
import styles from './style.module.css';

const Users: React.FC = () => {
  const { userLoading, usersData } = useUsers();

  if (userLoading) {
    return <>loading</>;
  }

  return (
    <section className={styles.users}>
      <span className={styles.title}>Users list</span>
      {usersData && (
        <>
          <UserList users={usersData?.results} total={usersData.info.results} />
        </>
      )}
    </section>
  );
};

export default Users;
