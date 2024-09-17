import { UsersProvider } from '@/context/users/context';
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
      <UsersProvider>
        <MemoryRouter>
          <UserList users={people.results} />
        </MemoryRouter>
        ,
      </UsersProvider>,
    );

    expect(await screen.findByText(/Bogdan Gucalo/)).toBeInTheDocument();
    expect(await screen.findByText(/Slaviša Rukavina/)).toBeInTheDocument();
  });
});
