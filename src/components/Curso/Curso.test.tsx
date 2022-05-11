import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { CursoElement } from '.';
import { CursoProps } from '../../shared-types/shared-types';

const props: CursoProps = {
  title: 'any',
};

describe('<Curso />', () => {
  it('should render', () => {
    renderTheme(<CursoElement {...props} />);

    expect(screen.getByRole('heading', { name: 'Oi' })).toBeInTheDocument();
  });
});
