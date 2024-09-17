import { UsersContext } from '@/context/users/context';
import { useRequest } from '@/hooks';
import { RandomUser } from '@/types/Person';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useContext } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

export const useUser = () => {
  const { name } = useParams<{ name: string }>();
  const queryClient = useQueryClient();
  const context = useContext(UsersContext);
  const { filters } = context!;
  const navigate = useNavigate();
  const location = useLocation();

  const cachedUser = (
    queryClient.getQueryData([
      'users',
      filters.currentPage,
      filters.limit,
      filters.gender,
      filters.nat,
      filters.ages,
    ]) as RandomUser.Result | undefined
  )?.results.find(
    (user) =>
      user.name.first === name?.split(' ')[0] &&
      user.name.last === name?.split(' ')[1],
  );

  const { data: userData, isLoading: loadingUser } =
    useQuery<RandomUser.Person>({
      queryKey: ['user'],
      queryFn: async () => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const response = await useRequest<RandomUser.Result>();
        return response.results[0];
      },
      select: (data) => {
        if (data) {
          const newName = `${data.name.first} ${data.name.last}`;
          const newPath = `/user/${encodeURIComponent(newName)}`;

          if (location.pathname !== newPath) {
            navigate(newPath, { replace: true });
          }
        }
        return data;
      },
      enabled: !cachedUser,
    });

  return {
    user: cachedUser || userData,
    isLoading: loadingUser && !cachedUser,
  };
};
