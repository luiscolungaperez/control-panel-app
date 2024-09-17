import { UsersContext } from '@/context/users/context';
import { messageSchema } from '@/utils/validations/message.schema';
import { yupResolver } from '@hookform/resolvers/yup';
import { useContext } from 'react';

import { FieldValues, Resolver, SubmitHandler, useForm } from 'react-hook-form';

export const useMessageForm = () => {
  const context = useContext(UsersContext);
  const { filters, handleIsOpenModal, setMessages } = context!;

  const { control, register, handleSubmit, reset } = useForm<FieldValues>({
    resolver: yupResolver(messageSchema) as unknown as Resolver<FieldValues>,
  });

  const onSubmit: SubmitHandler<FieldValues> = ({ title, message }) => {
    setMessages((prevData) => [
      ...prevData,
      { title, message, user: filters.actionName.name },
    ]);

    reset();
    handleIsOpenModal();
  };

  return { control, register, handleSubmit, onSubmit };
};
