import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { Skills } from '.';
import { SkillsProps } from '../../shared-types/shared-types';

const props: SkillsProps = {
  title: 'any',
};

describe('<Skills />', () => {
  it('should render', () => {
    renderTheme(<Skills {...props} />);

    expect(screen.getByRole('heading', { name: 'Oi' })).toBeInTheDocument();
  });
});
