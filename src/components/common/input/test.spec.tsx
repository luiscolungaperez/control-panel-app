import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';

import { Input } from '@/components/common/input';

describe('Input component', () => {
  afterEach(() => {
    cleanup();
  });

  it('Should show label text for props', () => {
    render(<Input label='email' id='email' />);
    expect(screen.getByLabelText('email')).toBeInTheDocument();
  });

  it('Should not show label without label prop', () => {
    render(<Input id='email' />);
    expect(screen.queryByLabelText('email')).not.toBeInTheDocument();
  });
});
