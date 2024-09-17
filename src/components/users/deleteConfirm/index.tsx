import { Button } from '@/components/common/button';

import { UsersContext } from '@/context/users/context';
import { RandomUser } from '@/types/Person';
import { useQueryClient } from '@tanstack/react-query';
import { useContext } from 'react';
import styles from './styles.module.css';

export const DeleteConfirm: React.FC = () => {
  const queryClient = useQueryClient();
  const context = useContext(UsersContext);
  const { filters, setFilters, handleIsOpenModal } = context!;

  const deleteUser = () => {
    const namesArray = filters.actionName.name.split(' ');

    const newList = (
      queryClient.getQueryData([
        'users',
        filters.currentPage,
        filters.limit,
        filters.gender,
        filters.nat,
        filters.ages,
      ]) as RandomUser.Result
    )?.results?.filter(
      (user) =>
        user.name.first !== namesArray[0] && user.name.last !== namesArray[1],
    );

    queryClient.setQueryData(
      [
        'users',
        filters.currentPage,
        filters.limit,
        filters.gender,
        filters.nat,
        filters.ages,
      ],
      (oldData: RandomUser.Result) => {
        return {
          ...oldData,
          results: newList,
        };
      },
    );

    setFilters((prevData) => ({
      ...prevData,
      total: prevData.total--,
    }));

    handleIsOpenModal();
  };

  return (
    <article className={styles['delete-confirm']}>
      <span className={styles.title}> User Deletion Confirmation</span>
      <p className={styles.description}>
        Are you sure you want to delete this user? This action cannot be undone
        and will permanently remove the user's information from the system.
      </p>
      <div className={styles.actions}>
        <Button text='Cancel' onClick={handleIsOpenModal} />
        <Button text='Accept' onClick={deleteUser} />
      </div>
    </article>
  );
};
