import { Modal } from '@/components/common/modal';
import { Pagination } from '@/components/common/pagination';
import { DeleteConfirm } from '@/components/users/deleteConfirm';
import { UserFilters } from '@/components/users/userFilters';
import { UserList } from '@/components/users/userList';
import { useUsers } from './hook';
import styles from './style.module.css';

const Users: React.FC = () => {
  const {
    usersData,
    userLoading,
    updatePage,
    filters,
    sectionRef,
    handleIsOpenModal,
  } = useUsers();

  if (userLoading) {
    return <>loading</>;
  }

  return (
    <>
      <section ref={sectionRef} className={styles.users}>
        <span className={styles.title}>Users list</span>
        <span>User total: {filters.total}</span>
        <UserFilters />
        {usersData && <UserList users={usersData?.results} />}
        <Pagination
          total={filters.total}
          currentPage={filters.currentPage}
          limit={filters.limit}
          maxVisiblePages={6}
          updatePage={updatePage}
        />
      </section>
      <Modal isOpen={filters.modalIsOpen} onClose={handleIsOpenModal}>
        {filters.actionName.type === 'message' ? (
          <>delete</>
        ) : (
          <DeleteConfirm />
        )}
      </Modal>
    </>
  );
};

export default Users;
