import { render } from '@testing-library/vue';
import HomeView from '@/views/HomeView.vue';
import { describe, it, expect, beforeEach } from 'vitest';
import { createPinia, setActivePinia } from 'pinia';
import { useShowsStore } from '@/store/shows';
import { showsByCategory } from './testdata.ts';

describe('HomeView.vue', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });
  it('matches snapshot', () => {
    const showsStore = useShowsStore();
    showsStore.$patch({
      showsByCategory,
    });
    const { container } = render(HomeView, {
      global: {
        stubs: {
          RouterLink: true,
        },

      },
    });
    expect(container).toMatchSnapshot();
  });
});
