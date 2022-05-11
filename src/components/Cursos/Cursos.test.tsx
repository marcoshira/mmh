import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { Cursos } from '.';
import { CursosProps } from '../../shared-types/shared-types';

const props: CursosProps = {
  title: 'any',
};

describe('<Cursos />', () => {
  it('should render', () => {
    renderTheme(<Cursos {...props} />);

    expect(screen.getByRole('heading', { name: 'Oi' })).toBeInTheDocument();
  });
});
