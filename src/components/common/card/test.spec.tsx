import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { Card } from '.';

describe('Card component', () => {
  afterEach(() => {
    cleanup();
  });

  it('Should a children content', () => {
    render(<Card>Contenido</Card>);

    expect(screen.getByText(/Contenido/)).toBeInTheDocument();
  });

  it('Should a title by props', () => {
    render(<Card title='Titulo'>Contenido</Card>);

    expect(screen.getByText(/Titulo/)).toBeInTheDocument();
  });
});
