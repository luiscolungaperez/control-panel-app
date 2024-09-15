export const useRequest = async <T>(endpoint?: string): Promise<T> => {
  const response = await fetch(
    `${import.meta.env.VITE_APP_API}${endpoint || ''}`,
  );

  return await response.json();
};
