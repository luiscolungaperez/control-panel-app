import { FormInput } from '@/components/common/formInput';
import { useLogin } from './hook';
import styles from './style.module.css';

const Login = () => {
  const { control, handleSubmit, onSubmit, register } = useLogin();

  return (
    <main className={styles.main}>
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
          label='Contraseña: '
          type='password'
          control={control}
          register={register}
          required
        />
        <button type='submit'>Iniciar sesión</button>
      </form>
    </main>
  );
};

export default Login;
