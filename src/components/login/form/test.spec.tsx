import { cleanup, fireEvent, render, screen } from '@testing-library/react';

import { loginSchema } from '@/utils/validations/login.schema';
import { yupResolver } from '@hookform/resolvers/yup';

import {
  Control,
  FieldValues,
  Resolver,
  SubmitHandler,
  useForm,
  UseFormHandleSubmit,
  UseFormRegister,
} from 'react-hook-form';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { Form } from '.';

interface Props {
  onSubmit: SubmitHandler<FieldValues>;
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues, undefined>;
  control: Control<FieldValues>;
}

const renderWithForm = (props: Partial<Props> = {}) => {
  const Wrapper = () => {
    const { control, register, handleSubmit } = useForm<FieldValues>({
      resolver: yupResolver(loginSchema) as unknown as Resolver<FieldValues>,
    });

    const onSubmit = () => {};

    return (
      <Form
        control={control}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        register={register}
        {...props}
      />
    );
  };

  return render(<Wrapper />);
};

describe('Login Form', () => {
  afterEach(() => {
    cleanup();
  });

  it('Should show message error when the filds ar empty', async () => {
    const submit = vi.fn();
    renderWithForm({ onSubmit: submit });

    fireEvent.submit(screen.getByText(/Iniciar sesión/i));

    expect(await screen.findByText(/Email es requerido./i)).toBeInTheDocument();
    expect(
      await screen.findByText(/Contraseña es requerido./i),
    ).toBeInTheDocument();
  });

  it('should submit the form with correct data', async () => {
    const submit = vi.fn();
    renderWithForm({ onSubmit: submit });

    fireEvent.input(screen.getByLabelText(/Correo electronico:/i), {
      target: { value: 'test@test.com' },
    });

    fireEvent.input(screen.getByLabelText(/Contraseña:/i), {
      target: { value: 'test2023' },
    });

    fireEvent.click(screen.getByText('Iniciar sesión'));

    await screen.findByText('Iniciar sesión');

    expect(submit).toHaveBeenCalledWith(
      {
        email: 'test@test.com',
        password: 'test2023',
      },
      expect.anything(),
    );
  });
});
