import { render } from '@testing-library/vue';
import CastMember from '@/components/CastMember.vue';
import { CastMemberProp } from './testdata.ts';
import { describe, it, expect } from 'vitest';

describe('HomeView.vue', () => {
  it('matches snapshot', () => {
    const { container } = render(CastMember, {
      props: {
        member: CastMemberProp,
      },
    });
    expect(container).toMatchSnapshot();
  });
});
