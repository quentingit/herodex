import { renderHook, act } from '@testing-library/react';
import { describe, it, expect, vi, afterEach } from 'vitest';
import { useSuperhero } from './useSuperhero';
import { searchHeroByName } from '../api/superheroApi';

vi.mock('../api/superheroApi', () => ({
  searchHeroByName: vi.fn(),
}));

afterEach(() => {
  vi.clearAllMocks();
});

describe('useSuperhero', () => {
  it('should initialize with a random hero ID', () => {
    const { result } = renderHook(() => useSuperhero());

    expect(result.current.heroIds.length).toBe(1);
    expect(typeof result.current.heroIds[0]).toBe('number');
  });

  it('should add a random hero', () => {
    const { result } = renderHook(() => useSuperhero());

    act(() => {
      result.current.addRandomHero();
    });

    expect(result.current.heroIds.length).toBe(2);
  });

  it('should remove a hero', () => {
    const { result } = renderHook(() => useSuperhero());

    const initialId = result.current.heroIds[0];

    act(() => {
      result.current.removeHero(initialId);
    });

    expect(result.current.heroIds.length).toBe(0);
  });

  describe('searchHero', () => {
    it('should show an error for an empty search query', async () => {
      const { result } = renderHook(() => useSuperhero());

      await act(async () => {
        await result.current.searchHero('');
      });

      expect(result.current.searchError).toBe(
        'Please enter a valid hero name.'
      );
      expect(result.current.showModal).toBe(true);
    });

    it('should not add duplicate hero IDs to heroIds', async () => {
      const initialHeroIds = [69];
      const newHeroIds = [69];
      (searchHeroByName as jest.Mock).mockResolvedValue(newHeroIds);

      const { result } = renderHook(() => useSuperhero());
      act(() => {
        result.current.heroIds.push(...initialHeroIds);
      });

      await act(async () => {
        await result.current.searchHero('Batman');
      });

      expect(result.current.heroIds.length).toBe(2);
      expect(result.current.searchError).toBe(null);
    });

    it('should call searchHero and add new hero IDs to the list', async () => {
      const mockHeroIds = [10, 20, 30];
      (searchHeroByName as jest.Mock).mockResolvedValue(mockHeroIds);

      const { result } = renderHook(() => useSuperhero());

      const initialHeroIds = result.current.heroIds;

      await act(async () => {
        await result.current.searchHero('batman');
      });

      expect(searchHeroByName).toHaveBeenCalledWith('batman');
      expect(result.current.heroIds).toEqual(
        expect.arrayContaining([...initialHeroIds, ...mockHeroIds])
      );
    });
  });
});
