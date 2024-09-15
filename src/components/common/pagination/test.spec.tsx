import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { Pagination } from '.';

describe('Card component', () => {
  afterEach(() => {
    cleanup();
  });

  it('Should render all the buttons of number of pages', () => {
    render(
      <Pagination
        total={50}
        limit={10}
        currentPage={1}
        updatePage={() => {}}
      />,
    );

    // this task need +4 because it is default action buttons
    expect(screen.getAllByRole('button').length).toBe(5 + 4);
  });

  it('Should render current page active', () => {
    render(
      <Pagination
        total={50}
        limit={10}
        currentPage={1}
        updatePage={() => {}}
      />,
    );

    expect(screen.getByRole('button', { name: '1' })).toHaveClass(
      /current-page/,
    );
  });

  it('Should show first page when click first button', async () => {
    const updatePage = vi.fn();
    const page = 4;

    render(
      <Pagination
        total={50}
        limit={10}
        currentPage={page}
        updatePage={updatePage}
      />,
    );

    setTimeout(async () => {
      fireEvent.click(
        await screen.findByRole('button', { name: 'First page' }),
      );

      expect(page).toBe(1);
    }, 1000);
  });

  it('Should show last page when click last button', async () => {
    const updatePage = vi.fn();
    const page = 1;

    render(
      <Pagination
        total={50}
        limit={10}
        currentPage={page}
        updatePage={updatePage}
      />,
    );

    fireEvent.click(await screen.findByRole('button', { name: 'Last page' }));

    expect(updatePage).toHaveBeenCalledWith(5);
  });

  it('Should show next page when click next button', async () => {
    const updatePage = vi.fn();
    const page = 1;

    render(
      <Pagination
        total={50}
        limit={10}
        currentPage={page}
        updatePage={updatePage}
      />,
    );

    fireEvent.click(await screen.findByRole('button', { name: '2' }));
    expect(updatePage).toHaveBeenCalledWith(2);
  });

  it('Should show before page when click before button', async () => {
    const updatePage = vi.fn();
    const page = 2;

    render(
      <Pagination
        total={50}
        limit={10}
        currentPage={page}
        updatePage={updatePage}
      />,
    );

    fireEvent.click(await screen.findByRole('button', { name: '1' }));
    expect(updatePage).toHaveBeenCalledWith(1);
  });
});
