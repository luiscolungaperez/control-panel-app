import { yupResolver } from '@hookform/resolvers/yup';

import { loginSchema } from '@/utils/validations/login.schema';
import { FieldValues, Resolver, SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

export const useLogin = () => {
  const navigate = useNavigate();

  const { control, register, handleSubmit, reset } = useForm<FieldValues>({
    mode: 'onBlur',
    resolver: yupResolver(loginSchema) as unknown as Resolver<FieldValues>,
  });

  const onSubmit: SubmitHandler<FieldValues> = ({ email, password }) => {
    if (email === 'test@test.com' && password === 'test2023') {
      localStorage.setItem('Authorization', 'true');
      navigate('/');
      reset();
    }
  };

  return { control, register, handleSubmit, onSubmit };
};
