import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { Dropdown } from '.';

describe('Card component', () => {
  afterEach(() => {
    cleanup();
  });

  it('Should render a dropdown with a value', () => {
    const dropdownAction = vi.fn();

    render(
      <Dropdown
        options={[{ label: 'Texto 1', value: 1 }]}
        value={1}
        label='Dropdowm'
        onClick={dropdownAction}
      />,
    );

    expect(screen.getByText('Texto 1')).toBeInTheDocument();
  });

  it('Should show option list', async () => {
    const dropdownAction = vi.fn();

    render(
      <Dropdown
        options={[
          { label: 'Texto 1', value: 1 },
          { label: 'Texto 2', value: 2 },
        ]}
        value={undefined}
        label='Dropdowm'
        onClick={dropdownAction}
      />,
    );

    fireEvent.click(screen.getByText(/Select a option/));

    expect(await screen.findByText(/Texto 1/)).toBeInTheDocument();
    expect(await screen.findByText(/Texto 2/)).toBeInTheDocument();
  });

  it('Should set a option', async () => {
    const dropdownAction = vi.fn();

    render(
      <Dropdown
        options={[
          { label: 'Texto 1', value: 1 },
          { label: 'Texto 2', value: 2 },
        ]}
        value={undefined}
        label='Dropdowm'
        onClick={dropdownAction}
      />,
    );

    fireEvent.click(screen.getByText(/Select a option/));

    expect(await screen.findByText(/Texto 1/)).toBeInTheDocument();
    expect(await screen.findByText(/Texto 2/)).toBeInTheDocument();

    fireEvent.click(await screen.findByRole('button', { name: /Texto 1/ }));

    expect(dropdownAction).toHaveBeenCalledWith(1);
    expect(dropdownAction).toHaveBeenCalledTimes(1);
  });
});
