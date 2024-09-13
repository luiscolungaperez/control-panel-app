import { useRequest } from '@/hooks';
import { person } from '@/utils/constants/person';
import { describe, expect, it, Mock, vi } from 'vitest';

globalThis.fetch = vi.fn();

describe('useRequest', () => {
  it('Should return a mocked data', async () => {
    const mockData = person.results[0];

    (fetch as Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => mockData,
    });

    const data = await useRequest();

    expect(fetch).toHaveBeenCalledWith(import.meta.env.VITE_APP_API);
    expect(data).toEqual(mockData);
  });

  it('Should return fetch error', async () => {
    const mockError = new Error('Fetch failed');
    (fetch as Mock).mockRejectedValueOnce(mockError);

    expect(fetch).toHaveBeenCalledWith(import.meta.env.VITE_APP_API);
    await expect(useRequest()).rejects.toThrow('Fetch failed');
  });
});
