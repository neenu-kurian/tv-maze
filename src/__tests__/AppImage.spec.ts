import { render } from '@testing-library/vue';
import AppImage from '@/components/AppImage.vue';
import { describe, it, expect } from 'vitest';

describe('AppImage.vue', () => {
  it('matches snapshot', () => {
    const { container } = render(AppImage, {
      props: {
        src:'https://static.tvmaze.com/uploads/images/original_untouched/0/73.jpg' ,
        alt: 'Glee Image',
      },
    });
    expect(container).toMatchSnapshot();
  });
});
