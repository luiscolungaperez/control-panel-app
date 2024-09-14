import { HTMLInputTypeAttribute } from 'react';
import {
  Control,
  FieldPath,
  FieldValues,
  UseFormRegister,
} from 'react-hook-form';

declare namespace Form {
  interface FormInputProps {
    name: FieldPath<FieldValues>;
    control: Control<FieldValues>;
    label: string;
    required: boolean;
    type: HTMLInputTypeAttribute;
    register: UseFormRegister<FieldValues>;
  }
}
