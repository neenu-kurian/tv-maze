import { render, screen } from '@testing-library/vue';
import HomeView from '@/views/HomeView.vue';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { createPinia, setActivePinia } from 'pinia';
import { useShowsStore } from '@/store/shows';
import { showsByCategory } from './testdata.ts';
import '@testing-library/jest-dom';

vi.mock('@/components/ShowCard.vue', () => ({
  default: {
    template: '<div class="show-card" data-testid="show-card"></div>',
    props: ['show'],
  },
}));

const renderComponent = (props = {}) =>
  render(HomeView, {
    props,
    global: {
      stubs: {
        RouterLink: true,
      },
    },
  });

describe('HomeView.vue', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });
  it('matches snapshot', () => {
    const showsStore = useShowsStore();
    showsStore.$patch({
      showsByCategory,
    });
    const { container } = renderComponent();
    expect(container).toMatchSnapshot();
  });

  it('displays the loader', () => {
    const showsStore = useShowsStore();
    showsStore.$patch({
      loading: true,
      showsByCategory: {},
    });
    renderComponent();
    expect(screen.getByTestId('app-loader')).toBeInTheDocument();
  });

  it('displays shows by category when not searching', () => {
    const showsStore = useShowsStore();
    showsStore.$patch({
      showsByCategory,
    });
    renderComponent();
    Object.keys(showsByCategory).forEach(genre => {
      expect(screen.getByRole('heading', { name: genre })).toBeInTheDocument();
    });
    const showCards = screen.getAllByTestId('show-card');
    const totalShows = Object.values(showsByCategory).reduce((sum, shows) => sum + shows.length, 0);
    expect(showCards).toHaveLength(totalShows);
  });
   it('displays "No shows found" when there are no shows', () => {
    renderComponent({ showsByCategory: {} });
    expect(screen.getByText('No shows found')).toBeInTheDocument();
  });
});
