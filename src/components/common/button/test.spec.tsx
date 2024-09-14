import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { GiHamburgerMenu } from 'react-icons/gi';

import { afterEach, describe, expect, it, vi } from 'vitest';
import { Button } from '.';

describe('Button Component', () => {
  afterEach(() => {
    cleanup();
  });

  it('Should show text passing by props', () => {
    render(<Button text='Hello, world!' type='button' />);
    expect(screen.getByText('Hello, world!')).toBeInTheDocument();
  });

  it('Should call function when click the button', () => {
    const handleClick = vi.fn();

    render(<Button onClick={handleClick} />);

    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('Should not call function when button is disabled', () => {
    const handleClick = vi.fn();

    render(<Button onClick={handleClick} disabled />);

    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).not.toHaveBeenCalled();
  });

  it('Should show a icon passing by prop', () => {
    render(<Button icon={<GiHamburgerMenu data-testid='icon-svg' />} />);

    const svgElement = screen.getByTestId('icon-svg');
    expect(svgElement).toBeInTheDocument();
  });
});
