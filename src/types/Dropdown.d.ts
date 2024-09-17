import { ReactNode } from 'react';

declare namespace DropdownSpace {
  interface Option {
    value: string | number;
    label: string;
    icon?: ReactNode;
  }
}
