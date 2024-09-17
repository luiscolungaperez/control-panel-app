import { FormInput } from '@/components/common/formInput';

import { Button } from '@/components/common/button';
import { useMessageForm } from './hook';
import styles from './styles.module.css';

export const MessageForm: React.FC = () => {
  const { control, register, handleSubmit, onSubmit } = useMessageForm();

  return (
    <article
      className={styles['message-form']}
      onClick={(e) => {
        e.stopPropagation();
      }}>
      <span className={styles.title}>Send Message to User</span>
      <p className={styles.description}>
        Use this option to send a message directly to another user. Whether you
        need to share important updates, ask questions, or provide information,
        your message will be delivered instantly.
      </p>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          name='title'
          label='Title:'
          type='text'
          control={control}
          register={register}
          required
        />
        <FormInput
          name='message'
          label='Message:'
          type='text'
          control={control}
          register={register}
          required
        />
        <Button type='submit' text='Send message' />
      </form>
    </article>
  );
};
