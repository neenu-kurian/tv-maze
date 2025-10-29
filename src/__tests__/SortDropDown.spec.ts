import { render } from '@testing-library/vue';
import SortDropDown from '@/components/SortDropdown.vue';
import { describe, it, expect } from 'vitest';
import { sortOptions } from './testdata';

describe('SortDropDown.vue', () => {
  it('matches snapshot', () => {
    const { container } = render(SortDropDown, {
      props: {
        options: sortOptions,
      },
    });
    expect(container).toMatchSnapshot();
  });
});
