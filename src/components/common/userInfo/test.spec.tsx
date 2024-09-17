import { person } from '@/utils/constants/person';
import { cleanup, render, screen } from '@testing-library/react';
import { TCountryCode } from 'countries-list';
import { MemoryRouter } from 'react-router-dom';
import { afterEach, describe, expect, it } from 'vitest';
import { UserInfo } from '.';

describe('User info component', () => {
  const { results } = person;

  afterEach(() => {
    cleanup();
  });

  it('Should show a user image', () => {
    render(
      <MemoryRouter>
        <UserInfo
          avatar={results[0].picture.large}
          location={results[0].location}
          name={`${results[0].name.first} ${results[0].name.last}`}
          nationality={results[0].nat as TCountryCode}
          gender={results[0].gender}
          age={results[0].dob.age}
          redirect={false}
        />
        ,
      </MemoryRouter>,
    );

    expect(screen.getByAltText(/Jennie Nichols/)).toBeInTheDocument();
  });

  it('Should show a flag image', () => {
    render(
      <MemoryRouter>
        <UserInfo
          avatar={results[0].picture.large}
          location={results[0].location}
          name={`${results[0].name.first} ${results[0].name.last}`}
          nationality={results[0].nat as TCountryCode}
          gender={results[0].gender}
          redirect={false}
          age={results[0].dob.age}
        />
      </MemoryRouter>,
    );

    expect(screen.getByAltText(/United States/)).toBeInTheDocument();
  });

  it('Should show a correct user name', () => {
    render(
      <MemoryRouter>
        <UserInfo
          avatar={results[0].picture.large}
          location={results[0].location}
          name={`${results[0].name.first} ${results[0].name.last}`}
          nationality={results[0].nat as TCountryCode}
          gender={results[0].gender}
          redirect={false}
          age={results[0].dob.age}
        />
      </MemoryRouter>,
    );

    expect(screen.getByText(/Jennie Nichols/)).toBeInTheDocument();
  });
});
