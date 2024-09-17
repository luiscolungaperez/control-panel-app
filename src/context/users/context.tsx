import { createContext, useState } from 'react';

interface UsersContextType {
  filters: Filters.Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters.Filters>>;
  handleIsOpenModal: () => void;
  messages: Message.Message[];
  setMessages: React.Dispatch<React.SetStateAction<Message.Message[]>>;
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
    modalIsOpen: false,
    actionName: {
      type: '',
      name: '',
    },
  });

  const [messages, setMessages] = useState<Message.Message[]>([]);

  const handleIsOpenModal = () => {
    setFilters((prevData) => ({
      ...prevData,
      modalIsOpen: !prevData.modalIsOpen,
    }));
  };

  return (
    <UsersContext.Provider
      value={{ filters, setFilters, handleIsOpenModal, messages, setMessages }}>
      {children}
    </UsersContext.Provider>
  );
};

export { UsersContext, UsersProvider };
