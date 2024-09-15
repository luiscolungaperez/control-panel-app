import { people } from '@/utils/constants/people';
import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { UserList } from '.';

describe('Card component', () => {
  afterEach(() => {
    cleanup();
  });

  it('Should render a list of users', async () => {
    render(<UserList users={people.results} />);

    expect(await screen.findByText(/Bogdan Gucalo/)).toBeInTheDocument();
    expect(await screen.findByText(/Slaviša Rukavina/)).toBeInTheDocument();
  });
});
