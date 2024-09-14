import { Form } from '@/types/Form';
import { loginSchema } from '@/utils/validations/login.schema';
import { yupResolver } from '@hookform/resolvers/yup';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { FieldValues, Resolver, useForm } from 'react-hook-form';
import { afterEach, describe, expect, it } from 'vitest';
import { FormInput } from '.';

const renderWithForm = (props: Partial<Form.FormInputProps> = {}) => {
  const Wrapper = () => {
    const { control, register, handleSubmit } = useForm<FieldValues>({
      resolver: yupResolver(loginSchema) as unknown as Resolver<FieldValues>,
    });

    return (
      <form onSubmit={handleSubmit(() => {})}>
        <FormInput
          name='email'
          control={control}
          register={register}
          label='Email'
          required={true}
          type='email'
          {...props}
        />
        <button type='submit'>Submit</button>
      </form>
    );
  };

  return render(<Wrapper />);
};

describe('Input Component', () => {
  afterEach(() => {
    cleanup();
  });

  it('should render the label when there is no value', () => {
    renderWithForm();
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
  });

  it('should display an error message when required field is empty', async () => {
    renderWithForm();

    fireEvent.submit(screen.getByText('Submit'));

    expect(
      await screen.findByText(/Este campo es requerido./i),
    ).toBeInTheDocument();
  });
});
