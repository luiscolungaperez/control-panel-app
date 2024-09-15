import { useRequest } from '@/hooks';

import { RandomUser } from '@/types/Person';
import { useQuery } from '@tanstack/react-query';

export const useUsers = () => {
  const { data: usersData, isLoading: userLoading } =
    useQuery<RandomUser.Result>({
      queryKey: ['users'],
      queryFn: async () => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        return await useRequest<RandomUser.Result>('?page=1&results=2');
      },
      placeholderData: (previousData) => previousData,
      gcTime: 300000,
    });

  return { usersData, userLoading };
};
