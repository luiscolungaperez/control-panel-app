import { useRequest } from '@/hooks';
import { RandomUser } from '@/types/Person';
import { useQuery } from '@tanstack/react-query';

export const useProfile = () => {
  const { data: profileData, isLoading: loadingProfile } =
    useQuery<RandomUser.Person>({
      queryKey: ['profile'],
      queryFn: async () => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const response = await useRequest<RandomUser.Result>();
        return response.results[0];
      },
      gcTime: 1000 * 60 * 60,
      staleTime: Infinity,
      refetchOnMount: false,
      refetchOnReconnect: false,
    });

  return { profileData, loadingProfile };
};
