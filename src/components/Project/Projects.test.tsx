import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { ProjectElement } from '.';
import { ProjectProps } from '../../shared-types/shared-types';

const props: ProjectProps = {
  title: 'any',
};

describe('<Projects />', () => {
  it('should render', () => {
    renderTheme(<ProjectElement {...props} />);

    expect(screen.getByRole('heading', { name: 'Oi' })).toBeInTheDocument();
  });
});
