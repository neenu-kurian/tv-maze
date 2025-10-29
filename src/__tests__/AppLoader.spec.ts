import { render } from '@testing-library/vue';
import AppLoader from '@/components/AppLoader.vue';
import { describe, it, expect } from 'vitest';

describe('HomeView.vue', () => {
  it('matches snapshot', async () => {
    const { container } = render(AppLoader, {
      props: {
        message: 'Loading...',
      },
    });
    expect(container).toMatchSnapshot();
  });
});
