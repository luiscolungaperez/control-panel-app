import { people } from '@/utils/constants/people';
import { cleanup, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { afterEach, describe, expect, it } from 'vitest';
import { UserList } from '.';

describe('Card component', () => {
  afterEach(() => {
    cleanup();
  });

  it('Should render a list of users', async () => {
    render(
      <MemoryRouter>
        <UserList users={people.results} />
      </MemoryRouter>,
    );

    expect(await screen.findByText(/Bogdan Gucalo/)).toBeInTheDocument();
    expect(await screen.findByText(/Slaviša Rukavina/)).toBeInTheDocument();
  });
});
