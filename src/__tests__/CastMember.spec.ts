import { render, screen } from '@testing-library/vue';
import CastMember from '@/components/CastMember.vue';
import { CastMemberProp } from './testdata.ts';
import { describe, it, expect, vi } from 'vitest';
import '@testing-library/jest-dom';

vi.mock('@/components/AppImage.vue', () => ({
  default: {
    template: `
      <div data-testid="app-image">
        <slot name="fallback">
          <div data-testid="image-fallback"></div>
        </slot>
      </div>
    `,
    props: ['src', 'alt']
  }
}));

vi.mock('@heroicons/vue/24/outline', () => ({
  UserIcon: {
    template: '<div data-testid="user-icon"></div>'
  }
}));

const renderComponent = () =>
  render(CastMember, {
    props: {
      member: CastMemberProp,
    }
  });

describe('CastMember.vue', () => {
  it('matches snapshot', () => {
    const { container } = renderComponent();
    expect(container).toMatchSnapshot();
  });
  it('displays the cast member name and character name', () => {
    renderComponent();

    expect(screen.getByText(CastMemberProp.person.name)).toBeInTheDocument();
    expect(screen.getByText(CastMemberProp.character.name)).toBeInTheDocument();
  });
});
