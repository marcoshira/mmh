import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { Projects } from '.';
import { ProjectsProps } from '../../shared-types/shared-types';

const props: ProjectsProps = {
  title: 'any',
};

describe('<Projects />', () => {
  it('should render', () => {
    renderTheme(<Projects {...props} />);

    expect(screen.getByRole('heading', { name: 'Oi' })).toBeInTheDocument();
  });
});
