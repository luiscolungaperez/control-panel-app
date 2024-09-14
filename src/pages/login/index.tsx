import { Form } from '@/components/login/form';
import { useLogin } from './hook';
import styles from './style.module.css';

const Login = () => {
  const { control, handleSubmit, onSubmit, register } = useLogin();

  return (
    <main className={styles.main}>
      <Form
        control={control}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        register={register}
      />
    </main>
  );
};

export default Login;
