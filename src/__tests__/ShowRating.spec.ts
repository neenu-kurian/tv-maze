import { render } from '@testing-library/vue';
import ShowRating from '@/components/ShowRating.vue';
import { describe, it, expect } from 'vitest';

describe('ShowRating.vue', () => {
  it('matches snapshot', () => {
    const { container } = render(ShowRating, {
      props: {
        score: 8.5,
      },
    });
    expect(container).toMatchSnapshot();
  });
});
