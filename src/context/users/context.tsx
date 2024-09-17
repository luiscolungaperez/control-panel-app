import { RandomUser } from '@/types/Person';
import { TCountryCode } from 'countries-list';
import { createContext, useState } from 'react';

interface Filters {
  total: number;
  currentPage: number;
  limit: number;
  gender: RandomUser.Gender;
  nat?: TCountryCode;
}

interface UsersContextType {
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
}

const UsersContext = createContext<UsersContextType | undefined>(undefined);

const UsersProvider = ({ children }: { children: React.ReactNode }) => {
  const [filters, setFilters] = useState<Filters>({
    total: 100,
    currentPage: 1,
    limit: 10,
    gender: undefined,
    nat: undefined,
  });

  return (
    <UsersContext.Provider value={{ filters, setFilters }}>
      {children}
    </UsersContext.Provider>
  );
};

export { UsersContext, UsersProvider };
