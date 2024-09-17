import styles from './styles.module.css';

export const Message: React.FC<Message.Message> = ({ message, title }) => {
  return (
    <div className={styles.message}>
      <span className={styles.title}>Title: {title}</span>
      <span className={styles['message-text']}>Message: {message}</span>
    </div>
  );
};
