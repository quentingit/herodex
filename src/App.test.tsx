import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import App from './App';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { useSuperhero } from './hooks/useSuperhero';

// Mock du hook `useSuperhero`
vi.mock('./hooks/useSuperhero');

const createTestQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

describe('App Component', () => {
  beforeEach(() => {
    const mockUseSuperhero = {
      heroIds: [1, 2],
      searchError: null,
      showModal: false,
      addRandomHero: vi.fn(),
      removeHero: vi.fn(),
      searchHero: vi.fn(),
    };

    (useSuperhero as jest.Mock).mockReturnValue(mockUseSuperhero);
  });

  it('renders the title', () => {
    render(
      <QueryClientProvider client={createTestQueryClient()}>
        <App />
      </QueryClientProvider>
    );

    expect(screen.getByText(/Superhero Details/i)).toBeInTheDocument();
  });

  it('renders the hero cards', () => {
    render(
      <QueryClientProvider client={createTestQueryClient()}>
        <App />
      </QueryClientProvider>
    );

    // Vérifie que deux cartes sont rendues
    const cards = screen.getAllByText(/X Remove/i);
    expect(cards.length).toBe(2);
  });

  it('calls addRandomHero when the button is clicked', () => {
    const mockAddRandomHero = vi.fn();
    (useSuperhero as jest.Mock).mockReturnValue({
      heroIds: [1],
      searchError: null,
      showModal: false,
      addRandomHero: mockAddRandomHero,
      removeHero: vi.fn(),
      searchHero: vi.fn(),
    });

    render(
      <QueryClientProvider client={createTestQueryClient()}>
        <App />
      </QueryClientProvider>
    );

    const addButton = screen.getByText(/Add Random Hero/i);
    fireEvent.click(addButton);

    expect(mockAddRandomHero).toHaveBeenCalledTimes(1);
  });

  it('calls removeHero when the remove button is clicked', () => {
    const mockRemoveHero = vi.fn();
    (useSuperhero as jest.Mock).mockReturnValue({
      heroIds: [1],
      searchError: null,
      showModal: false,
      addRandomHero: vi.fn(),
      removeHero: mockRemoveHero,
      searchHero: vi.fn(),
    });

    render(
      <QueryClientProvider client={createTestQueryClient()}>
        <App />
      </QueryClientProvider>
    );

    const removeButton = screen.getByText(/X Remove/i);
    fireEvent.click(removeButton);

    expect(mockRemoveHero).toHaveBeenCalledWith(1);
  });

  it('calls searchHero when the search button is clicked', () => {
    const mockSearchHero = vi.fn();
    (useSuperhero as jest.Mock).mockReturnValue({
      heroIds: [],
      searchError: null,
      showModal: false,
      addRandomHero: vi.fn(),
      removeHero: vi.fn(),
      searchHero: mockSearchHero,
    });

    render(
      <QueryClientProvider client={createTestQueryClient()}>
        <App />
      </QueryClientProvider>
    );

    const input = screen.getByPlaceholderText(/Search hero by name/i);
    const searchButton = screen.getByText(/Search/i);

    fireEvent.change(input, { target: { value: 'Batman' } });
    fireEvent.click(searchButton);

    expect(mockSearchHero).toHaveBeenCalledWith('Batman');
  });
});
