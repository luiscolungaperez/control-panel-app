import { useRequest } from '@/hooks';

import { RandomUser } from '@/types/Person';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useRef, useState } from 'react';

export const useUsers = () => {
  const [gender, setGender] = useState<RandomUser.Gender>(undefined);
  const sectionRef = useRef<HTMLDivElement>(null);

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

  const { data: usersData, isLoading: userLoading } =
    useQuery<RandomUser.Result>({
      queryKey: ['users', filters.currentPage, filters.limit, gender],
      queryFn: async () => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        return await useRequest<RandomUser.Result>(
          `?page=${filters.currentPage}&results=${filters.limit}&gender=${gender}`,
        );
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
    gender,
    setGender,
  };
};
