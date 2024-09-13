export const useRequest = async (endpoint?: string) => {
  const response = await fetch(
    `${import.meta.env.VITE_APP_API}${endpoint || ''}`,
  );

  return await response.json();
};
