import { FormInput } from '@/components/common/formInput';

import React from 'react';
import {
  Control,
  FieldValues,
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister,
} from 'react-hook-form';
import styles from './style.module.css';

interface Props {
  onSubmit: SubmitHandler<FieldValues>;
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues, undefined>;
  control: Control<FieldValues>;
}

export const Form: React.FC<Props> = ({
  onSubmit,
  register,
  handleSubmit,
  control,
}) => {
  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <FormInput
        name='email'
        label='Correo electronico:'
        type='email'
        control={control}
        register={register}
        required
      />
      <FormInput
        name='password'
        label='Contraseña:'
        type='password'
        control={control}
        register={register}
        required
      />
      <button type='submit'>Iniciar sesión</button>
    </form>
  );
};
