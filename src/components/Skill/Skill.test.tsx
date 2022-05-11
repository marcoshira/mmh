import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { SkillElement } from '.';
import { SkillProps } from '../../shared-types/shared-types';

const props: SkillProps = {
  title: 'any',
};

describe('<Skill />', () => {
  it('should render', () => {
    renderTheme(<SkillElement {...props} />);

    expect(screen.getByRole('heading', { name: 'Oi' })).toBeInTheDocument();
  });
});
