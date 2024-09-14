import { Form } from '@/types/Form';
import { useController } from 'react-hook-form';

import { clsx } from 'clsx';
import styles from './style.module.css';

export const FormInput: React.FC<Form.FormInputProps> = ({
  name,
  control,
  label,
  register,
  required,
  type,
}) => {
  const {
    fieldState: { error },
  } = useController({
    name,
    control,
  });

  return (
    <div className={styles.formInput}>
      <label
        className={clsx(styles.label, required && styles['label-required'])}
        htmlFor={name}>
        {label}
      </label>

      <input
        className={clsx(styles.input)}
        id={name}
        type={type}
        {...register(name, { required })}
      />
      {error && <span>{error.message || 'This field is required'}</span>}
    </div>
  );
};
