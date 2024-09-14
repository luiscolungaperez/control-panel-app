import { Form } from '@/types/Form';
import { useController } from 'react-hook-form';

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
    <div>
      <label htmlFor={name}>{label}</label>

      <input
        id={name}
        type={type}
        autoComplete='off'
        {...register(name, { required })}
      />
      {error && <span>{error.message || 'This field is required'}</span>}
    </div>
  );
};
