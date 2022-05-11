import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { About, AboutProps } from '.';

const props: AboutProps = {
  title: 'any',
};

describe('<About />', () => {
  it('should render', () => {
    renderTheme(<About {...props} />);

    expect(screen.getByRole('heading', { name: 'Oi' })).toBeInTheDocument();
  });
});
