import { cleanup, render, screen } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';
import { afterEach, describe, expect, it } from 'vitest';
import { Navegation } from '.';

describe('Navigation Aside', () => {
  afterEach(() => {
    cleanup();
  });

  it('Should show 3 options in the menu when is open', () => {
    render(
      <MemoryRouter>
        <Navegation isOpen={true} handleMenu={() => {}} />
      </MemoryRouter>,
    );

    setTimeout(() => {
      expect(screen.getByText('Perfíl')).toBeInTheDocument();
      expect(screen.getByText('Usuarios')).toBeInTheDocument();
      expect(screen.getByText('Mensajes')).toBeInTheDocument();
    }, 1000);
  });

  it('Should not show options in the menu when is close', () => {
    render(
      <MemoryRouter>
        <Navegation isOpen={false} handleMenu={() => {}} />
      </MemoryRouter>,
    );

    setTimeout(() => {
      expect(screen.getByText('Perfíl')).not.toBeInTheDocument();
      expect(screen.getByText('Usuarios')).not.toBeInTheDocument();
      expect(screen.getByText('Mensajes')).not.toBeInTheDocument();
    }, 1000);
  });
});
