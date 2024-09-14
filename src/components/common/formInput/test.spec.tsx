import { Form } from '@/types/Form';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { FieldValues, useForm } from 'react-hook-form';
import { afterEach, describe, expect, it } from 'vitest';
import { FormInput } from '.';

const renderWithForm = (props: Partial<Form.FormInputProps> = {}) => {
  const Wrapper = () => {
    const { control, register, handleSubmit } = useForm<FieldValues>();

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
      await screen.findByText(/This field is required/i),
    ).toBeInTheDocument();
  });
});
