import { person } from '@/utils/constants/person';
import { cleanup, render, screen } from '@testing-library/react';
import { TCountryCode } from 'countries-list';
import { afterEach, describe, expect, it } from 'vitest';
import { UserInfo } from '.';

describe('User info component', () => {
  const { results } = person;

  afterEach(() => {
    cleanup();
  });

  it('Should show a user image', () => {
    render(
      <UserInfo
        avatar={results[0].picture.large}
        location={results[0].location}
        name={`${results[0].name.first} ${results[0].name.last}`}
        nationality={results[0].nat as TCountryCode}
      />,
    );

    expect(screen.getByAltText(/Jennie Nichols/)).toBeInTheDocument();
  });

  it('Should show a flag image', () => {
    render(
      <UserInfo
        avatar={results[0].picture.large}
        location={results[0].location}
        name={`${results[0].name.first} ${results[0].name.last}`}
        nationality={results[0].nat as TCountryCode}
      />,
    );

    expect(screen.getByAltText(/United States/)).toBeInTheDocument();
  });

  it('Should show a correct user name', () => {
    render(
      <UserInfo
        avatar={results[0].picture.large}
        location={results[0].location}
        name={`${results[0].name.first} ${results[0].name.last}`}
        nationality={results[0].nat as TCountryCode}
      />,
    );

    expect(screen.getByText(/Jennie Nichols/)).toBeInTheDocument();
  });
});
