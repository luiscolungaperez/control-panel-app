import { FormInput } from '@/components/common/formInput';
import { FieldValues, useForm } from 'react-hook-form';
import styles from './style.module.css';

const Login = () => {
  const { control, register, handleSubmit } = useForm<FieldValues>();

  return (
    <main className={styles.main}>
      <form onSubmit={handleSubmit(() => {})}>
        <FormInput
          name='emial'
          label='Correo electronico'
          type='email'
          control={control}
          register={register}
          required
        />
        <FormInput
          name='text'
          label='Texto'
          type='text'
          control={control}
          register={register}
          required
        />

        <button type='submit'>Submit</button>
      </form>
    </main>
  );
};

export default Login;
