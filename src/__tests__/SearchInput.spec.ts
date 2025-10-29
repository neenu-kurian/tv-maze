import { render } from '@testing-library/vue';
import SearchInput from '@/components/SearchInput.vue';
import { describe, it, expect } from 'vitest';

describe('HomeView.vue', () => {
  it('matches snapshot', () => {
    const { container } = render(SearchInput, {
      props: {
        modelValue: '',
        placeholder: 'Search for TV shows...',
      },
    });
    expect(container).toMatchSnapshot();
  });
});
