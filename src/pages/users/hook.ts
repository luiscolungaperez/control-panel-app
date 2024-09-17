import { UsersContext } from '@/context/users/context';
import { useRequest } from '@/hooks';

import { RandomUser } from '@/types/Person';
import { useQuery } from '@tanstack/react-query';
import { useContext, useEffect, useRef } from 'react';

export const useUsers = () => {
  const context = useContext(UsersContext);
  const { filters, setFilters, handleIsOpenModal } = context!;
  const sectionRef = useRef<HTMLDivElement>(null);

  const updatePage = (page: number) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      currentPage: page,
    }));
  };

  const { data: usersData, isLoading: userLoading } =
    useQuery<RandomUser.Result>({
      queryKey: [
        'users',
        filters.currentPage,
        filters.limit,
        filters.gender,
        filters.nat,
        filters.ages,
      ],
      queryFn: async () => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        return await useRequest<RandomUser.Result>(
          `?page=${filters.currentPage}&results=${filters.limit}&gender=${filters.gender}&nat=${filters.nat}`,
        );
      },
      select: (users) => {
        if (filters.ages) {
          const ages = filters.ages?.split('-');

          const min = Number(ages[0]);
          const max = Number(ages[1]);

          const filterAges = users.results.filter(
            (user) => user.dob.age >= min && user.dob.age <= max,
          );

          return {
            ...users,
            results: filterAges,
          };
        }

        return users;
      },
      gcTime: 1000 * 60 * 60,
      placeholderData: (previousData) => previousData,
      staleTime: Infinity,
      refetchOnMount: false,
      refetchOnReconnect: false,
    });

  useEffect(() => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }, [filters.currentPage]);

  return {
    usersData,
    userLoading,
    updatePage,
    filters,
    sectionRef,
    handleIsOpenModal,
  };
};
