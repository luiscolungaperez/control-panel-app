import { createContext, useState } from 'react';

interface UsersContextType {
  filters: Filters.Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters.Filters>>;
}

const UsersContext = createContext<UsersContextType | undefined>(undefined);

const UsersProvider = ({ children }: { children: React.ReactNode }) => {
  const [filters, setFilters] = useState<Filters.Filters>({
    total: 100,
    currentPage: 1,
    limit: 10,
    gender: undefined,
    nat: undefined,
    ages: undefined,
  });

  return (
    <UsersContext.Provider value={{ filters, setFilters }}>
      {children}
    </UsersContext.Provider>
  );
};

export { UsersContext, UsersProvider };
